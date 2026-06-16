/**
 * <jwt-decoder> — decode a JWT's header & payload in the browser (no verification,
 * nothing leaves the page). Zero dependencies.
 * Built & maintained by SGBP — Singapore Build Partners (https://sgbp.tech). MIT.
 */
class JwtDecoder extends HTMLElement {
  constructor() { super(); this.attachShadow({ mode: "open" }); }
  connectedCallback() { this.render(); }
  _b64url(str) {
    str = str.replace(/-/g, "+").replace(/_/g, "/"); while (str.length % 4) str += "=";
    return decodeURIComponent(escape(atob(str)));
  }
  _pretty(obj) {
    let s = JSON.stringify(obj, null, 2);
    ["exp", "iat", "nbf"].forEach((k) => { if (typeof obj[k] === "number") {
      const d = new Date(obj[k] * 1000).toUTCString();
      s = s.replace(new RegExp(`("${k}":\\s*${obj[k]})`), `$1  // ${d}`);
    }});
    return s;
  }
  _decode() {
    const $ = (s) => this.shadowRoot.querySelector(s);
    const t = $("#in").value.trim();
    const out = $("#out");
    if (!t) { out.innerHTML = ""; return; }
    const parts = t.split(".");
    if (parts.length < 2) { out.innerHTML = `<p class="err">Not a valid JWT (expected header.payload.signature).</p>`; return; }
    try {
      const header = JSON.parse(this._b64url(parts[0]));
      const payload = JSON.parse(this._b64url(parts[1]));
      const exp = payload.exp ? (payload.exp * 1000 < Date.now() ? `<span class="bad">expired</span>` : `<span class="ok">valid until ${new Date(payload.exp * 1000).toUTCString()}</span>`) : "";
      out.innerHTML = `
        <div class="block"><h4>Header</h4><pre>${this._esc(this._pretty(header))}</pre></div>
        <div class="block"><h4>Payload ${exp}</h4><pre>${this._esc(this._pretty(payload))}</pre></div>
        <div class="block"><h4>Signature</h4><pre class="sig">${this._esc(parts[2] || "(none)")}</pre>
        <small>Signature is not verified — this tool only decodes.</small></div>`;
    } catch (e) { out.innerHTML = `<p class="err">Could not decode — the token is malformed.</p>`; }
  }
  _esc(s) { return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  render() {
    this.shadowRoot.innerHTML = `
      <style>
        *,*::before,*::after{box-sizing:border-box}
        :host{display:block;width:100%;max-width:620px;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif}
        .card{border:1px solid #e2e2e2;border-radius:12px;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.06);padding:16px}
        label{display:flex;justify-content:space-between;align-items:center;font-size:12px;font-weight:600;color:#555;margin-bottom:6px}
        .mini{font:inherit;font-size:11px;font-weight:700;color:#EB0028;background:none;border:0;cursor:pointer}
        textarea{width:100%;min-height:90px;padding:10px;border:1px solid #ccc;border-radius:8px;font-family:ui-monospace,Menlo,monospace;font-size:13px;resize:vertical;word-break:break-all}
        .block{margin-top:14px}
        h4{margin:0 0 6px;font-size:13px;color:#EB0028}
        pre{background:#f6f8fa;border:1px solid #eaecef;border-radius:8px;padding:10px;overflow-x:auto;font-size:12px;line-height:1.5;margin:0;white-space:pre-wrap;word-break:break-word}
        pre.sig{color:#555}
        small{color:#888;font-size:11px}
        .err{color:#c5221f;font-size:13px}
        .ok{font-size:11px;color:#137333;font-weight:700}.bad{font-size:11px;color:#c5221f;font-weight:700}
      </style>
      <div class="card">
        <label>Paste a JSON Web Token <button class="mini" id="clear">Clear</button></label>
        <textarea id="in" placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.…" spellcheck="false"></textarea>
        <div id="out"></div>
      </div>`;
    this.shadowRoot.querySelector("#in").addEventListener("input", () => this._decode());
    this.shadowRoot.querySelector("#clear").addEventListener("click", () => {
      const i = this.shadowRoot.querySelector("#in"); i.value = ""; this.shadowRoot.querySelector("#out").innerHTML = ""; i.focus();
    });
  }
}
if (!customElements.get("jwt-decoder")) customElements.define("jwt-decoder", JwtDecoder);
