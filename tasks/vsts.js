/*
 * grunt-vsts-iis
 * https://github.com/acromm/grunt-vsts-iis
 *
 * Copyright (c) 2016 acromm
 * Licensed under the MIT license.
 */

 'use strict';

 var iis = require('vsts-iis');
 const util = require('util');


 module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerTask('removeHttpModule', 'Remove http Module', function(moduleName, siteName) {
    var server = grunt.config.get('iis.server');
    grunt.log.writeln(this.name, moduleName, siteName);
    grunt.log.writeln(util.inspect(server, {showHidden: false, depth: 3}));

    var done = this.async();

    if (server) {
      var iisServer = new iis.PsExec(server);
      grunt.log.writeln("Removing Http Module " + moduleName + "on site: " + siteName);
      iisServer.Applications.removeHttpModule(moduleName, server.domain).then(function(result){

        if (!result){
          grunt.log.ok("Http Module removed!");
          done();
        }
        else {
          grunt.fail.warn(result);
          done(false);
        }
      }, function(error){
        grunt.fail.warn(error);
        done(false);
      });
    } else {
      grunt.fail.warn("You must set server infomation");
      done(false);
    }

  });

  grunt.registerTask('enableHttpModule', 'Add http Module', function(moduleName, siteName, type) {
    var server = grunt.config.get('iis.server');
    grunt.log.writeln(this.name, moduleName, siteName);
    grunt.log.writeln(util.inspect(server, {showHidden: false, depth: 3}));

    var done = this.async();

    if (server) {
      var iisServer = new iis.PsExec(server);
      grunt.log.writeln("Enabling Http Module " + moduleName + "on site: " + siteName);
      iisServer.Applications.enableHttpModule(moduleName, server.domain, type).then(function(result){

        if (!result){
          grunt.log.ok("Http Module added!");
          done();
        }
        else {
          grunt.fail.warn(result);
          done(false);
        }
      }, function(error){
        grunt.fail.warn(error);
        done(false);
      });
    } else {
      grunt.fail.warn("You must set server infomation");
      done(false);
    }
  });

};
