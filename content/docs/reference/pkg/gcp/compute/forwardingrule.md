
---
title: "ForwardingRule"
block_external_search_index: true
---



A ForwardingRule resource. A ForwardingRule resource specifies which pool
of target virtual machines to forward a packet to if it matches the given
[IPAddress, IPProtocol, portRange] tuple.


To get more information about ForwardingRule, see:

* [API documentation](https://cloud.google.com/compute/docs/reference/v1/forwardingRules)
* How-to Guides
    * [Official Documentation](https://cloud.google.com/compute/docs/load-balancing/network/forwarding-rules)

## Example Usage - Forwarding Rule Global Internallb


```typescript
import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";

const hc = new gcp.compute.HealthCheck("hc", {
    checkIntervalSec: 1,
    tcpHealthCheck: {
        port: 80,
    },
    timeoutSec: 1,
});
const backend = new gcp.compute.RegionBackendService("backend", {
    healthChecks: hc.selfLink,
    region: "us-central1",
});
const defaultNetwork = new gcp.compute.Network("default", {
    autoCreateSubnetworks: false,
});
const defaultSubnetwork = new gcp.compute.Subnetwork("default", {
    ipCidrRange: "10.0.0.0/16",
    network: defaultNetwork.selfLink,
    region: "us-central1",
});
// Forwarding rule for Internal Load Balancing
const defaultForwardingRule = new gcp.compute.ForwardingRule("default", {
    allPorts: true,
    allowGlobalAccess: true,
    backendService: backend.selfLink,
    loadBalancingScheme: "INTERNAL",
    network: defaultNetwork.name,
    region: "us-central1",
    subnetwork: defaultSubnetwork.name,
});
```



## Create a ForwardingRule Resource

{{< chooser language "javascript,typescript,python,go,csharp" / >}}

{{% choosable language nodejs %}}
<div class="highlight"><pre class="chroma"><code class="language-typescript" data-lang="typescript"><span class="k">new </span><span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/gcp/compute/#ForwardingRule">ForwardingRule</a></span><span class="p">(</span><span class="nx">name</span>: <span class="nx"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span><span class="p">, </span><span class="nx">args</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/gcp/compute/#ForwardingRuleArgs">ForwardingRuleArgs</a></span><span class="p">, </span><span class="nx">opts</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions">CustomResourceOptions</a></span><span class="p">);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language python %}}
<div class="highlight"><pre class="chroma"><code class="language-python" data-lang="python"><span class="k">def </span><span class="nf">ForwardingRule</span><span class="p">(resource_name, opts=None, </span>all_ports=None<span class="p">, </span>allow_global_access=None<span class="p">, </span>backend_service=None<span class="p">, </span>description=None<span class="p">, </span>ip_address=None<span class="p">, </span>ip_protocol=None<span class="p">, </span>is_mirroring_collector=None<span class="p">, </span>labels=None<span class="p">, </span>load_balancing_scheme=None<span class="p">, </span>name=None<span class="p">, </span>network=None<span class="p">, </span>network_tier=None<span class="p">, </span>port_range=None<span class="p">, </span>ports=None<span class="p">, </span>project=None<span class="p">, </span>region=None<span class="p">, </span>service_label=None<span class="p">, </span>subnetwork=None<span class="p">, </span>target=None<span class="p">, __props__=None);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language go %}}
<div class="highlight"><pre class="chroma"><code class="language-go" data-lang="go"><span class="k">func </span>NewForwardingRule<span class="p">(</span><span class="nx">ctx</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v3/go/pulumi?tab=doc#Context">Context</a></span><span class="p">, </span><span class="nx">name</span> <span class="nx"><a href="https://golang.org/pkg/builtin/#string">string</a></span><span class="p">, </span><span class="nx">args</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-gcp/sdk/v3/go/gcp/compute?tab=doc#ForwardingRuleArgs">ForwardingRuleArgs</a></span><span class="p">, </span><span class="nx">opts</span> ...<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v3/go/pulumi?tab=doc#ResourceOption">ResourceOption</a></span><span class="p">) (*<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-gcp/sdk/v3/go/gcp/compute?tab=doc#ForwardingRule">ForwardingRule</a></span>, error)</span></code></pre></div>
{{% /choosable %}}

{{% choosable language csharp %}}
<div class="highlight"><pre class="chroma"><code class="language-csharp" data-lang="csharp"><span class="k">public </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Gcp/Pulumi.Gcp.Compute.ForwardingRule.html">ForwardingRule</a></span><span class="p">(</span><span class="nx"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span> <span class="nx">name<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Gcp/Pulumi.Gcp.Compute.ForwardingRuleArgs.html">ForwardingRuleArgs</a></span>? <span class="nx">args = null<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.CustomResourceOptions.html">CustomResourceOptions</a></span>? <span class="nx">opts = null<span class="p">)</span></code></pre></div>
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

    <dt class="property-optional"
            title="Optional">
        <span>All<wbr>Ports</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}For internal TCP/UDP load balancing (i.e. load balancing scheme is INTERNAL and protocol is TCP/UDP), set this to true
to allow packets addressed to any ports to be forwarded to the backends configured with this forwarding rule. Used with
backend service. Cannot be set if port or portRange are set.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Allow<wbr>Global<wbr>Access</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}If true, clients can access ILB from all regions. Otherwise only allows from the local region the ILB is located at.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Backend<wbr>Service</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}A BackendService to receive the matched traffic. This is used only for INTERNAL load balancing.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Description</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}An optional description of this resource. Provide this property when you create the resource.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ip<wbr>Address</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The IP address that this forwarding rule is serving on behalf of. Addresses are restricted based on the forwarding
rule's load balancing scheme (EXTERNAL or INTERNAL) and scope (global or regional). When the load balancing scheme is
EXTERNAL, for global forwarding rules, the address must be a global IP, and for regional forwarding rules, the address
must live in the same region as the forwarding rule. If this field is empty, an ephemeral IPv4 address from the same
scope (global or regional) will be assigned. A regional forwarding rule supports IPv4 only. A global forwarding rule
supports either IPv4 or IPv6. When the load balancing scheme is INTERNAL, this can only be an RFC 1918 IP address
belonging to the network/subnet configured for the forwarding rule. By default, if this field is empty, an ephemeral
internal IP address will be automatically allocated from the IP range of the subnet or network configured for this
forwarding rule. An address must be specified by a literal IP address. ~> **NOTE**: While the API allows you to specify
various resource paths for an address resource instead, Terraform requires this to specifically be an IP address to
avoid needing to fetching the IP address from resource paths on refresh or unnecessary diffs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ip<wbr>Protocol</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The IP protocol to which this rule applies. Valid options are TCP, UDP, ESP, AH, SCTP or ICMP. When the load balancing
scheme is INTERNAL, only TCP and UDP are valid.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Is<wbr>Mirroring<wbr>Collector</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Indicates whether or not this load balancer can be used as a collector for packet mirroring. To prevent mirroring loops,
instances behind this load balancer will not have their traffic mirrored even if a PacketMirroring rule applies to them.
This can only be set to true for load balancers that have their loadBalancingScheme set to INTERNAL.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Labels</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dictionary&lt;string, string&gt;</span>
    </dt>
    <dd>{{% md %}}Labels to apply to this forwarding rule. A list of key->value pairs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Load<wbr>Balancing<wbr>Scheme</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}This signifies what the ForwardingRule will be used for and can be EXTERNAL, INTERNAL, or INTERNAL_MANAGED. EXTERNAL is
