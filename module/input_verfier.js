/**
 * Verify if input has all data, through checking the keys of input object
 * @param {*} keyArr
 * @param {*} inputParam
 * @returns
 */
export var isValidInput = (keyArr, inputParam) => {
  var flag;
  keyArr.forEach((key) => {
    if (isEmpty(inputParam[key])) flag = false;
    else if (keyArr[keyArr.length - 1] === key || flag === false) return;
    else flag = true;
  });
  return flag;
};

function isEmpty(str) {
  return !str || str.length === 0 || str === undefined;
}
