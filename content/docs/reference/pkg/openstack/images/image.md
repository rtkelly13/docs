
---
title: "Image"
block_external_search_index: true
---



Manages a V2 Image resource within OpenStack Glance.

{{% examples %}}
## Example Usage
{{% example %}}

```typescript
import * as pulumi from "@pulumi/pulumi";
import * as openstack from "@pulumi/openstack";

const rancheros = new openstack.images.Image("rancheros", {
    containerFormat: "bare",
    diskFormat: "qcow2",
    imageSourceUrl: "https://releases.rancher.com/os/latest/rancheros-openstack.img",
    properties: {
        key: "value",
    },
});
```

{{% /example %}}
{{% /examples %}}
## Notes

### Properties

This resource supports the ability to add properties to a resource during
creation as well as add, update, and delete properties during an update of this
resource.

Newer versions of OpenStack are adding some read-only properties to each image.
These properties start with the prefix `os_`. If these properties are detected,
this resource will automatically reconcile these with the user-provided
properties.

In addition, the `direct_url` property is also automatically reconciled if the
Image Service set it.



## Create a Image Resource

{{< chooser language "javascript,typescript,python,go,csharp" / >}}

{{% choosable language nodejs %}}
<div class="highlight"><pre class="chroma"><code class="language-typescript" data-lang="typescript"><span class="k">new </span><span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/openstack/images/#Image">Image</a></span><span class="p">(</span><span class="nx">name</span>: <span class="nx"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span><span class="p">, </span><span class="nx">args</span>: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/openstack/images/#ImageArgs">ImageArgs</a></span><span class="p">, </span><span class="nx">opts</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions">CustomResourceOptions</a></span><span class="p">);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language python %}}
<div class="highlight"><pre class="chroma"><code class="language-python" data-lang="python"><span class="k">def </span><span class="nf">Image</span><span class="p">(resource_name, opts=None, </span>container_format=None<span class="p">, </span>disk_format=None<span class="p">, </span>image_cache_path=None<span class="p">, </span>image_source_url=None<span class="p">, </span>local_file_path=None<span class="p">, </span>min_disk_gb=None<span class="p">, </span>min_ram_mb=None<span class="p">, </span>name=None<span class="p">, </span>properties=None<span class="p">, </span>protected=None<span class="p">, </span>region=None<span class="p">, </span>tags=None<span class="p">, </span>verify_checksum=None<span class="p">, </span>visibility=None<span class="p">, __props__=None);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language go %}}
<div class="highlight"><pre class="chroma"><code class="language-go" data-lang="go"><span class="k">func </span>NewImage<span class="p">(</span><span class="nx">ctx</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#Context">Context</a></span><span class="p">, </span><span class="nx">name</span> <span class="nx"><a href="https://golang.org/pkg/builtin/#string">string</a></span><span class="p">, </span><span class="nx">args</span> <span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-openstack/sdk/v2/go/openstack/images?tab=doc#ImageArgs">ImageArgs</a></span><span class="p">, </span><span class="nx">opts</span> ...<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#ResourceOption">ResourceOption</a></span><span class="p">) (*<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-openstack/sdk/v2/go/openstack/images?tab=doc#Image">Image</a></span>, error)</span></code></pre></div>
{{% /choosable %}}

{{% choosable language csharp %}}
<div class="highlight"><pre class="chroma"><code class="language-csharp" data-lang="csharp"><span class="k">public </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Openstack/Pulumi.Openstack.Images.Image.html">Image</a></span><span class="p">(</span><span class="nx"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span> <span class="nx">name<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Openstack/Pulumi.OpenStack.Images.ImageArgs.html">ImageArgs</a></span> <span class="nx">args<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.CustomResourceOptions.html">CustomResourceOptions</a></span>? <span class="nx">opts = null<span class="p">)</span></code></pre></div>
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
        <span>Container<wbr>Format</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The container format. Must be one of
"ami", "ari", "aki", "bare", "ovf".
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Disk<wbr>Format</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The disk format. Must be one of
"ami", "ari", "aki", "vhd", "vmdk", "raw", "qcow2", "vdi", "iso".
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Image<wbr>Cache<wbr>Path</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Image<wbr>Source<wbr>Url</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}This is the url of the raw image that will
be downloaded in the `image_cache_path` before being uploaded to Glance.
Glance is able to download image from internet but the `gophercloud` library
does not yet provide a way to do so.
Conflicts with `local_file_path`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Local<wbr>File<wbr>Path</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}This is the filepath of the raw image file
that will be uploaded to Glance. Conflicts with `image_source_url`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Min<wbr>Disk<wbr>Gb</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}Amount of disk space (in GB) required to boot image.
Defaults to 0.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Min<wbr>Ram<wbr>Mb</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}Amount of ram (in MB) required to boot image.
Defauts to 0.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the image.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Properties</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dictionary&lt;string, object&gt;</span>
    </dt>
    <dd>{{% md %}}A map of key/value pairs to set freeform
