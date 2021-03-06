
---
title: "CatalogTable"
block_external_search_index: true
---



Provides a Glue Catalog Table Resource. You can refer to the [Glue Developer Guide](http://docs.aws.amazon.com/glue/latest/dg/populate-data-catalog.html) for a full explanation of the Glue Data Catalog functionality.

{{% examples %}}
## Example Usage

{{% example %}}
### Basic Table

```typescript
import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

const awsGlueCatalogTable = new aws.glue.CatalogTable("aws.glue.CatalogTable", {
    databaseName: "MyCatalogDatabase",
    name: "MyCatalogTable",
});
```

{{% /example %}}
{{% example %}}
### Parquet Table for Athena

```typescript
import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

const awsGlueCatalogTable = new aws.glue.CatalogTable("aws.glue.CatalogTable", {
    databaseName: "MyCatalogDatabase",
    name: "MyCatalogTable",
    parameters: {
        EXTERNAL: "TRUE",
        "parquet.compression": "SNAPPY",
    },
    storageDescriptor: {
        columns: [
            {
                name: "my_string",
                type: "string",
            },
            {
                name: "my_double",
                type: "double",
            },
            {
                comment: "",
                name: "my_date",
                type: "date",
            },
            {
                comment: "",
                name: "my_bigint",
                type: "bigint",
            },
            {
                comment: "",
                name: "my_struct",
                type: "struct<my_nested_string:string>",
            },
        ],
        inputFormat: "org.apache.hadoop.hive.ql.io.parquet.MapredParquetInputFormat",
        location: "s3://my-bucket/event-streams/my-stream",
        outputFormat: "org.apache.hadoop.hive.ql.io.parquet.MapredParquetOutputFormat",
        serDeInfo: {
            name: "my-stream",
            parameters: {
                "serialization.format": 1,
            },
            serializationLibrary: "org.apache.hadoop.hive.ql.io.parquet.serde.ParquetHiveSerDe",
        },
    },
    tableType: "EXTERNAL_TABLE",
});
```

{{% /example %}}
{{% /examples %}}



## Create a CatalogTable Resource

{{< chooser language "javascript,typescript,python,go,csharp" / >}}

{{% choosable language nodejs %}}
<div class="highlight"><pre class="chroma"><code class="language-typescript" data-lang="typescript"><span class="k">new </span><span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/aws/glue/#CatalogTable">CatalogTable</a></span><span class="p">(</span><span class="nx">name</span>: <span class="nx"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span><span class="p">, </span><span class="nx">args</span>: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/aws/glue/#CatalogTableArgs">CatalogTableArgs</a></span><span class="p">, </span><span class="nx">opts</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions">CustomResourceOptions</a></span><span class="p">);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language python %}}
<div class="highlight"><pre class="chroma"><code class="language-python" data-lang="python"><span class="k">def </span><span class="nf">CatalogTable</span><span class="p">(resource_name, opts=None, </span>catalog_id=None<span class="p">, </span>database_name=None<span class="p">, </span>description=None<span class="p">, </span>name=None<span class="p">, </span>owner=None<span class="p">, </span>parameters=None<span class="p">, </span>partition_keys=None<span class="p">, </span>retention=None<span class="p">, </span>storage_descriptor=None<span class="p">, </span>table_type=None<span class="p">, </span>view_expanded_text=None<span class="p">, </span>view_original_text=None<span class="p">, __props__=None);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language go %}}
<div class="highlight"><pre class="chroma"><code class="language-go" data-lang="go"><span class="k">func </span>NewCatalogTable<span class="p">(</span><span class="nx">ctx</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#Context">Context</a></span><span class="p">, </span><span class="nx">name</span> <span class="nx"><a href="https://golang.org/pkg/builtin/#string">string</a></span><span class="p">, </span><span class="nx">args</span> <span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/glue?tab=doc#CatalogTableArgs">CatalogTableArgs</a></span><span class="p">, </span><span class="nx">opts</span> ...<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#ResourceOption">ResourceOption</a></span><span class="p">) (*<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/glue?tab=doc#CatalogTable">CatalogTable</a></span>, error)</span></code></pre></div>
{{% /choosable %}}

{{% choosable language csharp %}}
<div class="highlight"><pre class="chroma"><code class="language-csharp" data-lang="csharp"><span class="k">public </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Aws/Pulumi.Aws.Glue.CatalogTable.html">CatalogTable</a></span><span class="p">(</span><span class="nx"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span> <span class="nx">name<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Aws/Pulumi.Aws.Glue.CatalogTableArgs.html">CatalogTableArgs</a></span> <span class="nx">args<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.CustomResourceOptions.html">CustomResourceOptions</a></span>? <span class="nx">opts = null<span class="p">)</span></code></pre></div>
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
        <span>Database<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Name of the metadata database where the table metadata resides. For Hive compatibility, this must be all lowercase.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Catalog<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}ID of the Glue Catalog and database to create the table in. If omitted, this defaults to the AWS Account ID plus the database name.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Description</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Description of the table.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Name of the SerDe.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Owner</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Owner of the table.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Parameters</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dictionary&lt;string, string&gt;</span>
    </dt>
    <dd>{{% md %}}A map of initialization parameters for the SerDe, in key-value form.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Partition<wbr>Keys</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#catalogtablepartitionkey">List&lt;Catalog<wbr>Table<wbr>Partition<wbr>Key<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}A list of columns by which the table is partitioned. Only primitive types are supported as partition keys.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Retention</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}Retention time for this table.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Storage<wbr>Descriptor</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#catalogtablestoragedescriptor">Catalog<wbr>Table<wbr>Storage<wbr>Descriptor<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}A storage descriptor object containing information about the physical storage of this table. You can refer to the [Glue Developer Guide](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-StorageDescriptor) for a full explanation of this object.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Table<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The type of this table (EXTERNAL_TABLE, VIRTUAL_VIEW, etc.).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>View<wbr>Expanded<wbr>Text</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}If the table is a view, the expanded text of the view; otherwise null.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>View<wbr>Original<wbr>Text</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}If the table is a view, the original text of the view; otherwise null.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Database<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Name of the metadata database where the table metadata resides. For Hive compatibility, this must be all lowercase.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Catalog<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}ID of the Glue Catalog and database to create the table in. If omitted, this defaults to the AWS Account ID plus the database name.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Description</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Description of the table.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Name of the SerDe.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Owner</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Owner of the table.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Parameters</span>
        <span class="property-indicator"></span>
        <span class="property-type">map[string]string</span>
    </dt>
    <dd>{{% md %}}A map of initialization parameters for the SerDe, in key-value form.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Partition<wbr>Keys</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#catalogtablepartitionkey">[]Catalog<wbr>Table<wbr>Partition<wbr>Key</a></span>
    </dt>
    <dd>{{% md %}}A list of columns by which the table is partitioned. Only primitive types are supported as partition keys.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Retention</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}Retention time for this table.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Storage<wbr>Descriptor</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#catalogtablestoragedescriptor">Catalog<wbr>Table<wbr>Storage<wbr>Descriptor</a></span>
    </dt>
    <dd>{{% md %}}A storage descriptor object containing information about the physical storage of this table. You can refer to the [Glue Developer Guide](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-StorageDescriptor) for a full explanation of this object.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Table<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The type of this table (EXTERNAL_TABLE, VIRTUAL_VIEW, etc.).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>View<wbr>Expanded<wbr>Text</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}If the table is a view, the expanded text of the view; otherwise null.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>View<wbr>Original<wbr>Text</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}If the table is a view, the original text of the view; otherwise null.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>database<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Name of the metadata database where the table metadata resides. For Hive compatibility, this must be all lowercase.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>catalog<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}ID of the Glue Catalog and database to create the table in. If omitted, this defaults to the AWS Account ID plus the database name.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>description</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Description of the table.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Name of the SerDe.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>owner</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Owner of the table.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>parameters</span>
        <span class="property-indicator"></span>
        <span class="property-type">{[key: string]: string}</span>
    </dt>
    <dd>{{% md %}}A map of initialization parameters for the SerDe, in key-value form.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>partition<wbr>Keys</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#catalogtablepartitionkey">Catalog<wbr>Table<wbr>Partition<wbr>Key[]</a></span>
    </dt>
    <dd>{{% md %}}A list of columns by which the table is partitioned. Only primitive types are supported as partition keys.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>retention</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}Retention time for this table.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>storage<wbr>Descriptor</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#catalogtablestoragedescriptor">Catalog<wbr>Table<wbr>Storage<wbr>Descriptor</a></span>
    </dt>
    <dd>{{% md %}}A storage descriptor object containing information about the physical storage of this table. You can refer to the [Glue Developer Guide](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-StorageDescriptor) for a full explanation of this object.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>table<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The type of this table (EXTERNAL_TABLE, VIRTUAL_VIEW, etc.).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>view<wbr>Expanded<wbr>Text</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}If the table is a view, the expanded text of the view; otherwise null.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>view<wbr>Original<wbr>Text</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}If the table is a view, the original text of the view; otherwise null.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>database_<wbr>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Name of the metadata database where the table metadata resides. For Hive compatibility, this must be all lowercase.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>catalog_<wbr>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}ID of the Glue Catalog and database to create the table in. If omitted, this defaults to the AWS Account ID plus the database name.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>description</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Description of the table.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Name of the SerDe.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>owner</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Owner of the table.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>parameters</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dict[str, str]</span>
    </dt>
    <dd>{{% md %}}A map of initialization parameters for the SerDe, in key-value form.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>partition_<wbr>keys</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#catalogtablepartitionkey">List[Catalog<wbr>Table<wbr>Partition<wbr>Key]</a></span>
    </dt>
    <dd>{{% md %}}A list of columns by which the table is partitioned. Only primitive types are supported as partition keys.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>retention</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}Retention time for this table.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>storage_<wbr>descriptor</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#catalogtablestoragedescriptor">Dict[Catalog<wbr>Table<wbr>Storage<wbr>Descriptor]</a></span>
    </dt>
    <dd>{{% md %}}A storage descriptor object containing information about the physical storage of this table. You can refer to the [Glue Developer Guide](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-StorageDescriptor) for a full explanation of this object.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>table_<wbr>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The type of this table (EXTERNAL_TABLE, VIRTUAL_VIEW, etc.).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>view_<wbr>expanded_<wbr>text</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}If the table is a view, the expanded text of the view; otherwise null.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>view_<wbr>original_<wbr>text</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}If the table is a view, the original text of the view; otherwise null.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}










