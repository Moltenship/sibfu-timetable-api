module.exports = {
  root: true,
  ignorePatterns: [
    'projects/**/*',
    'extra-webpack.config.js',
    'polyfills.ts',
    'environments/',
    '.eslintrc.js',
    'vite.config.ts'
  ],
  plugins: [
    'jsdoc',
  ],
  overrides: [
    {
      parser: '@typescript-eslint/parser',
      files: [
        '*.tsx', '*.ts',
      ],
      parserOptions: {
        project: [
          'tsconfig.json',
        ],
        tsconfigRootDir: __dirname, // https://github.com/typescript-eslint/typescript-eslint/issues/251
      },
      extends: [
        "airbnb",
        'plugin:@typescript-eslint/recommended',
        'plugin:jsdoc/recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      rules: {
        '@typescript-eslint/consistent-type-definitions': 'error',
        '@typescript-eslint/ban-types': [
          'error',
          {
            'types': {
              /**
               * We need that to use `extends object` in custom types.
               * https://github.com/typescript-eslint/typescript-eslint/issues/2068
               */
              'object': false
            },
            'extendDefaults': true
          }
        ],
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-parameter-properties': [
          'error',
          {
            allows: [
              "private",
              "private readonly",
              "protected readonly",
              "public readonly"
            ],
          },
        ],
        '@typescript-eslint/explicit-module-boundary-types': [
          'error',
          {
            allowArgumentsExplicitlyTypedAsAny: true, // For legacy parts usage.
          },
        ],
        '@typescript-eslint/no-magic-numbers': [
          'off',
          {
            ignore: [0, 1, -1, 2, 100],
            ignoreEnums: true,
            ignoreNumericLiteralTypes: true,
            ignoreReadonlyClassProperties: true,
            ignoreDefaultValues: true,
          }
        ],
        '@typescript-eslint/comma-spacing': 'error',
        'default-param-last': 'off',
        '@typescript-eslint/default-param-last': 'error',
        '@typescript-eslint/dot-notation': 'error',
        '@typescript-eslint/keyword-spacing': 'error',
        '@typescript-eslint/no-throw-literal': 'error',
        '@typescript-eslint/no-unused-expressions': 'error',
        '@typescript-eslint/quotes': ['error', 'single'],
        '@typescript-eslint/return-await': 'error',
        '@typescript-eslint/no-empty-function': 'warn',
        'camelcase': 'off',
        'capitalized-comments': [
          'error',
          'always'
        ],
        'import/no-deprecated': 'error',
        // JSDoc override.
        'jsdoc/require-param': [
          'error',
          {
            enableFixer: false,
          }
        ],
        'jsdoc/require-example': 'off',
        'jsdoc/require-file-overview': 'off',
        'jsdoc/require-hyphen-before-param-description': 'off',
        'jsdoc/require-param-type': 'off',
        'jsdoc/require-returns': 'off',
        'jsdoc/require-property': 'error',
        'jsdoc/require-property-description': 'error',
        'jsdoc/require-returns-check': 'off',
        'jsdoc/require-returns-type': 'off',
        'jsdoc/check-access': 'off',
        'jsdoc/empty-tags': 'off',
        'jsdoc/check-tag-names': 'off',
        /**
         * The rule to show an error if result of fork-like
         * method is not used.
         */
        'no-restricted-syntax': [
          'error',
          {
            'selector': 'ExpressionStatement[expression.type="CallExpression"][expression.callee.type="MemberExpression"][expression.callee.property.name=/fork.*/]',
            'message': 'Unused fork-like method result.',
          },
        ],
        'arrow-parens': ["error", "as-needed"],
        "getter-return": "error",
        "no-async-promise-executor": "error",
        "no-await-in-loop": "error",
        "no-compare-neg-zero": "error",
        "no-cond-assign": "error",
        "no-console": "warn",
        "no-constant-condition": "error",
        "no-control-regex": "error",
        "no-dupe-args": "error",
        "no-dupe-else-if": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-empty": "error",
        "no-empty-character-class": "error",
        "no-ex-assign": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-semi": "error",
        "no-func-assign": "error",
        "no-import-assign": "error",
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": "error",
        "no-loss-of-precision": "error",
        "no-misleading-character-class": "error",
        "no-obj-calls": "error",
        "no-promise-executor-return": "error",
        "no-prototype-builtins": "error",
        "no-regex-spaces": "error",
        "no-setter-return": "error",
        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error",
        "no-unexpected-multiline": "error",
        "no-unreachable": "error",
        "no-unreachable-loop": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-unsafe-optional-chaining": "error",
        "require-atomic-updates": "error",
        "use-isnan": "error",
        "curly": ["error", "all"],
        "default-case": "error",
        "default-case-last": "error",
        "dot-location": ["error", "property"],
        "dot-notation": "error",
        "eqeqeq": ["error", "smart"],
        "no-alert": "error",
        "no-caller": "error",
        "no-case-declarations": "error",
        "no-constructor-return": "error",
        "no-else-return": "error",
        "no-empty-function": [
          "warn",
          {
            "allow": ["constructors"]
          }
        ],
        "no-empty-pattern": "error",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-fallthrough": "error",
        "no-floating-decimal": "error",
        "no-global-assign": "error",
        "no-implied-eval": "error",
        "no-iterator": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-loop-func": "error",
        "no-magic-numbers": "off",
        "no-multi-spaces": "error",
        "no-multi-str": "off",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-nonoctal-decimal-escape": "error",
        "no-octal": "error",
        "no-octal-escape": "error",
        "no-param-reassign": "off",
        "no-proto": "error",
        "no-return-assign": "error",
        "no-return-await": "error",
        "no-script-url": "error",
        "no-self-assign": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-throw-literal": "error",
        "no-unused-expressions": "error",
        "no-useless-call": "error",
        "no-useless-catch": "error",
        "no-useless-concat": "error",
        "no-useless-escape": "error",
        "no-useless-return": "error",
        "no-with": "error",
        "prefer-named-capture-group": "off",
        "prefer-promise-reject-errors": "error",
        "radix": "error",
        "require-await": "error",
        "require-unicode-regexp": "off",
        "yoda": [
          "error",
          "never",
          {
            "exceptRange": true
          }
        ],
        "no-delete-var": "error",
        "no-shadow-restricted-names": "error",
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": ["error"],
        "array-bracket-newline": [
          "error",
          {
            "multiline": true
          }
        ],
        "array-bracket-spacing": ["error", "never"],
        "array-element-newline": ["error", "consistent"],
        "@typescript-eslint/brace-style": ["error", "1tbs"],
        "comma-spacing": [
          "error",
          {
            "before": false,
            "after": true
          }
        ],
        "comma-style": "error",
        "computed-property-spacing": ["error", "never"],
        "eol-last": "error",
        "func-call-spacing": ["error", "never"],
        "func-name-matching": "error",
        "function-call-argument-newline": ["error", "consistent"],
        "function-paren-newline": ["error", "consistent"],
        "key-spacing": [
          "error",
          {
            "mode": "strict"
          }
        ],
        "keyword-spacing": [
          "error",
          {
            "after": true,
            "before": true
          }
        ],
        "line-comment-position": [
          "error",
          {
            "position": "above"
          }
        ],
        "linebreak-style": "off",
        "lines-around-comment": [
          "error",
          {
            "beforeLineComment": true,
            "allowBlockStart": true,
            "allowBlockEnd": true,
            "allowObjectStart": true,
            "allowObjectEnd": true,
            "allowArrayStart": true,
            "allowArrayEnd": true,
            "allowClassStart": true,
            "allowClassEnd": true
          }
        ],
        "lines-between-class-members": ["error", "always"],
        "max-depth": ["error", 3],
        "max-len": [
          "error",
          {
            "code": 140
          }
        ],
        "max-lines": "off",
        "max-lines-per-function": 'off',
        "max-params": "off",
        "max-statements-per-line": [
          "error",
          {
            "max": 1
          }
        ],
        "no-lonely-if": "error",
        "no-mixed-spaces-and-tabs": "error",
        "no-multi-assign": "error",
        "no-multiple-empty-lines": "error",
        "no-negated-condition": "off",
        "no-nested-ternary": "error",
        "no-new-object": "error",
        "no-tabs": "error",
        "no-trailing-spaces": "error",
        "no-underscore-dangle": "off",
        "no-unneeded-ternary": "error",
        "no-whitespace-before-property": "error",
        "object-curly-newline": [
          "error",
          {
            "multiline": true,
            "consistent": true
          }
        ],
        "object-curly-spacing": ["error", "always"],
        "object-property-newline": [
          "error",
          {
            "allowAllPropertiesOnSameLine": true
          }
        ],
        "one-var": ["error", "never"],
        "operator-assignment": "error",
        "operator-linebreak": ["error", "after"],
        "prefer-exponentiation-operator": "error",
        "prefer-object-spread": "error",
        "quote-props": ["error", "consistent-as-needed"],
        "quotes": [
          "error",
          "single",
          {
            "allowTemplateLiterals": true
          }
        ],
        "semi-style": ["error", "last"],
        "space-before-blocks": "error",
        "space-before-function-paren": ["error", "never"],
        "space-in-parens": ["error", "never"],
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "spaced-comment": ["error", "always"],
        "switch-colon-spacing": "error",
        "template-tag-spacing": ["error", "never"],
        "arrow-body-style": ["error", "as-needed"],
        "arrow-parens": ["error", "as-needed"],
        "arrow-spacing": "error",
        "object-shorthand": [
          "error",
          "always",
          {
            "avoidExplicitReturnArrows": true
          }
        ],
        "no-restricted-imports": [
          "error",
          {
            "paths": ["rxjs/Rx"]
          }
        ],
        "no-bitwise": "error",
        "no-undef-init": "error",
        "no-debugger": "off",
        "new-parens": "error",
        "newline-per-chained-call": [
          "error",
          {
            "ignoreChainWithDepth": 2
          }
        ],
        "no-array-constructor": "error",
        "no-class-assign": "error",
        "no-duplicate-imports": "error",
        "no-this-before-super": "error",
        "no-use-before-define": "off",
        "no-useless-computed-key": "error",
        "no-useless-rename": "error",
        "no-var": "error",
        "prefer-arrow-callback": "error",
        "prefer-const": "error",
        "prefer-arrow/prefer-arrow-functions": "off",
        "prefer-destructuring": [
          "error",
          {
            "object": true,
            "array": false
          }
        ],
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "require-yield": "error",
        "rest-spread-spacing": ["error", "never"],
        "template-curly-spacing": ["error", "never"],
        "symbol-description": "error",
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/restrict-plus-operands": "error",
        "@typescript-eslint/explicit-member-accessibility": "error",
        "@typescript-eslint/member-ordering": "error",
        "@typescript-eslint/naming-convention": [
          "warn",
          {
            "selector": "default",
            "format": ["camelCase", "PascalCase"],
            "leadingUnderscore": "allow",
            "trailingUnderscore": "allow"
          },
          {
            "selector": "variable",
            "format": ["camelCase", "UPPER_CASE", "PascalCase"],
            "leadingUnderscore": "allow",
            "trailingUnderscore": "allow"
          },
          {
            "selector": "typeLike",
            "format": ["PascalCase"]
          },
          {
            "selector": "enumMember",
            "format": ["PascalCase"]
          }
        ],
        "@typescript-eslint/no-confusing-non-null-assertion": "error",
        "@typescript-eslint/no-implicit-any-catch": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-require-imports": "error",
        "@typescript-eslint/prefer-includes": "error",
        "@typescript-eslint/prefer-nullish-coalescing": "error",
        "@typescript-eslint/prefer-optional-chain": "error",
        "@typescript-eslint/require-array-sort-compare": "error",
        "@typescript-eslint/switch-exhaustiveness-check": "error",
        "@typescript-eslint/no-empty-interface": [
          "error",
          {
            "allowSingleExtends": false
          }
        ],
        "@typescript-eslint/no-inferrable-types": "error",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-non-null-assertion": "warn",
        "@typescript-eslint/no-unused-vars": [
          "off",
        ],
        "@typescript-eslint/type-annotation-spacing": "error",
        "@typescript-eslint/unified-signatures": "error",
        "@typescript-eslint/explicit-function-return-type": [
          "error",
          {
            "allowExpressions": true
          }
        ],
        "jsdoc/require-description-complete-sentence": [
          "error",
          {
            "tags": ["see", "copyright"]
          }
        ],
        "jsdoc/require-param": "off",
        "jsdoc/require-param-name": "warn",
        "jsdoc/require-param-description": "warn",
        "jsdoc/no-types": "off",
        "import/no-unresolved": "off",
        "import/extensions": "off",
        "import/export": "off",
        "import/prefer-default-export": "off",
        "@typescript-eslint/comma-dangle": [
          "error",
          {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "always-multiline",
            "exports": "always-multiline",
            "functions": "always-multiline",
            "enums": "always-multiline",
            "generics": "always-multiline",
            "tuples": "always-multiline"
          }
        ],
        "func-style": [
          "error",
          "declaration",
          {
            "allowArrowFunctions": true
          }
        ],
        "@typescript-eslint/semi": ["error", "always"],
        "@typescript-eslint/member-delimiter-style": [
          "error",
          {
            "multiline": {
              "delimiter": "semi",
              "requireLast": true
            },
            "singleline": {
              "delimiter": "semi",
              "requireLast": true
            }
          }
        ],
        "indent": "off",
        "@typescript-eslint/indent": [
          "error",
          2,
          {
            "SwitchCase": 1,
            "ignoredNodes": [
              "TSTypeAliasDeclaration *",
              "TSTypeParameterInstantiation > *",
              "TSTypeAnnotation",
              "ArrowFunctionExpression Identifier",
              "ArrowFunctionExpression BlockStatement"
            ]
          }
        ],
        "implicit-arrow-linebreak": 0,
        "no-dupe-class-members": 0,
        "class-methods-use-this": 0,
        "jsdoc/check-alignment": "warn",
        "jsdoc/newline-after-description": ["warn", "never"],
        "jsdoc/no-bad-blocks": "warn",
        "jsdoc/require-jsdoc": [
          "warn",
          {
            "contexts": [
              "MethodDefinition:not([accessibility='private'])",
              "ClassDeclaration",
              "ClassProperty:not([accessibility='private'])",
              "TSEnumDeclaration",
              "ExportNamedDeclaration[declaration.type=\"TSInterfaceDeclaration\"]",
              "TSInterfaceDeclaration :matches(TSCallSignatureDeclaration, TSMethodSignature, TSPropertySignature)"
            ],
            "checkConstructors": false,
            "checkGetters": true,
            "checkSetters": true,
            "enableFixer": false,
            "require": {
              "ArrowFunctionExpression": true,
          }
          }
        ]
      },
    },
  ],
};
