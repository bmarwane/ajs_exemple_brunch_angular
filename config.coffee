module.exports = config:
  modules:
    definition: false
    wrapper: false
  files:
    templates:
      joinTo:
        'templates.js': /^app\/views/
    javascripts:
      joinTo:
        order:
          before: ['app/application.js']
        'app.js': /^app\//
        'vendor.js':   (path) ->
                            /^bower_components/.test(path) and not /\.min\.js$/.test(path)

    stylesheets:
      joinTo:
        'app.css': /^(app|vendor)/


  server:
    run: yes
    port: 9192
  plugins:
    fbFlo:
      port: 9193
      verbose: false