used for Classic Cloud VPN gateways, protocol forwarding to VMs from an external IP address, and HTTP(S), SSL Proxy, TCP
Proxy, and Network TCP/UDP load balancers. INTERNAL is used for protocol forwarding to VMs from an internal IP address,
and internal TCP/UDP load balancers. INTERNAL_MANAGED is used for internal HTTP(S) load balancers.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression
'[a-z]([-a-z0-9]*[a-z0-9])?' which means the first character must be a lowercase letter, and all following characters
must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Network</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}For internal load balancing, this field identifies the network that the load balanced IP should belong to for this
Forwarding Rule. If this field is not specified, the default network will be used. This field is only used for INTERNAL
load balancing.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Network<wbr>Tier</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The networking tier used for configuring this address. This field can take the following values: PREMIUM or STANDARD. If
this field is not specified, it is assumed to be PREMIUM.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Port<wbr>Range</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}This field is used along with the target field for TargetHttpProxy, TargetHttpsProxy, TargetSslProxy, TargetTcpProxy,
TargetVpnGateway, TargetPool, TargetInstance. Applicable only when IPProtocol is TCP, UDP, or SCTP, only packets
addressed to ports in the specified range will be forwarded to target. Forwarding rules with the same [IPAddress,
IPProtocol] pair must have disjoint port ranges. Some types of forwarding target have constraints on the acceptable
ports: * TargetHttpProxy: 80, 8080 * TargetHttpsProxy: 443 * TargetTcpProxy: 25, 43, 110, 143, 195, 443, 465, 587, 700,
993, 995, 1883, 5222 * TargetSslProxy: 25, 43, 110, 143, 195, 443, 465, 587, 700, 993, 995, 1883, 5222 *
TargetVpnGateway: 500, 4500
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ports</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}This field is used along with the backend_service field for internal load balancing. When the load balancing scheme is
INTERNAL, a single port or a comma separated list of ports can be configured. Only packets addressed to these ports will
be forwarded to the backends configured with this forwarding rule. You may specify a maximum of up to 5 ports.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Project</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Region</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}A reference to the region where the regional forwarding rule resides. This field is not applicable to global forwarding
rules.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Service<wbr>Label</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}An optional prefix to the service name for this Forwarding Rule. If specified, will be the first label of the fully
qualified service name. The label must be 1-63 characters long, and comply with RFC1035. Specifically, the label must be
1-63 characters long and match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the first character must
be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash. This field is only used for INTERNAL load balancing.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Subnetwork</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The subnetwork that the load balanced IP should belong to for this Forwarding Rule. This field is only used for INTERNAL
load balancing. If the network specified is in auto subnet mode, this field is optional. However, if the network is in
custom subnet mode, a subnetwork must be specified.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Target</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The URL of the target resource to receive the matched traffic. The target must live in the same region as the forwarding
rule. The forwarded traffic must be of a type appropriate to the target object.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>All<wbr>Ports</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}For internal TCP/UDP load balancing (i.e. load balancing scheme is INTERNAL and protocol is TCP/UDP), set this to true
to allow packets addressed to any ports to be forwarded to the backends configured with this forwarding rule. Used with
backend service. Cannot be set if port or portRange are set.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Allow<wbr>Global<wbr>Access</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}If true, clients can access ILB from all regions. Otherwise only allows from the local region the ILB is located at.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Backend<wbr>Service</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}A BackendService to receive the matched traffic. This is used only for INTERNAL load balancing.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Description</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}An optional description of this resource. Provide this property when you create the resource.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ip<wbr>Address</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The IP address that this forwarding rule is serving on behalf of. Addresses are restricted based on the forwarding
rule's load balancing scheme (EXTERNAL or INTERNAL) and scope (global or regional). When the load balancing scheme is
EXTERNAL, for global forwarding rules, the address must be a global IP, and for regional forwarding rules, the address
must live in the same region as the forwarding rule. If this field is empty, an ephemeral IPv4 address from the same
scope (global or regional) will be assigned. A regional forwarding rule supports IPv4 only. A global forwarding rule
supports either IPv4 or IPv6. When the load balancing scheme is INTERNAL, this can only be an RFC 1918 IP address
belonging to the network/subnet configured for the forwarding rule. By default, if this field is empty, an ephemeral
internal IP address will be automatically allocated from the IP range of the subnet or network configured for this
forwarding rule. An address must be specified by a literal IP address. ~> **NOTE**: While the API allows you to specify
various resource paths for an address resource instead, Terraform requires this to specifically be an IP address to
avoid needing to fetching the IP address from resource paths on refresh or unnecessary diffs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ip<wbr>Protocol</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The IP protocol to which this rule applies. Valid options are TCP, UDP, ESP, AH, SCTP or ICMP. When the load balancing
scheme is INTERNAL, only TCP and UDP are valid.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Is<wbr>Mirroring<wbr>Collector</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Indicates whether or not this load balancer can be used as a collector for packet mirroring. To prevent mirroring loops,
instances behind this load balancer will not have their traffic mirrored even if a PacketMirroring rule applies to them.
This can only be set to true for load balancers that have their loadBalancingScheme set to INTERNAL.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Labels</span>
        <span class="property-indicator"></span>
        <span class="property-type">map[string]string</span>
    </dt>
    <dd>{{% md %}}Labels to apply to this forwarding rule. A list of key->value pairs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Load<wbr>Balancing<wbr>Scheme</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}This signifies what the ForwardingRule will be used for and can be EXTERNAL, INTERNAL, or INTERNAL_MANAGED. EXTERNAL is
