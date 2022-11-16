let alert = document.getElementById('alert');

document.getElementById('turbo').addEventListener('change', function () {
    if (this.checked) {
        chrome.storage.sync.set({
            'mode': 'turbo'
        })
    } else {
        chrome.storage.sync.set({
            'mode': 'normal'
        })
    }

    alert.style.display = 'block'
    setTimeout(function () {
        alert.style.display = 'none'
    }, 2000)

    chrome.storage.sync.get(
        'mode',
        function (items) {
            document.getElementById('mode').innerText = items.mode;
        });
})

document.getElementById('normal').addEventListener('change', function () {
    if (this.checked) {
        chrome.storage.sync.set({
            'mode': 'normal'
        })
    } else {
        chrome.storage.sync.set({
            'mode': 'turbo'
        })
    }

    alert.style.display = 'block'
    setTimeout(function () {
        alert.style.display = 'none'
    }, 2000)

    chrome.storage.sync.get(
        'mode',
        function (items) {
            document.getElementById('mode').innerText = items.mode;
        });
})

function restore_options() {
    chrome.storage.sync.get(
        'mode',
        function (items) {
            if (items.mode === 'turbo') {
                
                document.getElementById('turbo').checked = true;
            } else {
                document.getElementById('normal').checked = true;
            }

            console.log(items.mode)
            document.getElementById('mode').innerText = items.mode;
        });
}
document.addEventListener('DOMContentLoaded', restore_options);