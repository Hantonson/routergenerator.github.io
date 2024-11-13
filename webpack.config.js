// webpack.config.js
//const createExpoWebpackConfigAsync = require('@expo/webpack-config');
//import createWebpackConfigAsync from "@expo/webpack-config/webpack";

const createWebpackConfigAsync = require('@expo/webpack-config')

module.exports = async function(env, argv) {
    const config = await createWebpackConfigAsync(env, argv);

    // Set the public path to the repository name on GitHub
    config.output.publicPath = 'https://hantonson.github.io/routergenerator.github.io/';  // replace with your repo name

    return config;
};
