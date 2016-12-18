var config = {
    entry: "./main.js",
    output: {
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/, // Match both .js and .jsx files
            exclude: /node_modules/,
            loader: "babel",
            query: {
                presets: ['react', 'es2015']
            }
        }]
    }
};

module.exports = config;
