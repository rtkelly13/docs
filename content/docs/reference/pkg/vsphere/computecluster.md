
---
title: "ComputeCluster"
block_external_search_index: true
---






## Create a ComputeCluster Resource

{{< chooser language "javascript,typescript,python,go,csharp" / >}}

{{% choosable language nodejs %}}
<div class="highlight"><pre class="chroma"><code class="language-typescript" data-lang="typescript"><span class="k">new </span><span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/vsphere/#ComputeCluster">ComputeCluster</a></span><span class="p">(</span><span class="nx">name</span>: <span class="nx"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span><span class="p">, </span><span class="nx">args</span>: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/vsphere/#ComputeClusterArgs">ComputeClusterArgs</a></span><span class="p">, </span><span class="nx">opts</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions">CustomResourceOptions</a></span><span class="p">);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language python %}}
<div class="highlight"><pre class="chroma"><code class="language-python" data-lang="python"><span class="k">def </span><span class="nf">ComputeCluster</span><span class="p">(resource_name, opts=None, </span>custom_attributes=None<span class="p">, </span>datacenter_id=None<span class="p">, </span>dpm_automation_level=None<span class="p">, </span>dpm_enabled=None<span class="p">, </span>dpm_threshold=None<span class="p">, </span>drs_advanced_options=None<span class="p">, </span>drs_automation_level=None<span class="p">, </span>drs_enable_predictive_drs=None<span class="p">, </span>drs_enable_vm_overrides=None<span class="p">, </span>drs_enabled=None<span class="p">, </span>drs_migration_threshold=None<span class="p">, </span>folder=None<span class="p">, </span>force_evacuate_on_destroy=None<span class="p">, </span>ha_admission_control_failover_host_system_ids=None<span class="p">, </span>ha_admission_control_host_failure_tolerance=None<span class="p">, </span>ha_admission_control_performance_tolerance=None<span class="p">, </span>ha_admission_control_policy=None<span class="p">, </span>ha_admission_control_resource_percentage_auto_compute=None<span class="p">, </span>ha_admission_control_resource_percentage_cpu=None<span class="p">, </span>ha_admission_control_resource_percentage_memory=None<span class="p">, </span>ha_admission_control_slot_policy_explicit_cpu=None<span class="p">, </span>ha_admission_control_slot_policy_explicit_memory=None<span class="p">, </span>ha_admission_control_slot_policy_use_explicit_size=None<span class="p">, </span>ha_advanced_options=None<span class="p">, </span>ha_datastore_apd_recovery_action=None<span class="p">, </span>ha_datastore_apd_response=None<span class="p">, </span>ha_datastore_apd_response_delay=None<span class="p">, </span>ha_datastore_pdl_response=None<span class="p">, </span>ha_enabled=None<span class="p">, </span>ha_heartbeat_datastore_ids=None<span class="p">, </span>ha_heartbeat_datastore_policy=None<span class="p">, </span>ha_host_isolation_response=None<span class="p">, </span>ha_host_monitoring=None<span class="p">, </span>ha_vm_component_protection=None<span class="p">, </span>ha_vm_dependency_restart_condition=None<span class="p">, </span>ha_vm_failure_interval=None<span class="p">, </span>ha_vm_maximum_failure_window=None<span class="p">, </span>ha_vm_maximum_resets=None<span class="p">, </span>ha_vm_minimum_uptime=None<span class="p">, </span>ha_vm_monitoring=None<span class="p">, </span>ha_vm_restart_additional_delay=None<span class="p">, </span>ha_vm_restart_priority=None<span class="p">, </span>ha_vm_restart_timeout=None<span class="p">, </span>host_cluster_exit_timeout=None<span class="p">, </span>host_system_ids=None<span class="p">, </span>name=None<span class="p">, </span>proactive_ha_automation_level=None<span class="p">, </span>proactive_ha_enabled=None<span class="p">, </span>proactive_ha_moderate_remediation=None<span class="p">, </span>proactive_ha_provider_ids=None<span class="p">, </span>proactive_ha_severe_remediation=None<span class="p">, </span>tags=None<span class="p">, __props__=None);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language go %}}
<div class="highlight"><pre class="chroma"><code class="language-go" data-lang="go"><span class="k">func </span>NewComputeCluster<span class="p">(</span><span class="nx">ctx</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#Context">Context</a></span><span class="p">, </span><span class="nx">name</span> <span class="nx"><a href="https://golang.org/pkg/builtin/#string">string</a></span><span class="p">, </span><span class="nx">args</span> <span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-vsphere/sdk/v2/go/vsphere/?tab=doc#ComputeClusterArgs">ComputeClusterArgs</a></span><span class="p">, </span><span class="nx">opts</span> ...<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#ResourceOption">ResourceOption</a></span><span class="p">) (*<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-vsphere/sdk/v2/go/vsphere/?tab=doc#ComputeCluster">ComputeCluster</a></span>, error)</span></code></pre></div>
{{% /choosable %}}

{{% choosable language csharp %}}
<div class="highlight"><pre class="chroma"><code class="language-csharp" data-lang="csharp"><span class="k">public </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Vsphere/Pulumi.Vsphere.ComputeCluster.html">ComputeCluster</a></span><span class="p">(</span><span class="nx"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span> <span class="nx">name<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Vsphere/Pulumi.VSphere.ComputeClusterArgs.html">ComputeClusterArgs</a></span> <span class="nx">args<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.CustomResourceOptions.html">CustomResourceOptions</a></span>? <span class="nx">opts = null<span class="p">)</span></code></pre></div>
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
        <span>Datacenter<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The [managed object ID][docs-about-morefs] of
the datacenter to create the cluster in. Forces a new resource if changed.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Custom<wbr>Attributes</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dictionary&lt;string, string&gt;</span>
    </dt>
    <dd>{{% md %}}A map of custom attribute ids to attribute
value strings to set for the datastore cluster. See
[here][docs-setting-custom-attributes] for a reference on how to set values
for custom attributes.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Dpm<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The automation level for host power
operations in this cluster. Can be one of `manual` or `automated`. Default:
`manual`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Dpm<wbr>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Enable DPM support for DRS in this cluster.
Requires `drs_enabled` to be `true` in order to be effective.
Default: `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Dpm<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}A value between `1` and `5` indicating the
threshold of load within the cluster that influences host power operations.
This affects both power on and power off operations - a lower setting will
tolerate more of a surplus/deficit than a higher setting. Default: `3`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Drs<wbr>Advanced<wbr>Options</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dictionary&lt;string, string&gt;</span>
    </dt>
    <dd>{{% md %}}A key/value map that specifies advanced
options for DRS and DPM.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Drs<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The default automation level for all
virtual machines in this cluster. Can be one of `manual`,
`partiallyAutomated`, or `fullyAutomated`. Default: `manual`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Drs<wbr>Enable<wbr>Predictive<wbr>Drs</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}When `true`, enables DRS to use data
from [vRealize Operations Manager][ref-vsphere-vro] to make proactive DRS
recommendations. <sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Drs<wbr>Enable<wbr>Vm<wbr>Overrides</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Allow individual DRS overrides to be
set for virtual machines in the cluster. Default: `true`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Drs<wbr>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Enable DRS for this cluster. Default: `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Drs<wbr>Migration<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}A value between `1` and `5` indicating
the threshold of imbalance tolerated between hosts. A lower setting will
tolerate more imbalance while a higher setting will tolerate less. Default:
`3`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Folder</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the folder to locate the cluster in.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Force<wbr>Evacuate<wbr>On<wbr>Destroy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Force removal of all hosts in the cluster during destroy and make them standalone hosts. Use of this flag mainly exists
for testing and is not recommended in normal use.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Admission<wbr>Control<wbr>Failover<wbr>Host<wbr>System<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}Defines the
[managed object IDs][docs-about-morefs] of hosts to use as dedicated failover
hosts. These hosts are kept as available as possible - admission control will
block access to the host, and DRS will ignore the host when making
recommendations.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Admission<wbr>Control<wbr>Host<wbr>Failure<wbr>Tolerance</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The maximum number
of failed hosts that admission control tolerates when making decisions on
whether to permit virtual machine operations. The maximum is one less than
the number of hosts in the cluster. Default: `1`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Admission<wbr>Control<wbr>Performance<wbr>Tolerance</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The percentage of
resource reduction that a cluster of virtual machines can tolerate in case of
a failover. A value of 0 produces warnings only, whereas a value of 100
disables the setting. Default: `100` (disabled).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Admission<wbr>Control<wbr>Policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The type of admission control
policy to use with vSphere HA. Can be one of `resourcePercentage`,
`slotPolicy`, `failoverHosts`, or `disabled`. Default: `resourcePercentage`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Admission<wbr>Control<wbr>Resource<wbr>Percentage<wbr>Auto<wbr>Compute</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}
Automatically determine available resource percentages by subtracting the
average number of host resources represented by the
`ha_admission_control_host_failure_tolerance`
setting from the total amount of resources in the cluster. Disable to supply
user-defined values. Default: `true`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Admission<wbr>Control<wbr>Resource<wbr>Percentage<wbr>Cpu</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}Controls the
user-defined percentage of CPU resources in the cluster to reserve for
failover. Default: `100`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Admission<wbr>Control<wbr>Resource<wbr>Percentage<wbr>Memory</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}Controls the
user-defined percentage of memory resources in the cluster to reserve for
failover. Default: `100`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Admission<wbr>Control<wbr>Slot<wbr>Policy<wbr>Explicit<wbr>Cpu</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}Controls the
user-defined CPU slot size, in MHz. Default: `32`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Admission<wbr>Control<wbr>Slot<wbr>Policy<wbr>Explicit<wbr>Memory</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}Controls the
user-defined memory slot size, in MB. Default: `100`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Admission<wbr>Control<wbr>Slot<wbr>Policy<wbr>Use<wbr>Explicit<wbr>Size</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Controls
whether or not you wish to supply explicit values to CPU and memory slot
sizes. The default is `false`, which tells vSphere to gather a automatic
average based on all powered-on virtual machines currently in the cluster.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Advanced<wbr>Options</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dictionary&lt;string, string&gt;</span>
    </dt>
    <dd>{{% md %}}A key/value map that specifies advanced
