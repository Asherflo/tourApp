

const express = require("express");
const morgan = require("morgan");
const tourRouter = require("./route/tourRoutes");
const userRouter = require("./route/userRoutes")

const app = express();

app.use(morgan('dev'))
app.use(express.json());

app.use((req, res, next)=>{
console.log("hello middleware");
next();
});

app.use((req, res, next)=>{
  req.requestTime = new Date().toISOString();
  next();
});




// app.get('/api/v1/tours', getAllTour); 
// app.get('/api/v1/tours/:id',getTour);
// app.post('/api/v1/tours',createTour);
// app.patch('/api/v1/tours/:id',updateTour);
// app.delete("/api/v1/tours/:id",deleteTour );



app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;