function MatchLang(text, langs) {
    a = langs.split(',')
    for (var i = 0; i < a.length; i++) {
        if (text.indexOf(a[i]) != -1) { return 1 }
    }
    return 0
}

chrome.storage.local.get('atcoder_language', function (value) {
    langs = value.atcoder_language
    c = document.getElementsByClassName("submit-language-selector")
    for (var i = 0; i < c.length; i++) {
        o = document.getElementById(c[i].id).options
        html = ''
        for (var j = 0; j < o.length; j++) {
            if (MatchLang(o[j].text, langs)) {
                val = '"' + o[j].value + '"'
                sel = o[j].selected ? ' selected=""' : ''
                l = '<option value=' + val + sel + '>'
                r = '</option>'
                html += l + o[j].text + r
            }
        }
        document.getElementById(c[i].id).innerHTML = html
    }
})



