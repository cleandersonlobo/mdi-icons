Package.describe({
  name: 'cleandersonlobo:mdi-icons',
  version: '1.0.3',
  summary: 'Material Design Icons font from Templarian (http://materialdesignicons.com/)',
  git: 'https://github.com/cleandersonlobo/mdi-icons.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.0.1');
  api.addFiles([
    'MaterialDesign-Webfont/css/materialdesignicons.css'
  ], 'client');

  api.addAssets([
        'MaterialDesign-WebFont/fonts/materialdesignicons-webfont.eot',
        'MaterialDesign-WebFont/fonts/materialdesignicons-webfont.svg',
        'MaterialDesign-WebFont/fonts/materialdesignicons-webfont.ttf',
        'MaterialDesign-WebFont/fonts/materialdesignicons-webfont.woff',
        'MaterialDesign-WebFont/fonts/materialdesignicons-webfont.woff2'
    ], 'client');
});
