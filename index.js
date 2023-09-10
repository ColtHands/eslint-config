module.exports = {
    root: true,
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
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
        browser: true,
        es6: true,
        node: true,
        commonjs: true,
        jquery: true,
        jest: true
    },
    extends: [
        'eslint:recommended',
        '@nuxtjs/eslint-config',
        '@nuxtjs/eslint-config-typescript'
    ],
    rules: {
        'array-bracket-newline': ['warn', 'consistent'],
        'array-bracket-spacing': ['warn', 'never'],
        'array-callback-return': ['warn', { checkForEach: true }],
        'arrow-spacing': 'warn',
        'brace-style': ['warn', '1tbs', { allowSingleLine: true }],
        'comma-dangle': ['warn', {
            arrays: 'never',
            objects: 'never',
            imports: 'never',
            exports: 'never',
            functions: 'never'
        }],
        'quote-props': ['warn', 'consistent-as-needed'],
        'camelcase': ['warn', {
            properties: 'always',
            ignoreDestructuring: false,
            ignoreImports: false,
            ignoreGlobals: false
        }],
        'comma-spacing': ['warn', { before: false, after: true }],
        'for-direction': 'warn',
        'indent': ['warn', 4, { SwitchCase: 1 }],
        'key-spacing': 'warn',
        'keyword-spacing': ['warn', {
            overrides: {
                if: {
                    after: false
                },
                for: {
                    after: false
                },
                switch: {
                    after: false
                },
                while: {
                    after: false
                }
            }
        }],
        'no-prototype-builtins': ['off', 'never'],
        'no-self-compare': 'warn',
        'no-template-curly-in-string': 'off',
        'no-trailing-spaces': 'error',
        'no-unreachable': 'warn',
        'no-unused-vars': 'warn',
        'no-useless-escape': 'warn',
        'object-curly-spacing': ['warn', 'always', { objectsInObjects: false }],
        'prefer-const': ['warn', { destructuring: 'any' }],
        'quotes': ['warn', 'single', { avoidEscape: true }],
        'semi': ['warn', 'never'],
        'space-before-blocks': 'warn',
        'space-before-function-paren': ['warn', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
        'space-in-parens': ['warn', 'never'],
        'switch-colon-spacing': 'warn'
    },
    overrides: [
        {
            files: ['*.js'],
            plugins: ['jsdoc'],
            rules: {
                'jsdoc/check-access': 1,
                'jsdoc/check-alignment': 1,
                'jsdoc/check-examples': 0,
                'jsdoc/check-indentation': 1,
                'jsdoc/check-line-alignment': 1,
                'jsdoc/check-param-names': 1,
                'jsdoc/check-property-names': 1,
                'jsdoc/check-syntax': 1,
                'jsdoc/check-tag-names': 1,
                'jsdoc/check-types': 1,
                'jsdoc/check-values': 1,
                'jsdoc/empty-tags': 1,
                'jsdoc/implements-on-classes': 1,
                'jsdoc/match-description': 1,
                'jsdoc/multiline-blocks': 1,
                'jsdoc/newline-after-description': 1,
                'jsdoc/no-bad-blocks': 1,
                'jsdoc/no-defaults': 1,
                'jsdoc/no-missing-syntax': 1,
                'jsdoc/no-multi-asterisks': 1,
                'jsdoc/no-restricted-syntax': 0,
                'jsdoc/no-types': 0,
                'jsdoc/no-undefined-types': 1,
                'jsdoc/require-asterisk-prefix': 1,
                'jsdoc/require-description': [1, { descriptionStyle: 'any' }],
                'jsdoc/require-description-complete-sentence': 1,
                'jsdoc/require-example': 0,
                'jsdoc/require-file-overview': 1,
                'jsdoc/require-hyphen-before-param-description': 1,
                'jsdoc/require-jsdoc': 1,
                'jsdoc/require-param': 1,
                'jsdoc/require-param-description': 1,
                'jsdoc/require-param-name': 1,
                'jsdoc/require-param-type': 1,
                'jsdoc/require-property': 1,
                'jsdoc/require-property-description': 1,
                'jsdoc/require-property-name': 1,
                'jsdoc/require-property-type': 1,
                'jsdoc/require-returns': 1,
                'jsdoc/require-returns-check': 1,
                'jsdoc/require-returns-description': 1,
                'jsdoc/require-returns-type': 1,
                'jsdoc/require-throws': 1,
                'jsdoc/require-yields': 1,
                'jsdoc/require-yields-check': 1,
                'jsdoc/tag-lines': 1,
                'jsdoc/valid-types': 1
            }
        },
        {
            files: ['*.ts', '*.tsx'],
            extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
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
        },
        {
            files: [
                '**/*.vue'
            ],
            extends: [
                'plugin:vue/vue3-recommended'
            ],
            parser: 'vue-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser',
            },
            rules: {
                'vue/attribute-hyphenation': 'warn',
                'vue/attributes-order': 'warn',
                'vue/comment-directive': 'error',
                'vue/component-definition-name-casing': 'warn',
                'vue/component-tags-order': 'warn',
                'vue/first-attribute-linebreak': 'warn',
                'vue/html-closing-bracket-newline': 'warn',
                'vue/html-closing-bracket-spacing': 'warn',
                'vue/html-end-tags': 'warn',
                'vue/html-indent': ['error', 4, {
                    attribute: 1,
                    baseIndent: 1,
                    closeBracket: 0,
                    alignAttributesVertically: true
                }],
                'vue/html-quotes': 'warn',
                'vue/html-self-closing': 'off',
                'vue/jsx-uses-vars': 'error',
                'vue/max-attributes-per-line': ['warn', {
                    singleline: {
                        max: 3
                    }
                }],
                'vue/multi-word-component-names': 'off',
                'vue/multiline-html-element-content-newline': 'warn',
                'vue/mustache-interpolation-spacing': ['warn', 'never'],
                'vue/no-arrow-functions-in-watch': 'error',
                'vue/no-async-in-computed-properties': 'error',
                'vue/no-child-content': 'error',
                'vue/no-computed-properties-in-data': 'error',
                'vue/no-custom-modifiers-on-v-model': 'error',
                'vue/no-deprecated-data-object-declaration': 'error',
                'vue/no-deprecated-destroyed-lifecycle': 'error',
                'vue/no-deprecated-dollar-listeners-api': 'error',
                'vue/no-deprecated-dollar-scopedslots-api': 'error',
                'vue/no-deprecated-events-api': 'error',
                'vue/no-deprecated-filter': 'error',
                'vue/no-deprecated-functional-template': 'error',
                'vue/no-deprecated-html-element-is': 'error',
                'vue/no-deprecated-inline-template': 'error',
                'vue/no-deprecated-props-default-this': 'error',
                'vue/no-deprecated-router-link-tag-prop': 'error',
                'vue/no-deprecated-scope-attribute': 'error',
                'vue/no-deprecated-slot-attribute': 'error',
                'vue/no-deprecated-slot-scope-attribute': 'error',
                'vue/no-deprecated-v-bind-sync': 'error',
                'vue/no-deprecated-v-is': 'error',
                'vue/no-deprecated-v-on-native-modifier': 'error',
                'vue/no-deprecated-v-on-number-modifiers': 'error',
                'vue/no-deprecated-vue-config-keycodes': 'error',
                'vue/no-dupe-keys': 'error',
                'vue/no-dupe-v-else-if': 'error',
                'vue/no-duplicate-attributes': 'error',
                'vue/no-export-in-script-setup': 'error',
                'vue/no-expose-after-await': 'error',
                'vue/no-lifecycle-after-await': 'error',
                'vue/no-lone-template': 'warn',
                'vue/no-multi-spaces': 'warn',
                'vue/no-multiple-slot-args': 'warn',
                'vue/no-multiple-template-root': 'off',
                'vue/no-mutating-props': 'error',
                'vue/no-parsing-error': 'error',
                'vue/no-ref-as-operand': 'error',
                'vue/no-reserved-component-names': 'error',
                'vue/no-reserved-keys': 'error',
                'vue/no-reserved-props': ['error', { vueVersion: 2 }],
                'vue/no-setup-props-destructure': 'error',
                'vue/no-shared-component-data': 'error',
                'vue/no-side-effects-in-computed-properties': 'error',
                'vue/no-spaces-around-equal-signs-in-attribute': 'warn',
                'vue/no-template-key': 'error',
                'vue/no-template-shadow': 'warn',
                'vue/no-textarea-mustache': 'error',
                'vue/no-unused-components': 'error',
                'vue/no-unused-vars': 'error',
                'vue/no-use-computed-property-like-method': 'error',
                'vue/no-use-v-if-with-v-for': 'error',
                'vue/no-useless-template-attributes': 'error',
                'vue/no-v-for-template-key-on-child': 'error',
                'vue/no-v-for-template-key': 'error',
                'vue/no-v-html': 'warn',
                'vue/no-v-model-argument': 'error',
                'vue/no-v-text-v-html-on-component': 'error',
                'vue/no-watch-after-await': 'error',
                'vue/one-component-per-file': 'warn',
                'vue/order-in-components': 'warn',
                'vue/prefer-import-from-vue': 'error',
                'vue/prop-name-casing': 'warn',
                'vue/require-component-is': 'error',
                'vue/require-default-prop': 'warn',
                'vue/require-explicit-emits': 'warn',
                'vue/require-prop-type-constructor': 'error',
                'vue/require-prop-types': 'warn',
                'vue/require-render-return': 'error',
                'vue/require-slots-as-functions': 'error',
                'vue/require-toggle-inside-transition': 'error',
                'vue/require-v-for-key': 'error',
                'vue/require-valid-default-prop': 'error',
                'vue/return-in-computed-property': 'error',
                'vue/return-in-emits-validator': 'error',
                'vue/singleline-html-element-content-newline': ['off'],
                'vue/this-in-template': 'warn',
                'vue/use-v-on-exact': 'error',
                'vue/v-bind-style': 'warn',
                'vue/v-on-event-hyphenation': 'warn',
                'vue/v-on-style': 'warn',
                'vue/v-slot-style': 'warn',
                'vue/valid-attribute-name': 'error',
                'vue/valid-define-emits': 'error',
                'vue/valid-define-props': 'error',
                'vue/valid-model-definition': 'error',
                'vue/valid-next-tick': 'error',
                'vue/valid-template-root': 'error',
                'vue/valid-v-bind-sync': 'error',
                'vue/valid-v-bind': 'error',
                'vue/valid-v-cloak': 'error',
                'vue/valid-v-else-if': 'error',
                'vue/valid-v-else': 'error',
                'vue/valid-v-for': 'error',
                'vue/valid-v-html': 'error',
                'vue/valid-v-if': 'error',
                'vue/valid-v-is': 'error',
                'vue/valid-v-memo': 'error',
                'vue/valid-v-model': 'error',
                'vue/valid-v-on': 'error',
                'vue/valid-v-once': 'error',
                'vue/valid-v-pre': 'error',
                'vue/valid-v-show': 'error',
                'vue/valid-v-slot': 'error',
                'vue/valid-v-text': 'error'
            }
        }
    ]
};