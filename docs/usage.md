# Usage & API

It is a standard custom element, so it works with no wrapper in plain HTML, React, Vue, Svelte and Astro.

## Plain HTML

```html
<script src="jwt-decoder.js"></script>
<jwt-decoder></jwt-decoder>
```

## React

```jsx
import "@sgbp/jwt-decoder";
export default function Page() { return <jwt-decoder />; }
```

## Vue

```vue
<script setup>
import "@sgbp/jwt-decoder";
</script>

<template>
  <jwt-decoder />
</template>
```

---

Prefer to just use it without installing anything? The
[live JWT Decoder](https://sgbp.tech/tools/jwt-decoder) is hosted and ready to go.
