const express = require('express');
const path = require('path')
const port = 3000;

const app = express();

// app.use(express.static("public"));

// app.get('/*', (req, res) => {
//  res.sendFile('/Users/ajaymungur/Documents/ReactStudyGroup/project4/public/index.html');
// });

app.use(express.static("public"));
app.use(express.static('dist'));


app.listen(port, () => {
  console.log("Dev server up and running on PORT:3000");
});
