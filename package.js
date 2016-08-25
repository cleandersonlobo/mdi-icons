Package.describe({
  name: 'cleandersonlobo:mdi-icons',
  version: '1.1.1',
  summary: 'Material Design Icons font from Templarian (http://materialdesignicons.com/)',
  git: 'https://github.com/cleandersonlobo/mdi-icons.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.4');
  api.addFiles([
    'MaterialDesign-MDI/css/materialdesignicons.css'
  ], 'client');

  api.addAssets([
        'MaterialDesign-MDI/fonts/materialdesignicons-webfont.eot',
        'MaterialDesign-MDI/fonts/materialdesignicons-webfont.svg',
        'MaterialDesign-MDI/fonts/materialdesignicons-webfont.ttf',
        'MaterialDesign-MDI/fonts/materialdesignicons-webfont.woff',
        'MaterialDesign-MDI/fonts/materialdesignicons-webfont.woff2'
    ], 'client');
});
