let alert = document.getElementById('alert');

document.getElementById('turbo').addEventListener('change', function () {
    if (this.checked)
        update_mode('turbo');
    else 
        update_mode('normal');
})

document.getElementById('normal').addEventListener('change', function () {
    if (this.checked) 
        update_mode('normal')
    else 
        update_mode('turbo')
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
        }
    );
}

function update_mode(mode) {
    chrome.storage.sync.set({
        'mode': mode
    })

    alert.style.opacity = '1'
    setTimeout(function () {
        alert.style.opacity = '0'
    }, 2000)

    chrome.storage.sync.get(
        'mode',
        function (items) {
            document.getElementById('mode').innerText = items.mode;
        }
    );
}

document.addEventListener('DOMContentLoaded', restore_options);