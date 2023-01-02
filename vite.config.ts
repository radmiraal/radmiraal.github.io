import { defineConfig } from 'vite'
import fs from 'fs'
import handlebars from 'vite-plugin-handlebars'

import { resolve } from 'path'

const viteConfig = {
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, 'partials'),
            reloadOnPartialChange: false
        })
    ],
    resolve: {},
    build: {
        outDir: 'docs'
    }
}

if (process.env.NODE_ENV !== 'production') {
    viteConfig.server = {
        https: {
            key: fs.readFileSync(process.env.HOME + '/.wings/persistent/ssl/certs/localhost.key'),
            cert: fs.readFileSync(process.env.HOME + '/.wings/persistent/ssl/certs/localhost.crt'),
            ca: fs.readFileSync(process.env.HOME + '/.wings/persistent/ssl/certs/_wings-ca-root-certificate.crt')
        }
    }
}

export default defineConfig(viteConfig)
