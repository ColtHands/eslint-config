module.exports = {
    parser: '@babel/eslint-parser',
    parserOptions: {
        'ecmaVersion': 2020
    },
    globals: {
        window: true,
        document: true
    },
    env: {
        'browser': true,
        'es6': true,
        'node': true,
        'commonjs': true,
        'jquery': true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    rules: {
        'for-direction': ['warn'],
        'array-callback-return': ['warn', { checkForEach: true }],
        'space-in-parens': ['warn', 'never'],
        'no-prototype-builtins': ['off', 'never'],
        'semi': ['warn', 'never'],
        'quotes': ['warn', 'single', { 'avoidEscape': true }],
        'indent': ['warn', 4, { 'SwitchCase': 1 }],
        'prefer-const': ['warn', { 'destructuring': 'any' }],
        'brace-style': ['warn', '1tbs', { 'allowSingleLine': true }],
        'object-curly-spacing': ['warn', 'always', { 'objectsInObjects': false }],
        'key-spacing': ['warn'],
        'switch-colon-spacing': ['warn'],
        'space-before-blocks': ['warn'],
        'space-before-function-paren': ['warn', 'never'],
        'comma-spacing': ['warn', { 'before': false,'after': true}],
        'arrow-spacing': ['warn'],
        'no-unreachable': 'warn',
        'no-useless-escape': 'warn',
        'no-unused-vars': 'warn',
        'array-bracket-spacing': ['warn', 'never'],
        'keyword-spacing': ['warn',
            {
                'overrides': {
                    'if': {
                        'after': false
                    },
                    'for': {
                        'after': false
                    },
                    'switch': {
                        'after': false
                    },
                    'while': {
                        'after': false
                    }
                }
            }
        ],
        'comma-dangle': ['warn',
            {
                'arrays': 'never',
                'objects': 'never',
                'imports': 'never',
                'exports': 'never',
                'functions': 'never'
            }
        ]
    }
}