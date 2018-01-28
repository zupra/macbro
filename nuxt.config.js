// https://github.com/nuxt/nuxt.js/issues/1348
//'~/assets/images/gadgets.png'


const OG = [
  //{ hid: 'og-image', property: 'og-image', content: this.prodBaseUrl + socialImage }
  { hid: 'og:image', property: 'og:image', content: '' },
];


module.exports = {

  plugins: [
    { src: '~plugins/ga.js', ssr: false }
  ],

  // Headers
  head: {
    title: 'Ремонт Apple в Москве',
    meta: [
      { charset: 'utf-8' },
      //{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Ремонт iPhone IPad MacBook' },
      ...OG

      
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // main Styl
  css: [
    { src: '~assets/styl/main.styl', lang: 'stylus' }
  ],


  //Customize the progress-bar color
  loading: { color: '#3B8070' },
  //loading: '~/components/loading.vue',
  
  

  build: {
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          // Run ESLINT on save
          //loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
