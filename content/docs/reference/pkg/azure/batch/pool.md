
---
title: "Pool"
block_external_search_index: true
---



Manages an Azure Batch pool.

{{% examples %}}
{{% /examples %}}



## Create a Pool Resource

{{< chooser language "javascript,typescript,python,go,csharp" / >}}

{{% choosable language nodejs %}}
<div class="highlight"><pre class="chroma"><code class="language-typescript" data-lang="typescript"><span class="k">new </span><span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/azure/batch/#Pool">Pool</a></span><span class="p">(</span><span class="nx">name</span>: <span class="nx"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span><span class="p">, </span><span class="nx">args</span>: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/azure/batch/#PoolArgs">PoolArgs</a></span><span class="p">, </span><span class="nx">opts</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions">CustomResourceOptions</a></span><span class="p">);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language python %}}
<div class="highlight"><pre class="chroma"><code class="language-python" data-lang="python"><span class="k">def </span><span class="nf">Pool</span><span class="p">(resource_name, opts=None, </span>account_name=None<span class="p">, </span>auto_scale=None<span class="p">, </span>certificates=None<span class="p">, </span>container_configuration=None<span class="p">, </span>display_name=None<span class="p">, </span>fixed_scale=None<span class="p">, </span>max_tasks_per_node=None<span class="p">, </span>metadata=None<span class="p">, </span>name=None<span class="p">, </span>network_configuration=None<span class="p">, </span>node_agent_sku_id=None<span class="p">, </span>resource_group_name=None<span class="p">, </span>start_task=None<span class="p">, </span>stop_pending_resize_operation=None<span class="p">, </span>storage_image_reference=None<span class="p">, </span>vm_size=None<span class="p">, __props__=None);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language go %}}
<div class="highlight"><pre class="chroma"><code class="language-go" data-lang="go"><span class="k">func </span>NewPool<span class="p">(</span><span class="nx">ctx</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v3/go/pulumi?tab=doc#Context">Context</a></span><span class="p">, </span><span class="nx">name</span> <span class="nx"><a href="https://golang.org/pkg/builtin/#string">string</a></span><span class="p">, </span><span class="nx">args</span> <span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/batch?tab=doc#PoolArgs">PoolArgs</a></span><span class="p">, </span><span class="nx">opts</span> ...<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v3/go/pulumi?tab=doc#ResourceOption">ResourceOption</a></span><span class="p">) (*<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/batch?tab=doc#Pool">Pool</a></span>, error)</span></code></pre></div>
{{% /choosable %}}

{{% choosable language csharp %}}
<div class="highlight"><pre class="chroma"><code class="language-csharp" data-lang="csharp"><span class="k">public </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Azure/Pulumi.Azure.Batch.Pool.html">Pool</a></span><span class="p">(</span><span class="nx"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span> <span class="nx">name<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Azure/Pulumi.Azure.Batch.PoolArgs.html">PoolArgs</a></span> <span class="nx">args<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.CustomResourceOptions.html">CustomResourceOptions</a></span>? <span class="nx">opts = null<span class="p">)</span></code></pre></div>
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
        <span>Account<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the Batch account in which the pool will be created. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Node<wbr>Agent<wbr>Sku<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the Sku of the node agents that will be created in the Batch pool.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Resource<wbr>Group<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the resource group in which to create the Batch pool. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Storage<wbr>Image<wbr>Reference</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolstorageimagereference">Pool<wbr>Storage<wbr>Image<wbr>Reference<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}A `storage_image_reference` for the virtual machines that will compose the Batch pool.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Vm<wbr>Size</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the size of the VM created in the Batch pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Auto<wbr>Scale</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolautoscale">Pool<wbr>Auto<wbr>Scale<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}A `auto_scale` block that describes the scale settings when using auto scale.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Certificates</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolcertificate">List&lt;Pool<wbr>Certificate<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}One or more `certificate` blocks that describe the certificates to be installed on each compute node in the pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Container<wbr>Configuration</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolcontainerconfiguration">Pool<wbr>Container<wbr>Configuration<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}The container configuration used in the pool's VMs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Display<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the display name of the Batch pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Fixed<wbr>Scale</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolfixedscale">Pool<wbr>Fixed<wbr>Scale<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}A `fixed_scale` block that describes the scale settings when using fixed scale.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Max<wbr>Tasks<wbr>Per<wbr>Node</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}Specifies the maximum number of tasks that can run concurrently on a single compute node in the pool. Defaults to `1`. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Metadata</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dictionary&lt;string, string&gt;</span>
    </dt>
    <dd>{{% md %}}A map of custom batch pool metadata.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the Batch pool. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Network<wbr>Configuration</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolnetworkconfiguration">Pool<wbr>Network<wbr>Configuration<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}A `network_configuration` block that describes the network configurations for the Batch pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Start<wbr>Task</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolstarttask">Pool<wbr>Start<wbr>Task<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}A `start_task` block that describes the start task settings for the Batch pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Stop<wbr>Pending<wbr>Resize<wbr>Operation</span>
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
        <span>Account<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the Batch account in which the pool will be created. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Node<wbr>Agent<wbr>Sku<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the Sku of the node agents that will be created in the Batch pool.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Resource<wbr>Group<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the resource group in which to create the Batch pool. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Storage<wbr>Image<wbr>Reference</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolstorageimagereference">Pool<wbr>Storage<wbr>Image<wbr>Reference</a></span>
    </dt>
    <dd>{{% md %}}A `storage_image_reference` for the virtual machines that will compose the Batch pool.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Vm<wbr>Size</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the size of the VM created in the Batch pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Auto<wbr>Scale</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolautoscale">Pool<wbr>Auto<wbr>Scale</a></span>
    </dt>
    <dd>{{% md %}}A `auto_scale` block that describes the scale settings when using auto scale.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Certificates</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolcertificate">[]Pool<wbr>Certificate</a></span>
    </dt>
    <dd>{{% md %}}One or more `certificate` blocks that describe the certificates to be installed on each compute node in the pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Container<wbr>Configuration</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolcontainerconfiguration">Pool<wbr>Container<wbr>Configuration</a></span>
    </dt>
    <dd>{{% md %}}The container configuration used in the pool's VMs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Display<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the display name of the Batch pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Fixed<wbr>Scale</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolfixedscale">Pool<wbr>Fixed<wbr>Scale</a></span>
    </dt>
    <dd>{{% md %}}A `fixed_scale` block that describes the scale settings when using fixed scale.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Max<wbr>Tasks<wbr>Per<wbr>Node</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}Specifies the maximum number of tasks that can run concurrently on a single compute node in the pool. Defaults to `1`. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Metadata</span>
        <span class="property-indicator"></span>
        <span class="property-type">map[string]string</span>
    </dt>
    <dd>{{% md %}}A map of custom batch pool metadata.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the Batch pool. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Network<wbr>Configuration</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolnetworkconfiguration">Pool<wbr>Network<wbr>Configuration</a></span>
    </dt>
    <dd>{{% md %}}A `network_configuration` block that describes the network configurations for the Batch pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Start<wbr>Task</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolstarttask">Pool<wbr>Start<wbr>Task</a></span>
    </dt>
    <dd>{{% md %}}A `start_task` block that describes the start task settings for the Batch pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Stop<wbr>Pending<wbr>Resize<wbr>Operation</span>
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
        <span>account<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the Batch account in which the pool will be created. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>node<wbr>Agent<wbr>Sku<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the Sku of the node agents that will be created in the Batch pool.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>resource<wbr>Group<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the resource group in which to create the Batch pool. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>storage<wbr>Image<wbr>Reference</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolstorageimagereference">Pool<wbr>Storage<wbr>Image<wbr>Reference</a></span>
    </dt>
    <dd>{{% md %}}A `storage_image_reference` for the virtual machines that will compose the Batch pool.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>vm<wbr>Size</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the size of the VM created in the Batch pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>auto<wbr>Scale</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolautoscale">Pool<wbr>Auto<wbr>Scale</a></span>
    </dt>
    <dd>{{% md %}}A `auto_scale` block that describes the scale settings when using auto scale.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>certificates</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolcertificate">Pool<wbr>Certificate[]</a></span>
    </dt>
    <dd>{{% md %}}One or more `certificate` blocks that describe the certificates to be installed on each compute node in the pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>container<wbr>Configuration</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolcontainerconfiguration">Pool<wbr>Container<wbr>Configuration</a></span>
    </dt>
    <dd>{{% md %}}The container configuration used in the pool's VMs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>display<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the display name of the Batch pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>fixed<wbr>Scale</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolfixedscale">Pool<wbr>Fixed<wbr>Scale</a></span>
    </dt>
    <dd>{{% md %}}A `fixed_scale` block that describes the scale settings when using fixed scale.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>max<wbr>Tasks<wbr>Per<wbr>Node</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}Specifies the maximum number of tasks that can run concurrently on a single compute node in the pool. Defaults to `1`. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>metadata</span>
        <span class="property-indicator"></span>
        <span class="property-type">{[key: string]: string}</span>
    </dt>
    <dd>{{% md %}}A map of custom batch pool metadata.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the Batch pool. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>network<wbr>Configuration</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolnetworkconfiguration">Pool<wbr>Network<wbr>Configuration</a></span>
    </dt>
    <dd>{{% md %}}A `network_configuration` block that describes the network configurations for the Batch pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>start<wbr>Task</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolstarttask">Pool<wbr>Start<wbr>Task</a></span>
    </dt>
    <dd>{{% md %}}A `start_task` block that describes the start task settings for the Batch pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>stop<wbr>Pending<wbr>Resize<wbr>Operation</span>
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
        <span>account_<wbr>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the Batch account in which the pool will be created. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>node_<wbr>agent_<wbr>sku_<wbr>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the Sku of the node agents that will be created in the Batch pool.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>resource_<wbr>group_<wbr>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the resource group in which to create the Batch pool. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>storage_<wbr>image_<wbr>reference</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolstorageimagereference">Dict[Pool<wbr>Storage<wbr>Image<wbr>Reference]</a></span>
    </dt>
    <dd>{{% md %}}A `storage_image_reference` for the virtual machines that will compose the Batch pool.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>vm_<wbr>size</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the size of the VM created in the Batch pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>auto_<wbr>scale</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolautoscale">Dict[Pool<wbr>Auto<wbr>Scale]</a></span>
    </dt>
    <dd>{{% md %}}A `auto_scale` block that describes the scale settings when using auto scale.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>certificates</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolcertificate">List[Pool<wbr>Certificate]</a></span>
    </dt>
    <dd>{{% md %}}One or more `certificate` blocks that describe the certificates to be installed on each compute node in the pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>container_<wbr>configuration</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolcontainerconfiguration">Dict[Pool<wbr>Container<wbr>Configuration]</a></span>
    </dt>
    <dd>{{% md %}}The container configuration used in the pool's VMs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>display_<wbr>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the display name of the Batch pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>fixed_<wbr>scale</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolfixedscale">Dict[Pool<wbr>Fixed<wbr>Scale]</a></span>
    </dt>
    <dd>{{% md %}}A `fixed_scale` block that describes the scale settings when using fixed scale.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>max_<wbr>tasks_<wbr>per_<wbr>node</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}Specifies the maximum number of tasks that can run concurrently on a single compute node in the pool. Defaults to `1`. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>metadata</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dict[str, str]</span>
    </dt>
    <dd>{{% md %}}A map of custom batch pool metadata.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the Batch pool. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>network_<wbr>configuration</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolnetworkconfiguration">Dict[Pool<wbr>Network<wbr>Configuration]</a></span>
    </dt>
    <dd>{{% md %}}A `network_configuration` block that describes the network configurations for the Batch pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>start_<wbr>task</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolstarttask">Dict[Pool<wbr>Start<wbr>Task]</a></span>
    </dt>
    <dd>{{% md %}}A `start_task` block that describes the start task settings for the Batch pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>stop_<wbr>pending_<wbr>resize_<wbr>operation</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}










