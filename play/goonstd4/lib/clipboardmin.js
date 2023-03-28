!function(a,b){"undefined"!=typeof module?module.exports=b():"function"==typeof define&&"object"==typeof define.amd?define(b):this[a]=b()}("clipboard",function(){if("undefined"==typeof document||!document.addEventListener)return null;var a={};return a.copy=function(){function d(){a=!1,b=null,c&&window.getSelection().removeAllRanges(),c=!1}function e(){var a=document.getSelection();if(!document.queryCommandEnabled("copy")&&a.isCollapsed){var b=document.createRange();b.selectNodeContents(document.body),a.removeAllRanges(),a.addRange(b),c=!0}}var a=!1,b=null,c=!1;return document.addEventListener("copy",function(c){if(a){for(var d in b)c.clipboardData.setData(d,b[d]);c.preventDefault()}}),function(c){return new Promise(function(f,g){function h(a){try{if(document.execCommand("copy"))d(),f();else{if(a)throw d(),new Error("Unable to copy. Perhaps it's not available in your browser?");e(),h(!0)}}catch(a){d(),g(a)}}a=!0,b="string"==typeof c?{"text/plain":c}:c instanceof Node?{"text/html":(new XMLSerializer).serializeToString(c)}:c,h(!1)})}}(),a.paste=function(){var b,c,a=!1;return document.addEventListener("paste",function(d){if(a){a=!1,d.preventDefault();var e=b;b=null,e(d.clipboardData.getData(c))}}),function(d){return new Promise(function(e,f){a=!0,b=e,c=d||"text/plain";try{document.execCommand("paste")||(a=!1,f(new Error("Unable to paste. Pasting only works in Internet Explorer at the moment.")))}catch(b){a=!1,f(new Error(b))}})}}(),"undefined"==typeof ClipboardEvent&&"undefined"!=typeof window.clipboardData&&"undefined"!=typeof window.clipboardData.setData&&(!function(a){function b(a,b){return function(){a.apply(b,arguments)}}function c(a){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof a)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],i(a,b(e,this),b(f,this))}function d(a){var b=this;return null===this._state?void this._deferreds.push(a):void j(function(){var c=b._state?a.onFulfilled:a.onRejected;if(null===c)return void(b._state?a.resolve:a.reject)(b._value);var d;try{d=c(b._value)}catch(b){return void a.reject(b)}a.resolve(d)})}function e(a){try{if(a===this)throw new TypeError("A promise cannot be resolved with itself.");if(a&&("object"==typeof a||"function"==typeof a)){var c=a.then;if("function"==typeof c)return void i(b(c,a),b(e,this),b(f,this))}this._state=!0,this._value=a,g.call(this)}catch(a){f.call(this,a)}}function f(a){this._state=!1,this._value=a,g.call(this)}function g(){for(var a=0,b=this._deferreds.length;b>a;a++)d.call(this,this._deferreds[a]);this._deferreds=null}function h(a,b,c,d){this.onFulfilled="function"==typeof a?a:null,this.onRejected="function"==typeof b?b:null,this.resolve=c,this.reject=d}function i(a,b,c){var d=!1;try{a(function(a){d||(d=!0,b(a))},function(a){d||(d=!0,c(a))})}catch(a){if(d)return;d=!0,c(a)}}var j=c.immediateFn||"function"==typeof setImmediate&&setImmediate||function(a){setTimeout(a,1)},k=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)};c.prototype.catch=function(a){return this.then(null,a)},c.prototype.then=function(a,b){var e=this;return new c(function(c,f){d.call(e,new h(a,b,c,f))})},c.all=function(){var a=Array.prototype.slice.call(1===arguments.length&&k(arguments[0])?arguments[0]:arguments);return new c(function(b,c){function d(f,g){try{if(g&&("object"==typeof g||"function"==typeof g)){var h=g.then;if("function"==typeof h)return void h.call(g,function(a){d(f,a)},c)}a[f]=g,0===--e&&b(a)}catch(a){c(a)}}if(0===a.length)return b([]);for(var e=a.length,f=0;f<a.length;f++)d(f,a[f])})},c.resolve=function(a){return a&&"object"==typeof a&&a.constructor===c?a:new c(function(b){b(a)})},c.reject=function(a){return new c(function(b,c){c(a)})},c.race=function(a){return new c(function(b,c){for(var d=0,e=a.length;e>d;d++)a[d].then(b,c)})},"undefined"!=typeof module&&module.exports?module.exports=c:a.Promise||(a.Promise=c)}(this),a.copy=function(a){return new Promise(function(b,c){if("string"!=typeof a&&!("text/plain"in a))throw new Error("You must provide a text/plain type.");var d="string"==typeof a?a:a["text/plain"],e=window.clipboardData.setData("Text",d);e?b():c(new Error("Copying was rejected."))})},a.paste=function(){return new Promise(function(a,b){var c=window.clipboardData.getData("Text");c?a(c):b(new Error("Pasting was rejected."))})}),a});
