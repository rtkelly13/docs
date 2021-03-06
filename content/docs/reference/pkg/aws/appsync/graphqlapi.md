
---
title: "GraphQLApi"
block_external_search_index: true
---



Provides an AppSync GraphQL API.

{{% examples %}}
## Example Usage

{{% example %}}
### API Key Authentication

```typescript
import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

const example = new aws.appsync.GraphQLApi("example", {
    authenticationType: "API_KEY",
});
```

{{% /example %}}
{{% example %}}
### AWS Cognito User Pool Authentication

```typescript
import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

const example = new aws.appsync.GraphQLApi("example", {
    authenticationType: "AMAZON_COGNITO_USER_POOLS",
    userPoolConfig: {
        awsRegion: aws_region_current.name,
        defaultAction: "DENY",
        userPoolId: aws_cognito_user_pool_example.id,
    },
});
```

{{% /example %}}
{{% example %}}
### AWS IAM Authentication

```typescript
import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

const example = new aws.appsync.GraphQLApi("example", {
    authenticationType: "AWS_IAM",
});
```

{{% /example %}}
{{% example %}}
### With Schema

```typescript
import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

const example = new aws.appsync.GraphQLApi("example", {
    authenticationType: "AWS_IAM",
    schema: `schema {
	query: Query
}
type Query {
  test: Int
}
`,
});
```

{{% /example %}}
{{% example %}}
### OpenID Connect Authentication

```typescript
import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

const example = new aws.appsync.GraphQLApi("example", {
    authenticationType: "OPENID_CONNECT",
    openidConnectConfig: {
        issuer: "https://example.com",
    },
});
```

{{% /example %}}
{{% example %}}
### With Multiple Authentication Providers

```typescript
import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

const example = new aws.appsync.GraphQLApi("example", {
    additionalAuthenticationProviders: [{
        authenticationType: "AWS_IAM",
    }],
    authenticationType: "API_KEY",
});
```

{{% /example %}}
{{% example %}}
### Enabling Logging

```typescript
import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

const exampleRole = new aws.iam.Role("example", {
    assumeRolePolicy: `{
    "Version": "2012-10-17",
    "Statement": [
        {
        "Effect": "Allow",
        "Principal": {
            "Service": "appsync.amazonaws.com"
        },
        "Action": "sts:AssumeRole"
        }
    ]
}
`,
});
const exampleRolePolicyAttachment = new aws.iam.RolePolicyAttachment("example", {
    policyArn: "arn:aws:iam::aws:policy/service-role/AWSAppSyncPushToCloudWatchLogs",
    role: exampleRole.name,
});
const exampleGraphQLApi = new aws.appsync.GraphQLApi("example", {
    logConfig: {
        cloudwatchLogsRoleArn: exampleRole.arn,
        fieldLogLevel: "ERROR",
    },
});
```

{{% /example %}}
{{% /examples %}}



## Create a GraphQLApi Resource

{{< chooser language "javascript,typescript,python,go,csharp" / >}}

