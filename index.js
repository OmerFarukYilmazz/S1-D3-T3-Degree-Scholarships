function calTuition(arr, name) {
  /* kodlar buraya */
  let indexNum = arr.indexOf(name);
  let price = 150000;
  if (indexNum === -1) {
    return price;
  }
  if (indexNum < 3) {
    return 0;
  } else if (indexNum < 6) {
    return price * 0.5;
  } else if (indexNum < 10) {
    return price * 0.7;
  } else {
    return price;
  }
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = calTuition;
