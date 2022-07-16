const { parse } = require('url')
const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

async function main() {
  try {
    await app.prepare()
    const handle = app.getRequestHandler()
    const server = express()
    server.get('*', (req, res) => {
      const url = parse(req.url, true)
      handle(req, res, url)
    })
      .listen(3000, () => console.log('server ready'))
  } catch (err) {
    console.log(err.static)
  }
}

main()
