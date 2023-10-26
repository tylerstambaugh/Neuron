import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist/",
    lib: {
      entry: "./src/",
      name: "NeuronGSM",
      fileName: "index",
    },
    rollupOptions: {
      output: {},
    },
  },
  //plugins: [react()],
});
