
---
title: "VappEntity"
block_external_search_index: true
---






## Create a VappEntity Resource

{{< chooser language "javascript,typescript,python,go,csharp" / >}}

{{% choosable language nodejs %}}
<div class="highlight"><pre class="chroma"><code class="language-typescript" data-lang="typescript"><span class="k">new </span><span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/vsphere/#VappEntity">VappEntity</a></span><span class="p">(</span><span class="nx">name</span>: <span class="nx"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span><span class="p">, </span><span class="nx">args</span>: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/vsphere/#VappEntityArgs">VappEntityArgs</a></span><span class="p">, </span><span class="nx">opts</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions">CustomResourceOptions</a></span><span class="p">);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language python %}}
<div class="highlight"><pre class="chroma"><code class="language-python" data-lang="python"><span class="k">def </span><span class="nf">VappEntity</span><span class="p">(resource_name, opts=None, </span>container_id=None<span class="p">, </span>custom_attributes=None<span class="p">, </span>start_action=None<span class="p">, </span>start_delay=None<span class="p">, </span>start_order=None<span class="p">, </span>stop_action=None<span class="p">, </span>stop_delay=None<span class="p">, </span>tags=None<span class="p">, </span>target_id=None<span class="p">, </span>wait_for_guest=None<span class="p">, __props__=None);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language go %}}
<div class="highlight"><pre class="chroma"><code class="language-go" data-lang="go"><span class="k">func </span>NewVappEntity<span class="p">(</span><span class="nx">ctx</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#Context">Context</a></span><span class="p">, </span><span class="nx">name</span> <span class="nx"><a href="https://golang.org/pkg/builtin/#string">string</a></span><span class="p">, </span><span class="nx">args</span> <span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-vsphere/sdk/v2/go/vsphere/?tab=doc#VappEntityArgs">VappEntityArgs</a></span><span class="p">, </span><span class="nx">opts</span> ...<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#ResourceOption">ResourceOption</a></span><span class="p">) (*<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-vsphere/sdk/v2/go/vsphere/?tab=doc#VappEntity">VappEntity</a></span>, error)</span></code></pre></div>
{{% /choosable %}}

{{% choosable language csharp %}}
<div class="highlight"><pre class="chroma"><code class="language-csharp" data-lang="csharp"><span class="k">public </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Vsphere/Pulumi.Vsphere.VappEntity.html">VappEntity</a></span><span class="p">(</span><span class="nx"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span> <span class="nx">name<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Vsphere/Pulumi.VSphere.VappEntityArgs.html">VappEntityArgs</a></span> <span class="nx">args<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.CustomResourceOptions.html">CustomResourceOptions</a></span>? <span class="nx">opts = null<span class="p">)</span></code></pre></div>
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
        <span>Container<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}[Managed object ID|docs-about-morefs] of the vApp
container the entity is a member of.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Target<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}[Managed object ID|docs-about-morefs] of the entity
to power on or power off. This can be a virtual machine or a vApp.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Custom<wbr>Attributes</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dictionary&lt;string, string&gt;</span>
    </dt>
    <dd>{{% md %}}A list of custom attributes to set on this resource.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Start<wbr>Action</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}How to start the entity. Valid settings are none
or powerOn. If set to none, then the entity does not participate in auto-start.
Default: powerOn
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Start<wbr>Delay</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}Delay in seconds before continuing with the next
entity in the order of entities to be started. Default: 120
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Start<wbr>Order</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}Order to start and stop target in vApp. Default: 1
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Stop<wbr>Action</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Defines the stop action for the entity. Can be set
to none, powerOff, guestShutdown, or suspend. If set to none, then the entity
does not participate in auto-stop. Default: powerOff
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Stop<wbr>Delay</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}Delay in seconds before continuing with the next
entity in the order sequence. This is only used if the stopAction is
guestShutdown. Default: 120
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Tags</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}A list of tag IDs to apply to this object.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Wait<wbr>For<wbr>Guest</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Determines if the VM should be marked as being
started when VMware Tools are ready instead of waiting for `start_delay`. This
property has no effect for vApps. Default: false
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Container<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}[Managed object ID|docs-about-morefs] of the vApp
container the entity is a member of.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Target<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}[Managed object ID|docs-about-morefs] of the entity
to power on or power off. This can be a virtual machine or a vApp.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Custom<wbr>Attributes</span>
        <span class="property-indicator"></span>
        <span class="property-type">map[string]string</span>
    </dt>
    <dd>{{% md %}}A list of custom attributes to set on this resource.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Start<wbr>Action</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}How to start the entity. Valid settings are none