used for Classic Cloud VPN gateways, protocol forwarding to VMs from an external IP address, and HTTP(S), SSL Proxy, TCP
Proxy, and Network TCP/UDP load balancers. INTERNAL is used for protocol forwarding to VMs from an internal IP address,
and internal TCP/UDP load balancers. INTERNAL_MANAGED is used for internal HTTP(S) load balancers.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression
'[a-z]([-a-z0-9]*[a-z0-9])?' which means the first character must be a lowercase letter, and all following characters
must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Network</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}For internal load balancing, this field identifies the network that the load balanced IP should belong to for this
Forwarding Rule. If this field is not specified, the default network will be used. This field is only used for INTERNAL
load balancing.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Network<wbr>Tier</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The networking tier used for configuring this address. This field can take the following values: PREMIUM or STANDARD. If
this field is not specified, it is assumed to be PREMIUM.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Port<wbr>Range</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}This field is used along with the target field for TargetHttpProxy, TargetHttpsProxy, TargetSslProxy, TargetTcpProxy,
TargetVpnGateway, TargetPool, TargetInstance. Applicable only when IPProtocol is TCP, UDP, or SCTP, only packets
addressed to ports in the specified range will be forwarded to target. Forwarding rules with the same [IPAddress,
IPProtocol] pair must have disjoint port ranges. Some types of forwarding target have constraints on the acceptable
ports: * TargetHttpProxy: 80, 8080 * TargetHttpsProxy: 443 * TargetTcpProxy: 25, 43, 110, 143, 195, 443, 465, 587, 700,
993, 995, 1883, 5222 * TargetSslProxy: 25, 43, 110, 143, 195, 443, 465, 587, 700, 993, 995, 1883, 5222 *
TargetVpnGateway: 500, 4500
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ports</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}This field is used along with the backend_service field for internal load balancing. When the load balancing scheme is
INTERNAL, a single port or a comma separated list of ports can be configured. Only packets addressed to these ports will
be forwarded to the backends configured with this forwarding rule. You may specify a maximum of up to 5 ports.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Project</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Region</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}A reference to the region where the regional forwarding rule resides. This field is not applicable to global forwarding
rules.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Service<wbr>Label</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}An optional prefix to the service name for this Forwarding Rule. If specified, will be the first label of the fully
qualified service name. The label must be 1-63 characters long, and comply with RFC1035. Specifically, the label must be
1-63 characters long and match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the first character must
be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash. This field is only used for INTERNAL load balancing.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Subnetwork</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The subnetwork that the load balanced IP should belong to for this Forwarding Rule. This field is only used for INTERNAL
load balancing. If the network specified is in auto subnet mode, this field is optional. However, if the network is in
custom subnet mode, a subnetwork must be specified.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Target</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The URL of the target resource to receive the matched traffic. The target must live in the same region as the forwarding
rule. The forwarded traffic must be of a type appropriate to the target object.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>all<wbr>Ports</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}For internal TCP/UDP load balancing (i.e. load balancing scheme is INTERNAL and protocol is TCP/UDP), set this to true
to allow packets addressed to any ports to be forwarded to the backends configured with this forwarding rule. Used with
backend service. Cannot be set if port or portRange are set.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>allow<wbr>Global<wbr>Access</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}If true, clients can access ILB from all regions. Otherwise only allows from the local region the ILB is located at.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>backend<wbr>Service</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}A BackendService to receive the matched traffic. This is used only for INTERNAL load balancing.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>description</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}An optional description of this resource. Provide this property when you create the resource.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ip<wbr>Address</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The IP address that this forwarding rule is serving on behalf of. Addresses are restricted based on the forwarding
rule's load balancing scheme (EXTERNAL or INTERNAL) and scope (global or regional). When the load balancing scheme is
EXTERNAL, for global forwarding rules, the address must be a global IP, and for regional forwarding rules, the address
must live in the same region as the forwarding rule. If this field is empty, an ephemeral IPv4 address from the same
scope (global or regional) will be assigned. A regional forwarding rule supports IPv4 only. A global forwarding rule
supports either IPv4 or IPv6. When the load balancing scheme is INTERNAL, this can only be an RFC 1918 IP address
belonging to the network/subnet configured for the forwarding rule. By default, if this field is empty, an ephemeral
internal IP address will be automatically allocated from the IP range of the subnet or network configured for this
forwarding rule. An address must be specified by a literal IP address. ~> **NOTE**: While the API allows you to specify
various resource paths for an address resource instead, Terraform requires this to specifically be an IP address to
avoid needing to fetching the IP address from resource paths on refresh or unnecessary diffs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ip<wbr>Protocol</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The IP protocol to which this rule applies. Valid options are TCP, UDP, ESP, AH, SCTP or ICMP. When the load balancing
scheme is INTERNAL, only TCP and UDP are valid.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>is<wbr>Mirroring<wbr>Collector</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Indicates whether or not this load balancer can be used as a collector for packet mirroring. To prevent mirroring loops,
instances behind this load balancer will not have their traffic mirrored even if a PacketMirroring rule applies to them.
This can only be set to true for load balancers that have their loadBalancingScheme set to INTERNAL.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>labels</span>
        <span class="property-indicator"></span>
        <span class="property-type">{[key: string]: string}</span>
    </dt>
    <dd>{{% md %}}Labels to apply to this forwarding rule. A list of key->value pairs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>load<wbr>Balancing<wbr>Scheme</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}This signifies what the ForwardingRule will be used for and can be EXTERNAL, INTERNAL, or INTERNAL_MANAGED. EXTERNAL is
