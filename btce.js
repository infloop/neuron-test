var BTCE = require('btc-e'),
    //btceTrade = new BTCE("YourApiKey", "YourSecret"),
    // No need to provide keys if you're only using the public api methods.
    btcePublic = new BTCE();

// Public API method call.
// Note: Could use "btceTrade" here as well.
btcePublic.ticker("ltc_btc", function(err, data) {
    console.log(err, data);
});