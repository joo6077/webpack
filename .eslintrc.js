module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    // 겹치는 설정들 끄기
    "eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  // prettier 어길 시 에러 발생
  rules: {
    "prettier/prettier": "error",
  },
  // prettier plugin 추가
  plugins: ["prettier"],
};
