// we need to import the datejs first and this must be outside the function
require('datejs')

// we now should use the function to combine users and use .....args to collect multiple arrays
function combineUsers(...args) {
  // here now we intialize the return object
  let combinedObject = {
    users: []
  };
  // now we need to loop through arge and also merge these arrays using spread operator
  args.forEach(userArray => {
    // here now we need to use (...) this spread operator to fill usernames intp the main array
    combinedObject.users = [...combinedObject.users, ...userArray];
  });

  // here we need to get todays date formatted and M/d/yyyy (Month day year)
  combinedObject.merge_date = Date.today().toString("M/d/yyyy");

  // now this object should return
  return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};