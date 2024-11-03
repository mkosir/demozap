import { defineConfig } from 'tsup';

const tsupConfig = defineConfig({
  entry: ['src/index.ts'],
  outDir: './dist',
  format: ['esm'],
  clean: true,
  // dts: true,
  minify: true,
  tsconfig: 'scripts/tsconfig.tsup.json',
});

// eslint-disable-next-line
export default tsupConfig;
