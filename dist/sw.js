if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const u=s=>i(s,r),o={module:{uri:r},exports:t,require:u};e[r]=Promise.all(l.map((s=>o[s]||u(s)))).then((s=>(n(...s),t)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/focus-visible-9c13edeb.js",revision:null},{url:"assets/focus-visible-legacy-668c6ce8.js",revision:null},{url:"assets/index-6825a9b0.js",revision:null},{url:"assets/index-e8e413ff.css",revision:null},{url:"assets/index-legacy-f668c3a3.js",revision:null},{url:"assets/index9-e03b048c.js",revision:null},{url:"assets/index9-legacy-1c7d771d.js",revision:null},{url:"assets/input-shims-0880ff37.js",revision:null},{url:"assets/input-shims-legacy-6a585202.js",revision:null},{url:"assets/ios.transition-9c72eceb.js",revision:null},{url:"assets/ios.transition-legacy-30b71da4.js",revision:null},{url:"assets/md.transition-159d633f.js",revision:null},{url:"assets/md.transition-legacy-7332f003.js",revision:null},{url:"assets/polyfills-legacy-f4acc593.js",revision:null},{url:"assets/status-tap-f13011b5.js",revision:null},{url:"assets/status-tap-legacy-0b301885.js",revision:null},{url:"assets/swipe-back-be38cfe4.js",revision:null},{url:"assets/swipe-back-legacy-9b660b12.js",revision:null},{url:"index.html",revision:"7f1a7b56ba20140c4827c8cb6837844a"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"85445b1f0481bec89c8c6f9052df8980"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
