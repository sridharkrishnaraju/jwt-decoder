# JWT Decoder

Paste a JWT to read its header and payload — nothing leaves your browser. Zero dependencies — works in plain HTML, React, Vue, Svelte or Astro.

**▶ [Live demo](https://sgbp.tech/tools/jwt-decoder)**

```html
<script src="jwt-decoder.js"></script>
<jwt-decoder></jwt-decoder>
```

## What it does

A JSON Web Token (JWT) is three Base64URL-encoded parts separated by dots: a **header** (the signing algorithm), a **payload** (the claims — who the user is, when the token expires), and a **signature** the server uses to confirm the token wasn't tampered with. JWTs are everywhere in modern auth.

## Install

```bash
npm install @sgbp/jwt-decoder
```

or copy `jwt-decoder.js` into your project.

## Further reading

Maintained by [SGBP — Singapore Build Partners](https://sgbp.tech), a studio building fast,
accessible websites for Singapore SMEs, as one of a set of free developer tools.

## License

MIT © SGBP. Contributions welcome.
