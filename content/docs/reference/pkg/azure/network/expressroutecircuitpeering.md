
---
title: "ExpressRouteCircuitPeering"
block_external_search_index: true
---



Manages an ExpressRoute Circuit Peering.



## Create a ExpressRouteCircuitPeering Resource

{{< chooser language "javascript,typescript,python,go,csharp" / >}}

{{% choosable language nodejs %}}
<div class="highlight"><pre class="chroma"><code class="language-typescript" data-lang="typescript"><span class="k">new </span><span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/azure/network/#ExpressRouteCircuitPeering">ExpressRouteCircuitPeering</a></span><span class="p">(</span><span class="nx">name</span>: <span class="nx"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span><span class="p">, </span><span class="nx">args</span>: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/azure/network/#ExpressRouteCircuitPeeringArgs">ExpressRouteCircuitPeeringArgs</a></span><span class="p">, </span><span class="nx">opts</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions">CustomResourceOptions</a></span><span class="p">);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language python %}}
<div class="highlight"><pre class="chroma"><code class="language-python" data-lang="python"><span class="k">def </span><span class="nf">ExpressRouteCircuitPeering</span><span class="p">(resource_name, opts=None, </span>express_route_circuit_name=None<span class="p">, </span>microsoft_peering_config=None<span class="p">, </span>peer_asn=None<span class="p">, </span>peering_type=None<span class="p">, </span>primary_peer_address_prefix=None<span class="p">, </span>resource_group_name=None<span class="p">, </span>secondary_peer_address_prefix=None<span class="p">, </span>shared_key=None<span class="p">, </span>vlan_id=None<span class="p">, __props__=None);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language go %}}
<div class="highlight"><pre class="chroma"><code class="language-go" data-lang="go"><span class="k">func </span>NewExpressRouteCircuitPeering<span class="p">(</span><span class="nx">ctx</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v3/go/pulumi?tab=doc#Context">Context</a></span><span class="p">, </span><span class="nx">name</span> <span class="nx"><a href="https://golang.org/pkg/builtin/#string">string</a></span><span class="p">, </span><span class="nx">args</span> <span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/network?tab=doc#ExpressRouteCircuitPeeringArgs">ExpressRouteCircuitPeeringArgs</a></span><span class="p">, </span><span class="nx">opts</span> ...<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v3/go/pulumi?tab=doc#ResourceOption">ResourceOption</a></span><span class="p">) (*<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/network?tab=doc#ExpressRouteCircuitPeering">ExpressRouteCircuitPeering</a></span>, error)</span></code></pre></div>
{{% /choosable %}}

{{% choosable language csharp %}}
<div class="highlight"><pre class="chroma"><code class="language-csharp" data-lang="csharp"><span class="k">public </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Azure/Pulumi.Azure.Network.ExpressRouteCircuitPeering.html">ExpressRouteCircuitPeering</a></span><span class="p">(</span><span class="nx"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span> <span class="nx">name<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Azure/Pulumi.Azure.Network.ExpressRouteCircuitPeeringArgs.html">ExpressRouteCircuitPeeringArgs</a></span> <span class="nx">args<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.CustomResourceOptions.html">CustomResourceOptions</a></span>? <span class="nx">opts = null<span class="p">)</span></code></pre></div>
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
        <span>Express<wbr>Route<wbr>Circuit<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the ExpressRoute Circuit in which to create the Peering.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Peering<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The type of the ExpressRoute Circuit Peering. Acceptable values include `AzurePrivatePeering`, `AzurePublicPeering` and `MicrosoftPeering`. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Primary<wbr>Peer<wbr>Address<wbr>Prefix</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}A `/30` subnet for the primary link.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Resource<wbr>Group<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the resource group in which to
