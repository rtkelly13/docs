
---
title: "GetVirtualNetworkGateway"
block_external_search_index: true
---



Use this data source to access information about an existing Virtual Network Gateway.

{{% examples %}}
{{% /examples %}}





## Using GetVirtualNetworkGateway

{{< chooser language "javascript,typescript,python,go,csharp" / >}}


{{% choosable language typescript %}}
<div class="highlight"><pre class="chroma"><code class="language-typescript" data-lang="typescript"><span class="k">function </span>getVirtualNetworkGateway<span class="p">(</span><span class="nx">args</span>: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/azure/network/#GetVirtualNetworkGatewayArgs">GetVirtualNetworkGatewayArgs</a></span><span class="p">, </span><span class="nx">opts</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#InvokeOptions">InvokeOptions</a></span><span class="p">): Promise&lt;<span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/azure/network/#GetVirtualNetworkGatewayResult">GetVirtualNetworkGatewayResult</a></span>></span></code></pre></div>
{{% /choosable %}}


{{% choosable language python %}}
<div class="highlight"><pre class="chroma"><code class="language-python" data-lang="python"><span class="k">function </span> get_virtual_network_gateway(</span>name=None<span class="p">, </span>resource_group_name=None<span class="p">, </span>opts=None<span class="p">)</span></code></pre></div>
{{% /choosable %}}


{{% choosable language go %}}
<div class="highlight"><pre class="chroma"><code class="language-go" data-lang="go"><span class="k">func </span>LookupVirtualNetworkGateway<span class="p">(</span><span class="nx">ctx</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#Context">pulumi.Context</a></span><span class="p">, </span><span class="nx">args</span> <span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/network?tab=doc#LookupVirtualNetworkGatewayArgs">LookupVirtualNetworkGatewayArgs</a></span><span class="p">, </span><span class="nx">opts</span> ...<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#InvokeOption">pulumi.InvokeOption</a></span><span class="p">) (*<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/network?tab=doc#LookupVirtualNetworkGatewayResult">LookupVirtualNetworkGatewayResult</a></span>, error)</span></code></pre></div>
{{% /choosable %}}


{{% choosable language csharp %}}
<div class="highlight"><pre class="chroma"><code class="language-csharp" data-lang="csharp"><span class="k">public static class </span><span class="nx">GetVirtualNetworkGateway </span><span class="p">{</span><span class="k">
    public static </span>Task&lt;<span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Azure/Pulumi.Azure.Network.GetVirtualNetworkGatewayResult.html">GetVirtualNetworkGatewayResult</a></span>> <span class="p">InvokeAsync(</span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Azure/Pulumi.Azure.Network.GetVirtualNetworkGatewayArgs.html">GetVirtualNetworkGatewayArgs</a></span> <span class="nx">args<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.InvokeOptions.html">InvokeOptions</a></span>? <span class="nx">opts = null<span class="p">)</span><span class="p">
}</span></code></pre></div>
{{% /choosable %}}



The following arguments are supported:



{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the Virtual Network Gateway.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Resource<wbr>Group<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the resource group the Virtual Network Gateway is located in.
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
    <dd>{{% md %}}Specifies the name of the Virtual Network Gateway.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Resource<wbr>Group<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the resource group the Virtual Network Gateway is located in.
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
    <dd>{{% md %}}Specifies the name of the Virtual Network Gateway.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>resource<wbr>Group<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the resource group the Virtual Network Gateway is located in.
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
    <dd>{{% md %}}Specifies the name of the Virtual Network Gateway.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>resource_<wbr>group_<wbr>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the resource group the Virtual Network Gateway is located in.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}








## GetVirtualNetworkGateway Result

The following output properties are available:




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span>Active<wbr>Active</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Is this an Active-Active Gateway?
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Bgp<wbr>Settings</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getvirtualnetworkgatewaybgpsetting">List&lt;Get<wbr>Virtual<wbr>Network<wbr>Gateway<wbr>Bgp<wbr>Setting&gt;</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Default<wbr>Local<wbr>Network<wbr>Gateway<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The ID of the local network gateway
through which outbound Internet traffic from the virtual network in which the
gateway is created will be routed (*forced tunneling*). Refer to the
[Azure documentation on forced tunneling](https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-forced-tunneling-rm).
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Enable<wbr>Bgp</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Will BGP (Border Gateway Protocol) will be enabled
for this Virtual Network Gateway.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Generation</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The Generation of the Virtual Network Gateway.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}id is the provider-assigned unique ID for this managed resource.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Ip<wbr>Configurations</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getvirtualnetworkgatewayipconfiguration">List&lt;Get<wbr>Virtual<wbr>Network<wbr>Gateway<wbr>Ip<wbr>Configuration&gt;</a></span>
    </dt>
    <dd>{{% md %}}One or two `ip_configuration` blocks documented below.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Location</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The location/region where the Virtual Network Gateway is located.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The user-defined name of the revoked certificate.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Resource<wbr>Group<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Sku</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Configuration of the size and capacity of the Virtual Network Gateway.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dictionary&lt;string, string&gt;</span>
    </dt>
    <dd>{{% md %}}A mapping of tags assigned to the resource.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The type of the Virtual Network Gateway.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Vpn<wbr>Client<wbr>Configurations</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getvirtualnetworkgatewayvpnclientconfiguration">List&lt;Get<wbr>Virtual<wbr>Network<wbr>Gateway<wbr>Vpn<wbr>Client<wbr>Configuration&gt;</a></span>
    </dt>
    <dd>{{% md %}}A `vpn_client_configuration` block which is documented below.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Vpn<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The routing type of the Virtual Network Gateway.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span>Active<wbr>Active</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Is this an Active-Active Gateway?
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Bgp<wbr>Settings</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getvirtualnetworkgatewaybgpsetting">[]Get<wbr>Virtual<wbr>Network<wbr>Gateway<wbr>Bgp<wbr>Setting</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Default<wbr>Local<wbr>Network<wbr>Gateway<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The ID of the local network gateway
through which outbound Internet traffic from the virtual network in which the
gateway is created will be routed (*forced tunneling*). Refer to the
[Azure documentation on forced tunneling](https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-forced-tunneling-rm).
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Enable<wbr>Bgp</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Will BGP (Border Gateway Protocol) will be enabled
for this Virtual Network Gateway.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Generation</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The Generation of the Virtual Network Gateway.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}id is the provider-assigned unique ID for this managed resource.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Ip<wbr>Configurations</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getvirtualnetworkgatewayipconfiguration">[]Get<wbr>Virtual<wbr>Network<wbr>Gateway<wbr>Ip<wbr>Configuration</a></span>
    </dt>
    <dd>{{% md %}}One or two `ip_configuration` blocks documented below.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Location</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The location/region where the Virtual Network Gateway is located.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The user-defined name of the revoked certificate.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Resource<wbr>Group<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Sku</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Configuration of the size and capacity of the Virtual Network Gateway.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">map[string]string</span>
    </dt>
    <dd>{{% md %}}A mapping of tags assigned to the resource.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The type of the Virtual Network Gateway.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Vpn<wbr>Client<wbr>Configurations</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getvirtualnetworkgatewayvpnclientconfiguration">[]Get<wbr>Virtual<wbr>Network<wbr>Gateway<wbr>Vpn<wbr>Client<wbr>Configuration</a></span>
    </dt>
    <dd>{{% md %}}A `vpn_client_configuration` block which is documented below.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Vpn<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The routing type of the Virtual Network Gateway.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span>active<wbr>Active</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Is this an Active-Active Gateway?
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>bgp<wbr>Settings</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getvirtualnetworkgatewaybgpsetting">Get<wbr>Virtual<wbr>Network<wbr>Gateway<wbr>Bgp<wbr>Setting[]</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>default<wbr>Local<wbr>Network<wbr>Gateway<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The ID of the local network gateway
through which outbound Internet traffic from the virtual network in which the
gateway is created will be routed (*forced tunneling*). Refer to the
[Azure documentation on forced tunneling](https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-forced-tunneling-rm).
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>enable<wbr>Bgp</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Will BGP (Border Gateway Protocol) will be enabled
for this Virtual Network Gateway.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>generation</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The Generation of the Virtual Network Gateway.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}id is the provider-assigned unique ID for this managed resource.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>ip<wbr>Configurations</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getvirtualnetworkgatewayipconfiguration">Get<wbr>Virtual<wbr>Network<wbr>Gateway<wbr>Ip<wbr>Configuration[]</a></span>
    </dt>
    <dd>{{% md %}}One or two `ip_configuration` blocks documented below.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>location</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The location/region where the Virtual Network Gateway is located.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The user-defined name of the revoked certificate.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>resource<wbr>Group<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>sku</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Configuration of the size and capacity of the Virtual Network Gateway.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">{[key: string]: string}</span>
    </dt>
    <dd>{{% md %}}A mapping of tags assigned to the resource.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The type of the Virtual Network Gateway.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>vpn<wbr>Client<wbr>Configurations</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getvirtualnetworkgatewayvpnclientconfiguration">Get<wbr>Virtual<wbr>Network<wbr>Gateway<wbr>Vpn<wbr>Client<wbr>Configuration[]</a></span>
    </dt>
    <dd>{{% md %}}A `vpn_client_configuration` block which is documented below.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>vpn<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The routing type of the Virtual Network Gateway.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span>active_<wbr>active</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Is this an Active-Active Gateway?
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>bgp_<wbr>settings</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getvirtualnetworkgatewaybgpsetting">List[Get<wbr>Virtual<wbr>Network<wbr>Gateway<wbr>Bgp<wbr>Setting]</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>default_<wbr>local_<wbr>network_<wbr>gateway_<wbr>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The ID of the local network gateway
through which outbound Internet traffic from the virtual network in which the
gateway is created will be routed (*forced tunneling*). Refer to the
[Azure documentation on forced tunneling](https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-forced-tunneling-rm).
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>enable_<wbr>bgp</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Will BGP (Border Gateway Protocol) will be enabled
for this Virtual Network Gateway.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>generation</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The Generation of the Virtual Network Gateway.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}id is the provider-assigned unique ID for this managed resource.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>ip_<wbr>configurations</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getvirtualnetworkgatewayipconfiguration">List[Get<wbr>Virtual<wbr>Network<wbr>Gateway<wbr>Ip<wbr>Configuration]</a></span>
    </dt>
    <dd>{{% md %}}One or two `ip_configuration` blocks documented below.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>location</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The location/region where the Virtual Network Gateway is located.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The user-defined name of the revoked certificate.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>resource_<wbr>group_<wbr>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>sku</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Configuration of the size and capacity of the Virtual Network Gateway.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dict[str, str]</span>
    </dt>
    <dd>{{% md %}}A mapping of tags assigned to the resource.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The type of the Virtual Network Gateway.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>vpn_<wbr>client_<wbr>configurations</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getvirtualnetworkgatewayvpnclientconfiguration">List[Get<wbr>Virtual<wbr>Network<wbr>Gateway<wbr>Vpn<wbr>Client<wbr>Configuration]</a></span>
    </dt>
    <dd>{{% md %}}A `vpn_client_configuration` block which is documented below.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>vpn_<wbr>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The routing type of the Virtual Network Gateway.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}








