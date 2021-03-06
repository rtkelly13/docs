
---
title: "DatastoreCluster"
block_external_search_index: true
---






## Create a DatastoreCluster Resource

{{< chooser language "javascript,typescript,python,go,csharp" / >}}

{{% choosable language nodejs %}}
<div class="highlight"><pre class="chroma"><code class="language-typescript" data-lang="typescript"><span class="k">new </span><span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/vsphere/#DatastoreCluster">DatastoreCluster</a></span><span class="p">(</span><span class="nx">name</span>: <span class="nx"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span><span class="p">, </span><span class="nx">args</span>: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/vsphere/#DatastoreClusterArgs">DatastoreClusterArgs</a></span><span class="p">, </span><span class="nx">opts</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions">CustomResourceOptions</a></span><span class="p">);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language python %}}
<div class="highlight"><pre class="chroma"><code class="language-python" data-lang="python"><span class="k">def </span><span class="nf">DatastoreCluster</span><span class="p">(resource_name, opts=None, </span>custom_attributes=None<span class="p">, </span>datacenter_id=None<span class="p">, </span>folder=None<span class="p">, </span>name=None<span class="p">, </span>sdrs_advanced_options=None<span class="p">, </span>sdrs_automation_level=None<span class="p">, </span>sdrs_default_intra_vm_affinity=None<span class="p">, </span>sdrs_enabled=None<span class="p">, </span>sdrs_free_space_threshold=None<span class="p">, </span>sdrs_free_space_threshold_mode=None<span class="p">, </span>sdrs_free_space_utilization_difference=None<span class="p">, </span>sdrs_io_balance_automation_level=None<span class="p">, </span>sdrs_io_latency_threshold=None<span class="p">, </span>sdrs_io_load_balance_enabled=None<span class="p">, </span>sdrs_io_load_imbalance_threshold=None<span class="p">, </span>sdrs_io_reservable_iops_threshold=None<span class="p">, </span>sdrs_io_reservable_percent_threshold=None<span class="p">, </span>sdrs_io_reservable_threshold_mode=None<span class="p">, </span>sdrs_load_balance_interval=None<span class="p">, </span>sdrs_policy_enforcement_automation_level=None<span class="p">, </span>sdrs_rule_enforcement_automation_level=None<span class="p">, </span>sdrs_space_balance_automation_level=None<span class="p">, </span>sdrs_space_utilization_threshold=None<span class="p">, </span>sdrs_vm_evacuation_automation_level=None<span class="p">, </span>tags=None<span class="p">, __props__=None);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language go %}}
<div class="highlight"><pre class="chroma"><code class="language-go" data-lang="go"><span class="k">func </span>NewDatastoreCluster<span class="p">(</span><span class="nx">ctx</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#Context">Context</a></span><span class="p">, </span><span class="nx">name</span> <span class="nx"><a href="https://golang.org/pkg/builtin/#string">string</a></span><span class="p">, </span><span class="nx">args</span> <span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-vsphere/sdk/v2/go/vsphere/?tab=doc#DatastoreClusterArgs">DatastoreClusterArgs</a></span><span class="p">, </span><span class="nx">opts</span> ...<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#ResourceOption">ResourceOption</a></span><span class="p">) (*<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-vsphere/sdk/v2/go/vsphere/?tab=doc#DatastoreCluster">DatastoreCluster</a></span>, error)</span></code></pre></div>
{{% /choosable %}}

{{% choosable language csharp %}}
<div class="highlight"><pre class="chroma"><code class="language-csharp" data-lang="csharp"><span class="k">public </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Vsphere/Pulumi.Vsphere.DatastoreCluster.html">DatastoreCluster</a></span><span class="p">(</span><span class="nx"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span> <span class="nx">name<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Vsphere/Pulumi.VSphere.DatastoreClusterArgs.html">DatastoreClusterArgs</a></span> <span class="nx">args<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.CustomResourceOptions.html">CustomResourceOptions</a></span>? <span class="nx">opts = null<span class="p">)</span></code></pre></div>
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
the datacenter to create the datastore cluster in. Forces a new resource if
changed.
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
        <span>Folder</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the folder to locate the datastore cluster in.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the datastore cluster.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Advanced<wbr>Options</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dictionary&lt;string, string&gt;</span>
    </dt>
    <dd>{{% md %}}Advanced configuration options for storage DRS.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The global automation level for all
virtual machines in this datastore cluster. Default: `manual`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Default<wbr>Intra<wbr>Vm<wbr>Affinity</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}When `true`, all disks in a
single virtual machine will be kept on the same datastore. Default: `true`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Enable Storage DRS for this datastore cluster.
Default: `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Free<wbr>Space<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The free space threshold to use.
When set to `utilization`, `drs_space_utilization_threshold` is used, and
when set to `freeSpace`, `drs_free_space_threshold` is used. Default:
`utilization`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Free<wbr>Space<wbr>Threshold<wbr>Mode</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The free space threshold to use. When set to utilization, drs_space_utilization_threshold is used, and when set to
freeSpace, drs_free_space_threshold is used.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Free<wbr>Space<wbr>Utilization<wbr>Difference</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The threshold, in
percent, of difference between space utilization in datastores before storage
DRS makes decisions to balance the space. Default: `5` percent.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Io<wbr>Balance<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Overrides the default
automation settings when correcting I/O load imbalances.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Io<wbr>Latency<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The I/O latency threshold, in
milliseconds, that storage DRS uses to make recommendations to move disks
from this datastore. Default: `15` seconds.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Io<wbr>Load<wbr>Balance<wbr>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Enable I/O load balancing for
this datastore cluster. Default: `true`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Io<wbr>Load<wbr>Imbalance<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The difference between load
in datastores in the cluster before storage DRS makes recommendations to
balance the load. Default: `5` percent.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Io<wbr>Reservable<wbr>Iops<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The threshold of reservable
IOPS of all virtual machines on the datastore before storage DRS makes
recommendations to move VMs off of a datastore. Note that this setting should
only be set if `sdrs_io_reservable_percent_threshold` cannot make an accurate
estimate of the capacity of the datastores in your cluster, and should be set
to roughly 50-60% of the worst case peak performance of the backing LUNs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Io<wbr>Reservable<wbr>Percent<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The threshold, in
percent, of actual estimated performance of the datastore (in IOPS) that
storage DRS uses to make recommendations to move VMs off of a datastore when
the total reservable IOPS exceeds the threshold. Default: `60` percent.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Io<wbr>Reservable<wbr>Threshold<wbr>Mode</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The reservable IOPS
threshold setting to use, `sdrs_io_reservable_percent_threshold` in the event
of `automatic`, or `sdrs_io_reservable_iops_threshold` in the event of
`manual`. Default: `automatic`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Load<wbr>Balance<wbr>Interval</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The storage DRS poll interval, in
minutes. Default: `480` minutes.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Policy<wbr>Enforcement<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Overrides the default
automation settings when correcting storage and VM policy violations.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Rule<wbr>Enforcement<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Overrides the default
automation settings when correcting affinity rule violations.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Space<wbr>Balance<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Overrides the default
automation settings when correcting disk space imbalances.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Space<wbr>Utilization<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The threshold, in percent of used space, that storage DRS uses to make decisions to migrate VMs out of a datastore.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Vm<wbr>Evacuation<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Overrides the default
automation settings when generating recommendations for datastore evacuation.
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
the datacenter to create the datastore cluster in. Forces a new resource if
changed.
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
        <span>Folder</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the folder to locate the datastore cluster in.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the datastore cluster.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Advanced<wbr>Options</span>
        <span class="property-indicator"></span>
        <span class="property-type">map[string]string</span>
    </dt>
    <dd>{{% md %}}Advanced configuration options for storage DRS.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The global automation level for all
virtual machines in this datastore cluster. Default: `manual`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Default<wbr>Intra<wbr>Vm<wbr>Affinity</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}When `true`, all disks in a
single virtual machine will be kept on the same datastore. Default: `true`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Enable Storage DRS for this datastore cluster.
Default: `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Free<wbr>Space<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The free space threshold to use.
When set to `utilization`, `drs_space_utilization_threshold` is used, and
when set to `freeSpace`, `drs_free_space_threshold` is used. Default:
`utilization`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Free<wbr>Space<wbr>Threshold<wbr>Mode</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The free space threshold to use. When set to utilization, drs_space_utilization_threshold is used, and when set to
freeSpace, drs_free_space_threshold is used.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Free<wbr>Space<wbr>Utilization<wbr>Difference</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The threshold, in
percent, of difference between space utilization in datastores before storage
DRS makes decisions to balance the space. Default: `5` percent.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Io<wbr>Balance<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Overrides the default
automation settings when correcting I/O load imbalances.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Io<wbr>Latency<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The I/O latency threshold, in
milliseconds, that storage DRS uses to make recommendations to move disks
from this datastore. Default: `15` seconds.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Io<wbr>Load<wbr>Balance<wbr>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Enable I/O load balancing for
this datastore cluster. Default: `true`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Io<wbr>Load<wbr>Imbalance<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The difference between load
in datastores in the cluster before storage DRS makes recommendations to
balance the load. Default: `5` percent.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Io<wbr>Reservable<wbr>Iops<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The threshold of reservable
IOPS of all virtual machines on the datastore before storage DRS makes
recommendations to move VMs off of a datastore. Note that this setting should
only be set if `sdrs_io_reservable_percent_threshold` cannot make an accurate
estimate of the capacity of the datastores in your cluster, and should be set
to roughly 50-60% of the worst case peak performance of the backing LUNs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Io<wbr>Reservable<wbr>Percent<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The threshold, in
percent, of actual estimated performance of the datastore (in IOPS) that
storage DRS uses to make recommendations to move VMs off of a datastore when
the total reservable IOPS exceeds the threshold. Default: `60` percent.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Io<wbr>Reservable<wbr>Threshold<wbr>Mode</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The reservable IOPS
threshold setting to use, `sdrs_io_reservable_percent_threshold` in the event
of `automatic`, or `sdrs_io_reservable_iops_threshold` in the event of
`manual`. Default: `automatic`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Load<wbr>Balance<wbr>Interval</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The storage DRS poll interval, in
minutes. Default: `480` minutes.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Policy<wbr>Enforcement<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Overrides the default
automation settings when correcting storage and VM policy violations.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Rule<wbr>Enforcement<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Overrides the default
automation settings when correcting affinity rule violations.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Space<wbr>Balance<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Overrides the default
automation settings when correcting disk space imbalances.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Space<wbr>Utilization<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The threshold, in percent of used space, that storage DRS uses to make decisions to migrate VMs out of a datastore.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Vm<wbr>Evacuation<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Overrides the default
automation settings when generating recommendations for datastore evacuation.
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
the datacenter to create the datastore cluster in. Forces a new resource if
changed.
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
        <span>folder</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the folder to locate the datastore cluster in.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the datastore cluster.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs<wbr>Advanced<wbr>Options</span>
        <span class="property-indicator"></span>
        <span class="property-type">{[key: string]: string}</span>
    </dt>
    <dd>{{% md %}}Advanced configuration options for storage DRS.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The global automation level for all
