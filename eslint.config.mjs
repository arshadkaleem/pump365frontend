import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // This will allow any code by turning off all ESLint rules
      "no-restricted-syntax": "off",
      "no-unused-vars": "off",
      "no-console": "off",
      // Add more rules if needed to be turned off
    },
  },
];

export default eslintConfig;
