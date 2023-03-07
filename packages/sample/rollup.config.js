import typescript from 'rollup-plugin-typescript2';

export default {
  input: ['lib/sample.ts'],
  output: [
    {
      dir: 'dist',
      entryFileNames: '[name].js',
      format: 'cjs',
      exports: 'named',
    },
  ],
  plugins: [typescript()],
  external: ['react'],
};
