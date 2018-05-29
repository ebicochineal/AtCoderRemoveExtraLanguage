// ==UserScript==
// @name         atcoder-remove-extra-language
// @namespace    https://github.com/ebicochineal/
// @version      0.1
// @description
// @author       ebicochineal
// @match        https://*.contest.atcoder.jp/submit*
// @match        https://beta.atcoder.jp/contests/*/submit*
// @grant        none
// ==/UserScript==
function MatchLang(text) {
    var a = ['Python3', 'PyPy3', 'C++14', 'C#', 'Basic', 'Nim']
    for (var i = 0; i < a.length; i++) {
        if (text.indexOf(a[i]) != -1) { return 1 }
    }
    return 0
}

function A () {
    var c = document.getElementsByClassName("submit-language-selector")
    for (var i = 0; i < c.length; i++) {
        var o = document.getElementById(c[i].id).options
        var html = ''
        for (var j = 0; j < o.length; j++) {
            if (MatchLang(o[j].text)) {
                var val = '"' + o[j].value + '"'
                var sel = o[j].selected ? ' selected=""' : ''
                var l = '<option value=' + val + sel + '>'
                var r = '</option>'
                html += l + o[j].text + r
            }
        }
        document.getElementById(c[i].id).innerHTML = html
    }
}

function B () {
    var c = null
    var e = document.getElementsByClassName("form-control")
    for (var k = 0; k < e.length; k++) {
        if (e[k].className == "form-control current select2-hidden-accessible") {
            c = e[k];
            break;
        }
    }
    var o = c.options
    var html = ''
    for (var j = 0; j < o.length; j++) {
        if (MatchLang(o[j].text)) {
            var val = '"' + o[j].value + '"'
            var sel = o[j].selected ? ' selected=""' : ''
            var l = '<option value=' + val + sel + 'data-mime="' + o[j].getAttribute('data-mine') + '">'
            var r = '</option>'
            html += l + o[j].text + r
        }
    }
    c.innerHTML = html
}

(function() {
    if (location.href.match(/beta.atcoder.jp/)) {
        B();
    } else {
        A();
    }
})();
