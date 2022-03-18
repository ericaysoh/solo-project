const db = require('../database/dbModel')

//middlewares

const controller = {};

controller.getUserProgress = (req, res, next) => {
  const queryString = 'SELECT * FROM "user";'
  db.query(queryString)
  .then(data => {
    res.locals.progress = data.rows;
    // console.log(res.locals, 'you\'re doing great!', data.rows)
      return next();
    })
    .catch((errorObj) => {
      errorObj.log = 'controller.getUserProgress',
      errorObj.status = 422,
      errorObj.message = { err: 'controller.getUserProgress: ERROR' };
      return next(errorObj);
    })
}

module.exports = controller;