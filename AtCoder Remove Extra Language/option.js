function save_storage () {
    v = document.getElementById("textarea").value
    chrome.storage.local.set({'atcoder_language' : v}, function () {})
}

window.onload = function () {
    chrome.storage.local.get('atcoder_language', function (value) {
        if (value.atcoder_language) {
            document.getElementById("textarea").value = value.atcoder_language
        }
    })
    document.getElementById("save").addEventListener("click", save_storage)
}

