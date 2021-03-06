
---
title: "GetInstanceTypeOffering"
block_external_search_index: true
---



Information about single EC2 Instance Type Offering.

{{% examples %}}
## Example Usage
{{% example %}}

```typescript
import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

const example = aws.ec2.getInstanceTypeOffering({
    filters: [{
        name: "instance-type",
        values: [
            "t1.micro",
            "t2.micro",
            "t3.micro",
        ],
    }],
    preferredInstanceTypes: [
        "t3.micro",
        "t2.micro",
        "t1.micro",
    ],
});
```

{{% /example %}}
{{% /examples %}}





## Using GetInstanceTypeOffering

{{< chooser language "javascript,typescript,python,go,csharp" / >}}


{{% choosable language typescript %}}
<div class="highlight"><pre class="chroma"><code class="language-typescript" data-lang="typescript"><span class="k">function </span>getInstanceTypeOffering<span class="p">(</span><span class="nx">args</span>: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/aws/ec2/#GetInstanceTypeOfferingArgs">GetInstanceTypeOfferingArgs</a></span><span class="p">, </span><span class="nx">opts</span>?: <span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/pulumi/#InvokeOptions">InvokeOptions</a></span><span class="p">): Promise&lt;<span class="nx"><a href="/docs/reference/pkg/nodejs/pulumi/aws/ec2/#GetInstanceTypeOfferingResult">GetInstanceTypeOfferingResult</a></span>></span></code></pre></div>
{{% /choosable %}}


{{% choosable language python %}}
<div class="highlight"><pre class="chroma"><code class="language-python" data-lang="python"><span class="k">function </span> get_instance_type_offering(</span>filters=None<span class="p">, </span>location_type=None<span class="p">, </span>preferred_instance_types=None<span class="p">, </span>opts=None<span class="p">)</span></code></pre></div>
{{% /choosable %}}


{{% choosable language go %}}
<div class="highlight"><pre class="chroma"><code class="language-go" data-lang="go"><span class="k">func </span>LookupInstanceTypeOffering<span class="p">(</span><span class="nx">ctx</span> *<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#Context">pulumi.Context</a></span><span class="p">, </span><span class="nx">args</span> <span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/ec2?tab=doc#LookupInstanceTypeOfferingArgs">LookupInstanceTypeOfferingArgs</a></span><span class="p">, </span><span class="nx">opts</span> ...<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi/sdk/v2/go/pulumi?tab=doc#InvokeOption">pulumi.InvokeOption</a></span><span class="p">) (*<span class="nx"><a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/ec2?tab=doc#LookupInstanceTypeOfferingResult">LookupInstanceTypeOfferingResult</a></span>, error)</span></code></pre></div>
{{% /choosable %}}


{{% choosable language csharp %}}
<div class="highlight"><pre class="chroma"><code class="language-csharp" data-lang="csharp"><span class="k">public static class </span><span class="nx">GetInstanceTypeOffering </span><span class="p">{</span><span class="k">
    public static </span>Task&lt;<span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Aws/Pulumi.Aws.Ec2.GetInstanceTypeOfferingResult.html">GetInstanceTypeOfferingResult</a></span>> <span class="p">InvokeAsync(</span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi.Aws/Pulumi.Aws.Ec2.GetInstanceTypeOfferingArgs.html">GetInstanceTypeOfferingArgs</a></span> <span class="nx">args<span class="p">, </span><span class="nx"><a href="/docs/reference/pkg/dotnet/Pulumi/Pulumi.InvokeOptions.html">InvokeOptions</a></span>? <span class="nx">opts = null<span class="p">)</span><span class="p">
}</span></code></pre></div>
{{% /choosable %}}



The following arguments are supported:



{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Filters</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getinstancetypeofferingfilter">List&lt;Get<wbr>Instance<wbr>Type<wbr>Offering<wbr>Filter<wbr>Args&gt;</a></span>
    </dt>
    <dd>{{% md %}}One or more configuration blocks containing name-values filters. See the [EC2 API Reference](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstanceTypeOfferings.html) for supported filters. Detailed below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Location<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Location type. Defaults to `region`. Valid values: `availability-zone`, `availability-zone-id`, and `region`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Preferred<wbr>Instance<wbr>Types</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}Ordered list of preferred EC2 Instance Types. The first match in this list will be returned. If no preferred matches are found and the original search returned more than one result, an error is returned.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>Filters</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getinstancetypeofferingfilter">[]Get<wbr>Instance<wbr>Type<wbr>Offering<wbr>Filter</a></span>
    </dt>
    <dd>{{% md %}}One or more configuration blocks containing name-values filters. See the [EC2 API Reference](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstanceTypeOfferings.html) for supported filters. Detailed below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Location<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}Location type. Defaults to `region`. Valid values: `availability-zone`, `availability-zone-id`, and `region`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>Preferred<wbr>Instance<wbr>Types</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}Ordered list of preferred EC2 Instance Types. The first match in this list will be returned. If no preferred matches are found and the original search returned more than one result, an error is returned.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>filters</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getinstancetypeofferingfilter">Get<wbr>Instance<wbr>Type<wbr>Offering<wbr>Filter[]</a></span>
    </dt>
    <dd>{{% md %}}One or more configuration blocks containing name-values filters. See the [EC2 API Reference](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstanceTypeOfferings.html) for supported filters. Detailed below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>location<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}Location type. Defaults to `region`. Valid values: `availability-zone`, `availability-zone-id`, and `region`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>preferred<wbr>Instance<wbr>Types</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}Ordered list of preferred EC2 Instance Types. The first match in this list will be returned. If no preferred matches are found and the original search returned more than one result, an error is returned.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

    <dt class="property-optional"
            title="Optional">
        <span>filters</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getinstancetypeofferingfilter">List[Get<wbr>Instance<wbr>Type<wbr>Offering<wbr>Filter]</a></span>
    </dt>
    <dd>{{% md %}}One or more configuration blocks containing name-values filters. See the [EC2 API Reference](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstanceTypeOfferings.html) for supported filters. Detailed below.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>location_<wbr>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}Location type. Defaults to `region`. Valid values: `availability-zone`, `availability-zone-id`, and `region`.
{{% /md %}}</dd>

    <dt class="property-optional"
            title="Optional">
        <span>preferred_<wbr>instance_<wbr>types</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}Ordered list of preferred EC2 Instance Types. The first match in this list will be returned. If no preferred matches are found and the original search returned more than one result, an error is returned.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}








