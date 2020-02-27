---
title: "BucketObject"
---

<!-- WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. -->
<!-- Do not edit by hand unless you're certain you know what you are doing! -->

<style>
  table td p { margin-top: 0; margin-bottom: 0; }
</style>

Provides a S3 bucket object resource.

> This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/s3_bucket_object.html.markdown.


## Create a BucketObject Resource

{{< langchoose csharp >}}

<div class="highlight"><pre class="chroma"><code class="language-typescript" data-lang="typescript"><span class="k">new</span> <span class="nx"><a href=/docs/reference/pkg/nodejs/pulumi/aws/s3/#BucketObject>BucketObject</a></span><span class="p">(</span><span class="nx">name</span>: <span class="kt"><a href=https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String>string</a></span><span class="p">,</span> <span class="nx">args</span>: <span class="kt"><a href=/docs/reference/pkg/nodejs/pulumi/aws/s3/#BucketObjectArgs>BucketObjectArgs</a></span><span class="p">,</span> <span class="nx">opts?</span>: <span class="kt"><a href=/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions>pulumi.CustomResourceOptions</a></span><span class="p">);</span></code></pre></div>

```python
def __init__(__self__, resource_name, opts=None, acl=None, bucket=None, cache_control=None, content=None, content_base64=None, content_disposition=None, content_encoding=None, content_language=None, content_type=None, etag=None, force_destroy=None, key=None, kms_key_id=None, metadata=None, object_lock_legal_hold_status=None, object_lock_mode=None, object_lock_retain_until_date=None, server_side_encryption=None, source=None, storage_class=None, tags=None, website_redirect=None, __props__=None)
```

```go
func NewBucketObject(ctx *pulumi.Context, name string, args *BucketObjectArgs, opts ...pulumi.ResourceOption) (*BucketObject, error)

```

```csharp
public BucketObject(string name, BucketObjectArgs args, CustomResourceOptions? options = null)

```

Creates a BucketObject resource with the given unique name, arguments, and options.

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
            <td class="align-top">acl</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) The [canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl) to apply. Defaults to "private".

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">bucket</td>
            <td class="align-top"><code>Union&lt;<wbr>string, <wbr>Bucket<wbr>&gt;</code></td>
            <td class="align-top">{{% md %}}
(Required) The name of the bucket to put the file in.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">cache<wbr>Control</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) Specifies caching behavior along the request/reply chain Read [w3c cache_control](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9) for further details.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">content</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) Literal string value to use as the object content, which will be uploaded as UTF-8-encoded text.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">content<wbr>Base64</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) Base64-encoded data that will be decoded and uploaded as raw bytes for the object content. This allows safely uploading non-UTF8 binary data, but is recommended only for small content such as the result of the `gzipbase64` function with small text strings. For larger objects, use `source` to stream the content from a disk file.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">content<wbr>Disposition</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) Specifies presentational information for the object. Read [w3c content_disposition](http://www.w3.org/Protocols/rfc2616/rfc2616-sec19.html#sec19.5.1) for further information.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">content<wbr>Encoding</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field. Read [w3c content encoding](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.11) for further information.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">content<wbr>Language</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) The language the content is in e.g. en-US or en-GB.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">content<wbr>Type</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) A standard MIME type describing the format of the object data, e.g. application/octet-stream. All Valid MIME Types are valid for this input.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">etag</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) Used to trigger updates. The only meaningful value is `${filemd5("path/to/file")}` (this provider 0.11.12 or later) or `${md5(file("path/to/file"))}` (this provider 0.11.11 or earlier).
This attribute is not compatible with KMS encryption, `kms_key_id` or `server_side_encryption = "aws:kms"`.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">force<wbr>Destroy</td>
            <td class="align-top"><code>boolean</code></td>
            <td class="align-top">{{% md %}}
(Optional) Allow the object to be deleted by removing any legal hold on any object version.
Default is `false`. This value should be set to `true` only if the bucket has S3 object lock enabled.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">key</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) The name of the object once it is in the bucket.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">kms<wbr>Key<wbr>Id</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) Specifies the AWS KMS Key ARN to use for object encryption.
This value is a fully qualified **ARN** of the KMS Key. If using `aws.kms.Key`,
use the exported `arn` attribute:
`kms_key_id = "${aws_kms_key.foo.arn}"`

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">metadata</td>
            <td class="align-top"><code>Map&lt;<wbr>string<wbr>&gt;</code></td>
            <td class="align-top">{{% md %}}
