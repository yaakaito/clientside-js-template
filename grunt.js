module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-coffee');
  grunt.loadNpmTasks('grunt-compass');
  grunt.loadNpmTasks('grunt-jasmine-task');
  
  grunt.loadTasks('tasks');

  grunt.initConfig({
    lint : {
      files : [
        'lib/javascript/*.js'
        , 'tasks/coffeelint.js'
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
    , coffeelint : {
      all : { 
        files : [
          'lib/coffee/*.coffee'
        ]
      }
    }
    , jasmine: {
        all : ['specs/index.html']
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