used for Classic Cloud VPN gateways, protocol forwarding to VMs from an external IP address, and HTTP(S), SSL Proxy, TCP
Proxy, and Network TCP/UDP load balancers. INTERNAL is used for protocol forwarding to VMs from an internal IP address,
and internal TCP/UDP load balancers. INTERNAL_MANAGED is used for internal HTTP(S) load balancers.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression
'[a-z]([-a-z0-9]*[a-z0-9])?' which means the first character must be a lowercase letter, and all following characters
must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>network</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}For internal load balancing, this field identifies the network that the load balanced IP should belong to for this
Forwarding Rule. If this field is not specified, the default network will be used. This field is only used for INTERNAL
load balancing.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>network<wbr>Tier</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The networking tier used for configuring this address. This field can take the following values: PREMIUM or STANDARD. If
this field is not specified, it is assumed to be PREMIUM.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>port<wbr>Range</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}This field is used along with the target field for TargetHttpProxy, TargetHttpsProxy, TargetSslProxy, TargetTcpProxy,
TargetVpnGateway, TargetPool, TargetInstance. Applicable only when IPProtocol is TCP, UDP, or SCTP, only packets
addressed to ports in the specified range will be forwarded to target. Forwarding rules with the same [IPAddress,
IPProtocol] pair must have disjoint port ranges. Some types of forwarding target have constraints on the acceptable
ports: * TargetHttpProxy: 80, 8080 * TargetHttpsProxy: 443 * TargetTcpProxy: 25, 43, 110, 143, 195, 443, 465, 587, 700,
993, 995, 1883, 5222 * TargetSslProxy: 25, 43, 110, 143, 195, 443, 465, 587, 700, 993, 995, 1883, 5222 *
TargetVpnGateway: 500, 4500
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ports</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}This field is used along with the backend_service field for internal load balancing. When the load balancing scheme is
INTERNAL, a single port or a comma separated list of ports can be configured. Only packets addressed to these ports will
be forwarded to the backends configured with this forwarding rule. You may specify a maximum of up to 5 ports.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>project</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>region</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}A reference to the region where the regional forwarding rule resides. This field is not applicable to global forwarding
rules.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>service<wbr>Label</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}An optional prefix to the service name for this Forwarding Rule. If specified, will be the first label of the fully
qualified service name. The label must be 1-63 characters long, and comply with RFC1035. Specifically, the label must be
1-63 characters long and match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the first character must
be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash. This field is only used for INTERNAL load balancing.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>subnetwork</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The subnetwork that the load balanced IP should belong to for this Forwarding Rule. This field is only used for INTERNAL
load balancing. If the network specified is in auto subnet mode, this field is optional. However, if the network is in
custom subnet mode, a subnetwork must be specified.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>target</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The URL of the target resource to receive the matched traffic. The target must live in the same region as the forwarding
rule. The forwarded traffic must be of a type appropriate to the target object.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>all_<wbr>ports</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}For internal TCP/UDP load balancing (i.e. load balancing scheme is INTERNAL and protocol is TCP/UDP), set this to true
to allow packets addressed to any ports to be forwarded to the backends configured with this forwarding rule. Used with
backend service. Cannot be set if port or portRange are set.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>allow_<wbr>global_<wbr>access</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}If true, clients can access ILB from all regions. Otherwise only allows from the local region the ILB is located at.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>backend_<wbr>service</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}A BackendService to receive the matched traffic. This is used only for INTERNAL load balancing.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>description</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}An optional description of this resource. Provide this property when you create the resource.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ip_<wbr>address</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The IP address that this forwarding rule is serving on behalf of. Addresses are restricted based on the forwarding
rule's load balancing scheme (EXTERNAL or INTERNAL) and scope (global or regional). When the load balancing scheme is
EXTERNAL, for global forwarding rules, the address must be a global IP, and for regional forwarding rules, the address
must live in the same region as the forwarding rule. If this field is empty, an ephemeral IPv4 address from the same
scope (global or regional) will be assigned. A regional forwarding rule supports IPv4 only. A global forwarding rule
supports either IPv4 or IPv6. When the load balancing scheme is INTERNAL, this can only be an RFC 1918 IP address
belonging to the network/subnet configured for the forwarding rule. By default, if this field is empty, an ephemeral
internal IP address will be automatically allocated from the IP range of the subnet or network configured for this
forwarding rule. An address must be specified by a literal IP address. ~> **NOTE**: While the API allows you to specify
various resource paths for an address resource instead, Terraform requires this to specifically be an IP address to
avoid needing to fetching the IP address from resource paths on refresh or unnecessary diffs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ip_<wbr>protocol</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The IP protocol to which this rule applies. Valid options are TCP, UDP, ESP, AH, SCTP or ICMP. When the load balancing
scheme is INTERNAL, only TCP and UDP are valid.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>is_<wbr>mirroring_<wbr>collector</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Indicates whether or not this load balancer can be used as a collector for packet mirroring. To prevent mirroring loops,
instances behind this load balancer will not have their traffic mirrored even if a PacketMirroring rule applies to them.
This can only be set to true for load balancers that have their loadBalancingScheme set to INTERNAL.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>labels</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dict[str, str]</span>
    </dt>
    <dd>{{% md %}}Labels to apply to this forwarding rule. A list of key->value pairs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>load_<wbr>balancing_<wbr>scheme</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}This signifies what the ForwardingRule will be used for and can be EXTERNAL, INTERNAL, or INTERNAL_MANAGED. EXTERNAL is
used for Classic Cloud VPN gateways, protocol forwarding to VMs from an external IP address, and HTTP(S), SSL Proxy, TCP
Proxy, and Network TCP/UDP load balancers. INTERNAL is used for protocol forwarding to VMs from an internal IP address,
and internal TCP/UDP load balancers. INTERNAL_MANAGED is used for internal HTTP(S) load balancers.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression
'[a-z]([-a-z0-9]*[a-z0-9])?' which means the first character must be a lowercase letter, and all following characters
must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>network</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}For internal load balancing, this field identifies the network that the load balanced IP should belong to for this
Forwarding Rule. If this field is not specified, the default network will be used. This field is only used for INTERNAL
load balancing.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>network_<wbr>tier</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The networking tier used for configuring this address. This field can take the following values: PREMIUM or STANDARD. If
this field is not specified, it is assumed to be PREMIUM.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>port_<wbr>range</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}This field is used along with the target field for TargetHttpProxy, TargetHttpsProxy, TargetSslProxy, TargetTcpProxy,
TargetVpnGateway, TargetPool, TargetInstance. Applicable only when IPProtocol is TCP, UDP, or SCTP, only packets
addressed to ports in the specified range will be forwarded to target. Forwarding rules with the same [IPAddress,
IPProtocol] pair must have disjoint port ranges. Some types of forwarding target have constraints on the acceptable
ports: * TargetHttpProxy: 80, 8080 * TargetHttpsProxy: 443 * TargetTcpProxy: 25, 43, 110, 143, 195, 443, 465, 587, 700,
993, 995, 1883, 5222 * TargetSslProxy: 25, 43, 110, 143, 195, 443, 465, 587, 700, 993, 995, 1883, 5222 *
TargetVpnGateway: 500, 4500
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ports</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}This field is used along with the backend_service field for internal load balancing. When the load balancing scheme is
INTERNAL, a single port or a comma separated list of ports can be configured. Only packets addressed to these ports will
be forwarded to the backends configured with this forwarding rule. You may specify a maximum of up to 5 ports.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>project</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>region</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}A reference to the region where the regional forwarding rule resides. This field is not applicable to global forwarding
rules.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>service_<wbr>label</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}An optional prefix to the service name for this Forwarding Rule. If specified, will be the first label of the fully
qualified service name. The label must be 1-63 characters long, and comply with RFC1035. Specifically, the label must be
1-63 characters long and match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the first character must
be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash. This field is only used for INTERNAL load balancing.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>subnetwork</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The subnetwork that the load balanced IP should belong to for this Forwarding Rule. This field is only used for INTERNAL
load balancing. If the network specified is in auto subnet mode, this field is optional. However, if the network is in
custom subnet mode, a subnetwork must be specified.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>target</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The URL of the target resource to receive the matched traffic. The target must live in the same region as the forwarding
rule. The forwarded traffic must be of a type appropriate to the target object.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}







## ForwardingRule Output Properties

The following output properties are available:




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span>Creation<wbr>Timestamp</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Creation timestamp in RFC3339 text format.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Label<wbr>Fingerprint</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The fingerprint used for optimistic locking of this resource. Used internally during updates.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Self<wbr>Link</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The URI of the created resource.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Service<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The internal fully qualified service name for this Forwarding Rule. This field is only used for INTERNAL load balancing.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span>Creation<wbr>Timestamp</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Creation timestamp in RFC3339 text format.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Label<wbr>Fingerprint</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The fingerprint used for optimistic locking of this resource. Used internally during updates.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Self<wbr>Link</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The URI of the created resource.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Service<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The internal fully qualified service name for this Forwarding Rule. This field is only used for INTERNAL load balancing.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span>creation<wbr>Timestamp</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Creation timestamp in RFC3339 text format.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>label<wbr>Fingerprint</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The fingerprint used for optimistic locking of this resource. Used internally during updates.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>self<wbr>Link</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The URI of the created resource.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>service<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The internal fully qualified service name for this Forwarding Rule. This field is only used for INTERNAL load balancing.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span>creation_<wbr>timestamp</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Creation timestamp in RFC3339 text format.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>label_<wbr>fingerprint</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The fingerprint used for optimistic locking of this resource. Used internally during updates.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>self_<wbr>link</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The URI of the created resource.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>service_<wbr>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The internal fully qualified service name for this Forwarding Rule. This field is only used for INTERNAL load balancing.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}








