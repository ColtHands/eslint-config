import { defineConfig } from "eslint/config";
import { getPackageInfoSync } from 'local-pkg'
import js from '@eslint/js'
import jsdoc from 'eslint-plugin-jsdoc'
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react'
import cypress from 'eslint-plugin-cypress'
import vue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import babelParser from "@babel/eslint-parser";
const nuxtPackage = getPackageInfoSync('nuxt')

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
        rules: {
            ...js.configs.recommended.rules,
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
        }
    },
    {
        files: ['*.js', '*.ts'],
        plugins: { jsdoc },
        rules: {
            'jsdoc/check-access': "warn",
            'jsdoc/check-alignment': "warn",
            'jsdoc/check-examples': "off",
            'jsdoc/check-indentation': "warn",
            'jsdoc/check-line-alignment': "warn",
            'jsdoc/check-param-names': "warn",
            'jsdoc/check-property-names': "warn",
            'jsdoc/check-syntax': "warn",
            'jsdoc/check-tag-names': "warn",
            'jsdoc/check-types': "warn",
            'jsdoc/check-values': "warn",
            'jsdoc/empty-tags': "warn",
            'jsdoc/implements-on-classes': "warn",
            'jsdoc/match-description': "warn",
            'jsdoc/multiline-blocks': "warn",
            'jsdoc/newline-after-description': "warn",
            'jsdoc/no-bad-blocks': "warn",
            'jsdoc/no-defaults': "warn",
            'jsdoc/no-missing-syntax': "warn",
            'jsdoc/no-multi-asterisks': "warn",
            'jsdoc/no-restricted-syntax': "off",
            'jsdoc/no-types': "off",
            'jsdoc/no-undefined-types': "warn",
            'jsdoc/require-asterisk-prefix': "warn",
            'jsdoc/require-description': ["warn", { descriptionStyle: 'any' }],
            'jsdoc/require-description-complete-sentence': "warn",
            'jsdoc/require-example': "off",
            'jsdoc/require-file-overview': "warn",
            'jsdoc/require-hyphen-before-param-description': "warn",
            'jsdoc/require-jsdoc': "warn",
            'jsdoc/require-param': "warn",
            'jsdoc/require-param-description': "warn",
            'jsdoc/require-param-name': "warn",
            'jsdoc/require-param-type': "warn",
            'jsdoc/require-property': "warn",
            'jsdoc/require-property-description': "warn",
            'jsdoc/require-property-name': "warn",
            'jsdoc/require-property-type': "warn",
            'jsdoc/require-returns': "warn",
            'jsdoc/require-returns-check': "warn",
            'jsdoc/require-returns-description': "warn",
            'jsdoc/require-returns-type': "warn",
            'jsdoc/require-throws': "warn",
            'jsdoc/require-yields': "warn",
            'jsdoc/require-yields-check': "warn",
            'jsdoc/tag-lines': "warn",
            'jsdoc/valid-types': "warn"
        }
    },
    {
        files: ['*.ts', '*.tsx'],
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
            ...js.configs.recommended.rules,
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
    },
    {
        files: ['*.jsx', '*.tsx'],
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
    },
    {
        files: ['**/*.{cy,spec}.{js,ts,jsx,tsx}'],
        plugins: {
            cypress
        },
        rules: {
            ...cypress.configs.recommended.rules
        }
    },
    {
        files: ['**/*.vue'],
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                parser: tseslint.parser,
                ecmaVersion: 'latest',
                sourceType: 'module'
            },
            globals: {
                ...(nuxtPackage ? nuxtGlobals : {})
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
])