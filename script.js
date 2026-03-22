let arr = [1, 2, 3, 4, 5];
function incrementArray(arr) {
  return arr.map(element => ++element);
}

alert(incrementArray(arr));
