
---
title: "DeploymentGroup"
block_external_search_index: true
---



Provides a CodeDeploy Deployment Group for a CodeDeploy Application

> **NOTE on blue/green deployments:** When using `green_fleet_provisioning_option` with the `COPY_AUTO_SCALING_GROUP` action, CodeDeploy will create a new ASG with a different name. This ASG is _not_ managed by this provider and will conflict with existing configuration and state. You may want to use a different approach to managing deployments that involve multiple ASG, such as `DISCOVER_EXISTING` with separate blue and green ASG.

{{% examples %}}
## Example Usage
{{% example %}}

```typescript
import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

const exampleRole = new aws.iam.Role("example", {
    assumeRolePolicy: `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "",
      "Effect": "Allow",
      "Principal": {
        "Service": "codedeploy.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
`,
});
const aWSCodeDeployRole = new aws.iam.RolePolicyAttachment("AWSCodeDeployRole", {
    policyArn: "arn:aws:iam::aws:policy/service-role/AWSCodeDeployRole",
    role: exampleRole.name,
});
const exampleApplication = new aws.codedeploy.Application("example", {});
const exampleTopic = new aws.sns.Topic("example", {});
const exampleDeploymentGroup = new aws.codedeploy.DeploymentGroup("example", {
    alarmConfiguration: {
        alarms: ["my-alarm-name"],
        enabled: true,
    },
    appName: exampleApplication.name,
    autoRollbackConfiguration: {
        enabled: true,
        events: ["DEPLOYMENT_FAILURE"],
    },
    deploymentGroupName: "example-group",
    ec2TagSets: [{
        ec2TagFilters: [
            {
                key: "filterkey1",
                type: "KEY_AND_VALUE",
                value: "filtervalue",
            },
            {
                key: "filterkey2",
                type: "KEY_AND_VALUE",
                value: "filtervalue",
            },
        ],
    }],
    serviceRoleArn: exampleRole.arn,
    triggerConfigurations: [{
        triggerEvents: ["DeploymentFailure"],
        triggerName: "example-trigger",
        triggerTargetArn: exampleTopic.arn,
    }],
});
```

{{% /example %}}
{{% example %}}
### Blue Green Deployments with ECS

```typescript
import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

const exampleApplication = new aws.codedeploy.Application("example", {
    computePlatform: "ECS",
});
const exampleDeploymentGroup = new aws.codedeploy.DeploymentGroup("example", {
    appName: exampleApplication.name,
    autoRollbackConfiguration: {
        enabled: true,
        events: ["DEPLOYMENT_FAILURE"],
    },
    blueGreenDeploymentConfig: {
        deploymentReadyOption: {
            actionOnTimeout: "CONTINUE_DEPLOYMENT",
        },
        terminateBlueInstancesOnDeploymentSuccess: {
            action: "TERMINATE",
            terminationWaitTimeInMinutes: 5,
        },
    },
    deploymentConfigName: "CodeDeployDefault.ECSAllAtOnce",
    deploymentGroupName: "example",
    deploymentStyle: {
        deploymentOption: "WITH_TRAFFIC_CONTROL",
        deploymentType: "BLUE_GREEN",
    },
    ecsService: {
        clusterName: aws_ecs_cluster_example.name,
        serviceName: aws_ecs_service_example.name,
    },
    loadBalancerInfo: {
        targetGroupPairInfo: {
            prodTrafficRoute: {
                listenerArns: [aws_lb_listener_example.arn],
            },
            targetGroups: [
                {
                    name: aws_lb_target_group_blue.name,
                },
                {
                    name: aws_lb_target_group_green.name,
                },
            ],
        },
    },
    serviceRoleArn: aws_iam_role_example.arn,
});
```

{{% /example %}}
{{% example %}}
### Blue Green Deployments with Servers and Classic ELB

```typescript
import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

const exampleApplication = new aws.codedeploy.Application("example", {});
const exampleDeploymentGroup = new aws.codedeploy.DeploymentGroup("example", {
    appName: exampleApplication.name,
    blueGreenDeploymentConfig: {
        deploymentReadyOption: {
            actionOnTimeout: "STOP_DEPLOYMENT",
            waitTimeInMinutes: 60,
        },
        greenFleetProvisioningOption: {
            action: "DISCOVER_EXISTING",
        },
        terminateBlueInstancesOnDeploymentSuccess: {
            action: "KEEP_ALIVE",
        },
    },
    deploymentGroupName: "example-group",
    deploymentStyle: {
        deploymentOption: "WITH_TRAFFIC_CONTROL",
        deploymentType: "BLUE_GREEN",
    },
    loadBalancerInfo: {
        elbInfos: [{
            name: aws_elb_example.name,
        }],
    },
    serviceRoleArn: aws_iam_role_example.arn,
});
```

{{% /example %}}
{{% /examples %}}



## Create a DeploymentGroup Resource

{{< chooser language "javascript,typescript,python,go,csharp" / >}}

{{% choosable language nodejs %}}
<div class="highlight"><pre class="chroma"><code class="language-typescript" data-lang="typescript"><span class="k">new </span><span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/aws/codedeploy/#DeploymentGroup">DeploymentGroup</a></span><span class="p">(</span><span class="nx">name</span>: <span class="nx"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span><span class="p">, </span><span class="nx">args</span>: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/aws/codedeploy/#DeploymentGroupArgs">DeploymentGroupArgs</a></span><span class="p">, </span><span class="nx">opts</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions">CustomResourceOptions</a></span><span class="p">);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language python %}}
<div class="highlight"><pre class="chroma"><code class="language-python" data-lang="python"><span class="k">def </span><span class="nf">DeploymentGroup</span><span class="p">(resource_name, opts=None, </span>alarm_configuration=None<span class="p">, </span>app_name=None<span class="p">, </span>auto_rollback_configuration=None<span class="p">, </span>autoscaling_groups=None<span class="p">, </span>blue_green_deployment_config=None<span class="p">, </span>deployment_config_name=None<span class="p">, </span>deployment_group_name=None<span class="p">, </span>deployment_style=None<span class="p">, </span>ec2_tag_filters=None<span class="p">, </span>ec2_tag_sets=None<span class="p">, </span>ecs_service=None<span class="p">, </span>load_balancer_info=None<span class="p">, </span>on_premises_instance_tag_filters=None<span class="p">, </span>service_role_arn=None<span class="p">, </span>trigger_configurations=None<span class="p">, __props__=None);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language go %}}
<div class="highlight"><pre class="chroma"><code class="language-go" data-lang="go"><span class="k">func </span>NewDeploymentGroup<span class="p">(</span><span class="nx">ctx</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#Context">Context</a></span><span class="p">, </span><span class="nx">name</span> <span class="nx"><a href="https://golang.org/pkg/builtin/#string">string</a></span><span class="p">, </span><span class="nx">args</span> <span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/codedeploy?tab=doc#DeploymentGroupArgs">DeploymentGroupArgs</a></span><span class="p">, </span><span class="nx">opts</span> ...<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#ResourceOption">ResourceOption</a></span><span class="p">) (*<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/codedeploy?tab=doc#DeploymentGroup">DeploymentGroup</a></span>, error)</span></code></pre></div>
{{% /choosable %}}

{{% choosable language csharp %}}
<div class="highlight"><pre class="chroma"><code class="language-csharp" data-lang="csharp"><span class="k">public </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Aws/Pulumi.Aws.CodeDeploy.DeploymentGroup.html">DeploymentGroup</a></span><span class="p">(</span><span class="nx"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span> <span class="nx">name<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Aws/Pulumi.Aws.CodeDeploy.DeploymentGroupArgs.html">DeploymentGroupArgs</a></span> <span class="nx">args<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.CustomResourceOptions.html">CustomResourceOptions</a></span>? <span class="nx">opts = null<span class="p">)</span></code></pre></div>
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
        <span>App<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the application.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Deployment<wbr>Group<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the deployment group.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Service<wbr>Role<wbr>Arn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The service role ARN that allows deployments.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Alarm<wbr>Configuration</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupalarmconfiguration">Deployment<wbr>Group<wbr>Alarm<wbr>Configuration<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}Configuration block of alarms associated with the deployment group (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Auto<wbr>Rollback<wbr>Configuration</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupautorollbackconfiguration">Deployment<wbr>Group<wbr>Auto<wbr>Rollback<wbr>Configuration<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}Configuration block of the automatic rollback configuration associated with the deployment group (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Autoscaling<wbr>Groups</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}Autoscaling groups associated with the deployment group.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Blue<wbr>Green<wbr>Deployment<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupbluegreendeploymentconfig">Deployment<wbr>Group<wbr>Blue<wbr>Green<wbr>Deployment<wbr>Config<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}Configuration block of the blue/green deployment options for a deployment group (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Deployment<wbr>Config<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the group's deployment config. The default is "CodeDeployDefault.OneAtATime".
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Deployment<wbr>Style</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupdeploymentstyle">Deployment<wbr>Group<wbr>Deployment<wbr>Style<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}Configuration block of the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ec2Tag<wbr>Filters</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupec2tagfilter">List&lt;Deployment<wbr>Group<wbr>Ec2Tag<wbr>Filter<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}Tag filters associated with the deployment group. See the AWS docs for details.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ec2Tag<wbr>Sets</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupec2tagset">List&lt;Deployment<wbr>Group<wbr>Ec2Tag<wbr>Set<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}Configuration block(s) of Tag filters associated with the deployment group, which are also referred to as tag groups (documented below). See the AWS docs for details.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ecs<wbr>Service</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupecsservice">Deployment<wbr>Group<wbr>Ecs<wbr>Service<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}Configuration block(s) of the ECS services for a deployment group (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Load<wbr>Balancer<wbr>Info</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouploadbalancerinfo">Deployment<wbr>Group<wbr>Load<wbr>Balancer<wbr>Info<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}Single configuration block of the load balancer to use in a blue/green deployment (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>On<wbr>Premises<wbr>Instance<wbr>Tag<wbr>Filters</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouponpremisesinstancetagfilter">List&lt;Deployment<wbr>Group<wbr>On<wbr>Premises<wbr>Instance<wbr>Tag<wbr>Filter<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}On premise tag filters associated with the group. See the AWS docs for details.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Trigger<wbr>Configurations</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouptriggerconfiguration">List&lt;Deployment<wbr>Group<wbr>Trigger<wbr>Configuration<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}Configuration block(s) of the triggers for the deployment group (documented below).
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>App<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the application.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Deployment<wbr>Group<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the deployment group.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Service<wbr>Role<wbr>Arn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The service role ARN that allows deployments.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Alarm<wbr>Configuration</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupalarmconfiguration">Deployment<wbr>Group<wbr>Alarm<wbr>Configuration</a></span>
    </dt>
    <dd>{{% md %}}Configuration block of alarms associated with the deployment group (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Auto<wbr>Rollback<wbr>Configuration</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupautorollbackconfiguration">Deployment<wbr>Group<wbr>Auto<wbr>Rollback<wbr>Configuration</a></span>
    </dt>
    <dd>{{% md %}}Configuration block of the automatic rollback configuration associated with the deployment group (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Autoscaling<wbr>Groups</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}Autoscaling groups associated with the deployment group.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Blue<wbr>Green<wbr>Deployment<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupbluegreendeploymentconfig">Deployment<wbr>Group<wbr>Blue<wbr>Green<wbr>Deployment<wbr>Config</a></span>
    </dt>
    <dd>{{% md %}}Configuration block of the blue/green deployment options for a deployment group (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Deployment<wbr>Config<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the group's deployment config. The default is "CodeDeployDefault.OneAtATime".
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Deployment<wbr>Style</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupdeploymentstyle">Deployment<wbr>Group<wbr>Deployment<wbr>Style</a></span>
    </dt>
    <dd>{{% md %}}Configuration block of the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ec2Tag<wbr>Filters</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupec2tagfilter">[]Deployment<wbr>Group<wbr>Ec2Tag<wbr>Filter</a></span>
    </dt>
    <dd>{{% md %}}Tag filters associated with the deployment group. See the AWS docs for details.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ec2Tag<wbr>Sets</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupec2tagset">[]Deployment<wbr>Group<wbr>Ec2Tag<wbr>Set</a></span>
    </dt>
    <dd>{{% md %}}Configuration block(s) of Tag filters associated with the deployment group, which are also referred to as tag groups (documented below). See the AWS docs for details.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ecs<wbr>Service</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupecsservice">Deployment<wbr>Group<wbr>Ecs<wbr>Service</a></span>
    </dt>
    <dd>{{% md %}}Configuration block(s) of the ECS services for a deployment group (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Load<wbr>Balancer<wbr>Info</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouploadbalancerinfo">Deployment<wbr>Group<wbr>Load<wbr>Balancer<wbr>Info</a></span>
    </dt>
    <dd>{{% md %}}Single configuration block of the load balancer to use in a blue/green deployment (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>On<wbr>Premises<wbr>Instance<wbr>Tag<wbr>Filters</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouponpremisesinstancetagfilter">[]Deployment<wbr>Group<wbr>On<wbr>Premises<wbr>Instance<wbr>Tag<wbr>Filter</a></span>
    </dt>
    <dd>{{% md %}}On premise tag filters associated with the group. See the AWS docs for details.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Trigger<wbr>Configurations</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouptriggerconfiguration">[]Deployment<wbr>Group<wbr>Trigger<wbr>Configuration</a></span>
    </dt>
    <dd>{{% md %}}Configuration block(s) of the triggers for the deployment group (documented below).
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>app<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the application.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>deployment<wbr>Group<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the deployment group.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>service<wbr>Role<wbr>Arn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The service role ARN that allows deployments.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>alarm<wbr>Configuration</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupalarmconfiguration">Deployment<wbr>Group<wbr>Alarm<wbr>Configuration</a></span>
    </dt>
    <dd>{{% md %}}Configuration block of alarms associated with the deployment group (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>auto<wbr>Rollback<wbr>Configuration</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupautorollbackconfiguration">Deployment<wbr>Group<wbr>Auto<wbr>Rollback<wbr>Configuration</a></span>
    </dt>
    <dd>{{% md %}}Configuration block of the automatic rollback configuration associated with the deployment group (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>autoscaling<wbr>Groups</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}Autoscaling groups associated with the deployment group.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>blue<wbr>Green<wbr>Deployment<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupbluegreendeploymentconfig">Deployment<wbr>Group<wbr>Blue<wbr>Green<wbr>Deployment<wbr>Config</a></span>
    </dt>
    <dd>{{% md %}}Configuration block of the blue/green deployment options for a deployment group (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>deployment<wbr>Config<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the group's deployment config. The default is "CodeDeployDefault.OneAtATime".
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>deployment<wbr>Style</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupdeploymentstyle">Deployment<wbr>Group<wbr>Deployment<wbr>Style</a></span>
    </dt>
    <dd>{{% md %}}Configuration block of the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ec2Tag<wbr>Filters</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupec2tagfilter">Deployment<wbr>Group<wbr>Ec2Tag<wbr>Filter[]</a></span>
    </dt>
    <dd>{{% md %}}Tag filters associated with the deployment group. See the AWS docs for details.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ec2Tag<wbr>Sets</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupec2tagset">Deployment<wbr>Group<wbr>Ec2Tag<wbr>Set[]</a></span>
    </dt>
    <dd>{{% md %}}Configuration block(s) of Tag filters associated with the deployment group, which are also referred to as tag groups (documented below). See the AWS docs for details.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ecs<wbr>Service</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupecsservice">Deployment<wbr>Group<wbr>Ecs<wbr>Service</a></span>
    </dt>
    <dd>{{% md %}}Configuration block(s) of the ECS services for a deployment group (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>load<wbr>Balancer<wbr>Info</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouploadbalancerinfo">Deployment<wbr>Group<wbr>Load<wbr>Balancer<wbr>Info</a></span>
    </dt>
    <dd>{{% md %}}Single configuration block of the load balancer to use in a blue/green deployment (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>on<wbr>Premises<wbr>Instance<wbr>Tag<wbr>Filters</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouponpremisesinstancetagfilter">Deployment<wbr>Group<wbr>On<wbr>Premises<wbr>Instance<wbr>Tag<wbr>Filter[]</a></span>
    </dt>
    <dd>{{% md %}}On premise tag filters associated with the group. See the AWS docs for details.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>trigger<wbr>Configurations</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouptriggerconfiguration">Deployment<wbr>Group<wbr>Trigger<wbr>Configuration[]</a></span>
    </dt>
    <dd>{{% md %}}Configuration block(s) of the triggers for the deployment group (documented below).
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>app_<wbr>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the application.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>deployment_<wbr>group_<wbr>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the deployment group.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>service_<wbr>role_<wbr>arn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The service role ARN that allows deployments.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>alarm_<wbr>configuration</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupalarmconfiguration">Dict[Deployment<wbr>Group<wbr>Alarm<wbr>Configuration]</a></span>
    </dt>
    <dd>{{% md %}}Configuration block of alarms associated with the deployment group (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>auto_<wbr>rollback_<wbr>configuration</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupautorollbackconfiguration">Dict[Deployment<wbr>Group<wbr>Auto<wbr>Rollback<wbr>Configuration]</a></span>
    </dt>
    <dd>{{% md %}}Configuration block of the automatic rollback configuration associated with the deployment group (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>autoscaling_<wbr>groups</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}Autoscaling groups associated with the deployment group.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>blue_<wbr>green_<wbr>deployment_<wbr>config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupbluegreendeploymentconfig">Dict[Deployment<wbr>Group<wbr>Blue<wbr>Green<wbr>Deployment<wbr>Config]</a></span>
    </dt>
    <dd>{{% md %}}Configuration block of the blue/green deployment options for a deployment group (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>deployment_<wbr>config_<wbr>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the group's deployment config. The default is "CodeDeployDefault.OneAtATime".
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>deployment_<wbr>style</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupdeploymentstyle">Dict[Deployment<wbr>Group<wbr>Deployment<wbr>Style]</a></span>
    </dt>
    <dd>{{% md %}}Configuration block of the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ec2_<wbr>tag_<wbr>filters</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupec2tagfilter">List[Deployment<wbr>Group<wbr>Ec2Tag<wbr>Filter]</a></span>
    </dt>
    <dd>{{% md %}}Tag filters associated with the deployment group. See the AWS docs for details.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ec2_<wbr>tag_<wbr>sets</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupec2tagset">List[Deployment<wbr>Group<wbr>Ec2Tag<wbr>Set]</a></span>
    </dt>
    <dd>{{% md %}}Configuration block(s) of Tag filters associated with the deployment group, which are also referred to as tag groups (documented below). See the AWS docs for details.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ecs_<wbr>service</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupecsservice">Dict[Deployment<wbr>Group<wbr>Ecs<wbr>Service]</a></span>
    </dt>
    <dd>{{% md %}}Configuration block(s) of the ECS services for a deployment group (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>load_<wbr>balancer_<wbr>info</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouploadbalancerinfo">Dict[Deployment<wbr>Group<wbr>Load<wbr>Balancer<wbr>Info]</a></span>
    </dt>
    <dd>{{% md %}}Single configuration block of the load balancer to use in a blue/green deployment (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>on_<wbr>premises_<wbr>instance_<wbr>tag_<wbr>filters</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouponpremisesinstancetagfilter">List[Deployment<wbr>Group<wbr>On<wbr>Premises<wbr>Instance<wbr>Tag<wbr>Filter]</a></span>
    </dt>
    <dd>{{% md %}}On premise tag filters associated with the group. See the AWS docs for details.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>trigger_<wbr>configurations</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouptriggerconfiguration">List[Deployment<wbr>Group<wbr>Trigger<wbr>Configuration]</a></span>
    </dt>
    <dd>{{% md %}}Configuration block(s) of the triggers for the deployment group (documented below).
{{% /md %}}</dd>

</dl>
{{% /choosable %}}










## Look up an Existing DeploymentGroup Resource

Get an existing DeploymentGroup resource's state with the given name, ID, and optional extra properties used to qualify the lookup.

{{< chooser language "javascript,typescript,python,go,csharp  " / >}}

{{% choosable language nodejs %}}
<div class="highlight"><pre class="chroma"><code class="language-typescript" data-lang="typescript"><span class="k">public static </span><span class="nf">get</span><span class="p">(</span><span class="nx">name</span>: <span class="nx"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span><span class="p">, </span><span class="nx">id</span>: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#ID">Input&lt;ID&gt;</a></span><span class="p">, </span><span class="nx">state</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/aws/codedeploy/#DeploymentGroupState">DeploymentGroupState</a></span><span class="p">, </span><span class="nx">opts</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions">CustomResourceOptions</a></span><span class="p">): </span><span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/aws/codedeploy/#DeploymentGroup">DeploymentGroup</a></span></code></pre></div>
{{% /choosable %}}

{{% choosable language python %}}
<div class="highlight"><pre class="chroma"><code class="language-python" data-lang="python"><span class="k">static </span><span class="nf">get</span><span class="p">(resource_name, id, opts=None, </span>alarm_configuration=None<span class="p">, </span>app_name=None<span class="p">, </span>auto_rollback_configuration=None<span class="p">, </span>autoscaling_groups=None<span class="p">, </span>blue_green_deployment_config=None<span class="p">, </span>deployment_config_name=None<span class="p">, </span>deployment_group_name=None<span class="p">, </span>deployment_style=None<span class="p">, </span>ec2_tag_filters=None<span class="p">, </span>ec2_tag_sets=None<span class="p">, </span>ecs_service=None<span class="p">, </span>load_balancer_info=None<span class="p">, </span>on_premises_instance_tag_filters=None<span class="p">, </span>service_role_arn=None<span class="p">, </span>trigger_configurations=None<span class="p">, __props__=None);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language go %}}
<div class="highlight"><pre class="chroma"><code class="language-go" data-lang="go"><span class="k">func </span>GetDeploymentGroup<span class="p">(</span><span class="nx">ctx</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#Context">Context</a></span><span class="p">, </span><span class="nx">name</span> <span class="nx"><a href="https://golang.org/pkg/builtin/#string">string</a></span><span class="p">, </span><span class="nx">id</span> <span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#IDInput">IDInput</a></span><span class="p">, </span><span class="nx">state</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/codedeploy?tab=doc#DeploymentGroupState">DeploymentGroupState</a></span><span class="p">, </span><span class="nx">opts</span> ...<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#ResourceOption">ResourceOption</a></span><span class="p">) (*<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/codedeploy?tab=doc#DeploymentGroup">DeploymentGroup</a></span>, error)</span></code></pre></div>
{{% /choosable %}}

{{% choosable language csharp %}}
<div class="highlight"><pre class="chroma"><code class="language-csharp" data-lang="csharp"><span class="k">public static </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Aws/Pulumi.Aws.CodeDeploy.DeploymentGroup.html">DeploymentGroup</a></span><span class="nf"> Get</span><span class="p">(</span><span class="nx"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span> <span class="nx">name<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.Input.html">Input&lt;string&gt;</a></span> <span class="nx">id<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Aws/Pulumi.Aws.CodeDeploy.DeploymentGroupState.html">DeploymentGroupState</a></span>? <span class="nx">state<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.CustomResourceOptions.html">CustomResourceOptions</a></span>? <span class="nx">opts = null<span class="p">)</span></code></pre></div>
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
        <span>Alarm<wbr>Configuration</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupalarmconfiguration">Deployment<wbr>Group<wbr>Alarm<wbr>Configuration<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}Configuration block of alarms associated with the deployment group (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>App<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the application.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Auto<wbr>Rollback<wbr>Configuration</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupautorollbackconfiguration">Deployment<wbr>Group<wbr>Auto<wbr>Rollback<wbr>Configuration<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}Configuration block of the automatic rollback configuration associated with the deployment group (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Autoscaling<wbr>Groups</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}Autoscaling groups associated with the deployment group.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Blue<wbr>Green<wbr>Deployment<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupbluegreendeploymentconfig">Deployment<wbr>Group<wbr>Blue<wbr>Green<wbr>Deployment<wbr>Config<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}Configuration block of the blue/green deployment options for a deployment group (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Deployment<wbr>Config<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the group's deployment config. The default is "CodeDeployDefault.OneAtATime".
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Deployment<wbr>Group<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the deployment group.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Deployment<wbr>Style</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupdeploymentstyle">Deployment<wbr>Group<wbr>Deployment<wbr>Style<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}Configuration block of the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ec2Tag<wbr>Filters</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupec2tagfilter">List&lt;Deployment<wbr>Group<wbr>Ec2Tag<wbr>Filter<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}Tag filters associated with the deployment group. See the AWS docs for details.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ec2Tag<wbr>Sets</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupec2tagset">List&lt;Deployment<wbr>Group<wbr>Ec2Tag<wbr>Set<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}Configuration block(s) of Tag filters associated with the deployment group, which are also referred to as tag groups (documented below). See the AWS docs for details.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ecs<wbr>Service</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupecsservice">Deployment<wbr>Group<wbr>Ecs<wbr>Service<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}Configuration block(s) of the ECS services for a deployment group (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Load<wbr>Balancer<wbr>Info</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouploadbalancerinfo">Deployment<wbr>Group<wbr>Load<wbr>Balancer<wbr>Info<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}Single configuration block of the load balancer to use in a blue/green deployment (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>On<wbr>Premises<wbr>Instance<wbr>Tag<wbr>Filters</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouponpremisesinstancetagfilter">List&lt;Deployment<wbr>Group<wbr>On<wbr>Premises<wbr>Instance<wbr>Tag<wbr>Filter<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}On premise tag filters associated with the group. See the AWS docs for details.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Service<wbr>Role<wbr>Arn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The service role ARN that allows deployments.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Trigger<wbr>Configurations</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouptriggerconfiguration">List&lt;Deployment<wbr>Group<wbr>Trigger<wbr>Configuration<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}Configuration block(s) of the triggers for the deployment group (documented below).
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Alarm<wbr>Configuration</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupalarmconfiguration">Deployment<wbr>Group<wbr>Alarm<wbr>Configuration</a></span>
    </dt>
    <dd>{{% md %}}Configuration block of alarms associated with the deployment group (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>App<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the application.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Auto<wbr>Rollback<wbr>Configuration</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupautorollbackconfiguration">Deployment<wbr>Group<wbr>Auto<wbr>Rollback<wbr>Configuration</a></span>
    </dt>
    <dd>{{% md %}}Configuration block of the automatic rollback configuration associated with the deployment group (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Autoscaling<wbr>Groups</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}Autoscaling groups associated with the deployment group.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Blue<wbr>Green<wbr>Deployment<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupbluegreendeploymentconfig">Deployment<wbr>Group<wbr>Blue<wbr>Green<wbr>Deployment<wbr>Config</a></span>
    </dt>
    <dd>{{% md %}}Configuration block of the blue/green deployment options for a deployment group (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Deployment<wbr>Config<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the group's deployment config. The default is "CodeDeployDefault.OneAtATime".
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Deployment<wbr>Group<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the deployment group.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Deployment<wbr>Style</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupdeploymentstyle">Deployment<wbr>Group<wbr>Deployment<wbr>Style</a></span>
    </dt>
    <dd>{{% md %}}Configuration block of the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ec2Tag<wbr>Filters</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupec2tagfilter">[]Deployment<wbr>Group<wbr>Ec2Tag<wbr>Filter</a></span>
    </dt>
    <dd>{{% md %}}Tag filters associated with the deployment group. See the AWS docs for details.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ec2Tag<wbr>Sets</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupec2tagset">[]Deployment<wbr>Group<wbr>Ec2Tag<wbr>Set</a></span>
    </dt>
    <dd>{{% md %}}Configuration block(s) of Tag filters associated with the deployment group, which are also referred to as tag groups (documented below). See the AWS docs for details.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ecs<wbr>Service</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupecsservice">Deployment<wbr>Group<wbr>Ecs<wbr>Service</a></span>
    </dt>
    <dd>{{% md %}}Configuration block(s) of the ECS services for a deployment group (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Load<wbr>Balancer<wbr>Info</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouploadbalancerinfo">Deployment<wbr>Group<wbr>Load<wbr>Balancer<wbr>Info</a></span>
    </dt>
    <dd>{{% md %}}Single configuration block of the load balancer to use in a blue/green deployment (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>On<wbr>Premises<wbr>Instance<wbr>Tag<wbr>Filters</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouponpremisesinstancetagfilter">[]Deployment<wbr>Group<wbr>On<wbr>Premises<wbr>Instance<wbr>Tag<wbr>Filter</a></span>
    </dt>
    <dd>{{% md %}}On premise tag filters associated with the group. See the AWS docs for details.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Service<wbr>Role<wbr>Arn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The service role ARN that allows deployments.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Trigger<wbr>Configurations</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouptriggerconfiguration">[]Deployment<wbr>Group<wbr>Trigger<wbr>Configuration</a></span>
    </dt>
    <dd>{{% md %}}Configuration block(s) of the triggers for the deployment group (documented below).
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>alarm<wbr>Configuration</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupalarmconfiguration">Deployment<wbr>Group<wbr>Alarm<wbr>Configuration</a></span>
    </dt>
    <dd>{{% md %}}Configuration block of alarms associated with the deployment group (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>app<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the application.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>auto<wbr>Rollback<wbr>Configuration</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupautorollbackconfiguration">Deployment<wbr>Group<wbr>Auto<wbr>Rollback<wbr>Configuration</a></span>
    </dt>
    <dd>{{% md %}}Configuration block of the automatic rollback configuration associated with the deployment group (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>autoscaling<wbr>Groups</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}Autoscaling groups associated with the deployment group.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>blue<wbr>Green<wbr>Deployment<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupbluegreendeploymentconfig">Deployment<wbr>Group<wbr>Blue<wbr>Green<wbr>Deployment<wbr>Config</a></span>
    </dt>
    <dd>{{% md %}}Configuration block of the blue/green deployment options for a deployment group (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>deployment<wbr>Config<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the group's deployment config. The default is "CodeDeployDefault.OneAtATime".
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>deployment<wbr>Group<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the deployment group.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>deployment<wbr>Style</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupdeploymentstyle">Deployment<wbr>Group<wbr>Deployment<wbr>Style</a></span>
    </dt>
    <dd>{{% md %}}Configuration block of the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ec2Tag<wbr>Filters</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupec2tagfilter">Deployment<wbr>Group<wbr>Ec2Tag<wbr>Filter[]</a></span>
    </dt>
    <dd>{{% md %}}Tag filters associated with the deployment group. See the AWS docs for details.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ec2Tag<wbr>Sets</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupec2tagset">Deployment<wbr>Group<wbr>Ec2Tag<wbr>Set[]</a></span>
    </dt>
    <dd>{{% md %}}Configuration block(s) of Tag filters associated with the deployment group, which are also referred to as tag groups (documented below). See the AWS docs for details.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ecs<wbr>Service</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupecsservice">Deployment<wbr>Group<wbr>Ecs<wbr>Service</a></span>
    </dt>
    <dd>{{% md %}}Configuration block(s) of the ECS services for a deployment group (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>load<wbr>Balancer<wbr>Info</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouploadbalancerinfo">Deployment<wbr>Group<wbr>Load<wbr>Balancer<wbr>Info</a></span>
    </dt>
    <dd>{{% md %}}Single configuration block of the load balancer to use in a blue/green deployment (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>on<wbr>Premises<wbr>Instance<wbr>Tag<wbr>Filters</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouponpremisesinstancetagfilter">Deployment<wbr>Group<wbr>On<wbr>Premises<wbr>Instance<wbr>Tag<wbr>Filter[]</a></span>
    </dt>
    <dd>{{% md %}}On premise tag filters associated with the group. See the AWS docs for details.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>service<wbr>Role<wbr>Arn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The service role ARN that allows deployments.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>trigger<wbr>Configurations</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouptriggerconfiguration">Deployment<wbr>Group<wbr>Trigger<wbr>Configuration[]</a></span>
    </dt>
    <dd>{{% md %}}Configuration block(s) of the triggers for the deployment group (documented below).
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>alarm_<wbr>configuration</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupalarmconfiguration">Dict[Deployment<wbr>Group<wbr>Alarm<wbr>Configuration]</a></span>
    </dt>
    <dd>{{% md %}}Configuration block of alarms associated with the deployment group (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>app_<wbr>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the application.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>auto_<wbr>rollback_<wbr>configuration</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupautorollbackconfiguration">Dict[Deployment<wbr>Group<wbr>Auto<wbr>Rollback<wbr>Configuration]</a></span>
    </dt>
    <dd>{{% md %}}Configuration block of the automatic rollback configuration associated with the deployment group (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>autoscaling_<wbr>groups</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}Autoscaling groups associated with the deployment group.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>blue_<wbr>green_<wbr>deployment_<wbr>config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupbluegreendeploymentconfig">Dict[Deployment<wbr>Group<wbr>Blue<wbr>Green<wbr>Deployment<wbr>Config]</a></span>
    </dt>
    <dd>{{% md %}}Configuration block of the blue/green deployment options for a deployment group (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>deployment_<wbr>config_<wbr>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the group's deployment config. The default is "CodeDeployDefault.OneAtATime".
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>deployment_<wbr>group_<wbr>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the deployment group.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>deployment_<wbr>style</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupdeploymentstyle">Dict[Deployment<wbr>Group<wbr>Deployment<wbr>Style]</a></span>
    </dt>
    <dd>{{% md %}}Configuration block of the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ec2_<wbr>tag_<wbr>filters</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupec2tagfilter">List[Deployment<wbr>Group<wbr>Ec2Tag<wbr>Filter]</a></span>
    </dt>
    <dd>{{% md %}}Tag filters associated with the deployment group. See the AWS docs for details.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ec2_<wbr>tag_<wbr>sets</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupec2tagset">List[Deployment<wbr>Group<wbr>Ec2Tag<wbr>Set]</a></span>
    </dt>
    <dd>{{% md %}}Configuration block(s) of Tag filters associated with the deployment group, which are also referred to as tag groups (documented below). See the AWS docs for details.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ecs_<wbr>service</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupecsservice">Dict[Deployment<wbr>Group<wbr>Ecs<wbr>Service]</a></span>
    </dt>
    <dd>{{% md %}}Configuration block(s) of the ECS services for a deployment group (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>load_<wbr>balancer_<wbr>info</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouploadbalancerinfo">Dict[Deployment<wbr>Group<wbr>Load<wbr>Balancer<wbr>Info]</a></span>
    </dt>
    <dd>{{% md %}}Single configuration block of the load balancer to use in a blue/green deployment (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>on_<wbr>premises_<wbr>instance_<wbr>tag_<wbr>filters</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouponpremisesinstancetagfilter">List[Deployment<wbr>Group<wbr>On<wbr>Premises<wbr>Instance<wbr>Tag<wbr>Filter]</a></span>
    </dt>
    <dd>{{% md %}}On premise tag filters associated with the group. See the AWS docs for details.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>service_<wbr>role_<wbr>arn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The service role ARN that allows deployments.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>trigger_<wbr>configurations</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouptriggerconfiguration">List[Deployment<wbr>Group<wbr>Trigger<wbr>Configuration]</a></span>
    </dt>
    <dd>{{% md %}}Configuration block(s) of the triggers for the deployment group (documented below).
{{% /md %}}</dd>

</dl>
{{% /choosable %}}










## Supporting Types

<h4>Deployment<wbr>Group<wbr>Alarm<wbr>Configuration</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#DeploymentGroupAlarmConfiguration">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#DeploymentGroupAlarmConfiguration">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/codedeploy?tab=doc#DeploymentGroupAlarmConfigurationArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/codedeploy?tab=doc#DeploymentGroupAlarmConfigurationOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Alarms</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}A list of alarms configured for the deployment group. _A maximum of 10 alarms can be added to a deployment group_.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Indicates whether the alarm configuration is enabled. This option is useful when you want to temporarily deactivate alarm monitoring for a deployment group without having to add the same alarms again later.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ignore<wbr>Poll<wbr>Alarm<wbr>Failure</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Indicates whether a deployment should continue if information about the current state of alarms cannot be retrieved from CloudWatch. The default value is `false`.
* `true`: The deployment will proceed even if alarm status information can't be retrieved.
* `false`: The deployment will stop if alarm status information can't be retrieved.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Alarms</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}A list of alarms configured for the deployment group. _A maximum of 10 alarms can be added to a deployment group_.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Indicates whether the alarm configuration is enabled. This option is useful when you want to temporarily deactivate alarm monitoring for a deployment group without having to add the same alarms again later.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ignore<wbr>Poll<wbr>Alarm<wbr>Failure</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Indicates whether a deployment should continue if information about the current state of alarms cannot be retrieved from CloudWatch. The default value is `false`.
* `true`: The deployment will proceed even if alarm status information can't be retrieved.
* `false`: The deployment will stop if alarm status information can't be retrieved.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>alarms</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}A list of alarms configured for the deployment group. _A maximum of 10 alarms can be added to a deployment group_.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Indicates whether the alarm configuration is enabled. This option is useful when you want to temporarily deactivate alarm monitoring for a deployment group without having to add the same alarms again later.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ignore<wbr>Poll<wbr>Alarm<wbr>Failure</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Indicates whether a deployment should continue if information about the current state of alarms cannot be retrieved from CloudWatch. The default value is `false`.
* `true`: The deployment will proceed even if alarm status information can't be retrieved.
* `false`: The deployment will stop if alarm status information can't be retrieved.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>alarms</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}A list of alarms configured for the deployment group. _A maximum of 10 alarms can be added to a deployment group_.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Indicates whether the alarm configuration is enabled. This option is useful when you want to temporarily deactivate alarm monitoring for a deployment group without having to add the same alarms again later.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ignore<wbr>Poll<wbr>Alarm<wbr>Failure</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Indicates whether a deployment should continue if information about the current state of alarms cannot be retrieved from CloudWatch. The default value is `false`.
* `true`: The deployment will proceed even if alarm status information can't be retrieved.
* `false`: The deployment will stop if alarm status information can't be retrieved.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Deployment<wbr>Group<wbr>Auto<wbr>Rollback<wbr>Configuration</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#DeploymentGroupAutoRollbackConfiguration">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#DeploymentGroupAutoRollbackConfiguration">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/codedeploy?tab=doc#DeploymentGroupAutoRollbackConfigurationArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/codedeploy?tab=doc#DeploymentGroupAutoRollbackConfigurationOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Indicates whether a defined automatic rollback configuration is currently enabled for this Deployment Group. If you enable automatic rollback, you must specify at least one event type.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Events</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}The event type or types that trigger a rollback. Supported types are `DEPLOYMENT_FAILURE` and `DEPLOYMENT_STOP_ON_ALARM`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Indicates whether a defined automatic rollback configuration is currently enabled for this Deployment Group. If you enable automatic rollback, you must specify at least one event type.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Events</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}The event type or types that trigger a rollback. Supported types are `DEPLOYMENT_FAILURE` and `DEPLOYMENT_STOP_ON_ALARM`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Indicates whether a defined automatic rollback configuration is currently enabled for this Deployment Group. If you enable automatic rollback, you must specify at least one event type.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>events</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}The event type or types that trigger a rollback. Supported types are `DEPLOYMENT_FAILURE` and `DEPLOYMENT_STOP_ON_ALARM`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Indicates whether a defined automatic rollback configuration is currently enabled for this Deployment Group. If you enable automatic rollback, you must specify at least one event type.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>events</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}The event type or types that trigger a rollback. Supported types are `DEPLOYMENT_FAILURE` and `DEPLOYMENT_STOP_ON_ALARM`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Deployment<wbr>Group<wbr>Blue<wbr>Green<wbr>Deployment<wbr>Config</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#DeploymentGroupBlueGreenDeploymentConfig">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#DeploymentGroupBlueGreenDeploymentConfig">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/codedeploy?tab=doc#DeploymentGroupBlueGreenDeploymentConfigArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/codedeploy?tab=doc#DeploymentGroupBlueGreenDeploymentConfigOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Deployment<wbr>Ready<wbr>Option</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupbluegreendeploymentconfigdeploymentreadyoption">Deployment<wbr>Group<wbr>Blue<wbr>Green<wbr>Deployment<wbr>Config<wbr>Deployment<wbr>Ready<wbr>Option<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}Information about the action to take when newly provisioned instances are ready to receive traffic in a blue/green deployment (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Green<wbr>Fleet<wbr>Provisioning<wbr>Option</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupbluegreendeploymentconfiggreenfleetprovisioningoption">Deployment<wbr>Group<wbr>Blue<wbr>Green<wbr>Deployment<wbr>Config<wbr>Green<wbr>Fleet<wbr>Provisioning<wbr>Option<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}Information about how instances are provisioned for a replacement environment in a blue/green deployment (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Terminate<wbr>Blue<wbr>Instances<wbr>On<wbr>Deployment<wbr>Success</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupbluegreendeploymentconfigterminateblueinstancesondeploymentsuccess">Deployment<wbr>Group<wbr>Blue<wbr>Green<wbr>Deployment<wbr>Config<wbr>Terminate<wbr>Blue<wbr>Instances<wbr>On<wbr>Deployment<wbr>Success<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}Information about whether to terminate instances in the original fleet during a blue/green deployment (documented below).
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Deployment<wbr>Ready<wbr>Option</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupbluegreendeploymentconfigdeploymentreadyoption">Deployment<wbr>Group<wbr>Blue<wbr>Green<wbr>Deployment<wbr>Config<wbr>Deployment<wbr>Ready<wbr>Option</a></span>
    </dt>
    <dd>{{% md %}}Information about the action to take when newly provisioned instances are ready to receive traffic in a blue/green deployment (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Green<wbr>Fleet<wbr>Provisioning<wbr>Option</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupbluegreendeploymentconfiggreenfleetprovisioningoption">Deployment<wbr>Group<wbr>Blue<wbr>Green<wbr>Deployment<wbr>Config<wbr>Green<wbr>Fleet<wbr>Provisioning<wbr>Option</a></span>
    </dt>
    <dd>{{% md %}}Information about how instances are provisioned for a replacement environment in a blue/green deployment (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Terminate<wbr>Blue<wbr>Instances<wbr>On<wbr>Deployment<wbr>Success</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupbluegreendeploymentconfigterminateblueinstancesondeploymentsuccess">Deployment<wbr>Group<wbr>Blue<wbr>Green<wbr>Deployment<wbr>Config<wbr>Terminate<wbr>Blue<wbr>Instances<wbr>On<wbr>Deployment<wbr>Success</a></span>
    </dt>
    <dd>{{% md %}}Information about whether to terminate instances in the original fleet during a blue/green deployment (documented below).
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>deployment<wbr>Ready<wbr>Option</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupbluegreendeploymentconfigdeploymentreadyoption">Deployment<wbr>Group<wbr>Blue<wbr>Green<wbr>Deployment<wbr>Config<wbr>Deployment<wbr>Ready<wbr>Option</a></span>
    </dt>
    <dd>{{% md %}}Information about the action to take when newly provisioned instances are ready to receive traffic in a blue/green deployment (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>green<wbr>Fleet<wbr>Provisioning<wbr>Option</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupbluegreendeploymentconfiggreenfleetprovisioningoption">Deployment<wbr>Group<wbr>Blue<wbr>Green<wbr>Deployment<wbr>Config<wbr>Green<wbr>Fleet<wbr>Provisioning<wbr>Option</a></span>
    </dt>
    <dd>{{% md %}}Information about how instances are provisioned for a replacement environment in a blue/green deployment (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>terminate<wbr>Blue<wbr>Instances<wbr>On<wbr>Deployment<wbr>Success</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupbluegreendeploymentconfigterminateblueinstancesondeploymentsuccess">Deployment<wbr>Group<wbr>Blue<wbr>Green<wbr>Deployment<wbr>Config<wbr>Terminate<wbr>Blue<wbr>Instances<wbr>On<wbr>Deployment<wbr>Success</a></span>
    </dt>
    <dd>{{% md %}}Information about whether to terminate instances in the original fleet during a blue/green deployment (documented below).
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>deployment<wbr>Ready<wbr>Option</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupbluegreendeploymentconfigdeploymentreadyoption">Dict[Deployment<wbr>Group<wbr>Blue<wbr>Green<wbr>Deployment<wbr>Config<wbr>Deployment<wbr>Ready<wbr>Option]</a></span>
    </dt>
    <dd>{{% md %}}Information about the action to take when newly provisioned instances are ready to receive traffic in a blue/green deployment (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>green<wbr>Fleet<wbr>Provisioning<wbr>Option</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupbluegreendeploymentconfiggreenfleetprovisioningoption">Dict[Deployment<wbr>Group<wbr>Blue<wbr>Green<wbr>Deployment<wbr>Config<wbr>Green<wbr>Fleet<wbr>Provisioning<wbr>Option]</a></span>
    </dt>
    <dd>{{% md %}}Information about how instances are provisioned for a replacement environment in a blue/green deployment (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>terminate<wbr>Blue<wbr>Instances<wbr>On<wbr>Deployment<wbr>Success</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupbluegreendeploymentconfigterminateblueinstancesondeploymentsuccess">Dict[Deployment<wbr>Group<wbr>Blue<wbr>Green<wbr>Deployment<wbr>Config<wbr>Terminate<wbr>Blue<wbr>Instances<wbr>On<wbr>Deployment<wbr>Success]</a></span>
    </dt>
    <dd>{{% md %}}Information about whether to terminate instances in the original fleet during a blue/green deployment (documented below).
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Deployment<wbr>Group<wbr>Blue<wbr>Green<wbr>Deployment<wbr>Config<wbr>Deployment<wbr>Ready<wbr>Option</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#DeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#DeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/codedeploy?tab=doc#DeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/codedeploy?tab=doc#DeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Action<wbr>On<wbr>Timeout</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}When to reroute traffic from an original environment to a replacement environment in a blue/green deployment.
* `CONTINUE_DEPLOYMENT`: Register new instances with the load balancer immediately after the new application revision is installed on the instances in the replacement environment.
* `STOP_DEPLOYMENT`: Do not register new instances with load balancer unless traffic is rerouted manually. If traffic is not rerouted manually before the end of the specified wait period, the deployment status is changed to Stopped.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Wait<wbr>Time<wbr>In<wbr>Minutes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The number of minutes to wait before the status of a blue/green deployment changed to Stopped if rerouting is not started manually. Applies only to the `STOP_DEPLOYMENT` option for `action_on_timeout`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Action<wbr>On<wbr>Timeout</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}When to reroute traffic from an original environment to a replacement environment in a blue/green deployment.
* `CONTINUE_DEPLOYMENT`: Register new instances with the load balancer immediately after the new application revision is installed on the instances in the replacement environment.
* `STOP_DEPLOYMENT`: Do not register new instances with load balancer unless traffic is rerouted manually. If traffic is not rerouted manually before the end of the specified wait period, the deployment status is changed to Stopped.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Wait<wbr>Time<wbr>In<wbr>Minutes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The number of minutes to wait before the status of a blue/green deployment changed to Stopped if rerouting is not started manually. Applies only to the `STOP_DEPLOYMENT` option for `action_on_timeout`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>action<wbr>On<wbr>Timeout</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}When to reroute traffic from an original environment to a replacement environment in a blue/green deployment.
* `CONTINUE_DEPLOYMENT`: Register new instances with the load balancer immediately after the new application revision is installed on the instances in the replacement environment.
* `STOP_DEPLOYMENT`: Do not register new instances with load balancer unless traffic is rerouted manually. If traffic is not rerouted manually before the end of the specified wait period, the deployment status is changed to Stopped.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>wait<wbr>Time<wbr>In<wbr>Minutes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The number of minutes to wait before the status of a blue/green deployment changed to Stopped if rerouting is not started manually. Applies only to the `STOP_DEPLOYMENT` option for `action_on_timeout`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>action<wbr>On<wbr>Timeout</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}When to reroute traffic from an original environment to a replacement environment in a blue/green deployment.
* `CONTINUE_DEPLOYMENT`: Register new instances with the load balancer immediately after the new application revision is installed on the instances in the replacement environment.
* `STOP_DEPLOYMENT`: Do not register new instances with load balancer unless traffic is rerouted manually. If traffic is not rerouted manually before the end of the specified wait period, the deployment status is changed to Stopped.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>wait<wbr>Time<wbr>In<wbr>Minutes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The number of minutes to wait before the status of a blue/green deployment changed to Stopped if rerouting is not started manually. Applies only to the `STOP_DEPLOYMENT` option for `action_on_timeout`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Deployment<wbr>Group<wbr>Blue<wbr>Green<wbr>Deployment<wbr>Config<wbr>Green<wbr>Fleet<wbr>Provisioning<wbr>Option</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#DeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#DeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/codedeploy?tab=doc#DeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/codedeploy?tab=doc#DeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Action</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The method used to add instances to a replacement environment.
* `DISCOVER_EXISTING`: Use instances that already exist or will be created manually.
* `COPY_AUTO_SCALING_GROUP`: Use settings from a specified **Auto Scaling** group to define and create instances in a new Auto Scaling group. _Exactly one Auto Scaling group must be specified_ when selecting `COPY_AUTO_SCALING_GROUP`. Use `autoscaling_groups` to specify the Auto Scaling group.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Action</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The method used to add instances to a replacement environment.
* `DISCOVER_EXISTING`: Use instances that already exist or will be created manually.
* `COPY_AUTO_SCALING_GROUP`: Use settings from a specified **Auto Scaling** group to define and create instances in a new Auto Scaling group. _Exactly one Auto Scaling group must be specified_ when selecting `COPY_AUTO_SCALING_GROUP`. Use `autoscaling_groups` to specify the Auto Scaling group.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>action</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The method used to add instances to a replacement environment.
* `DISCOVER_EXISTING`: Use instances that already exist or will be created manually.
* `COPY_AUTO_SCALING_GROUP`: Use settings from a specified **Auto Scaling** group to define and create instances in a new Auto Scaling group. _Exactly one Auto Scaling group must be specified_ when selecting `COPY_AUTO_SCALING_GROUP`. Use `autoscaling_groups` to specify the Auto Scaling group.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>action</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The method used to add instances to a replacement environment.
* `DISCOVER_EXISTING`: Use instances that already exist or will be created manually.
* `COPY_AUTO_SCALING_GROUP`: Use settings from a specified **Auto Scaling** group to define and create instances in a new Auto Scaling group. _Exactly one Auto Scaling group must be specified_ when selecting `COPY_AUTO_SCALING_GROUP`. Use `autoscaling_groups` to specify the Auto Scaling group.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Deployment<wbr>Group<wbr>Blue<wbr>Green<wbr>Deployment<wbr>Config<wbr>Terminate<wbr>Blue<wbr>Instances<wbr>On<wbr>Deployment<wbr>Success</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#DeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#DeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/codedeploy?tab=doc#DeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/codedeploy?tab=doc#DeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Action</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The action to take on instances in the original environment after a successful blue/green deployment.
* `TERMINATE`: Instances are terminated after a specified wait time.
* `KEEP_ALIVE`: Instances are left running after they are deregistered from the load balancer and removed from the deployment group.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Termination<wbr>Wait<wbr>Time<wbr>In<wbr>Minutes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The number of minutes to wait after a successful blue/green deployment before terminating instances from the original environment.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Action</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The action to take on instances in the original environment after a successful blue/green deployment.
* `TERMINATE`: Instances are terminated after a specified wait time.
* `KEEP_ALIVE`: Instances are left running after they are deregistered from the load balancer and removed from the deployment group.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Termination<wbr>Wait<wbr>Time<wbr>In<wbr>Minutes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The number of minutes to wait after a successful blue/green deployment before terminating instances from the original environment.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>action</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The action to take on instances in the original environment after a successful blue/green deployment.
* `TERMINATE`: Instances are terminated after a specified wait time.
* `KEEP_ALIVE`: Instances are left running after they are deregistered from the load balancer and removed from the deployment group.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>termination<wbr>Wait<wbr>Time<wbr>In<wbr>Minutes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The number of minutes to wait after a successful blue/green deployment before terminating instances from the original environment.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>action</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The action to take on instances in the original environment after a successful blue/green deployment.
* `TERMINATE`: Instances are terminated after a specified wait time.
* `KEEP_ALIVE`: Instances are left running after they are deregistered from the load balancer and removed from the deployment group.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>termination<wbr>Wait<wbr>Time<wbr>In<wbr>Minutes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The number of minutes to wait after a successful blue/green deployment before terminating instances from the original environment.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Deployment<wbr>Group<wbr>Deployment<wbr>Style</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#DeploymentGroupDeploymentStyle">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#DeploymentGroupDeploymentStyle">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/codedeploy?tab=doc#DeploymentGroupDeploymentStyleArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/codedeploy?tab=doc#DeploymentGroupDeploymentStyleOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Deployment<wbr>Option</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Indicates whether to route deployment traffic behind a load balancer. Valid Values are `WITH_TRAFFIC_CONTROL` or `WITHOUT_TRAFFIC_CONTROL`. Default is `WITHOUT_TRAFFIC_CONTROL`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Deployment<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Indicates whether to run an in-place deployment or a blue/green deployment. Valid Values are `IN_PLACE` or `BLUE_GREEN`. Default is `IN_PLACE`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Deployment<wbr>Option</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Indicates whether to route deployment traffic behind a load balancer. Valid Values are `WITH_TRAFFIC_CONTROL` or `WITHOUT_TRAFFIC_CONTROL`. Default is `WITHOUT_TRAFFIC_CONTROL`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Deployment<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Indicates whether to run an in-place deployment or a blue/green deployment. Valid Values are `IN_PLACE` or `BLUE_GREEN`. Default is `IN_PLACE`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>deployment<wbr>Option</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Indicates whether to route deployment traffic behind a load balancer. Valid Values are `WITH_TRAFFIC_CONTROL` or `WITHOUT_TRAFFIC_CONTROL`. Default is `WITHOUT_TRAFFIC_CONTROL`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>deployment<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Indicates whether to run an in-place deployment or a blue/green deployment. Valid Values are `IN_PLACE` or `BLUE_GREEN`. Default is `IN_PLACE`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>deployment<wbr>Option</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Indicates whether to route deployment traffic behind a load balancer. Valid Values are `WITH_TRAFFIC_CONTROL` or `WITHOUT_TRAFFIC_CONTROL`. Default is `WITHOUT_TRAFFIC_CONTROL`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>deployment<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Indicates whether to run an in-place deployment or a blue/green deployment. Valid Values are `IN_PLACE` or `BLUE_GREEN`. Default is `IN_PLACE`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Deployment<wbr>Group<wbr>Ec2Tag<wbr>Filter</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#DeploymentGroupEc2TagFilter">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#DeploymentGroupEc2TagFilter">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/codedeploy?tab=doc#DeploymentGroupEc2TagFilterArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/codedeploy?tab=doc#DeploymentGroupEc2TagFilterOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Key</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The key of the tag filter.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The type of the tag filter, either `KEY_ONLY`, `VALUE_ONLY`, or `KEY_AND_VALUE`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Value</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The value of the tag filter.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Key</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The key of the tag filter.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The type of the tag filter, either `KEY_ONLY`, `VALUE_ONLY`, or `KEY_AND_VALUE`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Value</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The value of the tag filter.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>key</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The key of the tag filter.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The type of the tag filter, either `KEY_ONLY`, `VALUE_ONLY`, or `KEY_AND_VALUE`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>value</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The value of the tag filter.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>key</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The key of the tag filter.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The type of the tag filter, either `KEY_ONLY`, `VALUE_ONLY`, or `KEY_AND_VALUE`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>value</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The value of the tag filter.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Deployment<wbr>Group<wbr>Ec2Tag<wbr>Set</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#DeploymentGroupEc2TagSet">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#DeploymentGroupEc2TagSet">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/codedeploy?tab=doc#DeploymentGroupEc2TagSetArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/codedeploy?tab=doc#DeploymentGroupEc2TagSetOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Ec2Tag<wbr>Filters</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupec2tagsetec2tagfilter">List&lt;Deployment<wbr>Group<wbr>Ec2Tag<wbr>Set<wbr>Ec2Tag<wbr>Filter<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}Tag filters associated with the deployment group. See the AWS docs for details.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Ec2Tag<wbr>Filters</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupec2tagsetec2tagfilter">[]Deployment<wbr>Group<wbr>Ec2Tag<wbr>Set<wbr>Ec2Tag<wbr>Filter</a></span>
    </dt>
    <dd>{{% md %}}Tag filters associated with the deployment group. See the AWS docs for details.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>ec2Tag<wbr>Filters</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupec2tagsetec2tagfilter">Deployment<wbr>Group<wbr>Ec2Tag<wbr>Set<wbr>Ec2Tag<wbr>Filter[]</a></span>
    </dt>
    <dd>{{% md %}}Tag filters associated with the deployment group. See the AWS docs for details.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>ec2_<wbr>tag_<wbr>filters</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgroupec2tagsetec2tagfilter">List[Deployment<wbr>Group<wbr>Ec2Tag<wbr>Set<wbr>Ec2Tag<wbr>Filter]</a></span>
    </dt>
    <dd>{{% md %}}Tag filters associated with the deployment group. See the AWS docs for details.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Deployment<wbr>Group<wbr>Ec2Tag<wbr>Set<wbr>Ec2Tag<wbr>Filter</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#DeploymentGroupEc2TagSetEc2TagFilter">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#DeploymentGroupEc2TagSetEc2TagFilter">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/codedeploy?tab=doc#DeploymentGroupEc2TagSetEc2TagFilterArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/codedeploy?tab=doc#DeploymentGroupEc2TagSetEc2TagFilterOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Key</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The key of the tag filter.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The type of the tag filter, either `KEY_ONLY`, `VALUE_ONLY`, or `KEY_AND_VALUE`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Value</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The value of the tag filter.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Key</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The key of the tag filter.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The type of the tag filter, either `KEY_ONLY`, `VALUE_ONLY`, or `KEY_AND_VALUE`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Value</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The value of the tag filter.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>key</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The key of the tag filter.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The type of the tag filter, either `KEY_ONLY`, `VALUE_ONLY`, or `KEY_AND_VALUE`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>value</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The value of the tag filter.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>key</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The key of the tag filter.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The type of the tag filter, either `KEY_ONLY`, `VALUE_ONLY`, or `KEY_AND_VALUE`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>value</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The value of the tag filter.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Deployment<wbr>Group<wbr>Ecs<wbr>Service</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#DeploymentGroupEcsService">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#DeploymentGroupEcsService">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/codedeploy?tab=doc#DeploymentGroupEcsServiceArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/codedeploy?tab=doc#DeploymentGroupEcsServiceOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Cluster<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the ECS cluster.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Service<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the ECS service.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Cluster<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the ECS cluster.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Service<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the ECS service.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>cluster<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the ECS cluster.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>service<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the ECS service.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>cluster_<wbr>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the ECS cluster.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>service_<wbr>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the ECS service.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Deployment<wbr>Group<wbr>Load<wbr>Balancer<wbr>Info</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#DeploymentGroupLoadBalancerInfo">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#DeploymentGroupLoadBalancerInfo">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/codedeploy?tab=doc#DeploymentGroupLoadBalancerInfoArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/codedeploy?tab=doc#DeploymentGroupLoadBalancerInfoOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Elb<wbr>Infos</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouploadbalancerinfoelbinfo">List&lt;Deployment<wbr>Group<wbr>Load<wbr>Balancer<wbr>Info<wbr>Elb<wbr>Info<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}The Classic Elastic Load Balancer to use in a deployment. Conflicts with `target_group_info` and `target_group_pair_info`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Target<wbr>Group<wbr>Infos</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouploadbalancerinfotargetgroupinfo">List&lt;Deployment<wbr>Group<wbr>Load<wbr>Balancer<wbr>Info<wbr>Target<wbr>Group<wbr>Info<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}The (Application/Network Load Balancer) target group to use in a deployment. Conflicts with `elb_info` and `target_group_pair_info`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Target<wbr>Group<wbr>Pair<wbr>Info</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouploadbalancerinfotargetgrouppairinfo">Deployment<wbr>Group<wbr>Load<wbr>Balancer<wbr>Info<wbr>Target<wbr>Group<wbr>Pair<wbr>Info<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}The (Application/Network Load Balancer) target group pair to use in a deployment. Conflicts with `elb_info` and `target_group_info`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Elb<wbr>Infos</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouploadbalancerinfoelbinfo">[]Deployment<wbr>Group<wbr>Load<wbr>Balancer<wbr>Info<wbr>Elb<wbr>Info</a></span>
    </dt>
    <dd>{{% md %}}The Classic Elastic Load Balancer to use in a deployment. Conflicts with `target_group_info` and `target_group_pair_info`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Target<wbr>Group<wbr>Infos</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouploadbalancerinfotargetgroupinfo">[]Deployment<wbr>Group<wbr>Load<wbr>Balancer<wbr>Info<wbr>Target<wbr>Group<wbr>Info</a></span>
    </dt>
    <dd>{{% md %}}The (Application/Network Load Balancer) target group to use in a deployment. Conflicts with `elb_info` and `target_group_pair_info`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Target<wbr>Group<wbr>Pair<wbr>Info</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouploadbalancerinfotargetgrouppairinfo">Deployment<wbr>Group<wbr>Load<wbr>Balancer<wbr>Info<wbr>Target<wbr>Group<wbr>Pair<wbr>Info</a></span>
    </dt>
    <dd>{{% md %}}The (Application/Network Load Balancer) target group pair to use in a deployment. Conflicts with `elb_info` and `target_group_info`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>elb<wbr>Infos</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouploadbalancerinfoelbinfo">Deployment<wbr>Group<wbr>Load<wbr>Balancer<wbr>Info<wbr>Elb<wbr>Info[]</a></span>
    </dt>
    <dd>{{% md %}}The Classic Elastic Load Balancer to use in a deployment. Conflicts with `target_group_info` and `target_group_pair_info`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>target<wbr>Group<wbr>Infos</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouploadbalancerinfotargetgroupinfo">Deployment<wbr>Group<wbr>Load<wbr>Balancer<wbr>Info<wbr>Target<wbr>Group<wbr>Info[]</a></span>
    </dt>
    <dd>{{% md %}}The (Application/Network Load Balancer) target group to use in a deployment. Conflicts with `elb_info` and `target_group_pair_info`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>target<wbr>Group<wbr>Pair<wbr>Info</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouploadbalancerinfotargetgrouppairinfo">Deployment<wbr>Group<wbr>Load<wbr>Balancer<wbr>Info<wbr>Target<wbr>Group<wbr>Pair<wbr>Info</a></span>
    </dt>
    <dd>{{% md %}}The (Application/Network Load Balancer) target group pair to use in a deployment. Conflicts with `elb_info` and `target_group_info`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>elb<wbr>Infos</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouploadbalancerinfoelbinfo">List[Deployment<wbr>Group<wbr>Load<wbr>Balancer<wbr>Info<wbr>Elb<wbr>Info]</a></span>
    </dt>
    <dd>{{% md %}}The Classic Elastic Load Balancer to use in a deployment. Conflicts with `target_group_info` and `target_group_pair_info`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>target<wbr>Group<wbr>Infos</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouploadbalancerinfotargetgroupinfo">List[Deployment<wbr>Group<wbr>Load<wbr>Balancer<wbr>Info<wbr>Target<wbr>Group<wbr>Info]</a></span>
    </dt>
    <dd>{{% md %}}The (Application/Network Load Balancer) target group to use in a deployment. Conflicts with `elb_info` and `target_group_pair_info`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>target<wbr>Group<wbr>Pair<wbr>Info</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouploadbalancerinfotargetgrouppairinfo">Dict[Deployment<wbr>Group<wbr>Load<wbr>Balancer<wbr>Info<wbr>Target<wbr>Group<wbr>Pair<wbr>Info]</a></span>
    </dt>
    <dd>{{% md %}}The (Application/Network Load Balancer) target group pair to use in a deployment. Conflicts with `elb_info` and `target_group_info`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Deployment<wbr>Group<wbr>Load<wbr>Balancer<wbr>Info<wbr>Elb<wbr>Info</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#DeploymentGroupLoadBalancerInfoElbInfo">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#DeploymentGroupLoadBalancerInfoElbInfo">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/codedeploy?tab=doc#DeploymentGroupLoadBalancerInfoElbInfoArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/codedeploy?tab=doc#DeploymentGroupLoadBalancerInfoElbInfoOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the load balancer that will be used to route traffic from original instances to replacement instances in a blue/green deployment. For in-place deployments, the name of the load balancer that instances are deregistered from so they are not serving traffic during a deployment, and then re-registered with after the deployment completes.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the load balancer that will be used to route traffic from original instances to replacement instances in a blue/green deployment. For in-place deployments, the name of the load balancer that instances are deregistered from so they are not serving traffic during a deployment, and then re-registered with after the deployment completes.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the load balancer that will be used to route traffic from original instances to replacement instances in a blue/green deployment. For in-place deployments, the name of the load balancer that instances are deregistered from so they are not serving traffic during a deployment, and then re-registered with after the deployment completes.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the load balancer that will be used to route traffic from original instances to replacement instances in a blue/green deployment. For in-place deployments, the name of the load balancer that instances are deregistered from so they are not serving traffic during a deployment, and then re-registered with after the deployment completes.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Deployment<wbr>Group<wbr>Load<wbr>Balancer<wbr>Info<wbr>Target<wbr>Group<wbr>Info</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#DeploymentGroupLoadBalancerInfoTargetGroupInfo">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#DeploymentGroupLoadBalancerInfoTargetGroupInfo">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/codedeploy?tab=doc#DeploymentGroupLoadBalancerInfoTargetGroupInfoArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/codedeploy?tab=doc#DeploymentGroupLoadBalancerInfoTargetGroupInfoOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the target group that instances in the original environment are deregistered from, and instances in the replacement environment registered with. For in-place deployments, the name of the target group that instances are deregistered from, so they are not serving traffic during a deployment, and then re-registered with after the deployment completes.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the target group that instances in the original environment are deregistered from, and instances in the replacement environment registered with. For in-place deployments, the name of the target group that instances are deregistered from, so they are not serving traffic during a deployment, and then re-registered with after the deployment completes.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the target group that instances in the original environment are deregistered from, and instances in the replacement environment registered with. For in-place deployments, the name of the target group that instances are deregistered from, so they are not serving traffic during a deployment, and then re-registered with after the deployment completes.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the target group that instances in the original environment are deregistered from, and instances in the replacement environment registered with. For in-place deployments, the name of the target group that instances are deregistered from, so they are not serving traffic during a deployment, and then re-registered with after the deployment completes.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Deployment<wbr>Group<wbr>Load<wbr>Balancer<wbr>Info<wbr>Target<wbr>Group<wbr>Pair<wbr>Info</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#DeploymentGroupLoadBalancerInfoTargetGroupPairInfo">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#DeploymentGroupLoadBalancerInfoTargetGroupPairInfo">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/codedeploy?tab=doc#DeploymentGroupLoadBalancerInfoTargetGroupPairInfoArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/codedeploy?tab=doc#DeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Prod<wbr>Traffic<wbr>Route</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouploadbalancerinfotargetgrouppairinfoprodtrafficroute">Deployment<wbr>Group<wbr>Load<wbr>Balancer<wbr>Info<wbr>Target<wbr>Group<wbr>Pair<wbr>Info<wbr>Prod<wbr>Traffic<wbr>Route<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}Configuration block for the production traffic route (documented below).
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Target<wbr>Groups</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouploadbalancerinfotargetgrouppairinfotargetgroup">List&lt;Deployment<wbr>Group<wbr>Load<wbr>Balancer<wbr>Info<wbr>Target<wbr>Group<wbr>Pair<wbr>Info<wbr>Target<wbr>Group<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}Configuration blocks for a target group within a target group pair (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Test<wbr>Traffic<wbr>Route</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouploadbalancerinfotargetgrouppairinfotesttrafficroute">Deployment<wbr>Group<wbr>Load<wbr>Balancer<wbr>Info<wbr>Target<wbr>Group<wbr>Pair<wbr>Info<wbr>Test<wbr>Traffic<wbr>Route<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}Configuration block for the test traffic route (documented below).
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Prod<wbr>Traffic<wbr>Route</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouploadbalancerinfotargetgrouppairinfoprodtrafficroute">Deployment<wbr>Group<wbr>Load<wbr>Balancer<wbr>Info<wbr>Target<wbr>Group<wbr>Pair<wbr>Info<wbr>Prod<wbr>Traffic<wbr>Route</a></span>
    </dt>
    <dd>{{% md %}}Configuration block for the production traffic route (documented below).
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Target<wbr>Groups</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouploadbalancerinfotargetgrouppairinfotargetgroup">[]Deployment<wbr>Group<wbr>Load<wbr>Balancer<wbr>Info<wbr>Target<wbr>Group<wbr>Pair<wbr>Info<wbr>Target<wbr>Group</a></span>
    </dt>
    <dd>{{% md %}}Configuration blocks for a target group within a target group pair (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Test<wbr>Traffic<wbr>Route</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouploadbalancerinfotargetgrouppairinfotesttrafficroute">Deployment<wbr>Group<wbr>Load<wbr>Balancer<wbr>Info<wbr>Target<wbr>Group<wbr>Pair<wbr>Info<wbr>Test<wbr>Traffic<wbr>Route</a></span>
    </dt>
    <dd>{{% md %}}Configuration block for the test traffic route (documented below).
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>prod<wbr>Traffic<wbr>Route</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouploadbalancerinfotargetgrouppairinfoprodtrafficroute">Deployment<wbr>Group<wbr>Load<wbr>Balancer<wbr>Info<wbr>Target<wbr>Group<wbr>Pair<wbr>Info<wbr>Prod<wbr>Traffic<wbr>Route</a></span>
    </dt>
    <dd>{{% md %}}Configuration block for the production traffic route (documented below).
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>target<wbr>Groups</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouploadbalancerinfotargetgrouppairinfotargetgroup">Deployment<wbr>Group<wbr>Load<wbr>Balancer<wbr>Info<wbr>Target<wbr>Group<wbr>Pair<wbr>Info<wbr>Target<wbr>Group[]</a></span>
    </dt>
    <dd>{{% md %}}Configuration blocks for a target group within a target group pair (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>test<wbr>Traffic<wbr>Route</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouploadbalancerinfotargetgrouppairinfotesttrafficroute">Deployment<wbr>Group<wbr>Load<wbr>Balancer<wbr>Info<wbr>Target<wbr>Group<wbr>Pair<wbr>Info<wbr>Test<wbr>Traffic<wbr>Route</a></span>
    </dt>
    <dd>{{% md %}}Configuration block for the test traffic route (documented below).
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>prod<wbr>Traffic<wbr>Route</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouploadbalancerinfotargetgrouppairinfoprodtrafficroute">Dict[Deployment<wbr>Group<wbr>Load<wbr>Balancer<wbr>Info<wbr>Target<wbr>Group<wbr>Pair<wbr>Info<wbr>Prod<wbr>Traffic<wbr>Route]</a></span>
    </dt>
    <dd>{{% md %}}Configuration block for the production traffic route (documented below).
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>target<wbr>Groups</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouploadbalancerinfotargetgrouppairinfotargetgroup">List[Deployment<wbr>Group<wbr>Load<wbr>Balancer<wbr>Info<wbr>Target<wbr>Group<wbr>Pair<wbr>Info<wbr>Target<wbr>Group]</a></span>
    </dt>
    <dd>{{% md %}}Configuration blocks for a target group within a target group pair (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>test<wbr>Traffic<wbr>Route</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#deploymentgrouploadbalancerinfotargetgrouppairinfotesttrafficroute">Dict[Deployment<wbr>Group<wbr>Load<wbr>Balancer<wbr>Info<wbr>Target<wbr>Group<wbr>Pair<wbr>Info<wbr>Test<wbr>Traffic<wbr>Route]</a></span>
    </dt>
    <dd>{{% md %}}Configuration block for the test traffic route (documented below).
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Deployment<wbr>Group<wbr>Load<wbr>Balancer<wbr>Info<wbr>Target<wbr>Group<wbr>Pair<wbr>Info<wbr>Prod<wbr>Traffic<wbr>Route</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#DeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#DeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/codedeploy?tab=doc#DeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/codedeploy?tab=doc#DeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Listener<wbr>Arns</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}List of Amazon Resource Names (ARNs) of the load balancer listeners.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Listener<wbr>Arns</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}List of Amazon Resource Names (ARNs) of the load balancer listeners.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>listener<wbr>Arns</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}List of Amazon Resource Names (ARNs) of the load balancer listeners.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>listener<wbr>Arns</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}List of Amazon Resource Names (ARNs) of the load balancer listeners.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Deployment<wbr>Group<wbr>Load<wbr>Balancer<wbr>Info<wbr>Target<wbr>Group<wbr>Pair<wbr>Info<wbr>Target<wbr>Group</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#DeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#DeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/codedeploy?tab=doc#DeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/codedeploy?tab=doc#DeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Name of the target group.
{{% /md %}}</dd>

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
    <dd>{{% md %}}Name of the target group.
{{% /md %}}</dd>

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
    <dd>{{% md %}}Name of the target group.
{{% /md %}}</dd>

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
    <dd>{{% md %}}Name of the target group.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Deployment<wbr>Group<wbr>Load<wbr>Balancer<wbr>Info<wbr>Target<wbr>Group<wbr>Pair<wbr>Info<wbr>Test<wbr>Traffic<wbr>Route</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#DeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#DeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/codedeploy?tab=doc#DeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/codedeploy?tab=doc#DeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Listener<wbr>Arns</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}List of Amazon Resource Names (ARNs) of the load balancer listeners.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Listener<wbr>Arns</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}List of Amazon Resource Names (ARNs) of the load balancer listeners.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>listener<wbr>Arns</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}List of Amazon Resource Names (ARNs) of the load balancer listeners.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>listener<wbr>Arns</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}List of Amazon Resource Names (ARNs) of the load balancer listeners.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Deployment<wbr>Group<wbr>On<wbr>Premises<wbr>Instance<wbr>Tag<wbr>Filter</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#DeploymentGroupOnPremisesInstanceTagFilter">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#DeploymentGroupOnPremisesInstanceTagFilter">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/codedeploy?tab=doc#DeploymentGroupOnPremisesInstanceTagFilterArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/codedeploy?tab=doc#DeploymentGroupOnPremisesInstanceTagFilterOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Key</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The key of the tag filter.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The type of the tag filter, either `KEY_ONLY`, `VALUE_ONLY`, or `KEY_AND_VALUE`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Value</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The value of the tag filter.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Key</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The key of the tag filter.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The type of the tag filter, either `KEY_ONLY`, `VALUE_ONLY`, or `KEY_AND_VALUE`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Value</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The value of the tag filter.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>key</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The key of the tag filter.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The type of the tag filter, either `KEY_ONLY`, `VALUE_ONLY`, or `KEY_AND_VALUE`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>value</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The value of the tag filter.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>key</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The key of the tag filter.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The type of the tag filter, either `KEY_ONLY`, `VALUE_ONLY`, or `KEY_AND_VALUE`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>value</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The value of the tag filter.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Deployment<wbr>Group<wbr>Trigger<wbr>Configuration</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#DeploymentGroupTriggerConfiguration">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#DeploymentGroupTriggerConfiguration">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/codedeploy?tab=doc#DeploymentGroupTriggerConfigurationArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/codedeploy?tab=doc#DeploymentGroupTriggerConfigurationOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Trigger<wbr>Events</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}The event type or types for which notifications are triggered. Some values that are supported: `DeploymentStart`, `DeploymentSuccess`, `DeploymentFailure`, `DeploymentStop`, `DeploymentRollback`, `InstanceStart`, `InstanceSuccess`, `InstanceFailure`.  See [the CodeDeploy documentation][1] for all possible values.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Trigger<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the notification trigger.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Trigger<wbr>Target<wbr>Arn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The ARN of the SNS topic through which notifications are sent.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Trigger<wbr>Events</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}The event type or types for which notifications are triggered. Some values that are supported: `DeploymentStart`, `DeploymentSuccess`, `DeploymentFailure`, `DeploymentStop`, `DeploymentRollback`, `InstanceStart`, `InstanceSuccess`, `InstanceFailure`.  See [the CodeDeploy documentation][1] for all possible values.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Trigger<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the notification trigger.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Trigger<wbr>Target<wbr>Arn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The ARN of the SNS topic through which notifications are sent.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>trigger<wbr>Events</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}The event type or types for which notifications are triggered. Some values that are supported: `DeploymentStart`, `DeploymentSuccess`, `DeploymentFailure`, `DeploymentStop`, `DeploymentRollback`, `InstanceStart`, `InstanceSuccess`, `InstanceFailure`.  See [the CodeDeploy documentation][1] for all possible values.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>trigger<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the notification trigger.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>trigger<wbr>Target<wbr>Arn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The ARN of the SNS topic through which notifications are sent.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>trigger<wbr>Events</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}The event type or types for which notifications are triggered. Some values that are supported: `DeploymentStart`, `DeploymentSuccess`, `DeploymentFailure`, `DeploymentStop`, `DeploymentRollback`, `InstanceStart`, `InstanceSuccess`, `InstanceFailure`.  See [the CodeDeploy documentation][1] for all possible values.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>trigger<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the notification trigger.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>trigger<wbr>Target<wbr>Arn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The ARN of the SNS topic through which notifications are sent.
{{% /md %}}</dd>

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