information about an image. See the "Notes" section for further
information about properties.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Protected</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}If true, image will not be deletable.
Defaults to false.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Region</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The region in which to obtain the V2 Glance client.
A Glance client is needed to create an Image that can be used with
a compute instance. If omitted, the `region` argument of the provider
is used. Changing this creates a new Image.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Tags</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}The tags of the image. It must be a list of strings.
At this time, it is not possible to delete all tags of an image.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Verify<wbr>Checksum</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}If false, the checksum will not be verified
once the image is finished uploading. Defaults to true.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Visibility</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The visibility of the image. Must be one of
"public", "private", "community", or "shared". The ability to set the
visibility depends upon the configuration of the OpenStack cloud.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Container<wbr>Format</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The container format. Must be one of
"ami", "ari", "aki", "bare", "ovf".
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Disk<wbr>Format</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The disk format. Must be one of
"ami", "ari", "aki", "vhd", "vmdk", "raw", "qcow2", "vdi", "iso".
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Image<wbr>Cache<wbr>Path</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Image<wbr>Source<wbr>Url</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}This is the url of the raw image that will
be downloaded in the `image_cache_path` before being uploaded to Glance.
Glance is able to download image from internet but the `gophercloud` library
does not yet provide a way to do so.
Conflicts with `local_file_path`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Local<wbr>File<wbr>Path</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}This is the filepath of the raw image file
that will be uploaded to Glance. Conflicts with `image_source_url`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Min<wbr>Disk<wbr>Gb</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}Amount of disk space (in GB) required to boot image.
Defaults to 0.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Min<wbr>Ram<wbr>Mb</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}Amount of ram (in MB) required to boot image.
Defauts to 0.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the image.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Properties</span>
        <span class="property-indicator"></span>
        <span class="property-type">map[string]interface{}</span>
    </dt>
    <dd>{{% md %}}A map of key/value pairs to set freeform
information about an image. See the "Notes" section for further
information about properties.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Protected</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}If true, image will not be deletable.
Defaults to false.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Region</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The region in which to obtain the V2 Glance client.
A Glance client is needed to create an Image that can be used with
a compute instance. If omitted, the `region` argument of the provider
is used. Changing this creates a new Image.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Tags</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}The tags of the image. It must be a list of strings.
At this time, it is not possible to delete all tags of an image.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Verify<wbr>Checksum</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}If false, the checksum will not be verified
once the image is finished uploading. Defaults to true.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Visibility</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The visibility of the image. Must be one of
"public", "private", "community", or "shared". The ability to set the
visibility depends upon the configuration of the OpenStack cloud.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>container<wbr>Format</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The container format. Must be one of
"ami", "ari", "aki", "bare", "ovf".
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>disk<wbr>Format</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The disk format. Must be one of
"ami", "ari", "aki", "vhd", "vmdk", "raw", "qcow2", "vdi", "iso".
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>image<wbr>Cache<wbr>Path</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>image<wbr>Source<wbr>Url</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}This is the url of the raw image that will
be downloaded in the `image_cache_path` before being uploaded to Glance.
Glance is able to download image from internet but the `gophercloud` library
does not yet provide a way to do so.
Conflicts with `local_file_path`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>local<wbr>File<wbr>Path</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}This is the filepath of the raw image file
that will be uploaded to Glance. Conflicts with `image_source_url`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>min<wbr>Disk<wbr>Gb</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}Amount of disk space (in GB) required to boot image.
Defaults to 0.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>min<wbr>Ram<wbr>Mb</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}Amount of ram (in MB) required to boot image.
Defauts to 0.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the image.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>properties</span>
        <span class="property-indicator"></span>
        <span class="property-type">{[key: string]: any}</span>
    </dt>
    <dd>{{% md %}}A map of key/value pairs to set freeform
