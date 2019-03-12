module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
      compass: {
          options: {
              sassDir: 'src/assets/sass',
              imagesDir: 'src/img',
              cssDir: 'web/assets/css',
              force: true
          },
          dist: {
              options: {
                  environment: 'production',
                  noLineComments: true
              }
          },
          dev: {
              options: {
                  noLineComments: true
              }
          },
          watch: {
              options: {
                  noLineComments: true,
                  watch: true
              }
          }
      },
      assemble: {
        options: {
            layoutdir: 'src/templates/layouts',
            layout: ['default.hbs'],
            partials: ['src/templates/partials/{,*/}*.*', 'src/sprites/svg/*'],
            helpers: [''],
            flatten: true
        },
        en: {
            options: {
                data: ['src/templates/data/en/*.yml', 'src/templates/data/*.yml']
            },
            src: ['src/templates/pages/en/*.hbs'],
            dest: './web'
        },
    },
    svg_sprite: {
        generate: {
            cwd: 'web/assets/vendor/material-design-icons',
            src: [
              '../../../../web/assets/images/ic_menu_24px.svg',
              '../../../../web/assets/images/ic_menius_24px.svg',
              '../../../../web/assets/images/ic_ekranas_24px.svg',
              '../../../../web/assets/images/ic_notifications_24px.svg',
              '../../../../web/assets/images/ic_language_24px.svg',
               '../../../../web/assets/images/ic_home_24px.svg',
               '../../../../web/assets/images/ic_paint_24px.svg',
               '../../../../web/assets/images/ic_settings_24px.svg',
               '../../../../web/assets/images/ic_components_24px.svg',
               '../../../../web/assets/images/ic_icons_24px.svg',
               '../../../../web/assets/images/ic_forms_24px.svg',
               '../../../../web/assets/images/ic_tables_24px.svg',
               '../../../../web/assets/images/ic_charts_24px.svg',
               '../../../../web/assets/images/ic_maps_24px.svg',
               '../../../../web/assets/images/ic_mail_24px.svg',
               '../../../../web/assets/images/ic_pages_24px.svg',
               '../../../../web/assets/images/ic_extras_24px.svg',
               '../../../../web/assets/images/ic_multilevel_24px.svg',
               '../../../../web/assets/images/ic_visits_24px.svg',
               '../../../../web/assets/images/ic_revenue_24px.svg',
               '../../../../web/assets/images/ic_conversion_24px.svg',
               '../../../../web/assets/images/ic_sales_24px.svg'
            ],
            dest: 'src/sprites',
            options: {
                shape: {
                    id: {
                        generator: function(filename) {
                            var id = filename.match(/ic_(\w+)_\d+/);
                            return id[1];
                        }
                    },
                },
                mode: {
                    symbol: {
                        dest: ''
                    }
                }
            }
        }
    },
    watch: {
        options: {
        },
        dev: {
            files: ['src/assets/sass/**/*.scss', 'src/templates/**/*.hbs'],
            tasks: ['compass:dev', 'assemble:en']
        },
        handlebars: {
            files: ['src/templates/*/*.hbs', 'src/templates/layouts/*.hbs' ],
            tasks: ['assemble:en']
        }
    },
  });

  [
    'grunt-contrib-compass',
    'grunt-contrib-watch',
    'grunt-assemble',
    'grunt-svg-sprite'
].forEach(grunt.loadNpmTasks);

  // Default task(s).
  grunt.registerTask('default', [
      'compass:dist',
      'assemble:en'
  ]);

};
