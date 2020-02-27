---
title: "SecurityGroupRule"
---

<!-- WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. -->
<!-- Do not edit by hand unless you're certain you know what you are doing! -->

<style>
  table td p { margin-top: 0; margin-bottom: 0; }
</style>

Provides a security group rule resource. Represents a single `ingress` or
`egress` group rule, which can be added to external Security Groups.

> **NOTE on Security Groups and Security Group Rules:** This provider currently
provides both a standalone Security Group Rule resource (a single `ingress` or
`egress` rule), and a Security Group resource with `ingress` and `egress` rules
defined in-line. At this time you cannot use a Security Group with in-line rules
in conjunction with any Security Group Rule resources. Doing so will cause
a conflict of rule settings and will overwrite rules.

> **NOTE:** Setting `protocol = "all"` or `protocol = -1` with `from_port` and `to_port` will result in the EC2 API creating a security group rule with all ports open. This API behavior cannot be controlled by this provider and may generate warnings in the future.

> **NOTE:** Referencing Security Groups across VPC peering has certain restrictions. More information is available in the [VPC Peering User Guide](https://docs.aws.amazon.com/vpc/latest/peering/vpc-peering-security-groups.html).

> This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/security_group_rule.html.markdown.


## Create a SecurityGroupRule Resource

{{< langchoose csharp >}}

<div class="highlight"><pre class="chroma"><code class="language-typescript" data-lang="typescript"><span class="k">new</span> <span class="nx"><a href=/docs/reference/pkg/nodejs/pulumi/aws/s3/#SecurityGroupRule>SecurityGroupRule</a></span><span class="p">(</span><span class="nx">name</span>: <span class="kt"><a href=https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String>string</a></span><span class="p">,</span> <span class="nx">args</span>: <span class="kt"><a href=/docs/reference/pkg/nodejs/pulumi/aws/s3/#SecurityGroupRuleArgs>SecurityGroupRuleArgs</a></span><span class="p">,</span> <span class="nx">opts?</span>: <span class="kt"><a href=/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions>pulumi.CustomResourceOptions</a></span><span class="p">);</span></code></pre></div>

```python
def __init__(__self__, resource_name, opts=None, cidr_blocks=None, description=None, from_port=None, ipv6_cidr_blocks=None, prefix_list_ids=None, protocol=None, security_group_id=None, self=None, source_security_group_id=None, to_port=None, type=None, __props__=None)
```

```go
func NewSecurityGroupRule(ctx *pulumi.Context, name string, args *SecurityGroupRuleArgs, opts ...pulumi.ResourceOption) (*SecurityGroupRule, error)

```

```csharp
public SecurityGroupRule(string name, SecurityGroupRuleArgs args, CustomResourceOptions? options = null)

```

Creates a SecurityGroupRule resource with the given unique name, arguments, and options.

{{% lang nodejs %}}
<ul class="pl-10">
    <li><strong>name</strong> &ndash; (Required) The unique name of the resulting resource.</li>
    <li><strong>args</strong> &ndash; (Required) The arguments to use to populate this resource's properties.</li>
    <li><strong>opts</strong> &ndash; (Optional) A bag of options that control this resource's behavior.</li>
</ul>
{{% /lang %}}

{{% lang go %}}
<ul class="pl-10">
    <li><strong>name</strong> &ndash; (Required) The unique name of the resulting resource.</li>
    <li><strong>args</strong> &ndash; (Required) The arguments to use to populate this resource's properties.</li>
    <li><strong>opts</strong> &ndash; (Optional) A bag of options that control this resource's behavior.</li>
</ul>
{{% /lang %}}

{{% lang csharp %}}
<ul class="pl-10">
    <li><strong>name</strong> &ndash; (Required) The unique name of the resulting resource.</li>
    <li><strong>args</strong> &ndash; (Required) The arguments to use to populate this resource's properties.</li>
    <li><strong>opts</strong> &ndash; (Optional) A bag of options that control this resource's behavior.</li>
</ul>
{{% /lang %}}

The following arguments are supported:

<table class="ml-6">
    <thead>
        <tr>
            <th>Argument</th>
            <th>Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="align-top">cidr<wbr>Blocks</td>
            <td class="align-top"><code>Array&lt;<wbr>string<wbr>&gt;</code></td>
            <td class="align-top">{{% md %}}
(Optional) List of CIDR blocks. Cannot be specified with `source_security_group_id`.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">description</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) Description of the rule.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">from<wbr>Port</td>
            <td class="align-top"><code>number</code></td>
            <td class="align-top">{{% md %}}
(Required) The start port (or ICMP type number if protocol is "icmp" or "icmpv6").

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">ipv6Cidr<wbr>Blocks</td>
            <td class="align-top"><code>Array&lt;<wbr>string<wbr>&gt;</code></td>
            <td class="align-top">{{% md %}}
(Optional) List of IPv6 CIDR blocks.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">prefix<wbr>List<wbr>Ids</td>
            <td class="align-top"><code>Array&lt;<wbr>string<wbr>&gt;</code></td>
            <td class="align-top">{{% md %}}
(Optional) List of prefix list IDs (for allowing access to VPC endpoints).
Only valid with `egress`.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">protocol</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Required) The protocol. If not icmp, icmpv6, tcp, udp, or all use the [protocol number](https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml)

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">security<wbr>Group<wbr>Id</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Required) The security group to apply this rule to.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">self</td>
            <td class="align-top"><code>boolean</code></td>
            <td class="align-top">{{% md %}}
(Optional) If true, the security group itself will be added as
a source to this ingress rule. Cannot be specified with `source_security_group_id`.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">source<wbr>Security<wbr>Group<wbr>Id</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) The security group id to allow access to/from,
depending on the `type`. Cannot be specified with `cidr_blocks` and `self`.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">to<wbr>Port</td>
            <td class="align-top"><code>number</code></td>
            <td class="align-top">{{% md %}}
(Required) The end port (or ICMP code if protocol is "icmp").

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">type</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Required) The type of rule being created. Valid options are `ingress` (inbound)
or `egress` (outbound).

{{% /md %}}</td>
        </tr>
    </tbody>
</table>

## SecurityGroupRule Output Properties

The following output properties are available:

<table class="ml-6">
    <thead>
        <tr>
            <th>Argument</th>
            <th>Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="align-top">cidr<wbr>Blocks</td>
            <td class="align-top"><code>Array&lt;<wbr>string<wbr>&gt;</code></td>
            <td class="align-top">{{% md %}}
List of CIDR blocks. Cannot be specified with `source_security_group_id`.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">description</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
Description of the rule.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">from<wbr>Port</td>
            <td class="align-top"><code>number</code></td>
            <td class="align-top">{{% md %}}
The start port (or ICMP type number if protocol is "icmp" or "icmpv6").

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">ipv6Cidr<wbr>Blocks</td>
            <td class="align-top"><code>Array&lt;<wbr>string<wbr>&gt;</code></td>
            <td class="align-top">{{% md %}}
List of IPv6 CIDR blocks.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">prefix<wbr>List<wbr>Ids</td>
            <td class="align-top"><code>Array&lt;<wbr>string<wbr>&gt;</code></td>
            <td class="align-top">{{% md %}}
List of prefix list IDs (for allowing access to VPC endpoints).
Only valid with `egress`.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">protocol</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
The protocol. If not icmp, icmpv6, tcp, udp, or all use the [protocol number](https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml)

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">security<wbr>Group<wbr>Id</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
The security group to apply this rule to.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">self</td>
            <td class="align-top"><code>boolean</code></td>
            <td class="align-top">{{% md %}}
If true, the security group itself will be added as
a source to this ingress rule. Cannot be specified with `source_security_group_id`.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">source<wbr>Security<wbr>Group<wbr>Id</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
The security group id to allow access to/from,
depending on the `type`. Cannot be specified with `cidr_blocks` and `self`.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">to<wbr>Port</td>
            <td class="align-top"><code>number</code></td>
            <td class="align-top">{{% md %}}
The end port (or ICMP code if protocol is "icmp").

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">type</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
The type of rule being created. Valid options are `ingress` (inbound)
or `egress` (outbound).

{{% /md %}}</td>
        </tr>
    </tbody>
</table>

## Look up an Existing SecurityGroupRule Resource

{{< langchoose csharp >}}

```typescript
public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SecurityGroupRuleState, opts?: pulumi.CustomResourceOptions): SecurityGroupRule;
```

```python
def get(resource_name, id, opts=None, acceleration_status=None, acl=None, arn=None, bucket=None, bucket_domain_name=None, bucket_prefix=None, bucket_regional_domain_name=None, cors_rules=None, force_destroy=None, hosted_zone_id=None, lifecycle_rules=None, loggings=None, object_lock_configuration=None, policy=None, region=None, replication_configuration=None, request_payer=None, server_side_encryption_configuration=None, tags=None, versioning=None, website=None, website_domain=None, website_endpoint=None)
```

```go
func GetBucket(ctx *pulumi.Context, name string, id pulumi.IDInput, state *BucketState, opts ...pulumi.ResourceOption) (*Bucket, error)
```

```csharp
public static Bucket Get(string name, Input<string> id, BucketState? state = null, CustomResourceOptions? options = null);
```

Get an existing SecurityGroupRule resource's state with the given name, ID, and optional extra
properties used to qualify the lookup.

{{% lang nodejs %}}
<ul class="pl-10">
    <li><strong>name</strong> &ndash; (Required) The unique name of the resulting resource.</li>
    <li><strong>id</strong> &ndash; (Required) The _unique_ provider ID of the resource to lookup.</li>
    <li><strong>state</strong> &ndash; (Optional) Any extra arguments used during the lookup.</li>
    <li><strong>opts</strong> &ndash; (Optional) A bag of options that control this resource's behavior.</li>
</ul>
{{% /lang %}}

{{% lang go %}}
<ul class="pl-10">
    <li><strong>name</strong> &ndash; (Required) The unique name of the resulting resource.</li>
    <li><strong>id</strong> &ndash; (Required) The _unique_ provider ID of the resource to lookup.</li>
    <li><strong>state</strong> &ndash; (Optional) Any extra arguments used during the lookup.</li>
    <li><strong>opts</strong> &ndash; (Optional) A bag of options that control this resource's behavior.</li>
</ul>
{{% /lang %}}

{{% lang csharp %}}
<ul class="pl-10">
    <li><strong>name</strong> &ndash; (Required) The unique name of the resulting resource.</li>
    <li><strong>id</strong> &ndash; (Required) The _unique_ provider ID of the resource to lookup.</li>
    <li><strong>state</strong> &ndash; (Optional) Any extra arguments used during the lookup.</li>
    <li><strong>opts</strong> &ndash; (Optional) A bag of options that control this resource's behavior.</li>
</ul>
{{% /lang %}}

The following state arguments are supported:

<table class="ml-6">
    <thead>
        <tr>
            <th>Argument</th>
            <th>Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="align-top">cidr<wbr>Blocks</td>
            <td class="align-top"><code>Array&lt;<wbr>string<wbr>&gt;</code></td>
            <td class="align-top">{{% md %}}
(Optional) List of CIDR blocks. Cannot be specified with `source_security_group_id`.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">description</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) Description of the rule.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">from<wbr>Port</td>
            <td class="align-top"><code>number</code></td>
            <td class="align-top">{{% md %}}
(Optional) The start port (or ICMP type number if protocol is "icmp" or "icmpv6").

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">ipv6Cidr<wbr>Blocks</td>
            <td class="align-top"><code>Array&lt;<wbr>string<wbr>&gt;</code></td>
            <td class="align-top">{{% md %}}
(Optional) List of IPv6 CIDR blocks.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">prefix<wbr>List<wbr>Ids</td>
            <td class="align-top"><code>Array&lt;<wbr>string<wbr>&gt;</code></td>
            <td class="align-top">{{% md %}}
(Optional) List of prefix list IDs (for allowing access to VPC endpoints).
Only valid with `egress`.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">protocol</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) The protocol. If not icmp, icmpv6, tcp, udp, or all use the [protocol number](https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml)

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">security<wbr>Group<wbr>Id</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) The security group to apply this rule to.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">self</td>
            <td class="align-top"><code>boolean</code></td>
            <td class="align-top">{{% md %}}
(Optional) If true, the security group itself will be added as
a source to this ingress rule. Cannot be specified with `source_security_group_id`.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">source<wbr>Security<wbr>Group<wbr>Id</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) The security group id to allow access to/from,
depending on the `type`. Cannot be specified with `cidr_blocks` and `self`.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">to<wbr>Port</td>
            <td class="align-top"><code>number</code></td>
            <td class="align-top">{{% md %}}
(Optional) The end port (or ICMP code if protocol is "icmp").

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">type</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) The type of rule being created. Valid options are `ingress` (inbound)
or `egress` (outbound).

{{% /md %}}</td>
        </tr>
    </tbody>
</table>

## Import an Existing SecurityGroupRule Resource

TODO

## Support Types
