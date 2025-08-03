import { defineConfig } from 'eslint/config'
import { getPackageInfoSync } from 'local-pkg'
import js from '@eslint/js'
import jsdoc from 'eslint-plugin-jsdoc'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import cypress from 'eslint-plugin-cypress'
import vue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import babelParser from '@babel/eslint-parser'
import stylistic from '@stylistic/eslint-plugin'
const nuxtPackage = getPackageInfoSync('nuxt')

const baseRules = {
    ...js.configs.recommended.rules,
    'array-callback-return': ['warn', { checkForEach: true }],
    'camelcase': ['warn', {
        properties: 'always',
        ignoreDestructuring: false,
        ignoreImports: false,
        ignoreGlobals: false
    }],
    'for-direction': 'warn',
    'no-prototype-builtins': 'off',
    'no-self-compare': 'warn',
    'no-template-curly-in-string': 'off',
    'no-trailing-spaces': 'error',
    'no-unreachable': 'warn',
    'no-unused-vars': 'warn',
    'no-useless-escape': 'warn',
    'prefer-const': ['warn', { destructuring: 'any' }],
    'quote-props': ['warn', 'consistent-as-needed'],
    '@stylistic/array-bracket-newline': ['warn', 'consistent'],
    '@stylistic/array-bracket-spacing': ['warn', 'never'],
    '@stylistic/array-element-newline': ['warn', 'consistent'],
    '@stylistic/arrow-parens': ['warn', 'as-needed'],
    '@stylistic/arrow-spacing': 'warn',
    '@stylistic/block-spacing': 'warn',
    '@stylistic/brace-style': ['warn', '1tbs', { allowSingleLine: true }],
    '@stylistic/comma-dangle': ['warn', {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
    }],
    '@stylistic/comma-spacing': ['warn', { before: false, after: true }],
    '@stylistic/comma-style': ['warn', 'last'],
    '@stylistic/computed-property-spacing': ['warn', 'never'],
    '@stylistic/dot-location': ['warn', 'property'],
    '@stylistic/eol-last': 'warn',
    '@stylistic/function-call-spacing': ['warn', 'never'],
    '@stylistic/function-paren-newline': ['warn', 'consistent'],
    '@stylistic/generator-star-spacing': ['warn', { before: false, after: true }],
    '@stylistic/implicit-arrow-linebreak': ['warn', 'beside'],
    '@stylistic/indent': ['warn', 4, { SwitchCase: 1 }],
    '@stylistic/indent-binary-ops': ['warn', 4],
    '@stylistic/jsx-quotes': ['warn', 'prefer-double'],
    '@stylistic/key-spacing': 'warn',
    '@stylistic/keyword-spacing': ['warn', {
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
    '@stylistic/line-comment-position': ['warn', { position: 'above' }],
    '@stylistic/linebreak-style': ['warn', 'unix'],
    '@stylistic/lines-around-comment': ['warn', {
        beforeBlockComment: true,
        afterBlockComment: false,
        beforeLineComment: true,
        afterLineComment: false,
        allowBlockStart: true,
        allowBlockEnd: true,
        allowObjectStart: true,
        allowObjectEnd: true,
        allowArrayStart: true,
        allowArrayEnd: true
    }],
    '@stylistic/lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: true }],
    '@stylistic/max-len': ['warn', {
        code: 120,
        tabWidth: 4,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
    }],
    '@stylistic/max-statements-per-line': ['warn', { max: 1 }],
    '@stylistic/multiline-comment-style': ['warn', 'starred-block'],
    '@stylistic/multiline-ternary': ['warn', 'always-multiline'],
    '@stylistic/new-parens': 'warn',
    '@stylistic/newline-per-chained-call': ['warn', { ignoreChainWithDepth: 2 }],
    '@stylistic/no-confusing-arrow': ['warn', { allowParens: true }],
    '@stylistic/no-extra-parens': ['warn', 'all', {
        ignoreJSX: 'multi-line',
        nestedBinaryExpressions: false,
        returnAssign: false,
        enforceForArrowConditionals: false
    }],
    '@stylistic/no-extra-semi': 'warn',
    '@stylistic/no-floating-decimal': 'warn',
    '@stylistic/no-mixed-operators': 'warn',
    '@stylistic/no-mixed-spaces-and-tabs': 'error',
    '@stylistic/no-multi-spaces': 'warn',
    '@stylistic/no-multiple-empty-lines': ['warn', { max: 2, maxEOF: 1, maxBOF: 0 }],
    '@stylistic/no-tabs': 'error',
    '@stylistic/no-trailing-spaces': 'error',
    '@stylistic/no-whitespace-before-property': 'warn',
    '@stylistic/nonblock-statement-body-position': ['warn', 'beside'],
    '@stylistic/object-curly-newline': ['warn', { consistent: true }],
    '@stylistic/object-curly-spacing': ['warn', 'always', { objectsInObjects: false }],
    '@stylistic/object-property-newline': ['warn', { allowAllPropertiesOnSameLine: true }],
    '@stylistic/one-var-declaration-per-line': ['warn', 'always'],
    '@stylistic/operator-linebreak': ['warn', 'before'],
    '@stylistic/padded-blocks': ['warn', 'never'],
    '@stylistic/padding-line-between-statements': [
        'warn',
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
        { blankLine: 'always', prev: 'directive', next: '*' },
        { blankLine: 'any', prev: 'directive', next: 'directive' }
    ],
    '@stylistic/quote-props': ['warn', 'consistent-as-needed'],
    '@stylistic/quotes': ['warn', 'single', { avoidEscape: true }],
    '@stylistic/rest-spread-spacing': ['warn', 'never'],
    '@stylistic/semi': ['warn', 'never'],
    '@stylistic/semi-spacing': ['warn', { before: false, after: true }],
    '@stylistic/semi-style': ['warn', 'last'],
    '@stylistic/space-before-blocks': 'warn',
    '@stylistic/space-before-function-paren': ['warn', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
    '@stylistic/space-in-parens': ['warn', 'never'],
    '@stylistic/space-infix-ops': 'warn',
    '@stylistic/space-unary-ops': ['warn', { words: true, nonwords: false }],
    '@stylistic/spaced-comment': ['warn', 'always', {
        line: { markers: ['/'], exceptions: ['-', '+'] },
        block: { markers: ['*'], exceptions: ['*'], balanced: true }
    }],
    '@stylistic/switch-colon-spacing': 'warn',
    '@stylistic/template-curly-spacing': ['warn', 'never'],
    '@stylistic/template-tag-spacing': ['warn', 'never'],
    '@stylistic/wrap-iife': ['warn', 'inside'],
    '@stylistic/wrap-regex': 'warn',
    '@stylistic/yield-star-spacing': ['warn', 'after'],
    '@stylistic/member-delimiter-style': ['warn', {
        multiline: {
            delimiter: 'none',
            requireLast: false
        },
        singleline: {
            delimiter: 'semi',
            requireLast: false
        }
    }],
    '@stylistic/type-annotation-spacing': ['warn', {
        before: false,
        after: true,
        overrides: {
            arrow: {
                before: true,
                after: true
            }
        }
    }],
    '@stylistic/type-generic-spacing': 'warn',
    '@stylistic/type-named-tuple-spacing': 'warn',
    '@stylistic/jsx-child-element-spacing': 'warn',
    '@stylistic/jsx-closing-bracket-location': ['warn', 'line-aligned'],
    '@stylistic/jsx-closing-tag-location': 'warn',
    '@stylistic/jsx-curly-brace-presence': ['warn', 'never'],
    '@stylistic/jsx-curly-newline': ['warn', 'consistent'],
    '@stylistic/jsx-curly-spacing': ['warn', 'never'],
    '@stylistic/jsx-equals-spacing': ['warn', 'never'],
    '@stylistic/jsx-first-prop-new-line': ['warn', 'multiline-multiprop'],
    '@stylistic/jsx-function-call-newline': ['warn', 'multiline'],
    '@stylistic/jsx-indent-props': ['warn', 4],
    '@stylistic/jsx-max-props-per-line': ['warn', { maximum: 1, when: 'multiline' }],
    '@stylistic/jsx-newline': ['warn', { prevent: true }],
    '@stylistic/jsx-one-expression-per-line': ['warn', { allow: 'single-child' }],
    '@stylistic/jsx-pascal-case': 'warn',
    '@stylistic/jsx-props-no-multi-spaces': 'warn',
    '@stylistic/jsx-self-closing-comp': ['warn', { component: true, html: true }],
    '@stylistic/jsx-sort-props': ['warn', {
        callbacksLast: true,
        shorthandFirst: true,
        multiline: 'last',
        ignoreCase: true,
        reservedFirst: true
    }],
    '@stylistic/jsx-tag-spacing': ['warn', {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never'
    }],
    '@stylistic/jsx-wrap-multilines': ['warn', {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line'
    }]
}

const nuxtGlobals = {
    useAppConfig: 'readonly',
    useAsyncData: 'readonly',
    useCookie: 'readonly',
    useError: 'readonly',
    useFetch: 'readonly',
    useHeadSafe: 'readonly',
    useHead: 'readonly',
    useHydration: 'readonly',
    useLazyAsyncData: 'readonly',
    useLazyFetch: 'readonly',
    useNuxtApp: 'readonly',
    useNuxtData: 'readonly',
    useRequestEvent: 'readonly',
    useRequestHeaders: 'readonly',
    useRequestURL: 'readonly',
    useRoute: 'readonly',
    useRouter: 'readonly',
    useRuntimeConfig: 'readonly',
    useSeoMeta: 'readonly',
    useServerSeoMeta: 'readonly',
    useState: 'readonly',
    $fetch: 'readonly',
    abortNavigation: 'readonly',
    addRouteMiddleware: 'readonly',
    clearError: 'readonly',
    clearNuxtData: 'readonly',
    clearNuxtState: 'readonly',
    createError: 'readonly',
    defineNuxtComponent: 'readonly',
    defineNuxtRouteMiddleware: 'readonly',
    definePageMeta: 'readonly',
    navigateTo: 'readonly',
    onBeforeRouteLeave: 'readonly',
    onBeforeRouteUpdate: 'readonly',
    onNuxtReady: 'readonly',
    prefetchComponents: 'readonly',
    preloadComponents: 'readonly',
    preloadRouteComponents: 'readonly',
    refreshNuxtData: 'readonly',
    reloadNuxtApp: 'readonly',
    setPageLayout: 'readonly',
    setResponseStatus: 'readonly',
    showError: 'readonly',
    updateAppConfig: 'readonly'
}

const jsdocConfig = {
    files: ['**/*.js', '**/*.ts'],
    name: 'jsdoc',
    plugins: { jsdoc },
    rules: {
        'jsdoc/check-access': 'warn',
        'jsdoc/check-alignment': 'warn',
        'jsdoc/check-examples': 'off',
        'jsdoc/check-indentation': 'warn',
        'jsdoc/check-line-alignment': 'warn',
        'jsdoc/check-param-names': 'warn',
        'jsdoc/check-property-names': 'warn',
        'jsdoc/check-syntax': 'warn',
        'jsdoc/check-tag-names': 'warn',
        'jsdoc/check-types': 'warn',
        'jsdoc/check-values': 'warn',
        'jsdoc/empty-tags': 'warn',
        'jsdoc/implements-on-classes': 'warn',
        'jsdoc/match-description': 'warn',
        'jsdoc/multiline-blocks': 'warn',
        'jsdoc/no-bad-blocks': 'warn',
        'jsdoc/no-defaults': 'warn',
        'jsdoc/no-missing-syntax': 'off',
        'jsdoc/no-multi-asterisks': 'warn',
        'jsdoc/no-restricted-syntax': 'off',
        'jsdoc/no-types': 'off',
        'jsdoc/no-undefined-types': 'warn',
        'jsdoc/require-asterisk-prefix': 'warn',
        'jsdoc/require-description': 'warn',
        'jsdoc/require-description-complete-sentence': 'warn',
        'jsdoc/require-example': 'off',
        'jsdoc/require-file-overview': 'off',
        'jsdoc/require-hyphen-before-param-description': 'warn',
        'jsdoc/require-jsdoc': 'warn',
        'jsdoc/require-param': 'warn',
        'jsdoc/require-param-description': 'warn',
        'jsdoc/require-param-name': 'warn',
        'jsdoc/require-param-type': 'warn',
        'jsdoc/require-property': 'warn',
        'jsdoc/require-property-description': 'warn',
        'jsdoc/require-property-name': 'warn',
        'jsdoc/require-property-type': 'warn',
        'jsdoc/require-returns': 'warn',
        'jsdoc/require-returns-check': 'warn',
        'jsdoc/require-returns-description': 'warn',
        'jsdoc/require-returns-type': 'warn',
        'jsdoc/require-throws': 'warn',
        'jsdoc/require-yields': 'warn',
        'jsdoc/require-yields-check': 'warn',
        'jsdoc/tag-lines': 'warn',
        'jsdoc/valid-types': 'warn'
    }
}

const vueConfig = {
    files: ['**/*.vue'],
    languageOptions: {
        parser: vueParser,
        parserOptions: {
            parser: tseslint.parser,
            ecmaVersion: 'latest',
            sourceType: 'module'
        },
        globals: {
            ...nuxtPackage ? nuxtGlobals : {}
        }
    },
    plugins: {
        vue
    },
    rules: {
        ...vue.configs['flat/recommended'].rules,
        'vue/attribute-hyphenation': 'warn',
        'vue/attributes-order': 'warn',
        'vue/comment-directive': 'error',
        'vue/component-definition-name-casing': 'warn',
        'vue/block-order': 'warn',
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
        'vue/vue/no-setup-props-reactivity-loss': 'error',
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
        'vue/no-v-html': 'warn',
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
        'vue/valid-next-tick': 'error',
        'vue/valid-template-root': 'error',
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

const typescriptConfig = {
    files: ['**/*.ts', '**/*.tsx'],
    name: 'typescript specific config',
    languageOptions: {
        parser: tseslint.parser,
        parserOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module'
        }
    },
    plugins: {
        '@typescript-eslint': tseslint.plugin
    },
    rules: {
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-function': 'warn',
        '@typescript-eslint/no-empty-interface': 'warn',
        '@typescript-eslint/no-inferrable-types': 'warn',
        '@typescript-eslint/prefer-as-const': 'warn',
        '@typescript-eslint/prefer-namespace-keyword': 'warn',
        '@typescript-eslint/triple-slash-reference': 'warn',
        'no-undef': 'off',
        'no-unused-vars': 'off'
    }
}

const reactConfig = {
    files: ['**/*.jsx', '**/*.tsx'],
    languageOptions: {
        parserOptions: {
            ecmaFeatures: {
                jsx: true
            }
        }
    },
    plugins: {
        react
    },
    rules: {
        ...react.configs.recommended.rules,
        'react/react-in-jsx-scope': 'off'
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
}

const cypressConfig = {
    files: ['**/*.{cy,spec}.{js,ts,jsx,tsx}'],
    plugins: {
        cypress
    },
    rules: {
        ...cypress.configs.recommended.rules
    }
}

export default defineConfig([
    {
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            parser: babelParser,
            parserOptions: {
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
                window: 'readonly',
                document: 'readonly',
                console: 'readonly',
                process: 'readonly',
                Buffer: 'readonly',
                global: 'readonly',
                __dirname: 'readonly',
                __filename: 'readonly',
                exports: 'writable',
                module: 'writable',
                require: 'readonly',
                setTimeout: 'readonly',
                clearTimeout: 'readonly',
                setInterval: 'readonly',
                clearInterval: 'readonly',
                setImmediate: 'readonly',
                clearImmediate: 'readonly'
            }
        },
        plugins: {
            '@stylistic': stylistic
        },
        rules: baseRules
    },
    jsdocConfig,
    typescriptConfig,
    reactConfig,
    cypressConfig,
    vueConfig
])