virtual machines in this datastore cluster. Default: `manual`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs<wbr>Default<wbr>Intra<wbr>Vm<wbr>Affinity</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}When `true`, all disks in a
single virtual machine will be kept on the same datastore. Default: `true`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs<wbr>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Enable Storage DRS for this datastore cluster.
Default: `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs<wbr>Free<wbr>Space<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The free space threshold to use.
When set to `utilization`, `drs_space_utilization_threshold` is used, and
when set to `freeSpace`, `drs_free_space_threshold` is used. Default:
`utilization`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs<wbr>Free<wbr>Space<wbr>Threshold<wbr>Mode</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The free space threshold to use. When set to utilization, drs_space_utilization_threshold is used, and when set to
freeSpace, drs_free_space_threshold is used.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs<wbr>Free<wbr>Space<wbr>Utilization<wbr>Difference</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The threshold, in
percent, of difference between space utilization in datastores before storage
DRS makes decisions to balance the space. Default: `5` percent.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs<wbr>Io<wbr>Balance<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Overrides the default
automation settings when correcting I/O load imbalances.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs<wbr>Io<wbr>Latency<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The I/O latency threshold, in
milliseconds, that storage DRS uses to make recommendations to move disks
from this datastore. Default: `15` seconds.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs<wbr>Io<wbr>Load<wbr>Balance<wbr>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Enable I/O load balancing for
this datastore cluster. Default: `true`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs<wbr>Io<wbr>Load<wbr>Imbalance<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The difference between load
in datastores in the cluster before storage DRS makes recommendations to
balance the load. Default: `5` percent.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs<wbr>Io<wbr>Reservable<wbr>Iops<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The threshold of reservable
IOPS of all virtual machines on the datastore before storage DRS makes
recommendations to move VMs off of a datastore. Note that this setting should
only be set if `sdrs_io_reservable_percent_threshold` cannot make an accurate
estimate of the capacity of the datastores in your cluster, and should be set
to roughly 50-60% of the worst case peak performance of the backing LUNs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs<wbr>Io<wbr>Reservable<wbr>Percent<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The threshold, in
percent, of actual estimated performance of the datastore (in IOPS) that
storage DRS uses to make recommendations to move VMs off of a datastore when
the total reservable IOPS exceeds the threshold. Default: `60` percent.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs<wbr>Io<wbr>Reservable<wbr>Threshold<wbr>Mode</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The reservable IOPS
threshold setting to use, `sdrs_io_reservable_percent_threshold` in the event
of `automatic`, or `sdrs_io_reservable_iops_threshold` in the event of
`manual`. Default: `automatic`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs<wbr>Load<wbr>Balance<wbr>Interval</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The storage DRS poll interval, in
minutes. Default: `480` minutes.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs<wbr>Policy<wbr>Enforcement<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Overrides the default
automation settings when correcting storage and VM policy violations.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs<wbr>Rule<wbr>Enforcement<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Overrides the default
automation settings when correcting affinity rule violations.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs<wbr>Space<wbr>Balance<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Overrides the default
automation settings when correcting disk space imbalances.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs<wbr>Space<wbr>Utilization<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The threshold, in percent of used space, that storage DRS uses to make decisions to migrate VMs out of a datastore.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs<wbr>Vm<wbr>Evacuation<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Overrides the default
automation settings when generating recommendations for datastore evacuation.
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
the datacenter to create the datastore cluster in. Forces a new resource if
changed.
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
        <span>folder</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the folder to locate the datastore cluster in.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the datastore cluster.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs_<wbr>advanced_<wbr>options</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dict[str, str]</span>
    </dt>
    <dd>{{% md %}}Advanced configuration options for storage DRS.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs_<wbr>automation_<wbr>level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The global automation level for all
virtual machines in this datastore cluster. Default: `manual`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs_<wbr>default_<wbr>intra_<wbr>vm_<wbr>affinity</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}When `true`, all disks in a
single virtual machine will be kept on the same datastore. Default: `true`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs_<wbr>enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Enable Storage DRS for this datastore cluster.
Default: `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs_<wbr>free_<wbr>space_<wbr>threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The free space threshold to use.
When set to `utilization`, `drs_space_utilization_threshold` is used, and
when set to `freeSpace`, `drs_free_space_threshold` is used. Default:
`utilization`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs_<wbr>free_<wbr>space_<wbr>threshold_<wbr>mode</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The free space threshold to use. When set to utilization, drs_space_utilization_threshold is used, and when set to
freeSpace, drs_free_space_threshold is used.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs_<wbr>free_<wbr>space_<wbr>utilization_<wbr>difference</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The threshold, in
percent, of difference between space utilization in datastores before storage
DRS makes decisions to balance the space. Default: `5` percent.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs_<wbr>io_<wbr>balance_<wbr>automation_<wbr>level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Overrides the default
automation settings when correcting I/O load imbalances.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs_<wbr>io_<wbr>latency_<wbr>threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The I/O latency threshold, in
milliseconds, that storage DRS uses to make recommendations to move disks
from this datastore. Default: `15` seconds.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs_<wbr>io_<wbr>load_<wbr>balance_<wbr>enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Enable I/O load balancing for
this datastore cluster. Default: `true`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs_<wbr>io_<wbr>load_<wbr>imbalance_<wbr>threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The difference between load
in datastores in the cluster before storage DRS makes recommendations to
balance the load. Default: `5` percent.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs_<wbr>io_<wbr>reservable_<wbr>iops_<wbr>threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The threshold of reservable
IOPS of all virtual machines on the datastore before storage DRS makes
recommendations to move VMs off of a datastore. Note that this setting should
only be set if `sdrs_io_reservable_percent_threshold` cannot make an accurate
estimate of the capacity of the datastores in your cluster, and should be set
to roughly 50-60% of the worst case peak performance of the backing LUNs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs_<wbr>io_<wbr>reservable_<wbr>percent_<wbr>threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The threshold, in
percent, of actual estimated performance of the datastore (in IOPS) that
storage DRS uses to make recommendations to move VMs off of a datastore when
the total reservable IOPS exceeds the threshold. Default: `60` percent.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs_<wbr>io_<wbr>reservable_<wbr>threshold_<wbr>mode</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The reservable IOPS
threshold setting to use, `sdrs_io_reservable_percent_threshold` in the event
of `automatic`, or `sdrs_io_reservable_iops_threshold` in the event of
`manual`. Default: `automatic`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs_<wbr>load_<wbr>balance_<wbr>interval</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The storage DRS poll interval, in
minutes. Default: `480` minutes.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs_<wbr>policy_<wbr>enforcement_<wbr>automation_<wbr>level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Overrides the default
automation settings when correcting storage and VM policy violations.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs_<wbr>rule_<wbr>enforcement_<wbr>automation_<wbr>level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Overrides the default
automation settings when correcting affinity rule violations.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs_<wbr>space_<wbr>balance_<wbr>automation_<wbr>level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Overrides the default
automation settings when correcting disk space imbalances.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs_<wbr>space_<wbr>utilization_<wbr>threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The threshold, in percent of used space, that storage DRS uses to make decisions to migrate VMs out of a datastore.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs_<wbr>vm_<wbr>evacuation_<wbr>automation_<wbr>level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Overrides the default
automation settings when generating recommendations for datastore evacuation.
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










