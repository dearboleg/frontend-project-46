// import js from '@eslint/js'
// import globals from 'globals'
// import { defineConfig } from 'eslint/config'
// import stylistic from '@stylistic/eslint-plugin'

// export default defineConfig([
//   stylistic.configs.recommended,
//   { files: ['**/*.{js,mjs,cjs}'], plugins: { js }, extends: ['js/recommended'] },
//   { files: ['**/*.{js,mjs,cjs}'], languageOptions: { globals: globals.node } },
// ])
import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'
import stylistic from '@stylistic/eslint-plugin'

export default defineConfig([
  stylistic.configs.recommended,
  { files: ['**/*.{js,mjs,cjs}'], plugins: { js }, extends: ['js/recommended'] },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.node,

        describe: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeAll: 'readonly',
        beforeEach: 'readonly',
        afterAll: 'readonly',
        afterEach: 'readonly',
        jest: 'readonly',
        it: 'readonly',
      },
    },
  },
])
