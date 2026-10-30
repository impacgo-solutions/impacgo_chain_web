(()=>{var _={blink:!0,gecko:!1,webkit:!1,unknown:!1},K=()=>navigator.vendor==="Google Inc."||navigator.userAgent.includes("Edg/")?"blink":navigator.vendor==="Apple Computer, Inc."?"webkit":navigator.vendor===""&&navigator.userAgent.includes("Firefox")?"gecko":"unknown",C=K(),R=()=>typeof ImageDecoder>"u"?!1:C==="blink",B=()=>typeof Intl.v8BreakIterator<"u"&&typeof Intl.Segmenter<"u",z=()=>{let i=[0,97,115,109,1,0,0,0,1,5,1,95,1,120,0];return WebAssembly.validate(new Uint8Array(i))},M=()=>{let i=document.createElement("canvas");return i.width=1,i.height=1,i.getContext("webgl2")!=null?2:i.getContext("webgl")!=null?1:-1},D=()=>window.chrome&&chrome.runtime&&chrome.runtime.id,w={browserEngine:C,hasImageCodecs:R(),hasChromiumBreakIterators:B(),supportsWasmGC:z(),crossOriginIsolated:window.crossOriginIsolated,webGLVersion:M(),isChromeExtension:D()};function c(...i){return new URL(I(...i),document.baseURI).toString()}function I(...i){return i.filter(e=>!!e).map((e,n)=>n===0?S(e):F(S(e))).filter(e=>e.length).join("/")}function F(i){let e=0;for(;e<i.length&&i.charAt(e)==="/";)e++;return i.substring(e)}function S(i){let e=i.length;for(;e>0&&i.charAt(e-1)==="/";)e--;return i.substring(0,e)}function E(i,e){return i.canvasKitBaseUrl?i.canvasKitBaseUrl:e.engineRevision&&!e.useLocalCanvasKit?I("https://www.gstatic.com/flutter-canvaskit",e.engineRevision):"canvaskit"}var v=class{constructor(){this._scriptLoaded=!1}setTrustedTypesPolicy(e){this._ttPolicy=e}async loadEntrypoint(e){let{entrypointUrl:n=c("main.dart.js"),onEntrypointLoaded:t,nonce:r}=e||{};return this._loadJSEntrypoint(n,t,r)}async load(e,n,t,r,a){a??=l=>{l.initializeEngine(t).then(u=>u.runApp())};let{entrypointBaseUrl:s}=t,{entryPointBaseUrl:o}=t;if(!s&&o&&(console.warn("[deprecated] `entryPointBaseUrl` is deprecated and will be removed in a future release. Use `entrypointBaseUrl` instead."),s=o),e.compileTarget==="dart2wasm")return this._loadWasmEntrypoint(e,n,s,a);{let l=e.mainJsPath??"main.dart.js",u=c(s,l);return this._loadJSEntrypoint(u,a,r)}}didCreateEngineInitializer(e){typeof this._didCreateEngineInitializerResolve=="function"&&(this._didCreateEngineInitializerResolve(e),this._didCreateEngineInitializerResolve=null,delete _flutter.loader.didCreateEngineInitializer),typeof this._onEntrypointLoaded=="function"&&this._onEntrypointLoaded(e)}_loadJSEntrypoint(e,n,t){let r=typeof n=="function";if(!this._scriptLoaded){this._scriptLoaded=!0;let a=this._createScriptTag(e,t);if(r)console.debug("Injecting <script> tag. Using callback."),this._onEntrypointLoaded=n,document.head.append(a);else return new Promise((s,o)=>{console.debug("Injecting <script> tag. Using Promises. Use the callback approach instead!"),this._didCreateEngineInitializerResolve=s,a.addEventListener("error",o),document.head.append(a)})}}async _loadWasmEntrypoint(e,n,t,r){if(!this._scriptLoaded){this._scriptLoaded=!0,this._onEntrypointLoaded=r;let{mainWasmPath:a,jsSupportRuntimePath:s}=e,o=c(t,a),l=c(t,s);this._ttPolicy!=null&&(l=this._ttPolicy.createScriptURL(l));let d=(await import(l)).compileStreaming(fetch(o)),p;e.renderer==="skwasm"?p=(async()=>{let h=await n.skwasm;return window._flutter_skwasmInstance=h,{skwasm:h.wasmExports,skwasmWrapper:h,ffi:{memory:h.wasmMemory}}})():p=Promise.resolve({}),await(await(await d).instantiate(await p,{loadDynamicModule:async(h,j)=>{let A=fetch(c(t,h)),L=c(t,j);this._ttPolicy!=null&&(L=this._ttPolicy.createScriptURL(L));let x=import(L);return[await A,await x]}})).invokeMain()}}_createScriptTag(e,n){let t=document.createElement("script");t.type="application/javascript",n&&(t.nonce=n);let r=e;return this._ttPolicy!=null&&(r=this._ttPolicy.createScriptURL(e)),t.src=r,t}};async function T(i,e,n){if(e<0)return i;let t,r=new Promise((a,s)=>{t=setTimeout(()=>{s(new Error(`${n} took more than ${e}ms to resolve. Moving on.`,{cause:T}))},e)});return Promise.race([i,r]).finally(()=>{clearTimeout(t)})}var g=class{setTrustedTypesPolicy(e){this._ttPolicy=e}loadServiceWorker(e){if(!e||!("serviceWorker"in navigator))return Promise.resolve();let n=()=>{console.warn(`Loading the service worker using Flutter bootstrap is deprecated and will stop working in a future release.
For more details, see: https://github.com/flutter/flutter/issues/156910`)},t=()=>{let{serviceWorkerVersion:r,serviceWorkerUrl:a=c(`flutter_service_worker.js?v=${r}`),timeoutMillis:s=4e3}=e,o=a;this._ttPolicy!=null&&(o=this._ttPolicy.createScriptURL(o));let l=navigator.serviceWorker.register(o).then(u=>this._getNewServiceWorker(u,r)).then(this._waitForServiceWorkerActivation);return T(l,s,"prepareServiceWorker")};return e.serviceWorkerUrl!=null?(n(),t()):navigator.serviceWorker.getRegistration().then(r=>r?t():Promise.resolve())}async _getNewServiceWorker(e,n){if(!e.active&&(e.installing||e.waiting))return console.debug("Installing/Activating first service worker."),e.installing||e.waiting;if(e.active.scriptURL.endsWith(n))return console.debug("Loading from existing service worker."),e.active;{let t=await e.update();return console.debug("Updating service worker."),t.installing||t.waiting||t.active}}async _waitForServiceWorkerActivation(e){if(!e||e.state==="activated")if(e){console.debug("Service worker already active.");return}else throw new Error("Cannot activate a null service worker!");return new Promise((n,t)=>{e.addEventListener("statechange",()=>{e.state==="activated"&&(console.debug("Activated new service worker."),n())})})}};var y=class{constructor(e,n="flutter-js"){let t=e||[/\.js$/,/\.mjs$/];window.trustedTypes&&(this.policy=trustedTypes.createPolicy(n,{createScriptURL:function(r){if(r.startsWith("blob:"))return r;let a=new URL(r,window.location),s=a.pathname.split("/").pop();if(t.some(l=>l.test(s)))return a.toString();console.error("URL rejected by TrustedTypes policy",n,":",r,"(download prevented)")}}))}};var k=i=>{let e=WebAssembly.compileStreaming(fetch(i));return(n,t)=>((async()=>{let r=await e,a=await WebAssembly.instantiate(r,n);t(a,r)})(),{})};var U=(i,e,n,t)=>(window.flutterCanvasKitLoaded=(async()=>{if(window.flutterCanvasKit)return window.flutterCanvasKit;let r=n.hasChromiumBreakIterators&&n.hasImageCodecs;if(!r&&e.canvasKitVariant=="chromium")throw"Chromium CanvasKit variant specifically requested, but unsupported in this browser";let a=r&&e.canvasKitVariant!=="full",s=t;e.canvasKitVariant=="experimentalWebParagraph"?s=c(s,"experimental_webparagraph"):a&&(s=c(s,"chromium"));let o=c(s,"canvaskit.js");i.flutterTT.policy&&(o=i.flutterTT.policy.createScriptURL(o));let l=k(c(s,"canvaskit.wasm")),u=await import(o);return window.flutterCanvasKit=await u.default({instantiateWasm:l}),window.flutterCanvasKit})(),window.flutterCanvasKitLoaded);var W=async(i,e,n,t)=>{let a=!n.hasImageCodecs||!n.hasChromiumBreakIterators?"skwasm_heavy":e.enableWimp?"wimp":"skwasm",s=c(t,`${a}.js`),o=s;i.flutterTT.policy&&(o=i.flutterTT.policy.createScriptURL(o));let l=k(c(t,`${a}.wasm`));return await(await import(o)).default({skwasmSingleThreaded:e.enableWimp||!n.crossOriginIsolated||n.isChromeExtension||e.forceSingleThreadedSkwasm,instantiateWasm:l,locateFile:(d,p)=>d.endsWith(".ww.js")?URL.createObjectURL(new Blob([`
"use strict";

let eventListener;
eventListener = (message) => {
    const pendingMessages = [];
    const data = message.data;
    data["instantiateWasm"] = (info,receiveInstance) => {
        const instance = new WebAssembly.Instance(data["wasm"], info);
        return receiveInstance(instance, data["wasm"])
    };
    import(data.js).then(async (skwasm) => {
        await skwasm.default(data);

        removeEventListener("message", eventListener);
        for (const message of pendingMessages) {
            dispatchEvent(message);
        }
    });
    removeEventListener("message", eventListener);
    eventListener = (message) => {

        pendingMessages.push(message);
    };

    addEventListener("message", eventListener);
};
addEventListener("message", eventListener);
`],{type:"application/javascript"})):c(t,d),mainScriptUrlOrBlob:s})};var P=w.supportsWasmGC,G=P&&w.webGLVersion>0,b=class{async loadEntrypoint(e){let{serviceWorker:n,...t}=e||{},r=new y,a=new g;a.setTrustedTypesPolicy(r.policy),await a.loadServiceWorker(n).catch(o=>{console.warn("Exception while loading service worker:",o)});let s=new v;return s.setTrustedTypesPolicy(r.policy),this.didCreateEngineInitializer=s.didCreateEngineInitializer.bind(s),s.loadEntrypoint(t)}async load({serviceWorkerSettings:e,onEntrypointLoaded:n,nonce:t,config:r}={}){r??={};let a=_flutter.buildConfig;if(!a)throw"FlutterLoader.load requires _flutter.buildConfig to be set";let s=r.wasmAllowList?.[w.browserEngine]??_[w.browserEngine],o=m=>{switch(m){case"skwasm":return G&&s;default:return!0}},l=m=>m.compileTarget==="dart2wasm"&&!P||r.renderer&&r.renderer!=m.renderer?!1:o(m.renderer),u=a.builds.find(l);if(!u)throw"FlutterLoader could not find a build compatible with configuration and environment.";let d={};d.flutterTT=new y,e&&(d.serviceWorkerLoader=new g,d.serviceWorkerLoader.setTrustedTypesPolicy(d.flutterTT.policy),await d.serviceWorkerLoader.loadServiceWorker(e).catch(m=>{console.warn("Exception while loading service worker:",m)}));let p=E(r,a);u.renderer==="canvaskit"?d.canvasKit=U(d,r,w,p):u.renderer==="skwasm"&&(d.skwasm=W(d,r,w,p));let f=new v;return f.setTrustedTypesPolicy(d.flutterTT.policy),this.didCreateEngineInitializer=f.didCreateEngineInitializer.bind(f),f.load(u,d,r,t,n)}};window._flutter||(window._flutter={});window._flutter.loader||(window._flutter.loader=new b);})();
//# sourceMappingURL=flutter.js.map