## Look up an Existing DatastoreCluster Resource

Get an existing DatastoreCluster resource's state with the given name, ID, and optional extra properties used to qualify the lookup.

{{< chooser language "javascript,typescript,python,go,csharp  " / >}}

{{% choosable language nodejs %}}
<div class="highlight"><pre class="chroma"><code class="language-typescript" data-lang="typescript"><span class="k">public static </span><span class="nf">get</span><span class="p">(</span><span class="nx">name</span>: <span class="nx"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span><span class="p">, </span><span class="nx">id</span>: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#ID">Input&lt;ID&gt;</a></span><span class="p">, </span><span class="nx">state</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/vsphere/#DatastoreClusterState">DatastoreClusterState</a></span><span class="p">, </span><span class="nx">opts</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions">CustomResourceOptions</a></span><span class="p">): </span><span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/vsphere/#DatastoreCluster">DatastoreCluster</a></span></code></pre></div>
{{% /choosable %}}

{{% choosable language python %}}
<div class="highlight"><pre class="chroma"><code class="language-python" data-lang="python"><span class="k">static </span><span class="nf">get</span><span class="p">(resource_name, id, opts=None, </span>custom_attributes=None<span class="p">, </span>datacenter_id=None<span class="p">, </span>folder=None<span class="p">, </span>name=None<span class="p">, </span>sdrs_advanced_options=None<span class="p">, </span>sdrs_automation_level=None<span class="p">, </span>sdrs_default_intra_vm_affinity=None<span class="p">, </span>sdrs_enabled=None<span class="p">, </span>sdrs_free_space_threshold=None<span class="p">, </span>sdrs_free_space_threshold_mode=None<span class="p">, </span>sdrs_free_space_utilization_difference=None<span class="p">, </span>sdrs_io_balance_automation_level=None<span class="p">, </span>sdrs_io_latency_threshold=None<span class="p">, </span>sdrs_io_load_balance_enabled=None<span class="p">, </span>sdrs_io_load_imbalance_threshold=None<span class="p">, </span>sdrs_io_reservable_iops_threshold=None<span class="p">, </span>sdrs_io_reservable_percent_threshold=None<span class="p">, </span>sdrs_io_reservable_threshold_mode=None<span class="p">, </span>sdrs_load_balance_interval=None<span class="p">, </span>sdrs_policy_enforcement_automation_level=None<span class="p">, </span>sdrs_rule_enforcement_automation_level=None<span class="p">, </span>sdrs_space_balance_automation_level=None<span class="p">, </span>sdrs_space_utilization_threshold=None<span class="p">, </span>sdrs_vm_evacuation_automation_level=None<span class="p">, </span>tags=None<span class="p">, __props__=None);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language go %}}
<div class="highlight"><pre class="chroma"><code class="language-go" data-lang="go"><span class="k">func </span>GetDatastoreCluster<span class="p">(</span><span class="nx">ctx</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#Context">Context</a></span><span class="p">, </span><span class="nx">name</span> <span class="nx"><a href="https://golang.org/pkg/builtin/#string">string</a></span><span class="p">, </span><span class="nx">id</span> <span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#IDInput">IDInput</a></span><span class="p">, </span><span class="nx">state</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-vsphere/sdk/v2/go/vsphere/?tab=doc#DatastoreClusterState">DatastoreClusterState</a></span><span class="p">, </span><span class="nx">opts</span> ...<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#ResourceOption">ResourceOption</a></span><span class="p">) (*<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-vsphere/sdk/v2/go/vsphere/?tab=doc#DatastoreCluster">DatastoreCluster</a></span>, error)</span></code></pre></div>
{{% /choosable %}}

{{% choosable language csharp %}}
<div class="highlight"><pre class="chroma"><code class="language-csharp" data-lang="csharp"><span class="k">public static </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Vsphere/Pulumi.Vsphere.DatastoreCluster.html">DatastoreCluster</a></span><span class="nf"> Get</span><span class="p">(</span><span class="nx"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span> <span class="nx">name<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.Input.html">Input&lt;string&gt;</a></span> <span class="nx">id<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Vsphere/Pulumi.Vsphere..DatastoreClusterState.html">DatastoreClusterState</a></span>? <span class="nx">state<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.CustomResourceOptions.html">CustomResourceOptions</a></span>? <span class="nx">opts = null<span class="p">)</span></code></pre></div>
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
the datacenter to create the datastore cluster in. Forces a new resource if
changed.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Folder</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the folder to locate the datastore cluster in.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the datastore cluster.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Advanced<wbr>Options</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dictionary&lt;string, string&gt;</span>
    </dt>
    <dd>{{% md %}}Advanced configuration options for storage DRS.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The global automation level for all
