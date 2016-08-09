Package.describe({
  name: 'cleandersonlobo:mdi-icons',
  version: '0.0.2',
  summary: 'Material Design Icons font from Templarian (http://materialdesignicons.com/)',
  git: 'https://github.com/cleandersonlobo/mdi-icons.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.0.1');
  api.use('ecmascript');
  api.use("fourseven:scss@3.8.1");
  api.imply("fourseven:scss");


api.addFiles([
      'MaterialDesign-WebFont/scss/_core.scss',
      'MaterialDesign-WebFont/scss/_extras.scss',
      'MaterialDesign-WebFont/scss/_icons.scss',
      'MaterialDesign-WebFont/scss/_path.scss',
      'MaterialDesign-WebFont/scss/_variables.scss',
      'materialdesignicons.scss'
  ], 'client');
  api.addAssets([
        'MaterialDesign-WebFont/fonts/materialdesignicons-webfont.eot',
        'MaterialDesign-WebFont/fonts/materialdesignicons-webfont.svg',
        'MaterialDesign-WebFont/fonts/materialdesignicons-webfont.ttf',
        'MaterialDesign-WebFont/fonts/materialdesignicons-webfont.woff',
        'MaterialDesign-WebFont/fonts/materialdesignicons-webfont.woff2'
    ], 'client');
});