options for vSphere HA.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Datastore<wbr>Apd<wbr>Recovery<wbr>Action</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Controls the action to take
on virtual machines if an APD status on an affected datastore clears in the
middle of an APD event. Can be one of `none` or `reset`. Default: `none`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Datastore<wbr>Apd<wbr>Response</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Controls the action to take on
virtual machines when the cluster has detected loss to all paths to a
relevant datastore. Can be one of `disabled`, `warning`,
`restartConservative`, or `restartAggressive`.  Default: `disabled`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Datastore<wbr>Apd<wbr>Response<wbr>Delay</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}Controls the delay in minutes
to wait after an APD timeout event to execute the response action defined in
`ha_datastore_apd_response`. Default: `3`
minutes. <sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Datastore<wbr>Pdl<wbr>Response</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Controls the action to take on
virtual machines when the cluster has detected a permanent device loss to a
relevant datastore. Can be one of `disabled`, `warning`, or
`restartAggressive`. Default: `disabled`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Enable vSphere HA for this cluster. Default:
`false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Heartbeat<wbr>Datastore<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}The list of managed object IDs for
preferred datastores to use for HA heartbeating. This setting is only useful
when `ha_heartbeat_datastore_policy` is set
to either `userSelectedDs` or `allFeasibleDsWithUserPreference`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Heartbeat<wbr>Datastore<wbr>Policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The selection policy for HA
heartbeat datastores. Can be one of `allFeasibleDs`, `userSelectedDs`, or
`allFeasibleDsWithUserPreference`. Default:
`allFeasibleDsWithUserPreference`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Host<wbr>Isolation<wbr>Response</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The action to take on virtual
machines when a host has detected that it has been isolated from the rest of
the cluster. Can be one of `none`, `powerOff`, or `shutdown`. Default:
`none`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Host<wbr>Monitoring</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Global setting that controls whether
vSphere HA remediates virtual machines on host failure. Can be one of `enabled`
or `disabled`. Default: `enabled`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Vm<wbr>Component<wbr>Protection</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Controls vSphere VM component
protection for virtual machines in this cluster. Can be one of `enabled` or
`disabled`. Default: `enabled`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Vm<wbr>Dependency<wbr>Restart<wbr>Condition</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The condition used to
determine whether or not virtual machines in a certain restart priority class
are online, allowing HA to move on to restarting virtual machines on the next
priority. Can be one of `none`, `poweredOn`, `guestHbStatusGreen`, or
`appHbStatusGreen`. The default is `none`, which means that a virtual machine
is considered ready immediately after a host is found to start it on.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Vm<wbr>Failure<wbr>Interval</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}If a heartbeat from a virtual machine
is not received within this configured interval, the virtual machine is
marked as failed. The value is in seconds. Default: `30`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Vm<wbr>Maximum<wbr>Failure<wbr>Window</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The length of the reset window in
which `ha_vm_maximum_resets` can operate. When this
window expires, no more resets are attempted regardless of the setting
configured in `ha_vm_maximum_resets`. `-1` means no window, meaning an
unlimited reset time is allotted. The value is specified in seconds. Default:
`-1` (no window).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Vm<wbr>Maximum<wbr>Resets</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The maximum number of resets that HA will
perform to a virtual machine when responding to a failure event. Default: `3`
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Vm<wbr>Minimum<wbr>Uptime</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The time, in seconds, that HA waits after
powering on a virtual machine before monitoring for heartbeats. Default:
`120` (2 minutes).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Vm<wbr>Monitoring</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The type of virtual machine monitoring to use
when HA is enabled in the cluster. Can be one of `vmMonitoringDisabled`,
`vmMonitoringOnly`, or `vmAndAppMonitoring`. Default: `vmMonitoringDisabled`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Vm<wbr>Restart<wbr>Additional<wbr>Delay</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}Additional delay in seconds
after ready condition is met. A VM is considered ready at this point.
Default: `0` (no delay). <sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Vm<wbr>Restart<wbr>Priority</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The default restart priority
for affected virtual machines when vSphere detects a host failure. Can be one
of `lowest`, `low`, `medium`, `high`, or `highest`. Default: `medium`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Vm<wbr>Restart<wbr>Timeout</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The maximum time, in seconds,
that vSphere HA will wait for virtual machines in one priority to be ready
before proceeding with the next priority. Default: `600` (10 minutes).
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Host<wbr>Cluster<wbr>Exit<wbr>Timeout</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The timeout for each host maintenance mode
operation when removing hosts from a cluster. The value is specified in
seconds. Default: `3600` (1 hour).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Host<wbr>System<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}The [managed object IDs][docs-about-morefs] of
the hosts to put in the cluster.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the cluster.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Proactive<wbr>Ha<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Determines how the host
quarantine, maintenance mode, or virtual machine migration recommendations
made by proactive HA are to be handled. Can be one of `Automated` or
`Manual`. Default: `Manual`. <sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Proactive<wbr>Ha<wbr>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Enables Proactive HA. Default: `false`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Proactive<wbr>Ha<wbr>Moderate<wbr>Remediation</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The configured remediation
for moderately degraded hosts. Can be one of `MaintenanceMode` or
`QuarantineMode`. Note that this cannot be set to `MaintenanceMode` when
`proactive_ha_severe_remediation` is set
to `QuarantineMode`. Default: `QuarantineMode`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Proactive<wbr>Ha<wbr>Provider<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}The list of IDs for health update
providers configured for this cluster.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Proactive<wbr>Ha<wbr>Severe<wbr>Remediation</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The configured remediation for
severely degraded hosts. Can be one of `MaintenanceMode` or `QuarantineMode`.
Note that this cannot be set to `QuarantineMode` when
`proactive_ha_moderate_remediation` is
set to `MaintenanceMode`. Default: `QuarantineMode`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Tags</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}The IDs of any tags to attach to this resource. See
[here][docs-applying-tags] for a reference on how to apply tags.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Datacenter<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The [managed object ID][docs-about-morefs] of
the datacenter to create the cluster in. Forces a new resource if changed.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Custom<wbr>Attributes</span>
        <span class="property-indicator"></span>
        <span class="property-type">map[string]string</span>
    </dt>
    <dd>{{% md %}}A map of custom attribute ids to attribute
value strings to set for the datastore cluster. See
[here][docs-setting-custom-attributes] for a reference on how to set values
for custom attributes.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Dpm<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The automation level for host power
operations in this cluster. Can be one of `manual` or `automated`. Default:
`manual`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Dpm<wbr>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Enable DPM support for DRS in this cluster.
Requires `drs_enabled` to be `true` in order to be effective.
Default: `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Dpm<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}A value between `1` and `5` indicating the
threshold of load within the cluster that influences host power operations.
This affects both power on and power off operations - a lower setting will
tolerate more of a surplus/deficit than a higher setting. Default: `3`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Drs<wbr>Advanced<wbr>Options</span>
        <span class="property-indicator"></span>
        <span class="property-type">map[string]string</span>
    </dt>
    <dd>{{% md %}}A key/value map that specifies advanced
options for DRS and DPM.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Drs<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The default automation level for all
virtual machines in this cluster. Can be one of `manual`,
`partiallyAutomated`, or `fullyAutomated`. Default: `manual`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Drs<wbr>Enable<wbr>Predictive<wbr>Drs</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}When `true`, enables DRS to use data
from [vRealize Operations Manager][ref-vsphere-vro] to make proactive DRS
recommendations. <sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Drs<wbr>Enable<wbr>Vm<wbr>Overrides</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Allow individual DRS overrides to be
set for virtual machines in the cluster. Default: `true`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Drs<wbr>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Enable DRS for this cluster. Default: `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Drs<wbr>Migration<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}A value between `1` and `5` indicating
the threshold of imbalance tolerated between hosts. A lower setting will
tolerate more imbalance while a higher setting will tolerate less. Default:
`3`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Folder</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the folder to locate the cluster in.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Force<wbr>Evacuate<wbr>On<wbr>Destroy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Force removal of all hosts in the cluster during destroy and make them standalone hosts. Use of this flag mainly exists
for testing and is not recommended in normal use.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Admission<wbr>Control<wbr>Failover<wbr>Host<wbr>System<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}Defines the
[managed object IDs][docs-about-morefs] of hosts to use as dedicated failover
hosts. These hosts are kept as available as possible - admission control will
block access to the host, and DRS will ignore the host when making
recommendations.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Admission<wbr>Control<wbr>Host<wbr>Failure<wbr>Tolerance</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The maximum number
of failed hosts that admission control tolerates when making decisions on
whether to permit virtual machine operations. The maximum is one less than
the number of hosts in the cluster. Default: `1`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Admission<wbr>Control<wbr>Performance<wbr>Tolerance</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The percentage of
resource reduction that a cluster of virtual machines can tolerate in case of
a failover. A value of 0 produces warnings only, whereas a value of 100
disables the setting. Default: `100` (disabled).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Admission<wbr>Control<wbr>Policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The type of admission control
policy to use with vSphere HA. Can be one of `resourcePercentage`,
`slotPolicy`, `failoverHosts`, or `disabled`. Default: `resourcePercentage`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Admission<wbr>Control<wbr>Resource<wbr>Percentage<wbr>Auto<wbr>Compute</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}
Automatically determine available resource percentages by subtracting the
average number of host resources represented by the
`ha_admission_control_host_failure_tolerance`
setting from the total amount of resources in the cluster. Disable to supply
user-defined values. Default: `true`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Admission<wbr>Control<wbr>Resource<wbr>Percentage<wbr>Cpu</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}Controls the
user-defined percentage of CPU resources in the cluster to reserve for
failover. Default: `100`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Admission<wbr>Control<wbr>Resource<wbr>Percentage<wbr>Memory</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}Controls the
user-defined percentage of memory resources in the cluster to reserve for
failover. Default: `100`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Admission<wbr>Control<wbr>Slot<wbr>Policy<wbr>Explicit<wbr>Cpu</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}Controls the
user-defined CPU slot size, in MHz. Default: `32`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Admission<wbr>Control<wbr>Slot<wbr>Policy<wbr>Explicit<wbr>Memory</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}Controls the
user-defined memory slot size, in MB. Default: `100`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Admission<wbr>Control<wbr>Slot<wbr>Policy<wbr>Use<wbr>Explicit<wbr>Size</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Controls
whether or not you wish to supply explicit values to CPU and memory slot
sizes. The default is `false`, which tells vSphere to gather a automatic
average based on all powered-on virtual machines currently in the cluster.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Advanced<wbr>Options</span>
        <span class="property-indicator"></span>
        <span class="property-type">map[string]string</span>
    </dt>
    <dd>{{% md %}}A key/value map that specifies advanced
options for vSphere HA.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Datastore<wbr>Apd<wbr>Recovery<wbr>Action</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Controls the action to take
on virtual machines if an APD status on an affected datastore clears in the
middle of an APD event. Can be one of `none` or `reset`. Default: `none`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Datastore<wbr>Apd<wbr>Response</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Controls the action to take on
virtual machines when the cluster has detected loss to all paths to a
relevant datastore. Can be one of `disabled`, `warning`,
`restartConservative`, or `restartAggressive`.  Default: `disabled`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Datastore<wbr>Apd<wbr>Response<wbr>Delay</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}Controls the delay in minutes
to wait after an APD timeout event to execute the response action defined in
`ha_datastore_apd_response`. Default: `3`
minutes. <sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Datastore<wbr>Pdl<wbr>Response</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Controls the action to take on
virtual machines when the cluster has detected a permanent device loss to a
relevant datastore. Can be one of `disabled`, `warning`, or
`restartAggressive`. Default: `disabled`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Enable vSphere HA for this cluster. Default:
`false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Heartbeat<wbr>Datastore<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}The list of managed object IDs for
preferred datastores to use for HA heartbeating. This setting is only useful
when `ha_heartbeat_datastore_policy` is set
to either `userSelectedDs` or `allFeasibleDsWithUserPreference`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Heartbeat<wbr>Datastore<wbr>Policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The selection policy for HA
heartbeat datastores. Can be one of `allFeasibleDs`, `userSelectedDs`, or
`allFeasibleDsWithUserPreference`. Default:
`allFeasibleDsWithUserPreference`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Host<wbr>Isolation<wbr>Response</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The action to take on virtual
machines when a host has detected that it has been isolated from the rest of
the cluster. Can be one of `none`, `powerOff`, or `shutdown`. Default:
`none`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Host<wbr>Monitoring</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Global setting that controls whether
vSphere HA remediates virtual machines on host failure. Can be one of `enabled`
or `disabled`. Default: `enabled`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Vm<wbr>Component<wbr>Protection</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Controls vSphere VM component
protection for virtual machines in this cluster. Can be one of `enabled` or
`disabled`. Default: `enabled`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Vm<wbr>Dependency<wbr>Restart<wbr>Condition</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The condition used to
determine whether or not virtual machines in a certain restart priority class
are online, allowing HA to move on to restarting virtual machines on the next
priority. Can be one of `none`, `poweredOn`, `guestHbStatusGreen`, or
`appHbStatusGreen`. The default is `none`, which means that a virtual machine
is considered ready immediately after a host is found to start it on.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Vm<wbr>Failure<wbr>Interval</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}If a heartbeat from a virtual machine
is not received within this configured interval, the virtual machine is
marked as failed. The value is in seconds. Default: `30`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Vm<wbr>Maximum<wbr>Failure<wbr>Window</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The length of the reset window in
which `ha_vm_maximum_resets` can operate. When this
window expires, no more resets are attempted regardless of the setting
configured in `ha_vm_maximum_resets`. `-1` means no window, meaning an
unlimited reset time is allotted. The value is specified in seconds. Default:
`-1` (no window).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Vm<wbr>Maximum<wbr>Resets</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The maximum number of resets that HA will
perform to a virtual machine when responding to a failure event. Default: `3`
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Vm<wbr>Minimum<wbr>Uptime</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The time, in seconds, that HA waits after
powering on a virtual machine before monitoring for heartbeats. Default:
`120` (2 minutes).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Vm<wbr>Monitoring</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The type of virtual machine monitoring to use
when HA is enabled in the cluster. Can be one of `vmMonitoringDisabled`,
`vmMonitoringOnly`, or `vmAndAppMonitoring`. Default: `vmMonitoringDisabled`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Vm<wbr>Restart<wbr>Additional<wbr>Delay</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}Additional delay in seconds
after ready condition is met. A VM is considered ready at this point.
Default: `0` (no delay). <sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Vm<wbr>Restart<wbr>Priority</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The default restart priority
for affected virtual machines when vSphere detects a host failure. Can be one
of `lowest`, `low`, `medium`, `high`, or `highest`. Default: `medium`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Vm<wbr>Restart<wbr>Timeout</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The maximum time, in seconds,
that vSphere HA will wait for virtual machines in one priority to be ready
before proceeding with the next priority. Default: `600` (10 minutes).
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Host<wbr>Cluster<wbr>Exit<wbr>Timeout</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The timeout for each host maintenance mode
operation when removing hosts from a cluster. The value is specified in
seconds. Default: `3600` (1 hour).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Host<wbr>System<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}The [managed object IDs][docs-about-morefs] of
the hosts to put in the cluster.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the cluster.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Proactive<wbr>Ha<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Determines how the host
quarantine, maintenance mode, or virtual machine migration recommendations
made by proactive HA are to be handled. Can be one of `Automated` or
`Manual`. Default: `Manual`. <sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Proactive<wbr>Ha<wbr>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Enables Proactive HA. Default: `false`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Proactive<wbr>Ha<wbr>Moderate<wbr>Remediation</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The configured remediation
for moderately degraded hosts. Can be one of `MaintenanceMode` or
`QuarantineMode`. Note that this cannot be set to `MaintenanceMode` when
`proactive_ha_severe_remediation` is set
to `QuarantineMode`. Default: `QuarantineMode`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Proactive<wbr>Ha<wbr>Provider<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}The list of IDs for health update
providers configured for this cluster.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Proactive<wbr>Ha<wbr>Severe<wbr>Remediation</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The configured remediation for
severely degraded hosts. Can be one of `MaintenanceMode` or `QuarantineMode`.
Note that this cannot be set to `QuarantineMode` when
`proactive_ha_moderate_remediation` is
set to `MaintenanceMode`. Default: `QuarantineMode`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Tags</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}The IDs of any tags to attach to this resource. See
[here][docs-applying-tags] for a reference on how to apply tags.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>datacenter<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The [managed object ID][docs-about-morefs] of
the datacenter to create the cluster in. Forces a new resource if changed.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>custom<wbr>Attributes</span>
        <span class="property-indicator"></span>
        <span class="property-type">{[key: string]: string}</span>
    </dt>
    <dd>{{% md %}}A map of custom attribute ids to attribute