virtual machines in this datastore cluster. Default: `manual`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Default<wbr>Intra<wbr>Vm<wbr>Affinity</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}When `true`, all disks in a
single virtual machine will be kept on the same datastore. Default: `true`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Enable Storage DRS for this datastore cluster.
Default: `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Free<wbr>Space<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The free space threshold to use.
When set to `utilization`, `drs_space_utilization_threshold` is used, and
when set to `freeSpace`, `drs_free_space_threshold` is used. Default:
`utilization`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Free<wbr>Space<wbr>Threshold<wbr>Mode</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The free space threshold to use. When set to utilization, drs_space_utilization_threshold is used, and when set to
freeSpace, drs_free_space_threshold is used.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Free<wbr>Space<wbr>Utilization<wbr>Difference</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The threshold, in
percent, of difference between space utilization in datastores before storage
DRS makes decisions to balance the space. Default: `5` percent.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Io<wbr>Balance<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Overrides the default
automation settings when correcting I/O load imbalances.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Io<wbr>Latency<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The I/O latency threshold, in
milliseconds, that storage DRS uses to make recommendations to move disks
from this datastore. Default: `15` seconds.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Io<wbr>Load<wbr>Balance<wbr>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Enable I/O load balancing for
this datastore cluster. Default: `true`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Io<wbr>Load<wbr>Imbalance<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The difference between load
in datastores in the cluster before storage DRS makes recommendations to
balance the load. Default: `5` percent.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Io<wbr>Reservable<wbr>Iops<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The threshold of reservable
IOPS of all virtual machines on the datastore before storage DRS makes
recommendations to move VMs off of a datastore. Note that this setting should
only be set if `sdrs_io_reservable_percent_threshold` cannot make an accurate
estimate of the capacity of the datastores in your cluster, and should be set
to roughly 50-60% of the worst case peak performance of the backing LUNs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Io<wbr>Reservable<wbr>Percent<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The threshold, in
percent, of actual estimated performance of the datastore (in IOPS) that
storage DRS uses to make recommendations to move VMs off of a datastore when
the total reservable IOPS exceeds the threshold. Default: `60` percent.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Io<wbr>Reservable<wbr>Threshold<wbr>Mode</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The reservable IOPS
threshold setting to use, `sdrs_io_reservable_percent_threshold` in the event
of `automatic`, or `sdrs_io_reservable_iops_threshold` in the event of
`manual`. Default: `automatic`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Load<wbr>Balance<wbr>Interval</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The storage DRS poll interval, in
minutes. Default: `480` minutes.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Policy<wbr>Enforcement<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Overrides the default
automation settings when correcting storage and VM policy violations.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Rule<wbr>Enforcement<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Overrides the default
automation settings when correcting affinity rule violations.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Space<wbr>Balance<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Overrides the default
automation settings when correcting disk space imbalances.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Space<wbr>Utilization<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The threshold, in percent of used space, that storage DRS uses to make decisions to migrate VMs out of a datastore.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Vm<wbr>Evacuation<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Overrides the default
automation settings when generating recommendations for datastore evacuation.
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
the datacenter to create the datastore cluster in. Forces a new resource if
changed.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Folder</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the folder to locate the datastore cluster in.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the datastore cluster.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Advanced<wbr>Options</span>
        <span class="property-indicator"></span>
        <span class="property-type">map[string]string</span>
    </dt>
    <dd>{{% md %}}Advanced configuration options for storage DRS.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The global automation level for all
virtual machines in this datastore cluster. Default: `manual`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Default<wbr>Intra<wbr>Vm<wbr>Affinity</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}When `true`, all disks in a
single virtual machine will be kept on the same datastore. Default: `true`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Enable Storage DRS for this datastore cluster.
Default: `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Free<wbr>Space<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The free space threshold to use.
When set to `utilization`, `drs_space_utilization_threshold` is used, and
when set to `freeSpace`, `drs_free_space_threshold` is used. Default:
`utilization`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Free<wbr>Space<wbr>Threshold<wbr>Mode</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The free space threshold to use. When set to utilization, drs_space_utilization_threshold is used, and when set to
freeSpace, drs_free_space_threshold is used.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Free<wbr>Space<wbr>Utilization<wbr>Difference</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The threshold, in
percent, of difference between space utilization in datastores before storage
DRS makes decisions to balance the space. Default: `5` percent.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Io<wbr>Balance<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Overrides the default
automation settings when correcting I/O load imbalances.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Io<wbr>Latency<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The I/O latency threshold, in
milliseconds, that storage DRS uses to make recommendations to move disks
from this datastore. Default: `15` seconds.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Io<wbr>Load<wbr>Balance<wbr>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Enable I/O load balancing for
this datastore cluster. Default: `true`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Io<wbr>Load<wbr>Imbalance<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The difference between load
in datastores in the cluster before storage DRS makes recommendations to
balance the load. Default: `5` percent.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Io<wbr>Reservable<wbr>Iops<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The threshold of reservable
IOPS of all virtual machines on the datastore before storage DRS makes
recommendations to move VMs off of a datastore. Note that this setting should
only be set if `sdrs_io_reservable_percent_threshold` cannot make an accurate
estimate of the capacity of the datastores in your cluster, and should be set
to roughly 50-60% of the worst case peak performance of the backing LUNs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Io<wbr>Reservable<wbr>Percent<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The threshold, in
percent, of actual estimated performance of the datastore (in IOPS) that
storage DRS uses to make recommendations to move VMs off of a datastore when
the total reservable IOPS exceeds the threshold. Default: `60` percent.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Io<wbr>Reservable<wbr>Threshold<wbr>Mode</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The reservable IOPS
threshold setting to use, `sdrs_io_reservable_percent_threshold` in the event
of `automatic`, or `sdrs_io_reservable_iops_threshold` in the event of
`manual`. Default: `automatic`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Load<wbr>Balance<wbr>Interval</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The storage DRS poll interval, in
minutes. Default: `480` minutes.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Policy<wbr>Enforcement<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Overrides the default
automation settings when correcting storage and VM policy violations.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Rule<wbr>Enforcement<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Overrides the default
automation settings when correcting affinity rule violations.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Space<wbr>Balance<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Overrides the default
automation settings when correcting disk space imbalances.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Space<wbr>Utilization<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The threshold, in percent of used space, that storage DRS uses to make decisions to migrate VMs out of a datastore.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sdrs<wbr>Vm<wbr>Evacuation<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Overrides the default
automation settings when generating recommendations for datastore evacuation.
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
the datacenter to create the datastore cluster in. Forces a new resource if
changed.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>folder</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the folder to locate the datastore cluster in.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the datastore cluster.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs<wbr>Advanced<wbr>Options</span>
        <span class="property-indicator"></span>
        <span class="property-type">{[key: string]: string}</span>
    </dt>
    <dd>{{% md %}}Advanced configuration options for storage DRS.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The global automation level for all