create the Express Route Circuit Peering. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Secondary<wbr>Peer<wbr>Address<wbr>Prefix</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}A `/30` subnet for the secondary link.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Vlan<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}A valid VLAN ID to establish this peering on.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Microsoft<wbr>Peering<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#expressroutecircuitpeeringmicrosoftpeeringconfig">Express<wbr>Route<wbr>Circuit<wbr>Peering<wbr>Microsoft<wbr>Peering<wbr>Config<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}A `microsoft_peering_config` block as defined below. Required when `peering_type` is set to `MicrosoftPeering`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Peer<wbr>Asn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The Either a 16-bit or a 32-bit ASN. Can either be public or private..
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Shared<wbr>Key</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The shared key. Can be a maximum of 25 characters.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Express<wbr>Route<wbr>Circuit<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the ExpressRoute Circuit in which to create the Peering.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Peering<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The type of the ExpressRoute Circuit Peering. Acceptable values include `AzurePrivatePeering`, `AzurePublicPeering` and `MicrosoftPeering`. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Primary<wbr>Peer<wbr>Address<wbr>Prefix</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}A `/30` subnet for the primary link.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Resource<wbr>Group<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the resource group in which to
create the Express Route Circuit Peering. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Secondary<wbr>Peer<wbr>Address<wbr>Prefix</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}A `/30` subnet for the secondary link.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Vlan<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}A valid VLAN ID to establish this peering on.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Microsoft<wbr>Peering<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#expressroutecircuitpeeringmicrosoftpeeringconfig">Express<wbr>Route<wbr>Circuit<wbr>Peering<wbr>Microsoft<wbr>Peering<wbr>Config</a></span>
    </dt>
    <dd>{{% md %}}A `microsoft_peering_config` block as defined below. Required when `peering_type` is set to `MicrosoftPeering`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Peer<wbr>Asn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The Either a 16-bit or a 32-bit ASN. Can either be public or private..
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Shared<wbr>Key</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The shared key. Can be a maximum of 25 characters.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>express<wbr>Route<wbr>Circuit<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the ExpressRoute Circuit in which to create the Peering.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>peering<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The type of the ExpressRoute Circuit Peering. Acceptable values include `AzurePrivatePeering`, `AzurePublicPeering` and `MicrosoftPeering`. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>primary<wbr>Peer<wbr>Address<wbr>Prefix</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}A `/30` subnet for the primary link.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>resource<wbr>Group<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the resource group in which to
create the Express Route Circuit Peering. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>secondary<wbr>Peer<wbr>Address<wbr>Prefix</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}A `/30` subnet for the secondary link.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>vlan<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}A valid VLAN ID to establish this peering on.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>microsoft<wbr>Peering<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#expressroutecircuitpeeringmicrosoftpeeringconfig">Express<wbr>Route<wbr>Circuit<wbr>Peering<wbr>Microsoft<wbr>Peering<wbr>Config</a></span>
    </dt>
    <dd>{{% md %}}A `microsoft_peering_config` block as defined below. Required when `peering_type` is set to `MicrosoftPeering`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>peer<wbr>Asn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The Either a 16-bit or a 32-bit ASN. Can either be public or private..
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>shared<wbr>Key</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The shared key. Can be a maximum of 25 characters.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>express_<wbr>route_<wbr>circuit_<wbr>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the ExpressRoute Circuit in which to create the Peering.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>peering_<wbr>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The type of the ExpressRoute Circuit Peering. Acceptable values include `AzurePrivatePeering`, `AzurePublicPeering` and `MicrosoftPeering`. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>primary_<wbr>peer_<wbr>address_<wbr>prefix</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}A `/30` subnet for the primary link.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>resource_<wbr>group_<wbr>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the resource group in which to
create the Express Route Circuit Peering. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>secondary_<wbr>peer_<wbr>address_<wbr>prefix</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}A `/30` subnet for the secondary link.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>vlan_<wbr>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}A valid VLAN ID to establish this peering on.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>microsoft_<wbr>peering_<wbr>config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#expressroutecircuitpeeringmicrosoftpeeringconfig">Dict[Express<wbr>Route<wbr>Circuit<wbr>Peering<wbr>Microsoft<wbr>Peering<wbr>Config]</a></span>
    </dt>
    <dd>{{% md %}}A `microsoft_peering_config` block as defined below. Required when `peering_type` is set to `MicrosoftPeering`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>peer_<wbr>asn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The Either a 16-bit or a 32-bit ASN. Can either be public or private..
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>shared_<wbr>key</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The shared key. Can be a maximum of 25 characters.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}