## Look up an Existing Pool Resource

Get an existing Pool resource's state with the given name, ID, and optional extra properties used to qualify the lookup.

{{< chooser language "javascript,typescript,python,go,csharp  " / >}}

{{% choosable language nodejs %}}
<div class="highlight"><pre class="chroma"><code class="language-typescript" data-lang="typescript"><span class="k">public static </span><span class="nf">get</span><span class="p">(</span><span class="nx">name</span>: <span class="nx"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span><span class="p">, </span><span class="nx">id</span>: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#ID">Input&lt;ID&gt;</a></span><span class="p">, </span><span class="nx">state</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/azure/batch/#PoolState">PoolState</a></span><span class="p">, </span><span class="nx">opts</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions">CustomResourceOptions</a></span><span class="p">): </span><span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/azure/batch/#Pool">Pool</a></span></code></pre></div>
{{% /choosable %}}

{{% choosable language python %}}
<div class="highlight"><pre class="chroma"><code class="language-python" data-lang="python"><span class="k">static </span><span class="nf">get</span><span class="p">(resource_name, id, opts=None, </span>account_name=None<span class="p">, </span>auto_scale=None<span class="p">, </span>certificates=None<span class="p">, </span>container_configuration=None<span class="p">, </span>display_name=None<span class="p">, </span>fixed_scale=None<span class="p">, </span>max_tasks_per_node=None<span class="p">, </span>metadata=None<span class="p">, </span>name=None<span class="p">, </span>network_configuration=None<span class="p">, </span>node_agent_sku_id=None<span class="p">, </span>resource_group_name=None<span class="p">, </span>start_task=None<span class="p">, </span>stop_pending_resize_operation=None<span class="p">, </span>storage_image_reference=None<span class="p">, </span>vm_size=None<span class="p">, __props__=None);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language go %}}
<div class="highlight"><pre class="chroma"><code class="language-go" data-lang="go"><span class="k">func </span>GetPool<span class="p">(</span><span class="nx">ctx</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v3/go/pulumi?tab=doc#Context">Context</a></span><span class="p">, </span><span class="nx">name</span> <span class="nx"><a href="https://golang.org/pkg/builtin/#string">string</a></span><span class="p">, </span><span class="nx">id</span> <span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v3/go/pulumi?tab=doc#IDInput">IDInput</a></span><span class="p">, </span><span class="nx">state</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/batch?tab=doc#PoolState">PoolState</a></span><span class="p">, </span><span class="nx">opts</span> ...<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v3/go/pulumi?tab=doc#ResourceOption">ResourceOption</a></span><span class="p">) (*<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/batch?tab=doc#Pool">Pool</a></span>, error)</span></code></pre></div>
{{% /choosable %}}

{{% choosable language csharp %}}
<div class="highlight"><pre class="chroma"><code class="language-csharp" data-lang="csharp"><span class="k">public static </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Azure/Pulumi.Azure.Batch.Pool.html">Pool</a></span><span class="nf"> Get</span><span class="p">(</span><span class="nx"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span> <span class="nx">name<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.Input.html">Input&lt;string&gt;</a></span> <span class="nx">id<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Azure/Pulumi.Azure.Batch.PoolState.html">PoolState</a></span>? <span class="nx">state<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.CustomResourceOptions.html">CustomResourceOptions</a></span>? <span class="nx">opts = null<span class="p">)</span></code></pre></div>
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
        <span>Account<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the Batch account in which the pool will be created. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Auto<wbr>Scale</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolautoscale">Pool<wbr>Auto<wbr>Scale<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}A `auto_scale` block that describes the scale settings when using auto scale.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Certificates</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolcertificate">List&lt;Pool<wbr>Certificate<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}One or more `certificate` blocks that describe the certificates to be installed on each compute node in the pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Container<wbr>Configuration</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolcontainerconfiguration">Pool<wbr>Container<wbr>Configuration<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}The container configuration used in the pool's VMs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Display<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the display name of the Batch pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Fixed<wbr>Scale</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolfixedscale">Pool<wbr>Fixed<wbr>Scale<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}A `fixed_scale` block that describes the scale settings when using fixed scale.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Max<wbr>Tasks<wbr>Per<wbr>Node</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}Specifies the maximum number of tasks that can run concurrently on a single compute node in the pool. Defaults to `1`. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Metadata</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dictionary&lt;string, string&gt;</span>
    </dt>
    <dd>{{% md %}}A map of custom batch pool metadata.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the Batch pool. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Network<wbr>Configuration</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolnetworkconfiguration">Pool<wbr>Network<wbr>Configuration<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}A `network_configuration` block that describes the network configurations for the Batch pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Node<wbr>Agent<wbr>Sku<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the Sku of the node agents that will be created in the Batch pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Resource<wbr>Group<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the resource group in which to create the Batch pool. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Start<wbr>Task</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolstarttask">Pool<wbr>Start<wbr>Task<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}A `start_task` block that describes the start task settings for the Batch pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Stop<wbr>Pending<wbr>Resize<wbr>Operation</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Storage<wbr>Image<wbr>Reference</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolstorageimagereference">Pool<wbr>Storage<wbr>Image<wbr>Reference<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}A `storage_image_reference` for the virtual machines that will compose the Batch pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Vm<wbr>Size</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the size of the VM created in the Batch pool.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Account<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the Batch account in which the pool will be created. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Auto<wbr>Scale</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolautoscale">Pool<wbr>Auto<wbr>Scale</a></span>
    </dt>
    <dd>{{% md %}}A `auto_scale` block that describes the scale settings when using auto scale.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Certificates</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolcertificate">[]Pool<wbr>Certificate</a></span>
    </dt>
    <dd>{{% md %}}One or more `certificate` blocks that describe the certificates to be installed on each compute node in the pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Container<wbr>Configuration</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolcontainerconfiguration">Pool<wbr>Container<wbr>Configuration</a></span>
    </dt>
    <dd>{{% md %}}The container configuration used in the pool's VMs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Display<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the display name of the Batch pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Fixed<wbr>Scale</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolfixedscale">Pool<wbr>Fixed<wbr>Scale</a></span>
    </dt>
    <dd>{{% md %}}A `fixed_scale` block that describes the scale settings when using fixed scale.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Max<wbr>Tasks<wbr>Per<wbr>Node</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}Specifies the maximum number of tasks that can run concurrently on a single compute node in the pool. Defaults to `1`. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Metadata</span>
        <span class="property-indicator"></span>
        <span class="property-type">map[string]string</span>
    </dt>
    <dd>{{% md %}}A map of custom batch pool metadata.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the Batch pool. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Network<wbr>Configuration</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolnetworkconfiguration">Pool<wbr>Network<wbr>Configuration</a></span>
    </dt>
    <dd>{{% md %}}A `network_configuration` block that describes the network configurations for the Batch pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Node<wbr>Agent<wbr>Sku<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the Sku of the node agents that will be created in the Batch pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Resource<wbr>Group<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the resource group in which to create the Batch pool. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Start<wbr>Task</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolstarttask">Pool<wbr>Start<wbr>Task</a></span>
    </dt>
    <dd>{{% md %}}A `start_task` block that describes the start task settings for the Batch pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Stop<wbr>Pending<wbr>Resize<wbr>Operation</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Storage<wbr>Image<wbr>Reference</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolstorageimagereference">Pool<wbr>Storage<wbr>Image<wbr>Reference</a></span>
    </dt>
    <dd>{{% md %}}A `storage_image_reference` for the virtual machines that will compose the Batch pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Vm<wbr>Size</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the size of the VM created in the Batch pool.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>account<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the Batch account in which the pool will be created. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>auto<wbr>Scale</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolautoscale">Pool<wbr>Auto<wbr>Scale</a></span>
    </dt>
    <dd>{{% md %}}A `auto_scale` block that describes the scale settings when using auto scale.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>certificates</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolcertificate">Pool<wbr>Certificate[]</a></span>
    </dt>
    <dd>{{% md %}}One or more `certificate` blocks that describe the certificates to be installed on each compute node in the pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>container<wbr>Configuration</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolcontainerconfiguration">Pool<wbr>Container<wbr>Configuration</a></span>
    </dt>
    <dd>{{% md %}}The container configuration used in the pool's VMs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>display<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the display name of the Batch pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>fixed<wbr>Scale</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolfixedscale">Pool<wbr>Fixed<wbr>Scale</a></span>
    </dt>
    <dd>{{% md %}}A `fixed_scale` block that describes the scale settings when using fixed scale.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>max<wbr>Tasks<wbr>Per<wbr>Node</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}Specifies the maximum number of tasks that can run concurrently on a single compute node in the pool. Defaults to `1`. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>metadata</span>
        <span class="property-indicator"></span>
        <span class="property-type">{[key: string]: string}</span>
    </dt>
    <dd>{{% md %}}A map of custom batch pool metadata.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the Batch pool. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>network<wbr>Configuration</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolnetworkconfiguration">Pool<wbr>Network<wbr>Configuration</a></span>
    </dt>
    <dd>{{% md %}}A `network_configuration` block that describes the network configurations for the Batch pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>node<wbr>Agent<wbr>Sku<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the Sku of the node agents that will be created in the Batch pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>resource<wbr>Group<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the resource group in which to create the Batch pool. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>start<wbr>Task</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolstarttask">Pool<wbr>Start<wbr>Task</a></span>
    </dt>
    <dd>{{% md %}}A `start_task` block that describes the start task settings for the Batch pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>stop<wbr>Pending<wbr>Resize<wbr>Operation</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>storage<wbr>Image<wbr>Reference</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolstorageimagereference">Pool<wbr>Storage<wbr>Image<wbr>Reference</a></span>
    </dt>
    <dd>{{% md %}}A `storage_image_reference` for the virtual machines that will compose the Batch pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>vm<wbr>Size</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the size of the VM created in the Batch pool.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>account_<wbr>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the Batch account in which the pool will be created. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>auto_<wbr>scale</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolautoscale">Dict[Pool<wbr>Auto<wbr>Scale]</a></span>
    </dt>
    <dd>{{% md %}}A `auto_scale` block that describes the scale settings when using auto scale.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>certificates</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolcertificate">List[Pool<wbr>Certificate]</a></span>
    </dt>
    <dd>{{% md %}}One or more `certificate` blocks that describe the certificates to be installed on each compute node in the pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>container_<wbr>configuration</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolcontainerconfiguration">Dict[Pool<wbr>Container<wbr>Configuration]</a></span>
    </dt>
    <dd>{{% md %}}The container configuration used in the pool's VMs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>display_<wbr>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the display name of the Batch pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>fixed_<wbr>scale</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolfixedscale">Dict[Pool<wbr>Fixed<wbr>Scale]</a></span>
    </dt>
    <dd>{{% md %}}A `fixed_scale` block that describes the scale settings when using fixed scale.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>max_<wbr>tasks_<wbr>per_<wbr>node</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}Specifies the maximum number of tasks that can run concurrently on a single compute node in the pool. Defaults to `1`. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>metadata</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dict[str, str]</span>
    </dt>
    <dd>{{% md %}}A map of custom batch pool metadata.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the Batch pool. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>network_<wbr>configuration</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolnetworkconfiguration">Dict[Pool<wbr>Network<wbr>Configuration]</a></span>
    </dt>
    <dd>{{% md %}}A `network_configuration` block that describes the network configurations for the Batch pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>node_<wbr>agent_<wbr>sku_<wbr>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the Sku of the node agents that will be created in the Batch pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>resource_<wbr>group_<wbr>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the resource group in which to create the Batch pool. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>start_<wbr>task</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolstarttask">Dict[Pool<wbr>Start<wbr>Task]</a></span>
    </dt>
    <dd>{{% md %}}A `start_task` block that describes the start task settings for the Batch pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>stop_<wbr>pending_<wbr>resize_<wbr>operation</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>storage_<wbr>image_<wbr>reference</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolstorageimagereference">Dict[Pool<wbr>Storage<wbr>Image<wbr>Reference]</a></span>
    </dt>
    <dd>{{% md %}}A `storage_image_reference` for the virtual machines that will compose the Batch pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>vm_<wbr>size</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the size of the VM created in the Batch pool.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}