{{% choosable language nodejs %}}
<div class="highlight"><pre class="chroma"><code class="language-typescript" data-lang="typescript"><span class="k">new </span><span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/aws/appsync/#GraphQLApi">GraphQLApi</a></span><span class="p">(</span><span class="nx">name</span>: <span class="nx"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span><span class="p">, </span><span class="nx">args</span>: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/aws/appsync/#GraphQLApiArgs">GraphQLApiArgs</a></span><span class="p">, </span><span class="nx">opts</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions">CustomResourceOptions</a></span><span class="p">);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language python %}}
<div class="highlight"><pre class="chroma"><code class="language-python" data-lang="python"><span class="k">def </span><span class="nf">GraphQLApi</span><span class="p">(resource_name, opts=None, </span>additional_authentication_providers=None<span class="p">, </span>authentication_type=None<span class="p">, </span>log_config=None<span class="p">, </span>name=None<span class="p">, </span>openid_connect_config=None<span class="p">, </span>schema=None<span class="p">, </span>tags=None<span class="p">, </span>user_pool_config=None<span class="p">, </span>xray_enabled=None<span class="p">, __props__=None);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language go %}}
<div class="highlight"><pre class="chroma"><code class="language-go" data-lang="go"><span class="k">func </span>NewGraphQLApi<span class="p">(</span><span class="nx">ctx</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#Context">Context</a></span><span class="p">, </span><span class="nx">name</span> <span class="nx"><a href="https://golang.org/pkg/builtin/#string">string</a></span><span class="p">, </span><span class="nx">args</span> <span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/appsync?tab=doc#GraphQLApiArgs">GraphQLApiArgs</a></span><span class="p">, </span><span class="nx">opts</span> ...<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#ResourceOption">ResourceOption</a></span><span class="p">) (*<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/appsync?tab=doc#GraphQLApi">GraphQLApi</a></span>, error)</span></code></pre></div>
{{% /choosable %}}

{{% choosable language csharp %}}
<div class="highlight"><pre class="chroma"><code class="language-csharp" data-lang="csharp"><span class="k">public </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Aws/Pulumi.Aws.AppSync.GraphQLApi.html">GraphQLApi</a></span><span class="p">(</span><span class="nx"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span> <span class="nx">name<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Aws/Pulumi.Aws.AppSync.GraphQLApiArgs.html">GraphQLApiArgs</a></span> <span class="nx">args<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.CustomResourceOptions.html">CustomResourceOptions</a></span>? <span class="nx">opts = null<span class="p">)</span></code></pre></div>
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
        <span>Authentication<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The authentication type. Valid values: `API_KEY`, `AWS_IAM`, `AMAZON_COGNITO_USER_POOLS`, `OPENID_CONNECT`
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Additional<wbr>Authentication<wbr>Providers</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#graphqlapiadditionalauthenticationprovider">List&lt;Graph<wbr>QLApi<wbr>Additional<wbr>Authentication<wbr>Provider<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}One or more additional authentication providers for the GraphqlApi. Defined below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Log<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#graphqlapilogconfig">Graph<wbr>QLApi<wbr>Log<wbr>Config<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}Nested argument containing logging configuration. Defined below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}A user-supplied name for the GraphqlApi.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Openid<wbr>Connect<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#graphqlapiopenidconnectconfig">Graph<wbr>QLApi<wbr>Openid<wbr>Connect<wbr>Config<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}Nested argument containing OpenID Connect configuration. Defined below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Schema</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The schema definition, in GraphQL schema language format. This provider cannot perform drift detection of this configuration.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dictionary&lt;string, object&gt;</span>
    </dt>
    <dd>{{% md %}}A mapping of tags to assign to the resource.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>User<wbr>Pool<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#graphqlapiuserpoolconfig">Graph<wbr>QLApi<wbr>User<wbr>Pool<wbr>Config<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}The Amazon Cognito User Pool configuration. Defined below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Xray<wbr>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Whether tracing with X-ray is enabled. Defaults to false.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Authentication<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The authentication type. Valid values: `API_KEY`, `AWS_IAM`, `AMAZON_COGNITO_USER_POOLS`, `OPENID_CONNECT`
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Additional<wbr>Authentication<wbr>Providers</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#graphqlapiadditionalauthenticationprovider">[]Graph<wbr>QLApi<wbr>Additional<wbr>Authentication<wbr>Provider</a></span>
    </dt>
    <dd>{{% md %}}One or more additional authentication providers for the GraphqlApi. Defined below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Log<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#graphqlapilogconfig">Graph<wbr>QLApi<wbr>Log<wbr>Config</a></span>
    </dt>
    <dd>{{% md %}}Nested argument containing logging configuration. Defined below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}A user-supplied name for the GraphqlApi.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Openid<wbr>Connect<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#graphqlapiopenidconnectconfig">Graph<wbr>QLApi<wbr>Openid<wbr>Connect<wbr>Config</a></span>
    </dt>
    <dd>{{% md %}}Nested argument containing OpenID Connect configuration. Defined below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Schema</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The schema definition, in GraphQL schema language format. This provider cannot perform drift detection of this configuration.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">map[string]interface{}</span>
    </dt>
    <dd>{{% md %}}A mapping of tags to assign to the resource.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>User<wbr>Pool<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#graphqlapiuserpoolconfig">Graph<wbr>QLApi<wbr>User<wbr>Pool<wbr>Config</a></span>
    </dt>
    <dd>{{% md %}}The Amazon Cognito User Pool configuration. Defined below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Xray<wbr>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Whether tracing with X-ray is enabled. Defaults to false.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>authentication<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The authentication type. Valid values: `API_KEY`, `AWS_IAM`, `AMAZON_COGNITO_USER_POOLS`, `OPENID_CONNECT`
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>additional<wbr>Authentication<wbr>Providers</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#graphqlapiadditionalauthenticationprovider">Graph<wbr>QLApi<wbr>Additional<wbr>Authentication<wbr>Provider[]</a></span>
    </dt>
    <dd>{{% md %}}One or more additional authentication providers for the GraphqlApi. Defined below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>log<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#graphqlapilogconfig">Graph<wbr>QLApi<wbr>Log<wbr>Config</a></span>
    </dt>
    <dd>{{% md %}}Nested argument containing logging configuration. Defined below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}A user-supplied name for the GraphqlApi.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>openid<wbr>Connect<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#graphqlapiopenidconnectconfig">Graph<wbr>QLApi<wbr>Openid<wbr>Connect<wbr>Config</a></span>
    </dt>
    <dd>{{% md %}}Nested argument containing OpenID Connect configuration. Defined below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>schema</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The schema definition, in GraphQL schema language format. This provider cannot perform drift detection of this configuration.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">{[key: string]: any}</span>
    </dt>
    <dd>{{% md %}}A mapping of tags to assign to the resource.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>user<wbr>Pool<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#graphqlapiuserpoolconfig">Graph<wbr>QLApi<wbr>User<wbr>Pool<wbr>Config</a></span>
    </dt>
    <dd>{{% md %}}The Amazon Cognito User Pool configuration. Defined below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>xray<wbr>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Whether tracing with X-ray is enabled. Defaults to false.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>authentication_<wbr>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The authentication type. Valid values: `API_KEY`, `AWS_IAM`, `AMAZON_COGNITO_USER_POOLS`, `OPENID_CONNECT`
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>additional_<wbr>authentication_<wbr>providers</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#graphqlapiadditionalauthenticationprovider">List[Graph<wbr>QLApi<wbr>Additional<wbr>Authentication<wbr>Provider]</a></span>
    </dt>
    <dd>{{% md %}}One or more additional authentication providers for the GraphqlApi. Defined below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>log_<wbr>config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#graphqlapilogconfig">Dict[Graph<wbr>QLApi<wbr>Log<wbr>Config]</a></span>
    </dt>
    <dd>{{% md %}}Nested argument containing logging configuration. Defined below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}A user-supplied name for the GraphqlApi.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>openid_<wbr>connect_<wbr>config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#graphqlapiopenidconnectconfig">Dict[Graph<wbr>QLApi<wbr>Openid<wbr>Connect<wbr>Config]</a></span>
    </dt>
    <dd>{{% md %}}Nested argument containing OpenID Connect configuration. Defined below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>schema</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The schema definition, in GraphQL schema language format. This provider cannot perform drift detection of this configuration.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dict[str, Any]</span>
    </dt>
    <dd>{{% md %}}A mapping of tags to assign to the resource.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>user_<wbr>pool_<wbr>config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#graphqlapiuserpoolconfig">Dict[Graph<wbr>QLApi<wbr>User<wbr>Pool<wbr>Config]</a></span>
    </dt>
    <dd>{{% md %}}The Amazon Cognito User Pool configuration. Defined below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>xray_<wbr>enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Whether tracing with X-ray is enabled. Defaults to false.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}







