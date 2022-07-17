// fastify app
const fastify = require('fastify')()

fastify
  .register(require('fastify-nextjs'))
  .after(() => {
    fastify.next('/')
    fastify.next('/about')
    fastify.next('/greet/:user')
    fastify.get('/contacts', (req, reply) => {
      reply
        .type('html')
        .send('<h1>Contact page</h1>')
    })
  })

fastify.listen(3000, () => {
  console.log('Server listening on http://localhost:3000')
})

// next app
// const { parse } = require('url')
// const express = require('express')
// const next = require('next')

// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev })

// async function main() {
//   try {
//     await app.prepare()
//     const handle = app.getRequestHandler()
//     const server = express()
//     server
//       .get('/', (req, res) => {
//         res.send('Hello World!')
//       })
//       .get('/about', (req, res) => {
//         const { query } = parse(req.url, true)
//         app.render(req, res, '/about', query)
//       })
//       .get('api/greet', (req, res) => {
//         res.json({ name: req.query?.name ?? 'unknown' })
//       })
//       // Recogunize NextJS to next app
//       .get(/_next\/.+/, (req, res) => {
//         const parsedUrl = parse(req.url, true)
//         handle(req, res, parsedUrl)
//       })
//       .listen(3000, () => console.log('server ready'))
//   } catch (err) {
//     console.log(err.static)
//   }
// }

// main()
