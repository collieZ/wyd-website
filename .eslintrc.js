module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  globals: {
    jQuery: true,
    $: true,
    Swiper: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended'],
  // add your custom rules here 添加你不想配置
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
}