## GetInstanceTypeOffering Result

The following output properties are available:




{{% choosable language csharp %}}
<dl class="resources-properties">

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
        <span>Instance<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}EC2 Instance Type.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Filters</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getinstancetypeofferingfilter">List&lt;Get<wbr>Instance<wbr>Type<wbr>Offering<wbr>Filter&gt;</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Location<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Preferred<wbr>Instance<wbr>Types</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language go %}}
<dl class="resources-properties">

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
        <span>Instance<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}EC2 Instance Type.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Filters</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getinstancetypeofferingfilter">[]Get<wbr>Instance<wbr>Type<wbr>Offering<wbr>Filter</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Location<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>Preferred<wbr>Instance<wbr>Types</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language nodejs %}}
<dl class="resources-properties">

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
        <span>instance<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}EC2 Instance Type.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>filters</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getinstancetypeofferingfilter">Get<wbr>Instance<wbr>Type<wbr>Offering<wbr>Filter[]</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>location<wbr>Type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>preferred<wbr>Instance<wbr>Types</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}


{{% choosable language python %}}
<dl class="resources-properties">

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
        <span>instance_<wbr>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}EC2 Instance Type.
{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>filters</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="#getinstancetypeofferingfilter">List[Get<wbr>Instance<wbr>Type<wbr>Offering<wbr>Filter]</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>location_<wbr>type</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">str</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

    <dt class="property-"
            title="">
        <span>preferred_<wbr>instance_<wbr>types</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}{{% /md %}}</dd>

</dl>
{{% /choosable %}}








## Supporting Types

<h4>Get<wbr>Instance<wbr>Type<wbr>Offering<wbr>Filter</h4>
{{% choosable language nodejs %}}
> See the <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/input/#GetInstanceTypeOfferingFilter">input</a> and <a href="/docs/reference/pkg/nodejs/pulumi/aws/types/output/#GetInstanceTypeOfferingFilter">output</a> API doc for this type.
{{% /choosable %}}

{{% choosable language go %}}
> See the <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/ec2?tab=doc#GetInstanceTypeOfferingFilterArgs">input</a> and <a href="https://pkg.go.dev/github.com/pulumi/pulumi-aws/sdk/v2/go/aws/ec2?tab=doc#GetInstanceTypeOfferingFilter">output</a> API doc for this type.
{{% /choosable %}}




{{% choosable language csharp %}}
<dl class="resources-properties">

    <dt class="property-required"
            title="Required">
        <span>Name</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">string</a></span>
    </dt>
    <dd>{{% md %}}Name of the filter. The `location` filter depends on the top-level `location_type` argument and if not specified, defaults to the current region.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Values</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types">List&lt;string&gt;</a></span>
    </dt>
    <dd>{{% md %}}List of one or more values for the filter.
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
    <dd>{{% md %}}Name of the filter. The `location` filter depends on the top-level `location_type` argument and if not specified, defaults to the current region.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>Values</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://golang.org/pkg/builtin/#string">[]string</a></span>
    </dt>
    <dd>{{% md %}}List of one or more values for the filter.
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
    <dd>{{% md %}}Name of the filter. The `location` filter depends on the top-level `location_type` argument and if not specified, defaults to the current region.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>values</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string">string[]</a></span>
    </dt>
    <dd>{{% md %}}List of one or more values for the filter.
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
    <dd>{{% md %}}Name of the filter. The `location` filter depends on the top-level `location_type` argument and if not specified, defaults to the current region.
{{% /md %}}</dd>

    <dt class="property-required"
            title="Required">
        <span>values</span>
        <span class="property-indicator"></span>
        <span class="property-type"><a href="https://docs.python.org/3/library/stdtypes.html">List[str]</a></span>
    </dt>
    <dd>{{% md %}}List of one or more values for the filter.
{{% /md %}}</dd>

</dl>
{{% /choosable %}}







