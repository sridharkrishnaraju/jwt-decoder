# JWT Decoder

Paste a JWT to read its header and payload — nothing leaves your browser. A free, zero-dependency Web Component you can drop into any site.

```html
<script src="jwt-decoder.js"></script>
<jwt-decoder></jwt-decoder>
```

## What it does

A JSON Web Token (JWT) is three Base64URL-encoded parts separated by dots: a **header** (the signing algorithm), a **payload** (the claims — who the user is, when the token expires), and a **signature** the server uses to confirm the token wasn't tampered with. JWTs are everywhere in modern auth.

## When you'd use it

Debugging an auth flow, checking what claims a token carries, or seeing whether a token has expired.

See the [Usage & API guide](usage.md) for framework examples, or the [guide](guide.md) for tips.

## About

This tool is maintained by [SGBP — Singapore Build Partners](https://sgbp.tech), a Singapore
studio building fast, accessible websites for SMEs. It is part of a set of free developer tools.