value strings to set for the datastore cluster. See
[here][docs-setting-custom-attributes] for a reference on how to set values
for custom attributes.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>dpm<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The automation level for host power
operations in this cluster. Can be one of `manual` or `automated`. Default:
`manual`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>dpm<wbr>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Enable DPM support for DRS in this cluster.
Requires `drs_enabled` to be `true` in order to be effective.
Default: `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>dpm<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}A value between `1` and `5` indicating the
threshold of load within the cluster that influences host power operations.
This affects both power on and power off operations - a lower setting will
tolerate more of a surplus/deficit than a higher setting. Default: `3`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>drs<wbr>Advanced<wbr>Options</span>
        <span class="property-indicator"></span>
        <span class="property-type">{[key: string]: string}</span>
    </dt>
    <dd>{{% md %}}A key/value map that specifies advanced
options for DRS and DPM.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>drs<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The default automation level for all
virtual machines in this cluster. Can be one of `manual`,
`partiallyAutomated`, or `fullyAutomated`. Default: `manual`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>drs<wbr>Enable<wbr>Predictive<wbr>Drs</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}When `true`, enables DRS to use data
from [vRealize Operations Manager][ref-vsphere-vro] to make proactive DRS
recommendations. <sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>drs<wbr>Enable<wbr>Vm<wbr>Overrides</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Allow individual DRS overrides to be
set for virtual machines in the cluster. Default: `true`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>drs<wbr>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Enable DRS for this cluster. Default: `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>drs<wbr>Migration<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}A value between `1` and `5` indicating
the threshold of imbalance tolerated between hosts. A lower setting will
tolerate more imbalance while a higher setting will tolerate less. Default:
`3`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>folder</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the folder to locate the cluster in.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>force<wbr>Evacuate<wbr>On<wbr>Destroy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Force removal of all hosts in the cluster during destroy and make them standalone hosts. Use of this flag mainly exists
for testing and is not recommended in normal use.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Admission<wbr>Control<wbr>Failover<wbr>Host<wbr>System<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}Defines the
[managed object IDs][docs-about-morefs] of hosts to use as dedicated failover
hosts. These hosts are kept as available as possible - admission control will
block access to the host, and DRS will ignore the host when making
recommendations.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Admission<wbr>Control<wbr>Host<wbr>Failure<wbr>Tolerance</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The maximum number
of failed hosts that admission control tolerates when making decisions on
whether to permit virtual machine operations. The maximum is one less than
the number of hosts in the cluster. Default: `1`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Admission<wbr>Control<wbr>Performance<wbr>Tolerance</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The percentage of
resource reduction that a cluster of virtual machines can tolerate in case of
a failover. A value of 0 produces warnings only, whereas a value of 100
disables the setting. Default: `100` (disabled).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Admission<wbr>Control<wbr>Policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The type of admission control
policy to use with vSphere HA. Can be one of `resourcePercentage`,
`slotPolicy`, `failoverHosts`, or `disabled`. Default: `resourcePercentage`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Admission<wbr>Control<wbr>Resource<wbr>Percentage<wbr>Auto<wbr>Compute</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}
Automatically determine available resource percentages by subtracting the
average number of host resources represented by the
`ha_admission_control_host_failure_tolerance`
setting from the total amount of resources in the cluster. Disable to supply
user-defined values. Default: `true`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Admission<wbr>Control<wbr>Resource<wbr>Percentage<wbr>Cpu</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}Controls the
user-defined percentage of CPU resources in the cluster to reserve for
failover. Default: `100`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Admission<wbr>Control<wbr>Resource<wbr>Percentage<wbr>Memory</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}Controls the
user-defined percentage of memory resources in the cluster to reserve for
failover. Default: `100`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Admission<wbr>Control<wbr>Slot<wbr>Policy<wbr>Explicit<wbr>Cpu</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}Controls the
user-defined CPU slot size, in MHz. Default: `32`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Admission<wbr>Control<wbr>Slot<wbr>Policy<wbr>Explicit<wbr>Memory</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}Controls the
user-defined memory slot size, in MB. Default: `100`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Admission<wbr>Control<wbr>Slot<wbr>Policy<wbr>Use<wbr>Explicit<wbr>Size</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Controls
whether or not you wish to supply explicit values to CPU and memory slot
sizes. The default is `false`, which tells vSphere to gather a automatic
average based on all powered-on virtual machines currently in the cluster.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Advanced<wbr>Options</span>
        <span class="property-indicator"></span>
        <span class="property-type">{[key: string]: string}</span>
    </dt>
    <dd>{{% md %}}A key/value map that specifies advanced
options for vSphere HA.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Datastore<wbr>Apd<wbr>Recovery<wbr>Action</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Controls the action to take
on virtual machines if an APD status on an affected datastore clears in the
middle of an APD event. Can be one of `none` or `reset`. Default: `none`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Datastore<wbr>Apd<wbr>Response</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Controls the action to take on
virtual machines when the cluster has detected loss to all paths to a
relevant datastore. Can be one of `disabled`, `warning`,
`restartConservative`, or `restartAggressive`.  Default: `disabled`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Datastore<wbr>Apd<wbr>Response<wbr>Delay</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}Controls the delay in minutes
to wait after an APD timeout event to execute the response action defined in
`ha_datastore_apd_response`. Default: `3`
minutes. <sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Datastore<wbr>Pdl<wbr>Response</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Controls the action to take on
virtual machines when the cluster has detected a permanent device loss to a
relevant datastore. Can be one of `disabled`, `warning`, or
`restartAggressive`. Default: `disabled`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Enable vSphere HA for this cluster. Default:
`false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Heartbeat<wbr>Datastore<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}The list of managed object IDs for
preferred datastores to use for HA heartbeating. This setting is only useful
when `ha_heartbeat_datastore_policy` is set
to either `userSelectedDs` or `allFeasibleDsWithUserPreference`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Heartbeat<wbr>Datastore<wbr>Policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The selection policy for HA
heartbeat datastores. Can be one of `allFeasibleDs`, `userSelectedDs`, or
`allFeasibleDsWithUserPreference`. Default:
`allFeasibleDsWithUserPreference`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Host<wbr>Isolation<wbr>Response</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The action to take on virtual
machines when a host has detected that it has been isolated from the rest of
the cluster. Can be one of `none`, `powerOff`, or `shutdown`. Default:
`none`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Host<wbr>Monitoring</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Global setting that controls whether
vSphere HA remediates virtual machines on host failure. Can be one of `enabled`
or `disabled`. Default: `enabled`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Vm<wbr>Component<wbr>Protection</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Controls vSphere VM component
protection for virtual machines in this cluster. Can be one of `enabled` or
`disabled`. Default: `enabled`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Vm<wbr>Dependency<wbr>Restart<wbr>Condition</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The condition used to
determine whether or not virtual machines in a certain restart priority class
are online, allowing HA to move on to restarting virtual machines on the next
priority. Can be one of `none`, `poweredOn`, `guestHbStatusGreen`, or
`appHbStatusGreen`. The default is `none`, which means that a virtual machine
is considered ready immediately after a host is found to start it on.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Vm<wbr>Failure<wbr>Interval</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}If a heartbeat from a virtual machine
is not received within this configured interval, the virtual machine is
marked as failed. The value is in seconds. Default: `30`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Vm<wbr>Maximum<wbr>Failure<wbr>Window</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The length of the reset window in
which `ha_vm_maximum_resets` can operate. When this
window expires, no more resets are attempted regardless of the setting
configured in `ha_vm_maximum_resets`. `-1` means no window, meaning an
unlimited reset time is allotted. The value is specified in seconds. Default:
`-1` (no window).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Vm<wbr>Maximum<wbr>Resets</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The maximum number of resets that HA will
perform to a virtual machine when responding to a failure event. Default: `3`
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Vm<wbr>Minimum<wbr>Uptime</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The time, in seconds, that HA waits after
powering on a virtual machine before monitoring for heartbeats. Default:
`120` (2 minutes).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Vm<wbr>Monitoring</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The type of virtual machine monitoring to use
when HA is enabled in the cluster. Can be one of `vmMonitoringDisabled`,
`vmMonitoringOnly`, or `vmAndAppMonitoring`. Default: `vmMonitoringDisabled`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Vm<wbr>Restart<wbr>Additional<wbr>Delay</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}Additional delay in seconds
after ready condition is met. A VM is considered ready at this point.
Default: `0` (no delay). <sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Vm<wbr>Restart<wbr>Priority</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The default restart priority
for affected virtual machines when vSphere detects a host failure. Can be one
of `lowest`, `low`, `medium`, `high`, or `highest`. Default: `medium`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Vm<wbr>Restart<wbr>Timeout</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The maximum time, in seconds,
that vSphere HA will wait for virtual machines in one priority to be ready
before proceeding with the next priority. Default: `600` (10 minutes).
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>host<wbr>Cluster<wbr>Exit<wbr>Timeout</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The timeout for each host maintenance mode
operation when removing hosts from a cluster. The value is specified in
seconds. Default: `3600` (1 hour).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>host<wbr>System<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}The [managed object IDs][docs-about-morefs] of
the hosts to put in the cluster.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the cluster.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>proactive<wbr>Ha<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Determines how the host
quarantine, maintenance mode, or virtual machine migration recommendations
made by proactive HA are to be handled. Can be one of `Automated` or
`Manual`. Default: `Manual`. <sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>proactive<wbr>Ha<wbr>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Enables Proactive HA. Default: `false`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>proactive<wbr>Ha<wbr>Moderate<wbr>Remediation</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The configured remediation
for moderately degraded hosts. Can be one of `MaintenanceMode` or
`QuarantineMode`. Note that this cannot be set to `MaintenanceMode` when
`proactive_ha_severe_remediation` is set
to `QuarantineMode`. Default: `QuarantineMode`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>proactive<wbr>Ha<wbr>Provider<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}The list of IDs for health update
providers configured for this cluster.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>proactive<wbr>Ha<wbr>Severe<wbr>Remediation</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The configured remediation for
severely degraded hosts. Can be one of `MaintenanceMode` or `QuarantineMode`.
Note that this cannot be set to `QuarantineMode` when
`proactive_ha_moderate_remediation` is
set to `MaintenanceMode`. Default: `QuarantineMode`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>tags</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}The IDs of any tags to attach to this resource. See
[here][docs-applying-tags] for a reference on how to apply tags.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>datacenter_<wbr>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The [managed object ID][docs-about-morefs] of
the datacenter to create the cluster in. Forces a new resource if changed.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>custom_<wbr>attributes</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dict[str, str]</span>
    </dt>
    <dd>{{% md %}}A map of custom attribute ids to attribute
value strings to set for the datastore cluster. See
[here][docs-setting-custom-attributes] for a reference on how to set values
for custom attributes.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>dpm_<wbr>automation_<wbr>level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The automation level for host power
operations in this cluster. Can be one of `manual` or `automated`. Default:
`manual`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>dpm_<wbr>enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Enable DPM support for DRS in this cluster.
Requires `drs_enabled` to be `true` in order to be effective.
Default: `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>dpm_<wbr>threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}A value between `1` and `5` indicating the
threshold of load within the cluster that influences host power operations.
This affects both power on and power off operations - a lower setting will
tolerate more of a surplus/deficit than a higher setting. Default: `3`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>drs_<wbr>advanced_<wbr>options</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dict[str, str]</span>
    </dt>
    <dd>{{% md %}}A key/value map that specifies advanced
