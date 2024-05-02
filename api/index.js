const express = require("express");
const bodyParser = require('body-parser')
// Create express instance
const app = express();
app.use(bodyParser.json())
// Require API routes

const test = require("./routes/test");

app.use(test);

// Export express app
module.exports = app;

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`);
  });
}
