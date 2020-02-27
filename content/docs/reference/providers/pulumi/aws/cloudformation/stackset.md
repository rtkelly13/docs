---
title: "StackSet"
---

<!-- WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. -->
<!-- Do not edit by hand unless you're certain you know what you are doing! -->

<style>
  table td p { margin-top: 0; margin-bottom: 0; }
</style>

Manages a CloudFormation Stack Set. Stack Sets allow CloudFormation templates to be easily deployed across multiple accounts and regions via Stack Set Instances ([`aws.cloudformation.StackSetInstance` resource](https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html)). Additional information about Stack Sets can be found in the [AWS CloudFormation User Guide](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/what-is-cfnstacksets.html).

> **NOTE:** All template parameters, including those with a `Default`, must be configured or ignored with the `lifecycle` configuration block `ignore_changes` argument.

> **NOTE:** All `NoEcho` template parameters must be ignored with the `lifecycle` configuration block `ignore_changes` argument.

> This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/cloudformation_stack_set.html.markdown.


## Create a StackSet Resource

{{< langchoose csharp >}}

<div class="highlight"><pre class="chroma"><code class="language-typescript" data-lang="typescript"><span class="k">new</span> <span class="nx"><a href=/docs/reference/pkg/nodejs/pulumi/aws/s3/#StackSet>StackSet</a></span><span class="p">(</span><span class="nx">name</span>: <span class="kt"><a href=https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String>string</a></span><span class="p">,</span> <span class="nx">args</span>: <span class="kt"><a href=/docs/reference/pkg/nodejs/pulumi/aws/s3/#StackSetArgs>StackSetArgs</a></span><span class="p">,</span> <span class="nx">opts?</span>: <span class="kt"><a href=/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions>pulumi.CustomResourceOptions</a></span><span class="p">);</span></code></pre></div>

```python
def __init__(__self__, resource_name, opts=None, administration_role_arn=None, capabilities=None, description=None, execution_role_name=None, name=None, parameters=None, tags=None, template_body=None, template_url=None, __props__=None)
```

```go
func NewStackSet(ctx *pulumi.Context, name string, args *StackSetArgs, opts ...pulumi.ResourceOption) (*StackSet, error)

```

```csharp
public StackSet(string name, StackSetArgs args, CustomResourceOptions? options = null)

```

Creates a StackSet resource with the given unique name, arguments, and options.

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
            <td class="align-top">administration<wbr>Role<wbr>Arn</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Required) Amazon Resource Number (ARN) of the IAM Role in the administrator account.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">capabilities</td>
            <td class="align-top"><code>Array&lt;<wbr>string<wbr>&gt;</code></td>
            <td class="align-top">{{% md %}}
(Optional) A list of capabilities. Valid values: `CAPABILITY_IAM`, `CAPABILITY_NAMED_IAM`, `CAPABILITY_AUTO_EXPAND`.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">description</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) Description of the Stack Set.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">execution<wbr>Role<wbr>Name</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) Name of the IAM Role in all target accounts for Stack Set operations. Defaults to `AWSCloudFormationStackSetExecutionRole`.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">name</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) Name of the Stack Set. The name must be unique in the region where you create your Stack Set. The name can contain only alphanumeric characters (case-sensitive) and hyphens. It must start with an alphabetic character and cannot be longer than 128 characters.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">parameters</td>
            <td class="align-top"><code>Map&lt;<wbr>string<wbr>&gt;</code></td>
            <td class="align-top">{{% md %}}
(Optional) Key-value map of input parameters for the Stack Set template. All template parameters, including those with a `Default`, must be configured or ignored with `lifecycle` configuration block `ignore_changes` argument. All `NoEcho` template parameters must be ignored with the `lifecycle` configuration block `ignore_changes` argument.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">tags</td>
            <td class="align-top"><code>Map&lt;<wbr>any<wbr>&gt;</code></td>
            <td class="align-top">{{% md %}}
(Optional) Key-value map of tags to associate with this Stack Set and the Stacks created from it. AWS CloudFormation also propagates these tags to supported resources that are created in the Stacks. A maximum number of 50 tags can be specified.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">template<wbr>Body</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) String containing the CloudFormation template body. Maximum size: 51,200 bytes. Conflicts with `template_url`.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">template<wbr>Url</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) String containing the location of a file containing the CloudFormation template body. The URL must point to a template that is located in an Amazon S3 bucket. Maximum location file size: 460,800 bytes. Conflicts with `template_body`.

{{% /md %}}</td>
        </tr>
    </tbody>
</table>

## StackSet Output Properties

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
            <td class="align-top">administration<wbr>Role<wbr>Arn</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