## ExpressRouteCircuitPeering Output Properties

The following output properties are available:




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span>Azure<wbr>Asn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The ASN used by Azure.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Primary<wbr>Azure<wbr>Port</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The Primary Port used by Azure for this Peering.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Secondary<wbr>Azure<wbr>Port</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The Secondary Port used by Azure for this Peering.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span>Azure<wbr>Asn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The ASN used by Azure.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Primary<wbr>Azure<wbr>Port</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The Primary Port used by Azure for this Peering.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Secondary<wbr>Azure<wbr>Port</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The Secondary Port used by Azure for this Peering.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span>azure<wbr>Asn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The ASN used by Azure.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>primary<wbr>Azure<wbr>Port</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The Primary Port used by Azure for this Peering.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>secondary<wbr>Azure<wbr>Port</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The Secondary Port used by Azure for this Peering.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span>azure_<wbr>asn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The ASN used by Azure.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>primary_<wbr>azure_<wbr>port</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The Primary Port used by Azure for this Peering.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>secondary_<wbr>azure_<wbr>port</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The Secondary Port used by Azure for this Peering.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}








## Look up an Existing ExpressRouteCircuitPeering Resource

Get an existing ExpressRouteCircuitPeering resource's state with the given name, ID, and optional extra properties used to qualify the lookup.

{{< chooser language "javascript,typescript,python,go,csharp  " / >}}

