var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray() {
  chocolateBars.push('foo');
  return chocolateBars;
}

function destructivelyAddElementToBeginningOfArray() {
   chocolateBars[5] = " ";
  return chocolateBars;
}