## Look up an Existing ForwardingRule Resource

Get an existing ForwardingRule resource's state with the given name, ID, and optional extra properties used to qualify the lookup.

{{< chooser language "javascript,typescript,python,go,csharp  " / >}}

{{% choosable language nodejs %}}
<div class="highlight"><pre class="chroma"><code class="language-typescript" data-lang="typescript"><span class="k">public static </span><span class="nf">get</span><span class="p">(</span><span class="nx">name</span>: <span class="nx"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span><span class="p">, </span><span class="nx">id</span>: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#ID">Input&lt;ID&gt;</a></span><span class="p">, </span><span class="nx">state</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/gcp/compute/#ForwardingRuleState">ForwardingRuleState</a></span><span class="p">, </span><span class="nx">opts</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions">CustomResourceOptions</a></span><span class="p">): </span><span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/gcp/compute/#ForwardingRule">ForwardingRule</a></span></code></pre></div>
{{% /choosable %}}

{{% choosable language python %}}
<div class="highlight"><pre class="chroma"><code class="language-python" data-lang="python"><span class="k">static </span><span class="nf">get</span><span class="p">(resource_name, id, opts=None, </span>all_ports=None<span class="p">, </span>allow_global_access=None<span class="p">, </span>backend_service=None<span class="p">, </span>creation_timestamp=None<span class="p">, </span>description=None<span class="p">, </span>ip_address=None<span class="p">, </span>ip_protocol=None<span class="p">, </span>is_mirroring_collector=None<span class="p">, </span>label_fingerprint=None<span class="p">, </span>labels=None<span class="p">, </span>load_balancing_scheme=None<span class="p">, </span>name=None<span class="p">, </span>network=None<span class="p">, </span>network_tier=None<span class="p">, </span>port_range=None<span class="p">, </span>ports=None<span class="p">, </span>project=None<span class="p">, </span>region=None<span class="p">, </span>self_link=None<span class="p">, </span>service_label=None<span class="p">, </span>service_name=None<span class="p">, </span>subnetwork=None<span class="p">, </span>target=None<span class="p">, __props__=None);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language go %}}
<div class="highlight"><pre class="chroma"><code class="language-go" data-lang="go"><span class="k">func </span>GetForwardingRule<span class="p">(</span><span class="nx">ctx</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v3/go/pulumi?tab=doc#Context">Context</a></span><span class="p">, </span><span class="nx">name</span> <span class="nx"><a href="https://golang.org/pkg/builtin/#string">string</a></span><span class="p">, </span><span class="nx">id</span> <span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v3/go/pulumi?tab=doc#IDInput">IDInput</a></span><span class="p">, </span><span class="nx">state</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-gcp/sdk/v3/go/gcp/compute?tab=doc#ForwardingRuleState">ForwardingRuleState</a></span><span class="p">, </span><span class="nx">opts</span> ...<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v3/go/pulumi?tab=doc#ResourceOption">ResourceOption</a></span><span class="p">) (*<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-gcp/sdk/v3/go/gcp/compute?tab=doc#ForwardingRule">ForwardingRule</a></span>, error)</span></code></pre></div>
{{% /choosable %}}

{{% choosable language csharp %}}
<div class="highlight"><pre class="chroma"><code class="language-csharp" data-lang="csharp"><span class="k">public static </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Gcp/Pulumi.Gcp.Compute.ForwardingRule.html">ForwardingRule</a></span><span class="nf"> Get</span><span class="p">(</span><span class="nx"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span> <span class="nx">name<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.Input.html">Input&lt;string&gt;</a></span> <span class="nx">id<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Gcp/Pulumi.Gcp.Compute.ForwardingRuleState.html">ForwardingRuleState</a></span>? <span class="nx">state<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.CustomResourceOptions.html">CustomResourceOptions</a></span>? <span class="nx">opts = null<span class="p">)</span></code></pre></div>
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
        <span>All<wbr>Ports</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}For internal TCP/UDP load balancing (i.e. load balancing scheme is INTERNAL and protocol is TCP/UDP), set this to true
to allow packets addressed to any ports to be forwarded to the backends configured with this forwarding rule. Used with
backend service. Cannot be set if port or portRange are set.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Allow<wbr>Global<wbr>Access</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}If true, clients can access ILB from all regions. Otherwise only allows from the local region the ILB is located at.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Backend<wbr>Service</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}A BackendService to receive the matched traffic. This is used only for INTERNAL load balancing.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Creation<wbr>Timestamp</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Creation timestamp in RFC3339 text format.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Description</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}An optional description of this resource. Provide this property when you create the resource.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ip<wbr>Address</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The IP address that this forwarding rule is serving on behalf of. Addresses are restricted based on the forwarding
rule's load balancing scheme (EXTERNAL or INTERNAL) and scope (global or regional). When the load balancing scheme is
EXTERNAL, for global forwarding rules, the address must be a global IP, and for regional forwarding rules, the address
must live in the same region as the forwarding rule. If this field is empty, an ephemeral IPv4 address from the same
scope (global or regional) will be assigned. A regional forwarding rule supports IPv4 only. A global forwarding rule
supports either IPv4 or IPv6. When the load balancing scheme is INTERNAL, this can only be an RFC 1918 IP address
belonging to the network/subnet configured for the forwarding rule. By default, if this field is empty, an ephemeral
internal IP address will be automatically allocated from the IP range of the subnet or network configured for this
forwarding rule. An address must be specified by a literal IP address. ~> **NOTE**: While the API allows you to specify
various resource paths for an address resource instead, Terraform requires this to specifically be an IP address to
avoid needing to fetching the IP address from resource paths on refresh or unnecessary diffs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ip<wbr>Protocol</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The IP protocol to which this rule applies. Valid options are TCP, UDP, ESP, AH, SCTP or ICMP. When the load balancing
scheme is INTERNAL, only TCP and UDP are valid.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Is<wbr>Mirroring<wbr>Collector</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Indicates whether or not this load balancer can be used as a collector for packet mirroring. To prevent mirroring loops,
instances behind this load balancer will not have their traffic mirrored even if a PacketMirroring rule applies to them.
This can only be set to true for load balancers that have their loadBalancingScheme set to INTERNAL.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Label<wbr>Fingerprint</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The fingerprint used for optimistic locking of this resource. Used internally during updates.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Labels</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dictionary&lt;string, string&gt;</span>
    </dt>
    <dd>{{% md %}}Labels to apply to this forwarding rule. A list of key->value pairs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Load<wbr>Balancing<wbr>Scheme</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}This signifies what the ForwardingRule will be used for and can be EXTERNAL, INTERNAL, or INTERNAL_MANAGED. EXTERNAL is