if (!window._flutter) {
  window._flutter = {};
}
_flutter.buildConfig = {"engineRevision":"425cfb54d01a9472b3e81d9e76fd63a4a44cfbcb","builds":[{"compileTarget":"dart2js","renderer":"canvaskit","mainJsPath":"main.dart.js"},{}]};


// Start-up picks how the screen is drawn.
//
// Normally the app draws with the graphics card (WebGL), which is fast. On some computers the graphics
// driver cannot compile two of the small programs ("shaders") the engine needs, for rounded shapes and for
// text. The browser then prints "Shader compilation error", the screen blinks and the app keeps redrawing.
//
// So before starting, the exact same two shaders are test-compiled here. If the driver accepts them the
// graphics card is used as usual; if it rejects them, only that computer falls back to drawing with the
// processor (slower, but stable and without blinking).
function graphicsCardCanDraw() {
  try {
    const gl = document.createElement('canvas').getContext('webgl2');
    if (!gl) return false;
    const shaders = [
      // text (glyph atlas lookup with a texture bias)
      `#version 300 es
precision mediump float;
precision mediump sampler2D;
out mediump vec4 sk_FragColor;
uniform sampler2D uTextureSampler_0_S0;
in highp vec2 vTextureCoords_S0;
in mediump vec4 vinColor_S0;
void main() {
  mediump vec4 texColor = texture(uTextureSampler_0_S0, vTextureCoords_S0, -0.475).xxxx;
  sk_FragColor = vinColor_S0 * texColor;
}`,
      // rounded shapes (circle / rounded-corner edges)
      `#version 300 es
precision mediump float;
precision mediump sampler2D;
out mediump vec4 sk_FragColor;
in highp vec4 vinCircleEdge_S0;
in mediump vec4 vinColor_S0;
void main() {
  highp float d = length(vinCircleEdge_S0.xy);
  mediump float distanceToOuterEdge = vinCircleEdge_S0.z * (1.0 - d);
  mediump float edgeAlpha = clamp(distanceToOuterEdge, 0.0, 1.0);
  sk_FragColor = vinColor_S0 * vec4(edgeAlpha);
}`,
      // rounded shapes clipped to a rounded rectangle (cards, buttons, avatars)
      `#version 300 es
uniform highp vec2 u_skRTFlip;
precision mediump float;
precision mediump sampler2D;
out mediump vec4 sk_FragColor;
uniform highp vec4 uinnerRect_S1;
uniform mediump vec2 uradiusPlusHalf_S1;
in highp vec4 vinCircleEdge_S0;
in mediump vec4 vinColor_S0;
void main() {
  highp vec4 sk_FragCoord = vec4(gl_FragCoord.x, u_skRTFlip.x + u_skRTFlip.y * gl_FragCoord.y, gl_FragCoord.z, gl_FragCoord.w);
  highp vec4 circleEdge = vinCircleEdge_S0;
  mediump vec4 outputColor_S0 = vinColor_S0;
  highp float d = length(circleEdge.xy);
  mediump float distanceToOuterEdge = circleEdge.z * (1.0 - d);
  mediump float edgeAlpha = clamp(distanceToOuterEdge, 0.0, 1.0);
  mediump vec4 outputCoverage_S0 = vec4(edgeAlpha);
  highp vec2 _0_dxy0 = uinnerRect_S1.xy - sk_FragCoord.xy;
  highp vec2 _1_dxy1 = sk_FragCoord.xy - uinnerRect_S1.zw;
  highp vec2 _2_dxy = max(max(_0_dxy0, _1_dxy1), 0.0);
  mediump float _3_alpha = clamp(uradiusPlusHalf_S1.x - length(_2_dxy), 0.0, 1.0);
  _3_alpha = 1.0 - _3_alpha;
  mediump vec4 output_S1 = outputCoverage_S0 * _3_alpha;
  sk_FragColor = outputColor_S0 * output_S1;
}`,
    ];
    for (const src of shaders) {
      const s = gl.createShader(gl.FRAGMENT_SHADER);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      const ok = gl.getShaderParameter(s, gl.COMPILE_STATUS);
      gl.deleteShader(s);
      if (!ok) return false;
    }
    return true;
  } catch (e) {
    return false;
  }
}