information about an image. See the "Notes" section for further
information about properties.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>protected</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}If true, image will not be deletable.
Defaults to false.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>region</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The region in which to obtain the V2 Glance client.
A Glance client is needed to create an Image that can be used with
a compute instance. If omitted, the `region` argument of the provider
is used. Changing this creates a new Image.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>tags</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}The tags of the image. It must be a list of strings.
At this time, it is not possible to delete all tags of an image.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>verify<wbr>Checksum</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}If false, the checksum will not be verified
once the image is finished uploading. Defaults to true.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>visibility</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The visibility of the image. Must be one of
"public", "private", "community", or "shared". The ability to set the
visibility depends upon the configuration of the OpenStack cloud.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>container_<wbr>format</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The container format. Must be one of
"ami", "ari", "aki", "bare", "ovf".
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>disk_<wbr>format</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The disk format. Must be one of
"ami", "ari", "aki", "vhd", "vmdk", "raw", "qcow2", "vdi", "iso".
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>image_<wbr>cache_<wbr>path</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>image_<wbr>source_<wbr>url</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}This is the url of the raw image that will
be downloaded in the `image_cache_path` before being uploaded to Glance.
Glance is able to download image from internet but the `gophercloud` library
does not yet provide a way to do so.
Conflicts with `local_file_path`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>local_<wbr>file_<wbr>path</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}This is the filepath of the raw image file
that will be uploaded to Glance. Conflicts with `image_source_url`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>min_<wbr>disk_<wbr>gb</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}Amount of disk space (in GB) required to boot image.
Defaults to 0.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>min_<wbr>ram_<wbr>mb</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}Amount of ram (in MB) required to boot image.
Defauts to 0.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the image.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>properties</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dict[str, Any]</span>
    </dt>
    <dd>{{% md %}}A map of key/value pairs to set freeform
information about an image. See the "Notes" section for further
information about properties.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>protected</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}If true, image will not be deletable.
Defaults to false.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>region</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The region in which to obtain the V2 Glance client.
A Glance client is needed to create an Image that can be used with
a compute instance. If omitted, the `region` argument of the provider
is used. Changing this creates a new Image.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>tags</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}The tags of the image. It must be a list of strings.
At this time, it is not possible to delete all tags of an image.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>verify_<wbr>checksum</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}If false, the checksum will not be verified
once the image is finished uploading. Defaults to true.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>visibility</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The visibility of the image. Must be one of
"public", "private", "community", or "shared". The ability to set the
visibility depends upon the configuration of the OpenStack cloud.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}







## Image Output Properties

The following output properties are available:




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span>Checksum</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The checksum of the data associated with the image.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Created<wbr>At</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The date the image was created.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>File</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}the trailing path after the glance
endpoint that represent the location of the image
or the path to retrieve it.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Metadata</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dictionary&lt;string, object&gt;</span>
    </dt>
    <dd>{{% md %}}The metadata associated with the image.
Image metadata allow for meaningfully define the image properties
and tags. See https://docs.openstack.org/glance/latest/user/metadefs-concepts.html.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Owner</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The id of the openstack user who owns the image.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Schema</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The path to the JSON-schema that represent
the image or image
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Size<wbr>Bytes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The size in bytes of the data associated with the image.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Status</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The status of the image. It can be "queued", "active"
or "saving".
{{% /md %}}</dd>

    <dt class="property- property-deprecated"
            title=", Deprecated">
        <span>Update<wbr>At</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}(**Deprecated** - use `updated_at` instead)
{{% /md %}}<p class="property-message">Deprecated: {{% md %}}Use updated_at instead{{% /md %}}</p></dd>

    <dt class="property-"
            title="">
        <span>Updated<wbr>At</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The date the image was last updated.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span>Checksum</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The checksum of the data associated with the image.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Created<wbr>At</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The date the image was created.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>File</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}the trailing path after the glance