options for DRS and DPM.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>drs_<wbr>automation_<wbr>level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The default automation level for all
virtual machines in this cluster. Can be one of `manual`,
`partiallyAutomated`, or `fullyAutomated`. Default: `manual`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>drs_<wbr>enable_<wbr>predictive_<wbr>drs</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}When `true`, enables DRS to use data
from [vRealize Operations Manager][ref-vsphere-vro] to make proactive DRS
recommendations. <sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>drs_<wbr>enable_<wbr>vm_<wbr>overrides</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Allow individual DRS overrides to be
set for virtual machines in the cluster. Default: `true`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>drs_<wbr>enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Enable DRS for this cluster. Default: `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>drs_<wbr>migration_<wbr>threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}A value between `1` and `5` indicating
the threshold of imbalance tolerated between hosts. A lower setting will
tolerate more imbalance while a higher setting will tolerate less. Default:
`3`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>folder</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the folder to locate the cluster in.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>force_<wbr>evacuate_<wbr>on_<wbr>destroy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Force removal of all hosts in the cluster during destroy and make them standalone hosts. Use of this flag mainly exists
for testing and is not recommended in normal use.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>admission_<wbr>control_<wbr>failover_<wbr>host_<wbr>system_<wbr>ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}Defines the
[managed object IDs][docs-about-morefs] of hosts to use as dedicated failover
hosts. These hosts are kept as available as possible - admission control will
block access to the host, and DRS will ignore the host when making
recommendations.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>admission_<wbr>control_<wbr>host_<wbr>failure_<wbr>tolerance</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The maximum number
of failed hosts that admission control tolerates when making decisions on
whether to permit virtual machine operations. The maximum is one less than
the number of hosts in the cluster. Default: `1`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>admission_<wbr>control_<wbr>performance_<wbr>tolerance</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The percentage of
resource reduction that a cluster of virtual machines can tolerate in case of
a failover. A value of 0 produces warnings only, whereas a value of 100
disables the setting. Default: `100` (disabled).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>admission_<wbr>control_<wbr>policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The type of admission control
policy to use with vSphere HA. Can be one of `resourcePercentage`,
`slotPolicy`, `failoverHosts`, or `disabled`. Default: `resourcePercentage`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>admission_<wbr>control_<wbr>resource_<wbr>percentage_<wbr>auto_<wbr>compute</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}
Automatically determine available resource percentages by subtracting the
average number of host resources represented by the
`ha_admission_control_host_failure_tolerance`
setting from the total amount of resources in the cluster. Disable to supply
user-defined values. Default: `true`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>admission_<wbr>control_<wbr>resource_<wbr>percentage_<wbr>cpu</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}Controls the
user-defined percentage of CPU resources in the cluster to reserve for
failover. Default: `100`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>admission_<wbr>control_<wbr>resource_<wbr>percentage_<wbr>memory</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}Controls the
user-defined percentage of memory resources in the cluster to reserve for
failover. Default: `100`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>admission_<wbr>control_<wbr>slot_<wbr>policy_<wbr>explicit_<wbr>cpu</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}Controls the
user-defined CPU slot size, in MHz. Default: `32`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>admission_<wbr>control_<wbr>slot_<wbr>policy_<wbr>explicit_<wbr>memory</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}Controls the
user-defined memory slot size, in MB. Default: `100`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>admission_<wbr>control_<wbr>slot_<wbr>policy_<wbr>use_<wbr>explicit_<wbr>size</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Controls
whether or not you wish to supply explicit values to CPU and memory slot
sizes. The default is `false`, which tells vSphere to gather a automatic
average based on all powered-on virtual machines currently in the cluster.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>advanced_<wbr>options</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dict[str, str]</span>
    </dt>
    <dd>{{% md %}}A key/value map that specifies advanced
options for vSphere HA.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>datastore_<wbr>apd_<wbr>recovery_<wbr>action</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Controls the action to take
on virtual machines if an APD status on an affected datastore clears in the
middle of an APD event. Can be one of `none` or `reset`. Default: `none`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>datastore_<wbr>apd_<wbr>response</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Controls the action to take on
virtual machines when the cluster has detected loss to all paths to a
relevant datastore. Can be one of `disabled`, `warning`,
`restartConservative`, or `restartAggressive`.  Default: `disabled`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>datastore_<wbr>apd_<wbr>response_<wbr>delay</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}Controls the delay in minutes
to wait after an APD timeout event to execute the response action defined in
`ha_datastore_apd_response`. Default: `3`
minutes. <sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>datastore_<wbr>pdl_<wbr>response</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Controls the action to take on
virtual machines when the cluster has detected a permanent device loss to a
relevant datastore. Can be one of `disabled`, `warning`, or
`restartAggressive`. Default: `disabled`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Enable vSphere HA for this cluster. Default:
`false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>heartbeat_<wbr>datastore_<wbr>ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}The list of managed object IDs for
preferred datastores to use for HA heartbeating. This setting is only useful
when `ha_heartbeat_datastore_policy` is set
to either `userSelectedDs` or `allFeasibleDsWithUserPreference`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>heartbeat_<wbr>datastore_<wbr>policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The selection policy for HA
heartbeat datastores. Can be one of `allFeasibleDs`, `userSelectedDs`, or
`allFeasibleDsWithUserPreference`. Default:
`allFeasibleDsWithUserPreference`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>host_<wbr>isolation_<wbr>response</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The action to take on virtual
machines when a host has detected that it has been isolated from the rest of
the cluster. Can be one of `none`, `powerOff`, or `shutdown`. Default:
`none`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>host_<wbr>monitoring</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Global setting that controls whether
vSphere HA remediates virtual machines on host failure. Can be one of `enabled`
or `disabled`. Default: `enabled`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>vm_<wbr>component_<wbr>protection</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Controls vSphere VM component
protection for virtual machines in this cluster. Can be one of `enabled` or
`disabled`. Default: `enabled`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>vm_<wbr>dependency_<wbr>restart_<wbr>condition</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The condition used to
determine whether or not virtual machines in a certain restart priority class
are online, allowing HA to move on to restarting virtual machines on the next
priority. Can be one of `none`, `poweredOn`, `guestHbStatusGreen`, or
`appHbStatusGreen`. The default is `none`, which means that a virtual machine
is considered ready immediately after a host is found to start it on.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>vm_<wbr>failure_<wbr>interval</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}If a heartbeat from a virtual machine
is not received within this configured interval, the virtual machine is
marked as failed. The value is in seconds. Default: `30`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>vm_<wbr>maximum_<wbr>failure_<wbr>window</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The length of the reset window in
which `ha_vm_maximum_resets` can operate. When this
window expires, no more resets are attempted regardless of the setting
configured in `ha_vm_maximum_resets`. `-1` means no window, meaning an
unlimited reset time is allotted. The value is specified in seconds. Default:
`-1` (no window).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>vm_<wbr>maximum_<wbr>resets</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The maximum number of resets that HA will
perform to a virtual machine when responding to a failure event. Default: `3`
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>vm_<wbr>minimum_<wbr>uptime</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The time, in seconds, that HA waits after
powering on a virtual machine before monitoring for heartbeats. Default:
`120` (2 minutes).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>vm_<wbr>monitoring</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The type of virtual machine monitoring to use
when HA is enabled in the cluster. Can be one of `vmMonitoringDisabled`,
`vmMonitoringOnly`, or `vmAndAppMonitoring`. Default: `vmMonitoringDisabled`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>vm_<wbr>restart_<wbr>additional_<wbr>delay</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}Additional delay in seconds
after ready condition is met. A VM is considered ready at this point.
Default: `0` (no delay). <sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>vm_<wbr>restart_<wbr>priority</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The default restart priority
for affected virtual machines when vSphere detects a host failure. Can be one
of `lowest`, `low`, `medium`, `high`, or `highest`. Default: `medium`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>vm_<wbr>restart_<wbr>timeout</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The maximum time, in seconds,
that vSphere HA will wait for virtual machines in one priority to be ready
before proceeding with the next priority. Default: `600` (10 minutes).
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>host_<wbr>cluster_<wbr>exit_<wbr>timeout</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The timeout for each host maintenance mode
operation when removing hosts from a cluster. The value is specified in
seconds. Default: `3600` (1 hour).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>host_<wbr>system_<wbr>ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}The [managed object IDs][docs-about-morefs] of
the hosts to put in the cluster.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the cluster.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>proactive_<wbr>ha_<wbr>automation_<wbr>level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Determines how the host
quarantine, maintenance mode, or virtual machine migration recommendations
made by proactive HA are to be handled. Can be one of `Automated` or
`Manual`. Default: `Manual`. <sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>proactive_<wbr>ha_<wbr>enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Enables Proactive HA. Default: `false`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>proactive_<wbr>ha_<wbr>moderate_<wbr>remediation</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The configured remediation
for moderately degraded hosts. Can be one of `MaintenanceMode` or
`QuarantineMode`. Note that this cannot be set to `MaintenanceMode` when
`proactive_ha_severe_remediation` is set
to `QuarantineMode`. Default: `QuarantineMode`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>proactive_<wbr>ha_<wbr>provider_<wbr>ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}The list of IDs for health update
providers configured for this cluster.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>proactive_<wbr>ha_<wbr>severe_<wbr>remediation</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The configured remediation for
severely degraded hosts. Can be one of `MaintenanceMode` or `QuarantineMode`.
Note that this cannot be set to `QuarantineMode` when
`proactive_ha_moderate_remediation` is
set to `MaintenanceMode`. Default: `QuarantineMode`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>tags</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}The IDs of any tags to attach to this resource. See
[here][docs-applying-tags] for a reference on how to apply tags.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}







## ComputeCluster Output Properties

The following output properties are available:




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span>Resource<wbr>Pool<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The managed object ID of the cluster's root resource pool.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span>Resource<wbr>Pool<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The managed object ID of the cluster's root resource pool.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span>resource<wbr>Pool<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The managed object ID of the cluster's root resource pool.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span>resource_<wbr>pool_<wbr>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The managed object ID of the cluster's root resource pool.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}








## Look up an Existing ComputeCluster Resource

Get an existing ComputeCluster resource's state with the given name, ID, and optional extra properties used to qualify the lookup.

{{< chooser language "javascript,typescript,python,go,csharp  " / >}}

