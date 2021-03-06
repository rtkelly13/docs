
---
title: "Application"
block_external_search_index: true
---



Provides an OpsWorks application resource.

{{% examples %}}
## Example Usage
{{% example %}}

```typescript
import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as fs from "fs";

const foo_app = new aws.opsworks.Application("foo-app", {
    appSources: [{
        revision: "master",
        type: "git",
        url: "https://github.com/example.git",
    }],
    autoBundleOnDeploy: "true",
    description: "This is a Rails application",
    documentRoot: "public",
    domains: [
        "example.com",
        "sub.example.com",
    ],
    enableSsl: true,
    environments: [{
        key: "key",
        secure: false,
        value: "value",
    }],
    railsEnv: "staging",
    shortName: "foobar",
    sslConfigurations: [{
        certificate: fs.readFileSync("./foobar.crt", "utf-8"),
        privateKey: fs.readFileSync("./foobar.key", "utf-8"),
    }],
    stackId: aws_opsworks_stack_main.id,
    type: "rails",
});
```

{{% /example %}}
{{% /examples %}}



## Create a Application Resource

{{< chooser language "javascript,typescript,python,go,csharp" / >}}

{{% choosable language nodejs %}}
<div class="highlight"><pre class="chroma"><code class="language-typescript" data-lang="typescript"><span class="k">new </span><span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/aws/opsworks/#Application">Application</a></span><span class="p">(</span><span class="nx">name</span>: <span class="nx"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span><span class="p">, </span><span class="nx">args</span>: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/aws/opsworks/#ApplicationArgs">ApplicationArgs</a></span><span class="p">, </span><span class="nx">opts</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions">CustomResourceOptions</a></span><span class="p">);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language python %}}
<div class="highlight"><pre class="chroma"><code class="language-python" data-lang="python"><span class="k">def </span><span class="nf">Application</span><span class="p">(resource_name, opts=None, </span>app_sources=None<span class="p">, </span>auto_bundle_on_deploy=None<span class="p">, </span>aws_flow_ruby_settings=None<span class="p">, </span>data_source_arn=None<span class="p">, </span>data_source_database_name=None<span class="p">, </span>data_source_type=None<span class="p">, </span>description=None<span class="p">, </span>document_root=None<span class="p">, </span>domains=None<span class="p">, </span>enable_ssl=None<span class="p">, </span>environments=None<span class="p">, </span>name=None<span class="p">, </span>rails_env=None<span class="p">, </span>short_name=None<span class="p">, </span>ssl_configurations=None<span class="p">, </span>stack_id=None<span class="p">, </span>type=None<span class="p">, __props__=None);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language go %}}
<div class="highlight"><pre class="chroma"><code class="language-go" data-lang="go"><span class="k">func </span>NewApplication<span class="p">(</span><span class="nx">ctx</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#Context">Context</a></span><span class="p">, </span><span class="nx">name</span> <span class="nx"><a href="https://golang.org/pkg/builtin/#string">string</a></span><span class="p">, </span><span class="nx">args</span> <span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/opsworks?tab=doc#ApplicationArgs">ApplicationArgs</a></span><span class="p">, </span><span class="nx">opts</span> ...<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#ResourceOption">ResourceOption</a></span><span class="p">) (*<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/opsworks?tab=doc#Application">Application</a></span>, error)</span></code></pre></div>
{{% /choosable %}}

{{% choosable language csharp %}}
<div class="highlight"><pre class="chroma"><code class="language-csharp" data-lang="csharp"><span class="k">public </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Aws/Pulumi.Aws.OpsWorks.Application.html">Application</a></span><span class="p">(</span><span class="nx"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span> <span class="nx">name<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Aws/Pulumi.Aws.OpsWorks.ApplicationArgs.html">ApplicationArgs</a></span> <span class="nx">args<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.CustomResourceOptions.html">CustomResourceOptions</a></span>? <span class="nx">opts = null<span class="p">)</span></code></pre></div>
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
        <span>Stack<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The id of the stack the application will belong to.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Opsworks application type. One of `aws-flow-ruby`, `java`, `rails`, `php`, `nodejs`, `static` or `other`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>App<wbr>Sources</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#applicationappsource">List&lt;Application<wbr>App<wbr>Source<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}SCM configuration of the app as described below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Auto<wbr>Bundle<wbr>On<wbr>Deploy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Run bundle install when deploying for application of type `rails`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Aws<wbr>Flow<wbr>Ruby<wbr>Settings</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specify activity and workflow workers for your app using the aws-flow gem.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Data<wbr>Source<wbr>Arn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The data source's ARN.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Data<wbr>Source<wbr>Database<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The database name.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Data<wbr>Source<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The data source's type one of `AutoSelectOpsworksMysqlInstance`, `OpsworksMysqlInstance`, or `RdsDbInstance`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Description</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}A description of the app.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Document<wbr>Root</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Subfolder for the document root for application of type `rails`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Domains</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}A list of virtual host alias.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Enable<wbr>Ssl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Whether to enable SSL for the app. This must be set in order to let `ssl_configuration.private_key`, `ssl_configuration.certificate` and `ssl_configuration.chain` take effect.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Environments</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#applicationenvironment">List&lt;Application<wbr>Environment<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}Object to define environment variables.  Object is described below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}A human-readable name for the application.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Rails<wbr>Env</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the Rails environment for application of type `rails`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Short<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}A short, machine-readable name for the application. This can only be defined on resource creation and ignored on resource update.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ssl<wbr>Configurations</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#applicationsslconfiguration">List&lt;Application<wbr>Ssl<wbr>Configuration<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}The SSL configuration of the app. Object is described below.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Stack<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The id of the stack the application will belong to.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Opsworks application type. One of `aws-flow-ruby`, `java`, `rails`, `php`, `nodejs`, `static` or `other`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>App<wbr>Sources</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#applicationappsource">[]Application<wbr>App<wbr>Source</a></span>
    </dt>
    <dd>{{% md %}}SCM configuration of the app as described below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Auto<wbr>Bundle<wbr>On<wbr>Deploy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Run bundle install when deploying for application of type `rails`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Aws<wbr>Flow<wbr>Ruby<wbr>Settings</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specify activity and workflow workers for your app using the aws-flow gem.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Data<wbr>Source<wbr>Arn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The data source's ARN.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Data<wbr>Source<wbr>Database<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The database name.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Data<wbr>Source<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The data source's type one of `AutoSelectOpsworksMysqlInstance`, `OpsworksMysqlInstance`, or `RdsDbInstance`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Description</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}A description of the app.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Document<wbr>Root</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Subfolder for the document root for application of type `rails`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Domains</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}A list of virtual host alias.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Enable<wbr>Ssl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Whether to enable SSL for the app. This must be set in order to let `ssl_configuration.private_key`, `ssl_configuration.certificate` and `ssl_configuration.chain` take effect.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Environments</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#applicationenvironment">[]Application<wbr>Environment</a></span>
    </dt>
    <dd>{{% md %}}Object to define environment variables.  Object is described below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}A human-readable name for the application.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Rails<wbr>Env</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the Rails environment for application of type `rails`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Short<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}A short, machine-readable name for the application. This can only be defined on resource creation and ignored on resource update.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ssl<wbr>Configurations</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#applicationsslconfiguration">[]Application<wbr>Ssl<wbr>Configuration</a></span>
    </dt>
    <dd>{{% md %}}The SSL configuration of the app. Object is described below.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>stack<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The id of the stack the application will belong to.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Opsworks application type. One of `aws-flow-ruby`, `java`, `rails`, `php`, `nodejs`, `static` or `other`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>app<wbr>Sources</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#applicationappsource">Application<wbr>App<wbr>Source[]</a></span>
    </dt>
    <dd>{{% md %}}SCM configuration of the app as described below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>auto<wbr>Bundle<wbr>On<wbr>Deploy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Run bundle install when deploying for application of type `rails`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>aws<wbr>Flow<wbr>Ruby<wbr>Settings</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specify activity and workflow workers for your app using the aws-flow gem.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>data<wbr>Source<wbr>Arn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The data source's ARN.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>data<wbr>Source<wbr>Database<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The database name.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>data<wbr>Source<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The data source's type one of `AutoSelectOpsworksMysqlInstance`, `OpsworksMysqlInstance`, or `RdsDbInstance`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>description</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}A description of the app.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>document<wbr>Root</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Subfolder for the document root for application of type `rails`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>domains</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}A list of virtual host alias.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>enable<wbr>Ssl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Whether to enable SSL for the app. This must be set in order to let `ssl_configuration.private_key`, `ssl_configuration.certificate` and `ssl_configuration.chain` take effect.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>environments</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#applicationenvironment">Application<wbr>Environment[]</a></span>
    </dt>
    <dd>{{% md %}}Object to define environment variables.  Object is described below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}A human-readable name for the application.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>rails<wbr>Env</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the Rails environment for application of type `rails`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>short<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}A short, machine-readable name for the application. This can only be defined on resource creation and ignored on resource update.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ssl<wbr>Configurations</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#applicationsslconfiguration">Application<wbr>Ssl<wbr>Configuration[]</a></span>
    </dt>
    <dd>{{% md %}}The SSL configuration of the app. Object is described below.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>stack_<wbr>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The id of the stack the application will belong to.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Opsworks application type. One of `aws-flow-ruby`, `java`, `rails`, `php`, `nodejs`, `static` or `other`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>app_<wbr>sources</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#applicationappsource">List[Application<wbr>App<wbr>Source]</a></span>
    </dt>
    <dd>{{% md %}}SCM configuration of the app as described below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>auto_<wbr>bundle_<wbr>on_<wbr>deploy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Run bundle install when deploying for application of type `rails`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>aws_<wbr>flow_<wbr>ruby_<wbr>settings</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specify activity and workflow workers for your app using the aws-flow gem.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>data_<wbr>source_<wbr>arn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The data source's ARN.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>data_<wbr>source_<wbr>database_<wbr>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The database name.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>data_<wbr>source_<wbr>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The data source's type one of `AutoSelectOpsworksMysqlInstance`, `OpsworksMysqlInstance`, or `RdsDbInstance`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>description</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}A description of the app.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>document_<wbr>root</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Subfolder for the document root for application of type `rails`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>domains</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}A list of virtual host alias.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>enable_<wbr>ssl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Whether to enable SSL for the app. This must be set in order to let `ssl_configuration.private_key`, `ssl_configuration.certificate` and `ssl_configuration.chain` take effect.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>environments</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#applicationenvironment">List[Application<wbr>Environment]</a></span>
    </dt>
    <dd>{{% md %}}Object to define environment variables.  Object is described below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}A human-readable name for the application.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>rails_<wbr>env</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the Rails environment for application of type `rails`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>short_<wbr>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}A short, machine-readable name for the application. This can only be defined on resource creation and ignored on resource update.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ssl_<wbr>configurations</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#applicationsslconfiguration">List[Application<wbr>Ssl<wbr>Configuration]</a></span>
    </dt>
    <dd>{{% md %}}The SSL configuration of the app. Object is described below.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}










