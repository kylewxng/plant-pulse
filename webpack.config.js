const path = require('path');

module.exports = {
    entry: './static/firebase.js', // Your main JS file
    output: {
        path: path.resolve(__dirname, 'static'),  // ✅ Change from 'dist' to 'static'
        filename: 'bundle.js'
    },
    mode: 'development',
    watch: true,
};