## Supporting Types

<h4>Get<wbr>Virtual<wbr>Network<wbr>Gateway<wbr>Bgp<wbr>Setting</h4>
{{% choosable language nodejs %}}
> See the   <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/output/#GetVirtualNetworkGatewayBgpSetting">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the   <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/network?tab=doc#GetVirtualNetworkGatewayBgpSetting">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Asn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The Autonomous System Number (ASN) to use as part of the BGP.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Peer<wbr>Weight</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The weight added to routes which have been learned
through BGP peering.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Peering<wbr>Address</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The BGP peer IP address of the virtual network
gateway. This address is needed to configure the created gateway as a BGP Peer
on the on-premises VPN devices.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Asn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The Autonomous System Number (ASN) to use as part of the BGP.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Peer<wbr>Weight</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The weight added to routes which have been learned
through BGP peering.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Peering<wbr>Address</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The BGP peer IP address of the virtual network
gateway. This address is needed to configure the created gateway as a BGP Peer
on the on-premises VPN devices.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>asn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The Autonomous System Number (ASN) to use as part of the BGP.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>peer<wbr>Weight</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The weight added to routes which have been learned
through BGP peering.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>peering<wbr>Address</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The BGP peer IP address of the virtual network
gateway. This address is needed to configure the created gateway as a BGP Peer
on the on-premises VPN devices.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>asn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The Autonomous System Number (ASN) to use as part of the BGP.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>peer<wbr>Weight</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The weight added to routes which have been learned
through BGP peering.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>peering<wbr>Address</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The BGP peer IP address of the virtual network
gateway. This address is needed to configure the created gateway as a BGP Peer
on the on-premises VPN devices.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Get<wbr>Virtual<wbr>Network<wbr>Gateway<wbr>Ip<wbr>Configuration</h4>
{{% choosable language nodejs %}}
> See the   <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/output/#GetVirtualNetworkGatewayIpConfiguration">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the   <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/network?tab=doc#GetVirtualNetworkGatewayIpConfiguration">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the Virtual Network Gateway.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Private<wbr>Ip<wbr>Address<wbr>Allocation</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Defines how the private IP address
of the gateways virtual interface is assigned.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Public<wbr>Ip<wbr>Address<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The ID of the Public IP Address associated
with the Virtual Network Gateway.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Subnet<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The ID of the gateway subnet of a virtual network in
which the virtual network gateway will be created. It is mandatory that
the associated subnet is named `GatewaySubnet`. Therefore, each virtual
network can contain at most a single Virtual Network Gateway.
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
    <dd>{{% md %}}Specifies the name of the Virtual Network Gateway.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Private<wbr>Ip<wbr>Address<wbr>Allocation</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Defines how the private IP address