(Optional) A mapping of keys/values to provision metadata (will be automatically prefixed by `x-amz-meta-`, note that only lowercase label are currently supported by the AWS Go API).

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">object<wbr>Lock<wbr>Legal<wbr>Hold<wbr>Status</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) The [legal hold](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html#object-lock-legal-holds) status that you want to apply to the specified object. Valid values are `ON` and `OFF`.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">object<wbr>Lock<wbr>Mode</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) The object lock [retention mode](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html#object-lock-retention-modes) that you want to apply to this object. Valid values are `GOVERNANCE` and `COMPLIANCE`.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">object<wbr>Lock<wbr>Retain<wbr>Until<wbr>Date</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) The date and time, in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8), when this object's object lock will [expire](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html#object-lock-retention-periods).

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">server<wbr>Side<wbr>Encryption</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) Specifies server-side encryption of the object in S3. Valid values are "`AES256`" and "`aws:kms`".

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">source</td>
            <td class="align-top"><code>Union&lt;<wbr>Asset, <wbr>Archive<wbr>&gt;</code></td>
            <td class="align-top">{{% md %}}
(Optional) The path to a file that will be read and uploaded as raw bytes for the object content.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">storage<wbr>Class</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) Specifies the desired [Storage Class](http://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html)
for the object. Can be either "`STANDARD`", "`REDUCED_REDUNDANCY`", "`ONEZONE_IA`", "`INTELLIGENT_TIERING`", "`GLACIER`", "`DEEP_ARCHIVE`", or "`STANDARD_IA`". Defaults to "`STANDARD`".

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">tags</td>
            <td class="align-top"><code>Map&lt;<wbr>any<wbr>&gt;</code></td>
            <td class="align-top">{{% md %}}
(Optional) A mapping of tags to assign to the object.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">website<wbr>Redirect</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) Specifies a target URL for [website redirect](http://docs.aws.amazon.com/AmazonS3/latest/dev/how-to-page-redirect.html).

{{% /md %}}</td>
        </tr>
    </tbody>
</table>

## BucketObject Output Properties

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
            <td class="align-top">acl</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
The [canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl) to apply. Defaults to "private".

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">bucket</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
The name of the bucket to put the file in.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">cache<wbr>Control</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
Specifies caching behavior along the request/reply chain Read [w3c cache_control](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9) for further details.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">content</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
Literal string value to use as the object content, which will be uploaded as UTF-8-encoded text.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">content<wbr>Base64</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
Base64-encoded data that will be decoded and uploaded as raw bytes for the object content. This allows safely uploading non-UTF8 binary data, but is recommended only for small content such as the result of the `gzipbase64` function with small text strings. For larger objects, use `source` to stream the content from a disk file.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">content<wbr>Disposition</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
Specifies presentational information for the object. Read [w3c content_disposition](http://www.w3.org/Protocols/rfc2616/rfc2616-sec19.html#sec19.5.1) for further information.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">content<wbr>Encoding</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field. Read [w3c content encoding](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.11) for further information.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">content<wbr>Language</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
The language the content is in e.g. en-US or en-GB.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">content<wbr>Type</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
A standard MIME type describing the format of the object data, e.g. application/octet-stream. All Valid MIME Types are valid for this input.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">etag</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
Used to trigger updates. The only meaningful value is `${filemd5("path/to/file")}` (this provider 0.11.12 or later) or `${md5(file("path/to/file"))}` (this provider 0.11.11 or earlier).
This attribute is not compatible with KMS encryption, `kms_key_id` or `server_side_encryption = "aws:kms"`.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">force<wbr>Destroy</td>
            <td class="align-top"><code>boolean</code></td>
            <td class="align-top">{{% md %}}
Allow the object to be deleted by removing any legal hold on any object version.
Default is `false`. This value should be set to `true` only if the bucket has S3 object lock enabled.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">key</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
The name of the object once it is in the bucket.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">kms<wbr>Key<wbr>Id</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
Specifies the AWS KMS Key ARN to use for object encryption.
This value is a fully qualified **ARN** of the KMS Key. If using `aws.kms.Key`,
use the exported `arn` attribute:
`kms_key_id = "${aws_kms_key.foo.arn}"`

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">metadata</td>
            <td class="align-top"><code>Map&lt;<wbr>string<wbr>&gt;</code></td>
            <td class="align-top">{{% md %}}
A mapping of keys/values to provision metadata (will be automatically prefixed by `x-amz-meta-`, note that only lowercase label are currently supported by the AWS Go API).

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">object<wbr>Lock<wbr>Legal<wbr>Hold<wbr>Status</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
The [legal hold](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html#object-lock-legal-holds) status that you want to apply to the specified object. Valid values are `ON` and `OFF`.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">object<wbr>Lock<wbr>Mode</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
The object lock [retention mode](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html#object-lock-retention-modes) that you want to apply to this object. Valid values are `GOVERNANCE` and `COMPLIANCE`.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">object<wbr>Lock<wbr>Retain<wbr>Until<wbr>Date</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
The date and time, in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8), when this object's object lock will [expire](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html#object-lock-retention-periods).

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">server<wbr>Side<wbr>Encryption</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
Specifies server-side encryption of the object in S3. Valid values are "`AES256`" and "`aws:kms`".

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">source</td>
            <td class="align-top"><code>Union&lt;<wbr>Asset, <wbr>Archive<wbr>&gt;</code></td>
            <td class="align-top">{{% md %}}
The path to a file that will be read and uploaded as raw bytes for the object content.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">storage<wbr>Class</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
Specifies the desired [Storage Class](http://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html)
for the object. Can be either "`STANDARD`", "`REDUCED_REDUNDANCY`", "`ONEZONE_IA`", "`INTELLIGENT_TIERING`", "`GLACIER`", "`DEEP_ARCHIVE`", or "`STANDARD_IA`". Defaults to "`STANDARD`".

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">tags</td>
            <td class="align-top"><code>Map&lt;<wbr>any<wbr>&gt;</code></td>
            <td class="align-top">{{% md %}}
A mapping of tags to assign to the object.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">version<wbr>Id</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
A unique version ID value for the object, if bucket versioning
is enabled.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">website<wbr>Redirect</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
Specifies a target URL for [website redirect](http://docs.aws.amazon.com/AmazonS3/latest/dev/how-to-page-redirect.html).

{{% /md %}}</td>
        </tr>
    </tbody>
</table>

## Look up an Existing BucketObject Resource

{{< langchoose csharp >}}

```typescript
public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BucketObjectState, opts?: pulumi.CustomResourceOptions): BucketObject;
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

Get an existing BucketObject resource's state with the given name, ID, and optional extra
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
            <td class="align-top">acl</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) The [canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl) to apply. Defaults to "private".

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">bucket</td>
            <td class="align-top"><code>Union&lt;<wbr>string, <wbr>Bucket<wbr>&gt;</code></td>
            <td class="align-top">{{% md %}}
(Optional) The name of the bucket to put the file in.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">cache<wbr>Control</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) Specifies caching behavior along the request/reply chain Read [w3c cache_control](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9) for further details.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">content</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) Literal string value to use as the object content, which will be uploaded as UTF-8-encoded text.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">content<wbr>Base64</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) Base64-encoded data that will be decoded and uploaded as raw bytes for the object content. This allows safely uploading non-UTF8 binary data, but is recommended only for small content such as the result of the `gzipbase64` function with small text strings. For larger objects, use `source` to stream the content from a disk file.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">content<wbr>Disposition</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) Specifies presentational information for the object. Read [w3c content_disposition](http://www.w3.org/Protocols/rfc2616/rfc2616-sec19.html#sec19.5.1) for further information.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">content<wbr>Encoding</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field. Read [w3c content encoding](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.11) for further information.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">content<wbr>Language</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) The language the content is in e.g. en-US or en-GB.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">content<wbr>Type</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) A standard MIME type describing the format of the object data, e.g. application/octet-stream. All Valid MIME Types are valid for this input.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">etag</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) Used to trigger updates. The only meaningful value is `${filemd5("path/to/file")}` (this provider 0.11.12 or later) or `${md5(file("path/to/file"))}` (this provider 0.11.11 or earlier).
This attribute is not compatible with KMS encryption, `kms_key_id` or `server_side_encryption = "aws:kms"`.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">force<wbr>Destroy</td>
            <td class="align-top"><code>boolean</code></td>
            <td class="align-top">{{% md %}}
(Optional) Allow the object to be deleted by removing any legal hold on any object version.
Default is `false`. This value should be set to `true` only if the bucket has S3 object lock enabled.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">key</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) The name of the object once it is in the bucket.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">kms<wbr>Key<wbr>Id</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) Specifies the AWS KMS Key ARN to use for object encryption.
This value is a fully qualified **ARN** of the KMS Key. If using `aws.kms.Key`,
use the exported `arn` attribute:
`kms_key_id = "${aws_kms_key.foo.arn}"`

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">metadata</td>
            <td class="align-top"><code>Map&lt;<wbr>string<wbr>&gt;</code></td>
            <td class="align-top">{{% md %}}
(Optional) A mapping of keys/values to provision metadata (will be automatically prefixed by `x-amz-meta-`, note that only lowercase label are currently supported by the AWS Go API).

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">object<wbr>Lock<wbr>Legal<wbr>Hold<wbr>Status</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) The [legal hold](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html#object-lock-legal-holds) status that you want to apply to the specified object. Valid values are `ON` and `OFF`.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">object<wbr>Lock<wbr>Mode</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) The object lock [retention mode](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html#object-lock-retention-modes) that you want to apply to this object. Valid values are `GOVERNANCE` and `COMPLIANCE`.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">object<wbr>Lock<wbr>Retain<wbr>Until<wbr>Date</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) The date and time, in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8), when this object's object lock will [expire](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html#object-lock-retention-periods).

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">server<wbr>Side<wbr>Encryption</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) Specifies server-side encryption of the object in S3. Valid values are "`AES256`" and "`aws:kms`".

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">source</td>
            <td class="align-top"><code>Union&lt;<wbr>Asset, <wbr>Archive<wbr>&gt;</code></td>
            <td class="align-top">{{% md %}}
(Optional) The path to a file that will be read and uploaded as raw bytes for the object content.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">storage<wbr>Class</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) Specifies the desired [Storage Class](http://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html)
for the object. Can be either "`STANDARD`", "`REDUCED_REDUNDANCY`", "`ONEZONE_IA`", "`INTELLIGENT_TIERING`", "`GLACIER`", "`DEEP_ARCHIVE`", or "`STANDARD_IA`". Defaults to "`STANDARD`".

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">tags</td>
            <td class="align-top"><code>Map&lt;<wbr>any<wbr>&gt;</code></td>
            <td class="align-top">{{% md %}}
(Optional) A mapping of tags to assign to the object.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">version<wbr>Id</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) A unique version ID value for the object, if bucket versioning
is enabled.

{{% /md %}}</td>
        </tr>
        <tr>
            <td class="align-top">website<wbr>Redirect</td>
            <td class="align-top"><code>string</code></td>
            <td class="align-top">{{% md %}}
(Optional) Specifies a target URL for [website redirect](http://docs.aws.amazon.com/AmazonS3/latest/dev/how-to-page-redirect.html).

{{% /md %}}</td>
        </tr>
    </tbody>
</table>

## Import an Existing BucketObject Resource

TODO

## Support Types
