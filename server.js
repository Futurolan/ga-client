const express = require('express')
const next = require('next')
const path = require('path')
const sm = require('sitemap')
const config = require('./config/config.js')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const sitemap = sm.createSitemap({
  hostname: process.env.BASE_URL,
  cacheTime: 600000,
  urls: [
    { url: '/', changefreq: 'weekly', priority: 1 }
  ]
})

if (config.news.active) sitemap.add({ url: '/news', changefreq: 'monthly', priority: 0.9 })
if (config.tournaments.active) sitemap.add({ url: '/tournois', changefreq: 'monthly', priority: 0.9 })
if (config.info.active) sitemap.add({ url: '/infos', changefreq: 'monthly', priority: 0.9 })
if (config.partners.active) sitemap.add({ url: '/partenaires', changefreq: 'monthly', priority: 0.9 })
if (config.contact.active) sitemap.add({ url: '/contacts', changefreq: 'yearly', priority: 0.5 })
if (config.press.active) sitemap.add({ url: '/espace-presse', changefreq: 'yearly', priority: 0.5 })
if (config.legals.active) sitemap.add({ url: '/mentions-legales', changefreq: 'yearly', priority: 0.5 })
if (config.recruit.active) sitemap.add({ url: '/recrutement', changefreq: 'yearly', priority: 0.5 })

app.prepare()
  .then(() => {
    const server = express()

    server.get('/robots.txt', (req, res) => {
      return res.sendFile(path.join(__dirname, './static', 'robots.txt'))
    })

    server.get('/humans.txt', (req, res) => {
      return res.sendFile(path.join(__dirname, './static', 'humans.txt'))
    })

    server.get('/sitemap.xml', function (req, res) {
      sitemap.toXML(function (err, xml) {
        if (err) {
          return res.status(500).end()
        }
        res.header('Content-Type', 'application/xml')
        res.send(xml)
      })
    })

    server.get('/news/:nid', (req, res) => {
      return app.render(req, res, '/news-single', { nid: req.params.nid })
    })

    server.get('/tournament/:nid', (req, res) => {
      return app.render(req, res, '/tournament-single', { nid: req.params.nid })
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