## GraphQLApi Output Properties

The following output properties are available:




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span>Arn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The ARN
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Uris</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dictionary&lt;string, string&gt;</span>
    </dt>
    <dd>{{% md %}}Map of URIs associated with the API. e.g. `uris["GRAPHQL"] = https://ID.appsync-api.REGION.amazonaws.com/graphql`
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span>Arn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The ARN
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Uris</span>
        <span class="property-indicator"></span>
        <span class="property-type">map[string]string</span>
    </dt>
    <dd>{{% md %}}Map of URIs associated with the API. e.g. `uris["GRAPHQL"] = https://ID.appsync-api.REGION.amazonaws.com/graphql`
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span>arn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The ARN
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>uris</span>
        <span class="property-indicator"></span>
        <span class="property-type">{[key: string]: string}</span>
    </dt>
    <dd>{{% md %}}Map of URIs associated with the API. e.g. `uris["GRAPHQL"] = https://ID.appsync-api.REGION.amazonaws.com/graphql`
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span>arn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The ARN
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>uris</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dict[str, str]</span>
    </dt>
    <dd>{{% md %}}Map of URIs associated with the API. e.g. `uris["GRAPHQL"] = https://ID.appsync-api.REGION.amazonaws.com/graphql`
{{% /md %}}</dd>

</dl>
{{% /choosable %}}








## Look up an Existing GraphQLApi Resource

Get an existing GraphQLApi resource's state with the given name, ID, and optional extra properties used to qualify the lookup.

{{< chooser language "javascript,typescript,python,go,csharp  " / >}}

