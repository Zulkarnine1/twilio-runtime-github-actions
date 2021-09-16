exports.handler = function(context, event, callback) {
    const result = {
        message : "Hello from Zulkar's Twilio Service!"
    }

    callback(null, result);
  };
