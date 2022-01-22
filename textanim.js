var arr_src = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROatvj44LZ_o8-uyc1QxmaZfLEkpLXKnuMvjzMEpL8VOVxDgcF_gjOwvH4KdvOoWv4Ws4&usqp=CAU",
  " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKY5HHngoypOTRj4KZ7zAu-qXs9kzXQFB7td1Hp82nXR8PxWQ9YRiAF4y3YyS9aDwPIrI&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLVixRcB3ogSgQTolsw0n71gC1Pg3Fod1r_eC_HCRQtldqcLDBZcMlLBL96YsV0Zihs1U&usqp=CAU",
];
var i = 0;

var img1 = document.getElementById("img1");

function next() {
  if (i < arr_src.length - 1) {
    i++;
  } else {
    i = 0;
  }
  img1.setAttribute("src", arr_src[i]);
}

function prev() {
  if (i > 0) {
    i--;
  } else {
    i = 2;
  }
  img1.setAttribute("src", arr_src[i]);
}
let timerId;
let stop;
// let timerId = setInterval(function () {
//   next();
// }, 100);
// let stop = clearInterval(timerId);
