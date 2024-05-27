// Vencord 2cd8294
// Standalone: true
// Platform: Universal
// Updater disabled: false
"use strict";var Rr=Object.create;var Ie=Object.defineProperty;var Pr=Object.getOwnPropertyDescriptor;var Or=Object.getOwnPropertyNames;var kr=Object.getPrototypeOf,_r=Object.prototype.hasOwnProperty;var m=(e,n)=>()=>(e&&(n=e(e=0)),n);var _e=(e,n)=>{for(var r in n)Ie(e,r,{get:n[r],enumerable:!0})},sn=(e,n,r,i)=>{if(n&&typeof n=="object"||typeof n=="function")for(let t of Or(n))!_r.call(e,t)&&t!==r&&Ie(e,t,{get:()=>n[t],enumerable:!(i=Pr(n,t))||i.enumerable});return e};var Ge=(e,n,r)=>(r=e!=null?Rr(kr(e)):{},sn(n||!e||!e.__esModule?Ie(r,"default",{value:e,enumerable:!0}):r,e)),cn=e=>sn(Ie({},"__esModule",{value:!0}),e);var u=m(()=>{"use strict"});var ce,Ne=m(()=>{u();ce="2cd8294"});var J,Ue=m(()=>{u();J="Vendicated/Vencord"});var un,ln=m(()=>{"use strict";u();Ne();Ue();un=`Vencord/${ce}${J?` (https://github.com/${J})`:""}`});var Ae=m(()=>{"use strict";u()});function q(e,n={}){return new Promise((r,i)=>{fn.default.get(e,n,t=>{let{statusCode:a,statusMessage:o,headers:c}=t;if(a>=400)return void i(`${a}: ${o} - ${e}`);if(a>=300)return void r(q(c.location,n));let s=[];t.on("error",i),t.on("data",l=>s.push(l)),t.once("end",()=>r(Buffer.concat(s)))})})}var fn,Ve=m(()=>{"use strict";u();fn=Ge(require("https"))});function ue(e){return async function(){try{return{ok:!0,value:await e(...arguments)}}catch(n){return{ok:!1,error:n instanceof Error?{...n}:n}}}}var hn,pn=m(()=>{"use strict";u();hn=["patcher.js","preload.js","renderer.js","renderer.css"]});var Vr={};async function dn(e){return q(Gr+e,{headers:{Accept:"application/vnd.github+json","User-Agent":un}})}async function Nr(){if(!await In())return[];let n=await dn(`/compare/${ce}...HEAD`);return JSON.parse(n.toString("utf-8")).commits.map(i=>({hash:i.sha.slice(0,7),author:i.author.login,message:i.commit.message}))}async function In(){let e=await dn("/releases/latest"),n=JSON.parse(e.toString());return n.name.slice(n.name.lastIndexOf(" ")+1)===ce?!1:(n.assets.forEach(({name:i,browser_download_url:t})=>{hn.some(a=>i.startsWith(a))&&ze.push([i,t])}),!0)}async function Ur(){return await Promise.all(ze.map(async([e,n])=>(0,mn.writeFile)((0,vn.join)(__dirname,e),await q(n)))),ze=[],!0}var le,mn,vn,Gr,ze,An=m(()=>{"use strict";u();ln();Ae();le=require("electron"),mn=require("fs/promises"),vn=require("path");Ne();Ue();Ve();pn();Gr=`https://api.github.com/repos/${J}`,ze=[];le.ipcMain.handle("VencordGetRepo",ue(()=>`https://github.com/${J}`));le.ipcMain.handle("VencordGetUpdates",ue(Nr));le.ipcMain.handle("VencordUpdate",ue(In));le.ipcMain.handle("VencordBuild",ue(Ur))});var Cn=m(()=>{"use strict";u();Promise.resolve().then(()=>An())});var wn={};var yn,Sn=m(()=>{"use strict";u();yn=require("electron");Ce();yn.app.on("browser-window-created",(e,n)=>{n.webContents.on("frame-created",(r,{frame:i})=>{i.once("dom-ready",()=>{if(i.url.startsWith("https://open.spotify.com/embed/")){let t=Q().plugins?.FixSpotifyEmbeds;if(!t?.enabled)return;i.executeJavaScript(`
                    const original = Audio.prototype.play;
                    Audio.prototype.play = function() {
                        this.volume = ${t.volume/100||.1};
                        return original.apply(this, arguments);
                    }
                `)}})})})});var Me={};_e(Me,{resolveRedirect:()=>Mr});function xn(e){return new Promise((n,r)=>{let i=(0,Tn.request)(new URL(e),{method:"HEAD"},t=>{n(t.headers.location?xn(t.headers.location):e)});i.on("error",r),i.end()})}async function Mr(e,n){return zr.test(n)?xn(n):n}var Tn,zr,En=m(()=>{"use strict";u();Tn=require("https"),zr=/^https:\/\/(spotify\.link|s\.team)\/.+$/});var Le={};_e(Le,{readRecording:()=>Lr});async function Lr(e,n){n=(0,fe.normalize)(n);let r=(0,fe.basename)(n),i=(0,fe.normalize)(Dn.app.getPath("userData")+"/");if(console.log(r,i,n),r!=="recording.ogg"||!n.startsWith(i))return null;try{let t=await(0,Rn.readFile)(n);return new Uint8Array(t.buffer)}catch{return null}}var Dn,Rn,fe,Pn=m(()=>{"use strict";u();Dn=require("electron"),Rn=require("fs/promises"),fe=require("path")});var be={};_e(be,{sendToOverlay:()=>br});function br(e,n){n.icon=Buffer.from(n.icon).toString("base64");let r=JSON.stringify(n);On??=(0,kn.createSocket)("udp4"),On.send(r,42069,"127.0.0.1")}var kn,On,_n=m(()=>{"use strict";u();kn=require("dgram")});var Gn,Nn=m(()=>{u();Sn();En();Pn();_n();Gn={FixSpotifyEmbeds:wn,OpenInApp:Me,VoiceMessages:Le,XsOverlay:be}});var We,Un,Vn=m(()=>{"use strict";u();Ae();We=require("electron");Nn();Un={};for(let[e,n]of Object.entries(Gn)){let r=Object.entries(n);if(!r.length)continue;let i=Un[e]={};for(let[t,a]of r){let o=`VencordPluginNative_${e}_${t}`;We.ipcMain.handle(o,a),i[t]=o}}We.ipcMain.on("VencordGetPluginIpcMethodMap",e=>{e.returnValue=Un})});function je(e,n=300){let r;return function(...i){clearTimeout(r),r=setTimeout(()=>{e(...i)},n)}}var zn=m(()=>{"use strict";u()});var he,Mn=m(()=>{"use strict";u();he=class{constructor(n=1/0){this.maxSize=n}queue=[];promise;next(){let n=this.queue.shift();n?this.promise=Promise.resolve().then(n).finally(()=>this.next()):this.promise=void 0}run(){this.promise||this.next()}push(n){this.size>=this.maxSize&&this.queue.shift(),this.queue.push(n),this.run()}unshift(n){this.size>=this.maxSize&&this.queue.pop(),this.queue.unshift(n),this.run()}get size(){return this.queue.length}}});var Ln,bn=m(()=>{u();Ln="PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KICAgIDxoZWFkPgogICAgICAgIDxtZXRhIGNoYXJzZXQ9InV0Zi04IiAvPgogICAgICAgIDx0aXRsZT5WZW5jb3JkIFF1aWNrQ1NTIEVkaXRvcjwvdGl0bGU+CiAgICAgICAgPGxpbmsKICAgICAgICAgICAgcmVsPSJzdHlsZXNoZWV0IgogICAgICAgICAgICBocmVmPSJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuNDAuMC9taW4vdnMvZWRpdG9yL2VkaXRvci5tYWluLm1pbi5jc3MiCiAgICAgICAgICAgIGludGVncml0eT0ic2hhNTEyLU1Pb1EwMmg4MGhrbGNjZkxyWEZZa0N6RytXVmpPUmZsT3A5WnA4ZGx0aWFSUCszNUxZbk80TEtPa2xSNjRvTUdmR2dKRExPOFdKcGtNMW81Z1pYWVpRPT0iCiAgICAgICAgICAgIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiCiAgICAgICAgICAgIHJlZmVycmVycG9saWN5PSJuby1yZWZlcnJlciIKICAgICAgICAvPgogICAgICAgIDxzdHlsZT4KICAgICAgICAgICAgaHRtbCwKICAgICAgICAgICAgYm9keSwKICAgICAgICAgICAgI2NvbnRhaW5lciB7CiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgICAgICAgICAgICBsZWZ0OiAwOwogICAgICAgICAgICAgICAgdG9wOiAwOwogICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7CiAgICAgICAgICAgICAgICBtYXJnaW46IDA7CiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwOwogICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsKICAgICAgICAgICAgfQogICAgICAgIDwvc3R5bGU+CiAgICA8L2hlYWQ+CgogICAgPGJvZHk+CiAgICAgICAgPGRpdiBpZD0iY29udGFpbmVyIj48L2Rpdj4KICAgICAgICA8c2NyaXB0CiAgICAgICAgICAgIHNyYz0iaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbW9uYWNvLWVkaXRvci8wLjQwLjAvbWluL3ZzL2xvYWRlci5taW4uanMiCiAgICAgICAgICAgIGludGVncml0eT0ic2hhNTEyLVF6TXBYZUNQY2lBSFA0d2JZbFYyUFlnclFjYUVrRFFVanprUFU0eG5qeVZTRDlUMzYvdWRhbXh0TkJxYjRxSzQvYk1RTVBaOGF5ckJlOWhyR2RCRmpRPT0iCiAgICAgICAgICAgIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiCiAgICAgICAgICAgIHJlZmVycmVycG9saWN5PSJuby1yZWZlcnJlciIKICAgICAgICA+PC9zY3JpcHQ+CgogICAgICAgIDxzY3JpcHQ+CiAgICAgICAgICAgIHJlcXVpcmUuY29uZmlnKHsKICAgICAgICAgICAgICAgIHBhdGhzOiB7CiAgICAgICAgICAgICAgICAgICAgdnM6ICJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuNDAuMC9taW4vdnMiLAogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgfSk7CgogICAgICAgICAgICByZXF1aXJlKFsidnMvZWRpdG9yL2VkaXRvci5tYWluIl0sICgpID0+IHsKICAgICAgICAgICAgICAgIGdldEN1cnJlbnRDc3MoKS50aGVuKChjc3MpID0+IHsKICAgICAgICAgICAgICAgICAgICB2YXIgZWRpdG9yID0gbW9uYWNvLmVkaXRvci5jcmVhdGUoCiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJjb250YWluZXIiKSwKICAgICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNzcywKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiAiY3NzIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lOiBnZXRUaGVtZSgpLAogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgICAgICBlZGl0b3Iub25EaWRDaGFuZ2VNb2RlbENvbnRlbnQoKCkgPT4KICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3NzKGVkaXRvci5nZXRWYWx1ZSgpKQogICAgICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoInJlc2l6ZSIsICgpID0+IHsKICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBtb25hY28gcmUtbGF5b3V0CiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRvci5sYXlvdXQoKTsKICAgICAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICB9KTsKICAgICAgICA8L3NjcmlwdD4KICAgIDwvYm9keT4KPC9odG1sPgo="});function Fe(e,n={}){return{fileName:e,name:n.name??e.replace(/\.css$/i,""),author:n.author??"Unknown Author",description:n.description??"A Discord Theme.",version:n.version,license:n.license,source:n.source,website:n.website,invite:n.invite}}function Wn(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function jn(e,n){if(!e)return Fe(n);let r=e.split("/**",2)?.[1]?.split("*/",1)?.[0];if(!r)return Fe(n);let i={},t="",a="";for(let o of r.split(Wr))if(o.length!==0)if(o.charAt(0)==="@"&&o.charAt(1)!==" "){i[t]=a.trim();let c=o.indexOf(" ");t=o.substring(1,c),a=o.substring(c+1)}else a+=" "+o.replace("\\n",`
`).replace(jr,"@");return i[t]=a.trim(),delete i[""],Fe(n,i)}var Wr,jr,Fn=m(()=>{"use strict";u();Wr=/[^\S\r\n]*?\r?(?:\r\n|\n)[^\S\r\n]*?\*[^\S\r\n]?/,jr=/^\\@/});var Zn,Z,ye,pe,M,$,Ze,Bn,we,ge=m(()=>{"use strict";u();Zn=require("electron"),Z=require("path"),ye=process.env.VENCORD_USER_DATA_DIR??(process.env.DISCORD_USER_DATA_DIR?(0,Z.join)(process.env.DISCORD_USER_DATA_DIR,"..","VencordData"):(0,Z.join)(Zn.app.getPath("userData"),"..","Vencord")),pe=(0,Z.join)(ye,"settings"),M=(0,Z.join)(ye,"themes"),$=(0,Z.join)(pe,"quickCss.css"),Ze=(0,Z.join)(pe,"settings.json"),Bn=["https:","http:","steam:","spotify:","com.epicgames.launcher:"],we=process.argv.includes("--vanilla")});function Hn(e){e.webContents.setWindowOpenHandler(({url:n})=>{switch(n){case"about:blank":case"https://discord.com/popout":case"https://ptb.discord.com/popout":case"https://canary.discord.com/popout":return{action:"allow"}}try{var{protocol:r}=new URL(n)}catch{return{action:"deny"}}switch(r){case"http:":case"https:":case"mailto:":case"steam:":case"spotify:":Kn.shell.openExternal(n)}return{action:"deny"}})}var Kn,Yn=m(()=>{"use strict";u();Kn=require("electron")});function Be(e,n){let r=(0,ee.normalize)(e),i=(0,ee.join)(e,n),t=(0,ee.normalize)(i);return t.startsWith(r)?t:null}function Xn(){return(0,P.readFile)($,"utf-8").catch(()=>"")}async function Fr(){let e=await(0,P.readdir)(M).catch(()=>[]),n=[];for(let r of e){if(!r.endsWith(".css"))continue;let i=await Jn(r).then(Wn).catch(()=>null);i!=null&&n.push(jn(i,r))}return n}function Jn(e){e=e.replace(/\?v=\d+$/,"");let n=Be(M,e);return n?(0,P.readFile)(n,"utf-8"):Promise.reject(`Unsafe path ${e}`)}function qn(){try{return(0,L.readFileSync)(Ze,"utf-8")}catch{return"{}"}}function Q(){try{return JSON.parse(qn())}catch{return{}}}function Qn(e){(0,P.open)($,"a+").then(n=>{n.close(),(0,L.watch)($,{persistent:!1},je(async()=>{e.webContents.postMessage("VencordQuickCssUpdate",await Xn())},50))}),(0,L.watch)(M,{persistent:!1},je(()=>{e.webContents.postMessage("VencordThemeUpdate",void 0)}))}var v,L,P,ee,Zr,Br,Ce=m(()=>{"use strict";u();Cn();Vn();zn();Ae();Mn();v=require("electron"),L=require("fs"),P=require("fs/promises"),ee=require("path");bn();Fn();ge();Yn();(0,L.mkdirSync)(pe,{recursive:!0});(0,L.mkdirSync)(M,{recursive:!0});v.ipcMain.handle("VencordOpenQuickCss",()=>v.shell.openPath($));v.ipcMain.handle("VencordOpenExternal",(e,n)=>{try{var{protocol:r}=new URL(n)}catch{throw"Malformed URL"}if(!Bn.includes(r))throw"Disallowed protocol.";v.shell.openExternal(n)});Zr=new he,Br=new he;v.ipcMain.handle("VencordGetQuickCss",()=>Xn());v.ipcMain.handle("VencordSetQuickCss",(e,n)=>Zr.push(()=>(0,P.writeFile)($,n)));v.ipcMain.handle("VencordGetThemesDir",()=>M);v.ipcMain.handle("VencordGetThemesList",()=>Fr());v.ipcMain.handle("VencordGetThemeData",(e,n)=>Jn(n));v.ipcMain.handle("VencordGetThemeSystemValues",()=>({"os-accent-color":`#${v.systemPreferences.getAccentColor?.()||""}`}));v.ipcMain.handle("VencordGetSettingsDir",()=>pe);v.ipcMain.on("VencordGetSettings",e=>e.returnValue=qn());v.ipcMain.handle("VencordSetSettings",(e,n)=>{Br.push(()=>(0,P.writeFile)(Ze,n))});v.ipcMain.handle("VencordOpenMonacoEditor",async()=>{let e=new v.BrowserWindow({title:"Vencord QuickCSS Editor",autoHideMenuBar:!0,darkTheme:!0,webPreferences:{preload:(0,ee.join)(__dirname,"preload.js"),contextIsolation:!0,nodeIntegration:!1,sandbox:!1}});Hn(e),await e.loadURL(`data:text/html;base64,${Ln}`)})});function Cr(e,n,r){let i=n;if(n in e)return void r(e[i]);Object.defineProperty(e,n,{set(t){delete e[i],e[i]=t,r(t)},configurable:!0,enumerable:!1})}var yr=m(()=>{"use strict";u()});var pt={};function ft(e,n){let r=e.slice(4).split(".").map(Number),i=n.slice(4).split(".").map(Number);for(let t=0;t<i.length;t++){if(r[t]>i[t])return!0;if(r[t]<i[t])return!1}return!1}function ht(){if(!process.env.DISABLE_UPDATER_AUTO_PATCHING)try{let e=(0,x.dirname)(process.execPath),n=(0,x.basename)(e),r=(0,x.join)(e,".."),i=(0,w.readdirSync)(r).reduce((c,s)=>s.startsWith("app-")&&ft(s,c)?s:c,n);if(i===n)return;let t=(0,x.join)(r,i,"resources"),a=(0,x.join)(t,"app.asar"),o=(0,x.join)(t,"_app.asar");if(!(0,w.existsSync)(a)||(0,w.statSync)(a).isDirectory())return;console.info("[Vencord] Detected Host Update. Repatching..."),(0,w.renameSync)(a,o),(0,w.mkdirSync)(a),(0,w.writeFileSync)((0,x.join)(a,"package.json"),JSON.stringify({name:"discord",main:"index.js"})),(0,w.writeFileSync)((0,x.join)(a,"index.js"),`require(${JSON.stringify((0,x.join)(__dirname,"patcher.js"))});`)}catch(e){console.error("[Vencord] Failed to repatch latest host update",e)}}var wr,w,x,Sr=m(()=>{"use strict";u();wr=require("electron"),w=require("original-fs"),x=require("path");wr.app.on("before-quit",ht)});var dt={};var R,W,gt,mt,$e,vt,Tr=m(()=>{"use strict";u();yr();R=Ge(require("electron")),W=require("path");Ce();ge();console.log("[Vencord] Starting up...");gt=require.main.filename,mt=require.main.path.endsWith("app.asar")?"_app.asar":"app.asar",$e=(0,W.join)((0,W.dirname)(gt),"..",mt),vt=require((0,W.join)($e,"package.json"));require.main.filename=(0,W.join)($e,vt.main);R.app.setAppPath($e);if(we)console.log("[Vencord] Running in vanilla mode. Not loading Vencord");else{let e=Q();if(process.platform==="win32"&&(Sr(),e.winCtrlQ)){let i=R.Menu.buildFromTemplate;R.Menu.buildFromTemplate=function(t){if(t[0]?.label==="&File"){let{submenu:a}=t[0];Array.isArray(a)&&a.push({label:"Quit (Hidden)",visible:!1,acceleratorWorksWhenHidden:!0,accelerator:"Control+Q",click:()=>R.app.quit()})}return i.call(this,t)}}class n extends R.default.BrowserWindow{constructor(t){if(t?.webPreferences?.preload&&t.title){let a=t.webPreferences.preload;t.webPreferences.preload=(0,W.join)(__dirname,"preload.js"),t.webPreferences.sandbox=!1,e.frameless?t.frame=!1:process.platform==="win32"&&e.winNativeTitleBar&&delete t.frame,e.transparentUNSAFE_USE_AT_OWN_RISK&&(t.transparent=!0,t.backgroundColor="#00000000"),(process.platform==="darwin"||e.macosVibrancyStyle||e.macosTranslucency)&&(t.backgroundColor="#00000000",e.macosTranslucency?t.vibrancy="sidebar":e.macosVibrancyStyle&&(t.vibrancy=e.macosVibrancyStyle)),process.env.DISCORD_PRELOAD=a,super(t),Qn(this)}else super(t)}}Object.assign(n,R.default.BrowserWindow),Object.defineProperty(n,"name",{value:"BrowserWindow",configurable:!0});let r=require.resolve("electron");delete require.cache[r].exports,require.cache[r].exports={...R.default,BrowserWindow:n},Cr(global,"appSettings",i=>{i.set("DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING",!0),e.disableMinSize?(i.set("MIN_WIDTH",0),i.set("MIN_HEIGHT",0)):(i.set("MIN_WIDTH",940),i.set("MIN_HEIGHT",500))}),process.env.DATA_DIR=(0,W.join)(R.app.getPath("userData"),"..","Vencord")}console.log("[Vencord] Loading original Discord app.asar");require(require.main.filename)});u();var B=require("electron"),xr=require("path");Ce();ge();u();var dr=require("electron");u();var nr=require("module"),Kr=(0,nr.createRequire)("/"),Te,Hr=";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global";try{Te=Kr("worker_threads").Worker}catch{}var Yr=Te?function(e,n,r,i,t){var a=!1,o=new Te(e+Hr,{eval:!0}).on("error",function(c){return t(c,null)}).on("message",function(c){return t(null,c)}).on("exit",function(c){c&&!a&&t(new Error("exited with code "+c),null)});return o.postMessage(r,i),o.terminate=function(){return a=!0,Te.prototype.terminate.call(o)},o}:function(e,n,r,i,t){setImmediate(function(){return t(new Error("async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)"),null)});var a=function(){};return{terminate:a,postMessage:a}},C=Uint8Array,b=Uint16Array,Ye=Uint32Array,Xe=new C([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Je=new C([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),rr=new C([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),tr=function(e,n){for(var r=new b(31),i=0;i<31;++i)r[i]=n+=1<<e[i-1];for(var t=new Ye(r[30]),i=1;i<30;++i)for(var a=r[i];a<r[i+1];++a)t[a]=a-r[i]<<5|i;return[r,t]},ir=tr(Xe,2),qe=ir[0],Xr=ir[1];qe[28]=258,Xr[258]=28;var ar=tr(Je,0),or=ar[0],Si=ar[1],De=new b(32768);for(f=0;f<32768;++f)G=(f&43690)>>>1|(f&21845)<<1,G=(G&52428)>>>2|(G&13107)<<2,G=(G&61680)>>>4|(G&3855)<<4,De[f]=((G&65280)>>>8|(G&255)<<8)>>>1;var G,f,ne=function(e,n,r){for(var i=e.length,t=0,a=new b(n);t<i;++t)e[t]&&++a[e[t]-1];var o=new b(n);for(t=0;t<n;++t)o[t]=o[t-1]+a[t-1]<<1;var c;if(r){c=new b(1<<n);var s=15-n;for(t=0;t<i;++t)if(e[t])for(var l=t<<4|e[t],h=n-e[t],d=o[e[t]-1]++<<h,E=d|(1<<h)-1;d<=E;++d)c[De[d]>>>s]=l}else for(c=new b(i),t=0;t<i;++t)e[t]&&(c[t]=De[o[e[t]-1]++]>>>15-e[t]);return c},me=new C(288);for(f=0;f<144;++f)me[f]=8;var f;for(f=144;f<256;++f)me[f]=9;var f;for(f=256;f<280;++f)me[f]=7;var f;for(f=280;f<288;++f)me[f]=8;var f,sr=new C(32);for(f=0;f<32;++f)sr[f]=5;var f;var cr=ne(me,9,1);var ur=ne(sr,5,1),xe=function(e){for(var n=e[0],r=1;r<e.length;++r)e[r]>n&&(n=e[r]);return n},T=function(e,n,r){var i=n/8|0;return(e[i]|e[i+1]<<8)>>(n&7)&r},Ee=function(e,n){var r=n/8|0;return(e[r]|e[r+1]<<8|e[r+2]<<16)>>(n&7)},lr=function(e){return(e+7)/8|0},Re=function(e,n,r){(n==null||n<0)&&(n=0),(r==null||r>e.length)&&(r=e.length);var i=new(e.BYTES_PER_ELEMENT==2?b:e.BYTES_PER_ELEMENT==4?Ye:C)(r-n);return i.set(e.subarray(n,r)),i};var fr=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],y=function(e,n,r){var i=new Error(n||fr[e]);if(i.code=e,Error.captureStackTrace&&Error.captureStackTrace(i,y),!r)throw i;return i},hr=function(e,n,r){var i=e.length;if(!i||r&&r.f&&!r.l)return n||new C(0);var t=!n||r,a=!r||r.i;r||(r={}),n||(n=new C(i*3));var o=function(tn){var an=n.length;if(tn>an){var on=new C(Math.max(an*2,tn));on.set(n),n=on}},c=r.f||0,s=r.p||0,l=r.b||0,h=r.l,d=r.d,E=r.m,N=r.n,te=i*8;do{if(!h){c=T(e,s,1);var j=T(e,s+1,3);if(s+=3,j)if(j==1)h=cr,d=ur,E=9,N=5;else if(j==2){var V=T(e,s,31)+257,K=T(e,s+10,15)+4,ie=V+T(e,s+5,31)+1;s+=14;for(var F=new C(ie),ae=new C(19),A=0;A<K;++A)ae[rr[A]]=T(e,s+A*3,7);s+=K*3;for(var _=xe(ae),ve=(1<<_)-1,H=ne(ae,_,1),A=0;A<ie;){var oe=H[T(e,s,ve)];s+=oe&15;var I=oe>>>4;if(I<16)F[A++]=I;else{var Y=0,de=0;for(I==16?(de=3+T(e,s,3),s+=2,Y=F[A-1]):I==17?(de=3+T(e,s,7),s+=3):I==18&&(de=11+T(e,s,127),s+=7);de--;)F[A++]=Y}}var en=F.subarray(0,V),z=F.subarray(V);E=xe(en),N=xe(z),h=ne(en,E,1),d=ne(z,N,1)}else y(1);else{var I=lr(s)+4,S=e[I-4]|e[I-3]<<8,U=I+S;if(U>i){a&&y(0);break}t&&o(l+S),n.set(e.subarray(I,U),l),r.b=l+=S,r.p=s=U*8,r.f=c;continue}if(s>te){a&&y(0);break}}t&&o(l+131072);for(var Er=(1<<E)-1,Dr=(1<<N)-1,Pe=s;;Pe=s){var Y=h[Ee(e,s)&Er],X=Y>>>4;if(s+=Y&15,s>te){a&&y(0);break}if(Y||y(2),X<256)n[l++]=X;else if(X==256){Pe=s,h=null;break}else{var nn=X-254;if(X>264){var A=X-257,se=Xe[A];nn=T(e,s,(1<<se)-1)+qe[A],s+=se}var Oe=d[Ee(e,s)&Dr],ke=Oe>>>4;Oe||y(3),s+=Oe&15;var z=or[ke];if(ke>3){var se=Je[ke];z+=Ee(e,s)&(1<<se)-1,s+=se}if(s>te){a&&y(0);break}t&&o(l+131072);for(var rn=l+nn;l<rn;l+=4)n[l]=n[l-z],n[l+1]=n[l+1-z],n[l+2]=n[l+2-z],n[l+3]=n[l+3-z];l=rn}}r.l=h,r.p=Pe,r.b=l,r.f=c,h&&(c=1,r.m=E,r.d=d,r.n=N)}while(!c);return l==n.length?n:Re(n,0,l)};var Jr=new C(0);var qr=function(e,n){var r={};for(var i in e)r[i]=e[i];for(var i in n)r[i]=n[i];return r},$n=function(e,n,r){for(var i=e(),t=e.toString(),a=t.slice(t.indexOf("[")+1,t.lastIndexOf("]")).replace(/\s+/g,"").split(","),o=0;o<i.length;++o){var c=i[o],s=a[o];if(typeof c=="function"){n+=";"+s+"=";var l=c.toString();if(c.prototype)if(l.indexOf("[native code]")!=-1){var h=l.indexOf(" ",8)+1;n+=l.slice(h,l.indexOf("(",h))}else{n+=l;for(var d in c.prototype)n+=";"+s+".prototype."+d+"="+c.prototype[d].toString()}else n+=l}else r[s]=c}return[n,r]},Se=[],Qr=function(e){var n=[];for(var r in e)e[r].buffer&&n.push((e[r]=new e[r].constructor(e[r])).buffer);return n},$r=function(e,n,r,i){var t;if(!Se[r]){for(var a="",o={},c=e.length-1,s=0;s<c;++s)t=$n(e[s],a,o),a=t[0],o=t[1];Se[r]=$n(e[c],a,o)}var l=qr({},Se[r][1]);return Yr(Se[r][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+n.toString()+"}",r,l,Qr(l),i)},et=function(){return[C,b,Ye,Xe,Je,rr,qe,or,cr,ur,De,fr,ne,xe,T,Ee,lr,Re,y,hr,Qe,pr,gr]};var pr=function(e){return postMessage(e,[e.buffer])},gr=function(e){return e&&e.size&&new C(e.size)},nt=function(e,n,r,i,t,a){var o=$r(r,i,t,function(c,s){o.terminate(),a(c,s)});return o.postMessage([e,n],n.consume?[e.buffer]:[]),function(){o.terminate()}};var O=function(e,n){return e[n]|e[n+1]<<8},D=function(e,n){return(e[n]|e[n+1]<<8|e[n+2]<<16|e[n+3]<<24)>>>0},Ke=function(e,n){return D(e,n)+D(e,n+4)*4294967296};function rt(e,n,r){return r||(r=n,n={}),typeof r!="function"&&y(7),nt(e,n,[et],function(i){return pr(Qe(i.data[0],gr(i.data[1])))},1,r)}function Qe(e,n){return hr(e,n)}var He=typeof TextDecoder<"u"&&new TextDecoder,tt=0;try{He.decode(Jr,{stream:!0}),tt=1}catch{}var it=function(e){for(var n="",r=0;;){var i=e[r++],t=(i>127)+(i>223)+(i>239);if(r+t>e.length)return[n,Re(e,r-1)];t?t==3?(i=((i&15)<<18|(e[r++]&63)<<12|(e[r++]&63)<<6|e[r++]&63)-65536,n+=String.fromCharCode(55296|i>>10,56320|i&1023)):t&1?n+=String.fromCharCode((i&31)<<6|e[r++]&63):n+=String.fromCharCode((i&15)<<12|(e[r++]&63)<<6|e[r++]&63):n+=String.fromCharCode(i)}};function at(e,n){if(n){for(var r="",i=0;i<e.length;i+=16384)r+=String.fromCharCode.apply(null,e.subarray(i,i+16384));return r}else{if(He)return He.decode(e);var t=it(e),a=t[0],o=t[1];return o.length&&y(8),a}}var ot=function(e,n){return n+30+O(e,n+26)+O(e,n+28)},st=function(e,n,r){var i=O(e,n+28),t=at(e.subarray(n+46,n+46+i),!(O(e,n+8)&2048)),a=n+46+i,o=D(e,n+20),c=r&&o==4294967295?ct(e,a):[o,D(e,n+24),D(e,n+42)],s=c[0],l=c[1],h=c[2];return[O(e,n+10),s,l,t,a+O(e,n+30)+O(e,n+32),h]},ct=function(e,n){for(;O(e,n)!=1;n+=4+O(e,n+2));return[Ke(e,n+12),Ke(e,n+4),Ke(e,n+20)]};var er=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(e){e()};function mr(e,n,r){r||(r=n,n={}),typeof r!="function"&&y(7);var i=[],t=function(){for(var I=0;I<i.length;++I)i[I]()},a={},o=function(I,S){er(function(){r(I,S)})};er(function(){o=r});for(var c=e.length-22;D(e,c)!=101010256;--c)if(!c||e.length-c>65558)return o(y(13,0,1),null),t;var s=O(e,c+8);if(s){var l=s,h=D(e,c+16),d=h==4294967295||l==65535;if(d){var E=D(e,c-12);d=D(e,E)==101075792,d&&(l=s=D(e,E+32),h=D(e,E+48))}for(var N=n&&n.filter,te=function(I){var S=st(e,h,d),U=S[0],V=S[1],K=S[2],ie=S[3],F=S[4],ae=S[5],A=ot(e,ae);h=F;var _=function(H,oe){H?(t(),o(H,null)):(oe&&(a[ie]=oe),--s||o(null,a))};if(!N||N({name:ie,size:V,originalSize:K,compression:U}))if(!U)_(null,Re(e,A,A+V));else if(U==8){var ve=e.subarray(A,A+V);if(V<32e4)try{_(null,Qe(ve,new C(K)))}catch(H){_(H,null)}else i.push(rt(ve,{size:K},_))}else _(y(14,"unknown compression type "+U,1),null);else _(null,null)},j=0;j<l;++j)te(j)}else o(null,{});return t}var Ir=require("fs"),k=require("fs/promises"),re=require("path");ge();u();function vr(e){function n(o,c,s,l){let h=0;return h+=o<<0,h+=c<<8,h+=s<<16,h+=l<<24>>>0,h}if(e[0]===80&&e[1]===75&&e[2]===3&&e[3]===4)return e;if(e[0]!==67||e[1]!==114||e[2]!==50||e[3]!==52)throw new Error("Invalid header: Does not start with Cr24");let r=e[4]===3,i=e[4]===2;if(!i&&!r||e[5]||e[6]||e[7])throw new Error("Unexpected crx format version number.");if(i){let o=n(e[8],e[9],e[10],e[11]),c=n(e[12],e[13],e[14],e[15]),s=16+o+c;return e.subarray(s,e.length)}let a=12+n(e[8],e[9],e[10],e[11]);return e.subarray(a,e.length)}Ve();var ut=(0,re.join)(ye,"ExtensionCache");async function lt(e,n){return await(0,k.mkdir)(n,{recursive:!0}),new Promise((r,i)=>{mr(e,(t,a)=>{if(t)return void i(t);Promise.all(Object.keys(a).map(async o=>{if(o.startsWith("_metadata/"))return;if(o.endsWith("/"))return void(0,k.mkdir)((0,re.join)(n,o),{recursive:!0});let c=o.split("/"),s=c.pop(),l=c.join("/"),h=(0,re.join)(n,l);l&&await(0,k.mkdir)(h,{recursive:!0}),await(0,k.writeFile)((0,re.join)(h,s),a[o])})).then(()=>r()).catch(o=>{(0,k.rm)(n,{recursive:!0,force:!0}),i(o)})})})}async function Ar(e){let n=(0,re.join)(ut,`${e}`);try{await(0,k.access)(n,Ir.constants.F_OK)}catch{let i=e==="fmkadmapgofadopljbjfkapdkoienihi"?"https://raw.githubusercontent.com/Vendicated/random-files/f6f550e4c58ac5f2012095a130406c2ab25b984d/fmkadmapgofadopljbjfkapdkoienihi.zip":`https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${e}%26uc&prodversion=32`,t=await q(i,{headers:{"User-Agent":"Vencord (https://github.com/Vendicated/Vencord)"}});await lt(vr(t),n).catch(console.error)}dr.session.defaultSession.loadExtension(n)}we||B.app.whenReady().then(()=>{B.protocol.registerFileProtocol("vencord",({url:t},a)=>{let o=t.slice(10);if(o.endsWith("/")&&(o=o.slice(0,-1)),o.startsWith("/themes/")){let c=o.slice(8),s=Be(M,c);if(!s){a({statusCode:403});return}a(s.replace(/\?v=\d+$/,""));return}switch(o){case"renderer.js.map":case"vencordDesktopRenderer.js.map":case"preload.js.map":case"vencordDesktopPreload.js.map":case"patcher.js.map":case"vencordDesktopMain.js.map":a((0,xr.join)(__dirname,o));break;default:a({statusCode:403})}});try{Q().enableReactDevtools&&Ar("fmkadmapgofadopljbjfkapdkoienihi").then(()=>console.info("[Vencord] Installed React Developer Tools")).catch(t=>console.error("[Vencord] Failed to install React Developer Tools",t))}catch{}let e=(t,a)=>Object.keys(t).find(o=>o.toLowerCase()===a),n=t=>{let a={};return t.split(";").forEach(o=>{let[c,...s]=o.trim().split(/\s+/g);c&&!Object.prototype.hasOwnProperty.call(a,c)&&(a[c]=s)}),a},r=t=>Object.entries(t).filter(([,a])=>a?.length).map(a=>a.flat().join(" ")).join("; "),i=t=>{let a=e(t,"content-security-policy");if(a){let o=n(t[a][0]);for(let c of["style-src","connect-src","img-src","font-src","media-src","worker-src"])o[c]??=[],o[c].push("*","blob:","data:","vencord:","'unsafe-inline'");o["script-src"]??=[],o["script-src"].push("'unsafe-eval'","https://unpkg.com","https://cdnjs.cloudflare.com"),t[a]=[r(o)]}};B.session.defaultSession.webRequest.onHeadersReceived(({responseHeaders:t,resourceType:a},o)=>{if(t&&(a==="mainFrame"&&i(t),a==="stylesheet")){let c=e(t,"content-type");c&&(t[c]=["text/css"])}o({cancel:!1,responseHeaders:t})}),B.session.defaultSession.webRequest.onHeadersReceived=()=>{}});Tr();
//# sourceURL=VencordPatcher
//# sourceMappingURL=vencord://patcher.js.map
/*! For license information please see patcher.js.LEGAL.txt */
