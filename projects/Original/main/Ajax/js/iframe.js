function createIframe(e,a,t){a=a||"javascript:false";var n=document.createElement("div");n.innerHTML='<iframe name="'+e+'" id="'+e+'" src="'+a+'">';var r=n.firstChild;return t||(r.style.display="none"),document.body.appendChild(r),r}function postToIframe(e,a,t){var n=document.getElementById("phonyForm");n||((n=document.createElement("form")).id="phonyForm",n.style.display="none",n.method="POST",n.enctype="multipart/form-data",document.body.appendChild(n)),n.action=e,n.target=t;var r=[];for(var o in a){var i=String(a[o]).replace(/"/g,"&quot;");r.push("<input type='hidden' name=\""+o+'" value="'+i+'">')}n.innerHTML=r.join(""),n.submit()}var CallbackRegistry={};function iframeGet(e,a,t){var n=!1,r=Math.random(),o=createIframe(r,e);CallbackRegistry[r]=function(e){n=!0,a(e)},o.onload=function(){o.parentNode.removeChild(o),delete CallbackRegistry[r],n||t()}}function iframePost(e,a,t,n){var r=!1,o=Math.random(),i=createIframe(o);CallbackRegistry[o]=function(e){r=!0,t(e)},i.onload=function(){i.parentNode.removeChild(i),delete CallbackRegistry[o],r||n()},postToIframe(e,a,o)}