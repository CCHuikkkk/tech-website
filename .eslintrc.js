module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'plugin:vue/vue3-essential', // Vue 3 的基本规则
      'eslint:recommended',        // ESLint 推荐规则
    ],
    parserOptions: {
      parser: 'babel-eslint',
    },
    rules: {
      // 自定义规则，例如：
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'vue/multi-word-component-names': ['error', {
          ignores: ['Companfile'] // 忽略特定组件名
        }]
    },
  };