{{% choosable language nodejs %}}
<div class="highlight"><pre class="chroma"><code class="language-typescript" data-lang="typescript"><span class="k">public static </span><span class="nf">get</span><span class="p">(</span><span class="nx">name</span>: <span class="nx"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span><span class="p">, </span><span class="nx">id</span>: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#ID">Input&lt;ID&gt;</a></span><span class="p">, </span><span class="nx">state</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/vsphere/#ComputeClusterState">ComputeClusterState</a></span><span class="p">, </span><span class="nx">opts</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions">CustomResourceOptions</a></span><span class="p">): </span><span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/vsphere/#ComputeCluster">ComputeCluster</a></span></code></pre></div>
{{% /choosable %}}

{{% choosable language python %}}
<div class="highlight"><pre class="chroma"><code class="language-python" data-lang="python"><span class="k">static </span><span class="nf">get</span><span class="p">(resource_name, id, opts=None, </span>custom_attributes=None<span class="p">, </span>datacenter_id=None<span class="p">, </span>dpm_automation_level=None<span class="p">, </span>dpm_enabled=None<span class="p">, </span>dpm_threshold=None<span class="p">, </span>drs_advanced_options=None<span class="p">, </span>drs_automation_level=None<span class="p">, </span>drs_enable_predictive_drs=None<span class="p">, </span>drs_enable_vm_overrides=None<span class="p">, </span>drs_enabled=None<span class="p">, </span>drs_migration_threshold=None<span class="p">, </span>folder=None<span class="p">, </span>force_evacuate_on_destroy=None<span class="p">, </span>ha_admission_control_failover_host_system_ids=None<span class="p">, </span>ha_admission_control_host_failure_tolerance=None<span class="p">, </span>ha_admission_control_performance_tolerance=None<span class="p">, </span>ha_admission_control_policy=None<span class="p">, </span>ha_admission_control_resource_percentage_auto_compute=None<span class="p">, </span>ha_admission_control_resource_percentage_cpu=None<span class="p">, </span>ha_admission_control_resource_percentage_memory=None<span class="p">, </span>ha_admission_control_slot_policy_explicit_cpu=None<span class="p">, </span>ha_admission_control_slot_policy_explicit_memory=None<span class="p">, </span>ha_admission_control_slot_policy_use_explicit_size=None<span class="p">, </span>ha_advanced_options=None<span class="p">, </span>ha_datastore_apd_recovery_action=None<span class="p">, </span>ha_datastore_apd_response=None<span class="p">, </span>ha_datastore_apd_response_delay=None<span class="p">, </span>ha_datastore_pdl_response=None<span class="p">, </span>ha_enabled=None<span class="p">, </span>ha_heartbeat_datastore_ids=None<span class="p">, </span>ha_heartbeat_datastore_policy=None<span class="p">, </span>ha_host_isolation_response=None<span class="p">, </span>ha_host_monitoring=None<span class="p">, </span>ha_vm_component_protection=None<span class="p">, </span>ha_vm_dependency_restart_condition=None<span class="p">, </span>ha_vm_failure_interval=None<span class="p">, </span>ha_vm_maximum_failure_window=None<span class="p">, </span>ha_vm_maximum_resets=None<span class="p">, </span>ha_vm_minimum_uptime=None<span class="p">, </span>ha_vm_monitoring=None<span class="p">, </span>ha_vm_restart_additional_delay=None<span class="p">, </span>ha_vm_restart_priority=None<span class="p">, </span>ha_vm_restart_timeout=None<span class="p">, </span>host_cluster_exit_timeout=None<span class="p">, </span>host_system_ids=None<span class="p">, </span>name=None<span class="p">, </span>proactive_ha_automation_level=None<span class="p">, </span>proactive_ha_enabled=None<span class="p">, </span>proactive_ha_moderate_remediation=None<span class="p">, </span>proactive_ha_provider_ids=None<span class="p">, </span>proactive_ha_severe_remediation=None<span class="p">, </span>resource_pool_id=None<span class="p">, </span>tags=None<span class="p">, __props__=None);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language go %}}
<div class="highlight"><pre class="chroma"><code class="language-go" data-lang="go"><span class="k">func </span>GetComputeCluster<span class="p">(</span><span class="nx">ctx</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#Context">Context</a></span><span class="p">, </span><span class="nx">name</span> <span class="nx"><a href="https://golang.org/pkg/builtin/#string">string</a></span><span class="p">, </span><span class="nx">id</span> <span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#IDInput">IDInput</a></span><span class="p">, </span><span class="nx">state</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-vsphere/sdk/v2/go/vsphere/?tab=doc#ComputeClusterState">ComputeClusterState</a></span><span class="p">, </span><span class="nx">opts</span> ...<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#ResourceOption">ResourceOption</a></span><span class="p">) (*<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-vsphere/sdk/v2/go/vsphere/?tab=doc#ComputeCluster">ComputeCluster</a></span>, error)</span></code></pre></div>
{{% /choosable %}}

{{% choosable language csharp %}}
<div class="highlight"><pre class="chroma"><code class="language-csharp" data-lang="csharp"><span class="k">public static </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Vsphere/Pulumi.Vsphere.ComputeCluster.html">ComputeCluster</a></span><span class="nf"> Get</span><span class="p">(</span><span class="nx"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span> <span class="nx">name<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.Input.html">Input&lt;string&gt;</a></span> <span class="nx">id<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Vsphere/Pulumi.Vsphere..ComputeClusterState.html">ComputeClusterState</a></span>? <span class="nx">state<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.CustomResourceOptions.html">CustomResourceOptions</a></span>? <span class="nx">opts = null<span class="p">)</span></code></pre></div>
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
        <span>Custom<wbr>Attributes</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dictionary&lt;string, string&gt;</span>
    </dt>
    <dd>{{% md %}}A map of custom attribute ids to attribute
value strings to set for the datastore cluster. See
[here][docs-setting-custom-attributes] for a reference on how to set values
for custom attributes.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Datacenter<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The [managed object ID][docs-about-morefs] of
the datacenter to create the cluster in. Forces a new resource if changed.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Dpm<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The automation level for host power
operations in this cluster. Can be one of `manual` or `automated`. Default:
`manual`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Dpm<wbr>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Enable DPM support for DRS in this cluster.
Requires `drs_enabled` to be `true` in order to be effective.
Default: `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Dpm<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}A value between `1` and `5` indicating the
threshold of load within the cluster that influences host power operations.
This affects both power on and power off operations - a lower setting will
tolerate more of a surplus/deficit than a higher setting. Default: `3`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Drs<wbr>Advanced<wbr>Options</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dictionary&lt;string, string&gt;</span>
    </dt>
    <dd>{{% md %}}A key/value map that specifies advanced
options for DRS and DPM.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Drs<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The default automation level for all
virtual machines in this cluster. Can be one of `manual`,
`partiallyAutomated`, or `fullyAutomated`. Default: `manual`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Drs<wbr>Enable<wbr>Predictive<wbr>Drs</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}When `true`, enables DRS to use data
from [vRealize Operations Manager][ref-vsphere-vro] to make proactive DRS
recommendations. <sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Drs<wbr>Enable<wbr>Vm<wbr>Overrides</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Allow individual DRS overrides to be
set for virtual machines in the cluster. Default: `true`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Drs<wbr>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Enable DRS for this cluster. Default: `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Drs<wbr>Migration<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}A value between `1` and `5` indicating
the threshold of imbalance tolerated between hosts. A lower setting will
tolerate more imbalance while a higher setting will tolerate less. Default:
`3`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Folder</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the folder to locate the cluster in.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Force<wbr>Evacuate<wbr>On<wbr>Destroy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Force removal of all hosts in the cluster during destroy and make them standalone hosts. Use of this flag mainly exists
for testing and is not recommended in normal use.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Admission<wbr>Control<wbr>Failover<wbr>Host<wbr>System<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}Defines the
[managed object IDs][docs-about-morefs] of hosts to use as dedicated failover
hosts. These hosts are kept as available as possible - admission control will
block access to the host, and DRS will ignore the host when making
recommendations.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Admission<wbr>Control<wbr>Host<wbr>Failure<wbr>Tolerance</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The maximum number
of failed hosts that admission control tolerates when making decisions on
whether to permit virtual machine operations. The maximum is one less than
the number of hosts in the cluster. Default: `1`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Admission<wbr>Control<wbr>Performance<wbr>Tolerance</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The percentage of
resource reduction that a cluster of virtual machines can tolerate in case of
a failover. A value of 0 produces warnings only, whereas a value of 100
disables the setting. Default: `100` (disabled).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Admission<wbr>Control<wbr>Policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The type of admission control
policy to use with vSphere HA. Can be one of `resourcePercentage`,
`slotPolicy`, `failoverHosts`, or `disabled`. Default: `resourcePercentage`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Admission<wbr>Control<wbr>Resource<wbr>Percentage<wbr>Auto<wbr>Compute</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}
Automatically determine available resource percentages by subtracting the
average number of host resources represented by the
`ha_admission_control_host_failure_tolerance`
setting from the total amount of resources in the cluster. Disable to supply
user-defined values. Default: `true`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Admission<wbr>Control<wbr>Resource<wbr>Percentage<wbr>Cpu</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}Controls the
user-defined percentage of CPU resources in the cluster to reserve for
failover. Default: `100`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Admission<wbr>Control<wbr>Resource<wbr>Percentage<wbr>Memory</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}Controls the
user-defined percentage of memory resources in the cluster to reserve for
failover. Default: `100`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Admission<wbr>Control<wbr>Slot<wbr>Policy<wbr>Explicit<wbr>Cpu</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}Controls the
user-defined CPU slot size, in MHz. Default: `32`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Admission<wbr>Control<wbr>Slot<wbr>Policy<wbr>Explicit<wbr>Memory</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}Controls the
user-defined memory slot size, in MB. Default: `100`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Admission<wbr>Control<wbr>Slot<wbr>Policy<wbr>Use<wbr>Explicit<wbr>Size</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Controls
whether or not you wish to supply explicit values to CPU and memory slot
sizes. The default is `false`, which tells vSphere to gather a automatic
average based on all powered-on virtual machines currently in the cluster.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Advanced<wbr>Options</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dictionary&lt;string, string&gt;</span>
    </dt>
    <dd>{{% md %}}A key/value map that specifies advanced