used for Classic Cloud VPN gateways, protocol forwarding to VMs from an external IP address, and HTTP(S), SSL Proxy, TCP
Proxy, and Network TCP/UDP load balancers. INTERNAL is used for protocol forwarding to VMs from an internal IP address,
and internal TCP/UDP load balancers. INTERNAL_MANAGED is used for internal HTTP(S) load balancers.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression
'[a-z]([-a-z0-9]*[a-z0-9])?' which means the first character must be a lowercase letter, and all following characters
must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Network</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}For internal load balancing, this field identifies the network that the load balanced IP should belong to for this
Forwarding Rule. If this field is not specified, the default network will be used. This field is only used for INTERNAL
load balancing.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Network<wbr>Tier</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The networking tier used for configuring this address. This field can take the following values: PREMIUM or STANDARD. If
this field is not specified, it is assumed to be PREMIUM.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Port<wbr>Range</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}This field is used along with the target field for TargetHttpProxy, TargetHttpsProxy, TargetSslProxy, TargetTcpProxy,
TargetVpnGateway, TargetPool, TargetInstance. Applicable only when IPProtocol is TCP, UDP, or SCTP, only packets
addressed to ports in the specified range will be forwarded to target. Forwarding rules with the same [IPAddress,
IPProtocol] pair must have disjoint port ranges. Some types of forwarding target have constraints on the acceptable
ports: * TargetHttpProxy: 80, 8080 * TargetHttpsProxy: 443 * TargetTcpProxy: 25, 43, 110, 143, 195, 443, 465, 587, 700,
993, 995, 1883, 5222 * TargetSslProxy: 25, 43, 110, 143, 195, 443, 465, 587, 700, 993, 995, 1883, 5222 *
TargetVpnGateway: 500, 4500
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ports</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}This field is used along with the backend_service field for internal load balancing. When the load balancing scheme is
INTERNAL, a single port or a comma separated list of ports can be configured. Only packets addressed to these ports will
be forwarded to the backends configured with this forwarding rule. You may specify a maximum of up to 5 ports.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Project</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Region</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}A reference to the region where the regional forwarding rule resides. This field is not applicable to global forwarding
rules.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Self<wbr>Link</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The URI of the created resource.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Service<wbr>Label</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}An optional prefix to the service name for this Forwarding Rule. If specified, will be the first label of the fully
qualified service name. The label must be 1-63 characters long, and comply with RFC1035. Specifically, the label must be
1-63 characters long and match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the first character must
be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash. This field is only used for INTERNAL load balancing.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Service<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The internal fully qualified service name for this Forwarding Rule. This field is only used for INTERNAL load balancing.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Subnetwork</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The subnetwork that the load balanced IP should belong to for this Forwarding Rule. This field is only used for INTERNAL
load balancing. If the network specified is in auto subnet mode, this field is optional. However, if the network is in
custom subnet mode, a subnetwork must be specified.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Target</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The URL of the target resource to receive the matched traffic. The target must live in the same region as the forwarding
rule. The forwarded traffic must be of a type appropriate to the target object.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>All<wbr>Ports</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}For internal TCP/UDP load balancing (i.e. load balancing scheme is INTERNAL and protocol is TCP/UDP), set this to true
to allow packets addressed to any ports to be forwarded to the backends configured with this forwarding rule. Used with
backend service. Cannot be set if port or portRange are set.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Allow<wbr>Global<wbr>Access</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}If true, clients can access ILB from all regions. Otherwise only allows from the local region the ILB is located at.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Backend<wbr>Service</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}A BackendService to receive the matched traffic. This is used only for INTERNAL load balancing.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Creation<wbr>Timestamp</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Creation timestamp in RFC3339 text format.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Description</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}An optional description of this resource. Provide this property when you create the resource.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ip<wbr>Address</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The IP address that this forwarding rule is serving on behalf of. Addresses are restricted based on the forwarding
rule's load balancing scheme (EXTERNAL or INTERNAL) and scope (global or regional). When the load balancing scheme is
EXTERNAL, for global forwarding rules, the address must be a global IP, and for regional forwarding rules, the address
must live in the same region as the forwarding rule. If this field is empty, an ephemeral IPv4 address from the same
scope (global or regional) will be assigned. A regional forwarding rule supports IPv4 only. A global forwarding rule
supports either IPv4 or IPv6. When the load balancing scheme is INTERNAL, this can only be an RFC 1918 IP address
belonging to the network/subnet configured for the forwarding rule. By default, if this field is empty, an ephemeral
internal IP address will be automatically allocated from the IP range of the subnet or network configured for this
forwarding rule. An address must be specified by a literal IP address. ~> **NOTE**: While the API allows you to specify
various resource paths for an address resource instead, Terraform requires this to specifically be an IP address to
avoid needing to fetching the IP address from resource paths on refresh or unnecessary diffs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ip<wbr>Protocol</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The IP protocol to which this rule applies. Valid options are TCP, UDP, ESP, AH, SCTP or ICMP. When the load balancing
scheme is INTERNAL, only TCP and UDP are valid.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Is<wbr>Mirroring<wbr>Collector</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Indicates whether or not this load balancer can be used as a collector for packet mirroring. To prevent mirroring loops,
instances behind this load balancer will not have their traffic mirrored even if a PacketMirroring rule applies to them.
This can only be set to true for load balancers that have their loadBalancingScheme set to INTERNAL.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Label<wbr>Fingerprint</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The fingerprint used for optimistic locking of this resource. Used internally during updates.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Labels</span>
        <span class="property-indicator"></span>
        <span class="property-type">map[string]string</span>
    </dt>
    <dd>{{% md %}}Labels to apply to this forwarding rule. A list of key->value pairs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Load<wbr>Balancing<wbr>Scheme</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}This signifies what the ForwardingRule will be used for and can be EXTERNAL, INTERNAL, or INTERNAL_MANAGED. EXTERNAL is
