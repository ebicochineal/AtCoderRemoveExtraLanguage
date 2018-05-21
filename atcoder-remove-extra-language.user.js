// ==UserScript==
// @name         atcoder-remove-extra-language
// @namespace    https://github.com/ebicochineal/
// @version      0.1
// @description  
// @author       ebicochineal
// @match        https://*.contest.atcoder.jp/submit*
// @grant        none
// ==/UserScript==

function MatchLang(text) {
    var a = ['Python3', 'PyPy3', 'C++14', 'C#']
    for (var i = 0; i < a.length; i++) {
        if (text.indexOf(a[i]) != -1) { return 1 }
    }
    return 0
}
(function() {
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
})();