## Look up an Existing Application Resource

Get an existing Application resource's state with the given name, ID, and optional extra properties used to qualify the lookup.

{{< chooser language "javascript,typescript,python,go,csharp  " / >}}

{{% choosable language nodejs %}}
<div class="highlight"><pre class="chroma"><code class="language-typescript" data-lang="typescript"><span class="k">public static </span><span class="nf">get</span><span class="p">(</span><span class="nx">name</span>: <span class="nx"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span><span class="p">, </span><span class="nx">id</span>: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#ID">Input&lt;ID&gt;</a></span><span class="p">, </span><span class="nx">state</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/aws/opsworks/#ApplicationState">ApplicationState</a></span><span class="p">, </span><span class="nx">opts</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions">CustomResourceOptions</a></span><span class="p">): </span><span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/aws/opsworks/#Application">Application</a></span></code></pre></div>
{{% /choosable %}}

{{% choosable language python %}}
<div class="highlight"><pre class="chroma"><code class="language-python" data-lang="python"><span class="k">static </span><span class="nf">get</span><span class="p">(resource_name, id, opts=None, </span>app_sources=None<span class="p">, </span>auto_bundle_on_deploy=None<span class="p">, </span>aws_flow_ruby_settings=None<span class="p">, </span>data_source_arn=None<span class="p">, </span>data_source_database_name=None<span class="p">, </span>data_source_type=None<span class="p">, </span>description=None<span class="p">, </span>document_root=None<span class="p">, </span>domains=None<span class="p">, </span>enable_ssl=None<span class="p">, </span>environments=None<span class="p">, </span>name=None<span class="p">, </span>rails_env=None<span class="p">, </span>short_name=None<span class="p">, </span>ssl_configurations=None<span class="p">, </span>stack_id=None<span class="p">, </span>type=None<span class="p">, __props__=None);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language go %}}
<div class="highlight"><pre class="chroma"><code class="language-go" data-lang="go"><span class="k">func </span>GetApplication<span class="p">(</span><span class="nx">ctx</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#Context">Context</a></span><span class="p">, </span><span class="nx">name</span> <span class="nx"><a href="https://golang.org/pkg/builtin/#string">string</a></span><span class="p">, </span><span class="nx">id</span> <span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#IDInput">IDInput</a></span><span class="p">, </span><span class="nx">state</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/opsworks?tab=doc#ApplicationState">ApplicationState</a></span><span class="p">, </span><span class="nx">opts</span> ...<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#ResourceOption">ResourceOption</a></span><span class="p">) (*<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/opsworks?tab=doc#Application">Application</a></span>, error)</span></code></pre></div>
{{% /choosable %}}

{{% choosable language csharp %}}
<div class="highlight"><pre class="chroma"><code class="language-csharp" data-lang="csharp"><span class="k">public static </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Aws/Pulumi.Aws.OpsWorks.Application.html">Application</a></span><span class="nf"> Get</span><span class="p">(</span><span class="nx"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span> <span class="nx">name<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.Input.html">Input&lt;string&gt;</a></span> <span class="nx">id<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Aws/Pulumi.Aws.OpsWorks.ApplicationState.html">ApplicationState</a></span>? <span class="nx">state<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.CustomResourceOptions.html">CustomResourceOptions</a></span>? <span class="nx">opts = null<span class="p">)</span></code></pre></div>
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
        <span>App<wbr>Sources</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#applicationappsource">List&lt;Application<wbr>App<wbr>Source<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}SCM configuration of the app as described below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Auto<wbr>Bundle<wbr>On<wbr>Deploy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Run bundle install when deploying for application of type `rails`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Aws<wbr>Flow<wbr>Ruby<wbr>Settings</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specify activity and workflow workers for your app using the aws-flow gem.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Data<wbr>Source<wbr>Arn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The data source's ARN.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Data<wbr>Source<wbr>Database<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The database name.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Data<wbr>Source<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The data source's type one of `AutoSelectOpsworksMysqlInstance`, `OpsworksMysqlInstance`, or `RdsDbInstance`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Description</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}A description of the app.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Document<wbr>Root</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Subfolder for the document root for application of type `rails`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Domains</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}A list of virtual host alias.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Enable<wbr>Ssl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Whether to enable SSL for the app. This must be set in order to let `ssl_configuration.private_key`, `ssl_configuration.certificate` and `ssl_configuration.chain` take effect.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Environments</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#applicationenvironment">List&lt;Application<wbr>Environment<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}Object to define environment variables.  Object is described below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}A human-readable name for the application.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Rails<wbr>Env</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the Rails environment for application of type `rails`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Short<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}A short, machine-readable name for the application. This can only be defined on resource creation and ignored on resource update.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ssl<wbr>Configurations</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#applicationsslconfiguration">List&lt;Application<wbr>Ssl<wbr>Configuration<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}The SSL configuration of the app. Object is described below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Stack<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The id of the stack the application will belong to.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Opsworks application type. One of `aws-flow-ruby`, `java`, `rails`, `php`, `nodejs`, `static` or `other`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>App<wbr>Sources</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#applicationappsource">[]Application<wbr>App<wbr>Source</a></span>
    </dt>
    <dd>{{% md %}}SCM configuration of the app as described below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Auto<wbr>Bundle<wbr>On<wbr>Deploy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Run bundle install when deploying for application of type `rails`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Aws<wbr>Flow<wbr>Ruby<wbr>Settings</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specify activity and workflow workers for your app using the aws-flow gem.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Data<wbr>Source<wbr>Arn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The data source's ARN.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Data<wbr>Source<wbr>Database<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The database name.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Data<wbr>Source<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The data source's type one of `AutoSelectOpsworksMysqlInstance`, `OpsworksMysqlInstance`, or `RdsDbInstance`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Description</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}A description of the app.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Document<wbr>Root</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Subfolder for the document root for application of type `rails`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Domains</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}A list of virtual host alias.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Enable<wbr>Ssl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Whether to enable SSL for the app. This must be set in order to let `ssl_configuration.private_key`, `ssl_configuration.certificate` and `ssl_configuration.chain` take effect.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Environments</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#applicationenvironment">[]Application<wbr>Environment</a></span>
    </dt>
    <dd>{{% md %}}Object to define environment variables.  Object is described below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}A human-readable name for the application.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Rails<wbr>Env</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the Rails environment for application of type `rails`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Short<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}A short, machine-readable name for the application. This can only be defined on resource creation and ignored on resource update.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ssl<wbr>Configurations</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#applicationsslconfiguration">[]Application<wbr>Ssl<wbr>Configuration</a></span>
    </dt>
    <dd>{{% md %}}The SSL configuration of the app. Object is described below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Stack<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The id of the stack the application will belong to.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Opsworks application type. One of `aws-flow-ruby`, `java`, `rails`, `php`, `nodejs`, `static` or `other`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>app<wbr>Sources</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#applicationappsource">Application<wbr>App<wbr>Source[]</a></span>
    </dt>
    <dd>{{% md %}}SCM configuration of the app as described below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>auto<wbr>Bundle<wbr>On<wbr>Deploy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Run bundle install when deploying for application of type `rails`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>aws<wbr>Flow<wbr>Ruby<wbr>Settings</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specify activity and workflow workers for your app using the aws-flow gem.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>data<wbr>Source<wbr>Arn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The data source's ARN.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>data<wbr>Source<wbr>Database<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The database name.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>data<wbr>Source<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The data source's type one of `AutoSelectOpsworksMysqlInstance`, `OpsworksMysqlInstance`, or `RdsDbInstance`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>description</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}A description of the app.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>document<wbr>Root</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Subfolder for the document root for application of type `rails`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>domains</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}A list of virtual host alias.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>enable<wbr>Ssl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Whether to enable SSL for the app. This must be set in order to let `ssl_configuration.private_key`, `ssl_configuration.certificate` and `ssl_configuration.chain` take effect.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>environments</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#applicationenvironment">Application<wbr>Environment[]</a></span>
    </dt>
    <dd>{{% md %}}Object to define environment variables.  Object is described below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}A human-readable name for the application.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>rails<wbr>Env</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the Rails environment for application of type `rails`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>short<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}A short, machine-readable name for the application. This can only be defined on resource creation and ignored on resource update.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ssl<wbr>Configurations</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#applicationsslconfiguration">Application<wbr>Ssl<wbr>Configuration[]</a></span>
    </dt>
    <dd>{{% md %}}The SSL configuration of the app. Object is described below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>stack<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The id of the stack the application will belong to.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Opsworks application type. One of `aws-flow-ruby`, `java`, `rails`, `php`, `nodejs`, `static` or `other`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>app_<wbr>sources</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#applicationappsource">List[Application<wbr>App<wbr>Source]</a></span>
    </dt>
    <dd>{{% md %}}SCM configuration of the app as described below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>auto_<wbr>bundle_<wbr>on_<wbr>deploy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Run bundle install when deploying for application of type `rails`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>aws_<wbr>flow_<wbr>ruby_<wbr>settings</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specify activity and workflow workers for your app using the aws-flow gem.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>data_<wbr>source_<wbr>arn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The data source's ARN.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>data_<wbr>source_<wbr>database_<wbr>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The database name.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>data_<wbr>source_<wbr>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The data source's type one of `AutoSelectOpsworksMysqlInstance`, `OpsworksMysqlInstance`, or `RdsDbInstance`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>description</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}A description of the app.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>document_<wbr>root</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Subfolder for the document root for application of type `rails`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>domains</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}A list of virtual host alias.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>enable_<wbr>ssl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Whether to enable SSL for the app. This must be set in order to let `ssl_configuration.private_key`, `ssl_configuration.certificate` and `ssl_configuration.chain` take effect.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>environments</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#applicationenvironment">List[Application<wbr>Environment]</a></span>
    </dt>
    <dd>{{% md %}}Object to define environment variables.  Object is described below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}A human-readable name for the application.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>rails_<wbr>env</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the Rails environment for application of type `rails`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>short_<wbr>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}A short, machine-readable name for the application. This can only be defined on resource creation and ignored on resource update.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ssl_<wbr>configurations</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#applicationsslconfiguration">List[Application<wbr>Ssl<wbr>Configuration]</a></span>
    </dt>
    <dd>{{% md %}}The SSL configuration of the app. Object is described below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>stack_<wbr>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The id of the stack the application will belong to.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Opsworks application type. One of `aws-flow-ruby`, `java`, `rails`, `php`, `nodejs`, `static` or `other`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}