Amazon Resource Number (ARN) of the IAM Role in the administrator account.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">arn</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
Amazon Resource Name (ARN) of the Stack Set.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">capabilities</td>
            <td class="align-top"><code>Array&lt;<wbr>string<wbr>&gt;</code></td>
            <td class="align-top">{{% md %}}
A list of capabilities. Valid values: `CAPABILITY_IAM`, `CAPABILITY_NAMED_IAM`, `CAPABILITY_AUTO_EXPAND`.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">description</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
Description of the Stack Set.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">execution<wbr>Role<wbr>Name</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
Name of the IAM Role in all target accounts for Stack Set operations. Defaults to `AWSCloudFormationStackSetExecutionRole`.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">name</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
Name of the Stack Set. The name must be unique in the region where you create your Stack Set. The name can contain only alphanumeric characters (case-sensitive) and hyphens. It must start with an alphabetic character and cannot be longer than 128 characters.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">parameters</td>
            <td class="align-top"><code>Map&lt;<wbr>string<wbr>&gt;</code></td>
            <td class="align-top">{{% md %}}
Key-value map of input parameters for the Stack Set template. All template parameters, including those with a `Default`, must be configured or ignored with `lifecycle` configuration block `ignore_changes` argument. All `NoEcho` template parameters must be ignored with the `lifecycle` configuration block `ignore_changes` argument.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">stack<wbr>Set<wbr>Id</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
Unique identifier of the Stack Set.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">tags</td>
            <td class="align-top"><code>Map&lt;<wbr>any<wbr>&gt;</code></td>
            <td class="align-top">{{% md %}}
Key-value map of tags to associate with this Stack Set and the Stacks created from it. AWS CloudFormation also propagates these tags to supported resources that are created in the Stacks. A maximum number of 50 tags can be specified.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">template<wbr>Body</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
String containing the CloudFormation template body. Maximum size: 51,200 bytes. Conflicts with `template_url`.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">template<wbr>Url</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
String containing the location of a file containing the CloudFormation template body. The URL must point to a template that is located in an Amazon S3 bucket. Maximum location file size: 460,800 bytes. Conflicts with `template_body`.

{{% /md %}}</td>
        </tr>
    </tbody>
</table>

## Look up an Existing StackSet Resource

{{< langchoose csharp >}}

```typescript
public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: StackSetState, opts?: pulumi.CustomResourceOptions): StackSet;
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

Get an existing StackSet resource's state with the given name, ID, and optional extra
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
            <td class="align-top">administration<wbr>Role<wbr>Arn</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) Amazon Resource Number (ARN) of the IAM Role in the administrator account.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">arn</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) Amazon Resource Name (ARN) of the Stack Set.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">capabilities</td>
            <td class="align-top"><code>Array&lt;<wbr>string<wbr>&gt;</code></td>
            <td class="align-top">{{% md %}}
(Optional) A list of capabilities. Valid values: `CAPABILITY_IAM`, `CAPABILITY_NAMED_IAM`, `CAPABILITY_AUTO_EXPAND`.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">description</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) Description of the Stack Set.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">execution<wbr>Role<wbr>Name</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) Name of the IAM Role in all target accounts for Stack Set operations. Defaults to `AWSCloudFormationStackSetExecutionRole`.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">name</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) Name of the Stack Set. The name must be unique in the region where you create your Stack Set. The name can contain only alphanumeric characters (case-sensitive) and hyphens. It must start with an alphabetic character and cannot be longer than 128 characters.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">parameters</td>
            <td class="align-top"><code>Map&lt;<wbr>string<wbr>&gt;</code></td>
            <td class="align-top">{{% md %}}
(Optional) Key-value map of input parameters for the Stack Set template. All template parameters, including those with a `Default`, must be configured or ignored with `lifecycle` configuration block `ignore_changes` argument. All `NoEcho` template parameters must be ignored with the `lifecycle` configuration block `ignore_changes` argument.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">stack<wbr>Set<wbr>Id</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) Unique identifier of the Stack Set.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">tags</td>
            <td class="align-top"><code>Map&lt;<wbr>any<wbr>&gt;</code></td>
            <td class="align-top">{{% md %}}
(Optional) Key-value map of tags to associate with this Stack Set and the Stacks created from it. AWS CloudFormation also propagates these tags to supported resources that are created in the Stacks. A maximum number of 50 tags can be specified.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">template<wbr>Body</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) String containing the CloudFormation template body. Maximum size: 51,200 bytes. Conflicts with `template_url`.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">template<wbr>Url</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) String containing the location of a file containing the CloudFormation template body. The URL must point to a template that is located in an Amazon S3 bucket. Maximum location file size: 460,800 bytes. Conflicts with `template_body`.

{{% /md %}}</td>
        </tr>
    </tbody>
</table>

## Import an Existing StackSet Resource

TODO

## Support Types
