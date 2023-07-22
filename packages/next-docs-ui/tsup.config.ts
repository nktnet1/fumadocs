import { defineConfig } from "tsup";
import tsconfig from "./tsconfig.json";

export default defineConfig({
    entry: ["./src/{contentlayer,mdx}/index.{ts,tsx}", "./src/*.{ts,tsx}"],
    format: "esm",
    dts: true,
    target: tsconfig.compilerOptions.target as "es2016",
});
