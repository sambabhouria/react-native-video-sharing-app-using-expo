// https://docs.expo.dev/guides/using-eslint/
//https://dev.to/msoup/fixing-require-statement-not-part-of-import-statementeslinttypescript-eslintno-var-requires-25n3
// https://github.com/eslint/eslint/blob/main/package.json
// https://medium.com/how-to-react/config-eslint-and-prettier-in-visual-studio-code-for-react-js-development-97bb2236b31a
//https://github.com/airbnb/javascript
//https://www.youtube.com/watch?v=lGCHjQl6XLw
// https://www.youtube.com/watch?v=lHAeK8t94as
//https://github.com/microsoft/vscode-eslint
// https://github.com/xcarpentier/ex-react-native-i18n/blob/master/vendor/i18n.js
// https://github.com/i18next/react-i18next/tree/master/example/v9.x.x/reactnative-expo
//https://www.npmjs.com/package/react-i18next
// https://github.com/i18next/react-i18next/tree/master
// https://medium.com/@lasithherath00/implementing-react-native-i18n-and-language-selection-with-asyncstorage-b24ae59e788e
//https://github.com/i18next/react-i18next/blob/master/example/v9.x.x/reactnative-expo/App.js
// npx eslint --init
// https://docs.expo.dev/bare/overview/ (usefull link)
//https://github.com/AlexanderZaytsev/react-native-i18n/blob/master/example/src/App.js
// https://github.com/AlexanderZaytsev/react-native-i18n/blob/master/example/src/App.js
// https://docs.expo.dev/guides/localization/#complete-example
module.exports = {
  // overrides: [
  //   {
  //     files: ['**/*.spec.js', '**/*.spec.jsx'],
  //     env: {
  //       jest: true,
  //     },
  //   },
  // ],
  env: {
    jest: true,
  },

  extends: [
    'expo',
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  // plugins: ['prettier'],
  plugins: ['prettier', '@typescript-eslint', 'react', 'react-hooks'],
  rules: {
    semi: 0,
    // 'prettier/prettier': 'error',
    'no-unused-vars': 'warn',
    // "no-unused-vars": 1,
    'no-console': 0,
    // 'no-console': 'warn',
    'no-unreachable': 'warn',
    'react-hooks/rules-of-hooks': 'error', // For checking rules of hooks
    'react-hooks/exhaustive-deps': 'error', // For checking hook dependencies
    'no-irregular-whitespace': 0,
    '@typescript-eslint/no-var-requires': 0, // Fixing "Require statement not part of import statement.eslint[@typescript-eslint/no-var-requires]"
    //add customize rules here as per your project's needs
  },
}
