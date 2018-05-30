const path = require('path');

module.exports = {
    mode:'development',
    entry: './client.js',
    output: {
        path: path.resolve(__dirname, "../../public/assets/js"),
        filename: "client.js"
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' }
        ]
    }
};