## Supporting Types

<h4>Application<wbr>App<wbr>Source</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#ApplicationAppSource">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#ApplicationAppSource">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/opsworks?tab=doc#ApplicationAppSourceArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/opsworks?tab=doc#ApplicationAppSourceOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The type of source to use. For example, "archive".
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Password</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Password to use when authenticating to the source. This provider cannot perform drift detection of this configuration.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Revision</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}For sources that are version-aware, the revision to use.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ssh<wbr>Key</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}SSH key to use when authenticating to the source. This provider cannot perform drift detection of this configuration.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Url</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The URL where the app resource can be found.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Username</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Username to use when authenticating to the source.
{{% /md %}}</dd>

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
    <dd>{{% md %}}The type of source to use. For example, "archive".
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Password</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Password to use when authenticating to the source. This provider cannot perform drift detection of this configuration.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Revision</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}For sources that are version-aware, the revision to use.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ssh<wbr>Key</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}SSH key to use when authenticating to the source. This provider cannot perform drift detection of this configuration.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Url</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The URL where the app resource can be found.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Username</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Username to use when authenticating to the source.
{{% /md %}}</dd>

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
    <dd>{{% md %}}The type of source to use. For example, "archive".
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>password</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Password to use when authenticating to the source. This provider cannot perform drift detection of this configuration.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>revision</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}For sources that are version-aware, the revision to use.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ssh<wbr>Key</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}SSH key to use when authenticating to the source. This provider cannot perform drift detection of this configuration.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>url</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The URL where the app resource can be found.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>username</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Username to use when authenticating to the source.
{{% /md %}}</dd>

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
    <dd>{{% md %}}The type of source to use. For example, "archive".
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>password</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Password to use when authenticating to the source. This provider cannot perform drift detection of this configuration.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>revision</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}For sources that are version-aware, the revision to use.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ssh<wbr>Key</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}SSH key to use when authenticating to the source. This provider cannot perform drift detection of this configuration.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>url</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The URL where the app resource can be found.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>username</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Username to use when authenticating to the source.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Application<wbr>Environment</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#ApplicationEnvironment">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#ApplicationEnvironment">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/opsworks?tab=doc#ApplicationEnvironmentArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/opsworks?tab=doc#ApplicationEnvironmentOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Key</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Variable name.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Value</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Variable value.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Secure</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Set visibility of the variable value to `true` or `false`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Key</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Variable name.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Value</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Variable value.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Secure</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Set visibility of the variable value to `true` or `false`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>key</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Variable name.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>value</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Variable value.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>secure</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Set visibility of the variable value to `true` or `false`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>key</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Variable name.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>value</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Variable value.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>secure</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Set visibility of the variable value to `true` or `false`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Application<wbr>Ssl<wbr>Configuration</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#ApplicationSslConfiguration">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#ApplicationSslConfiguration">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/opsworks?tab=doc#ApplicationSslConfigurationArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/opsworks?tab=doc#ApplicationSslConfigurationOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Certificate</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The contents of the certificate's domain.crt file.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Private<wbr>Key</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The private key; the contents of the certificate's domain.key file.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Chain</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Can be used to specify an intermediate certificate authority key or client authentication.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Certificate</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The contents of the certificate's domain.crt file.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Private<wbr>Key</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The private key; the contents of the certificate's domain.key file.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Chain</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Can be used to specify an intermediate certificate authority key or client authentication.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>certificate</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The contents of the certificate's domain.crt file.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>private<wbr>Key</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The private key; the contents of the certificate's domain.key file.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>chain</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Can be used to specify an intermediate certificate authority key or client authentication.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>certificate</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The contents of the certificate's domain.crt file.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>private_<wbr>key</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The private key; the contents of the certificate's domain.key file.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>chain</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Can be used to specify an intermediate certificate authority key or client authentication.
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

