module.exports = {
    collectCoverageFrom: [
        'app/**/*.{js,jsx}',
        '!app/**/*.test.{js,jsx}',
        '!app/app.js',
    ],
    coverageThreshold: {
        global: {
            statements: 10,
            branches: 10,
            functions: 10,
            lines: 10
        }
    },
    coverageReporters: ['json', 'lcov', 'text-summary'],
    modulePaths: ['<rootDir>'],
    moduleDirectories: ['node_modules', 'app'],
    transform: {
        '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest'
    },
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$', '^.+\\.module\\.(css|sass|scss)$'],
    moduleNameMapper: {
        '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/config/jest-mocks/cssModule.js',
        '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/config/jest-mocks/image.js'
    },
    setupFilesAfterEnv: ['<rootDir>/config/test-setup.js'],
    testRegex: 'tests/.*\\.test\\.js$'
};