endpoint that represent the location of the image
or the path to retrieve it.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Metadata</span>
        <span class="property-indicator"></span>
        <span class="property-type">map[string]interface{}</span>
    </dt>
    <dd>{{% md %}}The metadata associated with the image.
Image metadata allow for meaningfully define the image properties
and tags. See https://docs.openstack.org/glance/latest/user/metadefs-concepts.html.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Owner</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The id of the openstack user who owns the image.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Schema</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The path to the JSON-schema that represent
the image or image
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Size<wbr>Bytes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The size in bytes of the data associated with the image.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Status</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The status of the image. It can be "queued", "active"
or "saving".
{{% /md %}}</dd>

    <dt class="property- property-deprecated"
            title=", Deprecated">
        <span>Update<wbr>At</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}(**Deprecated** - use `updated_at` instead)
{{% /md %}}<p class="property-message">Deprecated: {{% md %}}Use updated_at instead{{% /md %}}</p></dd>

    <dt class="property-"
            title="">
        <span>Updated<wbr>At</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The date the image was last updated.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span>checksum</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The checksum of the data associated with the image.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>created<wbr>At</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The date the image was created.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>file</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}the trailing path after the glance
endpoint that represent the location of the image
or the path to retrieve it.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>metadata</span>
        <span class="property-indicator"></span>
        <span class="property-type">{[key: string]: any}</span>
    </dt>
    <dd>{{% md %}}The metadata associated with the image.
Image metadata allow for meaningfully define the image properties
and tags. See https://docs.openstack.org/glance/latest/user/metadefs-concepts.html.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>owner</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The id of the openstack user who owns the image.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>schema</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The path to the JSON-schema that represent
the image or image
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>size<wbr>Bytes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The size in bytes of the data associated with the image.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>status</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The status of the image. It can be "queued", "active"
or "saving".
{{% /md %}}</dd>

    <dt class="property- property-deprecated"
            title=", Deprecated">
        <span>update<wbr>At</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}(**Deprecated** - use `updated_at` instead)
{{% /md %}}<p class="property-message">Deprecated: {{% md %}}Use updated_at instead{{% /md %}}</p></dd>

    <dt class="property-"
            title="">
        <span>updated<wbr>At</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The date the image was last updated.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-"
            title="">
        <span>checksum</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The checksum of the data associated with the image.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>created_<wbr>at</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The date the image was created.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>file</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}the trailing path after the glance
endpoint that represent the location of the image
or the path to retrieve it.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>metadata</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dict[str, Any]</span>
    </dt>
    <dd>{{% md %}}The metadata associated with the image.
Image metadata allow for meaningfully define the image properties
and tags. See https://docs.openstack.org/glance/latest/user/metadefs-concepts.html.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>owner</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The id of the openstack user who owns the image.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>schema</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The path to the JSON-schema that represent
the image or image
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>size_<wbr>bytes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The size in bytes of the data associated with the image.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>status</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The status of the image. It can be "queued", "active"
or "saving".
{{% /md %}}</dd>

    <dt class="property- property-deprecated"
            title=", Deprecated">
        <span>update_<wbr>at</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}(**Deprecated** - use `updated_at` instead)
{{% /md %}}<p class="property-message">Deprecated: {{% md %}}Use updated_at instead{{% /md %}}</p></dd>

    <dt class="property-"
            title="">
        <span>updated_<wbr>at</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The date the image was last updated.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}








## Look up an Existing Image Resource

Get an existing Image resource's state with the given name, ID, and optional extra properties used to qualify the lookup.

{{< chooser language "javascript,typescript,python,go,csharp  " / >}}

