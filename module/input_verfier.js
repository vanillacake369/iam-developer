/**
 * Verify if input has all data, through checking the keys of input object
 * @param {*} keyArr
 * @param {*} inputParam
 * @returns
 */
export var isValidInput = (keyArr, inputParam) => {
  var flag;
  keyArr.forEach((key) => {
    if (inputParam[key] === undefined) flag = false;
    else flag = true;
  });
  return flag;
};
