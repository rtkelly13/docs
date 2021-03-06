
---
title: "ScaleSet"
block_external_search_index: true
---



Manages a virtual machine scale set.

## Disclaimers

> **Note:** The `azure.compute.ScaleSet` resource has been superseded by the `azure.compute.LinuxVirtualMachineScaleSet` and `azure.compute.WindowsVirtualMachineScaleSet` resources. The existing `azure.compute.ScaleSet` resource will continue to be available throughout the 2.x releases however is in a feature-frozen state to maintain compatibility - new functionality will instead be added to the `azure.compute.LinuxVirtualMachineScaleSet` and `azure.compute.WindowsVirtualMachineScaleSet` resources.



## Create a ScaleSet Resource

{{< chooser language "javascript,typescript,python,go,csharp" / >}}

{{% choosable language nodejs %}}
<div class="highlight"><pre class="chroma"><code class="language-typescript" data-lang="typescript"><span class="k">new </span><span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/azure/compute/#ScaleSet">ScaleSet</a></span><span class="p">(</span><span class="nx">name</span>: <span class="nx"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span><span class="p">, </span><span class="nx">args</span>: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/azure/compute/#ScaleSetArgs">ScaleSetArgs</a></span><span class="p">, </span><span class="nx">opts</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions">CustomResourceOptions</a></span><span class="p">);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language python %}}
<div class="highlight"><pre class="chroma"><code class="language-python" data-lang="python"><span class="k">def </span><span class="nf">ScaleSet</span><span class="p">(resource_name, opts=None, </span>automatic_os_upgrade=None<span class="p">, </span>boot_diagnostics=None<span class="p">, </span>eviction_policy=None<span class="p">, </span>extensions=None<span class="p">, </span>health_probe_id=None<span class="p">, </span>identity=None<span class="p">, </span>license_type=None<span class="p">, </span>location=None<span class="p">, </span>name=None<span class="p">, </span>network_profiles=None<span class="p">, </span>os_profile=None<span class="p">, </span>os_profile_linux_config=None<span class="p">, </span>os_profile_secrets=None<span class="p">, </span>os_profile_windows_config=None<span class="p">, </span>overprovision=None<span class="p">, </span>plan=None<span class="p">, </span>priority=None<span class="p">, </span>proximity_placement_group_id=None<span class="p">, </span>resource_group_name=None<span class="p">, </span>rolling_upgrade_policy=None<span class="p">, </span>single_placement_group=None<span class="p">, </span>sku=None<span class="p">, </span>storage_profile_data_disks=None<span class="p">, </span>storage_profile_image_reference=None<span class="p">, </span>storage_profile_os_disk=None<span class="p">, </span>tags=None<span class="p">, </span>upgrade_policy_mode=None<span class="p">, </span>zones=None<span class="p">, __props__=None);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language go %}}
<div class="highlight"><pre class="chroma"><code class="language-go" data-lang="go"><span class="k">func </span>NewScaleSet<span class="p">(</span><span class="nx">ctx</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v3/go/pulumi?tab=doc#Context">Context</a></span><span class="p">, </span><span class="nx">name</span> <span class="nx"><a href="https://golang.org/pkg/builtin/#string">string</a></span><span class="p">, </span><span class="nx">args</span> <span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSetArgs">ScaleSetArgs</a></span><span class="p">, </span><span class="nx">opts</span> ...<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v3/go/pulumi?tab=doc#ResourceOption">ResourceOption</a></span><span class="p">) (*<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSet">ScaleSet</a></span>, error)</span></code></pre></div>
{{% /choosable %}}

{{% choosable language csharp %}}
<div class="highlight"><pre class="chroma"><code class="language-csharp" data-lang="csharp"><span class="k">public </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Azure/Pulumi.Azure.Compute.ScaleSet.html">ScaleSet</a></span><span class="p">(</span><span class="nx"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span> <span class="nx">name<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Azure/Pulumi.Azure.Compute.ScaleSetArgs.html">ScaleSetArgs</a></span> <span class="nx">args<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.CustomResourceOptions.html">CustomResourceOptions</a></span>? <span class="nx">opts = null<span class="p">)</span></code></pre></div>
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
        <span>Network<wbr>Profiles</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetnetworkprofile">List&lt;Scale<wbr>Set<wbr>Network<wbr>Profile<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}A collection of network profile block as documented below.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Os<wbr>Profile</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofile">Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}A Virtual Machine OS Profile block as documented below.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Resource<wbr>Group<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the resource group in which to create the virtual machine scale set. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Sku</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetsku">Scale<wbr>Set<wbr>Sku<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}A sku block as documented below.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Storage<wbr>Profile<wbr>Os<wbr>Disk</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetstorageprofileosdisk">Scale<wbr>Set<wbr>Storage<wbr>Profile<wbr>Os<wbr>Disk<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}A storage profile os disk block as documented below
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Upgrade<wbr>Policy<wbr>Mode</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the mode of an upgrade to virtual machines in the scale set. Possible values, `Rolling`, `Manual`, or `Automatic`. When choosing `Rolling`, you will need to set a health probe.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Automatic<wbr>Os<wbr>Upgrade</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Automatic OS patches can be applied by Azure to your scaleset. This is particularly useful when `upgrade_policy_mode` is set to `Rolling`. Defaults to `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Boot<wbr>Diagnostics</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetbootdiagnostics">Scale<wbr>Set<wbr>Boot<wbr>Diagnostics<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}A boot diagnostics profile block as referenced below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Eviction<wbr>Policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the eviction policy for Virtual Machines in this Scale Set. Possible values are `Deallocate` and `Delete`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Extensions</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetextension">List&lt;Scale<wbr>Set<wbr>Extension<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}Can be specified multiple times to add extension profiles to the scale set. Each `extension` block supports the fields documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Health<wbr>Probe<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the identifier for the load balancer health probe. Required when using `Rolling` as your `upgrade_policy_mode`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Identity</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetidentity">Scale<wbr>Set<wbr>Identity<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>License<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the Windows OS license type. If supplied, the only allowed values are `Windows_Client` and `Windows_Server`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Location</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the virtual machine scale set resource. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Os<wbr>Profile<wbr>Linux<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofilelinuxconfig">Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Linux<wbr>Config<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}A Linux config block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Os<wbr>Profile<wbr>Secrets</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofilesecret">List&lt;Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Secret<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}A collection of Secret blocks as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Os<wbr>Profile<wbr>Windows<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofilewindowsconfig">Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Windows<wbr>Config<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}A Windows config block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Overprovision</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Specifies whether the virtual machine scale set should be overprovisioned.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Plan</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetplan">Scale<wbr>Set<wbr>Plan<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}A plan block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Priority</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the priority for the Virtual Machines in the Scale Set. Defaults to `Regular`. Possible values are `Low` and `Regular`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Proximity<wbr>Placement<wbr>Group<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The ID of the Proximity Placement Group to which this Virtual Machine should be assigned. Changing this forces a new resource to be created
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Rolling<wbr>Upgrade<wbr>Policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetrollingupgradepolicy">Scale<wbr>Set<wbr>Rolling<wbr>Upgrade<wbr>Policy<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}A `rolling_upgrade_policy` block as defined below. This is only applicable when the `upgrade_policy_mode` is `Rolling`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Single<wbr>Placement<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Specifies whether the scale set is limited to a single placement group with a maximum size of 100 virtual machines. If set to false, managed disks must be used. Default is true. Changing this forces a new resource to be created. See [documentation](http://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-placement-groups) for more information.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Storage<wbr>Profile<wbr>Data<wbr>Disks</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetstorageprofiledatadisk">List&lt;Scale<wbr>Set<wbr>Storage<wbr>Profile<wbr>Data<wbr>Disk<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}A storage profile data disk block as documented below
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Storage<wbr>Profile<wbr>Image<wbr>Reference</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetstorageprofileimagereference">Scale<wbr>Set<wbr>Storage<wbr>Profile<wbr>Image<wbr>Reference<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}A storage profile image reference block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dictionary&lt;string, string&gt;</span>
    </dt>
    <dd>{{% md %}}A mapping of tags to assign to the resource.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Zones</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}A collection of availability zones to spread the Virtual Machines over.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Network<wbr>Profiles</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetnetworkprofile">[]Scale<wbr>Set<wbr>Network<wbr>Profile</a></span>
    </dt>
    <dd>{{% md %}}A collection of network profile block as documented below.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Os<wbr>Profile</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofile">Scale<wbr>Set<wbr>Os<wbr>Profile</a></span>
    </dt>
    <dd>{{% md %}}A Virtual Machine OS Profile block as documented below.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Resource<wbr>Group<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the resource group in which to create the virtual machine scale set. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Sku</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetsku">Scale<wbr>Set<wbr>Sku</a></span>
    </dt>
    <dd>{{% md %}}A sku block as documented below.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Storage<wbr>Profile<wbr>Os<wbr>Disk</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetstorageprofileosdisk">Scale<wbr>Set<wbr>Storage<wbr>Profile<wbr>Os<wbr>Disk</a></span>
    </dt>
    <dd>{{% md %}}A storage profile os disk block as documented below
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Upgrade<wbr>Policy<wbr>Mode</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the mode of an upgrade to virtual machines in the scale set. Possible values, `Rolling`, `Manual`, or `Automatic`. When choosing `Rolling`, you will need to set a health probe.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Automatic<wbr>Os<wbr>Upgrade</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Automatic OS patches can be applied by Azure to your scaleset. This is particularly useful when `upgrade_policy_mode` is set to `Rolling`. Defaults to `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Boot<wbr>Diagnostics</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetbootdiagnostics">Scale<wbr>Set<wbr>Boot<wbr>Diagnostics</a></span>
    </dt>
    <dd>{{% md %}}A boot diagnostics profile block as referenced below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Eviction<wbr>Policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the eviction policy for Virtual Machines in this Scale Set. Possible values are `Deallocate` and `Delete`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Extensions</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetextension">[]Scale<wbr>Set<wbr>Extension</a></span>
    </dt>
    <dd>{{% md %}}Can be specified multiple times to add extension profiles to the scale set. Each `extension` block supports the fields documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Health<wbr>Probe<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the identifier for the load balancer health probe. Required when using `Rolling` as your `upgrade_policy_mode`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Identity</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetidentity">Scale<wbr>Set<wbr>Identity</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>License<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the Windows OS license type. If supplied, the only allowed values are `Windows_Client` and `Windows_Server`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Location</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the virtual machine scale set resource. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Os<wbr>Profile<wbr>Linux<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofilelinuxconfig">Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Linux<wbr>Config</a></span>
    </dt>
    <dd>{{% md %}}A Linux config block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Os<wbr>Profile<wbr>Secrets</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofilesecret">[]Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Secret</a></span>
    </dt>
    <dd>{{% md %}}A collection of Secret blocks as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Os<wbr>Profile<wbr>Windows<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofilewindowsconfig">Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Windows<wbr>Config</a></span>
    </dt>
    <dd>{{% md %}}A Windows config block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Overprovision</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Specifies whether the virtual machine scale set should be overprovisioned.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Plan</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetplan">Scale<wbr>Set<wbr>Plan</a></span>
    </dt>
    <dd>{{% md %}}A plan block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Priority</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the priority for the Virtual Machines in the Scale Set. Defaults to `Regular`. Possible values are `Low` and `Regular`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Proximity<wbr>Placement<wbr>Group<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The ID of the Proximity Placement Group to which this Virtual Machine should be assigned. Changing this forces a new resource to be created
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Rolling<wbr>Upgrade<wbr>Policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetrollingupgradepolicy">Scale<wbr>Set<wbr>Rolling<wbr>Upgrade<wbr>Policy</a></span>
    </dt>
    <dd>{{% md %}}A `rolling_upgrade_policy` block as defined below. This is only applicable when the `upgrade_policy_mode` is `Rolling`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Single<wbr>Placement<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Specifies whether the scale set is limited to a single placement group with a maximum size of 100 virtual machines. If set to false, managed disks must be used. Default is true. Changing this forces a new resource to be created. See [documentation](http://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-placement-groups) for more information.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Storage<wbr>Profile<wbr>Data<wbr>Disks</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetstorageprofiledatadisk">[]Scale<wbr>Set<wbr>Storage<wbr>Profile<wbr>Data<wbr>Disk</a></span>
    </dt>
    <dd>{{% md %}}A storage profile data disk block as documented below
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Storage<wbr>Profile<wbr>Image<wbr>Reference</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetstorageprofileimagereference">Scale<wbr>Set<wbr>Storage<wbr>Profile<wbr>Image<wbr>Reference</a></span>
    </dt>
    <dd>{{% md %}}A storage profile image reference block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">map[string]string</span>
    </dt>
    <dd>{{% md %}}A mapping of tags to assign to the resource.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Zones</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}A collection of availability zones to spread the Virtual Machines over.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>network<wbr>Profiles</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetnetworkprofile">Scale<wbr>Set<wbr>Network<wbr>Profile[]</a></span>
    </dt>
    <dd>{{% md %}}A collection of network profile block as documented below.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>os<wbr>Profile</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofile">Scale<wbr>Set<wbr>Os<wbr>Profile</a></span>
    </dt>
    <dd>{{% md %}}A Virtual Machine OS Profile block as documented below.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>resource<wbr>Group<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the resource group in which to create the virtual machine scale set. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>sku</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetsku">Scale<wbr>Set<wbr>Sku</a></span>
    </dt>
    <dd>{{% md %}}A sku block as documented below.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>storage<wbr>Profile<wbr>Os<wbr>Disk</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetstorageprofileosdisk">Scale<wbr>Set<wbr>Storage<wbr>Profile<wbr>Os<wbr>Disk</a></span>
    </dt>
    <dd>{{% md %}}A storage profile os disk block as documented below
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>upgrade<wbr>Policy<wbr>Mode</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the mode of an upgrade to virtual machines in the scale set. Possible values, `Rolling`, `Manual`, or `Automatic`. When choosing `Rolling`, you will need to set a health probe.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>automatic<wbr>Os<wbr>Upgrade</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Automatic OS patches can be applied by Azure to your scaleset. This is particularly useful when `upgrade_policy_mode` is set to `Rolling`. Defaults to `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>boot<wbr>Diagnostics</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetbootdiagnostics">Scale<wbr>Set<wbr>Boot<wbr>Diagnostics</a></span>
    </dt>
    <dd>{{% md %}}A boot diagnostics profile block as referenced below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>eviction<wbr>Policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the eviction policy for Virtual Machines in this Scale Set. Possible values are `Deallocate` and `Delete`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>extensions</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetextension">Scale<wbr>Set<wbr>Extension[]</a></span>
    </dt>
    <dd>{{% md %}}Can be specified multiple times to add extension profiles to the scale set. Each `extension` block supports the fields documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>health<wbr>Probe<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the identifier for the load balancer health probe. Required when using `Rolling` as your `upgrade_policy_mode`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>identity</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetidentity">Scale<wbr>Set<wbr>Identity</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>license<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the Windows OS license type. If supplied, the only allowed values are `Windows_Client` and `Windows_Server`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>location</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the virtual machine scale set resource. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>os<wbr>Profile<wbr>Linux<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofilelinuxconfig">Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Linux<wbr>Config</a></span>
    </dt>
    <dd>{{% md %}}A Linux config block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>os<wbr>Profile<wbr>Secrets</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofilesecret">Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Secret[]</a></span>
    </dt>
    <dd>{{% md %}}A collection of Secret blocks as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>os<wbr>Profile<wbr>Windows<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofilewindowsconfig">Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Windows<wbr>Config</a></span>
    </dt>
    <dd>{{% md %}}A Windows config block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>overprovision</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Specifies whether the virtual machine scale set should be overprovisioned.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>plan</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetplan">Scale<wbr>Set<wbr>Plan</a></span>
    </dt>
    <dd>{{% md %}}A plan block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>priority</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the priority for the Virtual Machines in the Scale Set. Defaults to `Regular`. Possible values are `Low` and `Regular`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>proximity<wbr>Placement<wbr>Group<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The ID of the Proximity Placement Group to which this Virtual Machine should be assigned. Changing this forces a new resource to be created
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>rolling<wbr>Upgrade<wbr>Policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetrollingupgradepolicy">Scale<wbr>Set<wbr>Rolling<wbr>Upgrade<wbr>Policy</a></span>
    </dt>
    <dd>{{% md %}}A `rolling_upgrade_policy` block as defined below. This is only applicable when the `upgrade_policy_mode` is `Rolling`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>single<wbr>Placement<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Specifies whether the scale set is limited to a single placement group with a maximum size of 100 virtual machines. If set to false, managed disks must be used. Default is true. Changing this forces a new resource to be created. See [documentation](http://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-placement-groups) for more information.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>storage<wbr>Profile<wbr>Data<wbr>Disks</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetstorageprofiledatadisk">Scale<wbr>Set<wbr>Storage<wbr>Profile<wbr>Data<wbr>Disk[]</a></span>
    </dt>
    <dd>{{% md %}}A storage profile data disk block as documented below
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>storage<wbr>Profile<wbr>Image<wbr>Reference</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetstorageprofileimagereference">Scale<wbr>Set<wbr>Storage<wbr>Profile<wbr>Image<wbr>Reference</a></span>
    </dt>
    <dd>{{% md %}}A storage profile image reference block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">{[key: string]: string}</span>
    </dt>
    <dd>{{% md %}}A mapping of tags to assign to the resource.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>zones</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}A collection of availability zones to spread the Virtual Machines over.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>network_<wbr>profiles</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetnetworkprofile">List[Scale<wbr>Set<wbr>Network<wbr>Profile]</a></span>
    </dt>
    <dd>{{% md %}}A collection of network profile block as documented below.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>os_<wbr>profile</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofile">Dict[Scale<wbr>Set<wbr>Os<wbr>Profile]</a></span>
    </dt>
    <dd>{{% md %}}A Virtual Machine OS Profile block as documented below.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>resource_<wbr>group_<wbr>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the resource group in which to create the virtual machine scale set. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>sku</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetsku">Dict[Scale<wbr>Set<wbr>Sku]</a></span>
    </dt>
    <dd>{{% md %}}A sku block as documented below.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>storage_<wbr>profile_<wbr>os_<wbr>disk</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetstorageprofileosdisk">Dict[Scale<wbr>Set<wbr>Storage<wbr>Profile<wbr>Os<wbr>Disk]</a></span>
    </dt>
    <dd>{{% md %}}A storage profile os disk block as documented below
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>upgrade_<wbr>policy_<wbr>mode</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the mode of an upgrade to virtual machines in the scale set. Possible values, `Rolling`, `Manual`, or `Automatic`. When choosing `Rolling`, you will need to set a health probe.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>automatic_<wbr>os_<wbr>upgrade</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Automatic OS patches can be applied by Azure to your scaleset. This is particularly useful when `upgrade_policy_mode` is set to `Rolling`. Defaults to `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>boot_<wbr>diagnostics</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetbootdiagnostics">Dict[Scale<wbr>Set<wbr>Boot<wbr>Diagnostics]</a></span>
    </dt>
    <dd>{{% md %}}A boot diagnostics profile block as referenced below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>eviction_<wbr>policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the eviction policy for Virtual Machines in this Scale Set. Possible values are `Deallocate` and `Delete`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>extensions</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetextension">List[Scale<wbr>Set<wbr>Extension]</a></span>
    </dt>
    <dd>{{% md %}}Can be specified multiple times to add extension profiles to the scale set. Each `extension` block supports the fields documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>health_<wbr>probe_<wbr>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the identifier for the load balancer health probe. Required when using `Rolling` as your `upgrade_policy_mode`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>identity</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetidentity">Dict[Scale<wbr>Set<wbr>Identity]</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>license_<wbr>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the Windows OS license type. If supplied, the only allowed values are `Windows_Client` and `Windows_Server`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>location</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the virtual machine scale set resource. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>os_<wbr>profile_<wbr>linux_<wbr>config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofilelinuxconfig">Dict[Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Linux<wbr>Config]</a></span>
    </dt>
    <dd>{{% md %}}A Linux config block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>os_<wbr>profile_<wbr>secrets</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofilesecret">List[Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Secret]</a></span>
    </dt>
    <dd>{{% md %}}A collection of Secret blocks as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>os_<wbr>profile_<wbr>windows_<wbr>config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofilewindowsconfig">Dict[Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Windows<wbr>Config]</a></span>
    </dt>
    <dd>{{% md %}}A Windows config block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>overprovision</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Specifies whether the virtual machine scale set should be overprovisioned.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>plan</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetplan">Dict[Scale<wbr>Set<wbr>Plan]</a></span>
    </dt>
    <dd>{{% md %}}A plan block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>priority</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the priority for the Virtual Machines in the Scale Set. Defaults to `Regular`. Possible values are `Low` and `Regular`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>proximity_<wbr>placement_<wbr>group_<wbr>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The ID of the Proximity Placement Group to which this Virtual Machine should be assigned. Changing this forces a new resource to be created
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>rolling_<wbr>upgrade_<wbr>policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetrollingupgradepolicy">Dict[Scale<wbr>Set<wbr>Rolling<wbr>Upgrade<wbr>Policy]</a></span>
    </dt>
    <dd>{{% md %}}A `rolling_upgrade_policy` block as defined below. This is only applicable when the `upgrade_policy_mode` is `Rolling`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>single_<wbr>placement_<wbr>group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Specifies whether the scale set is limited to a single placement group with a maximum size of 100 virtual machines. If set to false, managed disks must be used. Default is true. Changing this forces a new resource to be created. See [documentation](http://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-placement-groups) for more information.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>storage_<wbr>profile_<wbr>data_<wbr>disks</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetstorageprofiledatadisk">List[Scale<wbr>Set<wbr>Storage<wbr>Profile<wbr>Data<wbr>Disk]</a></span>
    </dt>
    <dd>{{% md %}}A storage profile data disk block as documented below
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>storage_<wbr>profile_<wbr>image_<wbr>reference</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetstorageprofileimagereference">Dict[Scale<wbr>Set<wbr>Storage<wbr>Profile<wbr>Image<wbr>Reference]</a></span>
    </dt>
    <dd>{{% md %}}A storage profile image reference block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dict[str, str]</span>
    </dt>
    <dd>{{% md %}}A mapping of tags to assign to the resource.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>zones</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}A collection of availability zones to spread the Virtual Machines over.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}










