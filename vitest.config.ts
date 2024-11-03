import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environment: 'node',
    globals: true,
    include: ['src/**/*.test.{ts,tsx}'],
    coverage: {
      include: ['src/**/*'],
      reportsDirectory: 'test-unit-report',
      provider: 'v8',
      reporter: ['text', 'text-summary', 'html', 'lcov'],
      // thresholds: {
      //   branches: 90,
      //   functions: 90,
      //   lines: 90,
      //   statements: 90,
      // },
    },
  },
});