or powerOn. If set to none, then the entity does not participate in auto-start.
Default: powerOn
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Start<wbr>Delay</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}Delay in seconds before continuing with the next
entity in the order of entities to be started. Default: 120
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Start<wbr>Order</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}Order to start and stop target in vApp. Default: 1
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Stop<wbr>Action</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Defines the stop action for the entity. Can be set
to none, powerOff, guestShutdown, or suspend. If set to none, then the entity
does not participate in auto-stop. Default: powerOff
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Stop<wbr>Delay</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}Delay in seconds before continuing with the next
entity in the order sequence. This is only used if the stopAction is
guestShutdown. Default: 120
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Tags</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}A list of tag IDs to apply to this object.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Wait<wbr>For<wbr>Guest</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Determines if the VM should be marked as being
started when VMware Tools are ready instead of waiting for `start_delay`. This
property has no effect for vApps. Default: false
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>container<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}[Managed object ID|docs-about-morefs] of the vApp
container the entity is a member of.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>target<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}[Managed object ID|docs-about-morefs] of the entity
to power on or power off. This can be a virtual machine or a vApp.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>custom<wbr>Attributes</span>
        <span class="property-indicator"></span>
        <span class="property-type">{[key: string]: string}</span>
    </dt>
    <dd>{{% md %}}A list of custom attributes to set on this resource.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>start<wbr>Action</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}How to start the entity. Valid settings are none
or powerOn. If set to none, then the entity does not participate in auto-start.
Default: powerOn
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>start<wbr>Delay</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}Delay in seconds before continuing with the next
entity in the order of entities to be started. Default: 120
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>start<wbr>Order</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}Order to start and stop target in vApp. Default: 1
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>stop<wbr>Action</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Defines the stop action for the entity. Can be set
to none, powerOff, guestShutdown, or suspend. If set to none, then the entity
does not participate in auto-stop. Default: powerOff
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>stop<wbr>Delay</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}Delay in seconds before continuing with the next
entity in the order sequence. This is only used if the stopAction is
guestShutdown. Default: 120
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>tags</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}A list of tag IDs to apply to this object.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>wait<wbr>For<wbr>Guest</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Determines if the VM should be marked as being
started when VMware Tools are ready instead of waiting for `start_delay`. This
property has no effect for vApps. Default: false
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>container_<wbr>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}[Managed object ID|docs-about-morefs] of the vApp
container the entity is a member of.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>target_<wbr>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}[Managed object ID|docs-about-morefs] of the entity
to power on or power off. This can be a virtual machine or a vApp.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>custom_<wbr>attributes</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dict[str, str]</span>
    </dt>
    <dd>{{% md %}}A list of custom attributes to set on this resource.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>start_<wbr>action</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}How to start the entity. Valid settings are none
or powerOn. If set to none, then the entity does not participate in auto-start.
Default: powerOn
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>start_<wbr>delay</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}Delay in seconds before continuing with the next
entity in the order of entities to be started. Default: 120
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>start_<wbr>order</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}Order to start and stop target in vApp. Default: 1
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>stop_<wbr>action</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Defines the stop action for the entity. Can be set
to none, powerOff, guestShutdown, or suspend. If set to none, then the entity
does not participate in auto-stop. Default: powerOff
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>stop_<wbr>delay</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}Delay in seconds before continuing with the next
entity in the order sequence. This is only used if the stopAction is
guestShutdown. Default: 120
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>tags</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}A list of tag IDs to apply to this object.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>wait_<wbr>for_<wbr>guest</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Determines if the VM should be marked as being
started when VMware Tools are ready instead of waiting for `start_delay`. This
property has no effect for vApps. Default: false
{{% /md %}}</dd>

</dl>
{{% /choosable %}}










## Look up an Existing VappEntity Resource

Get an existing VappEntity resource's state with the given name, ID, and optional extra properties used to qualify the lookup.

