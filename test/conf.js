exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
  '*.pagemap.js', '*.page.js', 'spec.js'],
  params: {
      fixtures :{}
  }
}