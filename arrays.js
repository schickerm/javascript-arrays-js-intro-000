var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray() {
  chocolateBars.push('foo', 1);
  return chocolateBars;
}

function destructivelyAddElementToBeginningOfArray() {
   chocolateBars[7] = " ";
  return chocolateBars;
}