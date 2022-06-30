# ECommerce-App

![1](https://user-images.githubusercontent.com/99809513/171297301-3a35d534-c4d2-417a-ab64-bce1456e1a14.jpeg)
![2](https://user-images.githubusercontent.com/99809513/171297306-55a17e05-3054-4e6d-a92b-20ff9402bd2b.jpeg)
![3](https://user-images.githubusercontent.com/99809513/171297308-7e791ab3-ff3d-4971-8684-4a75270d119c.jpeg)

// node-icu-wordsplit.js - Main JS entrypoint for the module
//   Needed this because somehow the node native module build system
//   doesn't like dashes in the module name and I don't know how
//   to export a function object directly from a native module.
(function() {

  var splitWords = require('../lib/wordsplit.node').splitWords;

  // TODO: Use ICU data for better rejecting useless parts?
  var REJECT = /^[ \.\!\?\:\;\r\n]*$/;

  // adds precondition checks (easier to do via JS)
  module.exports = (function(split) {
    return function(locale, text) {
      if (!text) {
        text = locale;

        // defaulting to en_US since ICU seems to be able to handle
        // any language regardless of what locale we give it
        // not quite sure why ICU api even need this in the first place
        locale = 'en_US';
      }

      if (!text) throw Error('text argument is required.');

      // make sure we have a string
      locale = "" + locale;
      text = "" + text;

      // should be safe to venture into C land by now
      var rawResults = split(locale, text) || []
        , results = [];

      // filter out common chars and empty entries
      // TODO: Trim from C land? Since we have better ICU support there.
      for (var i = 0; i < rawResults.length; i++) {
        if (rawResults[i].match(REJECT)) continue;

        results.push(rawResults[i]);
      }

      return results;

    };
  })(splitWords);

})();

//var p = new splitWords(en_US,"hello world");
//console.log(p);