{{< chooser language "javascript,typescript,python,go,csharp  " / >}}

{{% choosable language nodejs %}}
<div class="highlight"><pre class="chroma"><code class="language-typescript" data-lang="typescript"><span class="k">public static </span><span class="nf">get</span><span class="p">(</span><span class="nx">name</span>: <span class="nx"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span><span class="p">, </span><span class="nx">id</span>: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#ID">Input&lt;ID&gt;</a></span><span class="p">, </span><span class="nx">state</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/vsphere/#VappEntityState">VappEntityState</a></span><span class="p">, </span><span class="nx">opts</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions">CustomResourceOptions</a></span><span class="p">): </span><span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/vsphere/#VappEntity">VappEntity</a></span></code></pre></div>
{{% /choosable %}}

{{% choosable language python %}}
<div class="highlight"><pre class="chroma"><code class="language-python" data-lang="python"><span class="k">static </span><span class="nf">get</span><span class="p">(resource_name, id, opts=None, </span>container_id=None<span class="p">, </span>custom_attributes=None<span class="p">, </span>start_action=None<span class="p">, </span>start_delay=None<span class="p">, </span>start_order=None<span class="p">, </span>stop_action=None<span class="p">, </span>stop_delay=None<span class="p">, </span>tags=None<span class="p">, </span>target_id=None<span class="p">, </span>wait_for_guest=None<span class="p">, __props__=None);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language go %}}
<div class="highlight"><pre class="chroma"><code class="language-go" data-lang="go"><span class="k">func </span>GetVappEntity<span class="p">(</span><span class="nx">ctx</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#Context">Context</a></span><span class="p">, </span><span class="nx">name</span> <span class="nx"><a href="https://golang.org/pkg/builtin/#string">string</a></span><span class="p">, </span><span class="nx">id</span> <span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#IDInput">IDInput</a></span><span class="p">, </span><span class="nx">state</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-vsphere/sdk/v2/go/vsphere/?tab=doc#VappEntityState">VappEntityState</a></span><span class="p">, </span><span class="nx">opts</span> ...<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#ResourceOption">ResourceOption</a></span><span class="p">) (*<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-vsphere/sdk/v2/go/vsphere/?tab=doc#VappEntity">VappEntity</a></span>, error)</span></code></pre></div>
{{% /choosable %}}

{{% choosable language csharp %}}
<div class="highlight"><pre class="chroma"><code class="language-csharp" data-lang="csharp"><span class="k">public static </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Vsphere/Pulumi.Vsphere.VappEntity.html">VappEntity</a></span><span class="nf"> Get</span><span class="p">(</span><span class="nx"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span> <span class="nx">name<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.Input.html">Input&lt;string&gt;</a></span> <span class="nx">id<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Vsphere/Pulumi.Vsphere..VappEntityState.html">VappEntityState</a></span>? <span class="nx">state<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.CustomResourceOptions.html">CustomResourceOptions</a></span>? <span class="nx">opts = null<span class="p">)</span></code></pre></div>
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
        <span>Container<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}[Managed object ID|docs-about-morefs] of the vApp
container the entity is a member of.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Custom<wbr>Attributes</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dictionary&lt;string, string&gt;</span>
    </dt>
    <dd>{{% md %}}A list of custom attributes to set on this resource.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Start<wbr>Action</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}How to start the entity. Valid settings are none
or powerOn. If set to none, then the entity does not participate in auto-start.
Default: powerOn
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Start<wbr>Delay</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}Delay in seconds before continuing with the next
entity in the order of entities to be started. Default: 120
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Start<wbr>Order</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}Order to start and stop target in vApp. Default: 1
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Stop<wbr>Action</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Defines the stop action for the entity. Can be set
to none, powerOff, guestShutdown, or suspend. If set to none, then the entity
does not participate in auto-stop. Default: powerOff
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Stop<wbr>Delay</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}Delay in seconds before continuing with the next
entity in the order sequence. This is only used if the stopAction is
guestShutdown. Default: 120
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Tags</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}A list of tag IDs to apply to this object.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Target<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}[Managed object ID|docs-about-morefs] of the entity
to power on or power off. This can be a virtual machine or a vApp.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Wait<wbr>For<wbr>Guest</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Determines if the VM should be marked as being
started when VMware Tools are ready instead of waiting for `start_delay`. This
property has no effect for vApps. Default: false
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Container<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}[Managed object ID|docs-about-morefs] of the vApp
container the entity is a member of.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Custom<wbr>Attributes</span>
        <span class="property-indicator"></span>
        <span class="property-type">map[string]string</span>
    </dt>
    <dd>{{% md %}}A list of custom attributes to set on this resource.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Start<wbr>Action</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}How to start the entity. Valid settings are none
