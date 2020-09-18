module.exports = {
  name: 'my-student-app-my-stedent',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/my-student-app/my-stedent',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
