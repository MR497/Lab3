var count = document.getElementById('count');
var input = document.getElementById('input');

input.addEventListener('keyup', function(e){
  wordCounter(e.target.value);
});

function wordCounter(text) {
  var text = input.value.split(' ');
  var wordCount = 0;
  for (var i = 0; i < text.length; i++) {
    if (text[i] !== ' ') {
      wordCount++;
    }
  }
  count.innerText = wordCount;
}