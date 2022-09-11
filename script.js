var docs = {
  value: document.querySelector('.value')
}

var value = 0

const addValue = (num) => {
  value += num
}

setInterval (() => {
  docs.value.innerHTML = value
}, 100)
