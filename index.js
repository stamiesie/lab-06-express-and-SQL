const { app } = require('./app.js');

const port = process.env.PORT || 3000;

// code for spinning up server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
