var num = 99;

while (num >= 0) {
  if (num === 1) {
    console.log(
      num +
        " bottle of beer on the wall, " +
        num +
        " bottle of beer. Take one down and pass it around, " +
        numberOfBottles
    );
  } else if (num > 0) {
    numberOfBottles = num - 1;
    console.log(
      num +
        " bottles of beer on the wall, " +
        num +
        " bottles of beer. Take one down and pass it around, " +
        numberOfBottles
    );
  } else {
    console.log(
      "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall."
    );
  }

  num--;
}
