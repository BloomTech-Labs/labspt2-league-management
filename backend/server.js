const app = require('./app');

const PORT = '4000';

app.listen(PORT, () => {
    console.log(`\nListening on port ${PORT}\n`);
});