const page = (userContext, events, done) => {
  // from MDN
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  userContext.vars.id = getRandomInt(9000000, 10000002);
  // console.log(`http://localhost:5000/api/reviews/${userContext.vars.id}/`);
  return done();
};


module.exports = {
  page,
};
