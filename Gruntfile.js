module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['src/**/*.js'],
                dest: 'assets/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'assets/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js'],
            options: {
                // options here to override JSHint defaults
                trailing: true,
                globals: {
                    browser: true,
                    console: true
                }
            }
        },

        // grunt server with live reload
        connect: {
            options: {
                port: 8000,
                hostname: 'localhost',
                index: 'demo.html',
                livereload: 35729
            },
            all: {
                // options: {
                //     open: true
                // }
            }
        },
        watch: {
            livereload: {
                options: {
                    livereload: true
                },
                files: ['<%= jshint.files %>', 'demo.html', 'template/**/*.html'],
                tasks: ['jshint', 'concat']
            }
        },
        open: {
            all: {
                path: 'http://localhost:<%= connect.options.port%>/<%= connect.options.index %>'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');

    grunt.registerTask('serve', ['connect:all', 'open', 'watch']);
    grunt.registerTask('default', ['jshint', 'concat', 'uglify']);

};