used for Classic Cloud VPN gateways, protocol forwarding to VMs from an external IP address, and HTTP(S), SSL Proxy, TCP
Proxy, and Network TCP/UDP load balancers. INTERNAL is used for protocol forwarding to VMs from an internal IP address,
and internal TCP/UDP load balancers. INTERNAL_MANAGED is used for internal HTTP(S) load balancers.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression
'[a-z]([-a-z0-9]*[a-z0-9])?' which means the first character must be a lowercase letter, and all following characters
must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Network</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}For internal load balancing, this field identifies the network that the load balanced IP should belong to for this
Forwarding Rule. If this field is not specified, the default network will be used. This field is only used for INTERNAL
load balancing.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Network<wbr>Tier</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The networking tier used for configuring this address. This field can take the following values: PREMIUM or STANDARD. If
this field is not specified, it is assumed to be PREMIUM.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Port<wbr>Range</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}This field is used along with the target field for TargetHttpProxy, TargetHttpsProxy, TargetSslProxy, TargetTcpProxy,
TargetVpnGateway, TargetPool, TargetInstance. Applicable only when IPProtocol is TCP, UDP, or SCTP, only packets
addressed to ports in the specified range will be forwarded to target. Forwarding rules with the same [IPAddress,
IPProtocol] pair must have disjoint port ranges. Some types of forwarding target have constraints on the acceptable
ports: * TargetHttpProxy: 80, 8080 * TargetHttpsProxy: 443 * TargetTcpProxy: 25, 43, 110, 143, 195, 443, 465, 587, 700,
993, 995, 1883, 5222 * TargetSslProxy: 25, 43, 110, 143, 195, 443, 465, 587, 700, 993, 995, 1883, 5222 *
TargetVpnGateway: 500, 4500
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ports</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}This field is used along with the backend_service field for internal load balancing. When the load balancing scheme is
INTERNAL, a single port or a comma separated list of ports can be configured. Only packets addressed to these ports will
be forwarded to the backends configured with this forwarding rule. You may specify a maximum of up to 5 ports.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Project</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Region</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}A reference to the region where the regional forwarding rule resides. This field is not applicable to global forwarding
rules.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Self<wbr>Link</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The URI of the created resource.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Service<wbr>Label</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}An optional prefix to the service name for this Forwarding Rule. If specified, will be the first label of the fully
qualified service name. The label must be 1-63 characters long, and comply with RFC1035. Specifically, the label must be
1-63 characters long and match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the first character must
be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash. This field is only used for INTERNAL load balancing.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Service<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The internal fully qualified service name for this Forwarding Rule. This field is only used for INTERNAL load balancing.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Subnetwork</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The subnetwork that the load balanced IP should belong to for this Forwarding Rule. This field is only used for INTERNAL
load balancing. If the network specified is in auto subnet mode, this field is optional. However, if the network is in
custom subnet mode, a subnetwork must be specified.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Target</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The URL of the target resource to receive the matched traffic. The target must live in the same region as the forwarding
rule. The forwarded traffic must be of a type appropriate to the target object.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>all<wbr>Ports</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}For internal TCP/UDP load balancing (i.e. load balancing scheme is INTERNAL and protocol is TCP/UDP), set this to true
to allow packets addressed to any ports to be forwarded to the backends configured with this forwarding rule. Used with
backend service. Cannot be set if port or portRange are set.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>allow<wbr>Global<wbr>Access</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}If true, clients can access ILB from all regions. Otherwise only allows from the local region the ILB is located at.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>backend<wbr>Service</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}A BackendService to receive the matched traffic. This is used only for INTERNAL load balancing.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>creation<wbr>Timestamp</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Creation timestamp in RFC3339 text format.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>description</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}An optional description of this resource. Provide this property when you create the resource.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ip<wbr>Address</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The IP address that this forwarding rule is serving on behalf of. Addresses are restricted based on the forwarding
rule's load balancing scheme (EXTERNAL or INTERNAL) and scope (global or regional). When the load balancing scheme is
EXTERNAL, for global forwarding rules, the address must be a global IP, and for regional forwarding rules, the address
must live in the same region as the forwarding rule. If this field is empty, an ephemeral IPv4 address from the same
scope (global or regional) will be assigned. A regional forwarding rule supports IPv4 only. A global forwarding rule
supports either IPv4 or IPv6. When the load balancing scheme is INTERNAL, this can only be an RFC 1918 IP address
belonging to the network/subnet configured for the forwarding rule. By default, if this field is empty, an ephemeral
internal IP address will be automatically allocated from the IP range of the subnet or network configured for this
forwarding rule. An address must be specified by a literal IP address. ~> **NOTE**: While the API allows you to specify
various resource paths for an address resource instead, Terraform requires this to specifically be an IP address to
avoid needing to fetching the IP address from resource paths on refresh or unnecessary diffs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ip<wbr>Protocol</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The IP protocol to which this rule applies. Valid options are TCP, UDP, ESP, AH, SCTP or ICMP. When the load balancing
scheme is INTERNAL, only TCP and UDP are valid.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>is<wbr>Mirroring<wbr>Collector</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Indicates whether or not this load balancer can be used as a collector for packet mirroring. To prevent mirroring loops,
instances behind this load balancer will not have their traffic mirrored even if a PacketMirroring rule applies to them.
This can only be set to true for load balancers that have their loadBalancingScheme set to INTERNAL.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>label<wbr>Fingerprint</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The fingerprint used for optimistic locking of this resource. Used internally during updates.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>labels</span>
        <span class="property-indicator"></span>
        <span class="property-type">{[key: string]: string}</span>
    </dt>
    <dd>{{% md %}}Labels to apply to this forwarding rule. A list of key->value pairs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>load<wbr>Balancing<wbr>Scheme</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}This signifies what the ForwardingRule will be used for and can be EXTERNAL, INTERNAL, or INTERNAL_MANAGED. EXTERNAL is
