function httpGet(t) { return new Promise(function (e, r) { var n = new XMLHttpRequest; n.open("GET", t, !0), n.onload = function () { if (200 == this.status) e(this.response); else { var t = new Error(this.statusText); t.code = this.status, r(t) } }, n.onerror = function () { r(new Error("Network Error")) }, n.send() }) }