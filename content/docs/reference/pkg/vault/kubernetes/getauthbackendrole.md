
---
title: "GetAuthBackendRole"
block_external_search_index: true
---



Reads the Role of an Kubernetes from a Vault server. See the [Vault
documentation](https://www.vaultproject.io/api/auth/kubernetes/index.html#read-role) for more
information.

{{% examples %}}
## Example Usage
{{% example %}}

```typescript
import * as pulumi from "@pulumi/pulumi";
import * as vault from "@pulumi/vault";

const role = vault.kubernetes.getAuthBackendRole({
    backend: "my-kubernetes-backend",
    roleName: "my-role",
});

export const policies = role.policies!;
```

{{% /example %}}
{{% /examples %}}





## Using GetAuthBackendRole

{{< chooser language "javascript,typescript,python,go,csharp" / >}}


{{% choosable language typescript %}}
<div class="highlight"><pre class="chroma"><code class="language-typescript" data-lang="typescript"><span class="k">function </span>getAuthBackendRole<span class="p">(</span><span class="nx">args</span>: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/vault/kubernetes/#GetAuthBackendRoleArgs">GetAuthBackendRoleArgs</a></span><span class="p">, </span><span class="nx">opts</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#InvokeOptions">InvokeOptions</a></span><span class="p">): Promise&lt;<span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/vault/kubernetes/#GetAuthBackendRoleResult">GetAuthBackendRoleResult</a></span>></span></code></pre></div>
{{% /choosable %}}


{{% choosable language python %}}
<div class="highlight"><pre class="chroma"><code class="language-python" data-lang="python"><span class="k">function </span> get_auth_backend_role(</span>audience=None<span class="p">, </span>backend=None<span class="p">, </span>bound_cidrs=None<span class="p">, </span>max_ttl=None<span class="p">, </span>num_uses=None<span class="p">, </span>period=None<span class="p">, </span>policies=None<span class="p">, </span>role_name=None<span class="p">, </span>token_bound_cidrs=None<span class="p">, </span>token_explicit_max_ttl=None<span class="p">, </span>token_max_ttl=None<span class="p">, </span>token_no_default_policy=None<span class="p">, </span>token_num_uses=None<span class="p">, </span>token_period=None<span class="p">, </span>token_policies=None<span class="p">, </span>token_ttl=None<span class="p">, </span>token_type=None<span class="p">, </span>ttl=None<span class="p">, </span>opts=None<span class="p">)</span></code></pre></div>
{{% /choosable %}}


{{% choosable language go %}}
<div class="highlight"><pre class="chroma"><code class="language-go" data-lang="go"><span class="k">func </span>LookupAuthBackendRole<span class="p">(</span><span class="nx">ctx</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#Context">pulumi.Context</a></span><span class="p">, </span><span class="nx">args</span> <span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-vault/sdk/v2/go/vault/kubernetes?tab=doc#LookupAuthBackendRoleArgs">LookupAuthBackendRoleArgs</a></span><span class="p">, </span><span class="nx">opts</span> ...<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#InvokeOption">pulumi.InvokeOption</a></span><span class="p">) (*<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-vault/sdk/v2/go/vault/kubernetes?tab=doc#LookupAuthBackendRoleResult">LookupAuthBackendRoleResult</a></span>, error)</span></code></pre></div>
{{% /choosable %}}


{{% choosable language csharp %}}
<div class="highlight"><pre class="chroma"><code class="language-csharp" data-lang="csharp"><span class="k">public static class </span><span class="nx">GetAuthBackendRole </span><span class="p">{</span><span class="k">
    public static </span>Task&lt;<span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Vault/Pulumi.Vault.Kubernetes.GetAuthBackendRoleResult.html">GetAuthBackendRoleResult</a></span>> <span class="p">InvokeAsync(</span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Vault/Pulumi.Vault.Kubernetes.GetAuthBackendRoleArgs.html">GetAuthBackendRoleArgs</a></span> <span class="nx">args<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.InvokeOptions.html">InvokeOptions</a></span>? <span class="nx">opts = null<span class="p">)</span><span class="p">
}</span></code></pre></div>
{{% /choosable %}}



The following arguments are supported:



{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Role<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the role to retrieve the Role attributes for.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Audience</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}(Optional) Audience claim to verify in the JWT.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Backend</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The unique name for the Kubernetes backend the role to
retrieve Role attributes for resides in. Defaults to "kubernetes".
{{% /md %}}</dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>Bound<wbr>Cidrs</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_bound_cidrs` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>Max<wbr>Ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_max_ttl` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>Num<wbr>Uses</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_num_uses` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>Period</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_period` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>Policies</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_policies` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

    <dt class="property-optional"
            title="Optional">
        <span>Token<wbr>Bound<wbr>Cidrs</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}List of CIDR blocks; if set, specifies blocks of IP
addresses which can authenticate successfully, and ties the resulting token to these blocks
as well.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Token<wbr>Explicit<wbr>Max<wbr>Ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}If set, will encode an
[explicit max TTL](https://www.vaultproject.io/docs/concepts/tokens.html#token-time-to-live-periodic-tokens-and-explicit-max-ttls)
onto the token in number of seconds. This is a hard cap even if `token_ttl` and
`token_max_ttl` would otherwise allow a renewal.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Token<wbr>Max<wbr>Ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The maximum lifetime for generated tokens in number of seconds.
Its current value will be referenced at renewal time.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Token<wbr>No<wbr>Default<wbr>Policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}If set, the default policy will not be set on
generated tokens; otherwise it will be added to the policies set in token_policies.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Token<wbr>Num<wbr>Uses</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The
[period](https://www.vaultproject.io/docs/concepts/tokens.html#token-time-to-live-periodic-tokens-and-explicit-max-ttls),
if any, in number of seconds to set on the token.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Token<wbr>Period</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}(Optional) If set, indicates that the
token generated using this role should never expire. The token should be renewed within the
duration specified by this value. At each renewal, the token's TTL will be set to the
value of this field. Specified in seconds.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Token<wbr>Policies</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}List of policies to encode onto generated tokens. Depending
on the auth method, this list may be supplemented by user/group/other values.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Token<wbr>Ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The incremental lifetime for generated tokens in number of seconds.
Its current value will be referenced at renewal time.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Token<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The type of token that should be generated. Can be `service`,
`batch`, or `default` to use the mount's tuned default (which unless changed will be
`service` tokens). For token store roles, there are two additional possibilities:
`default-service` and `default-batch` which specify the type to return unless the client
requests a different type at generation time.
{{% /md %}}</dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>Ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_ttl` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Role<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the role to retrieve the Role attributes for.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Audience</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}(Optional) Audience claim to verify in the JWT.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Backend</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The unique name for the Kubernetes backend the role to
retrieve Role attributes for resides in. Defaults to "kubernetes".
{{% /md %}}</dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>Bound<wbr>Cidrs</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_bound_cidrs` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>Max<wbr>Ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_max_ttl` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>Num<wbr>Uses</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_num_uses` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>Period</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_period` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>Policies</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_policies` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

    <dt class="property-optional"
            title="Optional">
        <span>Token<wbr>Bound<wbr>Cidrs</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}List of CIDR blocks; if set, specifies blocks of IP
addresses which can authenticate successfully, and ties the resulting token to these blocks
as well.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Token<wbr>Explicit<wbr>Max<wbr>Ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}If set, will encode an
[explicit max TTL](https://www.vaultproject.io/docs/concepts/tokens.html#token-time-to-live-periodic-tokens-and-explicit-max-ttls)
onto the token in number of seconds. This is a hard cap even if `token_ttl` and
`token_max_ttl` would otherwise allow a renewal.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Token<wbr>Max<wbr>Ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The maximum lifetime for generated tokens in number of seconds.
Its current value will be referenced at renewal time.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Token<wbr>No<wbr>Default<wbr>Policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}If set, the default policy will not be set on
generated tokens; otherwise it will be added to the policies set in token_policies.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Token<wbr>Num<wbr>Uses</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The
[period](https://www.vaultproject.io/docs/concepts/tokens.html#token-time-to-live-periodic-tokens-and-explicit-max-ttls),
if any, in number of seconds to set on the token.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Token<wbr>Period</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}(Optional) If set, indicates that the
token generated using this role should never expire. The token should be renewed within the
duration specified by this value. At each renewal, the token's TTL will be set to the
value of this field. Specified in seconds.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Token<wbr>Policies</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}List of policies to encode onto generated tokens. Depending
on the auth method, this list may be supplemented by user/group/other values.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Token<wbr>Ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The incremental lifetime for generated tokens in number of seconds.
Its current value will be referenced at renewal time.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Token<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The type of token that should be generated. Can be `service`,
`batch`, or `default` to use the mount's tuned default (which unless changed will be
`service` tokens). For token store roles, there are two additional possibilities:
`default-service` and `default-batch` which specify the type to return unless the client
requests a different type at generation time.
{{% /md %}}</dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>Ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_ttl` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>role<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the role to retrieve the Role attributes for.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>audience</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}(Optional) Audience claim to verify in the JWT.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>backend</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The unique name for the Kubernetes backend the role to
retrieve Role attributes for resides in. Defaults to "kubernetes".
{{% /md %}}</dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>bound<wbr>Cidrs</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_bound_cidrs` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>max<wbr>Ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_max_ttl` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>num<wbr>Uses</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_num_uses` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>period</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_period` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>policies</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_policies` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

    <dt class="property-optional"
            title="Optional">
        <span>token<wbr>Bound<wbr>Cidrs</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}List of CIDR blocks; if set, specifies blocks of IP
addresses which can authenticate successfully, and ties the resulting token to these blocks
as well.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>token<wbr>Explicit<wbr>Max<wbr>Ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}If set, will encode an
[explicit max TTL](https://www.vaultproject.io/docs/concepts/tokens.html#token-time-to-live-periodic-tokens-and-explicit-max-ttls)
onto the token in number of seconds. This is a hard cap even if `token_ttl` and
`token_max_ttl` would otherwise allow a renewal.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>token<wbr>Max<wbr>Ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The maximum lifetime for generated tokens in number of seconds.
Its current value will be referenced at renewal time.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>token<wbr>No<wbr>Default<wbr>Policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}If set, the default policy will not be set on
generated tokens; otherwise it will be added to the policies set in token_policies.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>token<wbr>Num<wbr>Uses</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The
[period](https://www.vaultproject.io/docs/concepts/tokens.html#token-time-to-live-periodic-tokens-and-explicit-max-ttls),
if any, in number of seconds to set on the token.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>token<wbr>Period</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}(Optional) If set, indicates that the
token generated using this role should never expire. The token should be renewed within the
duration specified by this value. At each renewal, the token's TTL will be set to the
value of this field. Specified in seconds.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>token<wbr>Policies</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}List of policies to encode onto generated tokens. Depending
on the auth method, this list may be supplemented by user/group/other values.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>token<wbr>Ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The incremental lifetime for generated tokens in number of seconds.
Its current value will be referenced at renewal time.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>token<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The type of token that should be generated. Can be `service`,
`batch`, or `default` to use the mount's tuned default (which unless changed will be
`service` tokens). For token store roles, there are two additional possibilities:
`default-service` and `default-batch` which specify the type to return unless the client
requests a different type at generation time.
{{% /md %}}</dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_ttl` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>role_<wbr>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the role to retrieve the Role attributes for.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>audience</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}(Optional) Audience claim to verify in the JWT.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>backend</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The unique name for the Kubernetes backend the role to
retrieve Role attributes for resides in. Defaults to "kubernetes".
{{% /md %}}</dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>bound_<wbr>cidrs</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_bound_cidrs` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>max_<wbr>ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_max_ttl` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>num_<wbr>uses</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_num_uses` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>period</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_period` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>policies</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_policies` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

    <dt class="property-optional"
            title="Optional">
        <span>token_<wbr>bound_<wbr>cidrs</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}List of CIDR blocks; if set, specifies blocks of IP
addresses which can authenticate successfully, and ties the resulting token to these blocks
as well.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>token_<wbr>explicit_<wbr>max_<wbr>ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}If set, will encode an
[explicit max TTL](https://www.vaultproject.io/docs/concepts/tokens.html#token-time-to-live-periodic-tokens-and-explicit-max-ttls)
onto the token in number of seconds. This is a hard cap even if `token_ttl` and
`token_max_ttl` would otherwise allow a renewal.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>token_<wbr>max_<wbr>ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The maximum lifetime for generated tokens in number of seconds.
Its current value will be referenced at renewal time.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>token_<wbr>no_<wbr>default_<wbr>policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}If set, the default policy will not be set on
generated tokens; otherwise it will be added to the policies set in token_policies.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>token_<wbr>num_<wbr>uses</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The
[period](https://www.vaultproject.io/docs/concepts/tokens.html#token-time-to-live-periodic-tokens-and-explicit-max-ttls),
if any, in number of seconds to set on the token.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>token_<wbr>period</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}(Optional) If set, indicates that the
token generated using this role should never expire. The token should be renewed within the
duration specified by this value. At each renewal, the token's TTL will be set to the
value of this field. Specified in seconds.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>token_<wbr>policies</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}List of policies to encode onto generated tokens. Depending
on the auth method, this list may be supplemented by user/group/other values.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>token_<wbr>ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The incremental lifetime for generated tokens in number of seconds.
Its current value will be referenced at renewal time.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>token_<wbr>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The type of token that should be generated. Can be `service`,
`batch`, or `default` to use the mount's tuned default (which unless changed will be
`service` tokens). For token store roles, there are two additional possibilities:
`default-service` and `default-batch` which specify the type to return unless the client
requests a different type at generation time.
{{% /md %}}</dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_ttl` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

