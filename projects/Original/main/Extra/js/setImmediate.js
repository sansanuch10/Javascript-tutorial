window.setImmediate||(window.setImmediate=function(){var e={},n=e,t=Math.random();function a(n){if(n.data==t){var a=(e=e.next).func;delete e.func,a()}}return window.addEventListener?window.addEventListener("message",a):window.attachEvent("onmessage",a),function(e){n=n.next={func:e},window.postMessage(t,"*")}}());