options for vSphere HA.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Datastore<wbr>Apd<wbr>Recovery<wbr>Action</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Controls the action to take
on virtual machines if an APD status on an affected datastore clears in the
middle of an APD event. Can be one of `none` or `reset`. Default: `none`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Datastore<wbr>Apd<wbr>Response</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Controls the action to take on
virtual machines when the cluster has detected loss to all paths to a
relevant datastore. Can be one of `disabled`, `warning`,
`restartConservative`, or `restartAggressive`.  Default: `disabled`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Datastore<wbr>Apd<wbr>Response<wbr>Delay</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}Controls the delay in minutes
to wait after an APD timeout event to execute the response action defined in
`ha_datastore_apd_response`. Default: `3`
minutes. <sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Datastore<wbr>Pdl<wbr>Response</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Controls the action to take on
virtual machines when the cluster has detected a permanent device loss to a
relevant datastore. Can be one of `disabled`, `warning`, or
`restartAggressive`. Default: `disabled`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Enable vSphere HA for this cluster. Default:
`false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Heartbeat<wbr>Datastore<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}The list of managed object IDs for
preferred datastores to use for HA heartbeating. This setting is only useful
when `ha_heartbeat_datastore_policy` is set
to either `userSelectedDs` or `allFeasibleDsWithUserPreference`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Heartbeat<wbr>Datastore<wbr>Policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The selection policy for HA
heartbeat datastores. Can be one of `allFeasibleDs`, `userSelectedDs`, or
`allFeasibleDsWithUserPreference`. Default:
`allFeasibleDsWithUserPreference`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Host<wbr>Isolation<wbr>Response</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The action to take on virtual
machines when a host has detected that it has been isolated from the rest of
the cluster. Can be one of `none`, `powerOff`, or `shutdown`. Default:
`none`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Host<wbr>Monitoring</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Global setting that controls whether
vSphere HA remediates virtual machines on host failure. Can be one of `enabled`
or `disabled`. Default: `enabled`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Vm<wbr>Component<wbr>Protection</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Controls vSphere VM component
protection for virtual machines in this cluster. Can be one of `enabled` or
`disabled`. Default: `enabled`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Vm<wbr>Dependency<wbr>Restart<wbr>Condition</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The condition used to
determine whether or not virtual machines in a certain restart priority class
are online, allowing HA to move on to restarting virtual machines on the next
priority. Can be one of `none`, `poweredOn`, `guestHbStatusGreen`, or
`appHbStatusGreen`. The default is `none`, which means that a virtual machine
is considered ready immediately after a host is found to start it on.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Vm<wbr>Failure<wbr>Interval</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}If a heartbeat from a virtual machine
is not received within this configured interval, the virtual machine is
marked as failed. The value is in seconds. Default: `30`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Vm<wbr>Maximum<wbr>Failure<wbr>Window</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The length of the reset window in
which `ha_vm_maximum_resets` can operate. When this
window expires, no more resets are attempted regardless of the setting
configured in `ha_vm_maximum_resets`. `-1` means no window, meaning an
unlimited reset time is allotted. The value is specified in seconds. Default:
`-1` (no window).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Vm<wbr>Maximum<wbr>Resets</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The maximum number of resets that HA will
perform to a virtual machine when responding to a failure event. Default: `3`
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Vm<wbr>Minimum<wbr>Uptime</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The time, in seconds, that HA waits after
powering on a virtual machine before monitoring for heartbeats. Default:
`120` (2 minutes).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Vm<wbr>Monitoring</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The type of virtual machine monitoring to use
when HA is enabled in the cluster. Can be one of `vmMonitoringDisabled`,
`vmMonitoringOnly`, or `vmAndAppMonitoring`. Default: `vmMonitoringDisabled`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Vm<wbr>Restart<wbr>Additional<wbr>Delay</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}Additional delay in seconds
after ready condition is met. A VM is considered ready at this point.
Default: `0` (no delay). <sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Vm<wbr>Restart<wbr>Priority</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The default restart priority
for affected virtual machines when vSphere detects a host failure. Can be one
of `lowest`, `low`, `medium`, `high`, or `highest`. Default: `medium`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Vm<wbr>Restart<wbr>Timeout</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The maximum time, in seconds,
that vSphere HA will wait for virtual machines in one priority to be ready
before proceeding with the next priority. Default: `600` (10 minutes).
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Host<wbr>Cluster<wbr>Exit<wbr>Timeout</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The timeout for each host maintenance mode
operation when removing hosts from a cluster. The value is specified in
seconds. Default: `3600` (1 hour).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Host<wbr>System<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}The [managed object IDs][docs-about-morefs] of
the hosts to put in the cluster.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the cluster.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Proactive<wbr>Ha<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Determines how the host
quarantine, maintenance mode, or virtual machine migration recommendations
made by proactive HA are to be handled. Can be one of `Automated` or
`Manual`. Default: `Manual`. <sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Proactive<wbr>Ha<wbr>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Enables Proactive HA. Default: `false`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Proactive<wbr>Ha<wbr>Moderate<wbr>Remediation</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The configured remediation
for moderately degraded hosts. Can be one of `MaintenanceMode` or
`QuarantineMode`. Note that this cannot be set to `MaintenanceMode` when
`proactive_ha_severe_remediation` is set
to `QuarantineMode`. Default: `QuarantineMode`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Proactive<wbr>Ha<wbr>Provider<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}The list of IDs for health update
providers configured for this cluster.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Proactive<wbr>Ha<wbr>Severe<wbr>Remediation</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The configured remediation for
severely degraded hosts. Can be one of `MaintenanceMode` or `QuarantineMode`.
Note that this cannot be set to `QuarantineMode` when
`proactive_ha_moderate_remediation` is
set to `MaintenanceMode`. Default: `QuarantineMode`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Resource<wbr>Pool<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The managed object ID of the cluster's root resource pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Tags</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}The IDs of any tags to attach to this resource. See
[here][docs-applying-tags] for a reference on how to apply tags.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Custom<wbr>Attributes</span>
        <span class="property-indicator"></span>
        <span class="property-type">map[string]string</span>
    </dt>
    <dd>{{% md %}}A map of custom attribute ids to attribute
value strings to set for the datastore cluster. See
[here][docs-setting-custom-attributes] for a reference on how to set values
for custom attributes.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Datacenter<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The [managed object ID][docs-about-morefs] of
the datacenter to create the cluster in. Forces a new resource if changed.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Dpm<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The automation level for host power
operations in this cluster. Can be one of `manual` or `automated`. Default:
`manual`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Dpm<wbr>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Enable DPM support for DRS in this cluster.
Requires `drs_enabled` to be `true` in order to be effective.
Default: `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Dpm<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}A value between `1` and `5` indicating the
threshold of load within the cluster that influences host power operations.
This affects both power on and power off operations - a lower setting will
tolerate more of a surplus/deficit than a higher setting. Default: `3`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Drs<wbr>Advanced<wbr>Options</span>
        <span class="property-indicator"></span>
        <span class="property-type">map[string]string</span>
    </dt>
    <dd>{{% md %}}A key/value map that specifies advanced
options for DRS and DPM.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Drs<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The default automation level for all
virtual machines in this cluster. Can be one of `manual`,
`partiallyAutomated`, or `fullyAutomated`. Default: `manual`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Drs<wbr>Enable<wbr>Predictive<wbr>Drs</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}When `true`, enables DRS to use data
from [vRealize Operations Manager][ref-vsphere-vro] to make proactive DRS
recommendations. <sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Drs<wbr>Enable<wbr>Vm<wbr>Overrides</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Allow individual DRS overrides to be
set for virtual machines in the cluster. Default: `true`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Drs<wbr>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Enable DRS for this cluster. Default: `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Drs<wbr>Migration<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}A value between `1` and `5` indicating
the threshold of imbalance tolerated between hosts. A lower setting will
tolerate more imbalance while a higher setting will tolerate less. Default:
`3`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Folder</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the folder to locate the cluster in.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Force<wbr>Evacuate<wbr>On<wbr>Destroy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Force removal of all hosts in the cluster during destroy and make them standalone hosts. Use of this flag mainly exists
for testing and is not recommended in normal use.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Admission<wbr>Control<wbr>Failover<wbr>Host<wbr>System<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}Defines the
[managed object IDs][docs-about-morefs] of hosts to use as dedicated failover
hosts. These hosts are kept as available as possible - admission control will
block access to the host, and DRS will ignore the host when making
recommendations.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Admission<wbr>Control<wbr>Host<wbr>Failure<wbr>Tolerance</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The maximum number
of failed hosts that admission control tolerates when making decisions on
whether to permit virtual machine operations. The maximum is one less than
the number of hosts in the cluster. Default: `1`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Admission<wbr>Control<wbr>Performance<wbr>Tolerance</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The percentage of
resource reduction that a cluster of virtual machines can tolerate in case of
a failover. A value of 0 produces warnings only, whereas a value of 100
disables the setting. Default: `100` (disabled).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Admission<wbr>Control<wbr>Policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The type of admission control
policy to use with vSphere HA. Can be one of `resourcePercentage`,
`slotPolicy`, `failoverHosts`, or `disabled`. Default: `resourcePercentage`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Admission<wbr>Control<wbr>Resource<wbr>Percentage<wbr>Auto<wbr>Compute</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}
Automatically determine available resource percentages by subtracting the
average number of host resources represented by the
`ha_admission_control_host_failure_tolerance`
setting from the total amount of resources in the cluster. Disable to supply
user-defined values. Default: `true`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Admission<wbr>Control<wbr>Resource<wbr>Percentage<wbr>Cpu</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}Controls the
user-defined percentage of CPU resources in the cluster to reserve for
failover. Default: `100`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Admission<wbr>Control<wbr>Resource<wbr>Percentage<wbr>Memory</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}Controls the
user-defined percentage of memory resources in the cluster to reserve for
failover. Default: `100`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Admission<wbr>Control<wbr>Slot<wbr>Policy<wbr>Explicit<wbr>Cpu</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}Controls the
user-defined CPU slot size, in MHz. Default: `32`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Admission<wbr>Control<wbr>Slot<wbr>Policy<wbr>Explicit<wbr>Memory</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}Controls the
user-defined memory slot size, in MB. Default: `100`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Admission<wbr>Control<wbr>Slot<wbr>Policy<wbr>Use<wbr>Explicit<wbr>Size</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Controls
whether or not you wish to supply explicit values to CPU and memory slot
sizes. The default is `false`, which tells vSphere to gather a automatic
average based on all powered-on virtual machines currently in the cluster.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Advanced<wbr>Options</span>
        <span class="property-indicator"></span>
        <span class="property-type">map[string]string</span>
    </dt>
    <dd>{{% md %}}A key/value map that specifies advanced
options for vSphere HA.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Datastore<wbr>Apd<wbr>Recovery<wbr>Action</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Controls the action to take
on virtual machines if an APD status on an affected datastore clears in the
middle of an APD event. Can be one of `none` or `reset`. Default: `none`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Datastore<wbr>Apd<wbr>Response</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Controls the action to take on
virtual machines when the cluster has detected loss to all paths to a
relevant datastore. Can be one of `disabled`, `warning`,
`restartConservative`, or `restartAggressive`.  Default: `disabled`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Datastore<wbr>Apd<wbr>Response<wbr>Delay</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}Controls the delay in minutes
to wait after an APD timeout event to execute the response action defined in
`ha_datastore_apd_response`. Default: `3`
minutes. <sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Datastore<wbr>Pdl<wbr>Response</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Controls the action to take on
virtual machines when the cluster has detected a permanent device loss to a
relevant datastore. Can be one of `disabled`, `warning`, or
`restartAggressive`. Default: `disabled`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Enable vSphere HA for this cluster. Default:
`false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Heartbeat<wbr>Datastore<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}The list of managed object IDs for
preferred datastores to use for HA heartbeating. This setting is only useful
when `ha_heartbeat_datastore_policy` is set
to either `userSelectedDs` or `allFeasibleDsWithUserPreference`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Heartbeat<wbr>Datastore<wbr>Policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The selection policy for HA
heartbeat datastores. Can be one of `allFeasibleDs`, `userSelectedDs`, or
`allFeasibleDsWithUserPreference`. Default:
`allFeasibleDsWithUserPreference`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Host<wbr>Isolation<wbr>Response</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The action to take on virtual
machines when a host has detected that it has been isolated from the rest of
the cluster. Can be one of `none`, `powerOff`, or `shutdown`. Default:
`none`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Host<wbr>Monitoring</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Global setting that controls whether
vSphere HA remediates virtual machines on host failure. Can be one of `enabled`
or `disabled`. Default: `enabled`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Vm<wbr>Component<wbr>Protection</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Controls vSphere VM component
protection for virtual machines in this cluster. Can be one of `enabled` or
`disabled`. Default: `enabled`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Vm<wbr>Dependency<wbr>Restart<wbr>Condition</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The condition used to
determine whether or not virtual machines in a certain restart priority class
are online, allowing HA to move on to restarting virtual machines on the next
priority. Can be one of `none`, `poweredOn`, `guestHbStatusGreen`, or
`appHbStatusGreen`. The default is `none`, which means that a virtual machine
is considered ready immediately after a host is found to start it on.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Vm<wbr>Failure<wbr>Interval</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}If a heartbeat from a virtual machine
is not received within this configured interval, the virtual machine is
marked as failed. The value is in seconds. Default: `30`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Vm<wbr>Maximum<wbr>Failure<wbr>Window</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The length of the reset window in
which `ha_vm_maximum_resets` can operate. When this
window expires, no more resets are attempted regardless of the setting
configured in `ha_vm_maximum_resets`. `-1` means no window, meaning an
unlimited reset time is allotted. The value is specified in seconds. Default:
`-1` (no window).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Vm<wbr>Maximum<wbr>Resets</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The maximum number of resets that HA will
perform to a virtual machine when responding to a failure event. Default: `3`
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Vm<wbr>Minimum<wbr>Uptime</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The time, in seconds, that HA waits after
powering on a virtual machine before monitoring for heartbeats. Default:
`120` (2 minutes).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Vm<wbr>Monitoring</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The type of virtual machine monitoring to use
when HA is enabled in the cluster. Can be one of `vmMonitoringDisabled`,
`vmMonitoringOnly`, or `vmAndAppMonitoring`. Default: `vmMonitoringDisabled`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Vm<wbr>Restart<wbr>Additional<wbr>Delay</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}Additional delay in seconds
after ready condition is met. A VM is considered ready at this point.
Default: `0` (no delay). <sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Vm<wbr>Restart<wbr>Priority</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The default restart priority
for affected virtual machines when vSphere detects a host failure. Can be one
of `lowest`, `low`, `medium`, `high`, or `highest`. Default: `medium`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ha<wbr>Vm<wbr>Restart<wbr>Timeout</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The maximum time, in seconds,
that vSphere HA will wait for virtual machines in one priority to be ready
before proceeding with the next priority. Default: `600` (10 minutes).
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Host<wbr>Cluster<wbr>Exit<wbr>Timeout</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The timeout for each host maintenance mode
operation when removing hosts from a cluster. The value is specified in
seconds. Default: `3600` (1 hour).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Host<wbr>System<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}The [managed object IDs][docs-about-morefs] of
the hosts to put in the cluster.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the cluster.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Proactive<wbr>Ha<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Determines how the host
quarantine, maintenance mode, or virtual machine migration recommendations
made by proactive HA are to be handled. Can be one of `Automated` or
`Manual`. Default: `Manual`. <sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Proactive<wbr>Ha<wbr>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Enables Proactive HA. Default: `false`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Proactive<wbr>Ha<wbr>Moderate<wbr>Remediation</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The configured remediation
for moderately degraded hosts. Can be one of `MaintenanceMode` or
`QuarantineMode`. Note that this cannot be set to `MaintenanceMode` when
`proactive_ha_severe_remediation` is set
to `QuarantineMode`. Default: `QuarantineMode`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Proactive<wbr>Ha<wbr>Provider<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}The list of IDs for health update
providers configured for this cluster.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Proactive<wbr>Ha<wbr>Severe<wbr>Remediation</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The configured remediation for
severely degraded hosts. Can be one of `MaintenanceMode` or `QuarantineMode`.
Note that this cannot be set to `QuarantineMode` when
`proactive_ha_moderate_remediation` is
set to `MaintenanceMode`. Default: `QuarantineMode`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Resource<wbr>Pool<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The managed object ID of the cluster's root resource pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Tags</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}The IDs of any tags to attach to this resource. See
[here][docs-applying-tags] for a reference on how to apply tags.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>custom<wbr>Attributes</span>
        <span class="property-indicator"></span>
        <span class="property-type">{[key: string]: string}</span>
    </dt>
    <dd>{{% md %}}A map of custom attribute ids to attribute