// DEFAULT: automatic. The graphics card draws the screen (fast) when the start-up check passes; the safety net below
// switches a tab to processor drawing if the driver fails later. (A full disk can stop the browser from saving its graphics
// cache and cause the same errors, so keep some free space.) Remembered for localhost on every port (a cookie ignores the port):
//   open the app once with  ?render=cpu   to always draw with the processor (slower, never blinks)
//   open it once with       ?render=gpu   to always use the graphics card
//   open it once with       ?render=auto  to go back to the automatic choice (the default)
function renderMode() {
  const asked = new URLSearchParams(location.search).get('render');
  if (asked === 'cpu' || asked === 'gpu') {
    document.cookie = 'impacgo_render=' + asked + '; path=/; max-age=31536000';
    return asked;
  }
  if (asked === 'auto') {
    document.cookie = 'impacgo_render=auto; path=/; max-age=31536000';
    return 'auto';
  }
  const saved = document.cookie.match(/(?:^|; )impacgo_render=([^;]*)/);
  return saved && (saved[1] === 'cpu' || saved[1] === 'gpu' || saved[1] === 'auto') ? saved[1] : 'auto';
}
// Safety net: the start-up check can pass and the graphics driver still fail later (it then prints
// "Shader compilation error ... (unknown error)" again and again). The first time that happens, this tab
// switches to drawing with the processor and reloads once. It lasts until the tab is closed, so a
// healthy graphics card is used again next time.
function cpuForThisTab() {
  try { return sessionStorage.getItem('impacgo_cpu') === '1'; } catch (e) { return false; }
}
function watchForShaderErrors() {
  let switched = false;
  const check = (args) => {
    if (switched) return;
    const text = Array.prototype.map.call(args, (a) => String(a)).join(' ');
    if (text.indexOf('Shader compilation error') === -1 && text.indexOf('CONTEXT_LOST') === -1) return;
    switched = true;
    try { sessionStorage.setItem('impacgo_cpu', '1'); } catch (e) {}
    console.info('IMPACGO: graphics driver failed while drawing; switching this tab to processor drawing');
    setTimeout(() => location.reload(), 50);
  };
  for (const level of ['error', 'warn', 'log']) {
    const original = console[level].bind(console);
    console[level] = function () {
      check(arguments);
      return original.apply(null, arguments);
    };
  }
}

