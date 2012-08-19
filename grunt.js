module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-coffee');
  grunt.loadNpmTasks('grunt-compass');
  grunt.loadNpmTasks('grunt-jasmine-task');

  grunt.initConfig({
    lint : {
      files : [
        'lib/javascript/*.js'
      ]
    }
    , concat : {
      'build/build-javascript.js' : [
        'lib/javascript/intro.js'
        , 'lib/javascript/obj.js'
        , 'lib/javascript/main.js'
      ]
    }
    , coffee : {
      app : {
        src : [
          'lib/coffee/*.coffee'
        ]
        , dest : 'build/'
      }
    }
    , jasmine: {
        all : ['test/index.html']
        //all: ['specs/SpecRunner.html']
    }
    , min : {
      'public/javascript/build-javascript.mim.js' : [
        'build/build-javascript.js'
      ]
      , tasks : 'lint concat'
    }
    , compass: {
        dev : {
          src : 'sass/'
          , dest : 'public/stylesheet/'
          , linecomments: true
          , forcecompile: true
          , debugsass : true
          , relativeassets: true
        }
        /*
        , prod : {
          src : 'sass/'
          , dest : 'public/stylesheet/'
          , linecomments: true
          , forcecompile: true
          , debugsass : true
          , relativeassets: true 
        }
        */
     }
  });

}
;