value strings to set for the datastore cluster. See
[here][docs-setting-custom-attributes] for a reference on how to set values
for custom attributes.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>datacenter<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The [managed object ID][docs-about-morefs] of
the datacenter to create the cluster in. Forces a new resource if changed.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>dpm<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The automation level for host power
operations in this cluster. Can be one of `manual` or `automated`. Default:
`manual`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>dpm<wbr>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Enable DPM support for DRS in this cluster.
Requires `drs_enabled` to be `true` in order to be effective.
Default: `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>dpm<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}A value between `1` and `5` indicating the
threshold of load within the cluster that influences host power operations.
This affects both power on and power off operations - a lower setting will
tolerate more of a surplus/deficit than a higher setting. Default: `3`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>drs<wbr>Advanced<wbr>Options</span>
        <span class="property-indicator"></span>
        <span class="property-type">{[key: string]: string}</span>
    </dt>
    <dd>{{% md %}}A key/value map that specifies advanced
options for DRS and DPM.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>drs<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The default automation level for all
virtual machines in this cluster. Can be one of `manual`,
`partiallyAutomated`, or `fullyAutomated`. Default: `manual`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>drs<wbr>Enable<wbr>Predictive<wbr>Drs</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}When `true`, enables DRS to use data
from [vRealize Operations Manager][ref-vsphere-vro] to make proactive DRS
recommendations. <sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>drs<wbr>Enable<wbr>Vm<wbr>Overrides</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Allow individual DRS overrides to be
set for virtual machines in the cluster. Default: `true`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>drs<wbr>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Enable DRS for this cluster. Default: `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>drs<wbr>Migration<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}A value between `1` and `5` indicating
the threshold of imbalance tolerated between hosts. A lower setting will
tolerate more imbalance while a higher setting will tolerate less. Default:
`3`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>folder</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the folder to locate the cluster in.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>force<wbr>Evacuate<wbr>On<wbr>Destroy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Force removal of all hosts in the cluster during destroy and make them standalone hosts. Use of this flag mainly exists
for testing and is not recommended in normal use.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Admission<wbr>Control<wbr>Failover<wbr>Host<wbr>System<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}Defines the
[managed object IDs][docs-about-morefs] of hosts to use as dedicated failover
hosts. These hosts are kept as available as possible - admission control will
block access to the host, and DRS will ignore the host when making
recommendations.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Admission<wbr>Control<wbr>Host<wbr>Failure<wbr>Tolerance</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The maximum number
of failed hosts that admission control tolerates when making decisions on
whether to permit virtual machine operations. The maximum is one less than
the number of hosts in the cluster. Default: `1`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Admission<wbr>Control<wbr>Performance<wbr>Tolerance</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The percentage of
resource reduction that a cluster of virtual machines can tolerate in case of
a failover. A value of 0 produces warnings only, whereas a value of 100
disables the setting. Default: `100` (disabled).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Admission<wbr>Control<wbr>Policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The type of admission control
policy to use with vSphere HA. Can be one of `resourcePercentage`,
`slotPolicy`, `failoverHosts`, or `disabled`. Default: `resourcePercentage`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Admission<wbr>Control<wbr>Resource<wbr>Percentage<wbr>Auto<wbr>Compute</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}
Automatically determine available resource percentages by subtracting the
average number of host resources represented by the
`ha_admission_control_host_failure_tolerance`
setting from the total amount of resources in the cluster. Disable to supply
user-defined values. Default: `true`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Admission<wbr>Control<wbr>Resource<wbr>Percentage<wbr>Cpu</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}Controls the
user-defined percentage of CPU resources in the cluster to reserve for
failover. Default: `100`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Admission<wbr>Control<wbr>Resource<wbr>Percentage<wbr>Memory</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}Controls the
user-defined percentage of memory resources in the cluster to reserve for
failover. Default: `100`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Admission<wbr>Control<wbr>Slot<wbr>Policy<wbr>Explicit<wbr>Cpu</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}Controls the
user-defined CPU slot size, in MHz. Default: `32`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Admission<wbr>Control<wbr>Slot<wbr>Policy<wbr>Explicit<wbr>Memory</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}Controls the
user-defined memory slot size, in MB. Default: `100`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Admission<wbr>Control<wbr>Slot<wbr>Policy<wbr>Use<wbr>Explicit<wbr>Size</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Controls
whether or not you wish to supply explicit values to CPU and memory slot
sizes. The default is `false`, which tells vSphere to gather a automatic
average based on all powered-on virtual machines currently in the cluster.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Advanced<wbr>Options</span>
        <span class="property-indicator"></span>
        <span class="property-type">{[key: string]: string}</span>
    </dt>
    <dd>{{% md %}}A key/value map that specifies advanced
options for vSphere HA.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Datastore<wbr>Apd<wbr>Recovery<wbr>Action</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Controls the action to take
on virtual machines if an APD status on an affected datastore clears in the
middle of an APD event. Can be one of `none` or `reset`. Default: `none`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Datastore<wbr>Apd<wbr>Response</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Controls the action to take on
virtual machines when the cluster has detected loss to all paths to a
relevant datastore. Can be one of `disabled`, `warning`,
`restartConservative`, or `restartAggressive`.  Default: `disabled`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Datastore<wbr>Apd<wbr>Response<wbr>Delay</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}Controls the delay in minutes
to wait after an APD timeout event to execute the response action defined in
`ha_datastore_apd_response`. Default: `3`
minutes. <sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Datastore<wbr>Pdl<wbr>Response</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Controls the action to take on
virtual machines when the cluster has detected a permanent device loss to a
relevant datastore. Can be one of `disabled`, `warning`, or
`restartAggressive`. Default: `disabled`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Enable vSphere HA for this cluster. Default:
`false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Heartbeat<wbr>Datastore<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}The list of managed object IDs for
preferred datastores to use for HA heartbeating. This setting is only useful
when `ha_heartbeat_datastore_policy` is set
to either `userSelectedDs` or `allFeasibleDsWithUserPreference`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Heartbeat<wbr>Datastore<wbr>Policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The selection policy for HA
heartbeat datastores. Can be one of `allFeasibleDs`, `userSelectedDs`, or
`allFeasibleDsWithUserPreference`. Default:
`allFeasibleDsWithUserPreference`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Host<wbr>Isolation<wbr>Response</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The action to take on virtual
machines when a host has detected that it has been isolated from the rest of
the cluster. Can be one of `none`, `powerOff`, or `shutdown`. Default:
`none`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Host<wbr>Monitoring</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Global setting that controls whether
vSphere HA remediates virtual machines on host failure. Can be one of `enabled`
or `disabled`. Default: `enabled`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Vm<wbr>Component<wbr>Protection</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Controls vSphere VM component
protection for virtual machines in this cluster. Can be one of `enabled` or
`disabled`. Default: `enabled`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Vm<wbr>Dependency<wbr>Restart<wbr>Condition</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The condition used to
determine whether or not virtual machines in a certain restart priority class
are online, allowing HA to move on to restarting virtual machines on the next
priority. Can be one of `none`, `poweredOn`, `guestHbStatusGreen`, or
`appHbStatusGreen`. The default is `none`, which means that a virtual machine
is considered ready immediately after a host is found to start it on.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Vm<wbr>Failure<wbr>Interval</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}If a heartbeat from a virtual machine
is not received within this configured interval, the virtual machine is
marked as failed. The value is in seconds. Default: `30`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Vm<wbr>Maximum<wbr>Failure<wbr>Window</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The length of the reset window in
which `ha_vm_maximum_resets` can operate. When this
window expires, no more resets are attempted regardless of the setting
configured in `ha_vm_maximum_resets`. `-1` means no window, meaning an
unlimited reset time is allotted. The value is specified in seconds. Default:
`-1` (no window).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Vm<wbr>Maximum<wbr>Resets</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The maximum number of resets that HA will
perform to a virtual machine when responding to a failure event. Default: `3`
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Vm<wbr>Minimum<wbr>Uptime</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The time, in seconds, that HA waits after
powering on a virtual machine before monitoring for heartbeats. Default:
`120` (2 minutes).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Vm<wbr>Monitoring</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The type of virtual machine monitoring to use
when HA is enabled in the cluster. Can be one of `vmMonitoringDisabled`,
`vmMonitoringOnly`, or `vmAndAppMonitoring`. Default: `vmMonitoringDisabled`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Vm<wbr>Restart<wbr>Additional<wbr>Delay</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}Additional delay in seconds
after ready condition is met. A VM is considered ready at this point.
Default: `0` (no delay). <sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Vm<wbr>Restart<wbr>Priority</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The default restart priority
for affected virtual machines when vSphere detects a host failure. Can be one
of `lowest`, `low`, `medium`, `high`, or `highest`. Default: `medium`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha<wbr>Vm<wbr>Restart<wbr>Timeout</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The maximum time, in seconds,
that vSphere HA will wait for virtual machines in one priority to be ready
before proceeding with the next priority. Default: `600` (10 minutes).
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>host<wbr>Cluster<wbr>Exit<wbr>Timeout</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The timeout for each host maintenance mode
operation when removing hosts from a cluster. The value is specified in
seconds. Default: `3600` (1 hour).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>host<wbr>System<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}The [managed object IDs][docs-about-morefs] of
the hosts to put in the cluster.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the cluster.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>proactive<wbr>Ha<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Determines how the host
quarantine, maintenance mode, or virtual machine migration recommendations
made by proactive HA are to be handled. Can be one of `Automated` or
`Manual`. Default: `Manual`. <sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>proactive<wbr>Ha<wbr>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Enables Proactive HA. Default: `false`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>proactive<wbr>Ha<wbr>Moderate<wbr>Remediation</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The configured remediation
for moderately degraded hosts. Can be one of `MaintenanceMode` or
`QuarantineMode`. Note that this cannot be set to `MaintenanceMode` when
`proactive_ha_severe_remediation` is set
to `QuarantineMode`. Default: `QuarantineMode`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>proactive<wbr>Ha<wbr>Provider<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}The list of IDs for health update
providers configured for this cluster.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>proactive<wbr>Ha<wbr>Severe<wbr>Remediation</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The configured remediation for
severely degraded hosts. Can be one of `MaintenanceMode` or `QuarantineMode`.
Note that this cannot be set to `QuarantineMode` when
`proactive_ha_moderate_remediation` is
set to `MaintenanceMode`. Default: `QuarantineMode`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>resource<wbr>Pool<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The managed object ID of the cluster's root resource pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>tags</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}The IDs of any tags to attach to this resource. See
[here][docs-applying-tags] for a reference on how to apply tags.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>custom_<wbr>attributes</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dict[str, str]</span>
    </dt>
    <dd>{{% md %}}A map of custom attribute ids to attribute
value strings to set for the datastore cluster. See
[here][docs-setting-custom-attributes] for a reference on how to set values
for custom attributes.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>datacenter_<wbr>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The [managed object ID][docs-about-morefs] of
the datacenter to create the cluster in. Forces a new resource if changed.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>dpm_<wbr>automation_<wbr>level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The automation level for host power
operations in this cluster. Can be one of `manual` or `automated`. Default:
`manual`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>dpm_<wbr>enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Enable DPM support for DRS in this cluster.
Requires `drs_enabled` to be `true` in order to be effective.
Default: `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>dpm_<wbr>threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}A value between `1` and `5` indicating the
threshold of load within the cluster that influences host power operations.
This affects both power on and power off operations - a lower setting will
tolerate more of a surplus/deficit than a higher setting. Default: `3`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>drs_<wbr>advanced_<wbr>options</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dict[str, str]</span>
    </dt>
    <dd>{{% md %}}A key/value map that specifies advanced