## Look up an Existing CatalogTable Resource

Get an existing CatalogTable resource's state with the given name, ID, and optional extra properties used to qualify the lookup.

{{< chooser language "javascript,typescript,python,go,csharp  " / >}}

{{% choosable language nodejs %}}
<div class="highlight"><pre class="chroma"><code class="language-typescript" data-lang="typescript"><span class="k">public static </span><span class="nf">get</span><span class="p">(</span><span class="nx">name</span>: <span class="nx"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span><span class="p">, </span><span class="nx">id</span>: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#ID">Input&lt;ID&gt;</a></span><span class="p">, </span><span class="nx">state</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/aws/glue/#CatalogTableState">CatalogTableState</a></span><span class="p">, </span><span class="nx">opts</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions">CustomResourceOptions</a></span><span class="p">): </span><span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/aws/glue/#CatalogTable">CatalogTable</a></span></code></pre></div>
{{% /choosable %}}

{{% choosable language python %}}
<div class="highlight"><pre class="chroma"><code class="language-python" data-lang="python"><span class="k">static </span><span class="nf">get</span><span class="p">(resource_name, id, opts=None, </span>catalog_id=None<span class="p">, </span>database_name=None<span class="p">, </span>description=None<span class="p">, </span>name=None<span class="p">, </span>owner=None<span class="p">, </span>parameters=None<span class="p">, </span>partition_keys=None<span class="p">, </span>retention=None<span class="p">, </span>storage_descriptor=None<span class="p">, </span>table_type=None<span class="p">, </span>view_expanded_text=None<span class="p">, </span>view_original_text=None<span class="p">, __props__=None);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language go %}}
<div class="highlight"><pre class="chroma"><code class="language-go" data-lang="go"><span class="k">func </span>GetCatalogTable<span class="p">(</span><span class="nx">ctx</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#Context">Context</a></span><span class="p">, </span><span class="nx">name</span> <span class="nx"><a href="https://golang.org/pkg/builtin/#string">string</a></span><span class="p">, </span><span class="nx">id</span> <span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#IDInput">IDInput</a></span><span class="p">, </span><span class="nx">state</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/glue?tab=doc#CatalogTableState">CatalogTableState</a></span><span class="p">, </span><span class="nx">opts</span> ...<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#ResourceOption">ResourceOption</a></span><span class="p">) (*<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/glue?tab=doc#CatalogTable">CatalogTable</a></span>, error)</span></code></pre></div>
{{% /choosable %}}

{{% choosable language csharp %}}
<div class="highlight"><pre class="chroma"><code class="language-csharp" data-lang="csharp"><span class="k">public static </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Aws/Pulumi.Aws.Glue.CatalogTable.html">CatalogTable</a></span><span class="nf"> Get</span><span class="p">(</span><span class="nx"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span> <span class="nx">name<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.Input.html">Input&lt;string&gt;</a></span> <span class="nx">id<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Aws/Pulumi.Aws.Glue.CatalogTableState.html">CatalogTableState</a></span>? <span class="nx">state<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.CustomResourceOptions.html">CustomResourceOptions</a></span>? <span class="nx">opts = null<span class="p">)</span></code></pre></div>
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
        <span>Catalog<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}ID of the Glue Catalog and database to create the table in. If omitted, this defaults to the AWS Account ID plus the database name.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Database<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Name of the metadata database where the table metadata resides. For Hive compatibility, this must be all lowercase.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Description</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Description of the table.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Name of the SerDe.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Owner</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Owner of the table.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Parameters</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dictionary&lt;string, string&gt;</span>
    </dt>
    <dd>{{% md %}}A map of initialization parameters for the SerDe, in key-value form.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Partition<wbr>Keys</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#catalogtablepartitionkey">List&lt;Catalog<wbr>Table<wbr>Partition<wbr>Key<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}A list of columns by which the table is partitioned. Only primitive types are supported as partition keys.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Retention</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}Retention time for this table.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Storage<wbr>Descriptor</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#catalogtablestoragedescriptor">Catalog<wbr>Table<wbr>Storage<wbr>Descriptor<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}A storage descriptor object containing information about the physical storage of this table. You can refer to the [Glue Developer Guide](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-StorageDescriptor) for a full explanation of this object.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Table<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The type of this table (EXTERNAL_TABLE, VIRTUAL_VIEW, etc.).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>View<wbr>Expanded<wbr>Text</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}If the table is a view, the expanded text of the view; otherwise null.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>View<wbr>Original<wbr>Text</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}If the table is a view, the original text of the view; otherwise null.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Catalog<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}ID of the Glue Catalog and database to create the table in. If omitted, this defaults to the AWS Account ID plus the database name.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Database<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Name of the metadata database where the table metadata resides. For Hive compatibility, this must be all lowercase.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Description</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Description of the table.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Name of the SerDe.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Owner</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Owner of the table.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Parameters</span>
        <span class="property-indicator"></span>
        <span class="property-type">map[string]string</span>
    </dt>
    <dd>{{% md %}}A map of initialization parameters for the SerDe, in key-value form.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Partition<wbr>Keys</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#catalogtablepartitionkey">[]Catalog<wbr>Table<wbr>Partition<wbr>Key</a></span>
    </dt>
    <dd>{{% md %}}A list of columns by which the table is partitioned. Only primitive types are supported as partition keys.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Retention</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}Retention time for this table.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Storage<wbr>Descriptor</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#catalogtablestoragedescriptor">Catalog<wbr>Table<wbr>Storage<wbr>Descriptor</a></span>
    </dt>
    <dd>{{% md %}}A storage descriptor object containing information about the physical storage of this table. You can refer to the [Glue Developer Guide](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-StorageDescriptor) for a full explanation of this object.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Table<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The type of this table (EXTERNAL_TABLE, VIRTUAL_VIEW, etc.).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>View<wbr>Expanded<wbr>Text</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}If the table is a view, the expanded text of the view; otherwise null.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>View<wbr>Original<wbr>Text</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}If the table is a view, the original text of the view; otherwise null.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>catalog<wbr>Id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}ID of the Glue Catalog and database to create the table in. If omitted, this defaults to the AWS Account ID plus the database name.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>database<wbr>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Name of the metadata database where the table metadata resides. For Hive compatibility, this must be all lowercase.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>description</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Description of the table.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Name of the SerDe.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>owner</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Owner of the table.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>parameters</span>
        <span class="property-indicator"></span>
        <span class="property-type">{[key: string]: string}</span>
    </dt>
    <dd>{{% md %}}A map of initialization parameters for the SerDe, in key-value form.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>partition<wbr>Keys</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#catalogtablepartitionkey">Catalog<wbr>Table<wbr>Partition<wbr>Key[]</a></span>
    </dt>
    <dd>{{% md %}}A list of columns by which the table is partitioned. Only primitive types are supported as partition keys.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>retention</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}Retention time for this table.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>storage<wbr>Descriptor</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#catalogtablestoragedescriptor">Catalog<wbr>Table<wbr>Storage<wbr>Descriptor</a></span>
    </dt>
    <dd>{{% md %}}A storage descriptor object containing information about the physical storage of this table. You can refer to the [Glue Developer Guide](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-StorageDescriptor) for a full explanation of this object.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>table<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The type of this table (EXTERNAL_TABLE, VIRTUAL_VIEW, etc.).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>view<wbr>Expanded<wbr>Text</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}If the table is a view, the expanded text of the view; otherwise null.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>view<wbr>Original<wbr>Text</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}If the table is a view, the original text of the view; otherwise null.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>catalog_<wbr>id</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}ID of the Glue Catalog and database to create the table in. If omitted, this defaults to the AWS Account ID plus the database name.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>database_<wbr>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Name of the metadata database where the table metadata resides. For Hive compatibility, this must be all lowercase.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>description</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Description of the table.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Name of the SerDe.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>owner</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Owner of the table.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>parameters</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dict[str, str]</span>
    </dt>
    <dd>{{% md %}}A map of initialization parameters for the SerDe, in key-value form.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>partition_<wbr>keys</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#catalogtablepartitionkey">List[Catalog<wbr>Table<wbr>Partition<wbr>Key]</a></span>
    </dt>
    <dd>{{% md %}}A list of columns by which the table is partitioned. Only primitive types are supported as partition keys.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>retention</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}Retention time for this table.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>storage_<wbr>descriptor</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#catalogtablestoragedescriptor">Dict[Catalog<wbr>Table<wbr>Storage<wbr>Descriptor]</a></span>
    </dt>
    <dd>{{% md %}}A storage descriptor object containing information about the physical storage of this table. You can refer to the [Glue Developer Guide](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-StorageDescriptor) for a full explanation of this object.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>table_<wbr>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The type of this table (EXTERNAL_TABLE, VIRTUAL_VIEW, etc.).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>view_<wbr>expanded_<wbr>text</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}If the table is a view, the expanded text of the view; otherwise null.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>view_<wbr>original_<wbr>text</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}If the table is a view, the original text of the view; otherwise null.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}










