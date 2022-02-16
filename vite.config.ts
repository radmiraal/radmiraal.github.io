import {defineConfig} from 'vite'
import fs from 'fs'

const path = require('path');

const viteConfig = {
    plugins: [],
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
