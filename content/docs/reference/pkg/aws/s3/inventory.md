
---
title: "Inventory"
block_external_search_index: true
---



Provides a S3 bucket [inventory configuration](https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-inventory.html) resource.

{{% examples %}}
## Example Usage

{{% example %}}
### Add inventory configuration

```typescript
import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

const testBucket = new aws.s3.Bucket("test", {});
const inventory = new aws.s3.Bucket("inventory", {});
const testInventory = new aws.s3.Inventory("test", {
    bucket: testBucket.id,
    destination: {
        bucket: {
            bucketArn: inventory.arn,
            format: "ORC",
        },
    },
    includedObjectVersions: "All",
    schedule: {
        frequency: "Daily",
    },
});
```

{{% /example %}}
{{% example %}}
### Add inventory configuration with S3 bucket object prefix

```typescript
import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

const test = new aws.s3.Bucket("test", {});
const inventory = new aws.s3.Bucket("inventory", {});
const test_prefix = new aws.s3.Inventory("test-prefix", {
    bucket: test.id,
    destination: {
        bucket: {
            bucketArn: inventory.arn,
            format: "ORC",
            prefix: "inventory",
        },
    },
    filter: {
        prefix: "documents/",
    },
    includedObjectVersions: "All",
    schedule: {
        frequency: "Daily",
    },
});
```

{{% /example %}}
{{% /examples %}}



## Create a Inventory Resource

{{< chooser language "javascript,typescript,python,go,csharp" / >}}