## Supporting Types

<h4>Catalog<wbr>Table<wbr>Partition<wbr>Key</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#CatalogTablePartitionKey">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#CatalogTablePartitionKey">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/glue?tab=doc#CatalogTablePartitionKeyArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/glue?tab=doc#CatalogTablePartitionKeyOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Name of the SerDe.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Comment</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Free-form text comment.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The datatype of data in the Column.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Name of the SerDe.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Comment</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Free-form text comment.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The datatype of data in the Column.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Name of the SerDe.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>comment</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Free-form text comment.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The datatype of data in the Column.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Name of the SerDe.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>comment</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Free-form text comment.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The datatype of data in the Column.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Catalog<wbr>Table<wbr>Storage<wbr>Descriptor</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#CatalogTableStorageDescriptor">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#CatalogTableStorageDescriptor">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/glue?tab=doc#CatalogTableStorageDescriptorArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/glue?tab=doc#CatalogTableStorageDescriptorOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Bucket<wbr>Columns</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}A list of reducer grouping columns, clustering columns, and bucketing columns in the table.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Columns</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#catalogtablestoragedescriptorcolumn">List&lt;Catalog<wbr>Table<wbr>Storage<wbr>Descriptor<wbr>Column<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}A list of the Columns in the table.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Compressed</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}True if the data in the table is compressed, or False if not.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Input<wbr>Format</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The input format: SequenceFileInputFormat (binary), or TextInputFormat, or a custom format.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Location</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The physical location of the table. By default this takes the form of the warehouse location, followed by the database location in the warehouse, followed by the table name.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Number<wbr>Of<wbr>Buckets</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}Must be specified if the table contains any dimension columns.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Output<wbr>Format</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The output format: SequenceFileOutputFormat (binary), or IgnoreKeyTextOutputFormat, or a custom format.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Parameters</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dictionary&lt;string, string&gt;</span>
    </dt>
    <dd>{{% md %}}A map of initialization parameters for the SerDe, in key-value form.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ser<wbr>De<wbr>Info</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#catalogtablestoragedescriptorserdeinfo">Catalog<wbr>Table<wbr>Storage<wbr>Descriptor<wbr>Ser<wbr>De<wbr>Info<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}Serialization/deserialization (SerDe) information.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Skewed<wbr>Info</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#catalogtablestoragedescriptorskewedinfo">Catalog<wbr>Table<wbr>Storage<wbr>Descriptor<wbr>Skewed<wbr>Info<wbr>Args</a></span>
    </dt>
    <dd>{{% md %}}Information about values that appear very frequently in a column (skewed values).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sort<wbr>Columns</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#catalogtablestoragedescriptorsortcolumn">List&lt;Catalog<wbr>Table<wbr>Storage<wbr>Descriptor<wbr>Sort<wbr>Column<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}A list of Order objects specifying the sort order of each bucket in the table.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Stored<wbr>As<wbr>Sub<wbr>Directories</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}True if the table data is stored in subdirectories, or False if not.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Bucket<wbr>Columns</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}A list of reducer grouping columns, clustering columns, and bucketing columns in the table.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Columns</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#catalogtablestoragedescriptorcolumn">[]Catalog<wbr>Table<wbr>Storage<wbr>Descriptor<wbr>Column</a></span>
    </dt>
    <dd>{{% md %}}A list of the Columns in the table.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Compressed</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}True if the data in the table is compressed, or False if not.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Input<wbr>Format</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The input format: SequenceFileInputFormat (binary), or TextInputFormat, or a custom format.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Location</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The physical location of the table. By default this takes the form of the warehouse location, followed by the database location in the warehouse, followed by the table name.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Number<wbr>Of<wbr>Buckets</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}Must be specified if the table contains any dimension columns.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Output<wbr>Format</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The output format: SequenceFileOutputFormat (binary), or IgnoreKeyTextOutputFormat, or a custom format.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Parameters</span>
        <span class="property-indicator"></span>
        <span class="property-type">map[string]string</span>
    </dt>
    <dd>{{% md %}}A map of initialization parameters for the SerDe, in key-value form.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Ser<wbr>De<wbr>Info</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#catalogtablestoragedescriptorserdeinfo">Catalog<wbr>Table<wbr>Storage<wbr>Descriptor<wbr>Ser<wbr>De<wbr>Info</a></span>
    </dt>
    <dd>{{% md %}}Serialization/deserialization (SerDe) information.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Skewed<wbr>Info</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#catalogtablestoragedescriptorskewedinfo">Catalog<wbr>Table<wbr>Storage<wbr>Descriptor<wbr>Skewed<wbr>Info</a></span>
    </dt>
    <dd>{{% md %}}Information about values that appear very frequently in a column (skewed values).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Sort<wbr>Columns</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#catalogtablestoragedescriptorsortcolumn">[]Catalog<wbr>Table<wbr>Storage<wbr>Descriptor<wbr>Sort<wbr>Column</a></span>
    </dt>
    <dd>{{% md %}}A list of Order objects specifying the sort order of each bucket in the table.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Stored<wbr>As<wbr>Sub<wbr>Directories</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}True if the table data is stored in subdirectories, or False if not.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>bucket<wbr>Columns</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}A list of reducer grouping columns, clustering columns, and bucketing columns in the table.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>columns</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#catalogtablestoragedescriptorcolumn">Catalog<wbr>Table<wbr>Storage<wbr>Descriptor<wbr>Column[]</a></span>
    </dt>
    <dd>{{% md %}}A list of the Columns in the table.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>compressed</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}True if the data in the table is compressed, or False if not.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>input<wbr>Format</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The input format: SequenceFileInputFormat (binary), or TextInputFormat, or a custom format.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>location</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The physical location of the table. By default this takes the form of the warehouse location, followed by the database location in the warehouse, followed by the table name.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>number<wbr>Of<wbr>Buckets</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}Must be specified if the table contains any dimension columns.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>output<wbr>Format</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The output format: SequenceFileOutputFormat (binary), or IgnoreKeyTextOutputFormat, or a custom format.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>parameters</span>
        <span class="property-indicator"></span>
        <span class="property-type">{[key: string]: string}</span>
    </dt>
    <dd>{{% md %}}A map of initialization parameters for the SerDe, in key-value form.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ser<wbr>De<wbr>Info</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#catalogtablestoragedescriptorserdeinfo">Catalog<wbr>Table<wbr>Storage<wbr>Descriptor<wbr>Ser<wbr>De<wbr>Info</a></span>
    </dt>
    <dd>{{% md %}}Serialization/deserialization (SerDe) information.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>skewed<wbr>Info</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#catalogtablestoragedescriptorskewedinfo">Catalog<wbr>Table<wbr>Storage<wbr>Descriptor<wbr>Skewed<wbr>Info</a></span>
    </dt>
    <dd>{{% md %}}Information about values that appear very frequently in a column (skewed values).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sort<wbr>Columns</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#catalogtablestoragedescriptorsortcolumn">Catalog<wbr>Table<wbr>Storage<wbr>Descriptor<wbr>Sort<wbr>Column[]</a></span>
    </dt>
    <dd>{{% md %}}A list of Order objects specifying the sort order of each bucket in the table.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>stored<wbr>As<wbr>Sub<wbr>Directories</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}True if the table data is stored in subdirectories, or False if not.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>bucket<wbr>Columns</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}A list of reducer grouping columns, clustering columns, and bucketing columns in the table.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>columns</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#catalogtablestoragedescriptorcolumn">List[Catalog<wbr>Table<wbr>Storage<wbr>Descriptor<wbr>Column]</a></span>
    </dt>
    <dd>{{% md %}}A list of the Columns in the table.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>compressed</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}True if the data in the table is compressed, or False if not.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>input<wbr>Format</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The input format: SequenceFileInputFormat (binary), or TextInputFormat, or a custom format.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>location</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The physical location of the table. By default this takes the form of the warehouse location, followed by the database location in the warehouse, followed by the table name.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>number<wbr>Of<wbr>Buckets</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}Must be specified if the table contains any dimension columns.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>output<wbr>Format</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The output format: SequenceFileOutputFormat (binary), or IgnoreKeyTextOutputFormat, or a custom format.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>parameters</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dict[str, str]</span>
    </dt>
    <dd>{{% md %}}A map of initialization parameters for the SerDe, in key-value form.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>ser<wbr>De<wbr>Info</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#catalogtablestoragedescriptorserdeinfo">Dict[Catalog<wbr>Table<wbr>Storage<wbr>Descriptor<wbr>Ser<wbr>De<wbr>Info]</a></span>
    </dt>
    <dd>{{% md %}}Serialization/deserialization (SerDe) information.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>skewed<wbr>Info</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#catalogtablestoragedescriptorskewedinfo">Dict[Catalog<wbr>Table<wbr>Storage<wbr>Descriptor<wbr>Skewed<wbr>Info]</a></span>
    </dt>
    <dd>{{% md %}}Information about values that appear very frequently in a column (skewed values).
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>sort<wbr>Columns</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#catalogtablestoragedescriptorsortcolumn">List[Catalog<wbr>Table<wbr>Storage<wbr>Descriptor<wbr>Sort<wbr>Column]</a></span>
    </dt>
    <dd>{{% md %}}A list of Order objects specifying the sort order of each bucket in the table.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>stored<wbr>As<wbr>Sub<wbr>Directories</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}True if the table data is stored in subdirectories, or False if not.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Catalog<wbr>Table<wbr>Storage<wbr>Descriptor<wbr>Column</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#CatalogTableStorageDescriptorColumn">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#CatalogTableStorageDescriptorColumn">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/glue?tab=doc#CatalogTableStorageDescriptorColumnArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/glue?tab=doc#CatalogTableStorageDescriptorColumnOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Name of the SerDe.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Comment</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Free-form text comment.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The datatype of data in the Column.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Name of the SerDe.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Comment</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Free-form text comment.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The datatype of data in the Column.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Name of the SerDe.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>comment</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Free-form text comment.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The datatype of data in the Column.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Name of the SerDe.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>comment</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Free-form text comment.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The datatype of data in the Column.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Catalog<wbr>Table<wbr>Storage<wbr>Descriptor<wbr>Ser<wbr>De<wbr>Info</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#CatalogTableStorageDescriptorSerDeInfo">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#CatalogTableStorageDescriptorSerDeInfo">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/glue?tab=doc#CatalogTableStorageDescriptorSerDeInfoArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/glue?tab=doc#CatalogTableStorageDescriptorSerDeInfoOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Name of the SerDe.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Parameters</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dictionary&lt;string, string&gt;</span>
    </dt>
    <dd>{{% md %}}A map of initialization parameters for the SerDe, in key-value form.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Serialization<wbr>Library</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Usually the class that implements the SerDe. An example is: org.apache.hadoop.hive.serde2.columnar.ColumnarSerDe.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Name of the SerDe.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Parameters</span>
        <span class="property-indicator"></span>
        <span class="property-type">map[string]string</span>
    </dt>
    <dd>{{% md %}}A map of initialization parameters for the SerDe, in key-value form.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Serialization<wbr>Library</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Usually the class that implements the SerDe. An example is: org.apache.hadoop.hive.serde2.columnar.ColumnarSerDe.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Name of the SerDe.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>parameters</span>
        <span class="property-indicator"></span>
        <span class="property-type">{[key: string]: string}</span>
    </dt>
    <dd>{{% md %}}A map of initialization parameters for the SerDe, in key-value form.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>serialization<wbr>Library</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Usually the class that implements the SerDe. An example is: org.apache.hadoop.hive.serde2.columnar.ColumnarSerDe.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Name of the SerDe.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>parameters</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dict[str, str]</span>
    </dt>
    <dd>{{% md %}}A map of initialization parameters for the SerDe, in key-value form.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>serialization<wbr>Library</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Usually the class that implements the SerDe. An example is: org.apache.hadoop.hive.serde2.columnar.ColumnarSerDe.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Catalog<wbr>Table<wbr>Storage<wbr>Descriptor<wbr>Skewed<wbr>Info</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#CatalogTableStorageDescriptorSkewedInfo">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#CatalogTableStorageDescriptorSkewedInfo">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/glue?tab=doc#CatalogTableStorageDescriptorSkewedInfoArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/glue?tab=doc#CatalogTableStorageDescriptorSkewedInfoOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Skewed<wbr>Column<wbr>Names</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}A list of names of columns that contain skewed values.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Skewed<wbr>Column<wbr>Value<wbr>Location<wbr>Maps</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dictionary&lt;string, string&gt;</span>
    </dt>
    <dd>{{% md %}}A list of values that appear so frequently as to be considered skewed.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Skewed<wbr>Column<wbr>Values</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}A mapping of skewed values to the columns that contain them.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Skewed<wbr>Column<wbr>Names</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}A list of names of columns that contain skewed values.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Skewed<wbr>Column<wbr>Value<wbr>Location<wbr>Maps</span>
        <span class="property-indicator"></span>
        <span class="property-type">map[string]string</span>
    </dt>
    <dd>{{% md %}}A list of values that appear so frequently as to be considered skewed.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Skewed<wbr>Column<wbr>Values</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}A mapping of skewed values to the columns that contain them.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>skewed<wbr>Column<wbr>Names</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}A list of names of columns that contain skewed values.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>skewed<wbr>Column<wbr>Value<wbr>Location<wbr>Maps</span>
        <span class="property-indicator"></span>
        <span class="property-type">{[key: string]: string}</span>
    </dt>
    <dd>{{% md %}}A list of values that appear so frequently as to be considered skewed.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>skewed<wbr>Column<wbr>Values</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}A mapping of skewed values to the columns that contain them.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>skewed<wbr>Column<wbr>Names</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}A list of names of columns that contain skewed values.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>skewed<wbr>Column<wbr>Value<wbr>Location<wbr>Maps</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dict[str, str]</span>
    </dt>
    <dd>{{% md %}}A list of values that appear so frequently as to be considered skewed.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>skewed<wbr>Column<wbr>Values</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}A mapping of skewed values to the columns that contain them.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}





<h4>Catalog<wbr>Table<wbr>Storage<wbr>Descriptor<wbr>Sort<wbr>Column</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#CatalogTableStorageDescriptorSortColumn">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#CatalogTableStorageDescriptorSortColumn">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/glue?tab=doc#CatalogTableStorageDescriptorSortColumnArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/glue?tab=doc#CatalogTableStorageDescriptorSortColumnOutput">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Column</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the column.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Sort<wbr>Order</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}Indicates that the column is sorted in ascending order (== 1), or in descending order (==0).
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Column</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the column.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Sort<wbr>Order</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}Indicates that the column is sorted in ascending order (== 1), or in descending order (==0).
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>column</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the column.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>sort<wbr>Order</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}Indicates that the column is sorted in ascending order (== 1), or in descending order (==0).
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>column</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the column.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>sort<wbr>Order</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}Indicates that the column is sorted in ascending order (== 1), or in descending order (==0).
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

