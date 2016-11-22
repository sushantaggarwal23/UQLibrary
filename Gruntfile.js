/**
 * Created by Sushant Aggarwal on 20/11/2016.
 */


module.exports = function(grunt) {

    var globalConfig = {
        jsSrc:       'webapp',
        jsDest:      'dist'
    };
    grunt.initConfig({

        globalConfig: globalConfig,

        // Read in the package details
        pkg: grunt.file.readJSON('package.json'),

        // Uglify Javascript files


        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    '<%= globalConfig.jsDest %>/app.min.js':
                        [
                            '<%= globalConfig.jsSrc %>/resources/angular.min.js',
                            '<%= globalConfig.jsSrc %>/resources/angular-resource.min.js',
                            '<%= globalConfig.jsSrc %>/resources/angular-aria.min.js',
                            '<%= globalConfig.jsSrc %>/resources/angular-messages.min.js',
                            '<%= globalConfig.jsSrc %>/resources/angular-route.min.js',
                            '<%= globalConfig.jsSrc %>/resources/angular-material.min.js',
                            '<%= globalConfig.jsSrc %>/resources/angular-animate.min.js',
                            '<%= globalConfig.jsSrc %>/app.js',
                            '<%= globalConfig.jsSrc %>/views/*/*.js',
                            '<%= globalConfig.jsSrc %>/routeConfigurations/*.js',
                            '<%= globalConfig.jsSrc %>/services/*.js'
                        ]
                }
            }
        },

        connect: {
            server: {
                options: {
                    port: 9000,
                    livereload: 35729,
                    hostname: "0.0.0.0",
                    open:true,
                    base:".",
                    keepalive:true
                },
        //        proxies:
        //            {
        //                context: '/new/*',
        //                host: 'http://app.library.uq.edu.au',
        //                port: 80,
        //                https: false,
        //                changeOrigin: true,
        //            },
            }
        }

    });

    // Third party modules
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');



    // Register default task
    grunt.registerTask('default', [ 'uglify','connect:server']);

};