/* eslint-disable */
export default {
  displayName: 'shared-util-errors',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]s$': ['babel-jest', { presets: ['@nx/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/shared/util-errors',
};
