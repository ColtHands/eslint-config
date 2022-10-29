module.exports = {
    root: true,
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: "latest",
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
        'jquery': true,
        'jest': true
    },
    extends: 'eslint:recommended',
    rules: {
        'array-bracket-spacing': ['warn', 'never'],
        'array-callback-return': ['warn', { checkForEach: true }],
        'arrow-spacing': 'warn',
        'brace-style': ['warn', '1tbs', { 'allowSingleLine': true }],
        'comma-dangle': ['warn',
            {
                'arrays': 'never',
                'objects': 'never',
                'imports': 'never',
                'exports': 'never',
                'functions': 'never'
            }
        ],
        'comma-spacing': ['warn', { 'before': false, 'after': true }],
        'for-direction': 'warn',
        'indent': ['warn', 4, { 'SwitchCase': 1 }],
        'key-spacing': 'warn',
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
        'no-prototype-builtins': ['off', 'never'],
        'no-self-compare': 'warn',
        'no-template-curly-in-string': 'off',
        'no-trailing-spaces': 'error',
        'no-unreachable': 'warn',
        'no-unused-vars': 'warn',
        'no-useless-escape': 'warn',
        'object-curly-spacing': ['warn', 'always', { 'objectsInObjects': false }],
        'prefer-const': ['warn', { 'destructuring': 'any' }],
        'quotes': ['warn', 'single', { 'avoidEscape': true }],
        'semi': ['warn', 'never'],
        'space-before-blocks': 'warn',
        'space-before-function-paren': ['warn', { 'anonymous': 'always', 'named': 'never', 'asyncArrow': 'always' }],
        'space-in-parens': ['warn', 'never'],
        'switch-colon-spacing': 'warn'
    },
    overrides: [
        {
            files: ['*.js', '*.cjs'],
        },
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                'no-undef': 'off',
                'no-unused-vars': 'off'
            }
        },
        {
            files: ['*.jsx', '*.tsx'],
            extends: 'plugin:react/recommended',
            rules: {
                'react/react-in-jsx-scope': 'off'
            }
        },
        {
            files: [
                '**/*.{cy,spec}.{js,ts,jsx,tsx}'
            ],
            extends: [
                'plugin:cypress/recommended'
            ]
        }
    ]
}