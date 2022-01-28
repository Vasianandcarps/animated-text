let text = ["apollo 8", "hello", "bye"];
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let rand = getRandomInt(3);
function add_text(id, text) {
  var elem = document.getElementById(id);
  var pos = 0;
  function add_letter() {
    pos++;
    elem.innerHTML = text.slice(0, pos);

    if (pos > text.length) {
      clearInterval(timer);
    }
  }
  let timer = setInterval(add_letter, 1000);
}

function del_text(id, text) {
  var elem = document.getElementById(id);
  var pos = 0;
  function del_letter() {
    pos--;
    elem.innerHTML = text.slice(0, pos);

    if (pos == 0) {
      clearInterval(rtimer);
    }
  }
  let rtimer = setInterval(del_letter, 1000);
}