{{% choosable language nodejs %}}
<div class="highlight"><pre class="chroma"><code class="language-typescript" data-lang="typescript"><span class="k">public static </span><span class="nf">get</span><span class="p">(</span><span class="nx">name</span>: <span class="nx"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span><span class="p">, </span><span class="nx">id</span>: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#ID">Input&lt;ID&gt;</a></span><span class="p">, </span><span class="nx">state</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/openstack/images/#ImageState">ImageState</a></span><span class="p">, </span><span class="nx">opts</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#CustomResourceOptions">CustomResourceOptions</a></span><span class="p">): </span><span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/openstack/images/#Image">Image</a></span></code></pre></div>
{{% /choosable %}}

{{% choosable language python %}}
<div class="highlight"><pre class="chroma"><code class="language-python" data-lang="python"><span class="k">static </span><span class="nf">get</span><span class="p">(resource_name, id, opts=None, </span>checksum=None<span class="p">, </span>container_format=None<span class="p">, </span>created_at=None<span class="p">, </span>disk_format=None<span class="p">, </span>file=None<span class="p">, </span>image_cache_path=None<span class="p">, </span>image_source_url=None<span class="p">, </span>local_file_path=None<span class="p">, </span>metadata=None<span class="p">, </span>min_disk_gb=None<span class="p">, </span>min_ram_mb=None<span class="p">, </span>name=None<span class="p">, </span>owner=None<span class="p">, </span>properties=None<span class="p">, </span>protected=None<span class="p">, </span>region=None<span class="p">, </span>schema=None<span class="p">, </span>size_bytes=None<span class="p">, </span>status=None<span class="p">, </span>tags=None<span class="p">, </span>update_at=None<span class="p">, </span>updated_at=None<span class="p">, </span>verify_checksum=None<span class="p">, </span>visibility=None<span class="p">, __props__=None);</span></code></pre></div>
{{% /choosable %}}

{{% choosable language go %}}
<div class="highlight"><pre class="chroma"><code class="language-go" data-lang="go"><span class="k">func </span>GetImage<span class="p">(</span><span class="nx">ctx</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#Context">Context</a></span><span class="p">, </span><span class="nx">name</span> <span class="nx"><a href="https://golang.org/pkg/builtin/#string">string</a></span><span class="p">, </span><span class="nx">id</span> <span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#IDInput">IDInput</a></span><span class="p">, </span><span class="nx">state</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-openstack/sdk/v2/go/openstack/images?tab=doc#ImageState">ImageState</a></span><span class="p">, </span><span class="nx">opts</span> ...<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#ResourceOption">ResourceOption</a></span><span class="p">) (*<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-openstack/sdk/v2/go/openstack/images?tab=doc#Image">Image</a></span>, error)</span></code></pre></div>
{{% /choosable %}}

{{% choosable language csharp %}}
<div class="highlight"><pre class="chroma"><code class="language-csharp" data-lang="csharp"><span class="k">public static </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Openstack/Pulumi.Openstack.Images.Image.html">Image</a></span><span class="nf"> Get</span><span class="p">(</span><span class="nx"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span> <span class="nx">name<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.Input.html">Input&lt;string&gt;</a></span> <span class="nx">id<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Openstack/Pulumi.Openstack.Images.ImageState.html">ImageState</a></span>? <span class="nx">state<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.CustomResourceOptions.html">CustomResourceOptions</a></span>? <span class="nx">opts = null<span class="p">)</span></code></pre></div>
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
        <span>Checksum</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The checksum of the data associated with the image.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Container<wbr>Format</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The container format. Must be one of
"ami", "ari", "aki", "bare", "ovf".
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Created<wbr>At</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The date the image was created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Disk<wbr>Format</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The disk format. Must be one of
"ami", "ari", "aki", "vhd", "vmdk", "raw", "qcow2", "vdi", "iso".
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>File</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}the trailing path after the glance
endpoint that represent the location of the image
or the path to retrieve it.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Image<wbr>Cache<wbr>Path</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Image<wbr>Source<wbr>Url</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}This is the url of the raw image that will
be downloaded in the `image_cache_path` before being uploaded to Glance.
Glance is able to download image from internet but the `gophercloud` library
does not yet provide a way to do so.
Conflicts with `local_file_path`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Local<wbr>File<wbr>Path</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}This is the filepath of the raw image file
that will be uploaded to Glance. Conflicts with `image_source_url`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Metadata</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dictionary&lt;string, object&gt;</span>
    </dt>
    <dd>{{% md %}}The metadata associated with the image.