## Supporting Types

<h4>Pool<wbr>Auto<wbr>Scale</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/input/#PoolAutoScale">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/output/#PoolAutoScale">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/batch?tab=doc#PoolAutoScaleArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/batch?tab=doc#PoolAutoScaleOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Formula</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The autoscale formula that needs to be used for scaling the Batch pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Evaluation<wbr>Interval</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The interval to wait before evaluating if the pool needs to be scaled. Defaults to `PT15M`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Formula</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The autoscale formula that needs to be used for scaling the Batch pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Evaluation<wbr>Interval</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The interval to wait before evaluating if the pool needs to be scaled. Defaults to `PT15M`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>formula</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The autoscale formula that needs to be used for scaling the Batch pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>evaluation<wbr>Interval</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The interval to wait before evaluating if the pool needs to be scaled. Defaults to `PT15M`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>formula</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The autoscale formula that needs to be used for scaling the Batch pool.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>evaluation<wbr>Interval</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The interval to wait before evaluating if the pool needs to be scaled. Defaults to `PT15M`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Pool<wbr>Certificate</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/input/#PoolCertificate">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/output/#PoolCertificate">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/batch?tab=doc#PoolCertificateArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/batch?tab=doc#PoolCertificateOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The ID of the Batch Certificate to install on the Batch Pool, which must be inside the same Batch Account.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Store<wbr>Location</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The location of the certificate store on the compute node into which to install the certificate. Possible values are `CurrentUser` or `LocalMachine`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Store<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the certificate store on the compute node into which to install the certificate. This property is applicable only for pools configured with Windows nodes (that is, created with cloudServiceConfiguration, or with virtualMachineConfiguration using a Windows image reference). Common store names include: `My`, `Root`, `CA`, `Trust`, `Disallowed`, `TrustedPeople`, `TrustedPublisher`, `AuthRoot`, `AddressBook`, but any custom store name can also be used. The default value is `My`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Visibilities</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}Which user accounts on the compute node should have access to the private data of the certificate.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The ID of the Batch Certificate to install on the Batch Pool, which must be inside the same Batch Account.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Store<wbr>Location</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The location of the certificate store on the compute node into which to install the certificate. Possible values are `CurrentUser` or `LocalMachine`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Store<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the certificate store on the compute node into which to install the certificate. This property is applicable only for pools configured with Windows nodes (that is, created with cloudServiceConfiguration, or with virtualMachineConfiguration using a Windows image reference). Common store names include: `My`, `Root`, `CA`, `Trust`, `Disallowed`, `TrustedPeople`, `TrustedPublisher`, `AuthRoot`, `AddressBook`, but any custom store name can also be used. The default value is `My`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Visibilities</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}Which user accounts on the compute node should have access to the private data of the certificate.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The ID of the Batch Certificate to install on the Batch Pool, which must be inside the same Batch Account.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>store<wbr>Location</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The location of the certificate store on the compute node into which to install the certificate. Possible values are `CurrentUser` or `LocalMachine`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>store<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the certificate store on the compute node into which to install the certificate. This property is applicable only for pools configured with Windows nodes (that is, created with cloudServiceConfiguration, or with virtualMachineConfiguration using a Windows image reference). Common store names include: `My`, `Root`, `CA`, `Trust`, `Disallowed`, `TrustedPeople`, `TrustedPublisher`, `AuthRoot`, `AddressBook`, but any custom store name can also be used. The default value is `My`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>visibilities</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}Which user accounts on the compute node should have access to the private data of the certificate.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The ID of the Batch Certificate to install on the Batch Pool, which must be inside the same Batch Account.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>store<wbr>Location</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The location of the certificate store on the compute node into which to install the certificate. Possible values are `CurrentUser` or `LocalMachine`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>store<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the certificate store on the compute node into which to install the certificate. This property is applicable only for pools configured with Windows nodes (that is, created with cloudServiceConfiguration, or with virtualMachineConfiguration using a Windows image reference). Common store names include: `My`, `Root`, `CA`, `Trust`, `Disallowed`, `TrustedPeople`, `TrustedPublisher`, `AuthRoot`, `AddressBook`, but any custom store name can also be used. The default value is `My`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>visibilities</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}Which user accounts on the compute node should have access to the private data of the certificate.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Pool<wbr>Container<wbr>Configuration</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/input/#PoolContainerConfiguration">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/output/#PoolContainerConfiguration">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/batch?tab=doc#PoolContainerConfigurationArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/batch?tab=doc#PoolContainerConfigurationOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Container<wbr>Registries</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolcontainerconfigurationcontainerregistry">List&lt;Pool<wbr>Container<wbr>Configuration<wbr>Container<wbr>Registry<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}Additional container registries from which container images can be pulled by the pool's VMs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The type of container configuration. Possible value is `DockerCompatible`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Container<wbr>Registries</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolcontainerconfigurationcontainerregistry">[]Pool<wbr>Container<wbr>Configuration<wbr>Container<wbr>Registry</a></span>
    </dt>
    <dd>{{% md %}}Additional container registries from which container images can be pulled by the pool's VMs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The type of container configuration. Possible value is `DockerCompatible`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>container<wbr>Registries</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolcontainerconfigurationcontainerregistry">Pool<wbr>Container<wbr>Configuration<wbr>Container<wbr>Registry[]</a></span>
    </dt>
    <dd>{{% md %}}Additional container registries from which container images can be pulled by the pool's VMs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The type of container configuration. Possible value is `DockerCompatible`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>container<wbr>Registries</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolcontainerconfigurationcontainerregistry">List[Pool<wbr>Container<wbr>Configuration<wbr>Container<wbr>Registry]</a></span>
    </dt>
    <dd>{{% md %}}Additional container registries from which container images can be pulled by the pool's VMs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The type of container configuration. Possible value is `DockerCompatible`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Pool<wbr>Container<wbr>Configuration<wbr>Container<wbr>Registry</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/input/#PoolContainerConfigurationContainerRegistry">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/output/#PoolContainerConfigurationContainerRegistry">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/batch?tab=doc#PoolContainerConfigurationContainerRegistryArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/batch?tab=doc#PoolContainerConfigurationContainerRegistryOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Password</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The password to log into the registry server. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Registry<wbr>Server</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The container registry URL. The default is "docker.io". Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>User<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The user name to log into the registry server. Changing this forces a new resource to be created.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Password</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The password to log into the registry server. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Registry<wbr>Server</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The container registry URL. The default is "docker.io". Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>User<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The user name to log into the registry server. Changing this forces a new resource to be created.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>password</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The password to log into the registry server. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>registry<wbr>Server</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The container registry URL. The default is "docker.io". Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>user<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The user name to log into the registry server. Changing this forces a new resource to be created.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>password</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The password to log into the registry server. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>registry<wbr>Server</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The container registry URL. The default is "docker.io". Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>user<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The user name to log into the registry server. Changing this forces a new resource to be created.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Pool<wbr>Fixed<wbr>Scale</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/input/#PoolFixedScale">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/output/#PoolFixedScale">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/batch?tab=doc#PoolFixedScaleArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/batch?tab=doc#PoolFixedScaleOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Resize<wbr>Timeout</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The timeout for resize operations. Defaults to `PT15M`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Target<wbr>Dedicated<wbr>Nodes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The number of nodes in the Batch pool. Defaults to `1`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Target<wbr>Low<wbr>Priority<wbr>Nodes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The number of low priority nodes in the Batch pool. Defaults to `0`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Resize<wbr>Timeout</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The timeout for resize operations. Defaults to `PT15M`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Target<wbr>Dedicated<wbr>Nodes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The number of nodes in the Batch pool. Defaults to `1`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Target<wbr>Low<wbr>Priority<wbr>Nodes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The number of low priority nodes in the Batch pool. Defaults to `0`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>resize<wbr>Timeout</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The timeout for resize operations. Defaults to `PT15M`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>target<wbr>Dedicated<wbr>Nodes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The number of nodes in the Batch pool. Defaults to `1`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>target<wbr>Low<wbr>Priority<wbr>Nodes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The number of low priority nodes in the Batch pool. Defaults to `0`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>resize<wbr>Timeout</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The timeout for resize operations. Defaults to `PT15M`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>target<wbr>Dedicated<wbr>Nodes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The number of nodes in the Batch pool. Defaults to `1`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>target<wbr>Low<wbr>Priority<wbr>Nodes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The number of low priority nodes in the Batch pool. Defaults to `0`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Pool<wbr>Network<wbr>Configuration</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/input/#PoolNetworkConfiguration">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/output/#PoolNetworkConfiguration">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/batch?tab=doc#PoolNetworkConfigurationArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/batch?tab=doc#PoolNetworkConfigurationOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Subnet<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The ARM resource identifier of the virtual network subnet which the compute nodes of the pool will join. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Endpoint<wbr>Configurations</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolnetworkconfigurationendpointconfiguration">List&lt;Pool<wbr>Network<wbr>Configuration<wbr>Endpoint<wbr>Configuration<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}A list of inbound NAT pools that can be used to address specific ports on an individual compute node externally. Set as documented in the inbound_nat_pools block below. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Public<wbr>Ips</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}A list of public ip ids that will be allocated to nodes. Changing this forces a new resource to be created.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Subnet<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The ARM resource identifier of the virtual network subnet which the compute nodes of the pool will join. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Endpoint<wbr>Configurations</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolnetworkconfigurationendpointconfiguration">[]Pool<wbr>Network<wbr>Configuration<wbr>Endpoint<wbr>Configuration</a></span>
    </dt>
    <dd>{{% md %}}A list of inbound NAT pools that can be used to address specific ports on an individual compute node externally. Set as documented in the inbound_nat_pools block below. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Public<wbr>Ips</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}A list of public ip ids that will be allocated to nodes. Changing this forces a new resource to be created.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>subnet<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The ARM resource identifier of the virtual network subnet which the compute nodes of the pool will join. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>endpoint<wbr>Configurations</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolnetworkconfigurationendpointconfiguration">Pool<wbr>Network<wbr>Configuration<wbr>Endpoint<wbr>Configuration[]</a></span>
    </dt>
    <dd>{{% md %}}A list of inbound NAT pools that can be used to address specific ports on an individual compute node externally. Set as documented in the inbound_nat_pools block below. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>public<wbr>Ips</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}A list of public ip ids that will be allocated to nodes. Changing this forces a new resource to be created.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>subnet_<wbr>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The ARM resource identifier of the virtual network subnet which the compute nodes of the pool will join. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>endpoint<wbr>Configurations</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolnetworkconfigurationendpointconfiguration">List[Pool<wbr>Network<wbr>Configuration<wbr>Endpoint<wbr>Configuration]</a></span>
    </dt>
    <dd>{{% md %}}A list of inbound NAT pools that can be used to address specific ports on an individual compute node externally. Set as documented in the inbound_nat_pools block below. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>public<wbr>Ips</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}A list of public ip ids that will be allocated to nodes. Changing this forces a new resource to be created.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Pool<wbr>Network<wbr>Configuration<wbr>Endpoint<wbr>Configuration</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/input/#PoolNetworkConfigurationEndpointConfiguration">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/output/#PoolNetworkConfigurationEndpointConfiguration">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/batch?tab=doc#PoolNetworkConfigurationEndpointConfigurationArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/batch?tab=doc#PoolNetworkConfigurationEndpointConfigurationOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Backend<wbr>Port</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The port number on the compute node. Acceptable values are between `1` and `65535` except for `29876`, `29877` as these are reserved. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Frontend<wbr>Port<wbr>Range</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The range of external ports that will be used to provide inbound access to the backendPort on individual compute nodes in the format of `1000-1100`. Acceptable values range between `1` and `65534` except ports from `50000` to `55000` which are reserved by the Batch service. All ranges within a pool must be distinct and cannot overlap. Values must be a range of at least `100` nodes. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the endpoint. The name must be unique within a Batch pool, can contain letters, numbers, underscores, periods, and hyphens. Names must start with a letter or number, must end with a letter, number, or underscore, and cannot exceed 77 characters. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Protocol</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The protocol of the endpoint. Acceptable values are `TCP` and `UDP`. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Network<wbr>Security<wbr>Group<wbr>Rules</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolnetworkconfigurationendpointconfigurationnetworksecuritygrouprule">List&lt;Pool<wbr>Network<wbr>Configuration<wbr>Endpoint<wbr>Configuration<wbr>Network<wbr>Security<wbr>Group<wbr>Rule<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}A list of network security group rules that will be applied to the endpoint. The maximum number of rules that can be specified across all the endpoints on a Batch pool is `25`. If no network security group rules are specified, a default rule will be created to allow inbound access to the specified backendPort. Set as documented in the network_security_group_rules block below. Changing this forces a new resource to be created.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Backend<wbr>Port</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The port number on the compute node. Acceptable values are between `1` and `65535` except for `29876`, `29877` as these are reserved. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Frontend<wbr>Port<wbr>Range</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The range of external ports that will be used to provide inbound access to the backendPort on individual compute nodes in the format of `1000-1100`. Acceptable values range between `1` and `65534` except ports from `50000` to `55000` which are reserved by the Batch service. All ranges within a pool must be distinct and cannot overlap. Values must be a range of at least `100` nodes. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the endpoint. The name must be unique within a Batch pool, can contain letters, numbers, underscores, periods, and hyphens. Names must start with a letter or number, must end with a letter, number, or underscore, and cannot exceed 77 characters. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Protocol</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The protocol of the endpoint. Acceptable values are `TCP` and `UDP`. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Network<wbr>Security<wbr>Group<wbr>Rules</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolnetworkconfigurationendpointconfigurationnetworksecuritygrouprule">[]Pool<wbr>Network<wbr>Configuration<wbr>Endpoint<wbr>Configuration<wbr>Network<wbr>Security<wbr>Group<wbr>Rule</a></span>
    </dt>
    <dd>{{% md %}}A list of network security group rules that will be applied to the endpoint. The maximum number of rules that can be specified across all the endpoints on a Batch pool is `25`. If no network security group rules are specified, a default rule will be created to allow inbound access to the specified backendPort. Set as documented in the network_security_group_rules block below. Changing this forces a new resource to be created.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>backend<wbr>Port</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The port number on the compute node. Acceptable values are between `1` and `65535` except for `29876`, `29877` as these are reserved. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>frontend<wbr>Port<wbr>Range</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The range of external ports that will be used to provide inbound access to the backendPort on individual compute nodes in the format of `1000-1100`. Acceptable values range between `1` and `65534` except ports from `50000` to `55000` which are reserved by the Batch service. All ranges within a pool must be distinct and cannot overlap. Values must be a range of at least `100` nodes. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the endpoint. The name must be unique within a Batch pool, can contain letters, numbers, underscores, periods, and hyphens. Names must start with a letter or number, must end with a letter, number, or underscore, and cannot exceed 77 characters. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>protocol</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The protocol of the endpoint. Acceptable values are `TCP` and `UDP`. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>network<wbr>Security<wbr>Group<wbr>Rules</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolnetworkconfigurationendpointconfigurationnetworksecuritygrouprule">Pool<wbr>Network<wbr>Configuration<wbr>Endpoint<wbr>Configuration<wbr>Network<wbr>Security<wbr>Group<wbr>Rule[]</a></span>
    </dt>
    <dd>{{% md %}}A list of network security group rules that will be applied to the endpoint. The maximum number of rules that can be specified across all the endpoints on a Batch pool is `25`. If no network security group rules are specified, a default rule will be created to allow inbound access to the specified backendPort. Set as documented in the network_security_group_rules block below. Changing this forces a new resource to be created.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>backend_<wbr>port</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The port number on the compute node. Acceptable values are between `1` and `65535` except for `29876`, `29877` as these are reserved. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>frontend<wbr>Port<wbr>Range</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The range of external ports that will be used to provide inbound access to the backendPort on individual compute nodes in the format of `1000-1100`. Acceptable values range between `1` and `65534` except ports from `50000` to `55000` which are reserved by the Batch service. All ranges within a pool must be distinct and cannot overlap. Values must be a range of at least `100` nodes. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the endpoint. The name must be unique within a Batch pool, can contain letters, numbers, underscores, periods, and hyphens. Names must start with a letter or number, must end with a letter, number, or underscore, and cannot exceed 77 characters. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>protocol</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The protocol of the endpoint. Acceptable values are `TCP` and `UDP`. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>network<wbr>Security<wbr>Group<wbr>Rules</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolnetworkconfigurationendpointconfigurationnetworksecuritygrouprule">List[Pool<wbr>Network<wbr>Configuration<wbr>Endpoint<wbr>Configuration<wbr>Network<wbr>Security<wbr>Group<wbr>Rule]</a></span>
    </dt>
    <dd>{{% md %}}A list of network security group rules that will be applied to the endpoint. The maximum number of rules that can be specified across all the endpoints on a Batch pool is `25`. If no network security group rules are specified, a default rule will be created to allow inbound access to the specified backendPort. Set as documented in the network_security_group_rules block below. Changing this forces a new resource to be created.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Pool<wbr>Network<wbr>Configuration<wbr>Endpoint<wbr>Configuration<wbr>Network<wbr>Security<wbr>Group<wbr>Rule</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/input/#PoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRule">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/output/#PoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRule">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/batch?tab=doc#PoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRuleArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/batch?tab=doc#PoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRuleOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Access</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The action that should be taken for a specified IP address, subnet range or tag. Acceptable values are `Allow` and `Deny`. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Priority</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The priority for this rule. The value must be at least `150`. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Source<wbr>Address<wbr>Prefix</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The source address prefix or tag to match for the rule. Changing this forces a new resource to be created.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Access</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The action that should be taken for a specified IP address, subnet range or tag. Acceptable values are `Allow` and `Deny`. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Priority</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The priority for this rule. The value must be at least `150`. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Source<wbr>Address<wbr>Prefix</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The source address prefix or tag to match for the rule. Changing this forces a new resource to be created.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>access</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The action that should be taken for a specified IP address, subnet range or tag. Acceptable values are `Allow` and `Deny`. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>priority</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The priority for this rule. The value must be at least `150`. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>source<wbr>Address<wbr>Prefix</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The source address prefix or tag to match for the rule. Changing this forces a new resource to be created.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>access</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The action that should be taken for a specified IP address, subnet range or tag. Acceptable values are `Allow` and `Deny`. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>priority</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The priority for this rule. The value must be at least `150`. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>source_<wbr>address_<wbr>prefix</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The source address prefix or tag to match for the rule. Changing this forces a new resource to be created.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Pool<wbr>Start<wbr>Task</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/input/#PoolStartTask">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/output/#PoolStartTask">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/batch?tab=doc#PoolStartTaskArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/batch?tab=doc#PoolStartTaskOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Command<wbr>Line</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The command line executed by the start task.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>User<wbr>Identity</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolstarttaskuseridentity">Pool<wbr>Start<wbr>Task<wbr>User<wbr>Identity<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}A `user_identity` block that describes the user identity under which the start task runs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Environment</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dictionary&lt;string, string&gt;</span>
    </dt>
    <dd>{{% md %}}A map of strings (key,value) that represents the environment variables to set in the start task.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Max<wbr>Task<wbr>Retry<wbr>Count</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The number of retry count. Defaults to `1`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Resource<wbr>Files</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolstarttaskresourcefile">List&lt;Pool<wbr>Start<wbr>Task<wbr>Resource<wbr>File<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}One or more `resource_file` blocks that describe the files to be downloaded to a compute node.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Wait<wbr>For<wbr>Success</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}A flag that indicates if the Batch pool should wait for the start task to be completed. Default to `false`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Command<wbr>Line</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The command line executed by the start task.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>User<wbr>Identity</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolstarttaskuseridentity">Pool<wbr>Start<wbr>Task<wbr>User<wbr>Identity</a></span>
    </dt>
    <dd>{{% md %}}A `user_identity` block that describes the user identity under which the start task runs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Environment</span>
        <span class="property-indicator"></span>
        <span class="property-type">map[string]string</span>
    </dt>
    <dd>{{% md %}}A map of strings (key,value) that represents the environment variables to set in the start task.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Max<wbr>Task<wbr>Retry<wbr>Count</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The number of retry count. Defaults to `1`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Resource<wbr>Files</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolstarttaskresourcefile">[]Pool<wbr>Start<wbr>Task<wbr>Resource<wbr>File</a></span>
    </dt>
    <dd>{{% md %}}One or more `resource_file` blocks that describe the files to be downloaded to a compute node.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Wait<wbr>For<wbr>Success</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}A flag that indicates if the Batch pool should wait for the start task to be completed. Default to `false`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>command<wbr>Line</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The command line executed by the start task.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>user<wbr>Identity</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolstarttaskuseridentity">Pool<wbr>Start<wbr>Task<wbr>User<wbr>Identity</a></span>
    </dt>
    <dd>{{% md %}}A `user_identity` block that describes the user identity under which the start task runs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>environment</span>
        <span class="property-indicator"></span>
        <span class="property-type">{[key: string]: string}</span>
    </dt>
    <dd>{{% md %}}A map of strings (key,value) that represents the environment variables to set in the start task.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>max<wbr>Task<wbr>Retry<wbr>Count</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The number of retry count. Defaults to `1`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>resource<wbr>Files</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolstarttaskresourcefile">Pool<wbr>Start<wbr>Task<wbr>Resource<wbr>File[]</a></span>
    </dt>
    <dd>{{% md %}}One or more `resource_file` blocks that describe the files to be downloaded to a compute node.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>wait<wbr>For<wbr>Success</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}A flag that indicates if the Batch pool should wait for the start task to be completed. Default to `false`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>command<wbr>Line</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The command line executed by the start task.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>user<wbr>Identity</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolstarttaskuseridentity">Dict[Pool<wbr>Start<wbr>Task<wbr>User<wbr>Identity]</a></span>
    </dt>
    <dd>{{% md %}}A `user_identity` block that describes the user identity under which the start task runs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>environment</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dict[str, str]</span>
    </dt>
    <dd>{{% md %}}A map of strings (key,value) that represents the environment variables to set in the start task.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>max<wbr>Task<wbr>Retry<wbr>Count</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The number of retry count. Defaults to `1`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>resource<wbr>Files</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolstarttaskresourcefile">List[Pool<wbr>Start<wbr>Task<wbr>Resource<wbr>File]</a></span>
    </dt>
    <dd>{{% md %}}One or more `resource_file` blocks that describe the files to be downloaded to a compute node.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>wait<wbr>For<wbr>Success</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}A flag that indicates if the Batch pool should wait for the start task to be completed. Default to `false`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Pool<wbr>Start<wbr>Task<wbr>Resource<wbr>File</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/input/#PoolStartTaskResourceFile">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/output/#PoolStartTaskResourceFile">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/batch?tab=doc#PoolStartTaskResourceFileArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/batch?tab=doc#PoolStartTaskResourceFileOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Auto<wbr>Storage<wbr>Container<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The storage container name in the auto storage account.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Blob<wbr>Prefix</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The blob prefix to use when downloading blobs from an Azure Storage container. Only the blobs whose names begin with the specified prefix will be downloaded. The property is valid only when `auto_storage_container_name` or `storage_container_url` is used. This prefix can be a partial filename or a subdirectory. If a prefix is not specified, all the files in the container will be downloaded.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>File<wbr>Mode</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The file permission mode represented as a string in octal format (e.g. `"0644"`). This property applies only to files being downloaded to Linux compute nodes. It will be ignored if it is specified for a `resource_file` which will be downloaded to a Windows node. If this property is not specified for a Linux node, then a default value of 0770 is applied to the file.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>File<wbr>Path</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The location on the compute node to which to download the file, relative to the task's working directory. If the `http_url` property is specified, the `file_path` is required and describes the path which the file will be downloaded to, including the filename. Otherwise, if the `auto_storage_container_name` or `storage_container_url` property is specified, `file_path` is optional and is the directory to download the files to. In the case where `file_path` is used as a directory, any directory structure already associated with the input data will be retained in full and appended to the specified filePath directory. The specified relative path cannot break out of the task's working directory (for example by using '..').
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Http<wbr>Url</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The URL of the file to download. If the URL is Azure Blob Storage, it must be readable using anonymous access; that is, the Batch service does not present any credentials when downloading the blob. There are two ways to get such a URL for a blob in Azure storage: include a Shared Access Signature (SAS) granting read permissions on the blob, or set the ACL for the blob or its container to allow public access.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Storage<wbr>Container<wbr>Url</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The URL of the blob container within Azure Blob Storage. This URL must be readable and listable using anonymous access; that is, the Batch service does not present any credentials when downloading the blob. There are two ways to get such a URL for a blob in Azure storage: include a Shared Access Signature (SAS) granting read and list permissions on the blob, or set the ACL for the blob or its container to allow public access.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Auto<wbr>Storage<wbr>Container<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The storage container name in the auto storage account.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Blob<wbr>Prefix</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The blob prefix to use when downloading blobs from an Azure Storage container. Only the blobs whose names begin with the specified prefix will be downloaded. The property is valid only when `auto_storage_container_name` or `storage_container_url` is used. This prefix can be a partial filename or a subdirectory. If a prefix is not specified, all the files in the container will be downloaded.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>File<wbr>Mode</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The file permission mode represented as a string in octal format (e.g. `"0644"`). This property applies only to files being downloaded to Linux compute nodes. It will be ignored if it is specified for a `resource_file` which will be downloaded to a Windows node. If this property is not specified for a Linux node, then a default value of 0770 is applied to the file.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>File<wbr>Path</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The location on the compute node to which to download the file, relative to the task's working directory. If the `http_url` property is specified, the `file_path` is required and describes the path which the file will be downloaded to, including the filename. Otherwise, if the `auto_storage_container_name` or `storage_container_url` property is specified, `file_path` is optional and is the directory to download the files to. In the case where `file_path` is used as a directory, any directory structure already associated with the input data will be retained in full and appended to the specified filePath directory. The specified relative path cannot break out of the task's working directory (for example by using '..').
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Http<wbr>Url</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The URL of the file to download. If the URL is Azure Blob Storage, it must be readable using anonymous access; that is, the Batch service does not present any credentials when downloading the blob. There are two ways to get such a URL for a blob in Azure storage: include a Shared Access Signature (SAS) granting read permissions on the blob, or set the ACL for the blob or its container to allow public access.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Storage<wbr>Container<wbr>Url</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The URL of the blob container within Azure Blob Storage. This URL must be readable and listable using anonymous access; that is, the Batch service does not present any credentials when downloading the blob. There are two ways to get such a URL for a blob in Azure storage: include a Shared Access Signature (SAS) granting read and list permissions on the blob, or set the ACL for the blob or its container to allow public access.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>auto<wbr>Storage<wbr>Container<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The storage container name in the auto storage account.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>blob<wbr>Prefix</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The blob prefix to use when downloading blobs from an Azure Storage container. Only the blobs whose names begin with the specified prefix will be downloaded. The property is valid only when `auto_storage_container_name` or `storage_container_url` is used. This prefix can be a partial filename or a subdirectory. If a prefix is not specified, all the files in the container will be downloaded.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>file<wbr>Mode</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The file permission mode represented as a string in octal format (e.g. `"0644"`). This property applies only to files being downloaded to Linux compute nodes. It will be ignored if it is specified for a `resource_file` which will be downloaded to a Windows node. If this property is not specified for a Linux node, then a default value of 0770 is applied to the file.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>file<wbr>Path</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The location on the compute node to which to download the file, relative to the task's working directory. If the `http_url` property is specified, the `file_path` is required and describes the path which the file will be downloaded to, including the filename. Otherwise, if the `auto_storage_container_name` or `storage_container_url` property is specified, `file_path` is optional and is the directory to download the files to. In the case where `file_path` is used as a directory, any directory structure already associated with the input data will be retained in full and appended to the specified filePath directory. The specified relative path cannot break out of the task's working directory (for example by using '..').
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>http<wbr>Url</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The URL of the file to download. If the URL is Azure Blob Storage, it must be readable using anonymous access; that is, the Batch service does not present any credentials when downloading the blob. There are two ways to get such a URL for a blob in Azure storage: include a Shared Access Signature (SAS) granting read permissions on the blob, or set the ACL for the blob or its container to allow public access.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>storage<wbr>Container<wbr>Url</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The URL of the blob container within Azure Blob Storage. This URL must be readable and listable using anonymous access; that is, the Batch service does not present any credentials when downloading the blob. There are two ways to get such a URL for a blob in Azure storage: include a Shared Access Signature (SAS) granting read and list permissions on the blob, or set the ACL for the blob or its container to allow public access.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>auto<wbr>Storage<wbr>Container<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The storage container name in the auto storage account.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>blob<wbr>Prefix</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The blob prefix to use when downloading blobs from an Azure Storage container. Only the blobs whose names begin with the specified prefix will be downloaded. The property is valid only when `auto_storage_container_name` or `storage_container_url` is used. This prefix can be a partial filename or a subdirectory. If a prefix is not specified, all the files in the container will be downloaded.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>file<wbr>Mode</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The file permission mode represented as a string in octal format (e.g. `"0644"`). This property applies only to files being downloaded to Linux compute nodes. It will be ignored if it is specified for a `resource_file` which will be downloaded to a Windows node. If this property is not specified for a Linux node, then a default value of 0770 is applied to the file.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>file<wbr>Path</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The location on the compute node to which to download the file, relative to the task's working directory. If the `http_url` property is specified, the `file_path` is required and describes the path which the file will be downloaded to, including the filename. Otherwise, if the `auto_storage_container_name` or `storage_container_url` property is specified, `file_path` is optional and is the directory to download the files to. In the case where `file_path` is used as a directory, any directory structure already associated with the input data will be retained in full and appended to the specified filePath directory. The specified relative path cannot break out of the task's working directory (for example by using '..').
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>http<wbr>Url</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The URL of the file to download. If the URL is Azure Blob Storage, it must be readable using anonymous access; that is, the Batch service does not present any credentials when downloading the blob. There are two ways to get such a URL for a blob in Azure storage: include a Shared Access Signature (SAS) granting read permissions on the blob, or set the ACL for the blob or its container to allow public access.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>storage<wbr>Container<wbr>Url</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The URL of the blob container within Azure Blob Storage. This URL must be readable and listable using anonymous access; that is, the Batch service does not present any credentials when downloading the blob. There are two ways to get such a URL for a blob in Azure storage: include a Shared Access Signature (SAS) granting read and list permissions on the blob, or set the ACL for the blob or its container to allow public access.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Pool<wbr>Start<wbr>Task<wbr>User<wbr>Identity</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/input/#PoolStartTaskUserIdentity">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/output/#PoolStartTaskUserIdentity">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/batch?tab=doc#PoolStartTaskUserIdentityArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/batch?tab=doc#PoolStartTaskUserIdentityOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Auto<wbr>User</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolstarttaskuseridentityautouser">Pool<wbr>Start<wbr>Task<wbr>User<wbr>Identity<wbr>Auto<wbr>User<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}A `auto_user` block that describes the user identity under which the start task runs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>User<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The username to be used by the Batch pool start task.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Auto<wbr>User</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolstarttaskuseridentityautouser">Pool<wbr>Start<wbr>Task<wbr>User<wbr>Identity<wbr>Auto<wbr>User</a></span>
    </dt>
    <dd>{{% md %}}A `auto_user` block that describes the user identity under which the start task runs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>User<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The username to be used by the Batch pool start task.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>auto<wbr>User</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolstarttaskuseridentityautouser">Pool<wbr>Start<wbr>Task<wbr>User<wbr>Identity<wbr>Auto<wbr>User</a></span>
    </dt>
    <dd>{{% md %}}A `auto_user` block that describes the user identity under which the start task runs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>user<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The username to be used by the Batch pool start task.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>auto<wbr>User</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#poolstarttaskuseridentityautouser">Dict[Pool<wbr>Start<wbr>Task<wbr>User<wbr>Identity<wbr>Auto<wbr>User]</a></span>
    </dt>
    <dd>{{% md %}}A `auto_user` block that describes the user identity under which the start task runs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>user<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The username to be used by the Batch pool start task.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Pool<wbr>Start<wbr>Task<wbr>User<wbr>Identity<wbr>Auto<wbr>User</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/input/#PoolStartTaskUserIdentityAutoUser">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/output/#PoolStartTaskUserIdentityAutoUser">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/batch?tab=doc#PoolStartTaskUserIdentityAutoUserArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/batch?tab=doc#PoolStartTaskUserIdentityAutoUserOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Elevation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The elevation level of the user identity under which the start task runs. Possible values are `Admin` or `NonAdmin`. Defaults to `NonAdmin`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Scope</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The scope of the user identity under which the start task runs. Possible values are `Task` or `Pool`. Defaults to `Task`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Elevation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The elevation level of the user identity under which the start task runs. Possible values are `Admin` or `NonAdmin`. Defaults to `NonAdmin`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Scope</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The scope of the user identity under which the start task runs. Possible values are `Task` or `Pool`. Defaults to `Task`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>elevation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The elevation level of the user identity under which the start task runs. Possible values are `Admin` or `NonAdmin`. Defaults to `NonAdmin`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>scope</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The scope of the user identity under which the start task runs. Possible values are `Task` or `Pool`. Defaults to `Task`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>elevation<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The elevation level of the user identity under which the start task runs. Possible values are `Admin` or `NonAdmin`. Defaults to `NonAdmin`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>scope</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The scope of the user identity under which the start task runs. Possible values are `Task` or `Pool`. Defaults to `Task`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Pool<wbr>Storage<wbr>Image<wbr>Reference</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/input/#PoolStorageImageReference">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/output/#PoolStorageImageReference">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/batch?tab=doc#PoolStorageImageReferenceArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/batch?tab=doc#PoolStorageImageReferenceOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the ID of the Custom Image which the virtual machines should be created from. Changing this forces a new resource to be created. See [official documentation](https://docs.microsoft.com/en-us/azure/batch/batch-custom-images) for more details.
