module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:storybook/recommended",
    "plugin:i18next/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "@typescript-eslint",
    "react",
    "i18next",
    "import"
  ],
  rules: {
    // отступы в jsx - 2-правило работает (или "warning"), к-во пробелов - 2
    "react/jsx-indent": [2, 2],
    // отступы в пропсах в jsx
    "react/jsx-indent-props": [2, 2],
    // отступы не в jsx
    "indent": [2, 2],
    // расширения, где разрешен jsx
    "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", ".tsx"] }],
    // отключаем правило для ошибки на абсолютные пути
    "import/no-unresolved": "off",
    // отключаем ошибку на предпочтительность дефолтного экспорта
    "import/prefer-default-export": "off",
    // на неиспользуемые переменные - warn, но не error
    "no-unused-vars": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-var-requires": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    // отключаем ошибку на обязательное дефолтное значение для не обязательных ключей массива
    "react/require-default-props": "off",
    // отключаем ошибку на обязательный импорт react
    "react/react-in-jsx-scope": "off",
    // использование спред для пропсов - предупреждать
    "react/jsx-props-no-spreading": "warn",
    // предпочтительна function declaration для функций - отключаем
    "react/function-component-definition": "off",
    "no-shadow": "off",
    // отсутствие расширения для импортов - отключаем
    "import/extensions": "off",
    // ругается на импорт webpack - отключаем
    "import/no-extraneous-dependencies": "off",
    // разрешим нижние подчеркивания в названиях переменных
    "no-underscore-dangle": "off",
    // ошибка, н-р, в React.memo
    "react/display-name": "off",
    // будет подсвечивать отсутствие переводов только в jsx
    "i18next/no-literal-string": ["warn", { markupOnly: true }],
    // this is for sorting WITHIN an import
    "sort-imports": ["error", { ignoreCase: true, ignoreDeclarationSort: true }],
    // this is for sorting imports
    "import/order": [
      "error",
      {
        groups: [
          ["external", "builtin"],
          "internal",
          ["sibling", "parent"],
          "index",
        ],
        pathGroups: [
          {
            pattern: "@(react|react-native)",
            group: "external",
            position: "before",
          },
          {
            pattern: "@src/**",
            group: "internal",
          },
        ],
        pathGroupsExcludedImportTypes: ["internal", "react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    }
  }
}