Image metadata allow for meaningfully define the image properties
and tags. See https://docs.openstack.org/glance/latest/user/metadefs-concepts.html.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Min<wbr>Disk<wbr>Gb</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}Amount of disk space (in GB) required to boot image.
Defaults to 0.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Min<wbr>Ram<wbr>Mb</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}Amount of ram (in MB) required to boot image.
Defauts to 0.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the image.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Owner</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The id of the openstack user who owns the image.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Properties</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dictionary&lt;string, object&gt;</span>
    </dt>
    <dd>{{% md %}}A map of key/value pairs to set freeform
information about an image. See the "Notes" section for further
information about properties.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Protected</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}If true, image will not be deletable.
Defaults to false.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Region</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The region in which to obtain the V2 Glance client.
A Glance client is needed to create an Image that can be used with
a compute instance. If omitted, the `region` argument of the provider
is used. Changing this creates a new Image.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Schema</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The path to the JSON-schema that represent
the image or image
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Size<wbr>Bytes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">int</a></span>
    </dt>
    <dd>{{% md %}}The size in bytes of the data associated with the image.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Status</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The status of the image. It can be "queued", "active"
or "saving".
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Tags</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}The tags of the image. It must be a list of strings.
At this time, it is not possible to delete all tags of an image.
{{% /md %}}</dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>Update<wbr>At</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}(**Deprecated** - use `updated_at` instead)
{{% /md %}}<p class="property-message">Deprecated: {{% md %}}Use updated_at instead{{% /md %}}</p></dd>

    <dt class="property-optional"
            title="Optional">
        <span>Updated<wbr>At</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The date the image was last updated.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Verify<wbr>Checksum</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">bool</a></span>
    </dt>
    <dd>{{% md %}}If false, the checksum will not be verified
once the image is finished uploading. Defaults to true.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Visibility</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}The visibility of the image. Must be one of
"public", "private", "community", or "shared". The ability to set the
visibility depends upon the configuration of the OpenStack cloud.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Checksum</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The checksum of the data associated with the image.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Container<wbr>Format</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The container format. Must be one of
"ami", "ari", "aki", "bare", "ovf".
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Created<wbr>At</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The date the image was created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Disk<wbr>Format</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The disk format. Must be one of
"ami", "ari", "aki", "vhd", "vmdk", "raw", "qcow2", "vdi", "iso".
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>File</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}the trailing path after the glance
endpoint that represent the location of the image
or the path to retrieve it.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Image<wbr>Cache<wbr>Path</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Image<wbr>Source<wbr>Url</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}This is the url of the raw image that will
be downloaded in the `image_cache_path` before being uploaded to Glance.
Glance is able to download image from internet but the `gophercloud` library
does not yet provide a way to do so.
Conflicts with `local_file_path`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Local<wbr>File<wbr>Path</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}This is the filepath of the raw image file
that will be uploaded to Glance. Conflicts with `image_source_url`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Metadata</span>
        <span class="property-indicator"></span>
        <span class="property-type">map[string]interface{}</span>
    </dt>
    <dd>{{% md %}}The metadata associated with the image.
Image metadata allow for meaningfully define the image properties
and tags. See https://docs.openstack.org/glance/latest/user/metadefs-concepts.html.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Min<wbr>Disk<wbr>Gb</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}Amount of disk space (in GB) required to boot image.
Defaults to 0.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Min<wbr>Ram<wbr>Mb</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}Amount of ram (in MB) required to boot image.
Defauts to 0.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the image.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Owner</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The id of the openstack user who owns the image.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Properties</span>
        <span class="property-indicator"></span>
        <span class="property-type">map[string]interface{}</span>
    </dt>
    <dd>{{% md %}}A map of key/value pairs to set freeform