## Look up an Existing ScaleSet Resource

Get an existing ScaleSet resource's state with the given name, ID, and optional extra properties used to qualify the lookup.

{{< chooser language "javascript,typescript,python,go,csharp  " / >}}

{{% choosable language nodejs %}}
<div class="highlight"><pre class="chroma"><code class="language-typescript" data-lang="typescript"><span class="k">public static </span><span class="nf">get</span><span class="p">(</span><span class="nx">name</span>: <span class="nx"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span><span class="p">, </span><span class="nx">id</span>: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#ID">Input&lt;ID&gt;</a></span><span class="p">, </span><span class="nx">state</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/azure/compute/#ScaleSetState">ScaleSetState</a></span><span class="p">, </span><span class="nx">opts</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions">CustomResourceOptions</a></span><span class="p">): </span><span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/azure/compute/#ScaleSet">ScaleSet</a></span></code></pre></div>
{{% /choosable %}}

{{% choosable language python %}}
<div class="highlight"><pre class="chroma"><code class="language-python" data-lang="python"><span class="k">static </span><span class="nf">get</span><span class="p">(resource_name, id, opts=None, </span>automatic_os_upgrade=None<span class="p">, </span>boot_diagnostics=None<span class="p">, </span>eviction_policy=None<span class="p">, </span>extensions=None<span class="p">, </span>health_probe_id=None<span class="p">, </span>identity=None<span class="p">, </span>license_type=None<span class="p">, </span>location=None<span class="p">, </span>name=None<span class="p">, </span>network_profiles=None<span class="p">, </span>os_profile=None<span class="p">, </span>os_profile_linux_config=None<span class="p">, </span>os_profile_secrets=None<span class="p">, </span>os_profile_windows_config=None<span class="p">, </span>overprovision=None<span class="p">, </span>plan=None<span class="p">, </span>priority=None<span class="p">, </span>proximity_placement_group_id=None<span class="p">, </span>resource_group_name=None<span class="p">, </span>rolling_upgrade_policy=None<span class="p">, </span>single_placement_group=None<span class="p">, </span>sku=None<span class="p">, </span>storage_profile_data_disks=None<span class="p">, </span>storage_profile_image_reference=None<span class="p">, </span>storage_profile_os_disk=None<span class="p">, </span>tags=None<span class="p">, </span>upgrade_policy_mode=None<span class="p">, </span>zones=None<span class="p">, __props__=None);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language go %}}
<div class="highlight"><pre class="chroma"><code class="language-go" data-lang="go"><span class="k">func </span>GetScaleSet<span class="p">(</span><span class="nx">ctx</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v3/go/pulumi?tab=doc#Context">Context</a></span><span class="p">, </span><span class="nx">name</span> <span class="nx"><a href="https://golang.org/pkg/builtin/#string">string</a></span><span class="p">, </span><span class="nx">id</span> <span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v3/go/pulumi?tab=doc#IDInput">IDInput</a></span><span class="p">, </span><span class="nx">state</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSetState">ScaleSetState</a></span><span class="p">, </span><span class="nx">opts</span> ...<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v3/go/pulumi?tab=doc#ResourceOption">ResourceOption</a></span><span class="p">) (*<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSet">ScaleSet</a></span>, error)</span></code></pre></div>
{{% /choosable %}}

{{% choosable language csharp %}}
<div class="highlight"><pre class="chroma"><code class="language-csharp" data-lang="csharp"><span class="k">public static </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Azure/Pulumi.Azure.Compute.ScaleSet.html">ScaleSet</a></span><span class="nf"> Get</span><span class="p">(</span><span class="nx"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span> <span class="nx">name<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.Input.html">Input&lt;string&gt;</a></span> <span class="nx">id<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Azure/Pulumi.Azure.Compute.ScaleSetState.html">ScaleSetState</a></span>? <span class="nx">state<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.CustomResourceOptions.html">CustomResourceOptions</a></span>? <span class="nx">opts = null<span class="p">)</span></code></pre></div>
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
        <span>Automatic<wbr>Os<wbr>Upgrade</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Automatic OS patches can be applied by Azure to your scaleset. This is particularly useful when `upgrade_policy_mode` is set to `Rolling`. Defaults to `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Boot<wbr>Diagnostics</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetbootdiagnostics">Scale<wbr>Set<wbr>Boot<wbr>Diagnostics<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}A boot diagnostics profile block as referenced below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Eviction<wbr>Policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the eviction policy for Virtual Machines in this Scale Set. Possible values are `Deallocate` and `Delete`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Extensions</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetextension">List&lt;Scale<wbr>Set<wbr>Extension<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}Can be specified multiple times to add extension profiles to the scale set. Each `extension` block supports the fields documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Health<wbr>Probe<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the identifier for the load balancer health probe. Required when using `Rolling` as your `upgrade_policy_mode`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Identity</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetidentity">Scale<wbr>Set<wbr>Identity<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>License<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the Windows OS license type. If supplied, the only allowed values are `Windows_Client` and `Windows_Server`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Location</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the virtual machine scale set resource. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Network<wbr>Profiles</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetnetworkprofile">List&lt;Scale<wbr>Set<wbr>Network<wbr>Profile<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}A collection of network profile block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Os<wbr>Profile</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofile">Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}A Virtual Machine OS Profile block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Os<wbr>Profile<wbr>Linux<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofilelinuxconfig">Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Linux<wbr>Config<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}A Linux config block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Os<wbr>Profile<wbr>Secrets</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofilesecret">List&lt;Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Secret<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}A collection of Secret blocks as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Os<wbr>Profile<wbr>Windows<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofilewindowsconfig">Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Windows<wbr>Config<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}A Windows config block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Overprovision</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Specifies whether the virtual machine scale set should be overprovisioned.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Plan</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetplan">Scale<wbr>Set<wbr>Plan<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}A plan block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Priority</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the priority for the Virtual Machines in the Scale Set. Defaults to `Regular`. Possible values are `Low` and `Regular`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Proximity<wbr>Placement<wbr>Group<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The ID of the Proximity Placement Group to which this Virtual Machine should be assigned. Changing this forces a new resource to be created
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Resource<wbr>Group<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the resource group in which to create the virtual machine scale set. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Rolling<wbr>Upgrade<wbr>Policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetrollingupgradepolicy">Scale<wbr>Set<wbr>Rolling<wbr>Upgrade<wbr>Policy<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}A `rolling_upgrade_policy` block as defined below. This is only applicable when the `upgrade_policy_mode` is `Rolling`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Single<wbr>Placement<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Specifies whether the scale set is limited to a single placement group with a maximum size of 100 virtual machines. If set to false, managed disks must be used. Default is true. Changing this forces a new resource to be created. See [documentation](http://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-placement-groups) for more information.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sku</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetsku">Scale<wbr>Set<wbr>Sku<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}A sku block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Storage<wbr>Profile<wbr>Data<wbr>Disks</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetstorageprofiledatadisk">List&lt;Scale<wbr>Set<wbr>Storage<wbr>Profile<wbr>Data<wbr>Disk<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}A storage profile data disk block as documented below
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Storage<wbr>Profile<wbr>Image<wbr>Reference</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetstorageprofileimagereference">Scale<wbr>Set<wbr>Storage<wbr>Profile<wbr>Image<wbr>Reference<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}A storage profile image reference block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Storage<wbr>Profile<wbr>Os<wbr>Disk</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetstorageprofileosdisk">Scale<wbr>Set<wbr>Storage<wbr>Profile<wbr>Os<wbr>Disk<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}A storage profile os disk block as documented below
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dictionary&lt;string, string&gt;</span>
    </dt>
    <dd>{{% md %}}A mapping of tags to assign to the resource.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Upgrade<wbr>Policy<wbr>Mode</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the mode of an upgrade to virtual machines in the scale set. Possible values, `Rolling`, `Manual`, or `Automatic`. When choosing `Rolling`, you will need to set a health probe.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Zones</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}A collection of availability zones to spread the Virtual Machines over.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Automatic<wbr>Os<wbr>Upgrade</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Automatic OS patches can be applied by Azure to your scaleset. This is particularly useful when `upgrade_policy_mode` is set to `Rolling`. Defaults to `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Boot<wbr>Diagnostics</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetbootdiagnostics">Scale<wbr>Set<wbr>Boot<wbr>Diagnostics</a></span>
    </dt>
    <dd>{{% md %}}A boot diagnostics profile block as referenced below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Eviction<wbr>Policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the eviction policy for Virtual Machines in this Scale Set. Possible values are `Deallocate` and `Delete`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Extensions</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetextension">[]Scale<wbr>Set<wbr>Extension</a></span>
    </dt>
    <dd>{{% md %}}Can be specified multiple times to add extension profiles to the scale set. Each `extension` block supports the fields documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Health<wbr>Probe<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the identifier for the load balancer health probe. Required when using `Rolling` as your `upgrade_policy_mode`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Identity</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetidentity">Scale<wbr>Set<wbr>Identity</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>License<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the Windows OS license type. If supplied, the only allowed values are `Windows_Client` and `Windows_Server`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Location</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the virtual machine scale set resource. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Network<wbr>Profiles</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetnetworkprofile">[]Scale<wbr>Set<wbr>Network<wbr>Profile</a></span>
    </dt>
    <dd>{{% md %}}A collection of network profile block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Os<wbr>Profile</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofile">Scale<wbr>Set<wbr>Os<wbr>Profile</a></span>
    </dt>
    <dd>{{% md %}}A Virtual Machine OS Profile block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Os<wbr>Profile<wbr>Linux<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofilelinuxconfig">Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Linux<wbr>Config</a></span>
    </dt>
    <dd>{{% md %}}A Linux config block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Os<wbr>Profile<wbr>Secrets</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofilesecret">[]Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Secret</a></span>
    </dt>
    <dd>{{% md %}}A collection of Secret blocks as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Os<wbr>Profile<wbr>Windows<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofilewindowsconfig">Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Windows<wbr>Config</a></span>
    </dt>
    <dd>{{% md %}}A Windows config block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Overprovision</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Specifies whether the virtual machine scale set should be overprovisioned.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Plan</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetplan">Scale<wbr>Set<wbr>Plan</a></span>
    </dt>
    <dd>{{% md %}}A plan block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Priority</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the priority for the Virtual Machines in the Scale Set. Defaults to `Regular`. Possible values are `Low` and `Regular`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Proximity<wbr>Placement<wbr>Group<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The ID of the Proximity Placement Group to which this Virtual Machine should be assigned. Changing this forces a new resource to be created
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Resource<wbr>Group<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the resource group in which to create the virtual machine scale set. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Rolling<wbr>Upgrade<wbr>Policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetrollingupgradepolicy">Scale<wbr>Set<wbr>Rolling<wbr>Upgrade<wbr>Policy</a></span>
    </dt>
    <dd>{{% md %}}A `rolling_upgrade_policy` block as defined below. This is only applicable when the `upgrade_policy_mode` is `Rolling`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Single<wbr>Placement<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Specifies whether the scale set is limited to a single placement group with a maximum size of 100 virtual machines. If set to false, managed disks must be used. Default is true. Changing this forces a new resource to be created. See [documentation](http://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-placement-groups) for more information.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sku</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetsku">Scale<wbr>Set<wbr>Sku</a></span>
    </dt>
    <dd>{{% md %}}A sku block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Storage<wbr>Profile<wbr>Data<wbr>Disks</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetstorageprofiledatadisk">[]Scale<wbr>Set<wbr>Storage<wbr>Profile<wbr>Data<wbr>Disk</a></span>
    </dt>
    <dd>{{% md %}}A storage profile data disk block as documented below
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Storage<wbr>Profile<wbr>Image<wbr>Reference</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetstorageprofileimagereference">Scale<wbr>Set<wbr>Storage<wbr>Profile<wbr>Image<wbr>Reference</a></span>
    </dt>
    <dd>{{% md %}}A storage profile image reference block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Storage<wbr>Profile<wbr>Os<wbr>Disk</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetstorageprofileosdisk">Scale<wbr>Set<wbr>Storage<wbr>Profile<wbr>Os<wbr>Disk</a></span>
    </dt>
    <dd>{{% md %}}A storage profile os disk block as documented below
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">map[string]string</span>
    </dt>
    <dd>{{% md %}}A mapping of tags to assign to the resource.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Upgrade<wbr>Policy<wbr>Mode</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the mode of an upgrade to virtual machines in the scale set. Possible values, `Rolling`, `Manual`, or `Automatic`. When choosing `Rolling`, you will need to set a health probe.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Zones</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}A collection of availability zones to spread the Virtual Machines over.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>automatic<wbr>Os<wbr>Upgrade</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Automatic OS patches can be applied by Azure to your scaleset. This is particularly useful when `upgrade_policy_mode` is set to `Rolling`. Defaults to `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>boot<wbr>Diagnostics</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetbootdiagnostics">Scale<wbr>Set<wbr>Boot<wbr>Diagnostics</a></span>
    </dt>
    <dd>{{% md %}}A boot diagnostics profile block as referenced below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>eviction<wbr>Policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the eviction policy for Virtual Machines in this Scale Set. Possible values are `Deallocate` and `Delete`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>extensions</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetextension">Scale<wbr>Set<wbr>Extension[]</a></span>
    </dt>
    <dd>{{% md %}}Can be specified multiple times to add extension profiles to the scale set. Each `extension` block supports the fields documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>health<wbr>Probe<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the identifier for the load balancer health probe. Required when using `Rolling` as your `upgrade_policy_mode`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>identity</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetidentity">Scale<wbr>Set<wbr>Identity</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>license<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the Windows OS license type. If supplied, the only allowed values are `Windows_Client` and `Windows_Server`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>location</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the virtual machine scale set resource. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>network<wbr>Profiles</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetnetworkprofile">Scale<wbr>Set<wbr>Network<wbr>Profile[]</a></span>
    </dt>
    <dd>{{% md %}}A collection of network profile block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>os<wbr>Profile</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofile">Scale<wbr>Set<wbr>Os<wbr>Profile</a></span>
    </dt>
    <dd>{{% md %}}A Virtual Machine OS Profile block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>os<wbr>Profile<wbr>Linux<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofilelinuxconfig">Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Linux<wbr>Config</a></span>
    </dt>
    <dd>{{% md %}}A Linux config block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>os<wbr>Profile<wbr>Secrets</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofilesecret">Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Secret[]</a></span>
    </dt>
    <dd>{{% md %}}A collection of Secret blocks as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>os<wbr>Profile<wbr>Windows<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofilewindowsconfig">Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Windows<wbr>Config</a></span>
    </dt>
    <dd>{{% md %}}A Windows config block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>overprovision</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Specifies whether the virtual machine scale set should be overprovisioned.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>plan</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetplan">Scale<wbr>Set<wbr>Plan</a></span>
    </dt>
    <dd>{{% md %}}A plan block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>priority</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the priority for the Virtual Machines in the Scale Set. Defaults to `Regular`. Possible values are `Low` and `Regular`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>proximity<wbr>Placement<wbr>Group<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The ID of the Proximity Placement Group to which this Virtual Machine should be assigned. Changing this forces a new resource to be created
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>resource<wbr>Group<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the resource group in which to create the virtual machine scale set. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>rolling<wbr>Upgrade<wbr>Policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetrollingupgradepolicy">Scale<wbr>Set<wbr>Rolling<wbr>Upgrade<wbr>Policy</a></span>
    </dt>
    <dd>{{% md %}}A `rolling_upgrade_policy` block as defined below. This is only applicable when the `upgrade_policy_mode` is `Rolling`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>single<wbr>Placement<wbr>Group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Specifies whether the scale set is limited to a single placement group with a maximum size of 100 virtual machines. If set to false, managed disks must be used. Default is true. Changing this forces a new resource to be created. See [documentation](http://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-placement-groups) for more information.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sku</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetsku">Scale<wbr>Set<wbr>Sku</a></span>
    </dt>
    <dd>{{% md %}}A sku block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>storage<wbr>Profile<wbr>Data<wbr>Disks</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetstorageprofiledatadisk">Scale<wbr>Set<wbr>Storage<wbr>Profile<wbr>Data<wbr>Disk[]</a></span>
    </dt>
    <dd>{{% md %}}A storage profile data disk block as documented below
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>storage<wbr>Profile<wbr>Image<wbr>Reference</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetstorageprofileimagereference">Scale<wbr>Set<wbr>Storage<wbr>Profile<wbr>Image<wbr>Reference</a></span>
    </dt>
    <dd>{{% md %}}A storage profile image reference block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>storage<wbr>Profile<wbr>Os<wbr>Disk</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetstorageprofileosdisk">Scale<wbr>Set<wbr>Storage<wbr>Profile<wbr>Os<wbr>Disk</a></span>
    </dt>
    <dd>{{% md %}}A storage profile os disk block as documented below
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">{[key: string]: string}</span>
    </dt>
    <dd>{{% md %}}A mapping of tags to assign to the resource.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>upgrade<wbr>Policy<wbr>Mode</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the mode of an upgrade to virtual machines in the scale set. Possible values, `Rolling`, `Manual`, or `Automatic`. When choosing `Rolling`, you will need to set a health probe.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>zones</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}A collection of availability zones to spread the Virtual Machines over.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>automatic_<wbr>os_<wbr>upgrade</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Automatic OS patches can be applied by Azure to your scaleset. This is particularly useful when `upgrade_policy_mode` is set to `Rolling`. Defaults to `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>boot_<wbr>diagnostics</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetbootdiagnostics">Dict[Scale<wbr>Set<wbr>Boot<wbr>Diagnostics]</a></span>
    </dt>
    <dd>{{% md %}}A boot diagnostics profile block as referenced below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>eviction_<wbr>policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the eviction policy for Virtual Machines in this Scale Set. Possible values are `Deallocate` and `Delete`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>extensions</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetextension">List[Scale<wbr>Set<wbr>Extension]</a></span>
    </dt>
    <dd>{{% md %}}Can be specified multiple times to add extension profiles to the scale set. Each `extension` block supports the fields documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>health_<wbr>probe_<wbr>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the identifier for the load balancer health probe. Required when using `Rolling` as your `upgrade_policy_mode`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>identity</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetidentity">Dict[Scale<wbr>Set<wbr>Identity]</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>license_<wbr>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the Windows OS license type. If supplied, the only allowed values are `Windows_Client` and `Windows_Server`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>location</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the virtual machine scale set resource. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>network_<wbr>profiles</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetnetworkprofile">List[Scale<wbr>Set<wbr>Network<wbr>Profile]</a></span>
    </dt>
    <dd>{{% md %}}A collection of network profile block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>os_<wbr>profile</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofile">Dict[Scale<wbr>Set<wbr>Os<wbr>Profile]</a></span>
    </dt>
    <dd>{{% md %}}A Virtual Machine OS Profile block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>os_<wbr>profile_<wbr>linux_<wbr>config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofilelinuxconfig">Dict[Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Linux<wbr>Config]</a></span>
    </dt>
    <dd>{{% md %}}A Linux config block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>os_<wbr>profile_<wbr>secrets</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofilesecret">List[Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Secret]</a></span>
    </dt>
    <dd>{{% md %}}A collection of Secret blocks as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>os_<wbr>profile_<wbr>windows_<wbr>config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofilewindowsconfig">Dict[Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Windows<wbr>Config]</a></span>
    </dt>
    <dd>{{% md %}}A Windows config block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>overprovision</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Specifies whether the virtual machine scale set should be overprovisioned.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>plan</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetplan">Dict[Scale<wbr>Set<wbr>Plan]</a></span>
    </dt>
    <dd>{{% md %}}A plan block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>priority</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the priority for the Virtual Machines in the Scale Set. Defaults to `Regular`. Possible values are `Low` and `Regular`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>proximity_<wbr>placement_<wbr>group_<wbr>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The ID of the Proximity Placement Group to which this Virtual Machine should be assigned. Changing this forces a new resource to be created
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>resource_<wbr>group_<wbr>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the resource group in which to create the virtual machine scale set. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>rolling_<wbr>upgrade_<wbr>policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetrollingupgradepolicy">Dict[Scale<wbr>Set<wbr>Rolling<wbr>Upgrade<wbr>Policy]</a></span>
    </dt>
    <dd>{{% md %}}A `rolling_upgrade_policy` block as defined below. This is only applicable when the `upgrade_policy_mode` is `Rolling`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>single_<wbr>placement_<wbr>group</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Specifies whether the scale set is limited to a single placement group with a maximum size of 100 virtual machines. If set to false, managed disks must be used. Default is true. Changing this forces a new resource to be created. See [documentation](http://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-placement-groups) for more information.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sku</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetsku">Dict[Scale<wbr>Set<wbr>Sku]</a></span>
    </dt>
    <dd>{{% md %}}A sku block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>storage_<wbr>profile_<wbr>data_<wbr>disks</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetstorageprofiledatadisk">List[Scale<wbr>Set<wbr>Storage<wbr>Profile<wbr>Data<wbr>Disk]</a></span>
    </dt>
    <dd>{{% md %}}A storage profile data disk block as documented below
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>storage_<wbr>profile_<wbr>image_<wbr>reference</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetstorageprofileimagereference">Dict[Scale<wbr>Set<wbr>Storage<wbr>Profile<wbr>Image<wbr>Reference]</a></span>
    </dt>
    <dd>{{% md %}}A storage profile image reference block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>storage_<wbr>profile_<wbr>os_<wbr>disk</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetstorageprofileosdisk">Dict[Scale<wbr>Set<wbr>Storage<wbr>Profile<wbr>Os<wbr>Disk]</a></span>
    </dt>
    <dd>{{% md %}}A storage profile os disk block as documented below
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dict[str, str]</span>
    </dt>
    <dd>{{% md %}}A mapping of tags to assign to the resource.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>upgrade_<wbr>policy_<wbr>mode</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the mode of an upgrade to virtual machines in the scale set. Possible values, `Rolling`, `Manual`, or `Automatic`. When choosing `Rolling`, you will need to set a health probe.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>zones</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}A collection of availability zones to spread the Virtual Machines over.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}










