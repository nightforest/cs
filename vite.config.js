import { defineConfig } from "vite"
import pugPlugin from "vite-plugin-pug"
import { resolve } from "path"

const options = { pretty: true }
const locals = { name: "My Pug" }

export default defineConfig({
    plugins: [pugPlugin(options, locals)],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                facade: resolve(__dirname, 'facade-engineering.html'),
                glass: resolve(__dirname, 'glass-structures.html'),
                projects: resolve(__dirname, 'projects.html'),
                steel: resolve(__dirname, 'steel-structures.html'),
                metal: resolve(__dirname, 'metal-constructions.html'),
                contacts: resolve(__dirname, 'contacts.html'),
            },
        },
    },
})
