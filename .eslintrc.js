module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    jest: true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:storybook/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    ecmaFeatures: {
      jsx: true,
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "react"
  ],
  "rules": {
    // отступы в jsx - 2-правило работает (или "warning"), к-во пробелов - 2
    'react/jsx-indent': [2, 2],
    // отступы в пропсах в jsx
    'react/jsx-indent-props': [2, 2],
    // отступы не в jsx
    indent: [2, 2],
    // расширенияЮ где разрешен jsx
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
    // отключаем правило для ошибки на абсолютные пути
    'import/no-unresolved': 'off',
    // отключаем ошибку на предпочтительность дефолтного экспорта
    'import/prefer-default-export': 'off',
    // на неиспользуемые переменные - warn, но не error
    'no-unused-vars': 'warn',
    "@typescript-eslint/no-unused-vars": 'warn',
    // отключаем ошибку на обязательное дефолтное значение для не обязательных ключей массива
    'react/require-default-props': 'off',
    // отключаем ошибку на обязательный импорт react
    'react/react-in-jsx-scope': 'off',
    // использование спред для пропсов - предупреждать
    'react/jsx-props-no-spreading': 'warn',
    // предпочтительна function declaration для функций - отключаем
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    // отсутствие расширения для импортов - отключаем
    'import/extensions': 'off',
    // ругается на импорт webpack - отключаем
    'import/no-extraneous-dependencies': 'off',
    // разрешим нижние подчеркивания в названиях переменных
    'no-underscore-dangle': 'off',
    // будет подсвечивать отсутствие переводов только в js
  },
  settings: {
    react: {
      version: "detect",
    }
  }
}
