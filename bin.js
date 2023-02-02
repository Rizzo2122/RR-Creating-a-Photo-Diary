#!/usr/bin/env node
const open = require('open')
const { exec, spawn } = require('child_process')
exec('npx webpack --mode="development"', () => {
    spawn('npx', ['webpack', '--watch', '--mode="development"'], { stdio: 'inherit', shell: process.platform == 'win32' });
    open('./public/index.html')
    console.log('Watching for changes in "./src"')
})

spawn('node', ['script.js'], {
    env: {
        NODE_ENV: 'production',
        PATH: process.env.PATH
    }
})
