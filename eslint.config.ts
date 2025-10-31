import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {},
    rules: {
      '@typescript-eslint/no-explicit-any': ['off'],
      'vue/no-multiple-template-root': 'off',
      'vue/no-v-model-argument': 'off',
      'vue/no-v-html': 'off',
      'no-debugger': 2, // 不能debugg
      'no-empty': 2, // 块语句中的内容不能为空
      'no-extra-parens': 2, // 禁止非必要的括号
      'no-extra-semi': 2, // 禁止多余的冒号
      'comma-dangle': 'off', // 键值对最后一个不能有,
      'spaced-comment': ['error', 'always'] // 注释必须空格
    }
  },
  js.configs.recommended,
  tseslint.configs.recommended,
  pluginVue.configs['flat/essential'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser
      }
    }
  }
])