of the gateways virtual interface is assigned.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Public<wbr>Ip<wbr>Address<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The ID of the Public IP Address associated
with the Virtual Network Gateway.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Subnet<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The ID of the gateway subnet of a virtual network in
which the virtual network gateway will be created. It is mandatory that
the associated subnet is named `GatewaySubnet`. Therefore, each virtual
network can contain at most a single Virtual Network Gateway.
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
    <dd>{{% md %}}Specifies the name of the Virtual Network Gateway.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>private<wbr>Ip<wbr>Address<wbr>Allocation</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Defines how the private IP address
of the gateways virtual interface is assigned.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>public<wbr>Ip<wbr>Address<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The ID of the Public IP Address associated
with the Virtual Network Gateway.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>subnet<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The ID of the gateway subnet of a virtual network in
which the virtual network gateway will be created. It is mandatory that
the associated subnet is named `GatewaySubnet`. Therefore, each virtual
network can contain at most a single Virtual Network Gateway.
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
    <dd>{{% md %}}Specifies the name of the Virtual Network Gateway.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>private<wbr>Ip<wbr>Address<wbr>Allocation</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Defines how the private IP address
of the gateways virtual interface is assigned.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>public<wbr>Ip<wbr>Address<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The ID of the Public IP Address associated
with the Virtual Network Gateway.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>subnet_<wbr>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The ID of the gateway subnet of a virtual network in
which the virtual network gateway will be created. It is mandatory that
the associated subnet is named `GatewaySubnet`. Therefore, each virtual
network can contain at most a single Virtual Network Gateway.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Get<wbr>Virtual<wbr>Network<wbr>Gateway<wbr>Vpn<wbr>Client<wbr>Configuration</h4>
{{% choosable language nodejs %}}
> See the   <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/output/#GetVirtualNetworkGatewayVpnClientConfiguration">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the   <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/network?tab=doc#GetVirtualNetworkGatewayVpnClientConfiguration">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Address<wbr>Spaces</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}The address space out of which ip addresses for
vpn clients will be taken. You can provide more than one address space, e.g.
in CIDR notation.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Radius<wbr>Server<wbr>Address</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The address of the Radius server.
This setting is incompatible with the use of `root_certificate` and `revoked_certificate`.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Radius<wbr>Server<wbr>Secret</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The secret used by the Radius server.
This setting is incompatible with the use of `root_certificate` and `revoked_certificate`.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Revoked<wbr>Certificates</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getvirtualnetworkgatewayvpnclientconfigurationrevokedcertificate">List&lt;Get<wbr>Virtual<wbr>Network<wbr>Gateway<wbr>Vpn<wbr>Client<wbr>Configuration<wbr>Revoked<wbr>Certificate<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}One or more `revoked_certificate` blocks which
are defined below.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Root<wbr>Certificates</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getvirtualnetworkgatewayvpnclientconfigurationrootcertificate">List&lt;Get<wbr>Virtual<wbr>Network<wbr>Gateway<wbr>Vpn<wbr>Client<wbr>Configuration<wbr>Root<wbr>Certificate<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}One or more `root_certificate` blocks which are
defined below. These root certificates are used to sign the client certificate
used by the VPN clients to connect to the gateway.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Vpn<wbr>Client<wbr>Protocols</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}List of the protocols supported by the vpn client.
The supported values are `SSTP`, `IkeV2` and `OpenVPN`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Address<wbr>Spaces</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}The address space out of which ip addresses for
vpn clients will be taken. You can provide more than one address space, e.g.
in CIDR notation.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Radius<wbr>Server<wbr>Address</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The address of the Radius server.
This setting is incompatible with the use of `root_certificate` and `revoked_certificate`.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Radius<wbr>Server<wbr>Secret</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The secret used by the Radius server.
This setting is incompatible with the use of `root_certificate` and `revoked_certificate`.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Revoked<wbr>Certificates</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getvirtualnetworkgatewayvpnclientconfigurationrevokedcertificate">[]Get<wbr>Virtual<wbr>Network<wbr>Gateway<wbr>Vpn<wbr>Client<wbr>Configuration<wbr>Revoked<wbr>Certificate</a></span>
    </dt>
    <dd>{{% md %}}One or more `revoked_certificate` blocks which