options for DRS and DPM.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>drs_<wbr>automation_<wbr>level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The default automation level for all
virtual machines in this cluster. Can be one of `manual`,
`partiallyAutomated`, or `fullyAutomated`. Default: `manual`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>drs_<wbr>enable_<wbr>predictive_<wbr>drs</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}When `true`, enables DRS to use data
from [vRealize Operations Manager][ref-vsphere-vro] to make proactive DRS
recommendations. <sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>drs_<wbr>enable_<wbr>vm_<wbr>overrides</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Allow individual DRS overrides to be
set for virtual machines in the cluster. Default: `true`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>drs_<wbr>enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Enable DRS for this cluster. Default: `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>drs_<wbr>migration_<wbr>threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}A value between `1` and `5` indicating
the threshold of imbalance tolerated between hosts. A lower setting will
tolerate more imbalance while a higher setting will tolerate less. Default:
`3`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>folder</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the folder to locate the cluster in.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>force_<wbr>evacuate_<wbr>on_<wbr>destroy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Force removal of all hosts in the cluster during destroy and make them standalone hosts. Use of this flag mainly exists
for testing and is not recommended in normal use.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>admission_<wbr>control_<wbr>failover_<wbr>host_<wbr>system_<wbr>ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}Defines the
[managed object IDs][docs-about-morefs] of hosts to use as dedicated failover
hosts. These hosts are kept as available as possible - admission control will
block access to the host, and DRS will ignore the host when making
recommendations.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>admission_<wbr>control_<wbr>host_<wbr>failure_<wbr>tolerance</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The maximum number
of failed hosts that admission control tolerates when making decisions on
whether to permit virtual machine operations. The maximum is one less than
the number of hosts in the cluster. Default: `1`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>admission_<wbr>control_<wbr>performance_<wbr>tolerance</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The percentage of
resource reduction that a cluster of virtual machines can tolerate in case of
a failover. A value of 0 produces warnings only, whereas a value of 100
disables the setting. Default: `100` (disabled).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>admission_<wbr>control_<wbr>policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The type of admission control
policy to use with vSphere HA. Can be one of `resourcePercentage`,
`slotPolicy`, `failoverHosts`, or `disabled`. Default: `resourcePercentage`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>admission_<wbr>control_<wbr>resource_<wbr>percentage_<wbr>auto_<wbr>compute</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}
Automatically determine available resource percentages by subtracting the
average number of host resources represented by the
`ha_admission_control_host_failure_tolerance`
setting from the total amount of resources in the cluster. Disable to supply
user-defined values. Default: `true`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>admission_<wbr>control_<wbr>resource_<wbr>percentage_<wbr>cpu</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}Controls the
user-defined percentage of CPU resources in the cluster to reserve for
failover. Default: `100`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>admission_<wbr>control_<wbr>resource_<wbr>percentage_<wbr>memory</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}Controls the
user-defined percentage of memory resources in the cluster to reserve for
failover. Default: `100`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>admission_<wbr>control_<wbr>slot_<wbr>policy_<wbr>explicit_<wbr>cpu</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}Controls the
user-defined CPU slot size, in MHz. Default: `32`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>admission_<wbr>control_<wbr>slot_<wbr>policy_<wbr>explicit_<wbr>memory</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}Controls the
user-defined memory slot size, in MB. Default: `100`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>admission_<wbr>control_<wbr>slot_<wbr>policy_<wbr>use_<wbr>explicit_<wbr>size</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Controls
whether or not you wish to supply explicit values to CPU and memory slot
sizes. The default is `false`, which tells vSphere to gather a automatic
average based on all powered-on virtual machines currently in the cluster.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>advanced_<wbr>options</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dict[str, str]</span>
    </dt>
    <dd>{{% md %}}A key/value map that specifies advanced
options for vSphere HA.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>datastore_<wbr>apd_<wbr>recovery_<wbr>action</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Controls the action to take
on virtual machines if an APD status on an affected datastore clears in the
middle of an APD event. Can be one of `none` or `reset`. Default: `none`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>datastore_<wbr>apd_<wbr>response</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Controls the action to take on
virtual machines when the cluster has detected loss to all paths to a
relevant datastore. Can be one of `disabled`, `warning`,
`restartConservative`, or `restartAggressive`.  Default: `disabled`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>datastore_<wbr>apd_<wbr>response_<wbr>delay</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}Controls the delay in minutes
to wait after an APD timeout event to execute the response action defined in
`ha_datastore_apd_response`. Default: `3`
minutes. <sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>datastore_<wbr>pdl_<wbr>response</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Controls the action to take on
virtual machines when the cluster has detected a permanent device loss to a
relevant datastore. Can be one of `disabled`, `warning`, or
`restartAggressive`. Default: `disabled`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Enable vSphere HA for this cluster. Default:
`false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>heartbeat_<wbr>datastore_<wbr>ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}The list of managed object IDs for
preferred datastores to use for HA heartbeating. This setting is only useful
when `ha_heartbeat_datastore_policy` is set
to either `userSelectedDs` or `allFeasibleDsWithUserPreference`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>heartbeat_<wbr>datastore_<wbr>policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The selection policy for HA
heartbeat datastores. Can be one of `allFeasibleDs`, `userSelectedDs`, or
`allFeasibleDsWithUserPreference`. Default:
`allFeasibleDsWithUserPreference`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>host_<wbr>isolation_<wbr>response</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The action to take on virtual
machines when a host has detected that it has been isolated from the rest of
the cluster. Can be one of `none`, `powerOff`, or `shutdown`. Default:
`none`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>host_<wbr>monitoring</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Global setting that controls whether
vSphere HA remediates virtual machines on host failure. Can be one of `enabled`
or `disabled`. Default: `enabled`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>vm_<wbr>component_<wbr>protection</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Controls vSphere VM component
protection for virtual machines in this cluster. Can be one of `enabled` or
`disabled`. Default: `enabled`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>vm_<wbr>dependency_<wbr>restart_<wbr>condition</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The condition used to
determine whether or not virtual machines in a certain restart priority class
are online, allowing HA to move on to restarting virtual machines on the next
priority. Can be one of `none`, `poweredOn`, `guestHbStatusGreen`, or
`appHbStatusGreen`. The default is `none`, which means that a virtual machine
is considered ready immediately after a host is found to start it on.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>vm_<wbr>failure_<wbr>interval</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}If a heartbeat from a virtual machine
is not received within this configured interval, the virtual machine is
marked as failed. The value is in seconds. Default: `30`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>vm_<wbr>maximum_<wbr>failure_<wbr>window</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The length of the reset window in
which `ha_vm_maximum_resets` can operate. When this
window expires, no more resets are attempted regardless of the setting
configured in `ha_vm_maximum_resets`. `-1` means no window, meaning an
unlimited reset time is allotted. The value is specified in seconds. Default:
`-1` (no window).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>vm_<wbr>maximum_<wbr>resets</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The maximum number of resets that HA will
perform to a virtual machine when responding to a failure event. Default: `3`
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>vm_<wbr>minimum_<wbr>uptime</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The time, in seconds, that HA waits after
powering on a virtual machine before monitoring for heartbeats. Default:
`120` (2 minutes).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>vm_<wbr>monitoring</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The type of virtual machine monitoring to use
when HA is enabled in the cluster. Can be one of `vmMonitoringDisabled`,
`vmMonitoringOnly`, or `vmAndAppMonitoring`. Default: `vmMonitoringDisabled`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>vm_<wbr>restart_<wbr>additional_<wbr>delay</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}Additional delay in seconds
after ready condition is met. A VM is considered ready at this point.
Default: `0` (no delay). <sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>vm_<wbr>restart_<wbr>priority</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The default restart priority
for affected virtual machines when vSphere detects a host failure. Can be one
of `lowest`, `low`, `medium`, `high`, or `highest`. Default: `medium`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ha_<wbr>vm_<wbr>restart_<wbr>timeout</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The maximum time, in seconds,
that vSphere HA will wait for virtual machines in one priority to be ready
before proceeding with the next priority. Default: `600` (10 minutes).
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>host_<wbr>cluster_<wbr>exit_<wbr>timeout</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The timeout for each host maintenance mode
operation when removing hosts from a cluster. The value is specified in
seconds. Default: `3600` (1 hour).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>host_<wbr>system_<wbr>ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}The [managed object IDs][docs-about-morefs] of
the hosts to put in the cluster.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the cluster.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>proactive_<wbr>ha_<wbr>automation_<wbr>level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Determines how the host
quarantine, maintenance mode, or virtual machine migration recommendations
made by proactive HA are to be handled. Can be one of `Automated` or
`Manual`. Default: `Manual`. <sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>proactive_<wbr>ha_<wbr>enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Enables Proactive HA. Default: `false`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>proactive_<wbr>ha_<wbr>moderate_<wbr>remediation</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The configured remediation
for moderately degraded hosts. Can be one of `MaintenanceMode` or
`QuarantineMode`. Note that this cannot be set to `MaintenanceMode` when
`proactive_ha_severe_remediation` is set
to `QuarantineMode`. Default: `QuarantineMode`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>proactive_<wbr>ha_<wbr>provider_<wbr>ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}The list of IDs for health update
providers configured for this cluster.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>proactive_<wbr>ha_<wbr>severe_<wbr>remediation</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The configured remediation for
severely degraded hosts. Can be one of `MaintenanceMode` or `QuarantineMode`.
Note that this cannot be set to `QuarantineMode` when
`proactive_ha_moderate_remediation` is
set to `MaintenanceMode`. Default: `QuarantineMode`.
<sup>\*</sup>
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>resource_<wbr>pool_<wbr>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The managed object ID of the cluster's root resource pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>tags</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}The IDs of any tags to attach to this resource. See
[here][docs-applying-tags] for a reference on how to apply tags.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}











<h3>Package Details</h3>
<dl class="package-details">
	<dt>Repository</dt>
	<dd><a href="https://github.com/pulumi/pulumi-vsphere">https://github.com/pulumi/pulumi-vsphere</a></dd>
	<dt>License</dt>
	<dd>Apache-2.0</dd>
    <dt>Notes</dt>
	<dd>This Pulumi package is based on the [`vsphere` Terraform Provider](https://github.com/terraform-providers/terraform-provider-vsphere).</dd>
</dl>