{{% choosable language nodejs %}}
<div class="highlight"><pre class="chroma"><code class="language-typescript" data-lang="typescript"><span class="k">new </span><span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/aws/s3/#Inventory">Inventory</a></span><span class="p">(</span><span class="nx">name</span>: <span class="nx"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span><span class="p">, </span><span class="nx">args</span>: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/aws/s3/#InventoryArgs">InventoryArgs</a></span><span class="p">, </span><span class="nx">opts</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions">CustomResourceOptions</a></span><span class="p">);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language python %}}
<div class="highlight"><pre class="chroma"><code class="language-python" data-lang="python"><span class="k">def </span><span class="nf">Inventory</span><span class="p">(resource_name, opts=None, </span>bucket=None<span class="p">, </span>destination=None<span class="p">, </span>enabled=None<span class="p">, </span>filter=None<span class="p">, </span>included_object_versions=None<span class="p">, </span>name=None<span class="p">, </span>optional_fields=None<span class="p">, </span>schedule=None<span class="p">, __props__=None);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language go %}}
<div class="highlight"><pre class="chroma"><code class="language-go" data-lang="go"><span class="k">func </span>NewInventory<span class="p">(</span><span class="nx">ctx</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#Context">Context</a></span><span class="p">, </span><span class="nx">name</span> <span class="nx"><a href="https://golang.org/pkg/builtin/#string">string</a></span><span class="p">, </span><span class="nx">args</span> <span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/s3?tab=doc#InventoryArgs">InventoryArgs</a></span><span class="p">, </span><span class="nx">opts</span> ...<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#ResourceOption">ResourceOption</a></span><span class="p">) (*<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/s3?tab=doc#Inventory">Inventory</a></span>, error)</span></code></pre></div>
{{% /choosable %}}

{{% choosable language csharp %}}
<div class="highlight"><pre class="chroma"><code class="language-csharp" data-lang="csharp"><span class="k">public </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Aws/Pulumi.Aws.S3.Inventory.html">Inventory</a></span><span class="p">(</span><span class="nx"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span> <span class="nx">name<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Aws/Pulumi.Aws.S3.InventoryArgs.html">InventoryArgs</a></span> <span class="nx">args<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.CustomResourceOptions.html">CustomResourceOptions</a></span>? <span class="nx">opts = null<span class="p">)</span></code></pre></div>
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
        <span>Bucket</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the bucket where the inventory configuration will be stored.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Destination</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#inventorydestination">Inventory<wbr>Destination<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}Contains information about where to publish the inventory results (documented below).
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Included<wbr>Object<wbr>Versions</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Object versions to include in the inventory list. Valid values: `All`, `Current`.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Schedule</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#inventoryschedule">Inventory<wbr>Schedule<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}Specifies the schedule for generating inventory results (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Specifies whether the inventory is enabled or disabled.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Filter</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#inventoryfilter">Inventory<wbr>Filter<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}Specifies an inventory filter. The inventory only includes objects that meet the filter's criteria (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Unique identifier of the inventory configuration for the bucket.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Optional<wbr>Fields</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}List of optional fields that are included in the inventory results.
Valid values: `Size`, `LastModifiedDate`, `StorageClass`, `ETag`, `IsMultipartUploaded`, `ReplicationStatus`, `EncryptionStatus`, `ObjectLockRetainUntilDate`, `ObjectLockMode`, `ObjectLockLegalHoldStatus`, `IntelligentTieringAccessTier`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Bucket</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the bucket where the inventory configuration will be stored.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Destination</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#inventorydestination">Inventory<wbr>Destination</a></span>
    </dt>
    <dd>{{% md %}}Contains information about where to publish the inventory results (documented below).
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Included<wbr>Object<wbr>Versions</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Object versions to include in the inventory list. Valid values: `All`, `Current`.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Schedule</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#inventoryschedule">Inventory<wbr>Schedule</a></span>
    </dt>
    <dd>{{% md %}}Specifies the schedule for generating inventory results (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Specifies whether the inventory is enabled or disabled.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Filter</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#inventoryfilter">Inventory<wbr>Filter</a></span>
    </dt>
    <dd>{{% md %}}Specifies an inventory filter. The inventory only includes objects that meet the filter's criteria (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Unique identifier of the inventory configuration for the bucket.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Optional<wbr>Fields</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}List of optional fields that are included in the inventory results.
Valid values: `Size`, `LastModifiedDate`, `StorageClass`, `ETag`, `IsMultipartUploaded`, `ReplicationStatus`, `EncryptionStatus`, `ObjectLockRetainUntilDate`, `ObjectLockMode`, `ObjectLockLegalHoldStatus`, `IntelligentTieringAccessTier`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>bucket</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the bucket where the inventory configuration will be stored.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>destination</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#inventorydestination">Inventory<wbr>Destination</a></span>
    </dt>
    <dd>{{% md %}}Contains information about where to publish the inventory results (documented below).
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>included<wbr>Object<wbr>Versions</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Object versions to include in the inventory list. Valid values: `All`, `Current`.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>schedule</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#inventoryschedule">Inventory<wbr>Schedule</a></span>
    </dt>
    <dd>{{% md %}}Specifies the schedule for generating inventory results (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Specifies whether the inventory is enabled or disabled.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>filter</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#inventoryfilter">Inventory<wbr>Filter</a></span>
    </dt>
    <dd>{{% md %}}Specifies an inventory filter. The inventory only includes objects that meet the filter's criteria (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Unique identifier of the inventory configuration for the bucket.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>optional<wbr>Fields</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}List of optional fields that are included in the inventory results.
Valid values: `Size`, `LastModifiedDate`, `StorageClass`, `ETag`, `IsMultipartUploaded`, `ReplicationStatus`, `EncryptionStatus`, `ObjectLockRetainUntilDate`, `ObjectLockMode`, `ObjectLockLegalHoldStatus`, `IntelligentTieringAccessTier`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>bucket</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the bucket where the inventory configuration will be stored.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>destination</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#inventorydestination">Dict[Inventory<wbr>Destination]</a></span>
    </dt>
    <dd>{{% md %}}Contains information about where to publish the inventory results (documented below).
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>included_<wbr>object_<wbr>versions</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Object versions to include in the inventory list. Valid values: `All`, `Current`.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>schedule</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#inventoryschedule">Dict[Inventory<wbr>Schedule]</a></span>
    </dt>
    <dd>{{% md %}}Specifies the schedule for generating inventory results (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Specifies whether the inventory is enabled or disabled.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>filter</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#inventoryfilter">Dict[Inventory<wbr>Filter]</a></span>
    </dt>
    <dd>{{% md %}}Specifies an inventory filter. The inventory only includes objects that meet the filter's criteria (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Unique identifier of the inventory configuration for the bucket.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>optional_<wbr>fields</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}List of optional fields that are included in the inventory results.
Valid values: `Size`, `LastModifiedDate`, `StorageClass`, `ETag`, `IsMultipartUploaded`, `ReplicationStatus`, `EncryptionStatus`, `ObjectLockRetainUntilDate`, `ObjectLockMode`, `ObjectLockLegalHoldStatus`, `IntelligentTieringAccessTier`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}










## Look up an Existing Inventory Resource

Get an existing Inventory resource's state with the given name, ID, and optional extra properties used to qualify the lookup.

{{< chooser language "javascript,typescript,python,go,csharp  " / >}}

{{% choosable language nodejs %}}
<div class="highlight"><pre class="chroma"><code class="language-typescript" data-lang="typescript"><span class="k">public static </span><span class="nf">get</span><span class="p">(</span><span class="nx">name</span>: <span class="nx"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span><span class="p">, </span><span class="nx">id</span>: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#ID">Input&lt;ID&gt;</a></span><span class="p">, </span><span class="nx">state</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/aws/s3/#InventoryState">InventoryState</a></span><span class="p">, </span><span class="nx">opts</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions">CustomResourceOptions</a></span><span class="p">): </span><span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/aws/s3/#Inventory">Inventory</a></span></code></pre></div>
{{% /choosable %}}

{{% choosable language python %}}
<div class="highlight"><pre class="chroma"><code class="language-python" data-lang="python"><span class="k">static </span><span class="nf">get</span><span class="p">(resource_name, id, opts=None, </span>bucket=None<span class="p">, </span>destination=None<span class="p">, </span>enabled=None<span class="p">, </span>filter=None<span class="p">, </span>included_object_versions=None<span class="p">, </span>name=None<span class="p">, </span>optional_fields=None<span class="p">, </span>schedule=None<span class="p">, __props__=None);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language go %}}
<div class="highlight"><pre class="chroma"><code class="language-go" data-lang="go"><span class="k">func </span>GetInventory<span class="p">(</span><span class="nx">ctx</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#Context">Context</a></span><span class="p">, </span><span class="nx">name</span> <span class="nx"><a href="https://golang.org/pkg/builtin/#string">string</a></span><span class="p">, </span><span class="nx">id</span> <span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#IDInput">IDInput</a></span><span class="p">, </span><span class="nx">state</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/s3?tab=doc#InventoryState">InventoryState</a></span><span class="p">, </span><span class="nx">opts</span> ...<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#ResourceOption">ResourceOption</a></span><span class="p">) (*<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/s3?tab=doc#Inventory">Inventory</a></span>, error)</span></code></pre></div>
{{% /choosable %}}

{{% choosable language csharp %}}
<div class="highlight"><pre class="chroma"><code class="language-csharp" data-lang="csharp"><span class="k">public static </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Aws/Pulumi.Aws.S3.Inventory.html">Inventory</a></span><span class="nf"> Get</span><span class="p">(</span><span class="nx"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span> <span class="nx">name<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.Input.html">Input&lt;string&gt;</a></span> <span class="nx">id<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Aws/Pulumi.Aws.S3.InventoryState.html">InventoryState</a></span>? <span class="nx">state<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.CustomResourceOptions.html">CustomResourceOptions</a></span>? <span class="nx">opts = null<span class="p">)</span></code></pre></div>
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
        <span>Bucket</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the bucket where the inventory configuration will be stored.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Destination</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#inventorydestination">Inventory<wbr>Destination<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}Contains information about where to publish the inventory results (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}Specifies whether the inventory is enabled or disabled.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Filter</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#inventoryfilter">Inventory<wbr>Filter<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}Specifies an inventory filter. The inventory only includes objects that meet the filter's criteria (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Included<wbr>Object<wbr>Versions</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Object versions to include in the inventory list. Valid values: `All`, `Current`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Unique identifier of the inventory configuration for the bucket.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Optional<wbr>Fields</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}List of optional fields that are included in the inventory results.
Valid values: `Size`, `LastModifiedDate`, `StorageClass`, `ETag`, `IsMultipartUploaded`, `ReplicationStatus`, `EncryptionStatus`, `ObjectLockRetainUntilDate`, `ObjectLockMode`, `ObjectLockLegalHoldStatus`, `IntelligentTieringAccessTier`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Schedule</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#inventoryschedule">Inventory<wbr>Schedule<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}Specifies the schedule for generating inventory results (documented below).
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Bucket</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the bucket where the inventory configuration will be stored.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Destination</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#inventorydestination">Inventory<wbr>Destination</a></span>
    </dt>
    <dd>{{% md %}}Contains information about where to publish the inventory results (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}Specifies whether the inventory is enabled or disabled.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Filter</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#inventoryfilter">Inventory<wbr>Filter</a></span>
    </dt>
    <dd>{{% md %}}Specifies an inventory filter. The inventory only includes objects that meet the filter's criteria (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Included<wbr>Object<wbr>Versions</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Object versions to include in the inventory list. Valid values: `All`, `Current`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Unique identifier of the inventory configuration for the bucket.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Optional<wbr>Fields</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}List of optional fields that are included in the inventory results.
Valid values: `Size`, `LastModifiedDate`, `StorageClass`, `ETag`, `IsMultipartUploaded`, `ReplicationStatus`, `EncryptionStatus`, `ObjectLockRetainUntilDate`, `ObjectLockMode`, `ObjectLockLegalHoldStatus`, `IntelligentTieringAccessTier`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Schedule</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#inventoryschedule">Inventory<wbr>Schedule</a></span>
    </dt>
    <dd>{{% md %}}Specifies the schedule for generating inventory results (documented below).
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>bucket</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the bucket where the inventory configuration will be stored.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>destination</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#inventorydestination">Inventory<wbr>Destination</a></span>
    </dt>
    <dd>{{% md %}}Contains information about where to publish the inventory results (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}Specifies whether the inventory is enabled or disabled.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>filter</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#inventoryfilter">Inventory<wbr>Filter</a></span>
    </dt>
    <dd>{{% md %}}Specifies an inventory filter. The inventory only includes objects that meet the filter's criteria (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>included<wbr>Object<wbr>Versions</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Object versions to include in the inventory list. Valid values: `All`, `Current`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Unique identifier of the inventory configuration for the bucket.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>optional<wbr>Fields</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}List of optional fields that are included in the inventory results.
Valid values: `Size`, `LastModifiedDate`, `StorageClass`, `ETag`, `IsMultipartUploaded`, `ReplicationStatus`, `EncryptionStatus`, `ObjectLockRetainUntilDate`, `ObjectLockMode`, `ObjectLockLegalHoldStatus`, `IntelligentTieringAccessTier`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>schedule</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#inventoryschedule">Inventory<wbr>Schedule</a></span>
    </dt>
    <dd>{{% md %}}Specifies the schedule for generating inventory results (documented below).
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>bucket</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the bucket where the inventory configuration will be stored.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>destination</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#inventorydestination">Dict[Inventory<wbr>Destination]</a></span>
    </dt>
    <dd>{{% md %}}Contains information about where to publish the inventory results (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>enabled</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}Specifies whether the inventory is enabled or disabled.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>filter</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#inventoryfilter">Dict[Inventory<wbr>Filter]</a></span>
    </dt>
    <dd>{{% md %}}Specifies an inventory filter. The inventory only includes objects that meet the filter's criteria (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>included_<wbr>object_<wbr>versions</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Object versions to include in the inventory list. Valid values: `All`, `Current`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Unique identifier of the inventory configuration for the bucket.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>optional_<wbr>fields</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}List of optional fields that are included in the inventory results.
Valid values: `Size`, `LastModifiedDate`, `StorageClass`, `ETag`, `IsMultipartUploaded`, `ReplicationStatus`, `EncryptionStatus`, `ObjectLockRetainUntilDate`, `ObjectLockMode`, `ObjectLockLegalHoldStatus`, `IntelligentTieringAccessTier`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>schedule</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#inventoryschedule">Dict[Inventory<wbr>Schedule]</a></span>
    </dt>
    <dd>{{% md %}}Specifies the schedule for generating inventory results (documented below).
{{% /md %}}</dd>

</dl>
{{% /choosable %}}










## Supporting Types

<h4>Inventory<wbr>Destination</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#InventoryDestination">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#InventoryDestination">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/s3?tab=doc#InventoryDestinationArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/s3?tab=doc#InventoryDestinationOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Bucket</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#inventorydestinationbucket">Inventory<wbr>Destination<wbr>Bucket<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}The S3 bucket configuration where inventory results are published (documented below).
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Bucket</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#inventorydestinationbucket">Inventory<wbr>Destination<wbr>Bucket</a></span>
    </dt>
    <dd>{{% md %}}The S3 bucket configuration where inventory results are published (documented below).
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>bucket</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#inventorydestinationbucket">Inventory<wbr>Destination<wbr>Bucket</a></span>
    </dt>
    <dd>{{% md %}}The S3 bucket configuration where inventory results are published (documented below).
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>bucket</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#inventorydestinationbucket">Dict[Inventory<wbr>Destination<wbr>Bucket]</a></span>
    </dt>
    <dd>{{% md %}}The S3 bucket configuration where inventory results are published (documented below).
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Inventory<wbr>Destination<wbr>Bucket</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#InventoryDestinationBucket">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#InventoryDestinationBucket">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/s3?tab=doc#InventoryDestinationBucketArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/s3?tab=doc#InventoryDestinationBucketOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Bucket<wbr>Arn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The Amazon S3 bucket ARN of the destination.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Format</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the output format of the inventory results. Can be `CSV`, [`ORC`](https://orc.apache.org/) or [`Parquet`](https://parquet.apache.org/).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Account<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The ID of the account that owns the destination bucket. Recommended to be set to prevent problems if the destination bucket ownership changes.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Encryption</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#inventorydestinationbucketencryption">Inventory<wbr>Destination<wbr>Bucket<wbr>Encryption<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}Contains the type of server-side encryption to use to encrypt the inventory (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Prefix</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The prefix that is prepended to all inventory results.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Bucket<wbr>Arn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The Amazon S3 bucket ARN of the destination.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Format</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the output format of the inventory results. Can be `CSV`, [`ORC`](https://orc.apache.org/) or [`Parquet`](https://parquet.apache.org/).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Account<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The ID of the account that owns the destination bucket. Recommended to be set to prevent problems if the destination bucket ownership changes.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Encryption</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#inventorydestinationbucketencryption">Inventory<wbr>Destination<wbr>Bucket<wbr>Encryption</a></span>
    </dt>
    <dd>{{% md %}}Contains the type of server-side encryption to use to encrypt the inventory (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Prefix</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The prefix that is prepended to all inventory results.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>bucket<wbr>Arn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The Amazon S3 bucket ARN of the destination.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>format</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies the output format of the inventory results. Can be `CSV`, [`ORC`](https://orc.apache.org/) or [`Parquet`](https://parquet.apache.org/).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>account<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The ID of the account that owns the destination bucket. Recommended to be set to prevent problems if the destination bucket ownership changes.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>encryption</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#inventorydestinationbucketencryption">Inventory<wbr>Destination<wbr>Bucket<wbr>Encryption</a></span>
    </dt>
    <dd>{{% md %}}Contains the type of server-side encryption to use to encrypt the inventory (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>prefix</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The prefix that is prepended to all inventory results.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>bucket<wbr>Arn</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The Amazon S3 bucket ARN of the destination.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>format</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies the output format of the inventory results. Can be `CSV`, [`ORC`](https://orc.apache.org/) or [`Parquet`](https://parquet.apache.org/).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>account_<wbr>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The ID of the account that owns the destination bucket. Recommended to be set to prevent problems if the destination bucket ownership changes.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>encryption</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#inventorydestinationbucketencryption">Dict[Inventory<wbr>Destination<wbr>Bucket<wbr>Encryption]</a></span>
    </dt>
    <dd>{{% md %}}Contains the type of server-side encryption to use to encrypt the inventory (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>prefix</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The prefix that is prepended to all inventory results.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Inventory<wbr>Destination<wbr>Bucket<wbr>Encryption</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#InventoryDestinationBucketEncryption">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#InventoryDestinationBucketEncryption">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/s3?tab=doc#InventoryDestinationBucketEncryptionArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/s3?tab=doc#InventoryDestinationBucketEncryptionOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Sse<wbr>Kms</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#inventorydestinationbucketencryptionssekms">Inventory<wbr>Destination<wbr>Bucket<wbr>Encryption<wbr>Sse<wbr>Kms<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}Specifies to use server-side encryption with AWS KMS-managed keys to encrypt the inventory file (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sse<wbr>S3</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#inventorydestinationbucketencryptionsses3">Inventory<wbr>Destination<wbr>Bucket<wbr>Encryption<wbr>Sse<wbr>S3Args</a></span>
    </dt>
    <dd>{{% md %}}Specifies to use server-side encryption with Amazon S3-managed keys (SSE-S3) to encrypt the inventory file.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Sse<wbr>Kms</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#inventorydestinationbucketencryptionssekms">Inventory<wbr>Destination<wbr>Bucket<wbr>Encryption<wbr>Sse<wbr>Kms</a></span>
    </dt>
    <dd>{{% md %}}Specifies to use server-side encryption with AWS KMS-managed keys to encrypt the inventory file (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sse<wbr>S3</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#inventorydestinationbucketencryptionsses3">Inventory<wbr>Destination<wbr>Bucket<wbr>Encryption<wbr>Sse<wbr>S3</a></span>
    </dt>
    <dd>{{% md %}}Specifies to use server-side encryption with Amazon S3-managed keys (SSE-S3) to encrypt the inventory file.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>sse<wbr>Kms</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#inventorydestinationbucketencryptionssekms">Inventory<wbr>Destination<wbr>Bucket<wbr>Encryption<wbr>Sse<wbr>Kms</a></span>
    </dt>
    <dd>{{% md %}}Specifies to use server-side encryption with AWS KMS-managed keys to encrypt the inventory file (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sse<wbr>S3</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#inventorydestinationbucketencryptionsses3">Inventory<wbr>Destination<wbr>Bucket<wbr>Encryption<wbr>Sse<wbr>S3</a></span>
    </dt>
    <dd>{{% md %}}Specifies to use server-side encryption with Amazon S3-managed keys (SSE-S3) to encrypt the inventory file.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>sse<wbr>Kms</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#inventorydestinationbucketencryptionssekms">Dict[Inventory<wbr>Destination<wbr>Bucket<wbr>Encryption<wbr>Sse<wbr>Kms]</a></span>
    </dt>
    <dd>{{% md %}}Specifies to use server-side encryption with AWS KMS-managed keys to encrypt the inventory file (documented below).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sse<wbr>S3</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#inventorydestinationbucketencryptionsses3">Dict[Inventory<wbr>Destination<wbr>Bucket<wbr>Encryption<wbr>Sse<wbr>S3]</a></span>
    </dt>
    <dd>{{% md %}}Specifies to use server-side encryption with Amazon S3-managed keys (SSE-S3) to encrypt the inventory file.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Inventory<wbr>Destination<wbr>Bucket<wbr>Encryption<wbr>Sse<wbr>Kms</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#InventoryDestinationBucketEncryptionSseKms">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#InventoryDestinationBucketEncryptionSseKms">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/s3?tab=doc#InventoryDestinationBucketEncryptionSseKmsArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/s3?tab=doc#InventoryDestinationBucketEncryptionSseKmsOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Key<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The ARN of the KMS customer master key (CMK) used to encrypt the inventory file.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Key<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The ARN of the KMS customer master key (CMK) used to encrypt the inventory file.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>key<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The ARN of the KMS customer master key (CMK) used to encrypt the inventory file.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>key_<wbr>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The ARN of the KMS customer master key (CMK) used to encrypt the inventory file.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Inventory<wbr>Filter</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#InventoryFilter">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#InventoryFilter">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/s3?tab=doc#InventoryFilterArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/s3?tab=doc#InventoryFilterOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Prefix</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The prefix that an object must have to be included in the inventory results.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Prefix</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The prefix that an object must have to be included in the inventory results.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>prefix</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The prefix that an object must have to be included in the inventory results.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>prefix</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The prefix that an object must have to be included in the inventory results.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Inventory<wbr>Schedule</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#InventorySchedule">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#InventorySchedule">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/s3?tab=doc#InventoryScheduleArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/s3?tab=doc#InventoryScheduleOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Frequency</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies how frequently inventory results are produced. Valid values: `Daily`, `Weekly`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Frequency</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies how frequently inventory results are produced. Valid values: `Daily`, `Weekly`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>frequency</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Specifies how frequently inventory results are produced. Valid values: `Daily`, `Weekly`.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>frequency</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Specifies how frequently inventory results are produced. Valid values: `Daily`, `Weekly`.
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

