import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import { libInjectCss } from 'vite-plugin-lib-inject-css';
export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, "lib/index.ts"),
            formats: ['es', 'umd'],
            name: "Jarvis",
            fileName: function (format) { return "index.".concat(format, ".js"); },
        },
        rollupOptions: {
            external: ["react", "react-dom"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        },
        sourcemap: true,
        emptyOutDir: true,
    },
    plugins: [react(), dts(), libInjectCss()],
});