const mode = renderMode();
const gpuOk = mode === 'cpu' || cpuForThisTab() ? false : mode === 'gpu' ? true : graphicsCardCanDraw();
// (mode is 'cpu' unless someone asked for 'gpu' or 'auto', so gpuOk is false by default)
if (gpuOk && mode === 'auto') watchForShaderErrors();
console.info('IMPACGO drawing mode: ' + (gpuOk ? 'graphics card' : 'processor') + ' (' + (mode === 'auto' ? 'automatic check' : (/(?:^|; )impacgo_render=/.test(document.cookie) || new URLSearchParams(location.search).has('render')) ? 'chosen by you with ?render=' + mode : 'default') + ')');
// the app reads this to skip costly blurred shadows when the processor does the drawing
document.documentElement.setAttribute('data-impacgo-cpu', String(!gpuOk));
// Drawing with the processor is the chosen, safe mode on this setup, so Flutter's own notice about it is not an error:
// that one message is left out of the console (every other warning still shows).
if (!gpuOk) {
  const warn = console.warn.bind(console);
  console.warn = (...args) => {
    if (args.length && String(args[0]).includes('canvasKitForceCpuOnly')) return;
    warn(...args);
  };
}
// A debug build (plain "flutter run") is many times slower than a release build. If the fast release copy is being served
// on localhost:8099 (double-click serve_release.cmd), a debug page hops to it by itself, however it was started.
// Add ?stay to the address to stay on the debug build (hot reload while developing).
async function hopToFastCopy() {
  try {
    const debugBuild = ((_flutter.buildConfig && _flutter.buildConfig.builds) || []).some((b) => b && b.compileTarget === 'dartdevc');
    const stay = new URLSearchParams(location.search).has('stay');
    if (!debugBuild || stay || location.hostname !== 'localhost' || location.port === '8099') return false;
    const ctl = new AbortController();
    const timer = setTimeout(() => ctl.abort(), 900);
    await fetch('http://localhost:8099/flutter_bootstrap.js', { mode: 'no-cors', cache: 'no-store', signal: ctl.signal });
    clearTimeout(timer);
    console.info('IMPACGO: this is the slow debug build; opening the fast release copy on localhost:8099');
    location.replace('http://localhost:8099/' + location.search);
    return true;
  } catch (e) {
    return false; // nothing on 8099: stay on this page (it shows the "Debug build" note)
  }
}
hopToFastCopy().then((hopped) => {
  if (hopped) return;
  _flutter.loader.load({
    config: { canvasKitForceCpuOnly: !gpuOk },
  });
});