{{% choosable language nodejs %}}
<div class="highlight"><pre class="chroma"><code class="language-typescript" data-lang="typescript"><span class="k">public static </span><span class="nf">get</span><span class="p">(</span><span class="nx">name</span>: <span class="nx"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span><span class="p">, </span><span class="nx">id</span>: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#ID">Input&lt;ID&gt;</a></span><span class="p">, </span><span class="nx">state</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/azure/network/#ExpressRouteCircuitPeeringState">ExpressRouteCircuitPeeringState</a></span><span class="p">, </span><span class="nx">opts</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions">CustomResourceOptions</a></span><span class="p">): </span><span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/azure/network/#ExpressRouteCircuitPeering">ExpressRouteCircuitPeering</a></span></code></pre></div>
{{% /choosable %}}

{{% choosable language python %}}
<div class="highlight"><pre class="chroma"><code class="language-python" data-lang="python"><span class="k">static </span><span class="nf">get</span><span class="p">(resource_name, id, opts=None, </span>azure_asn=None<span class="p">, </span>express_route_circuit_name=None<span class="p">, </span>microsoft_peering_config=None<span class="p">, </span>peer_asn=None<span class="p">, </span>peering_type=None<span class="p">, </span>primary_azure_port=None<span class="p">, </span>primary_peer_address_prefix=None<span class="p">, </span>resource_group_name=None<span class="p">, </span>secondary_azure_port=None<span class="p">, </span>secondary_peer_address_prefix=None<span class="p">, </span>shared_key=None<span class="p">, </span>vlan_id=None<span class="p">, __props__=None);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language go %}}
<div class="highlight"><pre class="chroma"><code class="language-go" data-lang="go"><span class="k">func </span>GetExpressRouteCircuitPeering<span class="p">(</span><span class="nx">ctx</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v3/go/pulumi?tab=doc#Context">Context</a></span><span class="p">, </span><span class="nx">name</span> <span class="nx"><a href="https://golang.org/pkg/builtin/#string">string</a></span><span class="p">, </span><span class="nx">id</span> <span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v3/go/pulumi?tab=doc#IDInput">IDInput</a></span><span class="p">, </span><span class="nx">state</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/network?tab=doc#ExpressRouteCircuitPeeringState">ExpressRouteCircuitPeeringState</a></span><span class="p">, </span><span class="nx">opts</span> ...<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v3/go/pulumi?tab=doc#ResourceOption">ResourceOption</a></span><span class="p">) (*<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/network?tab=doc#ExpressRouteCircuitPeering">ExpressRouteCircuitPeering</a></span>, error)</span></code></pre></div>
{{% /choosable %}}

{{% choosable language csharp %}}
<div class="highlight"><pre class="chroma"><code class="language-csharp" data-lang="csharp"><span class="k">public static </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Azure/Pulumi.Azure.Network.ExpressRouteCircuitPeering.html">ExpressRouteCircuitPeering</a></span><span class="nf"> Get</span><span class="p">(</span><span class="nx"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span> <span class="nx">name<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.Input.html">Input&lt;string&gt;</a></span> <span class="nx">id<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Azure/Pulumi.Azure.Network.ExpressRouteCircuitPeeringState.html">ExpressRouteCircuitPeeringState</a></span>? <span class="nx">state<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.CustomResourceOptions.html">CustomResourceOptions</a></span>? <span class="nx">opts = null<span class="p">)</span></code></pre></div>
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
        <span>Azure<wbr>Asn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The ASN used by Azure.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Express<wbr>Route<wbr>Circuit<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the ExpressRoute Circuit in which to create the Peering.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Microsoft<wbr>Peering<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#expressroutecircuitpeeringmicrosoftpeeringconfig">Express<wbr>Route<wbr>Circuit<wbr>Peering<wbr>Microsoft<wbr>Peering<wbr>Config<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}A `microsoft_peering_config` block as defined below. Required when `peering_type` is set to `MicrosoftPeering`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Peer<wbr>Asn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The Either a 16-bit or a 32-bit ASN. Can either be public or private..
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Peering<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The type of the ExpressRoute Circuit Peering. Acceptable values include `AzurePrivatePeering`, `AzurePublicPeering` and `MicrosoftPeering`. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Primary<wbr>Azure<wbr>Port</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The Primary Port used by Azure for this Peering.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Primary<wbr>Peer<wbr>Address<wbr>Prefix</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}A `/30` subnet for the primary link.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Resource<wbr>Group<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the resource group in which to
create the Express Route Circuit Peering. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Secondary<wbr>Azure<wbr>Port</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The Secondary Port used by Azure for this Peering.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Secondary<wbr>Peer<wbr>Address<wbr>Prefix</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}A `/30` subnet for the secondary link.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Shared<wbr>Key</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The shared key. Can be a maximum of 25 characters.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Vlan<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}A valid VLAN ID to establish this peering on.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Azure<wbr>Asn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The ASN used by Azure.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Express<wbr>Route<wbr>Circuit<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the ExpressRoute Circuit in which to create the Peering.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Microsoft<wbr>Peering<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#expressroutecircuitpeeringmicrosoftpeeringconfig">Express<wbr>Route<wbr>Circuit<wbr>Peering<wbr>Microsoft<wbr>Peering<wbr>Config</a></span>
    </dt>
    <dd>{{% md %}}A `microsoft_peering_config` block as defined below. Required when `peering_type` is set to `MicrosoftPeering`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Peer<wbr>Asn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The Either a 16-bit or a 32-bit ASN. Can either be public or private..
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Peering<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The type of the ExpressRoute Circuit Peering. Acceptable values include `AzurePrivatePeering`, `AzurePublicPeering` and `MicrosoftPeering`. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Primary<wbr>Azure<wbr>Port</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The Primary Port used by Azure for this Peering.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Primary<wbr>Peer<wbr>Address<wbr>Prefix</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}A `/30` subnet for the primary link.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Resource<wbr>Group<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the resource group in which to
create the Express Route Circuit Peering. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Secondary<wbr>Azure<wbr>Port</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The Secondary Port used by Azure for this Peering.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Secondary<wbr>Peer<wbr>Address<wbr>Prefix</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}A `/30` subnet for the secondary link.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Shared<wbr>Key</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The shared key. Can be a maximum of 25 characters.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Vlan<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}A valid VLAN ID to establish this peering on.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>azure<wbr>Asn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The ASN used by Azure.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>express<wbr>Route<wbr>Circuit<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the ExpressRoute Circuit in which to create the Peering.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>microsoft<wbr>Peering<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#expressroutecircuitpeeringmicrosoftpeeringconfig">Express<wbr>Route<wbr>Circuit<wbr>Peering<wbr>Microsoft<wbr>Peering<wbr>Config</a></span>
    </dt>
    <dd>{{% md %}}A `microsoft_peering_config` block as defined below. Required when `peering_type` is set to `MicrosoftPeering`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>peer<wbr>Asn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The Either a 16-bit or a 32-bit ASN. Can either be public or private..
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>peering<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The type of the ExpressRoute Circuit Peering. Acceptable values include `AzurePrivatePeering`, `AzurePublicPeering` and `MicrosoftPeering`. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>primary<wbr>Azure<wbr>Port</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The Primary Port used by Azure for this Peering.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>primary<wbr>Peer<wbr>Address<wbr>Prefix</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}A `/30` subnet for the primary link.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>resource<wbr>Group<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the resource group in which to
create the Express Route Circuit Peering. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>secondary<wbr>Azure<wbr>Port</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The Secondary Port used by Azure for this Peering.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>secondary<wbr>Peer<wbr>Address<wbr>Prefix</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}A `/30` subnet for the secondary link.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>shared<wbr>Key</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The shared key. Can be a maximum of 25 characters.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>vlan<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}A valid VLAN ID to establish this peering on.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>azure_<wbr>asn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The ASN used by Azure.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>express_<wbr>route_<wbr>circuit_<wbr>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the ExpressRoute Circuit in which to create the Peering.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>microsoft_<wbr>peering_<wbr>config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#expressroutecircuitpeeringmicrosoftpeeringconfig">Dict[Express<wbr>Route<wbr>Circuit<wbr>Peering<wbr>Microsoft<wbr>Peering<wbr>Config]</a></span>
    </dt>
    <dd>{{% md %}}A `microsoft_peering_config` block as defined below. Required when `peering_type` is set to `MicrosoftPeering`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>peer_<wbr>asn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The Either a 16-bit or a 32-bit ASN. Can either be public or private..
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>peering_<wbr>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The type of the ExpressRoute Circuit Peering. Acceptable values include `AzurePrivatePeering`, `AzurePublicPeering` and `MicrosoftPeering`. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>primary_<wbr>azure_<wbr>port</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The Primary Port used by Azure for this Peering.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>primary_<wbr>peer_<wbr>address_<wbr>prefix</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}A `/30` subnet for the primary link.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>resource_<wbr>group_<wbr>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the resource group in which to
create the Express Route Circuit Peering. Changing this forces a new resource to be created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>secondary_<wbr>azure_<wbr>port</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The Secondary Port used by Azure for this Peering.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>secondary_<wbr>peer_<wbr>address_<wbr>prefix</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}A `/30` subnet for the secondary link.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>shared_<wbr>key</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The shared key. Can be a maximum of 25 characters.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>vlan_<wbr>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}A valid VLAN ID to establish this peering on.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}










## Supporting Types

<h4>Express<wbr>Route<wbr>Circuit<wbr>Peering<wbr>Microsoft<wbr>Peering<wbr>Config</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/input/#ExpressRouteCircuitPeeringMicrosoftPeeringConfig">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/output/#ExpressRouteCircuitPeeringMicrosoftPeeringConfig">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/network?tab=doc#ExpressRouteCircuitPeeringMicrosoftPeeringConfigArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/network?tab=doc#ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Advertised<wbr>Public<wbr>Prefixes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}A list of Advertised Public Prefixes
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Advertised<wbr>Public<wbr>Prefixes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}A list of Advertised Public Prefixes
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>advertised<wbr>Public<wbr>Prefixes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}A list of Advertised Public Prefixes
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>advertised<wbr>Public<wbr>Prefixes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}A list of Advertised Public Prefixes
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

