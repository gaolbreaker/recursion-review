// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  // I: some obj
  // O: that object in string form
  // C: none
  // E: if obj is undefined, return undefined

  // PC:
  // declare return string variable and set to an empty string
  var returnString = '';

  // create inner recursive function
  var recursiveFunction = function(obj1) {

    var objType = typeof obj1;

    if (objType === 'function') {
      return '0';
    } else if (objType === 'number' || objType === 'boolean' || obj1 === null) {
      returnString += obj1;
    } else if (objType === 'string') {
      returnString += '\"' + obj1 + '\"';
    } else if (Array.isArray(obj1) === true && obj1.length === 0) {
      returnString += '[]';
    } else if (Array.isArray(obj1) === true && obj1.length > 0) {
      returnString += '[';
      for (var index = 0; index < obj1.length; index++) {
        recursiveFunction(obj1[index]);
        if (index !== obj1.length - 1) {
          returnString += ',';
        }
      }
      returnString += ']';
    } else if (objType === 'object' && Array.isArray(obj1) === false && obj1 !== null) {
      var keys = Object.keys(obj1);
      var values = Object.values(obj1);
      returnString += '{';
      for (var i = 0; i < keys.length; i++) {
        if ((typeof values[i]) === 'function' || (typeof values[i]) === 'undefined') {
          continue;
        } else {
          returnString += '\"' + keys[i] + '\"';
          returnString += ':';
          recursiveFunction(values[i]);
          if (i !== keys.length - 1) {
            returnString += ',';
          }
        }
      }
      returnString += '}';
    }

    // determine if not nested
    // if not, add to the return string
    // if so, make recursive call
    // pass inner object to the inner recursive function
  };
  recursiveFunction(obj);

  return returnString;
  // return string




};
