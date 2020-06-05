require('newrelic');
const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 80;
// const HOST = process.env.HOST || 'localhost';

app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/:id', express.static(path.join(__dirname, 'public')));

// app.use('/product/:id', createProxyMiddleware({target: 'http://3.21.234.192:4200', changeOrigin: true}))
// app.use('/product/shop/:shopId', createProxyMiddleware({target: 'http://3.21.234.192:4200', changeOrigin: true}))
// app.use('/product/colors/:id', createProxyMiddleware({target: 'http://3.21.234.192:4200', changeOrigin: true}))
app.use('/api/reviews/:id', createProxyMiddleware({target: 'http://ec2-54-219-183-228.us-west-1.compute.amazonaws.com', changeOrigin: true}))
// app.use('/api/carousel/:id', createProxyMiddleware({target: 'http://ec2-54-193-220-25.us-west-1.compute.amazonaws.com:9000', changeOrigin: true}))
// app.use('/api/carouselEnlarged/:id', createProxyMiddleware({target: 'http://ec2-54-193-220-25.us-west-1.compute.amazonaws.com:9000', changeOrigin: true}))
// app.use('/products/:id', createProxyMiddleware({target: 'http://ec2-3-22-170-203.us-east-2.compute.amazonaws.com:4000', changeOrigin: true}))
// app.use('/get/random', createProxyMiddleware({target: 'http://ec2-3-22-170-203.us-east-2.compute.amazonaws.com:4000', changeOrigin: true}))

app.listen(PORT, (err) => {
  if (err) {
    console.error('Error starting  server', err);
  } else {
    console.log('server listening);
  }
});