---
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Offer</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the offer of the image used to create the virtual machines. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Publisher</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the publisher of the image used to create the virtual machines. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sku</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the SKU of the image used to create the virtual machines. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Version</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the version of the image used to create the virtual machines. Changing this forces a new resource to be created.
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
    <dd>{{% md %}}Specifies the ID of the Custom Image which the virtual machines should be created from. Changing this forces a new resource to be created. See [official documentation](https://docs.microsoft.com/en-us/azure/batch/batch-custom-images) for more details.
---
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Offer</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the offer of the image used to create the virtual machines. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Publisher</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the publisher of the image used to create the virtual machines. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sku</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the SKU of the image used to create the virtual machines. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Version</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the version of the image used to create the virtual machines. Changing this forces a new resource to be created.
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
    <dd>{{% md %}}Specifies the ID of the Custom Image which the virtual machines should be created from. Changing this forces a new resource to be created. See [official documentation](https://docs.microsoft.com/en-us/azure/batch/batch-custom-images) for more details.
---
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>offer</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the offer of the image used to create the virtual machines. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>publisher</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the publisher of the image used to create the virtual machines. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sku</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the SKU of the image used to create the virtual machines. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>version</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the version of the image used to create the virtual machines. Changing this forces a new resource to be created.
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
    <dd>{{% md %}}Specifies the ID of the Custom Image which the virtual machines should be created from. Changing this forces a new resource to be created. See [official documentation](https://docs.microsoft.com/en-us/azure/batch/batch-custom-images) for more details.
---
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>offer</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the offer of the image used to create the virtual machines. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>publisher</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the publisher of the image used to create the virtual machines. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sku</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the SKU of the image used to create the virtual machines. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>version</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the version of the image used to create the virtual machines. Changing this forces a new resource to be created.
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