information about an image. See the "Notes" section for further
information about properties.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Protected</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}If true, image will not be deletable.
Defaults to false.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Region</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The region in which to obtain the V2 Glance client.
A Glance client is needed to create an Image that can be used with
a compute instance. If omitted, the `region` argument of the provider
is used. Changing this creates a new Image.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Schema</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The path to the JSON-schema that represent
the image or image
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Size<wbr>Bytes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#integer">int</a></span>
    </dt>
    <dd>{{% md %}}The size in bytes of the data associated with the image.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Status</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The status of the image. It can be "queued", "active"
or "saving".
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Tags</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}The tags of the image. It must be a list of strings.
At this time, it is not possible to delete all tags of an image.
{{% /md %}}</dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>Update<wbr>At</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}(**Deprecated** - use `updated_at` instead)
{{% /md %}}<p class="property-message">Deprecated: {{% md %}}Use updated_at instead{{% /md %}}</p></dd>

    <dt class="property-optional"
            title="Optional">
        <span>Updated<wbr>At</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The date the image was last updated.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Verify<wbr>Checksum</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#boolean">bool</a></span>
    </dt>
    <dd>{{% md %}}If false, the checksum will not be verified
once the image is finished uploading. Defaults to true.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Visibility</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}The visibility of the image. Must be one of
"public", "private", "community", or "shared". The ability to set the
visibility depends upon the configuration of the OpenStack cloud.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>checksum</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The checksum of the data associated with the image.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>container<wbr>Format</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The container format. Must be one of
"ami", "ari", "aki", "bare", "ovf".
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>created<wbr>At</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The date the image was created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>disk<wbr>Format</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The disk format. Must be one of
"ami", "ari", "aki", "vhd", "vmdk", "raw", "qcow2", "vdi", "iso".
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>file</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}the trailing path after the glance
endpoint that represent the location of the image
or the path to retrieve it.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>image<wbr>Cache<wbr>Path</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>image<wbr>Source<wbr>Url</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}This is the url of the raw image that will
be downloaded in the `image_cache_path` before being uploaded to Glance.
Glance is able to download image from internet but the `gophercloud` library
does not yet provide a way to do so.
Conflicts with `local_file_path`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>local<wbr>File<wbr>Path</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}This is the filepath of the raw image file
that will be uploaded to Glance. Conflicts with `image_source_url`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>metadata</span>
        <span class="property-indicator"></span>
        <span class="property-type">{[key: string]: any}</span>
    </dt>
    <dd>{{% md %}}The metadata associated with the image.
Image metadata allow for meaningfully define the image properties
and tags. See https://docs.openstack.org/glance/latest/user/metadefs-concepts.html.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>min<wbr>Disk<wbr>Gb</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}Amount of disk space (in GB) required to boot image.
Defaults to 0.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>min<wbr>Ram<wbr>Mb</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}Amount of ram (in MB) required to boot image.
Defauts to 0.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The name of the image.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>owner</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The id of the openstack user who owns the image.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>properties</span>
        <span class="property-indicator"></span>
        <span class="property-type">{[key: string]: any}</span>
    </dt>
    <dd>{{% md %}}A map of key/value pairs to set freeform
information about an image. See the "Notes" section for further
information about properties.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>protected</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}If true, image will not be deletable.
Defaults to false.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>region</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The region in which to obtain the V2 Glance client.
A Glance client is needed to create an Image that can be used with
a compute instance. If omitted, the `region` argument of the provider
is used. Changing this creates a new Image.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>schema</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The path to the JSON-schema that represent
the image or image
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>size<wbr>Bytes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/integer">number</a></span>
    </dt>
    <dd>{{% md %}}The size in bytes of the data associated with the image.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>status</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The status of the image. It can be "queued", "active"
or "saving".
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>tags</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}The tags of the image. It must be a list of strings.
At this time, it is not possible to delete all tags of an image.
{{% /md %}}</dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>update<wbr>At</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}(**Deprecated** - use `updated_at` instead)
{{% /md %}}<p class="property-message">Deprecated: {{% md %}}Use updated_at instead{{% /md %}}</p></dd>

    <dt class="property-optional"
            title="Optional">
        <span>updated<wbr>At</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The date the image was last updated.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>verify<wbr>Checksum</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean">boolean</a></span>
    </dt>
    <dd>{{% md %}}If false, the checksum will not be verified