used for Classic Cloud VPN gateways, protocol forwarding to VMs from an external IP address, and HTTP(S), SSL Proxy, TCP
Proxy, and Network TCP/UDP load balancers. INTERNAL is used for protocol forwarding to VMs from an internal IP address,
and internal TCP/UDP load balancers. INTERNAL_MANAGED is used for internal HTTP(S) load balancers.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression
'[a-z]([-a-z0-9]*[a-z0-9])?' which means the first character must be a lowercase letter, and all following characters
must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>network</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}For internal load balancing, this field identifies the network that the load balanced IP should belong to for this
Forwarding Rule. If this field is not specified, the default network will be used. This field is only used for INTERNAL
load balancing.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>network<wbr>Tier</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The networking tier used for configuring this address. This field can take the following values: PREMIUM or STANDARD. If
this field is not specified, it is assumed to be PREMIUM.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>port<wbr>Range</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}This field is used along with the target field for TargetHttpProxy, TargetHttpsProxy, TargetSslProxy, TargetTcpProxy,
TargetVpnGateway, TargetPool, TargetInstance. Applicable only when IPProtocol is TCP, UDP, or SCTP, only packets
addressed to ports in the specified range will be forwarded to target. Forwarding rules with the same [IPAddress,
IPProtocol] pair must have disjoint port ranges. Some types of forwarding target have constraints on the acceptable
ports: * TargetHttpProxy: 80, 8080 * TargetHttpsProxy: 443 * TargetTcpProxy: 25, 43, 110, 143, 195, 443, 465, 587, 700,
993, 995, 1883, 5222 * TargetSslProxy: 25, 43, 110, 143, 195, 443, 465, 587, 700, 993, 995, 1883, 5222 *
TargetVpnGateway: 500, 4500
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ports</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}This field is used along with the backend_service field for internal load balancing. When the load balancing scheme is
INTERNAL, a single port or a comma separated list of ports can be configured. Only packets addressed to these ports will
be forwarded to the backends configured with this forwarding rule. You may specify a maximum of up to 5 ports.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>project</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>region</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}A reference to the region where the regional forwarding rule resides. This field is not applicable to global forwarding
rules.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>self<wbr>Link</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The URI of the created resource.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>service<wbr>Label</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}An optional prefix to the service name for this Forwarding Rule. If specified, will be the first label of the fully
qualified service name. The label must be 1-63 characters long, and comply with RFC1035. Specifically, the label must be
1-63 characters long and match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the first character must
be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash. This field is only used for INTERNAL load balancing.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>service<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The internal fully qualified service name for this Forwarding Rule. This field is only used for INTERNAL load balancing.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>subnetwork</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The subnetwork that the load balanced IP should belong to for this Forwarding Rule. This field is only used for INTERNAL
load balancing. If the network specified is in auto subnet mode, this field is optional. However, if the network is in
custom subnet mode, a subnetwork must be specified.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>target</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The URL of the target resource to receive the matched traffic. The target must live in the same region as the forwarding
rule. The forwarded traffic must be of a type appropriate to the target object.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>all_<wbr>ports</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}For internal TCP/UDP load balancing (i.e. load balancing scheme is INTERNAL and protocol is TCP/UDP), set this to true
to allow packets addressed to any ports to be forwarded to the backends configured with this forwarding rule. Used with
backend service. Cannot be set if port or portRange are set.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>allow_<wbr>global_<wbr>access</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}If true, clients can access ILB from all regions. Otherwise only allows from the local region the ILB is located at.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>backend_<wbr>service</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}A BackendService to receive the matched traffic. This is used only for INTERNAL load balancing.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>creation_<wbr>timestamp</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Creation timestamp in RFC3339 text format.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>description</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}An optional description of this resource. Provide this property when you create the resource.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ip_<wbr>address</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The IP address that this forwarding rule is serving on behalf of. Addresses are restricted based on the forwarding
rule's load balancing scheme (EXTERNAL or INTERNAL) and scope (global or regional). When the load balancing scheme is
EXTERNAL, for global forwarding rules, the address must be a global IP, and for regional forwarding rules, the address
must live in the same region as the forwarding rule. If this field is empty, an ephemeral IPv4 address from the same
scope (global or regional) will be assigned. A regional forwarding rule supports IPv4 only. A global forwarding rule
supports either IPv4 or IPv6. When the load balancing scheme is INTERNAL, this can only be an RFC 1918 IP address
belonging to the network/subnet configured for the forwarding rule. By default, if this field is empty, an ephemeral
internal IP address will be automatically allocated from the IP range of the subnet or network configured for this
forwarding rule. An address must be specified by a literal IP address. ~> **NOTE**: While the API allows you to specify
various resource paths for an address resource instead, Terraform requires this to specifically be an IP address to
avoid needing to fetching the IP address from resource paths on refresh or unnecessary diffs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ip_<wbr>protocol</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The IP protocol to which this rule applies. Valid options are TCP, UDP, ESP, AH, SCTP or ICMP. When the load balancing
scheme is INTERNAL, only TCP and UDP are valid.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>is_<wbr>mirroring_<wbr>collector</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Indicates whether or not this load balancer can be used as a collector for packet mirroring. To prevent mirroring loops,
instances behind this load balancer will not have their traffic mirrored even if a PacketMirroring rule applies to them.
This can only be set to true for load balancers that have their loadBalancingScheme set to INTERNAL.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>label_<wbr>fingerprint</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The fingerprint used for optimistic locking of this resource. Used internally during updates.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>labels</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dict[str, str]</span>
    </dt>
    <dd>{{% md %}}Labels to apply to this forwarding rule. A list of key->value pairs.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>load_<wbr>balancing_<wbr>scheme</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}This signifies what the ForwardingRule will be used for and can be EXTERNAL, INTERNAL, or INTERNAL_MANAGED. EXTERNAL is
used for Classic Cloud VPN gateways, protocol forwarding to VMs from an external IP address, and HTTP(S), SSL Proxy, TCP
Proxy, and Network TCP/UDP load balancers. INTERNAL is used for protocol forwarding to VMs from an internal IP address,
and internal TCP/UDP load balancers. INTERNAL_MANAGED is used for internal HTTP(S) load balancers.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression
'[a-z]([-a-z0-9]*[a-z0-9])?' which means the first character must be a lowercase letter, and all following characters
must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>network</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}For internal load balancing, this field identifies the network that the load balanced IP should belong to for this
Forwarding Rule. If this field is not specified, the default network will be used. This field is only used for INTERNAL
load balancing.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>network_<wbr>tier</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The networking tier used for configuring this address. This field can take the following values: PREMIUM or STANDARD. If
this field is not specified, it is assumed to be PREMIUM.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>port_<wbr>range</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}This field is used along with the target field for TargetHttpProxy, TargetHttpsProxy, TargetSslProxy, TargetTcpProxy,
TargetVpnGateway, TargetPool, TargetInstance. Applicable only when IPProtocol is TCP, UDP, or SCTP, only packets
addressed to ports in the specified range will be forwarded to target. Forwarding rules with the same [IPAddress,
IPProtocol] pair must have disjoint port ranges. Some types of forwarding target have constraints on the acceptable
ports: * TargetHttpProxy: 80, 8080 * TargetHttpsProxy: 443 * TargetTcpProxy: 25, 43, 110, 143, 195, 443, 465, 587, 700,
993, 995, 1883, 5222 * TargetSslProxy: 25, 43, 110, 143, 195, 443, 465, 587, 700, 993, 995, 1883, 5222 *
TargetVpnGateway: 500, 4500
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ports</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}This field is used along with the backend_service field for internal load balancing. When the load balancing scheme is
INTERNAL, a single port or a comma separated list of ports can be configured. Only packets addressed to these ports will
be forwarded to the backends configured with this forwarding rule. You may specify a maximum of up to 5 ports.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>project</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>region</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}A reference to the region where the regional forwarding rule resides. This field is not applicable to global forwarding
rules.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>self_<wbr>link</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The URI of the created resource.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>service_<wbr>label</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}An optional prefix to the service name for this Forwarding Rule. If specified, will be the first label of the fully
qualified service name. The label must be 1-63 characters long, and comply with RFC1035. Specifically, the label must be
1-63 characters long and match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the first character must
be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash. This field is only used for INTERNAL load balancing.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>service_<wbr>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The internal fully qualified service name for this Forwarding Rule. This field is only used for INTERNAL load balancing.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>subnetwork</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The subnetwork that the load balanced IP should belong to for this Forwarding Rule. This field is only used for INTERNAL
load balancing. If the network specified is in auto subnet mode, this field is optional. However, if the network is in
custom subnet mode, a subnetwork must be specified.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>target</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The URL of the target resource to receive the matched traffic. The target must live in the same region as the forwarding
rule. The forwarded traffic must be of a type appropriate to the target object.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}











<h3>Package Details</h3>
<dl class="package-details">
	<dt>Repository</dt>
	<dd><a href="https://github.com/pulumi/pulumi-gcp">https://github.com/pulumi/pulumi-gcp</a></dd>
	<dt>License</dt>
	<dd>Apache-2.0</dd>
    <dt>Notes</dt>
	<dd>This Pulumi package is based on the [`google-beta` Terraform Provider](https://github.com/terraform-providers/terraform-provider-google-beta).</dd>
</dl>

