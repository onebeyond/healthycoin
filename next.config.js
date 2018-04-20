const withSass = require('@zeit/next-sass');
module.exports = withSass({
  sassLoaderOptions: {
    includePaths: ["absolute/path/a", "absolute/path/b"]
  }
});