are defined below.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Root<wbr>Certificates</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getvirtualnetworkgatewayvpnclientconfigurationrootcertificate">[]Get<wbr>Virtual<wbr>Network<wbr>Gateway<wbr>Vpn<wbr>Client<wbr>Configuration<wbr>Root<wbr>Certificate</a></span>
    </dt>
    <dd>{{% md %}}One or more `root_certificate` blocks which are
defined below. These root certificates are used to sign the client certificate
used by the VPN clients to connect to the gateway.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Vpn<wbr>Client<wbr>Protocols</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}List of the protocols supported by the vpn client.
The supported values are `SSTP`, `IkeV2` and `OpenVPN`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>address<wbr>Spaces</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}The address space out of which ip addresses for
vpn clients will be taken. You can provide more than one address space, e.g.
in CIDR notation.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>radius<wbr>Server<wbr>Address</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The address of the Radius server.
This setting is incompatible with the use of `root_certificate` and `revoked_certificate`.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>radius<wbr>Server<wbr>Secret</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The secret used by the Radius server.
This setting is incompatible with the use of `root_certificate` and `revoked_certificate`.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>revoked<wbr>Certificates</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getvirtualnetworkgatewayvpnclientconfigurationrevokedcertificate">Get<wbr>Virtual<wbr>Network<wbr>Gateway<wbr>Vpn<wbr>Client<wbr>Configuration<wbr>Revoked<wbr>Certificate[]</a></span>
    </dt>
    <dd>{{% md %}}One or more `revoked_certificate` blocks which