</dl>
{{% /choosable %}}








## GetAuthBackendRole Result

The following output properties are available:




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span>Bound<wbr>Service<wbr>Account<wbr>Names</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}List of service account names able to access this role. If set to "*" all names are allowed, both this and bound_service_account_namespaces can not be "*".
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Bound<wbr>Service<wbr>Account<wbr>Namespaces</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}List of namespaces allowed to access this role. If set to "*" all namespaces are allowed, both this and bound_service_account_names can not be set to "*".
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
        <span>Role<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Audience</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}(Optional) Audience claim to verify in the JWT.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Backend</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property- property-deprecated"
            title=", Deprecated">
        <span>Bound<wbr>Cidrs</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_bound_cidrs` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

    <dt class="property- property-deprecated"
            title=", Deprecated">
        <span>Max<wbr>Ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_max_ttl` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

    <dt class="property- property-deprecated"
            title=", Deprecated">
        <span>Num<wbr>Uses</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_num_uses` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

    <dt class="property- property-deprecated"
            title=", Deprecated">
        <span>Period</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_period` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

    <dt class="property- property-deprecated"
            title=", Deprecated">
        <span>Policies</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_policies` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

    <dt class="property-"
            title="">
        <span>Token<wbr>Bound<wbr>Cidrs</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}List of CIDR blocks; if set, specifies blocks of IP
addresses which can authenticate successfully, and ties the resulting token to these blocks
as well.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Token<wbr>Explicit<wbr>Max<wbr>Ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}If set, will encode an
[explicit max TTL](https://www.vaultproject.io/docs/concepts/tokens.html#token-time-to-live-periodic-tokens-and-explicit-max-ttls)
onto the token in number of seconds. This is a hard cap even if `token_ttl` and
`token_max_ttl` would otherwise allow a renewal.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Token<wbr>Max<wbr>Ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The maximum lifetime for generated tokens in number of seconds.
Its current value will be referenced at renewal time.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Token<wbr>No<wbr>Default<wbr>Policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}If set, the default policy will not be set on
generated tokens; otherwise it will be added to the policies set in token_policies.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Token<wbr>Num<wbr>Uses</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The
[period](https://www.vaultproject.io/docs/concepts/tokens.html#token-time-to-live-periodic-tokens-and-explicit-max-ttls),
if any, in number of seconds to set on the token.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Token<wbr>Period</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}(Optional) If set, indicates that the
token generated using this role should never expire. The token should be renewed within the
duration specified by this value. At each renewal, the token's TTL will be set to the
value of this field. Specified in seconds.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Token<wbr>Policies</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}List of policies to encode onto generated tokens. Depending
on the auth method, this list may be supplemented by user/group/other values.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Token<wbr>Ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The incremental lifetime for generated tokens in number of seconds.
Its current value will be referenced at renewal time.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Token<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The type of token that should be generated. Can be `service`,
`batch`, or `default` to use the mount's tuned default (which unless changed will be
`service` tokens). For token store roles, there are two additional possibilities:
`default-service` and `default-batch` which specify the type to return unless the client
requests a different type at generation time.
{{% /md %}}</dd>

    <dt class="property- property-deprecated"
            title=", Deprecated">
        <span>Ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_ttl` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span>Bound<wbr>Service<wbr>Account<wbr>Names</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}List of service account names able to access this role. If set to "*" all names are allowed, both this and bound_service_account_namespaces can not be "*".
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Bound<wbr>Service<wbr>Account<wbr>Namespaces</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}List of namespaces allowed to access this role. If set to "*" all namespaces are allowed, both this and bound_service_account_names can not be set to "*".
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
        <span>Role<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Audience</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}(Optional) Audience claim to verify in the JWT.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Backend</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property- property-deprecated"
            title=", Deprecated">
        <span>Bound<wbr>Cidrs</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_bound_cidrs` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

    <dt class="property- property-deprecated"
            title=", Deprecated">
        <span>Max<wbr>Ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_max_ttl` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

    <dt class="property- property-deprecated"
            title=", Deprecated">
        <span>Num<wbr>Uses</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_num_uses` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

    <dt class="property- property-deprecated"
            title=", Deprecated">
        <span>Period</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_period` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

    <dt class="property- property-deprecated"
            title=", Deprecated">
        <span>Policies</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_policies` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

    <dt class="property-"
            title="">
        <span>Token<wbr>Bound<wbr>Cidrs</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}List of CIDR blocks; if set, specifies blocks of IP
addresses which can authenticate successfully, and ties the resulting token to these blocks
as well.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Token<wbr>Explicit<wbr>Max<wbr>Ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}If set, will encode an
[explicit max TTL](https://www.vaultproject.io/docs/concepts/tokens.html#token-time-to-live-periodic-tokens-and-explicit-max-ttls)
onto the token in number of seconds. This is a hard cap even if `token_ttl` and
`token_max_ttl` would otherwise allow a renewal.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Token<wbr>Max<wbr>Ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The maximum lifetime for generated tokens in number of seconds.
Its current value will be referenced at renewal time.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Token<wbr>No<wbr>Default<wbr>Policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}If set, the default policy will not be set on
generated tokens; otherwise it will be added to the policies set in token_policies.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Token<wbr>Num<wbr>Uses</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The
[period](https://www.vaultproject.io/docs/concepts/tokens.html#token-time-to-live-periodic-tokens-and-explicit-max-ttls),
if any, in number of seconds to set on the token.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Token<wbr>Period</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}(Optional) If set, indicates that the
token generated using this role should never expire. The token should be renewed within the
duration specified by this value. At each renewal, the token's TTL will be set to the
value of this field. Specified in seconds.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Token<wbr>Policies</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}List of policies to encode onto generated tokens. Depending
on the auth method, this list may be supplemented by user/group/other values.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Token<wbr>Ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The incremental lifetime for generated tokens in number of seconds.
Its current value will be referenced at renewal time.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Token<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The type of token that should be generated. Can be `service`,
`batch`, or `default` to use the mount's tuned default (which unless changed will be
`service` tokens). For token store roles, there are two additional possibilities:
`default-service` and `default-batch` which specify the type to return unless the client
requests a different type at generation time.
{{% /md %}}</dd>

    <dt class="property- property-deprecated"
            title=", Deprecated">
        <span>Ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_ttl` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span>bound<wbr>Service<wbr>Account<wbr>Names</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}List of service account names able to access this role. If set to "*" all names are allowed, both this and bound_service_account_namespaces can not be "*".
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>bound<wbr>Service<wbr>Account<wbr>Namespaces</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}List of namespaces allowed to access this role. If set to "*" all namespaces are allowed, both this and bound_service_account_names can not be set to "*".
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
        <span>role<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>audience</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}(Optional) Audience claim to verify in the JWT.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>backend</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property- property-deprecated"
            title=", Deprecated">
        <span>bound<wbr>Cidrs</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_bound_cidrs` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

    <dt class="property- property-deprecated"
            title=", Deprecated">
        <span>max<wbr>Ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_max_ttl` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

    <dt class="property- property-deprecated"
            title=", Deprecated">
        <span>num<wbr>Uses</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_num_uses` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

    <dt class="property- property-deprecated"
            title=", Deprecated">
        <span>period</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_period` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

    <dt class="property- property-deprecated"
            title=", Deprecated">
        <span>policies</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_policies` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

    <dt class="property-"
            title="">
        <span>token<wbr>Bound<wbr>Cidrs</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}List of CIDR blocks; if set, specifies blocks of IP
addresses which can authenticate successfully, and ties the resulting token to these blocks
as well.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>token<wbr>Explicit<wbr>Max<wbr>Ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}If set, will encode an
[explicit max TTL](https://www.vaultproject.io/docs/concepts/tokens.html#token-time-to-live-periodic-tokens-and-explicit-max-ttls)
onto the token in number of seconds. This is a hard cap even if `token_ttl` and
`token_max_ttl` would otherwise allow a renewal.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>token<wbr>Max<wbr>Ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The maximum lifetime for generated tokens in number of seconds.
Its current value will be referenced at renewal time.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>token<wbr>No<wbr>Default<wbr>Policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}If set, the default policy will not be set on
generated tokens; otherwise it will be added to the policies set in token_policies.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>token<wbr>Num<wbr>Uses</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The
[period](https://www.vaultproject.io/docs/concepts/tokens.html#token-time-to-live-periodic-tokens-and-explicit-max-ttls),
if any, in number of seconds to set on the token.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>token<wbr>Period</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}(Optional) If set, indicates that the
token generated using this role should never expire. The token should be renewed within the
duration specified by this value. At each renewal, the token's TTL will be set to the
value of this field. Specified in seconds.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>token<wbr>Policies</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}List of policies to encode onto generated tokens. Depending
on the auth method, this list may be supplemented by user/group/other values.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>token<wbr>Ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The incremental lifetime for generated tokens in number of seconds.
Its current value will be referenced at renewal time.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>token<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The type of token that should be generated. Can be `service`,
`batch`, or `default` to use the mount's tuned default (which unless changed will be
`service` tokens). For token store roles, there are two additional possibilities:
`default-service` and `default-batch` which specify the type to return unless the client
requests a different type at generation time.
{{% /md %}}</dd>

    <dt class="property- property-deprecated"
            title=", Deprecated">
        <span>ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_ttl` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span>bound_<wbr>service_<wbr>account_<wbr>names</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}List of service account names able to access this role. If set to "*" all names are allowed, both this and bound_service_account_namespaces can not be "*".
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>bound_<wbr>service_<wbr>account_<wbr>namespaces</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}List of namespaces allowed to access this role. If set to "*" all namespaces are allowed, both this and bound_service_account_names can not be set to "*".
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
        <span>role_<wbr>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>audience</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}(Optional) Audience claim to verify in the JWT.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>backend</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property- property-deprecated"
            title=", Deprecated">
        <span>bound_<wbr>cidrs</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_bound_cidrs` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

    <dt class="property- property-deprecated"
            title=", Deprecated">
        <span>max_<wbr>ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_max_ttl` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

    <dt class="property- property-deprecated"
            title=", Deprecated">
        <span>num_<wbr>uses</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_num_uses` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

    <dt class="property- property-deprecated"
            title=", Deprecated">
        <span>period</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_period` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

    <dt class="property- property-deprecated"
            title=", Deprecated">
        <span>policies</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_policies` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

    <dt class="property-"
            title="">
        <span>token_<wbr>bound_<wbr>cidrs</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}List of CIDR blocks; if set, specifies blocks of IP
addresses which can authenticate successfully, and ties the resulting token to these blocks
as well.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>token_<wbr>explicit_<wbr>max_<wbr>ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}If set, will encode an
[explicit max TTL](https://www.vaultproject.io/docs/concepts/tokens.html#token-time-to-live-periodic-tokens-and-explicit-max-ttls)
onto the token in number of seconds. This is a hard cap even if `token_ttl` and
`token_max_ttl` would otherwise allow a renewal.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>token_<wbr>max_<wbr>ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The maximum lifetime for generated tokens in number of seconds.
Its current value will be referenced at renewal time.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>token_<wbr>no_<wbr>default_<wbr>policy</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}If set, the default policy will not be set on
generated tokens; otherwise it will be added to the policies set in token_policies.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>token_<wbr>num_<wbr>uses</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The
[period](https://www.vaultproject.io/docs/concepts/tokens.html#token-time-to-live-periodic-tokens-and-explicit-max-ttls),
if any, in number of seconds to set on the token.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>token_<wbr>period</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}(Optional) If set, indicates that the
token generated using this role should never expire. The token should be renewed within the
duration specified by this value. At each renewal, the token's TTL will be set to the
value of this field. Specified in seconds.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>token_<wbr>policies</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}List of policies to encode onto generated tokens. Depending
on the auth method, this list may be supplemented by user/group/other values.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>token_<wbr>ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The incremental lifetime for generated tokens in number of seconds.
Its current value will be referenced at renewal time.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>token_<wbr>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The type of token that should be generated. Can be `service`,
`batch`, or `default` to use the mount's tuned default (which unless changed will be
`service` tokens). For token store roles, there are two additional possibilities:
`default-service` and `default-batch` which specify the type to return unless the client
requests a different type at generation time.
{{% /md %}}</dd>

    <dt class="property- property-deprecated"
            title=", Deprecated">
        <span>ttl</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}<p class="property-message">Deprecated: {{% md %}}use `token_ttl` instead if you are running Vault &gt;= 1.2{{% /md %}}</p></dd>

</dl>
{{% /choosable %}}







