require.config({
	paths: {
		'jasmine': 'lib/jasmine-1.2.0/jasmine',
		'jasmine.html': 'lib/jasmine-1.2.0/jasmine-html',
		'jasmine.helper': 'lib/jasmine-1.2.0/jasmine-helper'
	},
	shim: {
		'jasmine' : {
			exports : 'jasmine'
		},
		'jasmine.html': ['jasmine'],
		'jasmine.helper': ['jasmine']
	}
});

require([
	'jasmine',
    'jasmine.html',
    'jasmine.helper',
    'spec/PlayerSpec'
  ],
  function (jasmine) {
      var jasmineEnv = jasmine.getEnv();
      jasmineEnv.updateInterval = 1000;

      var htmlReporter = new jasmine.HtmlReporter();

      jasmineEnv.addReporter(htmlReporter);

      jasmineEnv.specFilter = function(spec) {
        return htmlReporter.specFilter(spec);
      };

      jasmineEnv.execute();
});