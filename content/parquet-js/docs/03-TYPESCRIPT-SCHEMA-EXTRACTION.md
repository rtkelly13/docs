# 03 - TypeScript Schema Codegen & Typing

Compile-time type safety is the core value proposition of both `Parquet.SourceGenerator` in C# and TypeScript in the JavaScript ecosystem. This guide explains how Parquet schema metadata translates into strongly-typed TypeScript interfaces.

---

## 📐 Schema to TypeScript Translation

When reading Parquet metadata from footer metadata or Arrow schemas, types map directly:

```typescript
// Generated TypeScript interface matching Parquet schema
export interface OrderRecord {
  id: number;
  orderNumber: string;
  totalAmount: number; // Decimal mapped to JavaScript number
  createdAt: Date;
  status: 'Pending' | 'Shipped' | 'Delivered'; // Dictionary-encoded enum
  notes?: string; // Nullable column
}
```

---

## ⚡ Zero-Copy Columnar Access with Arrow JS

Rather than converting entire columnar record batches into JavaScript object arrays (which allocates thousands of small GC objects), Arrow JS provides zero-copy columnar vector slicing:

```typescript
import * as arrow from 'apache-arrow';

export function computeTotalRevenue(table: arrow.Table<OrderRecord>): number {
  const amountColumn = table.getChild('totalAmount');
  if (!amountColumn) return 0;

  let total = 0;
  // Iterate directly over TypedArray chunks
  for (const chunk of amountColumn.data) {
    const values = chunk.values; // Float64Array
    for (let i = 0; i < values.length; i++) {
      total += values[i];
    }
  }
  return total;
}
```
