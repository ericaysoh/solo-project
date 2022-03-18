const path = require ('path');
const express = require ('express');
const app = express();
const PORT = 3000;
const controller = require ('./controller')
// const router = require(path.resolve('./server/controller.js')); //controller.js is where CRUD requests are

// define route handlers
//app.use()

app.use(express.json());
// app.use(express.urlencoded());

app.get('/', controller.getUserProgress, (req, res) => {
    return (
        console.log(req.body, 'weehee'),
        res
        .set({ 'content-type': 'application/json' })
        .status(200)
        //   .json({ mastered: res.locals.mastered })
    )
  });

app.post('/', controller.getUserProgress, (req, res) => {
  return (
    res
    .set({ 'content-type': 'application/json' })
    .status(200)
    .json({ progress: res.locals.progress })
    // console.log(req.body, 'woohooo', res.locals.progress)
      //   .json({ mastered: res.locals.mastered })
  )
});

// app.get('/', (req, res) => [
//   return (

//   )
// ]);

// catch-all route handler for any requests to an unknown route
// app.use((req, res) => res.sendStatus(404));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  // assgin default error to error object
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;