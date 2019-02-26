module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
      compass: {
          options: {
              sassDir: 'srcc/asets/sass',
              imagesDir: 'srcc/img',
              cssDir: 'web/asets/css',
              force: true
          },

          dist: {
              options: {
                  environment: 'production',
                  noLineComments: true
              }
          },
      }
  });

  [
    'grunt-contrib-compass',
    'grunt-assemble',
].forEach(grunt.loadNpmTasks);

  // Default task(s).
  grunt.registerTask('default', [
      'compass:dist'
  ]);

};