## Supporting Types

<h4>Scale<wbr>Set<wbr>Boot<wbr>Diagnostics</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/input/#ScaleSetBootDiagnostics">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/output/#ScaleSetBootDiagnostics">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSetBootDiagnosticsArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSetBootDiagnosticsOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Storage<wbr>Uri</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Storage<wbr>Uri</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>storage<wbr>Uri</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>storage<wbr>Uri</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Scale<wbr>Set<wbr>Extension</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/input/#ScaleSetExtension">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/output/#ScaleSetExtension">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSetExtensionArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSetExtensionOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the extension.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Publisher</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The publisher of the extension, available publishers can be found by using the Azure CLI.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The type of extension, available types for a publisher can be found using the Azure CLI.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Type<wbr>Handler<wbr>Version</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the version of the extension to use, available versions can be found using the Azure CLI.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Auto<wbr>Upgrade<wbr>Minor<wbr>Version</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Specifies whether or not to use the latest minor version available.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Protected<wbr>Settings</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The protected_settings passed to the extension, like settings, these are specified as a JSON object in a string.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Provision<wbr>After<wbr>Extensions</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}Specifies a dependency array of extensions required to be executed before, the array stores the name of each extension.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Settings</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The settings passed to the extension, these are specified as a JSON object in a string.
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
    <dd>{{% md %}}Specifies the name of the extension.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Publisher</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The publisher of the extension, available publishers can be found by using the Azure CLI.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The type of extension, available types for a publisher can be found using the Azure CLI.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Type<wbr>Handler<wbr>Version</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the version of the extension to use, available versions can be found using the Azure CLI.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Auto<wbr>Upgrade<wbr>Minor<wbr>Version</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Specifies whether or not to use the latest minor version available.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Protected<wbr>Settings</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The protected_settings passed to the extension, like settings, these are specified as a JSON object in a string.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Provision<wbr>After<wbr>Extensions</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}Specifies a dependency array of extensions required to be executed before, the array stores the name of each extension.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Settings</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The settings passed to the extension, these are specified as a JSON object in a string.
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
    <dd>{{% md %}}Specifies the name of the extension.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>publisher</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The publisher of the extension, available publishers can be found by using the Azure CLI.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The type of extension, available types for a publisher can be found using the Azure CLI.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>type<wbr>Handler<wbr>Version</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the version of the extension to use, available versions can be found using the Azure CLI.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>auto<wbr>Upgrade<wbr>Minor<wbr>Version</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Specifies whether or not to use the latest minor version available.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>protected<wbr>Settings</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The protected_settings passed to the extension, like settings, these are specified as a JSON object in a string.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>provision<wbr>After<wbr>Extensions</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}Specifies a dependency array of extensions required to be executed before, the array stores the name of each extension.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>settings</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The settings passed to the extension, these are specified as a JSON object in a string.
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
    <dd>{{% md %}}Specifies the name of the extension.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>publisher</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The publisher of the extension, available publishers can be found by using the Azure CLI.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The type of extension, available types for a publisher can be found using the Azure CLI.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>type_<wbr>handler_<wbr>version</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the version of the extension to use, available versions can be found using the Azure CLI.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>auto_<wbr>upgrade_<wbr>minor_<wbr>version</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Specifies whether or not to use the latest minor version available.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>protected_<wbr>settings</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The protected_settings passed to the extension, like settings, these are specified as a JSON object in a string.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>provision_<wbr>after_<wbr>extensions</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}Specifies a dependency array of extensions required to be executed before, the array stores the name of each extension.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>settings</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The settings passed to the extension, these are specified as a JSON object in a string.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Scale<wbr>Set<wbr>Identity</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/input/#ScaleSetIdentity">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/output/#ScaleSetIdentity">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSetIdentityArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSetIdentityOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the identity type to be assigned to the scale set. Allowable values are `SystemAssigned` and `UserAssigned`. For the `SystemAssigned` identity the scale set's Service Principal ID (SPN) can be retrieved after the scale set has been created. See [documentation](https://docs.microsoft.com/en-us/azure/active-directory/managed-service-identity/overview) for more information.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Identity<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}Specifies a list of user managed identity ids to be assigned to the VMSS. Required if `type` is `UserAssigned`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Principal<wbr>Id</span>
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
        <span>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the identity type to be assigned to the scale set. Allowable values are `SystemAssigned` and `UserAssigned`. For the `SystemAssigned` identity the scale set's Service Principal ID (SPN) can be retrieved after the scale set has been created. See [documentation](https://docs.microsoft.com/en-us/azure/active-directory/managed-service-identity/overview) for more information.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Identity<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}Specifies a list of user managed identity ids to be assigned to the VMSS. Required if `type` is `UserAssigned`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Principal<wbr>Id</span>
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
        <span>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the identity type to be assigned to the scale set. Allowable values are `SystemAssigned` and `UserAssigned`. For the `SystemAssigned` identity the scale set's Service Principal ID (SPN) can be retrieved after the scale set has been created. See [documentation](https://docs.microsoft.com/en-us/azure/active-directory/managed-service-identity/overview) for more information.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>identity<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}Specifies a list of user managed identity ids to be assigned to the VMSS. Required if `type` is `UserAssigned`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>principal<wbr>Id</span>
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
        <span>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the identity type to be assigned to the scale set. Allowable values are `SystemAssigned` and `UserAssigned`. For the `SystemAssigned` identity the scale set's Service Principal ID (SPN) can be retrieved after the scale set has been created. See [documentation](https://docs.microsoft.com/en-us/azure/active-directory/managed-service-identity/overview) for more information.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>identity<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}Specifies a list of user managed identity ids to be assigned to the VMSS. Required if `type` is `UserAssigned`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>principal_<wbr>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Scale<wbr>Set<wbr>Network<wbr>Profile</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/input/#ScaleSetNetworkProfile">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/output/#ScaleSetNetworkProfile">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSetNetworkProfileArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSetNetworkProfileOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Ip<wbr>Configurations</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetnetworkprofileipconfiguration">List&lt;Scale<wbr>Set<wbr>Network<wbr>Profile<wbr>Ip<wbr>Configuration<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}An ip_configuration block as documented below.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the network interface configuration.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Primary</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Indicates whether network interfaces created from the network interface configuration will be the primary NIC of the VM.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Accelerated<wbr>Networking</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Specifies whether to enable accelerated networking or not. Defaults to `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Dns<wbr>Settings</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetnetworkprofilednssettings">Scale<wbr>Set<wbr>Network<wbr>Profile<wbr>Dns<wbr>Settings<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}A dns_settings block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ip<wbr>Forwarding</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Whether IP forwarding is enabled on this NIC. Defaults to `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Network<wbr>Security<wbr>Group<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the identifier for the network security group.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Ip<wbr>Configurations</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetnetworkprofileipconfiguration">[]Scale<wbr>Set<wbr>Network<wbr>Profile<wbr>Ip<wbr>Configuration</a></span>
    </dt>
    <dd>{{% md %}}An ip_configuration block as documented below.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the network interface configuration.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Primary</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Indicates whether network interfaces created from the network interface configuration will be the primary NIC of the VM.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Accelerated<wbr>Networking</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Specifies whether to enable accelerated networking or not. Defaults to `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Dns<wbr>Settings</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetnetworkprofilednssettings">Scale<wbr>Set<wbr>Network<wbr>Profile<wbr>Dns<wbr>Settings</a></span>
    </dt>
    <dd>{{% md %}}A dns_settings block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ip<wbr>Forwarding</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Whether IP forwarding is enabled on this NIC. Defaults to `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Network<wbr>Security<wbr>Group<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the identifier for the network security group.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>ip<wbr>Configurations</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetnetworkprofileipconfiguration">Scale<wbr>Set<wbr>Network<wbr>Profile<wbr>Ip<wbr>Configuration[]</a></span>
    </dt>
    <dd>{{% md %}}An ip_configuration block as documented below.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the network interface configuration.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>primary</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Indicates whether network interfaces created from the network interface configuration will be the primary NIC of the VM.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>accelerated<wbr>Networking</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Specifies whether to enable accelerated networking or not. Defaults to `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>dns<wbr>Settings</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetnetworkprofilednssettings">Scale<wbr>Set<wbr>Network<wbr>Profile<wbr>Dns<wbr>Settings</a></span>
    </dt>
    <dd>{{% md %}}A dns_settings block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ip<wbr>Forwarding</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Whether IP forwarding is enabled on this NIC. Defaults to `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>network<wbr>Security<wbr>Group<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the identifier for the network security group.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>ip_<wbr>configurations</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetnetworkprofileipconfiguration">List[Scale<wbr>Set<wbr>Network<wbr>Profile<wbr>Ip<wbr>Configuration]</a></span>
    </dt>
    <dd>{{% md %}}An ip_configuration block as documented below.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the network interface configuration.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>primary</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Indicates whether network interfaces created from the network interface configuration will be the primary NIC of the VM.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>accelerated<wbr>Networking</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Specifies whether to enable accelerated networking or not. Defaults to `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>dns<wbr>Settings</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetnetworkprofilednssettings">Dict[Scale<wbr>Set<wbr>Network<wbr>Profile<wbr>Dns<wbr>Settings]</a></span>
    </dt>
    <dd>{{% md %}}A dns_settings block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ip<wbr>Forwarding</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Whether IP forwarding is enabled on this NIC. Defaults to `false`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>network_<wbr>security_<wbr>group_<wbr>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the identifier for the network security group.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Scale<wbr>Set<wbr>Network<wbr>Profile<wbr>Dns<wbr>Settings</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/input/#ScaleSetNetworkProfileDnsSettings">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/output/#ScaleSetNetworkProfileDnsSettings">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSetNetworkProfileDnsSettingsArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSetNetworkProfileDnsSettingsOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Dns<wbr>Servers</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}Specifies an array of dns servers.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Dns<wbr>Servers</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}Specifies an array of dns servers.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>dns<wbr>Servers</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}Specifies an array of dns servers.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>dns_<wbr>servers</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}Specifies an array of dns servers.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Scale<wbr>Set<wbr>Network<wbr>Profile<wbr>Ip<wbr>Configuration</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/input/#ScaleSetNetworkProfileIpConfiguration">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/output/#ScaleSetNetworkProfileIpConfiguration">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSetNetworkProfileIpConfigurationArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSetNetworkProfileIpConfigurationOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies name of the IP configuration.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Primary</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Specifies if this ip_configuration is the primary one.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Subnet<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the identifier of the subnet.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Application<wbr>Gateway<wbr>Backend<wbr>Address<wbr>Pool<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}Specifies an array of references to backend address pools of application gateways. A scale set can reference backend address pools of multiple application gateways. Multiple scale sets can use the same application gateway.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Application<wbr>Security<wbr>Group<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}Specifies up to `20` application security group IDs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Load<wbr>Balancer<wbr>Backend<wbr>Address<wbr>Pool<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}Specifies an array of references to backend address pools of load balancers. A scale set can reference backend address pools of one public and one internal load balancer. Multiple scale sets cannot use the same load balancer.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Load<wbr>Balancer<wbr>Inbound<wbr>Nat<wbr>Rules<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}Specifies an array of references to inbound NAT pools for load balancers. A scale set can reference inbound nat pools of one public and one internal load balancer. Multiple scale sets cannot use the same load balancer.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Public<wbr>Ip<wbr>Address<wbr>Configuration</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetnetworkprofileipconfigurationpublicipaddressconfiguration">Scale<wbr>Set<wbr>Network<wbr>Profile<wbr>Ip<wbr>Configuration<wbr>Public<wbr>Ip<wbr>Address<wbr>Configuration<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}Describes a virtual machines scale set IP Configuration's PublicIPAddress configuration. The public_ip_address_configuration is documented below.
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
    <dd>{{% md %}}Specifies name of the IP configuration.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Primary</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Specifies if this ip_configuration is the primary one.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Subnet<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the identifier of the subnet.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Application<wbr>Gateway<wbr>Backend<wbr>Address<wbr>Pool<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}Specifies an array of references to backend address pools of application gateways. A scale set can reference backend address pools of multiple application gateways. Multiple scale sets can use the same application gateway.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Application<wbr>Security<wbr>Group<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}Specifies up to `20` application security group IDs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Load<wbr>Balancer<wbr>Backend<wbr>Address<wbr>Pool<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}Specifies an array of references to backend address pools of load balancers. A scale set can reference backend address pools of one public and one internal load balancer. Multiple scale sets cannot use the same load balancer.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Load<wbr>Balancer<wbr>Inbound<wbr>Nat<wbr>Rules<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}Specifies an array of references to inbound NAT pools for load balancers. A scale set can reference inbound nat pools of one public and one internal load balancer. Multiple scale sets cannot use the same load balancer.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Public<wbr>Ip<wbr>Address<wbr>Configuration</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetnetworkprofileipconfigurationpublicipaddressconfiguration">Scale<wbr>Set<wbr>Network<wbr>Profile<wbr>Ip<wbr>Configuration<wbr>Public<wbr>Ip<wbr>Address<wbr>Configuration</a></span>
    </dt>
    <dd>{{% md %}}Describes a virtual machines scale set IP Configuration's PublicIPAddress configuration. The public_ip_address_configuration is documented below.
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
    <dd>{{% md %}}Specifies name of the IP configuration.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>primary</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Specifies if this ip_configuration is the primary one.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>subnet<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the identifier of the subnet.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>application<wbr>Gateway<wbr>Backend<wbr>Address<wbr>Pool<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}Specifies an array of references to backend address pools of application gateways. A scale set can reference backend address pools of multiple application gateways. Multiple scale sets can use the same application gateway.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>application<wbr>Security<wbr>Group<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}Specifies up to `20` application security group IDs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>load<wbr>Balancer<wbr>Backend<wbr>Address<wbr>Pool<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}Specifies an array of references to backend address pools of load balancers. A scale set can reference backend address pools of one public and one internal load balancer. Multiple scale sets cannot use the same load balancer.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>load<wbr>Balancer<wbr>Inbound<wbr>Nat<wbr>Rules<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}Specifies an array of references to inbound NAT pools for load balancers. A scale set can reference inbound nat pools of one public and one internal load balancer. Multiple scale sets cannot use the same load balancer.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>public<wbr>Ip<wbr>Address<wbr>Configuration</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetnetworkprofileipconfigurationpublicipaddressconfiguration">Scale<wbr>Set<wbr>Network<wbr>Profile<wbr>Ip<wbr>Configuration<wbr>Public<wbr>Ip<wbr>Address<wbr>Configuration</a></span>
    </dt>
    <dd>{{% md %}}Describes a virtual machines scale set IP Configuration's PublicIPAddress configuration. The public_ip_address_configuration is documented below.
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
    <dd>{{% md %}}Specifies name of the IP configuration.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>primary</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Specifies if this ip_configuration is the primary one.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>subnet_<wbr>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the identifier of the subnet.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>application<wbr>Gateway<wbr>Backend<wbr>Address<wbr>Pool<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}Specifies an array of references to backend address pools of application gateways. A scale set can reference backend address pools of multiple application gateways. Multiple scale sets can use the same application gateway.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>application<wbr>Security<wbr>Group<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}Specifies up to `20` application security group IDs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>load<wbr>Balancer<wbr>Backend<wbr>Address<wbr>Pool<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}Specifies an array of references to backend address pools of load balancers. A scale set can reference backend address pools of one public and one internal load balancer. Multiple scale sets cannot use the same load balancer.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>load<wbr>Balancer<wbr>Inbound<wbr>Nat<wbr>Rules<wbr>Ids</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}Specifies an array of references to inbound NAT pools for load balancers. A scale set can reference inbound nat pools of one public and one internal load balancer. Multiple scale sets cannot use the same load balancer.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>public<wbr>Ip<wbr>Address<wbr>Configuration</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetnetworkprofileipconfigurationpublicipaddressconfiguration">Dict[Scale<wbr>Set<wbr>Network<wbr>Profile<wbr>Ip<wbr>Configuration<wbr>Public<wbr>Ip<wbr>Address<wbr>Configuration]</a></span>
    </dt>
    <dd>{{% md %}}Describes a virtual machines scale set IP Configuration's PublicIPAddress configuration. The public_ip_address_configuration is documented below.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Scale<wbr>Set<wbr>Network<wbr>Profile<wbr>Ip<wbr>Configuration<wbr>Public<wbr>Ip<wbr>Address<wbr>Configuration</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/input/#ScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/output/#ScaleSetNetworkProfileIpConfigurationPublicIpAddressConfiguration">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSetNetworkProfileIpConfigurationPublicIpAddressConfigurationOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Domain<wbr>Name<wbr>Label</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The domain name label for the dns settings.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Idle<wbr>Timeout</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The idle timeout in minutes. This value must be between 4 and 30.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the public ip address configuration
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Domain<wbr>Name<wbr>Label</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The domain name label for the dns settings.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Idle<wbr>Timeout</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The idle timeout in minutes. This value must be between 4 and 30.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the public ip address configuration
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>domain<wbr>Name<wbr>Label</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The domain name label for the dns settings.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>idle<wbr>Timeout</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The idle timeout in minutes. This value must be between 4 and 30.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the public ip address configuration
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>domain_<wbr>name_<wbr>label</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The domain name label for the dns settings.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>idle<wbr>Timeout</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The idle timeout in minutes. This value must be between 4 and 30.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the public ip address configuration
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Scale<wbr>Set<wbr>Os<wbr>Profile</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/input/#ScaleSetOsProfile">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/output/#ScaleSetOsProfile">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSetOsProfileArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSetOsProfileOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Admin<wbr>Username</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the administrator account name to use for all the instances of virtual machines in the scale set.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Computer<wbr>Name<wbr>Prefix</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the computer name prefix for all of the virtual machines in the scale set. Computer name prefixes must be 1 to 9 characters long for windows images and 1 - 58 for linux. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Admin<wbr>Password</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the administrator password to use for all the instances of virtual machines in a scale set.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Custom<wbr>Data</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies custom data to supply to the machine. On linux-based systems, this can be used as a cloud-init script. On other systems, this will be copied as a file on disk. Internally, this provider will base64 encode this value before sending it to the API. The maximum length of the binary array is 65535 bytes.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Admin<wbr>Username</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the administrator account name to use for all the instances of virtual machines in the scale set.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Computer<wbr>Name<wbr>Prefix</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the computer name prefix for all of the virtual machines in the scale set. Computer name prefixes must be 1 to 9 characters long for windows images and 1 - 58 for linux. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Admin<wbr>Password</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the administrator password to use for all the instances of virtual machines in a scale set.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Custom<wbr>Data</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies custom data to supply to the machine. On linux-based systems, this can be used as a cloud-init script. On other systems, this will be copied as a file on disk. Internally, this provider will base64 encode this value before sending it to the API. The maximum length of the binary array is 65535 bytes.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>admin<wbr>Username</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the administrator account name to use for all the instances of virtual machines in the scale set.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>computer<wbr>Name<wbr>Prefix</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the computer name prefix for all of the virtual machines in the scale set. Computer name prefixes must be 1 to 9 characters long for windows images and 1 - 58 for linux. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>admin<wbr>Password</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the administrator password to use for all the instances of virtual machines in a scale set.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>custom<wbr>Data</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies custom data to supply to the machine. On linux-based systems, this can be used as a cloud-init script. On other systems, this will be copied as a file on disk. Internally, this provider will base64 encode this value before sending it to the API. The maximum length of the binary array is 65535 bytes.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>admin_<wbr>username</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the administrator account name to use for all the instances of virtual machines in the scale set.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>computer_<wbr>name_<wbr>prefix</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the computer name prefix for all of the virtual machines in the scale set. Computer name prefixes must be 1 to 9 characters long for windows images and 1 - 58 for linux. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>admin_<wbr>password</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the administrator password to use for all the instances of virtual machines in a scale set.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>custom_<wbr>data</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies custom data to supply to the machine. On linux-based systems, this can be used as a cloud-init script. On other systems, this will be copied as a file on disk. Internally, this provider will base64 encode this value before sending it to the API. The maximum length of the binary array is 65535 bytes.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Linux<wbr>Config</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/input/#ScaleSetOsProfileLinuxConfig">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/output/#ScaleSetOsProfileLinuxConfig">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSetOsProfileLinuxConfigArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSetOsProfileLinuxConfigOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Disable<wbr>Password<wbr>Authentication</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Specifies whether password authentication should be disabled. Defaults to `false`. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ssh<wbr>Keys</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofilelinuxconfigsshkey">List&lt;Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Linux<wbr>Config<wbr>Ssh<wbr>Key<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}Specifies a collection of `path` and `key_data` to be placed on the virtual machine.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Disable<wbr>Password<wbr>Authentication</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Specifies whether password authentication should be disabled. Defaults to `false`. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ssh<wbr>Keys</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofilelinuxconfigsshkey">[]Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Linux<wbr>Config<wbr>Ssh<wbr>Key</a></span>
    </dt>
    <dd>{{% md %}}Specifies a collection of `path` and `key_data` to be placed on the virtual machine.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>disable<wbr>Password<wbr>Authentication</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Specifies whether password authentication should be disabled. Defaults to `false`. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ssh<wbr>Keys</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofilelinuxconfigsshkey">Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Linux<wbr>Config<wbr>Ssh<wbr>Key[]</a></span>
    </dt>
    <dd>{{% md %}}Specifies a collection of `path` and `key_data` to be placed on the virtual machine.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>disable_<wbr>password_<wbr>authentication</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Specifies whether password authentication should be disabled. Defaults to `false`. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ssh<wbr>Keys</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofilelinuxconfigsshkey">List[Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Linux<wbr>Config<wbr>Ssh<wbr>Key]</a></span>
    </dt>
    <dd>{{% md %}}Specifies a collection of `path` and `key_data` to be placed on the virtual machine.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Linux<wbr>Config<wbr>Ssh<wbr>Key</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/input/#ScaleSetOsProfileLinuxConfigSshKey">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/output/#ScaleSetOsProfileLinuxConfigSshKey">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSetOsProfileLinuxConfigSshKeyArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSetOsProfileLinuxConfigSshKeyOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Path</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Key<wbr>Data</span>
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
        <span>Path</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Key<wbr>Data</span>
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
        <span>path</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>key<wbr>Data</span>
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
        <span>path</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>key<wbr>Data</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Secret</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/input/#ScaleSetOsProfileSecret">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/output/#ScaleSetOsProfileSecret">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSetOsProfileSecretArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSetOsProfileSecretOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Source<wbr>Vault<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the key vault to use.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Vault<wbr>Certificates</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofilesecretvaultcertificate">List&lt;Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Secret<wbr>Vault<wbr>Certificate<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}A collection of Vault Certificates as documented below
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Source<wbr>Vault<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the key vault to use.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Vault<wbr>Certificates</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofilesecretvaultcertificate">[]Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Secret<wbr>Vault<wbr>Certificate</a></span>
    </dt>
    <dd>{{% md %}}A collection of Vault Certificates as documented below
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>source<wbr>Vault<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the key vault to use.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>vault<wbr>Certificates</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofilesecretvaultcertificate">Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Secret<wbr>Vault<wbr>Certificate[]</a></span>
    </dt>
    <dd>{{% md %}}A collection of Vault Certificates as documented below
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>source<wbr>Vault<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the key vault to use.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>vault<wbr>Certificates</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofilesecretvaultcertificate">List[Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Secret<wbr>Vault<wbr>Certificate]</a></span>
    </dt>
    <dd>{{% md %}}A collection of Vault Certificates as documented below
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Secret<wbr>Vault<wbr>Certificate</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/input/#ScaleSetOsProfileSecretVaultCertificate">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/output/#ScaleSetOsProfileSecretVaultCertificate">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSetOsProfileSecretVaultCertificateArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSetOsProfileSecretVaultCertificateOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Certificate<wbr>Url</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}It is the Base64 encoding of a JSON Object that which is encoded in UTF-8 of which the contents need to be `data`, `dataType` and `password`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Certificate<wbr>Store</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the certificate store on the Virtual Machine where the certificate should be added to.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Certificate<wbr>Url</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}It is the Base64 encoding of a JSON Object that which is encoded in UTF-8 of which the contents need to be `data`, `dataType` and `password`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Certificate<wbr>Store</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the certificate store on the Virtual Machine where the certificate should be added to.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>certificate<wbr>Url</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}It is the Base64 encoding of a JSON Object that which is encoded in UTF-8 of which the contents need to be `data`, `dataType` and `password`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>certificate<wbr>Store</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the certificate store on the Virtual Machine where the certificate should be added to.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>certificate<wbr>Url</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}It is the Base64 encoding of a JSON Object that which is encoded in UTF-8 of which the contents need to be `data`, `dataType` and `password`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>certificate<wbr>Store</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the certificate store on the Virtual Machine where the certificate should be added to.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Windows<wbr>Config</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/input/#ScaleSetOsProfileWindowsConfig">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/output/#ScaleSetOsProfileWindowsConfig">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSetOsProfileWindowsConfigArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSetOsProfileWindowsConfigOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Additional<wbr>Unattend<wbr>Configs</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofilewindowsconfigadditionalunattendconfig">List&lt;Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Windows<wbr>Config<wbr>Additional<wbr>Unattend<wbr>Config<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}An Additional Unattended Config block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Enable<wbr>Automatic<wbr>Upgrades</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Indicates whether virtual machines in the scale set are enabled for automatic updates.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Provision<wbr>Vm<wbr>Agent</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Indicates whether virtual machine agent should be provisioned on the virtual machines in the scale set.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Winrms</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofilewindowsconfigwinrm">List&lt;Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Windows<wbr>Config<wbr>Winrm<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}A collection of WinRM configuration blocks as documented below.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Additional<wbr>Unattend<wbr>Configs</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofilewindowsconfigadditionalunattendconfig">[]Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Windows<wbr>Config<wbr>Additional<wbr>Unattend<wbr>Config</a></span>
    </dt>
    <dd>{{% md %}}An Additional Unattended Config block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Enable<wbr>Automatic<wbr>Upgrades</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Indicates whether virtual machines in the scale set are enabled for automatic updates.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Provision<wbr>Vm<wbr>Agent</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Indicates whether virtual machine agent should be provisioned on the virtual machines in the scale set.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Winrms</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofilewindowsconfigwinrm">[]Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Windows<wbr>Config<wbr>Winrm</a></span>
    </dt>
    <dd>{{% md %}}A collection of WinRM configuration blocks as documented below.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>additional<wbr>Unattend<wbr>Configs</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofilewindowsconfigadditionalunattendconfig">Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Windows<wbr>Config<wbr>Additional<wbr>Unattend<wbr>Config[]</a></span>
    </dt>
    <dd>{{% md %}}An Additional Unattended Config block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>enable<wbr>Automatic<wbr>Upgrades</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Indicates whether virtual machines in the scale set are enabled for automatic updates.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>provision<wbr>Vm<wbr>Agent</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Indicates whether virtual machine agent should be provisioned on the virtual machines in the scale set.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>winrms</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofilewindowsconfigwinrm">Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Windows<wbr>Config<wbr>Winrm[]</a></span>
    </dt>
    <dd>{{% md %}}A collection of WinRM configuration blocks as documented below.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>additional<wbr>Unattend<wbr>Configs</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofilewindowsconfigadditionalunattendconfig">List[Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Windows<wbr>Config<wbr>Additional<wbr>Unattend<wbr>Config]</a></span>
    </dt>
    <dd>{{% md %}}An Additional Unattended Config block as documented below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>enable<wbr>Automatic<wbr>Upgrades</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Indicates whether virtual machines in the scale set are enabled for automatic updates.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>provision_<wbr>vm_<wbr>agent</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Indicates whether virtual machine agent should be provisioned on the virtual machines in the scale set.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>winrms</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#scalesetosprofilewindowsconfigwinrm">List[Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Windows<wbr>Config<wbr>Winrm]</a></span>
    </dt>
    <dd>{{% md %}}A collection of WinRM configuration blocks as documented below.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Windows<wbr>Config<wbr>Additional<wbr>Unattend<wbr>Config</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/input/#ScaleSetOsProfileWindowsConfigAdditionalUnattendConfig">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/output/#ScaleSetOsProfileWindowsConfigAdditionalUnattendConfig">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSetOsProfileWindowsConfigAdditionalUnattendConfigArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSetOsProfileWindowsConfigAdditionalUnattendConfigOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Component</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the component to configure with the added content. The only allowable value is `Microsoft-Windows-Shell-Setup`.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Content</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the base-64 encoded XML formatted content that is added to the unattend.xml file for the specified path and component.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Pass</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the pass that the content applies to. The only allowable value is `oobeSystem`.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Setting<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the setting to which the content applies. Possible values are: `FirstLogonCommands` and `AutoLogon`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Component</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the component to configure with the added content. The only allowable value is `Microsoft-Windows-Shell-Setup`.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Content</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the base-64 encoded XML formatted content that is added to the unattend.xml file for the specified path and component.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Pass</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the pass that the content applies to. The only allowable value is `oobeSystem`.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Setting<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the setting to which the content applies. Possible values are: `FirstLogonCommands` and `AutoLogon`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>component</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the component to configure with the added content. The only allowable value is `Microsoft-Windows-Shell-Setup`.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>content</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the base-64 encoded XML formatted content that is added to the unattend.xml file for the specified path and component.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>pass</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the pass that the content applies to. The only allowable value is `oobeSystem`.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>setting<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the setting to which the content applies. Possible values are: `FirstLogonCommands` and `AutoLogon`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>component</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the component to configure with the added content. The only allowable value is `Microsoft-Windows-Shell-Setup`.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>content</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the base-64 encoded XML formatted content that is added to the unattend.xml file for the specified path and component.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>pass</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the pass that the content applies to. The only allowable value is `oobeSystem`.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>setting<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the setting to which the content applies. Possible values are: `FirstLogonCommands` and `AutoLogon`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Scale<wbr>Set<wbr>Os<wbr>Profile<wbr>Windows<wbr>Config<wbr>Winrm</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/input/#ScaleSetOsProfileWindowsConfigWinrm">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/output/#ScaleSetOsProfileWindowsConfigWinrm">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSetOsProfileWindowsConfigWinrmArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSetOsProfileWindowsConfigWinrmOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Protocol</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the protocol of listener
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Certificate<wbr>Url</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies URL of the certificate with which new Virtual Machines is provisioned.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Protocol</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the protocol of listener
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Certificate<wbr>Url</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies URL of the certificate with which new Virtual Machines is provisioned.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>protocol</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the protocol of listener
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>certificate<wbr>Url</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies URL of the certificate with which new Virtual Machines is provisioned.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>protocol</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the protocol of listener
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>certificate<wbr>Url</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies URL of the certificate with which new Virtual Machines is provisioned.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Scale<wbr>Set<wbr>Plan</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/input/#ScaleSetPlan">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/output/#ScaleSetPlan">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSetPlanArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSetPlanOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the image from the marketplace.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Product</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the product of the image from the marketplace.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Publisher</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the publisher of the image.
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
    <dd>{{% md %}}Specifies the name of the image from the marketplace.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Product</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the product of the image from the marketplace.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Publisher</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the publisher of the image.
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
    <dd>{{% md %}}Specifies the name of the image from the marketplace.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>product</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the product of the image from the marketplace.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>publisher</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the publisher of the image.
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
    <dd>{{% md %}}Specifies the name of the image from the marketplace.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>product</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the product of the image from the marketplace.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>publisher</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the publisher of the image.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Scale<wbr>Set<wbr>Rolling<wbr>Upgrade<wbr>Policy</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/input/#ScaleSetRollingUpgradePolicy">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/output/#ScaleSetRollingUpgradePolicy">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSetRollingUpgradePolicyArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSetRollingUpgradePolicyOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Max<wbr>Batch<wbr>Instance<wbr>Percent</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The maximum percent of total virtual machine instances that will be upgraded simultaneously by the rolling upgrade in one batch. As this is a maximum, unhealthy instances in previous or future batches can cause the percentage of instances in a batch to decrease to ensure higher reliability. Defaults to `20`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Max<wbr>Unhealthy<wbr>Instance<wbr>Percent</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The maximum percentage of the total virtual machine instances in the scale set that can be simultaneously unhealthy, either as a result of being upgraded, or by being found in an unhealthy state by the virtual machine health checks before the rolling upgrade aborts. This constraint will be checked prior to starting any batch. Defaults to `20`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Max<wbr>Unhealthy<wbr>Upgraded<wbr>Instance<wbr>Percent</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The maximum percentage of upgraded virtual machine instances that can be found to be in an unhealthy state. This check will happen after each batch is upgraded. If this percentage is ever exceeded, the rolling update aborts. Defaults to `20`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Pause<wbr>Time<wbr>Between<wbr>Batches</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The wait time between completing the update for all virtual machines in one batch and starting the next batch. The time duration should be specified in ISO 8601 format for duration (https://en.wikipedia.org/wiki/ISO_8601#Durations). Defaults to `0` seconds represented as `PT0S`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Max<wbr>Batch<wbr>Instance<wbr>Percent</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The maximum percent of total virtual machine instances that will be upgraded simultaneously by the rolling upgrade in one batch. As this is a maximum, unhealthy instances in previous or future batches can cause the percentage of instances in a batch to decrease to ensure higher reliability. Defaults to `20`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Max<wbr>Unhealthy<wbr>Instance<wbr>Percent</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The maximum percentage of the total virtual machine instances in the scale set that can be simultaneously unhealthy, either as a result of being upgraded, or by being found in an unhealthy state by the virtual machine health checks before the rolling upgrade aborts. This constraint will be checked prior to starting any batch. Defaults to `20`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Max<wbr>Unhealthy<wbr>Upgraded<wbr>Instance<wbr>Percent</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The maximum percentage of upgraded virtual machine instances that can be found to be in an unhealthy state. This check will happen after each batch is upgraded. If this percentage is ever exceeded, the rolling update aborts. Defaults to `20`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Pause<wbr>Time<wbr>Between<wbr>Batches</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The wait time between completing the update for all virtual machines in one batch and starting the next batch. The time duration should be specified in ISO 8601 format for duration (https://en.wikipedia.org/wiki/ISO_8601#Durations). Defaults to `0` seconds represented as `PT0S`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>max<wbr>Batch<wbr>Instance<wbr>Percent</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The maximum percent of total virtual machine instances that will be upgraded simultaneously by the rolling upgrade in one batch. As this is a maximum, unhealthy instances in previous or future batches can cause the percentage of instances in a batch to decrease to ensure higher reliability. Defaults to `20`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>max<wbr>Unhealthy<wbr>Instance<wbr>Percent</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The maximum percentage of the total virtual machine instances in the scale set that can be simultaneously unhealthy, either as a result of being upgraded, or by being found in an unhealthy state by the virtual machine health checks before the rolling upgrade aborts. This constraint will be checked prior to starting any batch. Defaults to `20`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>max<wbr>Unhealthy<wbr>Upgraded<wbr>Instance<wbr>Percent</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The maximum percentage of upgraded virtual machine instances that can be found to be in an unhealthy state. This check will happen after each batch is upgraded. If this percentage is ever exceeded, the rolling update aborts. Defaults to `20`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>pause<wbr>Time<wbr>Between<wbr>Batches</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The wait time between completing the update for all virtual machines in one batch and starting the next batch. The time duration should be specified in ISO 8601 format for duration (https://en.wikipedia.org/wiki/ISO_8601#Durations). Defaults to `0` seconds represented as `PT0S`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>max<wbr>Batch<wbr>Instance<wbr>Percent</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The maximum percent of total virtual machine instances that will be upgraded simultaneously by the rolling upgrade in one batch. As this is a maximum, unhealthy instances in previous or future batches can cause the percentage of instances in a batch to decrease to ensure higher reliability. Defaults to `20`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>max<wbr>Unhealthy<wbr>Instance<wbr>Percent</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The maximum percentage of the total virtual machine instances in the scale set that can be simultaneously unhealthy, either as a result of being upgraded, or by being found in an unhealthy state by the virtual machine health checks before the rolling upgrade aborts. This constraint will be checked prior to starting any batch. Defaults to `20`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>max<wbr>Unhealthy<wbr>Upgraded<wbr>Instance<wbr>Percent</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The maximum percentage of upgraded virtual machine instances that can be found to be in an unhealthy state. This check will happen after each batch is upgraded. If this percentage is ever exceeded, the rolling update aborts. Defaults to `20`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>pause<wbr>Time<wbr>Between<wbr>Batches</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The wait time between completing the update for all virtual machines in one batch and starting the next batch. The time duration should be specified in ISO 8601 format for duration (https://en.wikipedia.org/wiki/ISO_8601#Durations). Defaults to `0` seconds represented as `PT0S`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Scale<wbr>Set<wbr>Sku</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/input/#ScaleSetSku">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/output/#ScaleSetSku">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSetSkuArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSetSkuOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Capacity</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}Specifies the number of virtual machines in the scale set.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the size of virtual machines in a scale set.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Tier</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the tier of virtual machines in a scale set. Possible values, `standard` or `basic`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Capacity</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}Specifies the number of virtual machines in the scale set.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the size of virtual machines in a scale set.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Tier</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the tier of virtual machines in a scale set. Possible values, `standard` or `basic`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>capacity</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}Specifies the number of virtual machines in the scale set.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the size of virtual machines in a scale set.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>tier</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the tier of virtual machines in a scale set. Possible values, `standard` or `basic`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>capacity</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}Specifies the number of virtual machines in the scale set.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the size of virtual machines in a scale set.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>tier</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the tier of virtual machines in a scale set. Possible values, `standard` or `basic`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Scale<wbr>Set<wbr>Storage<wbr>Profile<wbr>Data<wbr>Disk</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/input/#ScaleSetStorageProfileDataDisk">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/output/#ScaleSetStorageProfileDataDisk">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSetStorageProfileDataDiskArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSetStorageProfileDataDiskOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Create<wbr>Option</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies how the data disk should be created. The only possible options are `FromImage` and `Empty`.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Lun</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}Specifies the Logical Unit Number of the disk in each virtual machine in the scale set.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Caching</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the caching requirements. Possible values include: `None` (default), `ReadOnly`, `ReadWrite`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Disk<wbr>Size<wbr>Gb</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}Specifies the size of the disk in GB. This element is required when creating an empty disk.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Managed<wbr>Disk<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the type of managed disk to create. Value must be either `Standard_LRS`, `StandardSSD_LRS` or `Premium_LRS`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Create<wbr>Option</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies how the data disk should be created. The only possible options are `FromImage` and `Empty`.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Lun</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}Specifies the Logical Unit Number of the disk in each virtual machine in the scale set.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Caching</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the caching requirements. Possible values include: `None` (default), `ReadOnly`, `ReadWrite`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Disk<wbr>Size<wbr>Gb</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}Specifies the size of the disk in GB. This element is required when creating an empty disk.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Managed<wbr>Disk<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the type of managed disk to create. Value must be either `Standard_LRS`, `StandardSSD_LRS` or `Premium_LRS`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>create<wbr>Option</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies how the data disk should be created. The only possible options are `FromImage` and `Empty`.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>lun</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}Specifies the Logical Unit Number of the disk in each virtual machine in the scale set.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>caching</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the caching requirements. Possible values include: `None` (default), `ReadOnly`, `ReadWrite`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>disk<wbr>Size<wbr>Gb</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}Specifies the size of the disk in GB. This element is required when creating an empty disk.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>managed<wbr>Disk<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the type of managed disk to create. Value must be either `Standard_LRS`, `StandardSSD_LRS` or `Premium_LRS`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>create_<wbr>option</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies how the data disk should be created. The only possible options are `FromImage` and `Empty`.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>lun</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}Specifies the Logical Unit Number of the disk in each virtual machine in the scale set.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>caching</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the caching requirements. Possible values include: `None` (default), `ReadOnly`, `ReadWrite`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>disk_<wbr>size_<wbr>gb</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}Specifies the size of the disk in GB. This element is required when creating an empty disk.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>managed<wbr>Disk<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the type of managed disk to create. Value must be either `Standard_LRS`, `StandardSSD_LRS` or `Premium_LRS`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Scale<wbr>Set<wbr>Storage<wbr>Profile<wbr>Image<wbr>Reference</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/input/#ScaleSetStorageProfileImageReference">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/output/#ScaleSetStorageProfileImageReference">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSetStorageProfileImageReferenceArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSetStorageProfileImageReferenceOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the ID of the (custom) image to use to create the virtual
machine scale set, as in the example below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Offer</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the offer of the image used to create the virtual machines.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Publisher</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the publisher of the image used to create the virtual machines.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sku</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the SKU of the image used to create the virtual machines.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Version</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the version of the image used to create the virtual machines.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the ID of the (custom) image to use to create the virtual
machine scale set, as in the example below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Offer</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the offer of the image used to create the virtual machines.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Publisher</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the publisher of the image used to create the virtual machines.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sku</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the SKU of the image used to create the virtual machines.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Version</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the version of the image used to create the virtual machines.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the ID of the (custom) image to use to create the virtual
machine scale set, as in the example below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>offer</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the offer of the image used to create the virtual machines.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>publisher</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the publisher of the image used to create the virtual machines.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sku</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the SKU of the image used to create the virtual machines.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>version</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the version of the image used to create the virtual machines.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the ID of the (custom) image to use to create the virtual
machine scale set, as in the example below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>offer</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the offer of the image used to create the virtual machines.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>publisher</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the publisher of the image used to create the virtual machines.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sku</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the SKU of the image used to create the virtual machines.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>version</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the version of the image used to create the virtual machines.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Scale<wbr>Set<wbr>Storage<wbr>Profile<wbr>Os<wbr>Disk</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/input/#ScaleSetStorageProfileOsDisk">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/output/#ScaleSetStorageProfileOsDisk">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSetStorageProfileOsDiskArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/compute?tab=doc#ScaleSetStorageProfileOsDiskOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Create<wbr>Option</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies how the virtual machine should be created. The only possible option is `FromImage`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Caching</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the caching requirements. Possible values include: `None` (default), `ReadOnly`, `ReadWrite`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Image</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the blob uri for user image. A virtual machine scale set creates an os disk in the same container as the user image.
Updating the osDisk image causes the existing disk to be deleted and a new one created with the new image. If the VM scale set is in Manual upgrade mode then the virtual machines are not updated until they have manualUpgrade applied to them.
When setting this field `os_type` needs to be specified. Cannot be used when `vhd_containers`, `managed_disk_type` or `storage_profile_image_reference` are specified.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Managed<wbr>Disk<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the type of managed disk to create. Value you must be either `Standard_LRS`, `StandardSSD_LRS` or `Premium_LRS`. Cannot be used when `vhd_containers` or `image` is specified.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the disk name. Must be specified when using unmanaged disk ('managed_disk_type' property not set).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Os<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the operating system Type, valid values are windows, linux.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Vhd<wbr>Containers</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}Specifies the vhd uri. Cannot be used when `image` or `managed_disk_type` is specified.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Create<wbr>Option</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies how the virtual machine should be created. The only possible option is `FromImage`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Caching</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the caching requirements. Possible values include: `None` (default), `ReadOnly`, `ReadWrite`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Image</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the blob uri for user image. A virtual machine scale set creates an os disk in the same container as the user image.
Updating the osDisk image causes the existing disk to be deleted and a new one created with the new image. If the VM scale set is in Manual upgrade mode then the virtual machines are not updated until they have manualUpgrade applied to them.
When setting this field `os_type` needs to be specified. Cannot be used when `vhd_containers`, `managed_disk_type` or `storage_profile_image_reference` are specified.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Managed<wbr>Disk<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the type of managed disk to create. Value you must be either `Standard_LRS`, `StandardSSD_LRS` or `Premium_LRS`. Cannot be used when `vhd_containers` or `image` is specified.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the disk name. Must be specified when using unmanaged disk ('managed_disk_type' property not set).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Os<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the operating system Type, valid values are windows, linux.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Vhd<wbr>Containers</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the vhd uri. Cannot be used when `image` or `managed_disk_type` is specified.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>create<wbr>Option</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies how the virtual machine should be created. The only possible option is `FromImage`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>caching</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the caching requirements. Possible values include: `None` (default), `ReadOnly`, `ReadWrite`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>image</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the blob uri for user image. A virtual machine scale set creates an os disk in the same container as the user image.
Updating the osDisk image causes the existing disk to be deleted and a new one created with the new image. If the VM scale set is in Manual upgrade mode then the virtual machines are not updated until they have manualUpgrade applied to them.
When setting this field `os_type` needs to be specified. Cannot be used when `vhd_containers`, `managed_disk_type` or `storage_profile_image_reference` are specified.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>managed<wbr>Disk<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the type of managed disk to create. Value you must be either `Standard_LRS`, `StandardSSD_LRS` or `Premium_LRS`. Cannot be used when `vhd_containers` or `image` is specified.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the disk name. Must be specified when using unmanaged disk ('managed_disk_type' property not set).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>os<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the operating system Type, valid values are windows, linux.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>vhd<wbr>Containers</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}Specifies the vhd uri. Cannot be used when `image` or `managed_disk_type` is specified.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>create_<wbr>option</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies how the virtual machine should be created. The only possible option is `FromImage`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>caching</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the caching requirements. Possible values include: `None` (default), `ReadOnly`, `ReadWrite`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>image</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the blob uri for user image. A virtual machine scale set creates an os disk in the same container as the user image.
Updating the osDisk image causes the existing disk to be deleted and a new one created with the new image. If the VM scale set is in Manual upgrade mode then the virtual machines are not updated until they have manualUpgrade applied to them.
When setting this field `os_type` needs to be specified. Cannot be used when `vhd_containers`, `managed_disk_type` or `storage_profile_image_reference` are specified.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>managed<wbr>Disk<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the type of managed disk to create. Value you must be either `Standard_LRS`, `StandardSSD_LRS` or `Premium_LRS`. Cannot be used when `vhd_containers` or `image` is specified.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the disk name. Must be specified when using unmanaged disk ('managed_disk_type' property not set).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>os_<wbr>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the operating system Type, valid values are windows, linux.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>vhd<wbr>Containers</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}Specifies the vhd uri. Cannot be used when `image` or `managed_disk_type` is specified.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}









<h3>Package Details</h3>
<dl class="package-details">
	<dt>Repository</dt>
	<dd><a href="https://github.com/pulumi/pulumi-azure">https://github.com/pulumi/pulumi-azure</a></dd>
	<dt>License</dt>
	<dd>Apache-2.0</dd>
    <dt>Notes</dt>
	<dd>This Pulumi package is based on the [`azurerm` Terraform Provider](https://github.com/terraform-providers/terraform-provider-azurerm).</dd>
</dl>

