# Guide: Decoding is not verifying

This tool only **decodes** — it reads the header and payload so you can inspect them. It does not verify the signature, because verification needs the secret or public key, which belongs on your server. Never trust the contents of a JWT on the client without verifying it server-side, and treat `exp` (expiry) and `iat` (issued-at) as the security-relevant claims.

## Beyond this tool

This is one of several free developer tools from
[SGBP — Singapore Build Partners](https://sgbp.tech). If you'd like a full website built or
audited for performance, accessibility and SEO rather than a single utility, that's what the
studio does for Singapore SMEs.