virtual machines in this datastore cluster. Default: `manual`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs<wbr>Default<wbr>Intra<wbr>Vm<wbr>Affinity</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}When `true`, all disks in a
single virtual machine will be kept on the same datastore. Default: `true`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs<wbr>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Enable Storage DRS for this datastore cluster.
Default: `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs<wbr>Free<wbr>Space<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The free space threshold to use.
When set to `utilization`, `drs_space_utilization_threshold` is used, and
when set to `freeSpace`, `drs_free_space_threshold` is used. Default:
`utilization`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs<wbr>Free<wbr>Space<wbr>Threshold<wbr>Mode</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The free space threshold to use. When set to utilization, drs_space_utilization_threshold is used, and when set to
freeSpace, drs_free_space_threshold is used.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs<wbr>Free<wbr>Space<wbr>Utilization<wbr>Difference</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The threshold, in
percent, of difference between space utilization in datastores before storage
DRS makes decisions to balance the space. Default: `5` percent.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs<wbr>Io<wbr>Balance<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Overrides the default
automation settings when correcting I/O load imbalances.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs<wbr>Io<wbr>Latency<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The I/O latency threshold, in
milliseconds, that storage DRS uses to make recommendations to move disks
from this datastore. Default: `15` seconds.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs<wbr>Io<wbr>Load<wbr>Balance<wbr>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Enable I/O load balancing for
this datastore cluster. Default: `true`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs<wbr>Io<wbr>Load<wbr>Imbalance<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The difference between load
in datastores in the cluster before storage DRS makes recommendations to
balance the load. Default: `5` percent.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs<wbr>Io<wbr>Reservable<wbr>Iops<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The threshold of reservable
IOPS of all virtual machines on the datastore before storage DRS makes
recommendations to move VMs off of a datastore. Note that this setting should
only be set if `sdrs_io_reservable_percent_threshold` cannot make an accurate
estimate of the capacity of the datastores in your cluster, and should be set
to roughly 50-60% of the worst case peak performance of the backing LUNs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs<wbr>Io<wbr>Reservable<wbr>Percent<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The threshold, in
percent, of actual estimated performance of the datastore (in IOPS) that
storage DRS uses to make recommendations to move VMs off of a datastore when
the total reservable IOPS exceeds the threshold. Default: `60` percent.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs<wbr>Io<wbr>Reservable<wbr>Threshold<wbr>Mode</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The reservable IOPS
threshold setting to use, `sdrs_io_reservable_percent_threshold` in the event
of `automatic`, or `sdrs_io_reservable_iops_threshold` in the event of
`manual`. Default: `automatic`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs<wbr>Load<wbr>Balance<wbr>Interval</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The storage DRS poll interval, in
minutes. Default: `480` minutes.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs<wbr>Policy<wbr>Enforcement<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Overrides the default
automation settings when correcting storage and VM policy violations.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs<wbr>Rule<wbr>Enforcement<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Overrides the default
automation settings when correcting affinity rule violations.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs<wbr>Space<wbr>Balance<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Overrides the default
automation settings when correcting disk space imbalances.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs<wbr>Space<wbr>Utilization<wbr>Threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The threshold, in percent of used space, that storage DRS uses to make decisions to migrate VMs out of a datastore.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs<wbr>Vm<wbr>Evacuation<wbr>Automation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Overrides the default
automation settings when generating recommendations for datastore evacuation.
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
the datacenter to create the datastore cluster in. Forces a new resource if
changed.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>folder</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the folder to locate the datastore cluster in.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the datastore cluster.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs_<wbr>advanced_<wbr>options</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dict[str, str]</span>
    </dt>
    <dd>{{% md %}}Advanced configuration options for storage DRS.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs_<wbr>automation_<wbr>level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The global automation level for all
virtual machines in this datastore cluster. Default: `manual`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs_<wbr>default_<wbr>intra_<wbr>vm_<wbr>affinity</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}When `true`, all disks in a
single virtual machine will be kept on the same datastore. Default: `true`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs_<wbr>enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Enable Storage DRS for this datastore cluster.
Default: `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs_<wbr>free_<wbr>space_<wbr>threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The free space threshold to use.
When set to `utilization`, `drs_space_utilization_threshold` is used, and
when set to `freeSpace`, `drs_free_space_threshold` is used. Default:
`utilization`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs_<wbr>free_<wbr>space_<wbr>threshold_<wbr>mode</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The free space threshold to use. When set to utilization, drs_space_utilization_threshold is used, and when set to
freeSpace, drs_free_space_threshold is used.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs_<wbr>free_<wbr>space_<wbr>utilization_<wbr>difference</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The threshold, in
percent, of difference between space utilization in datastores before storage
DRS makes decisions to balance the space. Default: `5` percent.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs_<wbr>io_<wbr>balance_<wbr>automation_<wbr>level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Overrides the default
automation settings when correcting I/O load imbalances.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs_<wbr>io_<wbr>latency_<wbr>threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The I/O latency threshold, in
milliseconds, that storage DRS uses to make recommendations to move disks
from this datastore. Default: `15` seconds.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs_<wbr>io_<wbr>load_<wbr>balance_<wbr>enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Enable I/O load balancing for
this datastore cluster. Default: `true`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs_<wbr>io_<wbr>load_<wbr>imbalance_<wbr>threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The difference between load
in datastores in the cluster before storage DRS makes recommendations to
balance the load. Default: `5` percent.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs_<wbr>io_<wbr>reservable_<wbr>iops_<wbr>threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The threshold of reservable
IOPS of all virtual machines on the datastore before storage DRS makes
recommendations to move VMs off of a datastore. Note that this setting should
only be set if `sdrs_io_reservable_percent_threshold` cannot make an accurate
estimate of the capacity of the datastores in your cluster, and should be set
to roughly 50-60% of the worst case peak performance of the backing LUNs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs_<wbr>io_<wbr>reservable_<wbr>percent_<wbr>threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The threshold, in
percent, of actual estimated performance of the datastore (in IOPS) that
storage DRS uses to make recommendations to move VMs off of a datastore when
the total reservable IOPS exceeds the threshold. Default: `60` percent.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs_<wbr>io_<wbr>reservable_<wbr>threshold_<wbr>mode</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The reservable IOPS
threshold setting to use, `sdrs_io_reservable_percent_threshold` in the event
of `automatic`, or `sdrs_io_reservable_iops_threshold` in the event of
`manual`. Default: `automatic`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs_<wbr>load_<wbr>balance_<wbr>interval</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The storage DRS poll interval, in
minutes. Default: `480` minutes.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs_<wbr>policy_<wbr>enforcement_<wbr>automation_<wbr>level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Overrides the default
automation settings when correcting storage and VM policy violations.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs_<wbr>rule_<wbr>enforcement_<wbr>automation_<wbr>level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Overrides the default
automation settings when correcting affinity rule violations.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs_<wbr>space_<wbr>balance_<wbr>automation_<wbr>level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Overrides the default
automation settings when correcting disk space imbalances.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs_<wbr>space_<wbr>utilization_<wbr>threshold</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The threshold, in percent of used space, that storage DRS uses to make decisions to migrate VMs out of a datastore.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sdrs_<wbr>vm_<wbr>evacuation_<wbr>automation_<wbr>level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Overrides the default
automation settings when generating recommendations for datastore evacuation.
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

