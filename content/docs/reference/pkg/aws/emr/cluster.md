
---
title: "Cluster"
block_external_search_index: true
---



Provides an Elastic MapReduce Cluster, a web service that makes it easy to
process large amounts of data efficiently. See [Amazon Elastic MapReduce Documentation](https://aws.amazon.com/documentation/elastic-mapreduce/)
for more information.

To configure [Instance Groups](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-group-configuration.html#emr-plan-instance-groups) for [task nodes](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-master-core-task-nodes.html#emr-plan-task), see the [`aws.emr.InstanceGroup` resource](https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html).

> Support for [Instance Fleets](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-group-configuration.html#emr-plan-instance-fleets) will be made available in an upcoming release.

{{% examples %}}
## Example Usage
{{% example %}}

```typescript
import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

const cluster = new aws.emr.Cluster("cluster", {
    additionalInfo: `{
  "instanceAwsClientConfiguration": {
    "proxyPort": 8099,
    "proxyHost": "myproxy.example.com"
  }
}
`,
    applications: ["Spark"],
    bootstrapActions: [{
        args: [
            "instance.isMaster=true",
            "echo running on master node",
        ],
        name: "runif",
        path: "s3://elasticmapreduce/bootstrap-actions/run-if",
    }],
    configurationsJson: `  [
    {
      "Classification": "hadoop-env",
      "Configurations": [
        {
          "Classification": "export",
          "Properties": {
            "JAVA_HOME": "/usr/lib/jvm/java-1.8.0"
          }
        }
      ],
      "Properties": {}
    },
    {
      "Classification": "spark-env",
      "Configurations": [
        {
          "Classification": "export",
          "Properties": {
            "JAVA_HOME": "/usr/lib/jvm/java-1.8.0"
          }
        }
      ],
      "Properties": {}
    }
  ]
`,
    coreInstanceGroup: {
        autoscalingPolicy: `{
"Constraints": {
  "MinCapacity": 1,
  "MaxCapacity": 2
},
"Rules": [
  {
    "Name": "ScaleOutMemoryPercentage",
    "Description": "Scale out if YARNMemoryAvailablePercentage is less than 15",
    "Action": {
      "SimpleScalingPolicyConfiguration": {
        "AdjustmentType": "CHANGE_IN_CAPACITY",
        "ScalingAdjustment": 1,
        "CoolDown": 300
      }
    },
    "Trigger": {
      "CloudWatchAlarmDefinition": {
        "ComparisonOperator": "LESS_THAN",
        "EvaluationPeriods": 1,
        "MetricName": "YARNMemoryAvailablePercentage",
        "Namespace": "AWS/ElasticMapReduce",
        "Period": 300,
        "Statistic": "AVERAGE",
        "Threshold": 15.0,
        "Unit": "PERCENT"
      }
    }
  }
]
}
`,
        bidPrice: "0.30",
        ebsConfigs: [{
            size: 40,
            type: "gp2",
            volumesPerInstance: 1,
        }],
        instanceCount: 1,
        instanceType: "c4.large",
    },
    ebsRootVolumeSize: 100,
    ec2Attributes: {
        emrManagedMasterSecurityGroup: aws_security_group_sg.id,
        emrManagedSlaveSecurityGroup: aws_security_group_sg.id,
        instanceProfile: aws_iam_instance_profile_emr_profile.arn,
        subnetId: aws_subnet_main.id,
    },
    keepJobFlowAliveWhenNoSteps: true,
    masterInstanceGroup: {
        instanceType: "m4.large",
    },
    releaseLabel: "emr-4.6.0",
    serviceRole: aws_iam_role_iam_emr_service_role.arn,
    tags: {
        env: "env",
        role: "rolename",
    },
    terminationProtection: false,
});
```

The `aws.emr.Cluster` resource typically requires two IAM roles, one for the EMR Cluster
to use as a service, and another to place on your Cluster Instances to interact
with AWS from those instances. The suggested role policy template for the EMR service is `AmazonElasticMapReduceRole`,
and `AmazonElasticMapReduceforEC2Role` for the EC2 profile. See the [Getting
Started](https://docs.aws.amazon.com/ElasticMapReduce/latest/ManagementGuide/emr-gs-launch-sample-cluster.html)
guide for more information on these IAM roles. There is also a fully-bootable
example this provider configuration at the bottom of this page.

{{% /example %}}
{{% example %}}
### Enable Debug Logging

[Debug logging in EMR](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-debugging.html)
is implemented as a step. It is highly recommended to utilize [`ignoreChanges`](https://www.pulumi.com/docs/intro/concepts/programming-model/#ignorechanges) if other
steps are being managed outside of this provider.

```typescript
import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

const example = new aws.emr.Cluster("example", {
    steps: [{
        actionOnFailure: "TERMINATE_CLUSTER",
        hadoopJarStep: {
            args: ["state-pusher-script"],
            jar: "command-runner.jar",
        },
        name: "Setup Hadoop Debugging",
    }],
}, {ignoreChanges: ["stepConcurrencyLevel", "steps"]});
```

{{% /example %}}
{{% example %}}
### Multiple Node Master Instance Group

Available in EMR version 5.23.0 and later, an EMR Cluster can be launched with three master nodes for high availability. Additional information about this functionality and its requirements can be found in the [EMR Management Guide](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-ha.html).

```typescript
import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

// Map public IP on launch must be enabled for public (Internet accessible) subnets
const exampleSubnet = new aws.ec2.Subnet("example", {
    mapPublicIpOnLaunch: true,
});
const exampleCluster = new aws.emr.Cluster("example", {
    // core_instance_group must be configured
    coreInstanceGroup: {},
    ec2Attributes: {
        subnetId: exampleSubnet.id,
    },
    masterInstanceGroup: {
        // Master instance count must be set to 3
        instanceCount: 3,
    },
    // EMR version must be 5.23.0 or later
    releaseLabel: "emr-5.24.1",
    // Termination protection is automatically enabled for multiple masters
    // To destroy the cluster, this must be configured to false and applied first
    terminationProtection: true,
});
```

{{% /example %}}
{{% /examples %}}
## core_instance_group Configuration Block

Supported arguments for the `core_instance_group` configuration block:

* `instance_type` - (Required) EC2 instance type for all instances in the instance group.
* `autoscaling_policy` - (Optional) String containing the [EMR Auto Scaling Policy](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-automatic-scaling.html) JSON.
* `bid_price` - (Optional) Bid price for each EC2 instance in the instance group, expressed in USD. By setting this attribute, the instance group is being declared as a Spot Instance, and will implicitly create a Spot request. Leave this blank to use On-Demand Instances.
* `ebs_config` - (Optional) Configuration block(s) for EBS volumes attached to each instance in the instance group. Detailed below.
* `instance_count` - (Optional) Target number of instances for the instance group. Must be at least 1. Defaults to 1.
* `name` - (Optional) Friendly name given to the instance group.

## ec2_attributes

Attributes for the Amazon EC2 instances running the job flow

* `key_name` - (Optional) Amazon EC2 key pair that can be used to ssh to the master node as the user called `hadoop`
* `subnet_id` - (Optional) VPC subnet id where you want the job flow to launch. Cannot specify the `cc1.4xlarge` instance type for nodes of a job flow launched in a Amazon VPC
* `additional_master_security_groups` - (Optional) String containing a comma separated list of additional Amazon EC2 security group IDs for the master node
* `additional_slave_security_groups` - (Optional) String containing a comma separated list of additional Amazon EC2 security group IDs for the slave nodes as a comma separated string
* `emr_managed_master_security_group` - (Optional) Identifier of the Amazon EC2 EMR-Managed security group for the master node
* `emr_managed_slave_security_group` - (Optional) Identifier of the Amazon EC2 EMR-Managed security group for the slave nodes
* `service_access_security_group` - (Optional) Identifier of the Amazon EC2 service-access security group - required when the cluster runs on a private subnet
* `instance_profile` - (Required) Instance Profile for EC2 instances of the cluster assume this role

> **NOTE on EMR-Managed security groups:** These security groups will have any
missing inbound or outbound access rules added and maintained by AWS, to ensure
proper communication between instances in a cluster. The EMR service will
maintain these rules for groups provided in `emr_managed_master_security_group`
and `emr_managed_slave_security_group`; attempts to remove the required rules
may succeed, only for the EMR service to re-add them in a matter of minutes.
This may cause this provider to fail to destroy an environment that contains an EMR
cluster, because the EMR service does not revoke rules added on deletion,
leaving a cyclic dependency between the security groups that prevents their
deletion. To avoid this, use the `revoke_rules_on_delete` optional attribute for
any Security Group used in `emr_managed_master_security_group` and
`emr_managed_slave_security_group`. See [Amazon EMR-Managed Security
Groups](http://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-man-sec-groups.html)
for more information about the EMR-managed security group rules.

## kerberos_attributes

Attributes for Kerberos configuration

* `ad_domain_join_password` - (Optional) The Active Directory password for `ad_domain_join_user`. This provider cannot perform drift detection of this configuration.
* `ad_domain_join_user` - (Optional) Required only when establishing a cross-realm trust with an Active Directory domain. A user with sufficient privileges to join resources to the domain. This provider cannot perform drift detection of this configuration.
* `cross_realm_trust_principal_password` - (Optional) Required only when establishing a cross-realm trust with a KDC in a different realm. The cross-realm principal password, which must be identical across realms. This provider cannot perform drift detection of this configuration.
* `kdc_admin_password` - (Required) The password used within the cluster for the kadmin service on the cluster-dedicated KDC, which maintains Kerberos principals, password policies, and keytabs for the cluster. This provider cannot perform drift detection of this configuration.
* `realm` - (Required) The name of the Kerberos realm to which all nodes in a cluster belong. For example, `EC2.INTERNAL`

## instance_group

Attributes for each task instance group in the cluster

* `instance_role` - (Required) The role of the instance group in the cluster. Valid values are: `MASTER`, `CORE`, and `TASK`.
* `instance_type` - (Required) The EC2 instance type for all instances in the instance group
* `instance_count` - (Optional) Target number of instances for the instance group
* `name` - (Optional) Friendly name given to the instance group
* `bid_price` - (Optional) If set, the bid price for each EC2 instance in the instance group, expressed in USD. By setting this attribute, the instance group is being declared as a Spot Instance, and will implicitly create a Spot request. Leave this blank to use On-Demand Instances.
* `ebs_config` - (Optional) A list of attributes for the EBS volumes attached to each instance in the instance group. Each `ebs_config` defined will result in additional EBS volumes being attached to _each_ instance in the instance group. Defined below
* `autoscaling_policy` - (Optional) The autoscaling policy document. This is a JSON formatted string. See [EMR Auto Scaling](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-automatic-scaling.html)

## master_instance_group Configuration Block

Supported nested arguments for the `master_instance_group` configuration block:

* `instance_type` - (Required) EC2 instance type for all instances in the instance group.
* `bid_price` - (Optional) Bid price for each EC2 instance in the instance group, expressed in USD. By setting this attribute, the instance group is being declared as a Spot Instance, and will implicitly create a Spot request. Leave this blank to use On-Demand Instances.
* `ebs_config` - (Optional) Configuration block(s) for EBS volumes attached to each instance in the instance group. Detailed below.
* `instance_count` - (Optional) Target number of instances for the instance group. Must be 1 or 3. Defaults to 1. Launching with multiple master nodes is only supported in EMR version 5.23.0+, and requires this resource's `core_instance_group` to be configured. Public (Internet accessible) instances must be created in VPC subnets that have [map public IP on launch](https://www.terraform.io/docs/providers/aws/r/subnet.html#map_public_ip_on_launch) enabled. Termination protection is automatically enabled when launched with multiple master nodes and this provider must have the `termination_protection = false` configuration applied before destroying this resource.
* `name` - (Optional) Friendly name given to the instance group.

## ebs_config

Attributes for the EBS volumes attached to each EC2 instance in the `instance_group`

* `size` - (Required) The volume size, in gibibytes (GiB).
* `type` - (Required) The volume type. Valid options are `gp2`, `io1`, `standard` and `st1`. See [EBS Volume Types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html).
* `iops` - (Optional) The number of I/O operations per second (IOPS) that the volume supports
* `volumes_per_instance` - (Optional) The number of EBS volumes with this configuration to attach to each EC2 instance in the instance group (default is 1)

## bootstrap_action

* `name` - (Required) Name of the bootstrap action
* `path` - (Required) Location of the script to run during a bootstrap action. Can be either a location in Amazon S3 or on a local file system
* `args` - (Optional) List of command line arguments to pass to the bootstrap action script

## step

Attributes for step configuration

* `action_on_failure` - (Required) The action to take if the step fails. Valid values: `TERMINATE_JOB_FLOW`, `TERMINATE_CLUSTER`, `CANCEL_AND_WAIT`, and `CONTINUE`
* `hadoop_jar_step` - (Required) The JAR file used for the step. Defined below.
* `name` - (Required) The name of the step.

### hadoop_jar_step

Attributes for Hadoop job step configuration

* `args` - (Optional) List of command line arguments passed to the JAR file's main function when executed.
* `jar` - (Required) Path to a JAR file run during the step.
* `main_class` - (Optional) Name of the main class in the specified Java file. If not specified, the JAR file should specify a Main-Class in its manifest file.
* `properties` - (Optional) Key-Value map of Java properties that are set when the step runs. You can use these properties to pass key value pairs to your main function.



## Create a Cluster Resource

{{< chooser language "javascript,typescript,python,go,csharp" / >}}

{{% choosable language nodejs %}}
<div class="highlight"><pre class="chroma"><code class="language-typescript" data-lang="typescript"><span class="k">new </span><span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/aws/emr/#Cluster">Cluster</a></span><span class="p">(</span><span class="nx">name</span>: <span class="nx"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span><span class="p">, </span><span class="nx">args</span>: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/aws/emr/#ClusterArgs">ClusterArgs</a></span><span class="p">, </span><span class="nx">opts</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions">CustomResourceOptions</a></span><span class="p">);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language python %}}
<div class="highlight"><pre class="chroma"><code class="language-python" data-lang="python"><span class="k">def </span><span class="nf">Cluster</span><span class="p">(resource_name, opts=None, </span>additional_info=None<span class="p">, </span>applications=None<span class="p">, </span>autoscaling_role=None<span class="p">, </span>bootstrap_actions=None<span class="p">, </span>configurations=None<span class="p">, </span>configurations_json=None<span class="p">, </span>core_instance_count=None<span class="p">, </span>core_instance_group=None<span class="p">, </span>core_instance_type=None<span class="p">, </span>custom_ami_id=None<span class="p">, </span>ebs_root_volume_size=None<span class="p">, </span>ec2_attributes=None<span class="p">, </span>instance_groups=None<span class="p">, </span>keep_job_flow_alive_when_no_steps=None<span class="p">, </span>kerberos_attributes=None<span class="p">, </span>log_uri=None<span class="p">, </span>master_instance_group=None<span class="p">, </span>master_instance_type=None<span class="p">, </span>name=None<span class="p">, </span>release_label=None<span class="p">, </span>scale_down_behavior=None<span class="p">, </span>security_configuration=None<span class="p">, </span>service_role=None<span class="p">, </span>step_concurrency_level=None<span class="p">, </span>steps=None<span class="p">, </span>tags=None<span class="p">, </span>termination_protection=None<span class="p">, </span>visible_to_all_users=None<span class="p">, __props__=None);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language go %}}
<div class="highlight"><pre class="chroma"><code class="language-go" data-lang="go"><span class="k">func </span>NewCluster<span class="p">(</span><span class="nx">ctx</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#Context">Context</a></span><span class="p">, </span><span class="nx">name</span> <span class="nx"><a href="https://golang.org/pkg/builtin/#string">string</a></span><span class="p">, </span><span class="nx">args</span> <span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/emr?tab=doc#ClusterArgs">ClusterArgs</a></span><span class="p">, </span><span class="nx">opts</span> ...<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#ResourceOption">ResourceOption</a></span><span class="p">) (*<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/emr?tab=doc#Cluster">Cluster</a></span>, error)</span></code></pre></div>
{{% /choosable %}}

{{% choosable language csharp %}}
<div class="highlight"><pre class="chroma"><code class="language-csharp" data-lang="csharp"><span class="k">public </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Aws/Pulumi.Aws.Emr.Cluster.html">Cluster</a></span><span class="p">(</span><span class="nx"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span> <span class="nx">name<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Aws/Pulumi.Aws.Emr.ClusterArgs.html">ClusterArgs</a></span> <span class="nx">args<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.CustomResourceOptions.html">CustomResourceOptions</a></span>? <span class="nx">opts = null<span class="p">)</span></code></pre></div>
{{% /choosable %}}

{{% choosable language nodejs %}}

<dl class="resources-properties">
    <dt class="property-required" title="Required">
        <span>name</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>The unique name of the resource.</dd>
    <dt class="property-optional" title="Optional">
        <span>args</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>The arguments to use to populate this resource's properties.</dd>
    <dt class="property-optional" title="Optional">
        <span>opts</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>A bag of options that control this resource's behavior.</dd>
</dl>

{{% /choosable %}}

{{% choosable language python %}}
<dl class="resources-properties">
    <dt class="property-required" title="Required">
        <span>name</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>The unique name of the resource.</dd>
    <dt class="property-optional" title="Optional">
        <span>opts</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>A bag of options that control this resource's behavior.</dd>
</dl>
{{% /choosable %}}

{{% choosable language go %}}

<dl class="resources-properties">
    <dt class="property-required" title="Required">
        <span>name</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>The unique name of the resource.</dd>
    <dt class="property-optional" title="Optional">
        <span>args</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>The arguments to use to populate this resource's properties.</dd>
    <dt class="property-optional" title="Optional">
        <span>opts</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>A bag of options that control this resource's behavior.</dd>
</dl>

{{% /choosable %}}

{{% choosable language csharp %}}

<dl class="resources-properties">
    <dt class="property-required" title="Required">
        <span>name</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>The unique name of the resource.</dd>
    <dt class="property-optional" title="Optional">
        <span>args</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>The arguments to use to populate this resource's properties.</dd>
    <dt class="property-optional" title="Optional">
        <span>opts</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>A bag of options that control this resource's behavior.</dd>
</dl>

{{% /choosable %}}

#### Resource Arguments




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Release<wbr>Label</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The release label for the Amazon EMR release
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Service<wbr>Role</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}IAM role that will be assumed by the Amazon EMR service to access AWS resources
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Additional<wbr>Info</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}A JSON string for selecting additional features such as adding proxy information. Note: Currently there is no API to retrieve the value of this argument after EMR cluster creation from provider, therefore this provider cannot detect drift from the actual EMR cluster if its value is changed outside this provider.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Applications</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}A list of applications for the cluster. Valid values are: `Flink`, `Hadoop`, `Hive`, `Mahout`, `Pig`, `Spark`, and `JupyterHub` (as of EMR 5.14.0). Case insensitive
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Autoscaling<wbr>Role</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}An IAM role for automatic scaling policies. The IAM role provides permissions that the automatic scaling feature requires to launch and terminate EC2 instances in an instance group.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Bootstrap<wbr>Actions</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterbootstrapaction">List&lt;Cluster<wbr>Bootstrap<wbr>Action<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}Ordered list of bootstrap actions that will be run before Hadoop is started on the cluster nodes. Defined below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Configurations</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}List of configurations supplied for the EMR cluster you are creating
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Configurations<wbr>Json</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}A JSON string for supplying list of configurations for the EMR cluster.
{{% /md %}}</dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>Core<wbr>Instance<wbr>Count</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}Use the `core_instance_group` configuration block `instance_count` argument instead. Number of Amazon EC2 instances used to execute the job flow. EMR will use one node as the cluster's master node and use the remainder of the nodes (`core_instance_count`-1) as core nodes. Cannot be specified if `core_instance_group` or `instance_group` configuration blocks are set. Default `1`
{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `core_instance_group` configuration block `instance_count` argument instead{{% /md %}}</p></dd>

    <dt class="property-optional"
            title="Optional">
        <span>Core<wbr>Instance<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clustercoreinstancegroup">Cluster<wbr>Core<wbr>Instance<wbr>Group<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}Configuration block to use an [Instance Group](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-group-configuration.html#emr-plan-instance-groups) for the [core node type](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-master-core-task-nodes.html#emr-plan-core). Cannot be specified if `core_instance_count` argument, `core_instance_type` argument, or `instance_group` configuration blocks are set. Detailed below.
{{% /md %}}</dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>Core<wbr>Instance<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Use the `core_instance_group` configuration block `instance_type` argument instead. The EC2 instance type of the slave nodes. Cannot be specified if `core_instance_group` or `instance_group` configuration blocks are set.
{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `core_instance_group` configuration block `instance_type` argument instead{{% /md %}}</p></dd>

    <dt class="property-optional"
            title="Optional">
        <span>Custom<wbr>Ami<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}A custom Amazon Linux AMI for the cluster (instead of an EMR-owned AMI). Available in Amazon EMR version 5.7.0 and later.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ebs<wbr>Root<wbr>Volume<wbr>Size</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}Size in GiB of the EBS root device volume of the Linux AMI that is used for each EC2 instance. Available in Amazon EMR version 4.x and later.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ec2Attributes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterec2attributes">Cluster<wbr>Ec2Attributes<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}Attributes for the EC2 instances running the job flow. Defined below
{{% /md %}}</dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>Instance<wbr>Groups</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterinstancegroup">List&lt;Cluster<wbr>Instance<wbr>Group<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}Use the `master_instance_group` configuration block, `core_instance_group` configuration block and [`aws.emr.InstanceGroup` resource(s)](https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html) instead. A list of `instance_group` objects for each instance group in the cluster. Exactly one of `master_instance_type` and `instance_group` must be specified. If `instance_group` is set, then it must contain a configuration block for at least the `MASTER` instance group type (as well as any additional instance groups). Cannot be specified if `master_instance_group` or `core_instance_group` configuration blocks are set. Defined below
{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `master_instance_group` configuration block, `core_instance_group` configuration block, and `aws_emr_instance_group` resource(s) instead{{% /md %}}</p></dd>

    <dt class="property-optional"
            title="Optional">
        <span>Keep<wbr>Job<wbr>Flow<wbr>Alive<wbr>When<wbr>No<wbr>Steps</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Switch on/off run cluster with no steps or when all steps are complete (default is on)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Kerberos<wbr>Attributes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterkerberosattributes">Cluster<wbr>Kerberos<wbr>Attributes<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}Kerberos configuration for the cluster. Defined below
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Log<wbr>Uri</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}S3 bucket to write the log files of the job flow. If a value is not provided, logs are not created
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Master<wbr>Instance<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clustermasterinstancegroup">Cluster<wbr>Master<wbr>Instance<wbr>Group<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}Configuration block to use an [Instance Group](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-group-configuration.html#emr-plan-instance-groups) for the [master node type](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-master-core-task-nodes.html#emr-plan-master). Cannot be specified if `master_instance_type` argument or `instance_group` configuration blocks are set. Detailed below.
{{% /md %}}</dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>Master<wbr>Instance<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Use the `master_instance_group` configuration block `instance_type` argument instead. The EC2 instance type of the master node. Cannot be specified if `master_instance_group` or `instance_group` configuration blocks are set.
{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `master_instance_group` configuration block `instance_type` argument instead{{% /md %}}</p></dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the job flow
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Scale<wbr>Down<wbr>Behavior</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The way that individual Amazon EC2 instances terminate when an automatic scale-in activity occurs or an `instance group` is resized.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Security<wbr>Configuration</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The security configuration name to attach to the EMR cluster. Only valid for EMR clusters with `release_label` 4.8.0 or greater
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Step<wbr>Concurrency<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The number of steps that can be executed concurrently. You can specify a maximum of 256 steps. Only valid for EMR clusters with `release_label` 5.28.0 or greater. (default is 1)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Steps</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterstep">List&lt;Cluster<wbr>Step<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}List of steps to run when creating the cluster. Defined below. It is highly recommended to utilize [`ignoreChanges`](https://www.pulumi.com/docs/intro/concepts/programming-model/#ignorechanges) if other steps are being managed outside of this provider.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dictionary&lt;string, object&gt;</span>
    </dt>
    <dd>{{% md %}}list of tags to apply to the EMR Cluster
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Termination<wbr>Protection</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Switch on/off termination protection (default is `false`, except when using multiple master nodes). Before attempting to destroy the resource when termination protection is enabled, this configuration must be applied with its value set to `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Visible<wbr>To<wbr>All<wbr>Users</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Whether the job flow is visible to all IAM users of the AWS account associated with the job flow. Default `true`
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Release<wbr>Label</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The release label for the Amazon EMR release
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Service<wbr>Role</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}IAM role that will be assumed by the Amazon EMR service to access AWS resources
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Additional<wbr>Info</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}A JSON string for selecting additional features such as adding proxy information. Note: Currently there is no API to retrieve the value of this argument after EMR cluster creation from provider, therefore this provider cannot detect drift from the actual EMR cluster if its value is changed outside this provider.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Applications</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}A list of applications for the cluster. Valid values are: `Flink`, `Hadoop`, `Hive`, `Mahout`, `Pig`, `Spark`, and `JupyterHub` (as of EMR 5.14.0). Case insensitive
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Autoscaling<wbr>Role</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}An IAM role for automatic scaling policies. The IAM role provides permissions that the automatic scaling feature requires to launch and terminate EC2 instances in an instance group.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Bootstrap<wbr>Actions</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterbootstrapaction">[]Cluster<wbr>Bootstrap<wbr>Action</a></span>
    </dt>
    <dd>{{% md %}}Ordered list of bootstrap actions that will be run before Hadoop is started on the cluster nodes. Defined below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Configurations</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}List of configurations supplied for the EMR cluster you are creating
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Configurations<wbr>Json</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}A JSON string for supplying list of configurations for the EMR cluster.
{{% /md %}}</dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>Core<wbr>Instance<wbr>Count</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}Use the `core_instance_group` configuration block `instance_count` argument instead. Number of Amazon EC2 instances used to execute the job flow. EMR will use one node as the cluster's master node and use the remainder of the nodes (`core_instance_count`-1) as core nodes. Cannot be specified if `core_instance_group` or `instance_group` configuration blocks are set. Default `1`
{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `core_instance_group` configuration block `instance_count` argument instead{{% /md %}}</p></dd>

    <dt class="property-optional"
            title="Optional">
        <span>Core<wbr>Instance<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clustercoreinstancegroup">Cluster<wbr>Core<wbr>Instance<wbr>Group</a></span>
    </dt>
    <dd>{{% md %}}Configuration block to use an [Instance Group](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-group-configuration.html#emr-plan-instance-groups) for the [core node type](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-master-core-task-nodes.html#emr-plan-core). Cannot be specified if `core_instance_count` argument, `core_instance_type` argument, or `instance_group` configuration blocks are set. Detailed below.
{{% /md %}}</dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>Core<wbr>Instance<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Use the `core_instance_group` configuration block `instance_type` argument instead. The EC2 instance type of the slave nodes. Cannot be specified if `core_instance_group` or `instance_group` configuration blocks are set.
{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `core_instance_group` configuration block `instance_type` argument instead{{% /md %}}</p></dd>

    <dt class="property-optional"
            title="Optional">
        <span>Custom<wbr>Ami<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}A custom Amazon Linux AMI for the cluster (instead of an EMR-owned AMI). Available in Amazon EMR version 5.7.0 and later.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ebs<wbr>Root<wbr>Volume<wbr>Size</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}Size in GiB of the EBS root device volume of the Linux AMI that is used for each EC2 instance. Available in Amazon EMR version 4.x and later.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ec2Attributes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterec2attributes">Cluster<wbr>Ec2Attributes</a></span>
    </dt>
    <dd>{{% md %}}Attributes for the EC2 instances running the job flow. Defined below
{{% /md %}}</dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>Instance<wbr>Groups</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterinstancegroup">[]Cluster<wbr>Instance<wbr>Group</a></span>
    </dt>
    <dd>{{% md %}}Use the `master_instance_group` configuration block, `core_instance_group` configuration block and [`aws.emr.InstanceGroup` resource(s)](https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html) instead. A list of `instance_group` objects for each instance group in the cluster. Exactly one of `master_instance_type` and `instance_group` must be specified. If `instance_group` is set, then it must contain a configuration block for at least the `MASTER` instance group type (as well as any additional instance groups). Cannot be specified if `master_instance_group` or `core_instance_group` configuration blocks are set. Defined below
{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `master_instance_group` configuration block, `core_instance_group` configuration block, and `aws_emr_instance_group` resource(s) instead{{% /md %}}</p></dd>

    <dt class="property-optional"
            title="Optional">
        <span>Keep<wbr>Job<wbr>Flow<wbr>Alive<wbr>When<wbr>No<wbr>Steps</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Switch on/off run cluster with no steps or when all steps are complete (default is on)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Kerberos<wbr>Attributes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterkerberosattributes">Cluster<wbr>Kerberos<wbr>Attributes</a></span>
    </dt>
    <dd>{{% md %}}Kerberos configuration for the cluster. Defined below
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Log<wbr>Uri</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}S3 bucket to write the log files of the job flow. If a value is not provided, logs are not created
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Master<wbr>Instance<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clustermasterinstancegroup">Cluster<wbr>Master<wbr>Instance<wbr>Group</a></span>
    </dt>
    <dd>{{% md %}}Configuration block to use an [Instance Group](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-group-configuration.html#emr-plan-instance-groups) for the [master node type](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-master-core-task-nodes.html#emr-plan-master). Cannot be specified if `master_instance_type` argument or `instance_group` configuration blocks are set. Detailed below.
{{% /md %}}</dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>Master<wbr>Instance<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Use the `master_instance_group` configuration block `instance_type` argument instead. The EC2 instance type of the master node. Cannot be specified if `master_instance_group` or `instance_group` configuration blocks are set.
{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `master_instance_group` configuration block `instance_type` argument instead{{% /md %}}</p></dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the job flow
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Scale<wbr>Down<wbr>Behavior</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The way that individual Amazon EC2 instances terminate when an automatic scale-in activity occurs or an `instance group` is resized.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Security<wbr>Configuration</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The security configuration name to attach to the EMR cluster. Only valid for EMR clusters with `release_label` 4.8.0 or greater
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Step<wbr>Concurrency<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The number of steps that can be executed concurrently. You can specify a maximum of 256 steps. Only valid for EMR clusters with `release_label` 5.28.0 or greater. (default is 1)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Steps</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterstep">[]Cluster<wbr>Step</a></span>
    </dt>
    <dd>{{% md %}}List of steps to run when creating the cluster. Defined below. It is highly recommended to utilize [`ignoreChanges`](https://www.pulumi.com/docs/intro/concepts/programming-model/#ignorechanges) if other steps are being managed outside of this provider.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">map[string]interface{}</span>
    </dt>
    <dd>{{% md %}}list of tags to apply to the EMR Cluster
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Termination<wbr>Protection</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Switch on/off termination protection (default is `false`, except when using multiple master nodes). Before attempting to destroy the resource when termination protection is enabled, this configuration must be applied with its value set to `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Visible<wbr>To<wbr>All<wbr>Users</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Whether the job flow is visible to all IAM users of the AWS account associated with the job flow. Default `true`
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>release<wbr>Label</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The release label for the Amazon EMR release
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>service<wbr>Role</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}IAM role that will be assumed by the Amazon EMR service to access AWS resources
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>additional<wbr>Info</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}A JSON string for selecting additional features such as adding proxy information. Note: Currently there is no API to retrieve the value of this argument after EMR cluster creation from provider, therefore this provider cannot detect drift from the actual EMR cluster if its value is changed outside this provider.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>applications</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}A list of applications for the cluster. Valid values are: `Flink`, `Hadoop`, `Hive`, `Mahout`, `Pig`, `Spark`, and `JupyterHub` (as of EMR 5.14.0). Case insensitive
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>autoscaling<wbr>Role</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}An IAM role for automatic scaling policies. The IAM role provides permissions that the automatic scaling feature requires to launch and terminate EC2 instances in an instance group.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>bootstrap<wbr>Actions</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterbootstrapaction">Cluster<wbr>Bootstrap<wbr>Action[]</a></span>
    </dt>
    <dd>{{% md %}}Ordered list of bootstrap actions that will be run before Hadoop is started on the cluster nodes. Defined below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>configurations</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}List of configurations supplied for the EMR cluster you are creating
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>configurations<wbr>Json</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}A JSON string for supplying list of configurations for the EMR cluster.
{{% /md %}}</dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>core<wbr>Instance<wbr>Count</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}Use the `core_instance_group` configuration block `instance_count` argument instead. Number of Amazon EC2 instances used to execute the job flow. EMR will use one node as the cluster's master node and use the remainder of the nodes (`core_instance_count`-1) as core nodes. Cannot be specified if `core_instance_group` or `instance_group` configuration blocks are set. Default `1`
{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `core_instance_group` configuration block `instance_count` argument instead{{% /md %}}</p></dd>

    <dt class="property-optional"
            title="Optional">
        <span>core<wbr>Instance<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clustercoreinstancegroup">Cluster<wbr>Core<wbr>Instance<wbr>Group</a></span>
    </dt>
    <dd>{{% md %}}Configuration block to use an [Instance Group](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-group-configuration.html#emr-plan-instance-groups) for the [core node type](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-master-core-task-nodes.html#emr-plan-core). Cannot be specified if `core_instance_count` argument, `core_instance_type` argument, or `instance_group` configuration blocks are set. Detailed below.
{{% /md %}}</dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>core<wbr>Instance<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Use the `core_instance_group` configuration block `instance_type` argument instead. The EC2 instance type of the slave nodes. Cannot be specified if `core_instance_group` or `instance_group` configuration blocks are set.
{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `core_instance_group` configuration block `instance_type` argument instead{{% /md %}}</p></dd>

    <dt class="property-optional"
            title="Optional">
        <span>custom<wbr>Ami<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}A custom Amazon Linux AMI for the cluster (instead of an EMR-owned AMI). Available in Amazon EMR version 5.7.0 and later.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ebs<wbr>Root<wbr>Volume<wbr>Size</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}Size in GiB of the EBS root device volume of the Linux AMI that is used for each EC2 instance. Available in Amazon EMR version 4.x and later.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ec2Attributes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterec2attributes">Cluster<wbr>Ec2Attributes</a></span>
    </dt>
    <dd>{{% md %}}Attributes for the EC2 instances running the job flow. Defined below
{{% /md %}}</dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>instance<wbr>Groups</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterinstancegroup">Cluster<wbr>Instance<wbr>Group[]</a></span>
    </dt>
    <dd>{{% md %}}Use the `master_instance_group` configuration block, `core_instance_group` configuration block and [`aws.emr.InstanceGroup` resource(s)](https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html) instead. A list of `instance_group` objects for each instance group in the cluster. Exactly one of `master_instance_type` and `instance_group` must be specified. If `instance_group` is set, then it must contain a configuration block for at least the `MASTER` instance group type (as well as any additional instance groups). Cannot be specified if `master_instance_group` or `core_instance_group` configuration blocks are set. Defined below
{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `master_instance_group` configuration block, `core_instance_group` configuration block, and `aws_emr_instance_group` resource(s) instead{{% /md %}}</p></dd>

    <dt class="property-optional"
            title="Optional">
        <span>keep<wbr>Job<wbr>Flow<wbr>Alive<wbr>When<wbr>No<wbr>Steps</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Switch on/off run cluster with no steps or when all steps are complete (default is on)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>kerberos<wbr>Attributes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterkerberosattributes">Cluster<wbr>Kerberos<wbr>Attributes</a></span>
    </dt>
    <dd>{{% md %}}Kerberos configuration for the cluster. Defined below
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>log<wbr>Uri</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}S3 bucket to write the log files of the job flow. If a value is not provided, logs are not created
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>master<wbr>Instance<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clustermasterinstancegroup">Cluster<wbr>Master<wbr>Instance<wbr>Group</a></span>
    </dt>
    <dd>{{% md %}}Configuration block to use an [Instance Group](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-group-configuration.html#emr-plan-instance-groups) for the [master node type](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-master-core-task-nodes.html#emr-plan-master). Cannot be specified if `master_instance_type` argument or `instance_group` configuration blocks are set. Detailed below.
{{% /md %}}</dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>master<wbr>Instance<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Use the `master_instance_group` configuration block `instance_type` argument instead. The EC2 instance type of the master node. Cannot be specified if `master_instance_group` or `instance_group` configuration blocks are set.
{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `master_instance_group` configuration block `instance_type` argument instead{{% /md %}}</p></dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the job flow
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>scale<wbr>Down<wbr>Behavior</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The way that individual Amazon EC2 instances terminate when an automatic scale-in activity occurs or an `instance group` is resized.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>security<wbr>Configuration</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The security configuration name to attach to the EMR cluster. Only valid for EMR clusters with `release_label` 4.8.0 or greater
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>step<wbr>Concurrency<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The number of steps that can be executed concurrently. You can specify a maximum of 256 steps. Only valid for EMR clusters with `release_label` 5.28.0 or greater. (default is 1)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>steps</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterstep">Cluster<wbr>Step[]</a></span>
    </dt>
    <dd>{{% md %}}List of steps to run when creating the cluster. Defined below. It is highly recommended to utilize [`ignoreChanges`](https://www.pulumi.com/docs/intro/concepts/programming-model/#ignorechanges) if other steps are being managed outside of this provider.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">{[key: string]: any}</span>
    </dt>
    <dd>{{% md %}}list of tags to apply to the EMR Cluster
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>termination<wbr>Protection</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Switch on/off termination protection (default is `false`, except when using multiple master nodes). Before attempting to destroy the resource when termination protection is enabled, this configuration must be applied with its value set to `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>visible<wbr>To<wbr>All<wbr>Users</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Whether the job flow is visible to all IAM users of the AWS account associated with the job flow. Default `true`
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>release_<wbr>label</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The release label for the Amazon EMR release
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>service_<wbr>role</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}IAM role that will be assumed by the Amazon EMR service to access AWS resources
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>additional_<wbr>info</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}A JSON string for selecting additional features such as adding proxy information. Note: Currently there is no API to retrieve the value of this argument after EMR cluster creation from provider, therefore this provider cannot detect drift from the actual EMR cluster if its value is changed outside this provider.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>applications</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}A list of applications for the cluster. Valid values are: `Flink`, `Hadoop`, `Hive`, `Mahout`, `Pig`, `Spark`, and `JupyterHub` (as of EMR 5.14.0). Case insensitive
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>autoscaling_<wbr>role</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}An IAM role for automatic scaling policies. The IAM role provides permissions that the automatic scaling feature requires to launch and terminate EC2 instances in an instance group.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>bootstrap_<wbr>actions</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterbootstrapaction">List[Cluster<wbr>Bootstrap<wbr>Action]</a></span>
    </dt>
    <dd>{{% md %}}Ordered list of bootstrap actions that will be run before Hadoop is started on the cluster nodes. Defined below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>configurations</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}List of configurations supplied for the EMR cluster you are creating
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>configurations_<wbr>json</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}A JSON string for supplying list of configurations for the EMR cluster.
{{% /md %}}</dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>core_<wbr>instance_<wbr>count</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}Use the `core_instance_group` configuration block `instance_count` argument instead. Number of Amazon EC2 instances used to execute the job flow. EMR will use one node as the cluster's master node and use the remainder of the nodes (`core_instance_count`-1) as core nodes. Cannot be specified if `core_instance_group` or `instance_group` configuration blocks are set. Default `1`
{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `core_instance_group` configuration block `instance_count` argument instead{{% /md %}}</p></dd>

    <dt class="property-optional"
            title="Optional">
        <span>core_<wbr>instance_<wbr>group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clustercoreinstancegroup">Dict[Cluster<wbr>Core<wbr>Instance<wbr>Group]</a></span>
    </dt>
    <dd>{{% md %}}Configuration block to use an [Instance Group](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-group-configuration.html#emr-plan-instance-groups) for the [core node type](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-master-core-task-nodes.html#emr-plan-core). Cannot be specified if `core_instance_count` argument, `core_instance_type` argument, or `instance_group` configuration blocks are set. Detailed below.
{{% /md %}}</dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>core_<wbr>instance_<wbr>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Use the `core_instance_group` configuration block `instance_type` argument instead. The EC2 instance type of the slave nodes. Cannot be specified if `core_instance_group` or `instance_group` configuration blocks are set.
{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `core_instance_group` configuration block `instance_type` argument instead{{% /md %}}</p></dd>

    <dt class="property-optional"
            title="Optional">
        <span>custom_<wbr>ami_<wbr>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}A custom Amazon Linux AMI for the cluster (instead of an EMR-owned AMI). Available in Amazon EMR version 5.7.0 and later.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ebs_<wbr>root_<wbr>volume_<wbr>size</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}Size in GiB of the EBS root device volume of the Linux AMI that is used for each EC2 instance. Available in Amazon EMR version 4.x and later.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ec2_<wbr>attributes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterec2attributes">Dict[Cluster<wbr>Ec2Attributes]</a></span>
    </dt>
    <dd>{{% md %}}Attributes for the EC2 instances running the job flow. Defined below
{{% /md %}}</dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>instance_<wbr>groups</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterinstancegroup">List[Cluster<wbr>Instance<wbr>Group]</a></span>
    </dt>
    <dd>{{% md %}}Use the `master_instance_group` configuration block, `core_instance_group` configuration block and [`aws.emr.InstanceGroup` resource(s)](https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html) instead. A list of `instance_group` objects for each instance group in the cluster. Exactly one of `master_instance_type` and `instance_group` must be specified. If `instance_group` is set, then it must contain a configuration block for at least the `MASTER` instance group type (as well as any additional instance groups). Cannot be specified if `master_instance_group` or `core_instance_group` configuration blocks are set. Defined below
{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `master_instance_group` configuration block, `core_instance_group` configuration block, and `aws_emr_instance_group` resource(s) instead{{% /md %}}</p></dd>

    <dt class="property-optional"
            title="Optional">
        <span>keep_<wbr>job_<wbr>flow_<wbr>alive_<wbr>when_<wbr>no_<wbr>steps</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Switch on/off run cluster with no steps or when all steps are complete (default is on)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>kerberos_<wbr>attributes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterkerberosattributes">Dict[Cluster<wbr>Kerberos<wbr>Attributes]</a></span>
    </dt>
    <dd>{{% md %}}Kerberos configuration for the cluster. Defined below
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>log_<wbr>uri</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}S3 bucket to write the log files of the job flow. If a value is not provided, logs are not created
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>master_<wbr>instance_<wbr>group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clustermasterinstancegroup">Dict[Cluster<wbr>Master<wbr>Instance<wbr>Group]</a></span>
    </dt>
    <dd>{{% md %}}Configuration block to use an [Instance Group](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-group-configuration.html#emr-plan-instance-groups) for the [master node type](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-master-core-task-nodes.html#emr-plan-master). Cannot be specified if `master_instance_type` argument or `instance_group` configuration blocks are set. Detailed below.
{{% /md %}}</dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>master_<wbr>instance_<wbr>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Use the `master_instance_group` configuration block `instance_type` argument instead. The EC2 instance type of the master node. Cannot be specified if `master_instance_group` or `instance_group` configuration blocks are set.
{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `master_instance_group` configuration block `instance_type` argument instead{{% /md %}}</p></dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the job flow
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>scale_<wbr>down_<wbr>behavior</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The way that individual Amazon EC2 instances terminate when an automatic scale-in activity occurs or an `instance group` is resized.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>security_<wbr>configuration</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The security configuration name to attach to the EMR cluster. Only valid for EMR clusters with `release_label` 4.8.0 or greater
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>step_<wbr>concurrency_<wbr>level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The number of steps that can be executed concurrently. You can specify a maximum of 256 steps. Only valid for EMR clusters with `release_label` 5.28.0 or greater. (default is 1)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>steps</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterstep">List[Cluster<wbr>Step]</a></span>
    </dt>
    <dd>{{% md %}}List of steps to run when creating the cluster. Defined below. It is highly recommended to utilize [`ignoreChanges`](https://www.pulumi.com/docs/intro/concepts/programming-model/#ignorechanges) if other steps are being managed outside of this provider.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dict[str, Any]</span>
    </dt>
    <dd>{{% md %}}list of tags to apply to the EMR Cluster
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>termination_<wbr>protection</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Switch on/off termination protection (default is `false`, except when using multiple master nodes). Before attempting to destroy the resource when termination protection is enabled, this configuration must be applied with its value set to `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>visible_<wbr>to_<wbr>all_<wbr>users</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Whether the job flow is visible to all IAM users of the AWS account associated with the job flow. Default `true`
{{% /md %}}</dd>

</dl>
{{% /choosable %}}







## Cluster Output Properties

The following output properties are available:




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span>Arn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>State</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Master<wbr>Public<wbr>Dns</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The public DNS name of the master EC2 instance.
* `core_instance_group.0.id` - Core node type Instance Group ID, if using Instance Group for this node type.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span>Arn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Cluster<wbr>State</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Master<wbr>Public<wbr>Dns</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The public DNS name of the master EC2 instance.
* `core_instance_group.0.id` - Core node type Instance Group ID, if using Instance Group for this node type.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span>arn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>cluster<wbr>State</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>master<wbr>Public<wbr>Dns</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The public DNS name of the master EC2 instance.
* `core_instance_group.0.id` - Core node type Instance Group ID, if using Instance Group for this node type.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span>arn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>cluster_<wbr>state</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>master_<wbr>public_<wbr>dns</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The public DNS name of the master EC2 instance.
* `core_instance_group.0.id` - Core node type Instance Group ID, if using Instance Group for this node type.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}








## Look up an Existing Cluster Resource

Get an existing Cluster resource's state with the given name, ID, and optional extra properties used to qualify the lookup.

{{< chooser language "javascript,typescript,python,go,csharp  " / >}}

{{% choosable language nodejs %}}
<div class="highlight"><pre class="chroma"><code class="language-typescript" data-lang="typescript"><span class="k">public static </span><span class="nf">get</span><span class="p">(</span><span class="nx">name</span>: <span class="nx"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span><span class="p">, </span><span class="nx">id</span>: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#ID">Input&lt;ID&gt;</a></span><span class="p">, </span><span class="nx">state</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/aws/emr/#ClusterState">ClusterState</a></span><span class="p">, </span><span class="nx">opts</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions">CustomResourceOptions</a></span><span class="p">): </span><span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/aws/emr/#Cluster">Cluster</a></span></code></pre></div>
{{% /choosable %}}

{{% choosable language python %}}
<div class="highlight"><pre class="chroma"><code class="language-python" data-lang="python"><span class="k">static </span><span class="nf">get</span><span class="p">(resource_name, id, opts=None, </span>additional_info=None<span class="p">, </span>applications=None<span class="p">, </span>arn=None<span class="p">, </span>autoscaling_role=None<span class="p">, </span>bootstrap_actions=None<span class="p">, </span>cluster_state=None<span class="p">, </span>configurations=None<span class="p">, </span>configurations_json=None<span class="p">, </span>core_instance_count=None<span class="p">, </span>core_instance_group=None<span class="p">, </span>core_instance_type=None<span class="p">, </span>custom_ami_id=None<span class="p">, </span>ebs_root_volume_size=None<span class="p">, </span>ec2_attributes=None<span class="p">, </span>instance_groups=None<span class="p">, </span>keep_job_flow_alive_when_no_steps=None<span class="p">, </span>kerberos_attributes=None<span class="p">, </span>log_uri=None<span class="p">, </span>master_instance_group=None<span class="p">, </span>master_instance_type=None<span class="p">, </span>master_public_dns=None<span class="p">, </span>name=None<span class="p">, </span>release_label=None<span class="p">, </span>scale_down_behavior=None<span class="p">, </span>security_configuration=None<span class="p">, </span>service_role=None<span class="p">, </span>step_concurrency_level=None<span class="p">, </span>steps=None<span class="p">, </span>tags=None<span class="p">, </span>termination_protection=None<span class="p">, </span>visible_to_all_users=None<span class="p">, __props__=None);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language go %}}
<div class="highlight"><pre class="chroma"><code class="language-go" data-lang="go"><span class="k">func </span>GetCluster<span class="p">(</span><span class="nx">ctx</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#Context">Context</a></span><span class="p">, </span><span class="nx">name</span> <span class="nx"><a href="https://golang.org/pkg/builtin/#string">string</a></span><span class="p">, </span><span class="nx">id</span> <span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#IDInput">IDInput</a></span><span class="p">, </span><span class="nx">state</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/emr?tab=doc#ClusterState">ClusterState</a></span><span class="p">, </span><span class="nx">opts</span> ...<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#ResourceOption">ResourceOption</a></span><span class="p">) (*<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/emr?tab=doc#Cluster">Cluster</a></span>, error)</span></code></pre></div>
{{% /choosable %}}

{{% choosable language csharp %}}
<div class="highlight"><pre class="chroma"><code class="language-csharp" data-lang="csharp"><span class="k">public static </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Aws/Pulumi.Aws.Emr.Cluster.html">Cluster</a></span><span class="nf"> Get</span><span class="p">(</span><span class="nx"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span> <span class="nx">name<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.Input.html">Input&lt;string&gt;</a></span> <span class="nx">id<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Aws/Pulumi.Aws.Emr.ClusterState.html">ClusterState</a></span>? <span class="nx">state<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.CustomResourceOptions.html">CustomResourceOptions</a></span>? <span class="nx">opts = null<span class="p">)</span></code></pre></div>
{{% /choosable %}}

{{% choosable language nodejs %}}

<dl class="resources-properties">
    <dt class="property-required" title="Required">
        <span>name</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>The unique name of the resulting resource.</dd>
    <dt class="property-required" title="Required">
        <span>id</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>The <em>unique</em> provider ID of the resource to lookup.</dd>
    <dt class="property-optional" title="Optional">
        <span>state</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>Any extra arguments used during the lookup.</dd>
    <dt class="property-optional" title="Optional">
        <span>opts</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>A bag of options that control this resource's behavior.</dd>
</dl>

{{% /choosable %}}

{{% choosable language python %}}
<dl class="resources-properties">
    <dt class="property-required" title="Required">
        <span>resource_name</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>The unique name of the resulting resource.</dd>
    <dt class="property-required" title="Optional">
        <span>id</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>The <em>unique</em> provider ID of the resource to lookup.</dd>
</dl>
{{% /choosable %}}

{{% choosable language go %}}

<dl class="resources-properties">
    <dt class="property-required" title="Required">
        <span>name</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>The unique name of the resulting resource.</dd>
    <dt class="property-required" title="Required">
        <span>id</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>The <em>unique</em> provider ID of the resource to lookup.</dd>
    <dt class="property-optional" title="Optional">
        <span>state</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>Any extra arguments used during the lookup.</dd>
    <dt class="property-optional" title="Optional">
        <span>opts</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>A bag of options that control this resource's behavior.</dd>
</dl>

{{% /choosable %}}

{{% choosable language csharp %}}

<dl class="resources-properties">
    <dt class="property-required" title="Required">
        <span>name</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>The unique name of the resulting resource.</dd>
    <dt class="property-required" title="Required">
        <span>id</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>The <em>unique</em> provider ID of the resource to lookup.</dd>
    <dt class="property-optional" title="Optional">
        <span>state</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>Any extra arguments used during the lookup.</dd>
    <dt class="property-optional" title="Optional">
        <span>opts</span>
        <span class="property-indicator"></span>
    </dt>
    <dd>A bag of options that control this resource's behavior.</dd>
</dl>

{{% /choosable %}}

The following state arguments are supported:



{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Additional<wbr>Info</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}A JSON string for selecting additional features such as adding proxy information. Note: Currently there is no API to retrieve the value of this argument after EMR cluster creation from provider, therefore this provider cannot detect drift from the actual EMR cluster if its value is changed outside this provider.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Applications</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}A list of applications for the cluster. Valid values are: `Flink`, `Hadoop`, `Hive`, `Mahout`, `Pig`, `Spark`, and `JupyterHub` (as of EMR 5.14.0). Case insensitive
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Arn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Autoscaling<wbr>Role</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}An IAM role for automatic scaling policies. The IAM role provides permissions that the automatic scaling feature requires to launch and terminate EC2 instances in an instance group.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Bootstrap<wbr>Actions</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterbootstrapaction">List&lt;Cluster<wbr>Bootstrap<wbr>Action<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}Ordered list of bootstrap actions that will be run before Hadoop is started on the cluster nodes. Defined below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>State</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Configurations</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}List of configurations supplied for the EMR cluster you are creating
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Configurations<wbr>Json</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}A JSON string for supplying list of configurations for the EMR cluster.
{{% /md %}}</dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>Core<wbr>Instance<wbr>Count</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}Use the `core_instance_group` configuration block `instance_count` argument instead. Number of Amazon EC2 instances used to execute the job flow. EMR will use one node as the cluster's master node and use the remainder of the nodes (`core_instance_count`-1) as core nodes. Cannot be specified if `core_instance_group` or `instance_group` configuration blocks are set. Default `1`
{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `core_instance_group` configuration block `instance_count` argument instead{{% /md %}}</p></dd>

    <dt class="property-optional"
            title="Optional">
        <span>Core<wbr>Instance<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clustercoreinstancegroup">Cluster<wbr>Core<wbr>Instance<wbr>Group<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}Configuration block to use an [Instance Group](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-group-configuration.html#emr-plan-instance-groups) for the [core node type](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-master-core-task-nodes.html#emr-plan-core). Cannot be specified if `core_instance_count` argument, `core_instance_type` argument, or `instance_group` configuration blocks are set. Detailed below.
{{% /md %}}</dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>Core<wbr>Instance<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Use the `core_instance_group` configuration block `instance_type` argument instead. The EC2 instance type of the slave nodes. Cannot be specified if `core_instance_group` or `instance_group` configuration blocks are set.
{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `core_instance_group` configuration block `instance_type` argument instead{{% /md %}}</p></dd>

    <dt class="property-optional"
            title="Optional">
        <span>Custom<wbr>Ami<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}A custom Amazon Linux AMI for the cluster (instead of an EMR-owned AMI). Available in Amazon EMR version 5.7.0 and later.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ebs<wbr>Root<wbr>Volume<wbr>Size</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}Size in GiB of the EBS root device volume of the Linux AMI that is used for each EC2 instance. Available in Amazon EMR version 4.x and later.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ec2Attributes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterec2attributes">Cluster<wbr>Ec2Attributes<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}Attributes for the EC2 instances running the job flow. Defined below
{{% /md %}}</dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>Instance<wbr>Groups</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterinstancegroup">List&lt;Cluster<wbr>Instance<wbr>Group<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}Use the `master_instance_group` configuration block, `core_instance_group` configuration block and [`aws.emr.InstanceGroup` resource(s)](https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html) instead. A list of `instance_group` objects for each instance group in the cluster. Exactly one of `master_instance_type` and `instance_group` must be specified. If `instance_group` is set, then it must contain a configuration block for at least the `MASTER` instance group type (as well as any additional instance groups). Cannot be specified if `master_instance_group` or `core_instance_group` configuration blocks are set. Defined below
{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `master_instance_group` configuration block, `core_instance_group` configuration block, and `aws_emr_instance_group` resource(s) instead{{% /md %}}</p></dd>

    <dt class="property-optional"
            title="Optional">
        <span>Keep<wbr>Job<wbr>Flow<wbr>Alive<wbr>When<wbr>No<wbr>Steps</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Switch on/off run cluster with no steps or when all steps are complete (default is on)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Kerberos<wbr>Attributes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterkerberosattributes">Cluster<wbr>Kerberos<wbr>Attributes<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}Kerberos configuration for the cluster. Defined below
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Log<wbr>Uri</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}S3 bucket to write the log files of the job flow. If a value is not provided, logs are not created
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Master<wbr>Instance<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clustermasterinstancegroup">Cluster<wbr>Master<wbr>Instance<wbr>Group<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}Configuration block to use an [Instance Group](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-group-configuration.html#emr-plan-instance-groups) for the [master node type](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-master-core-task-nodes.html#emr-plan-master). Cannot be specified if `master_instance_type` argument or `instance_group` configuration blocks are set. Detailed below.
{{% /md %}}</dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>Master<wbr>Instance<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Use the `master_instance_group` configuration block `instance_type` argument instead. The EC2 instance type of the master node. Cannot be specified if `master_instance_group` or `instance_group` configuration blocks are set.
{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `master_instance_group` configuration block `instance_type` argument instead{{% /md %}}</p></dd>

    <dt class="property-optional"
            title="Optional">
        <span>Master<wbr>Public<wbr>Dns</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The public DNS name of the master EC2 instance.
* `core_instance_group.0.id` - Core node type Instance Group ID, if using Instance Group for this node type.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the job flow
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Release<wbr>Label</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The release label for the Amazon EMR release
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Scale<wbr>Down<wbr>Behavior</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The way that individual Amazon EC2 instances terminate when an automatic scale-in activity occurs or an `instance group` is resized.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Security<wbr>Configuration</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The security configuration name to attach to the EMR cluster. Only valid for EMR clusters with `release_label` 4.8.0 or greater
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Service<wbr>Role</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}IAM role that will be assumed by the Amazon EMR service to access AWS resources
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Step<wbr>Concurrency<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The number of steps that can be executed concurrently. You can specify a maximum of 256 steps. Only valid for EMR clusters with `release_label` 5.28.0 or greater. (default is 1)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Steps</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterstep">List&lt;Cluster<wbr>Step<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}List of steps to run when creating the cluster. Defined below. It is highly recommended to utilize [`ignoreChanges`](https://www.pulumi.com/docs/intro/concepts/programming-model/#ignorechanges) if other steps are being managed outside of this provider.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dictionary&lt;string, object&gt;</span>
    </dt>
    <dd>{{% md %}}list of tags to apply to the EMR Cluster
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Termination<wbr>Protection</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Switch on/off termination protection (default is `false`, except when using multiple master nodes). Before attempting to destroy the resource when termination protection is enabled, this configuration must be applied with its value set to `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Visible<wbr>To<wbr>All<wbr>Users</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Whether the job flow is visible to all IAM users of the AWS account associated with the job flow. Default `true`
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Additional<wbr>Info</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}A JSON string for selecting additional features such as adding proxy information. Note: Currently there is no API to retrieve the value of this argument after EMR cluster creation from provider, therefore this provider cannot detect drift from the actual EMR cluster if its value is changed outside this provider.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Applications</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}A list of applications for the cluster. Valid values are: `Flink`, `Hadoop`, `Hive`, `Mahout`, `Pig`, `Spark`, and `JupyterHub` (as of EMR 5.14.0). Case insensitive
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Arn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Autoscaling<wbr>Role</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}An IAM role for automatic scaling policies. The IAM role provides permissions that the automatic scaling feature requires to launch and terminate EC2 instances in an instance group.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Bootstrap<wbr>Actions</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterbootstrapaction">[]Cluster<wbr>Bootstrap<wbr>Action</a></span>
    </dt>
    <dd>{{% md %}}Ordered list of bootstrap actions that will be run before Hadoop is started on the cluster nodes. Defined below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Cluster<wbr>State</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Configurations</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}List of configurations supplied for the EMR cluster you are creating
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Configurations<wbr>Json</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}A JSON string for supplying list of configurations for the EMR cluster.
{{% /md %}}</dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>Core<wbr>Instance<wbr>Count</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}Use the `core_instance_group` configuration block `instance_count` argument instead. Number of Amazon EC2 instances used to execute the job flow. EMR will use one node as the cluster's master node and use the remainder of the nodes (`core_instance_count`-1) as core nodes. Cannot be specified if `core_instance_group` or `instance_group` configuration blocks are set. Default `1`
{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `core_instance_group` configuration block `instance_count` argument instead{{% /md %}}</p></dd>

    <dt class="property-optional"
            title="Optional">
        <span>Core<wbr>Instance<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clustercoreinstancegroup">Cluster<wbr>Core<wbr>Instance<wbr>Group</a></span>
    </dt>
    <dd>{{% md %}}Configuration block to use an [Instance Group](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-group-configuration.html#emr-plan-instance-groups) for the [core node type](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-master-core-task-nodes.html#emr-plan-core). Cannot be specified if `core_instance_count` argument, `core_instance_type` argument, or `instance_group` configuration blocks are set. Detailed below.
{{% /md %}}</dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>Core<wbr>Instance<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Use the `core_instance_group` configuration block `instance_type` argument instead. The EC2 instance type of the slave nodes. Cannot be specified if `core_instance_group` or `instance_group` configuration blocks are set.
{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `core_instance_group` configuration block `instance_type` argument instead{{% /md %}}</p></dd>

    <dt class="property-optional"
            title="Optional">
        <span>Custom<wbr>Ami<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}A custom Amazon Linux AMI for the cluster (instead of an EMR-owned AMI). Available in Amazon EMR version 5.7.0 and later.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ebs<wbr>Root<wbr>Volume<wbr>Size</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}Size in GiB of the EBS root device volume of the Linux AMI that is used for each EC2 instance. Available in Amazon EMR version 4.x and later.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ec2Attributes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterec2attributes">Cluster<wbr>Ec2Attributes</a></span>
    </dt>
    <dd>{{% md %}}Attributes for the EC2 instances running the job flow. Defined below
{{% /md %}}</dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>Instance<wbr>Groups</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterinstancegroup">[]Cluster<wbr>Instance<wbr>Group</a></span>
    </dt>
    <dd>{{% md %}}Use the `master_instance_group` configuration block, `core_instance_group` configuration block and [`aws.emr.InstanceGroup` resource(s)](https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html) instead. A list of `instance_group` objects for each instance group in the cluster. Exactly one of `master_instance_type` and `instance_group` must be specified. If `instance_group` is set, then it must contain a configuration block for at least the `MASTER` instance group type (as well as any additional instance groups). Cannot be specified if `master_instance_group` or `core_instance_group` configuration blocks are set. Defined below
{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `master_instance_group` configuration block, `core_instance_group` configuration block, and `aws_emr_instance_group` resource(s) instead{{% /md %}}</p></dd>

    <dt class="property-optional"
            title="Optional">
        <span>Keep<wbr>Job<wbr>Flow<wbr>Alive<wbr>When<wbr>No<wbr>Steps</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Switch on/off run cluster with no steps or when all steps are complete (default is on)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Kerberos<wbr>Attributes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterkerberosattributes">Cluster<wbr>Kerberos<wbr>Attributes</a></span>
    </dt>
    <dd>{{% md %}}Kerberos configuration for the cluster. Defined below
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Log<wbr>Uri</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}S3 bucket to write the log files of the job flow. If a value is not provided, logs are not created
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Master<wbr>Instance<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clustermasterinstancegroup">Cluster<wbr>Master<wbr>Instance<wbr>Group</a></span>
    </dt>
    <dd>{{% md %}}Configuration block to use an [Instance Group](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-group-configuration.html#emr-plan-instance-groups) for the [master node type](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-master-core-task-nodes.html#emr-plan-master). Cannot be specified if `master_instance_type` argument or `instance_group` configuration blocks are set. Detailed below.
{{% /md %}}</dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>Master<wbr>Instance<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Use the `master_instance_group` configuration block `instance_type` argument instead. The EC2 instance type of the master node. Cannot be specified if `master_instance_group` or `instance_group` configuration blocks are set.
{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `master_instance_group` configuration block `instance_type` argument instead{{% /md %}}</p></dd>

    <dt class="property-optional"
            title="Optional">
        <span>Master<wbr>Public<wbr>Dns</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The public DNS name of the master EC2 instance.
* `core_instance_group.0.id` - Core node type Instance Group ID, if using Instance Group for this node type.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the job flow
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Release<wbr>Label</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The release label for the Amazon EMR release
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Scale<wbr>Down<wbr>Behavior</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The way that individual Amazon EC2 instances terminate when an automatic scale-in activity occurs or an `instance group` is resized.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Security<wbr>Configuration</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The security configuration name to attach to the EMR cluster. Only valid for EMR clusters with `release_label` 4.8.0 or greater
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Service<wbr>Role</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}IAM role that will be assumed by the Amazon EMR service to access AWS resources
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Step<wbr>Concurrency<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The number of steps that can be executed concurrently. You can specify a maximum of 256 steps. Only valid for EMR clusters with `release_label` 5.28.0 or greater. (default is 1)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Steps</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterstep">[]Cluster<wbr>Step</a></span>
    </dt>
    <dd>{{% md %}}List of steps to run when creating the cluster. Defined below. It is highly recommended to utilize [`ignoreChanges`](https://www.pulumi.com/docs/intro/concepts/programming-model/#ignorechanges) if other steps are being managed outside of this provider.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">map[string]interface{}</span>
    </dt>
    <dd>{{% md %}}list of tags to apply to the EMR Cluster
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Termination<wbr>Protection</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Switch on/off termination protection (default is `false`, except when using multiple master nodes). Before attempting to destroy the resource when termination protection is enabled, this configuration must be applied with its value set to `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Visible<wbr>To<wbr>All<wbr>Users</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Whether the job flow is visible to all IAM users of the AWS account associated with the job flow. Default `true`
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>additional<wbr>Info</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}A JSON string for selecting additional features such as adding proxy information. Note: Currently there is no API to retrieve the value of this argument after EMR cluster creation from provider, therefore this provider cannot detect drift from the actual EMR cluster if its value is changed outside this provider.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>applications</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}A list of applications for the cluster. Valid values are: `Flink`, `Hadoop`, `Hive`, `Mahout`, `Pig`, `Spark`, and `JupyterHub` (as of EMR 5.14.0). Case insensitive
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>arn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>autoscaling<wbr>Role</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}An IAM role for automatic scaling policies. The IAM role provides permissions that the automatic scaling feature requires to launch and terminate EC2 instances in an instance group.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>bootstrap<wbr>Actions</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterbootstrapaction">Cluster<wbr>Bootstrap<wbr>Action[]</a></span>
    </dt>
    <dd>{{% md %}}Ordered list of bootstrap actions that will be run before Hadoop is started on the cluster nodes. Defined below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>cluster<wbr>State</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>configurations</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}List of configurations supplied for the EMR cluster you are creating
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>configurations<wbr>Json</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}A JSON string for supplying list of configurations for the EMR cluster.
{{% /md %}}</dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>core<wbr>Instance<wbr>Count</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}Use the `core_instance_group` configuration block `instance_count` argument instead. Number of Amazon EC2 instances used to execute the job flow. EMR will use one node as the cluster's master node and use the remainder of the nodes (`core_instance_count`-1) as core nodes. Cannot be specified if `core_instance_group` or `instance_group` configuration blocks are set. Default `1`
{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `core_instance_group` configuration block `instance_count` argument instead{{% /md %}}</p></dd>

    <dt class="property-optional"
            title="Optional">
        <span>core<wbr>Instance<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clustercoreinstancegroup">Cluster<wbr>Core<wbr>Instance<wbr>Group</a></span>
    </dt>
    <dd>{{% md %}}Configuration block to use an [Instance Group](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-group-configuration.html#emr-plan-instance-groups) for the [core node type](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-master-core-task-nodes.html#emr-plan-core). Cannot be specified if `core_instance_count` argument, `core_instance_type` argument, or `instance_group` configuration blocks are set. Detailed below.
{{% /md %}}</dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>core<wbr>Instance<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Use the `core_instance_group` configuration block `instance_type` argument instead. The EC2 instance type of the slave nodes. Cannot be specified if `core_instance_group` or `instance_group` configuration blocks are set.
{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `core_instance_group` configuration block `instance_type` argument instead{{% /md %}}</p></dd>

    <dt class="property-optional"
            title="Optional">
        <span>custom<wbr>Ami<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}A custom Amazon Linux AMI for the cluster (instead of an EMR-owned AMI). Available in Amazon EMR version 5.7.0 and later.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ebs<wbr>Root<wbr>Volume<wbr>Size</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}Size in GiB of the EBS root device volume of the Linux AMI that is used for each EC2 instance. Available in Amazon EMR version 4.x and later.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ec2Attributes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterec2attributes">Cluster<wbr>Ec2Attributes</a></span>
    </dt>
    <dd>{{% md %}}Attributes for the EC2 instances running the job flow. Defined below
{{% /md %}}</dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>instance<wbr>Groups</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterinstancegroup">Cluster<wbr>Instance<wbr>Group[]</a></span>
    </dt>
    <dd>{{% md %}}Use the `master_instance_group` configuration block, `core_instance_group` configuration block and [`aws.emr.InstanceGroup` resource(s)](https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html) instead. A list of `instance_group` objects for each instance group in the cluster. Exactly one of `master_instance_type` and `instance_group` must be specified. If `instance_group` is set, then it must contain a configuration block for at least the `MASTER` instance group type (as well as any additional instance groups). Cannot be specified if `master_instance_group` or `core_instance_group` configuration blocks are set. Defined below
{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `master_instance_group` configuration block, `core_instance_group` configuration block, and `aws_emr_instance_group` resource(s) instead{{% /md %}}</p></dd>

    <dt class="property-optional"
            title="Optional">
        <span>keep<wbr>Job<wbr>Flow<wbr>Alive<wbr>When<wbr>No<wbr>Steps</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Switch on/off run cluster with no steps or when all steps are complete (default is on)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>kerberos<wbr>Attributes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterkerberosattributes">Cluster<wbr>Kerberos<wbr>Attributes</a></span>
    </dt>
    <dd>{{% md %}}Kerberos configuration for the cluster. Defined below
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>log<wbr>Uri</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}S3 bucket to write the log files of the job flow. If a value is not provided, logs are not created
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>master<wbr>Instance<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clustermasterinstancegroup">Cluster<wbr>Master<wbr>Instance<wbr>Group</a></span>
    </dt>
    <dd>{{% md %}}Configuration block to use an [Instance Group](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-group-configuration.html#emr-plan-instance-groups) for the [master node type](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-master-core-task-nodes.html#emr-plan-master). Cannot be specified if `master_instance_type` argument or `instance_group` configuration blocks are set. Detailed below.
{{% /md %}}</dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>master<wbr>Instance<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Use the `master_instance_group` configuration block `instance_type` argument instead. The EC2 instance type of the master node. Cannot be specified if `master_instance_group` or `instance_group` configuration blocks are set.
{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `master_instance_group` configuration block `instance_type` argument instead{{% /md %}}</p></dd>

    <dt class="property-optional"
            title="Optional">
        <span>master<wbr>Public<wbr>Dns</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The public DNS name of the master EC2 instance.
* `core_instance_group.0.id` - Core node type Instance Group ID, if using Instance Group for this node type.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the job flow
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>release<wbr>Label</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The release label for the Amazon EMR release
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>scale<wbr>Down<wbr>Behavior</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The way that individual Amazon EC2 instances terminate when an automatic scale-in activity occurs or an `instance group` is resized.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>security<wbr>Configuration</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The security configuration name to attach to the EMR cluster. Only valid for EMR clusters with `release_label` 4.8.0 or greater
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>service<wbr>Role</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}IAM role that will be assumed by the Amazon EMR service to access AWS resources
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>step<wbr>Concurrency<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The number of steps that can be executed concurrently. You can specify a maximum of 256 steps. Only valid for EMR clusters with `release_label` 5.28.0 or greater. (default is 1)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>steps</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterstep">Cluster<wbr>Step[]</a></span>
    </dt>
    <dd>{{% md %}}List of steps to run when creating the cluster. Defined below. It is highly recommended to utilize [`ignoreChanges`](https://www.pulumi.com/docs/intro/concepts/programming-model/#ignorechanges) if other steps are being managed outside of this provider.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">{[key: string]: any}</span>
    </dt>
    <dd>{{% md %}}list of tags to apply to the EMR Cluster
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>termination<wbr>Protection</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Switch on/off termination protection (default is `false`, except when using multiple master nodes). Before attempting to destroy the resource when termination protection is enabled, this configuration must be applied with its value set to `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>visible<wbr>To<wbr>All<wbr>Users</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Whether the job flow is visible to all IAM users of the AWS account associated with the job flow. Default `true`
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>additional_<wbr>info</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}A JSON string for selecting additional features such as adding proxy information. Note: Currently there is no API to retrieve the value of this argument after EMR cluster creation from provider, therefore this provider cannot detect drift from the actual EMR cluster if its value is changed outside this provider.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>applications</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}A list of applications for the cluster. Valid values are: `Flink`, `Hadoop`, `Hive`, `Mahout`, `Pig`, `Spark`, and `JupyterHub` (as of EMR 5.14.0). Case insensitive
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>arn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>autoscaling_<wbr>role</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}An IAM role for automatic scaling policies. The IAM role provides permissions that the automatic scaling feature requires to launch and terminate EC2 instances in an instance group.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>bootstrap_<wbr>actions</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterbootstrapaction">List[Cluster<wbr>Bootstrap<wbr>Action]</a></span>
    </dt>
    <dd>{{% md %}}Ordered list of bootstrap actions that will be run before Hadoop is started on the cluster nodes. Defined below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>cluster_<wbr>state</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>configurations</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}List of configurations supplied for the EMR cluster you are creating
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>configurations_<wbr>json</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}A JSON string for supplying list of configurations for the EMR cluster.
{{% /md %}}</dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>core_<wbr>instance_<wbr>count</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}Use the `core_instance_group` configuration block `instance_count` argument instead. Number of Amazon EC2 instances used to execute the job flow. EMR will use one node as the cluster's master node and use the remainder of the nodes (`core_instance_count`-1) as core nodes. Cannot be specified if `core_instance_group` or `instance_group` configuration blocks are set. Default `1`
{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `core_instance_group` configuration block `instance_count` argument instead{{% /md %}}</p></dd>

    <dt class="property-optional"
            title="Optional">
        <span>core_<wbr>instance_<wbr>group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clustercoreinstancegroup">Dict[Cluster<wbr>Core<wbr>Instance<wbr>Group]</a></span>
    </dt>
    <dd>{{% md %}}Configuration block to use an [Instance Group](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-group-configuration.html#emr-plan-instance-groups) for the [core node type](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-master-core-task-nodes.html#emr-plan-core). Cannot be specified if `core_instance_count` argument, `core_instance_type` argument, or `instance_group` configuration blocks are set. Detailed below.
{{% /md %}}</dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>core_<wbr>instance_<wbr>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Use the `core_instance_group` configuration block `instance_type` argument instead. The EC2 instance type of the slave nodes. Cannot be specified if `core_instance_group` or `instance_group` configuration blocks are set.
{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `core_instance_group` configuration block `instance_type` argument instead{{% /md %}}</p></dd>

    <dt class="property-optional"
            title="Optional">
        <span>custom_<wbr>ami_<wbr>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}A custom Amazon Linux AMI for the cluster (instead of an EMR-owned AMI). Available in Amazon EMR version 5.7.0 and later.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ebs_<wbr>root_<wbr>volume_<wbr>size</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}Size in GiB of the EBS root device volume of the Linux AMI that is used for each EC2 instance. Available in Amazon EMR version 4.x and later.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ec2_<wbr>attributes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterec2attributes">Dict[Cluster<wbr>Ec2Attributes]</a></span>
    </dt>
    <dd>{{% md %}}Attributes for the EC2 instances running the job flow. Defined below
{{% /md %}}</dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>instance_<wbr>groups</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterinstancegroup">List[Cluster<wbr>Instance<wbr>Group]</a></span>
    </dt>
    <dd>{{% md %}}Use the `master_instance_group` configuration block, `core_instance_group` configuration block and [`aws.emr.InstanceGroup` resource(s)](https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html) instead. A list of `instance_group` objects for each instance group in the cluster. Exactly one of `master_instance_type` and `instance_group` must be specified. If `instance_group` is set, then it must contain a configuration block for at least the `MASTER` instance group type (as well as any additional instance groups). Cannot be specified if `master_instance_group` or `core_instance_group` configuration blocks are set. Defined below
{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `master_instance_group` configuration block, `core_instance_group` configuration block, and `aws_emr_instance_group` resource(s) instead{{% /md %}}</p></dd>

    <dt class="property-optional"
            title="Optional">
        <span>keep_<wbr>job_<wbr>flow_<wbr>alive_<wbr>when_<wbr>no_<wbr>steps</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Switch on/off run cluster with no steps or when all steps are complete (default is on)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>kerberos_<wbr>attributes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterkerberosattributes">Dict[Cluster<wbr>Kerberos<wbr>Attributes]</a></span>
    </dt>
    <dd>{{% md %}}Kerberos configuration for the cluster. Defined below
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>log_<wbr>uri</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}S3 bucket to write the log files of the job flow. If a value is not provided, logs are not created
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>master_<wbr>instance_<wbr>group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clustermasterinstancegroup">Dict[Cluster<wbr>Master<wbr>Instance<wbr>Group]</a></span>
    </dt>
    <dd>{{% md %}}Configuration block to use an [Instance Group](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-group-configuration.html#emr-plan-instance-groups) for the [master node type](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-master-core-task-nodes.html#emr-plan-master). Cannot be specified if `master_instance_type` argument or `instance_group` configuration blocks are set. Detailed below.
{{% /md %}}</dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>master_<wbr>instance_<wbr>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Use the `master_instance_group` configuration block `instance_type` argument instead. The EC2 instance type of the master node. Cannot be specified if `master_instance_group` or `instance_group` configuration blocks are set.
{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `master_instance_group` configuration block `instance_type` argument instead{{% /md %}}</p></dd>

    <dt class="property-optional"
            title="Optional">
        <span>master_<wbr>public_<wbr>dns</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The public DNS name of the master EC2 instance.
* `core_instance_group.0.id` - Core node type Instance Group ID, if using Instance Group for this node type.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the job flow
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>release_<wbr>label</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The release label for the Amazon EMR release
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>scale_<wbr>down_<wbr>behavior</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The way that individual Amazon EC2 instances terminate when an automatic scale-in activity occurs or an `instance group` is resized.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>security_<wbr>configuration</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The security configuration name to attach to the EMR cluster. Only valid for EMR clusters with `release_label` 4.8.0 or greater
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>service_<wbr>role</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}IAM role that will be assumed by the Amazon EMR service to access AWS resources
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>step_<wbr>concurrency_<wbr>level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The number of steps that can be executed concurrently. You can specify a maximum of 256 steps. Only valid for EMR clusters with `release_label` 5.28.0 or greater. (default is 1)
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>steps</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterstep">List[Cluster<wbr>Step]</a></span>
    </dt>
    <dd>{{% md %}}List of steps to run when creating the cluster. Defined below. It is highly recommended to utilize [`ignoreChanges`](https://www.pulumi.com/docs/intro/concepts/programming-model/#ignorechanges) if other steps are being managed outside of this provider.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dict[str, Any]</span>
    </dt>
    <dd>{{% md %}}list of tags to apply to the EMR Cluster
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>termination_<wbr>protection</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Switch on/off termination protection (default is `false`, except when using multiple master nodes). Before attempting to destroy the resource when termination protection is enabled, this configuration must be applied with its value set to `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>visible_<wbr>to_<wbr>all_<wbr>users</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Whether the job flow is visible to all IAM users of the AWS account associated with the job flow. Default `true`
{{% /md %}}</dd>

</dl>
{{% /choosable %}}










## Supporting Types

<h4>Cluster<wbr>Bootstrap<wbr>Action</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#ClusterBootstrapAction">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#ClusterBootstrapAction">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/emr?tab=doc#ClusterBootstrapActionArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/emr?tab=doc#ClusterBootstrapActionOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the job flow
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Path</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Args</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the job flow
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Path</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Args</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the job flow
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>path</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>args</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the job flow
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>path</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>args</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Cluster<wbr>Core<wbr>Instance<wbr>Group</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#ClusterCoreInstanceGroup">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#ClusterCoreInstanceGroup">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/emr?tab=doc#ClusterCoreInstanceGroupArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/emr?tab=doc#ClusterCoreInstanceGroupOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Instance<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Autoscaling<wbr>Policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Bid<wbr>Price</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ebs<wbr>Configs</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clustercoreinstancegroupebsconfig">List&lt;Cluster<wbr>Core<wbr>Instance<wbr>Group<wbr>Ebs<wbr>Config<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The ID of the EMR Cluster
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Instance<wbr>Count</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the job flow
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Instance<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Autoscaling<wbr>Policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Bid<wbr>Price</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ebs<wbr>Configs</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clustercoreinstancegroupebsconfig">[]Cluster<wbr>Core<wbr>Instance<wbr>Group<wbr>Ebs<wbr>Config</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The ID of the EMR Cluster
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Instance<wbr>Count</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the job flow
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>instance<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>autoscaling<wbr>Policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>bid<wbr>Price</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ebs<wbr>Configs</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clustercoreinstancegroupebsconfig">Cluster<wbr>Core<wbr>Instance<wbr>Group<wbr>Ebs<wbr>Config[]</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The ID of the EMR Cluster
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>instance<wbr>Count</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the job flow
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>instance_<wbr>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>autoscaling_<wbr>policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>bid_<wbr>price</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ebs_<wbr>configs</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clustercoreinstancegroupebsconfig">List[Cluster<wbr>Core<wbr>Instance<wbr>Group<wbr>Ebs<wbr>Config]</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The ID of the EMR Cluster
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>instance_<wbr>count</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the job flow
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Cluster<wbr>Core<wbr>Instance<wbr>Group<wbr>Ebs<wbr>Config</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#ClusterCoreInstanceGroupEbsConfig">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#ClusterCoreInstanceGroupEbsConfig">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/emr?tab=doc#ClusterCoreInstanceGroupEbsConfigArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/emr?tab=doc#ClusterCoreInstanceGroupEbsConfigOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Size</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Iops</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Volumes<wbr>Per<wbr>Instance</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Size</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Iops</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Volumes<wbr>Per<wbr>Instance</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>size</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>iops</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>volumes<wbr>Per<wbr>Instance</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>size</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>iops</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>volumes<wbr>Per<wbr>Instance</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Cluster<wbr>Ec2Attributes</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#ClusterEc2Attributes">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#ClusterEc2Attributes">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/emr?tab=doc#ClusterEc2AttributesArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/emr?tab=doc#ClusterEc2AttributesOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Instance<wbr>Profile</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Additional<wbr>Master<wbr>Security<wbr>Groups</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Additional<wbr>Slave<wbr>Security<wbr>Groups</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Emr<wbr>Managed<wbr>Master<wbr>Security<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Emr<wbr>Managed<wbr>Slave<wbr>Security<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Key<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Service<wbr>Access<wbr>Security<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Subnet<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Instance<wbr>Profile</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Additional<wbr>Master<wbr>Security<wbr>Groups</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Additional<wbr>Slave<wbr>Security<wbr>Groups</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Emr<wbr>Managed<wbr>Master<wbr>Security<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Emr<wbr>Managed<wbr>Slave<wbr>Security<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Key<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Service<wbr>Access<wbr>Security<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Subnet<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>instance<wbr>Profile</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>additional<wbr>Master<wbr>Security<wbr>Groups</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>additional<wbr>Slave<wbr>Security<wbr>Groups</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>emr<wbr>Managed<wbr>Master<wbr>Security<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>emr<wbr>Managed<wbr>Slave<wbr>Security<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>key<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>service<wbr>Access<wbr>Security<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>subnet<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>instance<wbr>Profile</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>additional<wbr>Master<wbr>Security<wbr>Groups</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>additional<wbr>Slave<wbr>Security<wbr>Groups</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>emr<wbr>Managed<wbr>Master<wbr>Security<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>emr<wbr>Managed<wbr>Slave<wbr>Security<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>key_<wbr>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>service<wbr>Access<wbr>Security<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>subnet_<wbr>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Cluster<wbr>Instance<wbr>Group</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#ClusterInstanceGroup">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#ClusterInstanceGroup">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/emr?tab=doc#ClusterInstanceGroupArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/emr?tab=doc#ClusterInstanceGroupOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Instance<wbr>Role</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Instance<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Autoscaling<wbr>Policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Bid<wbr>Price</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ebs<wbr>Configs</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterinstancegroupebsconfig">List&lt;Cluster<wbr>Instance<wbr>Group<wbr>Ebs<wbr>Config<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The ID of the EMR Cluster
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Instance<wbr>Count</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the job flow
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Instance<wbr>Role</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Instance<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Autoscaling<wbr>Policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Bid<wbr>Price</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ebs<wbr>Configs</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterinstancegroupebsconfig">[]Cluster<wbr>Instance<wbr>Group<wbr>Ebs<wbr>Config</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The ID of the EMR Cluster
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Instance<wbr>Count</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the job flow
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>instance<wbr>Role</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>instance<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>autoscaling<wbr>Policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>bid<wbr>Price</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ebs<wbr>Configs</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterinstancegroupebsconfig">Cluster<wbr>Instance<wbr>Group<wbr>Ebs<wbr>Config[]</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The ID of the EMR Cluster
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>instance<wbr>Count</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the job flow
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>instance<wbr>Role</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>instance_<wbr>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>autoscaling_<wbr>policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>bid_<wbr>price</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ebs_<wbr>configs</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterinstancegroupebsconfig">List[Cluster<wbr>Instance<wbr>Group<wbr>Ebs<wbr>Config]</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The ID of the EMR Cluster
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>instance_<wbr>count</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the job flow
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Cluster<wbr>Instance<wbr>Group<wbr>Ebs<wbr>Config</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#ClusterInstanceGroupEbsConfig">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#ClusterInstanceGroupEbsConfig">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/emr?tab=doc#ClusterInstanceGroupEbsConfigArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/emr?tab=doc#ClusterInstanceGroupEbsConfigOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Size</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Iops</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Volumes<wbr>Per<wbr>Instance</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Size</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Iops</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Volumes<wbr>Per<wbr>Instance</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>size</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>iops</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>volumes<wbr>Per<wbr>Instance</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>size</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>iops</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>volumes<wbr>Per<wbr>Instance</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Cluster<wbr>Kerberos<wbr>Attributes</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#ClusterKerberosAttributes">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#ClusterKerberosAttributes">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/emr?tab=doc#ClusterKerberosAttributesArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/emr?tab=doc#ClusterKerberosAttributesOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Kdc<wbr>Admin<wbr>Password</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Realm</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ad<wbr>Domain<wbr>Join<wbr>Password</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ad<wbr>Domain<wbr>Join<wbr>User</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Cross<wbr>Realm<wbr>Trust<wbr>Principal<wbr>Password</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Kdc<wbr>Admin<wbr>Password</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Realm</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ad<wbr>Domain<wbr>Join<wbr>Password</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ad<wbr>Domain<wbr>Join<wbr>User</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Cross<wbr>Realm<wbr>Trust<wbr>Principal<wbr>Password</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>kdc<wbr>Admin<wbr>Password</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>realm</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ad<wbr>Domain<wbr>Join<wbr>Password</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ad<wbr>Domain<wbr>Join<wbr>User</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>cross<wbr>Realm<wbr>Trust<wbr>Principal<wbr>Password</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>kdc<wbr>Admin<wbr>Password</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>realm</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ad<wbr>Domain<wbr>Join<wbr>Password</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ad<wbr>Domain<wbr>Join<wbr>User</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>cross<wbr>Realm<wbr>Trust<wbr>Principal<wbr>Password</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Cluster<wbr>Master<wbr>Instance<wbr>Group</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#ClusterMasterInstanceGroup">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#ClusterMasterInstanceGroup">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/emr?tab=doc#ClusterMasterInstanceGroupArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/emr?tab=doc#ClusterMasterInstanceGroupOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Instance<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Bid<wbr>Price</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ebs<wbr>Configs</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clustermasterinstancegroupebsconfig">List&lt;Cluster<wbr>Master<wbr>Instance<wbr>Group<wbr>Ebs<wbr>Config<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The ID of the EMR Cluster
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Instance<wbr>Count</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the job flow
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Instance<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Bid<wbr>Price</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ebs<wbr>Configs</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clustermasterinstancegroupebsconfig">[]Cluster<wbr>Master<wbr>Instance<wbr>Group<wbr>Ebs<wbr>Config</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The ID of the EMR Cluster
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Instance<wbr>Count</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the job flow
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>instance<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>bid<wbr>Price</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ebs<wbr>Configs</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clustermasterinstancegroupebsconfig">Cluster<wbr>Master<wbr>Instance<wbr>Group<wbr>Ebs<wbr>Config[]</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The ID of the EMR Cluster
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>instance<wbr>Count</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the job flow
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>instance_<wbr>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>bid_<wbr>price</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ebs_<wbr>configs</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clustermasterinstancegroupebsconfig">List[Cluster<wbr>Master<wbr>Instance<wbr>Group<wbr>Ebs<wbr>Config]</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The ID of the EMR Cluster
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>instance_<wbr>count</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the job flow
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Cluster<wbr>Master<wbr>Instance<wbr>Group<wbr>Ebs<wbr>Config</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#ClusterMasterInstanceGroupEbsConfig">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#ClusterMasterInstanceGroupEbsConfig">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/emr?tab=doc#ClusterMasterInstanceGroupEbsConfigArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/emr?tab=doc#ClusterMasterInstanceGroupEbsConfigOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Size</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Iops</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Volumes<wbr>Per<wbr>Instance</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Size</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Iops</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Volumes<wbr>Per<wbr>Instance</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>size</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>iops</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>volumes<wbr>Per<wbr>Instance</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>size</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>iops</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>volumes<wbr>Per<wbr>Instance</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Cluster<wbr>Step</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#ClusterStep">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#ClusterStep">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/emr?tab=doc#ClusterStepArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/emr?tab=doc#ClusterStepOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Action<wbr>On<wbr>Failure</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Hadoop<wbr>Jar<wbr>Step</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterstephadoopjarstep">Cluster<wbr>Step<wbr>Hadoop<wbr>Jar<wbr>Step<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the job flow
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Action<wbr>On<wbr>Failure</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Hadoop<wbr>Jar<wbr>Step</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterstephadoopjarstep">Cluster<wbr>Step<wbr>Hadoop<wbr>Jar<wbr>Step</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the job flow
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>action<wbr>On<wbr>Failure</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>hadoop<wbr>Jar<wbr>Step</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterstephadoopjarstep">Cluster<wbr>Step<wbr>Hadoop<wbr>Jar<wbr>Step</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the job flow
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>action<wbr>On<wbr>Failure</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>hadoop<wbr>Jar<wbr>Step</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#clusterstephadoopjarstep">Dict[Cluster<wbr>Step<wbr>Hadoop<wbr>Jar<wbr>Step]</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the job flow
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Cluster<wbr>Step<wbr>Hadoop<wbr>Jar<wbr>Step</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#ClusterStepHadoopJarStep">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#ClusterStepHadoopJarStep">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/emr?tab=doc#ClusterStepHadoopJarStepArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/emr?tab=doc#ClusterStepHadoopJarStepOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Jar</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Args</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Main<wbr>Class</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Properties</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dictionary&lt;string, object&gt;</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Jar</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Args</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Main<wbr>Class</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Properties</span>
        <span class="property-indicator"></span>
        <span class="property-type">map[string]interface{}</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>jar</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>args</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>main<wbr>Class</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>properties</span>
        <span class="property-indicator"></span>
        <span class="property-type">{[key: string]: any}</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>jar</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>args</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>main<wbr>Class</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>properties</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dict[str, Any]</span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}









<h3>Package Details</h3>
<dl class="package-details">
	<dt>Repository</dt>
	<dd><a href="https://github.com/pulumi/pulumi-aws">https://github.com/pulumi/pulumi-aws</a></dd>
	<dt>License</dt>
	<dd>Apache-2.0</dd>
    <dt>Notes</dt>
	<dd>This Pulumi package is based on the [`aws` Terraform Provider](https://github.com/terraform-providers/terraform-provider-aws).</dd>
</dl>