{{% choosable language nodejs %}}
<div class="highlight"><pre class="chroma"><code class="language-typescript" data-lang="typescript"><span class="k">public static </span><span class="nf">get</span><span class="p">(</span><span class="nx">name</span>: <span class="nx"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span><span class="p">, </span><span class="nx">id</span>: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#ID">Input&lt;ID&gt;</a></span><span class="p">, </span><span class="nx">state</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/aws/appsync/#GraphQLApiState">GraphQLApiState</a></span><span class="p">, </span><span class="nx">opts</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions">CustomResourceOptions</a></span><span class="p">): </span><span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/aws/appsync/#GraphQLApi">GraphQLApi</a></span></code></pre></div>
{{% /choosable %}}

{{% choosable language python %}}
<div class="highlight"><pre class="chroma"><code class="language-python" data-lang="python"><span class="k">static </span><span class="nf">get</span><span class="p">(resource_name, id, opts=None, </span>additional_authentication_providers=None<span class="p">, </span>arn=None<span class="p">, </span>authentication_type=None<span class="p">, </span>log_config=None<span class="p">, </span>name=None<span class="p">, </span>openid_connect_config=None<span class="p">, </span>schema=None<span class="p">, </span>tags=None<span class="p">, </span>uris=None<span class="p">, </span>user_pool_config=None<span class="p">, </span>xray_enabled=None<span class="p">, __props__=None);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language go %}}
<div class="highlight"><pre class="chroma"><code class="language-go" data-lang="go"><span class="k">func </span>GetGraphQLApi<span class="p">(</span><span class="nx">ctx</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#Context">Context</a></span><span class="p">, </span><span class="nx">name</span> <span class="nx"><a href="https://golang.org/pkg/builtin/#string">string</a></span><span class="p">, </span><span class="nx">id</span> <span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#IDInput">IDInput</a></span><span class="p">, </span><span class="nx">state</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/appsync?tab=doc#GraphQLApiState">GraphQLApiState</a></span><span class="p">, </span><span class="nx">opts</span> ...<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#ResourceOption">ResourceOption</a></span><span class="p">) (*<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/appsync?tab=doc#GraphQLApi">GraphQLApi</a></span>, error)</span></code></pre></div>
{{% /choosable %}}

{{% choosable language csharp %}}
<div class="highlight"><pre class="chroma"><code class="language-csharp" data-lang="csharp"><span class="k">public static </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Aws/Pulumi.Aws.AppSync.GraphQLApi.html">GraphQLApi</a></span><span class="nf"> Get</span><span class="p">(</span><span class="nx"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span> <span class="nx">name<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.Input.html">Input&lt;string&gt;</a></span> <span class="nx">id<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Aws/Pulumi.Aws.AppSync.GraphQLApiState.html">GraphQLApiState</a></span>? <span class="nx">state<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.CustomResourceOptions.html">CustomResourceOptions</a></span>? <span class="nx">opts = null<span class="p">)</span></code></pre></div>
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
        <span>Additional<wbr>Authentication<wbr>Providers</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#graphqlapiadditionalauthenticationprovider">List&lt;Graph<wbr>QLApi<wbr>Additional<wbr>Authentication<wbr>Provider<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}One or more additional authentication providers for the GraphqlApi. Defined below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Arn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The ARN
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Authentication<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The authentication type. Valid values: `API_KEY`, `AWS_IAM`, `AMAZON_COGNITO_USER_POOLS`, `OPENID_CONNECT`
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Log<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#graphqlapilogconfig">Graph<wbr>QLApi<wbr>Log<wbr>Config<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}Nested argument containing logging configuration. Defined below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}A user-supplied name for the GraphqlApi.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Openid<wbr>Connect<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#graphqlapiopenidconnectconfig">Graph<wbr>QLApi<wbr>Openid<wbr>Connect<wbr>Config<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}Nested argument containing OpenID Connect configuration. Defined below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Schema</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The schema definition, in GraphQL schema language format. This provider cannot perform drift detection of this configuration.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dictionary&lt;string, object&gt;</span>
    </dt>
    <dd>{{% md %}}A mapping of tags to assign to the resource.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Uris</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dictionary&lt;string, string&gt;</span>
    </dt>
    <dd>{{% md %}}Map of URIs associated with the API. e.g. `uris["GRAPHQL"] = https://ID.appsync-api.REGION.amazonaws.com/graphql`
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>User<wbr>Pool<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#graphqlapiuserpoolconfig">Graph<wbr>QLApi<wbr>User<wbr>Pool<wbr>Config<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}The Amazon Cognito User Pool configuration. Defined below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Xray<wbr>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Whether tracing with X-ray is enabled. Defaults to false.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Additional<wbr>Authentication<wbr>Providers</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#graphqlapiadditionalauthenticationprovider">[]Graph<wbr>QLApi<wbr>Additional<wbr>Authentication<wbr>Provider</a></span>
    </dt>
    <dd>{{% md %}}One or more additional authentication providers for the GraphqlApi. Defined below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Arn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The ARN
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Authentication<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The authentication type. Valid values: `API_KEY`, `AWS_IAM`, `AMAZON_COGNITO_USER_POOLS`, `OPENID_CONNECT`
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Log<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#graphqlapilogconfig">Graph<wbr>QLApi<wbr>Log<wbr>Config</a></span>
    </dt>
    <dd>{{% md %}}Nested argument containing logging configuration. Defined below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}A user-supplied name for the GraphqlApi.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Openid<wbr>Connect<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#graphqlapiopenidconnectconfig">Graph<wbr>QLApi<wbr>Openid<wbr>Connect<wbr>Config</a></span>
    </dt>
    <dd>{{% md %}}Nested argument containing OpenID Connect configuration. Defined below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Schema</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The schema definition, in GraphQL schema language format. This provider cannot perform drift detection of this configuration.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">map[string]interface{}</span>
    </dt>
    <dd>{{% md %}}A mapping of tags to assign to the resource.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Uris</span>
        <span class="property-indicator"></span>
        <span class="property-type">map[string]string</span>
    </dt>
    <dd>{{% md %}}Map of URIs associated with the API. e.g. `uris["GRAPHQL"] = https://ID.appsync-api.REGION.amazonaws.com/graphql`
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>User<wbr>Pool<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#graphqlapiuserpoolconfig">Graph<wbr>QLApi<wbr>User<wbr>Pool<wbr>Config</a></span>
    </dt>
    <dd>{{% md %}}The Amazon Cognito User Pool configuration. Defined below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Xray<wbr>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Whether tracing with X-ray is enabled. Defaults to false.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>additional<wbr>Authentication<wbr>Providers</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#graphqlapiadditionalauthenticationprovider">Graph<wbr>QLApi<wbr>Additional<wbr>Authentication<wbr>Provider[]</a></span>
    </dt>
    <dd>{{% md %}}One or more additional authentication providers for the GraphqlApi. Defined below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>arn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The ARN
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>authentication<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The authentication type. Valid values: `API_KEY`, `AWS_IAM`, `AMAZON_COGNITO_USER_POOLS`, `OPENID_CONNECT`
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>log<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#graphqlapilogconfig">Graph<wbr>QLApi<wbr>Log<wbr>Config</a></span>
    </dt>
    <dd>{{% md %}}Nested argument containing logging configuration. Defined below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}A user-supplied name for the GraphqlApi.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>openid<wbr>Connect<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#graphqlapiopenidconnectconfig">Graph<wbr>QLApi<wbr>Openid<wbr>Connect<wbr>Config</a></span>
    </dt>
    <dd>{{% md %}}Nested argument containing OpenID Connect configuration. Defined below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>schema</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The schema definition, in GraphQL schema language format. This provider cannot perform drift detection of this configuration.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">{[key: string]: any}</span>
    </dt>
    <dd>{{% md %}}A mapping of tags to assign to the resource.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>uris</span>
        <span class="property-indicator"></span>
        <span class="property-type">{[key: string]: string}</span>
    </dt>
    <dd>{{% md %}}Map of URIs associated with the API. e.g. `uris["GRAPHQL"] = https://ID.appsync-api.REGION.amazonaws.com/graphql`
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>user<wbr>Pool<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#graphqlapiuserpoolconfig">Graph<wbr>QLApi<wbr>User<wbr>Pool<wbr>Config</a></span>
    </dt>
    <dd>{{% md %}}The Amazon Cognito User Pool configuration. Defined below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>xray<wbr>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Whether tracing with X-ray is enabled. Defaults to false.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>additional_<wbr>authentication_<wbr>providers</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#graphqlapiadditionalauthenticationprovider">List[Graph<wbr>QLApi<wbr>Additional<wbr>Authentication<wbr>Provider]</a></span>
    </dt>
    <dd>{{% md %}}One or more additional authentication providers for the GraphqlApi. Defined below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>arn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The ARN
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>authentication_<wbr>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The authentication type. Valid values: `API_KEY`, `AWS_IAM`, `AMAZON_COGNITO_USER_POOLS`, `OPENID_CONNECT`
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>log_<wbr>config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#graphqlapilogconfig">Dict[Graph<wbr>QLApi<wbr>Log<wbr>Config]</a></span>
    </dt>
    <dd>{{% md %}}Nested argument containing logging configuration. Defined below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}A user-supplied name for the GraphqlApi.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>openid_<wbr>connect_<wbr>config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#graphqlapiopenidconnectconfig">Dict[Graph<wbr>QLApi<wbr>Openid<wbr>Connect<wbr>Config]</a></span>
    </dt>
    <dd>{{% md %}}Nested argument containing OpenID Connect configuration. Defined below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>schema</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The schema definition, in GraphQL schema language format. This provider cannot perform drift detection of this configuration.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>tags</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dict[str, Any]</span>
    </dt>
    <dd>{{% md %}}A mapping of tags to assign to the resource.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>uris</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dict[str, str]</span>
    </dt>
    <dd>{{% md %}}Map of URIs associated with the API. e.g. `uris["GRAPHQL"] = https://ID.appsync-api.REGION.amazonaws.com/graphql`
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>user_<wbr>pool_<wbr>config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#graphqlapiuserpoolconfig">Dict[Graph<wbr>QLApi<wbr>User<wbr>Pool<wbr>Config]</a></span>
    </dt>
    <dd>{{% md %}}The Amazon Cognito User Pool configuration. Defined below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>xray_<wbr>enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Whether tracing with X-ray is enabled. Defaults to false.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}










