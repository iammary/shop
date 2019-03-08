const withTypescript = require( '@zeit/next-typescript' );
const withCSS        = require( '@zeit/next-css' );
const wcss           = withCSS();
module.exports       = withTypescript( {
  target : 'serverless',
  // Other options are still valid
  ...wcss
} );

