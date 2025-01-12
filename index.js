const mongoose = require("mongoose");

const app = require("./app");

mongoose
  .connect("mongodb+srv://hamza:ha123123@cluster0.cwa7x.mongodb.net/")
  .then(() => {
    console.log("DB connection successful");
  })
  .catch((err) => {
    console.log("DB connection failed");
  });
app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});
