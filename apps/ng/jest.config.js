module.exports = {
  name: 'ng',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ng',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