## Supporting Types

<h4>Graph<wbr>QLApi<wbr>Additional<wbr>Authentication<wbr>Provider</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#GraphQLApiAdditionalAuthenticationProvider">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#GraphQLApiAdditionalAuthenticationProvider">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/appsync?tab=doc#GraphQLApiAdditionalAuthenticationProviderArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/appsync?tab=doc#GraphQLApiAdditionalAuthenticationProviderOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Authentication<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The authentication type. Valid values: `API_KEY`, `AWS_IAM`, `AMAZON_COGNITO_USER_POOLS`, `OPENID_CONNECT`
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Openid<wbr>Connect<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#graphqlapiadditionalauthenticationprovideropenidconnectconfig">Graph<wbr>QLApi<wbr>Additional<wbr>Authentication<wbr>Provider<wbr>Openid<wbr>Connect<wbr>Config<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}Nested argument containing OpenID Connect configuration. Defined below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>User<wbr>Pool<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#graphqlapiadditionalauthenticationprovideruserpoolconfig">Graph<wbr>QLApi<wbr>Additional<wbr>Authentication<wbr>Provider<wbr>User<wbr>Pool<wbr>Config<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}The Amazon Cognito User Pool configuration. Defined below.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Authentication<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The authentication type. Valid values: `API_KEY`, `AWS_IAM`, `AMAZON_COGNITO_USER_POOLS`, `OPENID_CONNECT`
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Openid<wbr>Connect<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#graphqlapiadditionalauthenticationprovideropenidconnectconfig">Graph<wbr>QLApi<wbr>Additional<wbr>Authentication<wbr>Provider<wbr>Openid<wbr>Connect<wbr>Config</a></span>
    </dt>
    <dd>{{% md %}}Nested argument containing OpenID Connect configuration. Defined below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>User<wbr>Pool<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#graphqlapiadditionalauthenticationprovideruserpoolconfig">Graph<wbr>QLApi<wbr>Additional<wbr>Authentication<wbr>Provider<wbr>User<wbr>Pool<wbr>Config</a></span>
    </dt>
    <dd>{{% md %}}The Amazon Cognito User Pool configuration. Defined below.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>authentication<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The authentication type. Valid values: `API_KEY`, `AWS_IAM`, `AMAZON_COGNITO_USER_POOLS`, `OPENID_CONNECT`
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>openid<wbr>Connect<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#graphqlapiadditionalauthenticationprovideropenidconnectconfig">Graph<wbr>QLApi<wbr>Additional<wbr>Authentication<wbr>Provider<wbr>Openid<wbr>Connect<wbr>Config</a></span>
    </dt>
    <dd>{{% md %}}Nested argument containing OpenID Connect configuration. Defined below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>user<wbr>Pool<wbr>Config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#graphqlapiadditionalauthenticationprovideruserpoolconfig">Graph<wbr>QLApi<wbr>Additional<wbr>Authentication<wbr>Provider<wbr>User<wbr>Pool<wbr>Config</a></span>
    </dt>
    <dd>{{% md %}}The Amazon Cognito User Pool configuration. Defined below.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>authentication_<wbr>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The authentication type. Valid values: `API_KEY`, `AWS_IAM`, `AMAZON_COGNITO_USER_POOLS`, `OPENID_CONNECT`
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>openid_<wbr>connect_<wbr>config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#graphqlapiadditionalauthenticationprovideropenidconnectconfig">Dict[Graph<wbr>QLApi<wbr>Additional<wbr>Authentication<wbr>Provider<wbr>Openid<wbr>Connect<wbr>Config]</a></span>
    </dt>
    <dd>{{% md %}}Nested argument containing OpenID Connect configuration. Defined below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>user_<wbr>pool_<wbr>config</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#graphqlapiadditionalauthenticationprovideruserpoolconfig">Dict[Graph<wbr>QLApi<wbr>Additional<wbr>Authentication<wbr>Provider<wbr>User<wbr>Pool<wbr>Config]</a></span>
    </dt>
    <dd>{{% md %}}The Amazon Cognito User Pool configuration. Defined below.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Graph<wbr>QLApi<wbr>Additional<wbr>Authentication<wbr>Provider<wbr>Openid<wbr>Connect<wbr>Config</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#GraphQLApiAdditionalAuthenticationProviderOpenidConnectConfig">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#GraphQLApiAdditionalAuthenticationProviderOpenidConnectConfig">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/appsync?tab=doc#GraphQLApiAdditionalAuthenticationProviderOpenidConnectConfigArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/appsync?tab=doc#GraphQLApiAdditionalAuthenticationProviderOpenidConnectConfigOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Issuer</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Issuer for the OpenID Connect configuration. The issuer returned by discovery MUST exactly match the value of iss in the ID Token.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Auth<wbr>Ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}Number of milliseconds a token is valid after being authenticated.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Client<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Client identifier of the Relying party at the OpenID identity provider. This identifier is typically obtained when the Relying party is registered with the OpenID identity provider. You can specify a regular expression so the AWS AppSync can validate against multiple client identifiers at a time.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Iat<wbr>Ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}Number of milliseconds a token is valid after being issued to a user.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Issuer</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Issuer for the OpenID Connect configuration. The issuer returned by discovery MUST exactly match the value of iss in the ID Token.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Auth<wbr>Ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}Number of milliseconds a token is valid after being authenticated.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Client<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Client identifier of the Relying party at the OpenID identity provider. This identifier is typically obtained when the Relying party is registered with the OpenID identity provider. You can specify a regular expression so the AWS AppSync can validate against multiple client identifiers at a time.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Iat<wbr>Ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}Number of milliseconds a token is valid after being issued to a user.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>issuer</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Issuer for the OpenID Connect configuration. The issuer returned by discovery MUST exactly match the value of iss in the ID Token.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>auth<wbr>Ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}Number of milliseconds a token is valid after being authenticated.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>client<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Client identifier of the Relying party at the OpenID identity provider. This identifier is typically obtained when the Relying party is registered with the OpenID identity provider. You can specify a regular expression so the AWS AppSync can validate against multiple client identifiers at a time.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>iat<wbr>Ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}Number of milliseconds a token is valid after being issued to a user.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>issuer</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Issuer for the OpenID Connect configuration. The issuer returned by discovery MUST exactly match the value of iss in the ID Token.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>auth<wbr>Ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}Number of milliseconds a token is valid after being authenticated.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>client_<wbr>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Client identifier of the Relying party at the OpenID identity provider. This identifier is typically obtained when the Relying party is registered with the OpenID identity provider. You can specify a regular expression so the AWS AppSync can validate against multiple client identifiers at a time.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>iat<wbr>Ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}Number of milliseconds a token is valid after being issued to a user.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Graph<wbr>QLApi<wbr>Additional<wbr>Authentication<wbr>Provider<wbr>User<wbr>Pool<wbr>Config</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#GraphQLApiAdditionalAuthenticationProviderUserPoolConfig">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#GraphQLApiAdditionalAuthenticationProviderUserPoolConfig">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/appsync?tab=doc#GraphQLApiAdditionalAuthenticationProviderUserPoolConfigArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/appsync?tab=doc#GraphQLApiAdditionalAuthenticationProviderUserPoolConfigOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>User<wbr>Pool<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The user pool ID.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>App<wbr>Id<wbr>Client<wbr>Regex</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}A regular expression for validating the incoming Amazon Cognito User Pool app client ID.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Aws<wbr>Region</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The AWS region in which the user pool was created.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>User<wbr>Pool<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The user pool ID.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>App<wbr>Id<wbr>Client<wbr>Regex</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}A regular expression for validating the incoming Amazon Cognito User Pool app client ID.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Aws<wbr>Region</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The AWS region in which the user pool was created.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>user<wbr>Pool<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The user pool ID.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>app<wbr>Id<wbr>Client<wbr>Regex</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}A regular expression for validating the incoming Amazon Cognito User Pool app client ID.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>aws<wbr>Region</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The AWS region in which the user pool was created.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>user_<wbr>pool_<wbr>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The user pool ID.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>app<wbr>Id<wbr>Client<wbr>Regex</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}A regular expression for validating the incoming Amazon Cognito User Pool app client ID.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>aws<wbr>Region</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The AWS region in which the user pool was created.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Graph<wbr>QLApi<wbr>Log<wbr>Config</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#GraphQLApiLogConfig">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#GraphQLApiLogConfig">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/appsync?tab=doc#GraphQLApiLogConfigArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/appsync?tab=doc#GraphQLApiLogConfigOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Cloudwatch<wbr>Logs<wbr>Role<wbr>Arn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Amazon Resource Name of the service role that AWS AppSync will assume to publish to Amazon CloudWatch logs in your account.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Field<wbr>Log<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Field logging level. Valid values: `ALL`, `ERROR`, `NONE`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Cloudwatch<wbr>Logs<wbr>Role<wbr>Arn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Amazon Resource Name of the service role that AWS AppSync will assume to publish to Amazon CloudWatch logs in your account.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Field<wbr>Log<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Field logging level. Valid values: `ALL`, `ERROR`, `NONE`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>cloudwatch<wbr>Logs<wbr>Role<wbr>Arn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Amazon Resource Name of the service role that AWS AppSync will assume to publish to Amazon CloudWatch logs in your account.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>field<wbr>Log<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Field logging level. Valid values: `ALL`, `ERROR`, `NONE`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>cloudwatch<wbr>Logs<wbr>Role<wbr>Arn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Amazon Resource Name of the service role that AWS AppSync will assume to publish to Amazon CloudWatch logs in your account.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>field<wbr>Log<wbr>Level</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Field logging level. Valid values: `ALL`, `ERROR`, `NONE`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Graph<wbr>QLApi<wbr>Openid<wbr>Connect<wbr>Config</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#GraphQLApiOpenidConnectConfig">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#GraphQLApiOpenidConnectConfig">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/appsync?tab=doc#GraphQLApiOpenidConnectConfigArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/appsync?tab=doc#GraphQLApiOpenidConnectConfigOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Issuer</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Issuer for the OpenID Connect configuration. The issuer returned by discovery MUST exactly match the value of iss in the ID Token.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Auth<wbr>Ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}Number of milliseconds a token is valid after being authenticated.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Client<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Client identifier of the Relying party at the OpenID identity provider. This identifier is typically obtained when the Relying party is registered with the OpenID identity provider. You can specify a regular expression so the AWS AppSync can validate against multiple client identifiers at a time.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Iat<wbr>Ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}Number of milliseconds a token is valid after being issued to a user.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Issuer</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Issuer for the OpenID Connect configuration. The issuer returned by discovery MUST exactly match the value of iss in the ID Token.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Auth<wbr>Ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}Number of milliseconds a token is valid after being authenticated.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Client<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Client identifier of the Relying party at the OpenID identity provider. This identifier is typically obtained when the Relying party is registered with the OpenID identity provider. You can specify a regular expression so the AWS AppSync can validate against multiple client identifiers at a time.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Iat<wbr>Ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}Number of milliseconds a token is valid after being issued to a user.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>issuer</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Issuer for the OpenID Connect configuration. The issuer returned by discovery MUST exactly match the value of iss in the ID Token.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>auth<wbr>Ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}Number of milliseconds a token is valid after being authenticated.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>client<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Client identifier of the Relying party at the OpenID identity provider. This identifier is typically obtained when the Relying party is registered with the OpenID identity provider. You can specify a regular expression so the AWS AppSync can validate against multiple client identifiers at a time.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>iat<wbr>Ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}Number of milliseconds a token is valid after being issued to a user.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>issuer</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Issuer for the OpenID Connect configuration. The issuer returned by discovery MUST exactly match the value of iss in the ID Token.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>auth<wbr>Ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}Number of milliseconds a token is valid after being authenticated.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>client_<wbr>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Client identifier of the Relying party at the OpenID identity provider. This identifier is typically obtained when the Relying party is registered with the OpenID identity provider. You can specify a regular expression so the AWS AppSync can validate against multiple client identifiers at a time.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>iat<wbr>Ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}Number of milliseconds a token is valid after being issued to a user.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Graph<wbr>QLApi<wbr>User<wbr>Pool<wbr>Config</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#GraphQLApiUserPoolConfig">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#GraphQLApiUserPoolConfig">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/appsync?tab=doc#GraphQLApiUserPoolConfigArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/appsync?tab=doc#GraphQLApiUserPoolConfigOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Default<wbr>Action</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The action that you want your GraphQL API to take when a request that uses Amazon Cognito User Pool authentication doesn't match the Amazon Cognito User Pool configuration. Valid: `ALLOW` and `DENY`
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>User<wbr>Pool<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The user pool ID.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>App<wbr>Id<wbr>Client<wbr>Regex</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}A regular expression for validating the incoming Amazon Cognito User Pool app client ID.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Aws<wbr>Region</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The AWS region in which the user pool was created.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Default<wbr>Action</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The action that you want your GraphQL API to take when a request that uses Amazon Cognito User Pool authentication doesn't match the Amazon Cognito User Pool configuration. Valid: `ALLOW` and `DENY`
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>User<wbr>Pool<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The user pool ID.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>App<wbr>Id<wbr>Client<wbr>Regex</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}A regular expression for validating the incoming Amazon Cognito User Pool app client ID.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Aws<wbr>Region</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The AWS region in which the user pool was created.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>default<wbr>Action</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The action that you want your GraphQL API to take when a request that uses Amazon Cognito User Pool authentication doesn't match the Amazon Cognito User Pool configuration. Valid: `ALLOW` and `DENY`
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>user<wbr>Pool<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The user pool ID.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>app<wbr>Id<wbr>Client<wbr>Regex</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}A regular expression for validating the incoming Amazon Cognito User Pool app client ID.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>aws<wbr>Region</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The AWS region in which the user pool was created.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>default_<wbr>action</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The action that you want your GraphQL API to take when a request that uses Amazon Cognito User Pool authentication doesn't match the Amazon Cognito User Pool configuration. Valid: `ALLOW` and `DENY`
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>user_<wbr>pool_<wbr>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The user pool ID.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>app<wbr>Id<wbr>Client<wbr>Regex</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}A regular expression for validating the incoming Amazon Cognito User Pool app client ID.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>aws<wbr>Region</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The AWS region in which the user pool was created.
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