once the image is finished uploading. Defaults to true.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>visibility</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}The visibility of the image. Must be one of
"public", "private", "community", or "shared". The ability to set the
visibility depends upon the configuration of the OpenStack cloud.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>checksum</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The checksum of the data associated with the image.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>container_<wbr>format</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The container format. Must be one of
"ami", "ari", "aki", "bare", "ovf".
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>created_<wbr>at</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The date the image was created.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>disk_<wbr>format</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The disk format. Must be one of
"ami", "ari", "aki", "vhd", "vmdk", "raw", "qcow2", "vdi", "iso".
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>file</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}the trailing path after the glance
endpoint that represent the location of the image
or the path to retrieve it.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>image_<wbr>cache_<wbr>path</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>image_<wbr>source_<wbr>url</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}This is the url of the raw image that will
be downloaded in the `image_cache_path` before being uploaded to Glance.
Glance is able to download image from internet but the `gophercloud` library
does not yet provide a way to do so.
Conflicts with `local_file_path`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>local_<wbr>file_<wbr>path</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}This is the filepath of the raw image file
that will be uploaded to Glance. Conflicts with `image_source_url`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>metadata</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dict[str, Any]</span>
    </dt>
    <dd>{{% md %}}The metadata associated with the image.
Image metadata allow for meaningfully define the image properties
and tags. See https://docs.openstack.org/glance/latest/user/metadefs-concepts.html.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>min_<wbr>disk_<wbr>gb</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}Amount of disk space (in GB) required to boot image.
Defaults to 0.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>min_<wbr>ram_<wbr>mb</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}Amount of ram (in MB) required to boot image.
Defauts to 0.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The name of the image.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>owner</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The id of the openstack user who owns the image.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>properties</span>
        <span class="property-indicator"></span>
        <span class="property-type">Dict[str, Any]</span>
    </dt>
    <dd>{{% md %}}A map of key/value pairs to set freeform
information about an image. See the "Notes" section for further
information about properties.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>protected</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}If true, image will not be deletable.
Defaults to false.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>region</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The region in which to obtain the V2 Glance client.
A Glance client is needed to create an Image that can be used with
a compute instance. If omitted, the `region` argument of the provider
is used. Changing this creates a new Image.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>schema</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The path to the JSON-schema that represent
the image or image
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>size_<wbr>bytes</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">float</a></span>
    </dt>
    <dd>{{% md %}}The size in bytes of the data associated with the image.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>status</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The status of the image. It can be "queued", "active"
or "saving".
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>tags</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}The tags of the image. It must be a list of strings.
At this time, it is not possible to delete all tags of an image.
{{% /md %}}</dd>

    <dt class="property-optional property-deprecated"
            title="Optional, Deprecated">
        <span>update_<wbr>at</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}(**Deprecated** - use `updated_at` instead)
{{% /md %}}<p class="property-message">Deprecated: {{% md %}}Use updated_at instead{{% /md %}}</p></dd>

    <dt class="property-optional"
            title="Optional">
        <span>updated_<wbr>at</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The date the image was last updated.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>verify_<wbr>checksum</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">bool</a></span>
    </dt>
    <dd>{{% md %}}If false, the checksum will not be verified
once the image is finished uploading. Defaults to true.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>visibility</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}The visibility of the image. Must be one of
"public", "private", "community", or "shared". The ability to set the
visibility depends upon the configuration of the OpenStack cloud.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}











<h3>Package Details</h3>
<dl class="package-details">
	<dt>Repository</dt>
	<dd><a href="https://github.com/pulumi/pulumi-openstack">https://github.com/pulumi/pulumi-openstack</a></dd>
	<dt>License</dt>
	<dd>Apache-2.0</dd>
    <dt>Notes</dt>
	<dd>This Pulumi package is based on the [`openstack` Terraform Provider](https://github.com/terraform-providers/terraform-provider-openstack).</dd>
</dl>

