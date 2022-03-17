const db = require('../database/dbModel')

//middlewares

const controller = {};

controller.getUserProgress = (req, res, next) => {
  const queryString = 'SELECT * FROM user;'

  db.query(queryString)
    .then(data => {
      res.locals.progress = data.rows;
      return next();
    })
    // .catch(())
}