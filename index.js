// we need to import the datejs first and this must be outside the function
require('datejs')

// we now should use the function to combine users and use .....args to collect multiple arrays
function combineUsers(...args) {
  // here now we intialize the return object
  let combinedObject = {
    users: []
  };
  
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};