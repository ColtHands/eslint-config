module.exports = {
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 2020,
        requireConfigFile: false,
        babelOptions: {
            babelrc: false,
            configFile: false,
            presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript'
            ]
        }
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
        'react/react-in-jsx-scope': 'off',
        'no-template-curly-in-string': 'off',
        'no-self-compare': 'warn',
        'for-direction': 'warn',
        'array-callback-return': ['warn', { checkForEach: true }],
        'space-in-parens': ['warn', 'never'],
        'no-prototype-builtins': ['off', 'never'],
        'semi': ['warn', 'never'],
        'quotes': ['warn', 'single', { 'avoidEscape': true }],
        'indent': ['warn', 4, { 'SwitchCase': 1 }],
        'prefer-const': ['warn', { 'destructuring': 'any' }],
        'brace-style': ['warn', '1tbs', { 'allowSingleLine': true }],
        'object-curly-spacing': ['warn', 'always', { 'objectsInObjects': false }],
        'key-spacing': 'warn',
        'switch-colon-spacing': 'warn',
        'space-before-blocks': 'warn',
        'space-before-function-paren': ['warn', {
            'anonymous': 'always',
            'named': 'never',
            'asyncArrow': 'always'
        }],
        'comma-spacing': ['warn', { 'before': false, 'after': true }],
        'arrow-spacing': 'warn',
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
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                'no-undef': 'off',
                'no-unused-vars': 'off'
            }
        }
    ]
}