are defined below.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>root<wbr>Certificates</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getvirtualnetworkgatewayvpnclientconfigurationrootcertificate">Get<wbr>Virtual<wbr>Network<wbr>Gateway<wbr>Vpn<wbr>Client<wbr>Configuration<wbr>Root<wbr>Certificate[]</a></span>
    </dt>
    <dd>{{% md %}}One or more `root_certificate` blocks which are
defined below. These root certificates are used to sign the client certificate
used by the VPN clients to connect to the gateway.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>vpn<wbr>Client<wbr>Protocols</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}List of the protocols supported by the vpn client.
The supported values are `SSTP`, `IkeV2` and `OpenVPN`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>address_<wbr>spaces</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}The address space out of which ip addresses for
vpn clients will be taken. You can provide more than one address space, e.g.
in CIDR notation.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>radius<wbr>Server<wbr>Address</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The address of the Radius server.
This setting is incompatible with the use of `root_certificate` and `revoked_certificate`.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>radius<wbr>Server<wbr>Secret</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The secret used by the Radius server.
This setting is incompatible with the use of `root_certificate` and `revoked_certificate`.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>revoked<wbr>Certificates</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getvirtualnetworkgatewayvpnclientconfigurationrevokedcertificate">List[Get<wbr>Virtual<wbr>Network<wbr>Gateway<wbr>Vpn<wbr>Client<wbr>Configuration<wbr>Revoked<wbr>Certificate]</a></span>
    </dt>
    <dd>{{% md %}}One or more `revoked_certificate` blocks which
