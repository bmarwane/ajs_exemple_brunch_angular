module.exports = config:
  modules:
    definition: false
    wrapper: false
  files:
    javascripts:
      joinTo:
        'app.js': /^app\//
        'vendor.js':   (path) ->
                            /^bower_components/.test(path) and not /\.min\.js$/.test(path)
    stylesheets: joinTo: 'app.css'
