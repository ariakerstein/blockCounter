let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0.0

function increment() {
    count += 0.5
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0.0
    count = 0.0
}

