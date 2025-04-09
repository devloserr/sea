let output = document.getElementById('output')

let delay = 100

function update() {
  const xhr = new XMLHttpRequest()

  xhr.open('POST', 'output.php', true)
  xhr.setRequestHeader('Content-Type: application/x-www-form-urlencoded')

  xhr.onload = function() {
    output.innerHTML += xhr.responseText
  }

  xhr.send('value=1');
}

setInterval(update, delay)