are defined below.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>root<wbr>Certificates</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getvirtualnetworkgatewayvpnclientconfigurationrootcertificate">List[Get<wbr>Virtual<wbr>Network<wbr>Gateway<wbr>Vpn<wbr>Client<wbr>Configuration<wbr>Root<wbr>Certificate]</a></span>
    </dt>
    <dd>{{% md %}}One or more `root_certificate` blocks which are
defined below. These root certificates are used to sign the client certificate
used by the VPN clients to connect to the gateway.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>vpn<wbr>Client<wbr>Protocols</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}List of the protocols supported by the vpn client.
The supported values are `SSTP`, `IkeV2` and `OpenVPN`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Get<wbr>Virtual<wbr>Network<wbr>Gateway<wbr>Vpn<wbr>Client<wbr>Configuration<wbr>Revoked<wbr>Certificate</h4>
{{% choosable language nodejs %}}
> See the   <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/output/#GetVirtualNetworkGatewayVpnClientConfigurationRevokedCertificate">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the   <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/network?tab=doc#GetVirtualNetworkGatewayVpnClientConfigurationRevokedCertificate">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the Virtual Network Gateway.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Thumbprint</span>
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
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the Virtual Network Gateway.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Thumbprint</span>
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
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the Virtual Network Gateway.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>thumbprint</span>
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
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the Virtual Network Gateway.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>thumbprint</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Get<wbr>Virtual<wbr>Network<wbr>Gateway<wbr>Vpn<wbr>Client<wbr>Configuration<wbr>Root<wbr>Certificate</h4>
{{% choosable language nodejs %}}
> See the   <a href="/docs/reference/pkg/nodejs/pulumi/azure/types/output/#GetVirtualNetworkGatewayVpnClientConfigurationRootCertificate">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the   <a href="https://pkg.go.dev/github.com/pulumi/pulumi-azure/sdk/v3/go/azure/network?tab=doc#GetVirtualNetworkGatewayVpnClientConfigurationRootCertificate">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the name of the Virtual Network Gateway.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Public<wbr>Cert<wbr>Data</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The SHA1 thumbprint of the certificate to be revoked.
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
    <dd>{{% md %}}Specifies the name of the Virtual Network Gateway.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Public<wbr>Cert<wbr>Data</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The SHA1 thumbprint of the certificate to be revoked.
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
    <dd>{{% md %}}Specifies the name of the Virtual Network Gateway.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>public<wbr>Cert<wbr>Data</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The SHA1 thumbprint of the certificate to be revoked.
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
    <dd>{{% md %}}Specifies the name of the Virtual Network Gateway.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>public<wbr>Cert<wbr>Data</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The SHA1 thumbprint of the certificate to be revoked.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}