or powerOn. If set to none, then the entity does not participate in auto-start.
Default: powerOn
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Start<wbr>Delay</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}Delay in seconds before continuing with the next
entity in the order of entities to be started. Default: 120
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Start<wbr>Order</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}Order to start and stop target in vApp. Default: 1
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Stop<wbr>Action</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Defines the stop action for the entity. Can be set
to none, powerOff, guestShutdown, or suspend. If set to none, then the entity
does not participate in auto-stop. Default: powerOff
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Stop<wbr>Delay</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}Delay in seconds before continuing with the next
entity in the order sequence. This is only used if the stopAction is
guestShutdown. Default: 120
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Tags</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}A list of tag IDs to apply to this object.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Target<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}[Managed object ID|docs-about-morefs] of the entity
to power on or power off. This can be a virtual machine or a vApp.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Wait<wbr>For<wbr>Guest</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Determines if the VM should be marked as being
started when VMware Tools are ready instead of waiting for `start_delay`. This
property has no effect for vApps. Default: false
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>container<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}[Managed object ID|docs-about-morefs] of the vApp
container the entity is a member of.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>custom<wbr>Attributes</span>
        <span class="property-indicator"></span>
        <span class="property-type">{[key: string]: string}</span>
    </dt>
    <dd>{{% md %}}A list of custom attributes to set on this resource.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>start<wbr>Action</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}How to start the entity. Valid settings are none
or powerOn. If set to none, then the entity does not participate in auto-start.
Default: powerOn
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>start<wbr>Delay</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}Delay in seconds before continuing with the next
entity in the order of entities to be started. Default: 120
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>start<wbr>Order</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}Order to start and stop target in vApp. Default: 1
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>stop<wbr>Action</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Defines the stop action for the entity. Can be set
to none, powerOff, guestShutdown, or suspend. If set to none, then the entity
does not participate in auto-stop. Default: powerOff
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>stop<wbr>Delay</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}Delay in seconds before continuing with the next
entity in the order sequence. This is only used if the stopAction is
guestShutdown. Default: 120
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>tags</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}A list of tag IDs to apply to this object.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>target<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}[Managed object ID|docs-about-morefs] of the entity
to power on or power off. This can be a virtual machine or a vApp.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>wait<wbr>For<wbr>Guest</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Determines if the VM should be marked as being
started when VMware Tools are ready instead of waiting for `start_delay`. This
property has no effect for vApps. Default: false
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>container_<wbr>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}[Managed object ID|docs-about-morefs] of the vApp
container the entity is a member of.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>custom_<wbr>attributes</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dict[str, str]</span>
    </dt>
    <dd>{{% md %}}A list of custom attributes to set on this resource.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>start_<wbr>action</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}How to start the entity. Valid settings are none
or powerOn. If set to none, then the entity does not participate in auto-start.
Default: powerOn
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>start_<wbr>delay</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}Delay in seconds before continuing with the next
entity in the order of entities to be started. Default: 120
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>start_<wbr>order</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}Order to start and stop target in vApp. Default: 1
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>stop_<wbr>action</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Defines the stop action for the entity. Can be set
to none, powerOff, guestShutdown, or suspend. If set to none, then the entity
does not participate in auto-stop. Default: powerOff
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>stop_<wbr>delay</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}Delay in seconds before continuing with the next
entity in the order sequence. This is only used if the stopAction is
guestShutdown. Default: 120
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>tags</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}A list of tag IDs to apply to this object.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>target_<wbr>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}[Managed object ID|docs-about-morefs] of the entity
to power on or power off. This can be a virtual machine or a vApp.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>wait_<wbr>for_<wbr>guest</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Determines if the VM should be marked as being
started when VMware Tools are ready instead of waiting for `start_delay`. This
property has no effect for vApps. Default: false
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

