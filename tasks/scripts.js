const gulp = require("gulp");
const plumber = require("gulp-plumber");
const webpack = require("webpack");
const webpackStream = require("webpack-stream");

module.exports = function scripts() {
  return gulp
    .src("source/js/script.js")
    .pipe(plumber())
    .pipe(
      webpackStream({
        mode: "development",
        output: {
          filename: "script.min.js",
        },
        module: {
          rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: ["@babel/preset-env"],
                },
              },
            },
          ],
        },
        devtool: "source-map",
        plugins: [
          new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            Swiper: "swiper",
          }), // jQuery (npm i jquery)
        ],
      })
    )
    .pipe(gulp.dest("build/js"));
};
