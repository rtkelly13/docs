---
title: "Module managedapplication"
title_tag: "Module managedapplication | Package @pulumi/azure | Node.js SDK"
linktitle: "managedapplication"
meta_desc: "Explore members of the managedapplication module in the @pulumi/azure package."
git_sha: "07e80562f67cd754d1b9796451dfabe4a05037b9"
---

<!-- WARNING: this page was generated by a tool. Do not edit it by hand. -->
<!-- To change it, please see https://github.com/pulumi/docs/tree/master/tools/tscdocgen. -->


> This provider is a derived work of the [Terraform Provider](https://github.com/terraform-providers/terraform-provider-azurerm)
> distributed under [MPL 2.0](https://www.mozilla.org/en-US/MPL/2.0/). If you encounter a bug or missing feature,
> first check the [`pulumi/pulumi-azure` repo](https://github.com/pulumi/pulumi-azure/issues); however, if that doesn't turn up anything,
> please consult the source [`terraform-providers/terraform-provider-azurerm` repo](https://github.com/terraform-providers/terraform-provider-azurerm/issues).





<h3>Resources</h3>
<ul class="api">
    <li><a href="#Definition"><span class="symbol resource"></span>Definition</a></li>
</ul>

<h3>Functions</h3>
<ul class="api">
    <li><a href="#getDefinition"><span class="symbol function"></span>getDefinition</a></li>
</ul>

<h3>Others</h3>
<ul class="api">
    <li><a href="#DefinitionArgs"><span class="symbol api"></span>DefinitionArgs</a></li>
    <li><a href="#DefinitionState"><span class="symbol api"></span>DefinitionState</a></li>
    <li><a href="#GetDefinitionArgs"><span class="symbol api"></span>GetDefinitionArgs</a></li>
    <li><a href="#GetDefinitionResult"><span class="symbol api"></span>GetDefinitionResult</a></li>
</ul>


<h2 id="resources">Resources</h2>
<h3 class="pdoc-module-header" id="Definition" data-link-title="Definition">
    <a href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/definition.ts#L15">
        Resource <strong>Definition</strong>
    </a>
</h3>

<pre class="highlight"><code><span class='kr'>class</span> <span class='nx'>Definition</span> <span class='kr'>extends</span> <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResource'>CustomResource</a></code></pre>

Manages a Managed Application Definition.

> This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/r/managed_application_definition.html.markdown.

<h4 class="pdoc-member-header" id="Definition-constructor">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/definition.ts#L89"> <b>constructor</b></a>
</h4>


<pre class="highlight"><code><span class='kd'></span><span class='kd'>new</span> Definition(name: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>, args: <a href='#DefinitionArgs'>DefinitionArgs</a>, opts?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions'>pulumi.CustomResourceOptions</a>)</code></pre>


Create a Definition resource with the given unique name, arguments, and options.

* `name` The _unique_ name of the resource.
* `args` The arguments to use to populate this resource&#39;s properties.
* `opts` A bag of options that control this resource&#39;s behavior.

<h4 class="pdoc-member-header" id="Definition-get">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/definition.ts#L24">method <b>get</b></a>
</h4>


<pre class="highlight"><code><span class='kd'>public static </span>get(name: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>, id: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#ID'>pulumi.ID</a>&gt;, state?: <a href='#DefinitionState'>DefinitionState</a>, opts?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions'>pulumi.CustomResourceOptions</a>): <a href='#Definition'>Definition</a></code></pre>


Get an existing Definition resource's state with the given name, ID, and optional extra
properties used to qualify the lookup.

<h4 class="pdoc-member-header" id="Definition-getProvider">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/definition.ts#L15">method <b>getProvider</b></a>
</h4>


<pre class="highlight"><code><span class='kd'></span>getProvider(moduleMember: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>): <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#ProviderResource'>ProviderResource</a> | <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined'>undefined</a></span></code></pre>

<h4 class="pdoc-member-header" id="Definition-isInstance">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/definition.ts#L35">method <b>isInstance</b></a>
</h4>


<pre class="highlight"><code><span class='kd'>public static </span>isInstance(obj: <span class='kd'><a href='https://www.typescriptlang.org/docs/handbook/basic-types.html#any'>any</a></span>): obj is Definition</code></pre>


Returns true if the given object is an instance of Definition.  This is designed to work even
when multiple copies of the Pulumi SDK have been loaded into the same process.

<h4 class="pdoc-member-header" id="Definition-authorizations">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/definition.ts#L45">property <b>authorizations</b></a>
</h4>

<pre class="highlight"><code><span class='kd'>public </span>authorizations: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/azure/types/output/#DefinitionAuthorization'>DefinitionAuthorization</a>[] | <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined'>undefined</a></span>&gt;;</code></pre>

One or more `authorization` block defined below.

<h4 class="pdoc-member-header" id="Definition-createUiDefinition">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/definition.ts#L49">property <b>createUiDefinition</b></a>
</h4>

<pre class="highlight"><code><span class='kd'>public </span>createUiDefinition: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span> | <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined'>undefined</a></span>&gt;;</code></pre>

Specifies the `createUiDefinition` json for the backing template with `Microsoft.Solutions/applications` resource.

<h4 class="pdoc-member-header" id="Definition-description">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/definition.ts#L53">property <b>description</b></a>
</h4>

<pre class="highlight"><code><span class='kd'>public </span>description: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span> | <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined'>undefined</a></span>&gt;;</code></pre>

Specifies the managed application definition description.

<h4 class="pdoc-member-header" id="Definition-displayName">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/definition.ts#L57">property <b>displayName</b></a>
</h4>

<pre class="highlight"><code><span class='kd'>public </span>displayName: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

Specifies the managed application definition display name.

<h4 class="pdoc-member-header" id="Definition-id">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/definition.ts#L15">property <b>id</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>id: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>Output</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#ID'>ID</a>&gt;;</code></pre>

id is the provider-assigned unique ID for this managed resource.  It is set during
deployments and may be missing (undefined) during planning phases.

<h4 class="pdoc-member-header" id="Definition-location">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/definition.ts#L61">property <b>location</b></a>
</h4>

<pre class="highlight"><code><span class='kd'>public </span>location: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.

<h4 class="pdoc-member-header" id="Definition-lockLevel">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/definition.ts#L65">property <b>lockLevel</b></a>
</h4>

<pre class="highlight"><code><span class='kd'>public </span>lockLevel: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

Specifies the managed application lock level. Valid values include `CanNotDelete`, `None`, `ReadOnly`. Changing this forces a new resource to be created.

<h4 class="pdoc-member-header" id="Definition-mainTemplate">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/definition.ts#L69">property <b>mainTemplate</b></a>
</h4>

<pre class="highlight"><code><span class='kd'>public </span>mainTemplate: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span> | <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined'>undefined</a></span>&gt;;</code></pre>

Specifies the inline main template json which has resources to be provisioned.

<h4 class="pdoc-member-header" id="Definition-name">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/definition.ts#L73">property <b>name</b></a>
</h4>

<pre class="highlight"><code><span class='kd'>public </span>name: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

Specifies the name of the Managed Application Definition. Changing this forces a new resource to be created.

<h4 class="pdoc-member-header" id="Definition-packageEnabled">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/definition.ts#L77">property <b>packageEnabled</b></a>
</h4>

<pre class="highlight"><code><span class='kd'>public </span>packageEnabled: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean'>boolean</a></span> | <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined'>undefined</a></span>&gt;;</code></pre>

Is the package enabled? Defaults to `true`.

<h4 class="pdoc-member-header" id="Definition-packageFileUri">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/definition.ts#L81">property <b>packageFileUri</b></a>
</h4>

<pre class="highlight"><code><span class='kd'>public </span>packageFileUri: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span> | <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined'>undefined</a></span>&gt;;</code></pre>

Specifies the managed application definition package file Uri.

<h4 class="pdoc-member-header" id="Definition-resourceGroupName">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/definition.ts#L85">property <b>resourceGroupName</b></a>
</h4>

<pre class="highlight"><code><span class='kd'>public </span>resourceGroupName: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

The name of the Resource Group where the Managed Application Definition should exist. Changing this forces a new resource to be created.

<h4 class="pdoc-member-header" id="Definition-tags">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/definition.ts#L89">property <b>tags</b></a>
</h4>

<pre class="highlight"><code><span class='kd'>public </span>tags: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>pulumi.Output</a>&lt;{[key: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>]: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>} | <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined'>undefined</a></span>&gt;;</code></pre>

A mapping of tags to assign to the resource.

<h4 class="pdoc-member-header" id="Definition-urn">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/definition.ts#L15">property <b>urn</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>urn: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Output'>Output</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#URN'>URN</a>&gt;;</code></pre>

urn is the stable logical URN used to distinctly address a resource, both before and after
deployments.


<h2 id="functions">Functions</h2>
<h3 class="pdoc-module-header" id="getDefinition" data-link-title="getDefinition">
    <a href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/getDefinition.ts#L15">
        Function <strong>getDefinition</strong>
    </a>
</h3>


<pre class="highlight"><code><span class='kd'></span>getDefinition(args: <a href='#GetDefinitionArgs'>GetDefinitionArgs</a>, opts?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#InvokeOptions'>pulumi.InvokeOptions</a>): <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise'>Promise</a>&lt;<a href='#GetDefinitionResult'>GetDefinitionResult</a>&gt;</code></pre>


Uses this data source to access information about an existing Managed Application Definition.

> This content is derived from https://github.com/terraform-providers/terraform-provider-azurerm/blob/master/website/docs/d/managed_application_definition.html.markdown.


<h2 id="apis">Others</h2>
<h3 class="pdoc-module-header" id="DefinitionArgs" data-link-title="DefinitionArgs">
    <a href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/definition.ts#L207">
        interface <strong>DefinitionArgs</strong>
    </a>
</h3>

<pre class="highlight"><code><span class='kr'>interface</span> <span class='nx'>DefinitionArgs</span></code></pre>

The set of arguments for constructing a Definition resource.

<h4 class="pdoc-member-header" id="DefinitionArgs-authorizations">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/definition.ts#L211">property <b>authorizations</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>authorizations?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/azure/types/input/#DefinitionAuthorization'>DefinitionAuthorization</a>&gt;[]&gt;;</code></pre>

One or more `authorization` block defined below.

<h4 class="pdoc-member-header" id="DefinitionArgs-createUiDefinition">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/definition.ts#L215">property <b>createUiDefinition</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>createUiDefinition?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

Specifies the `createUiDefinition` json for the backing template with `Microsoft.Solutions/applications` resource.

<h4 class="pdoc-member-header" id="DefinitionArgs-description">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/definition.ts#L219">property <b>description</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>description?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

Specifies the managed application definition description.

<h4 class="pdoc-member-header" id="DefinitionArgs-displayName">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/definition.ts#L223">property <b>displayName</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>displayName: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

Specifies the managed application definition display name.

<h4 class="pdoc-member-header" id="DefinitionArgs-location">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/definition.ts#L227">property <b>location</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>location?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.

<h4 class="pdoc-member-header" id="DefinitionArgs-lockLevel">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/definition.ts#L231">property <b>lockLevel</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>lockLevel: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

Specifies the managed application lock level. Valid values include `CanNotDelete`, `None`, `ReadOnly`. Changing this forces a new resource to be created.

<h4 class="pdoc-member-header" id="DefinitionArgs-mainTemplate">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/definition.ts#L235">property <b>mainTemplate</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>mainTemplate?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

Specifies the inline main template json which has resources to be provisioned.

<h4 class="pdoc-member-header" id="DefinitionArgs-name">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/definition.ts#L239">property <b>name</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>name?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

Specifies the name of the Managed Application Definition. Changing this forces a new resource to be created.

<h4 class="pdoc-member-header" id="DefinitionArgs-packageEnabled">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/definition.ts#L243">property <b>packageEnabled</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>packageEnabled?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean'>boolean</a></span>&gt;;</code></pre>

Is the package enabled? Defaults to `true`.

<h4 class="pdoc-member-header" id="DefinitionArgs-packageFileUri">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/definition.ts#L247">property <b>packageFileUri</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>packageFileUri?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

Specifies the managed application definition package file Uri.

<h4 class="pdoc-member-header" id="DefinitionArgs-resourceGroupName">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/definition.ts#L251">property <b>resourceGroupName</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>resourceGroupName: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

The name of the Resource Group where the Managed Application Definition should exist. Changing this forces a new resource to be created.

<h4 class="pdoc-member-header" id="DefinitionArgs-tags">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/definition.ts#L255">property <b>tags</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>tags?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;{[key: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>]: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;}&gt;;</code></pre>

A mapping of tags to assign to the resource.

<h3 class="pdoc-module-header" id="DefinitionState" data-link-title="DefinitionState">
    <a href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/definition.ts#L153">
        interface <strong>DefinitionState</strong>
    </a>
</h3>

<pre class="highlight"><code><span class='kr'>interface</span> <span class='nx'>DefinitionState</span></code></pre>

Input properties used for looking up and filtering Definition resources.

<h4 class="pdoc-member-header" id="DefinitionState-authorizations">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/definition.ts#L157">property <b>authorizations</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>authorizations?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<a href='/docs/reference/pkg/nodejs/pulumi/azure/types/input/#DefinitionAuthorization'>DefinitionAuthorization</a>&gt;[]&gt;;</code></pre>

One or more `authorization` block defined below.

<h4 class="pdoc-member-header" id="DefinitionState-createUiDefinition">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/definition.ts#L161">property <b>createUiDefinition</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>createUiDefinition?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

Specifies the `createUiDefinition` json for the backing template with `Microsoft.Solutions/applications` resource.

<h4 class="pdoc-member-header" id="DefinitionState-description">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/definition.ts#L165">property <b>description</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>description?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

Specifies the managed application definition description.

<h4 class="pdoc-member-header" id="DefinitionState-displayName">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/definition.ts#L169">property <b>displayName</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>displayName?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

Specifies the managed application definition display name.

<h4 class="pdoc-member-header" id="DefinitionState-location">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/definition.ts#L173">property <b>location</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>location?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.

<h4 class="pdoc-member-header" id="DefinitionState-lockLevel">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/definition.ts#L177">property <b>lockLevel</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>lockLevel?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

Specifies the managed application lock level. Valid values include `CanNotDelete`, `None`, `ReadOnly`. Changing this forces a new resource to be created.

<h4 class="pdoc-member-header" id="DefinitionState-mainTemplate">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/definition.ts#L181">property <b>mainTemplate</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>mainTemplate?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

Specifies the inline main template json which has resources to be provisioned.

<h4 class="pdoc-member-header" id="DefinitionState-name">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/definition.ts#L185">property <b>name</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>name?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

Specifies the name of the Managed Application Definition. Changing this forces a new resource to be created.

<h4 class="pdoc-member-header" id="DefinitionState-packageEnabled">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/definition.ts#L189">property <b>packageEnabled</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>packageEnabled?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean'>boolean</a></span>&gt;;</code></pre>

Is the package enabled? Defaults to `true`.

<h4 class="pdoc-member-header" id="DefinitionState-packageFileUri">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/definition.ts#L193">property <b>packageFileUri</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>packageFileUri?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

Specifies the managed application definition package file Uri.

<h4 class="pdoc-member-header" id="DefinitionState-resourceGroupName">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/definition.ts#L197">property <b>resourceGroupName</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>resourceGroupName?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;;</code></pre>

The name of the Resource Group where the Managed Application Definition should exist. Changing this forces a new resource to be created.

<h4 class="pdoc-member-header" id="DefinitionState-tags">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/definition.ts#L201">property <b>tags</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>tags?: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;{[key: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>]: <a href='/docs/reference/pkg/nodejs/pulumi/pulumi/#Input'>pulumi.Input</a>&lt;<span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>&gt;}&gt;;</code></pre>

A mapping of tags to assign to the resource.

<h3 class="pdoc-module-header" id="GetDefinitionArgs" data-link-title="GetDefinitionArgs">
    <a href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/getDefinition.ts#L32">
        interface <strong>GetDefinitionArgs</strong>
    </a>
</h3>

<pre class="highlight"><code><span class='kr'>interface</span> <span class='nx'>GetDefinitionArgs</span></code></pre>

A collection of arguments for invoking getDefinition.

<h4 class="pdoc-member-header" id="GetDefinitionArgs-name">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/getDefinition.ts#L36">property <b>name</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>name: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>;</code></pre>

Specifies the name of the Managed Application Definition.

<h4 class="pdoc-member-header" id="GetDefinitionArgs-resourceGroupName">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/getDefinition.ts#L40">property <b>resourceGroupName</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>resourceGroupName: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>;</code></pre>

Specifies the name of the Resource Group where this Managed Application Definition exists.

<h3 class="pdoc-module-header" id="GetDefinitionResult" data-link-title="GetDefinitionResult">
    <a href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/getDefinition.ts#L46">
        interface <strong>GetDefinitionResult</strong>
    </a>
</h3>

<pre class="highlight"><code><span class='kr'>interface</span> <span class='nx'>GetDefinitionResult</span></code></pre>

A collection of values returned by getDefinition.

<h4 class="pdoc-member-header" id="GetDefinitionResult-id">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/getDefinition.ts#L53">property <b>id</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>id: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>;</code></pre>

id is the provider-assigned unique ID for this managed resource.

<h4 class="pdoc-member-header" id="GetDefinitionResult-location">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/getDefinition.ts#L47">property <b>location</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>location: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>;</code></pre>
<h4 class="pdoc-member-header" id="GetDefinitionResult-name">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/getDefinition.ts#L48">property <b>name</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>name: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>;</code></pre>
<h4 class="pdoc-member-header" id="GetDefinitionResult-resourceGroupName">
<a class="pdoc-child-name" href="https://github.com/pulumi/pulumi-azure/blob/{{< param git_sha >}}/sdk/nodejs/managedapplication/getDefinition.ts#L49">property <b>resourceGroupName</b></a>
</h4>

<pre class="highlight"><code><span class='kd'></span>resourceGroupName: <span class='kd'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'>string</a></span>;</code></pre>
