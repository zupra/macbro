<template lang="pug">
  #TPL
    #topNav
      .WrC.flex_sb
        nav
          nuxt-link(to="/") Home
          nuxt-link(to="/x") Контакты
          // a(href="#") Контакты
          //a(href="#")
          //a(href="#") Сотрудничество
          nuxt-link(to="/cooperation") Сотрудничество
        button Статус Заказа
    .WrC
      <nuxt/>

    #gmap-container
    
    #footer.flex
      form
        input(type="text", placeholder="Email")
        textarea(placeholder="Сообщение")
        button.btn Отправить
      nav
        a(href="#") Link
        a(href="#") Link
        a(href="#") Link
      nav
        a(href="#") Link
        a(href="#") Link
        a(href="#") Link
      nav
        a(href="#") Link
        a(href="#") Link
        a(href="#") Link

  // http://facebook.com/macbroserviceroom
  // http://vk.com/macbroserviceroom
  // http://instagram.com/macbroserviceroom
</template>




<script>
const styles = [
  {
    stylers: [
      {
        hue: '#3c4858' // RGB #RRGGBB
      },
      {
        saturation: -60 // -100 100 
      },
      {
        gamma: 1 // 0,01 до 10,0
      },
      {
        lightness: 0 // -100 100
      }
    ]
  }
]

const Point = { lat: 55.758918, lng: 37.639625 }

export default {

  data () {
    return {
      marker: {},
      vueGMap: {},
      options: {
        center: Point,
        zoom: 16,
        // mapTypeControl: false,
        // streetViewControl: false,
        // scrollwheel: false,
        // panControl: false,
        // zoomControl: false,
        styles: styles
      }
    }
  },
  mounted () {
    this.createGoogleMaps().then(
      this.initGoogleMaps,
      this.googleMapsFailedToLoad
    )
  },
  methods: {
    createGoogleMaps: function () {
      return new Promise((resolve, reject) => {
        let gmap = document.createElement('script')
        gmap.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAu3xG322pClCRH2GUGuRjJ45SjMvbMZF8'
        gmap.onload = resolve
        gmap.onerror = reject
        document.body.appendChild(gmap)
      })
    },
    initGoogleMaps: function () {
      this.vueGMap = new google.maps.Map(
        document.getElementById('gmap-container'),
        this.options
      )

      this.marker = new google.maps.Marker({
        position: Point,
        animation: google.maps.Animation.BOUNCE,
        map: this.vueGMap
      })
    }
  }
}
</script>





<style lang="styl">

$green = #13ce66



#gmap-container

  height: 600px
  background #FCFCFC
  margin-bottom: 2em



#topNav
  position fixed
  top 0
  left: 0

  z-index: 5;
  height: 3em;
  background: #FFF;

  width: 100%
  //box-shadow: 0 -5px 5px 5px rgba(0,0,0,.3);
  //border-bottom: 1px solid #DFDFDF
  box-shadow: 0 5px 7px 0 rgba(#999,.2);

  .WrC
    align-items: center
    padding 0 .4em

  nav
    line-height 3
  a
    color: #8aa4bb;
    padding: 0 1em;


  button
    background: $green
    //padding: .5em 1em
    &:hover
      background: $green - 8%


#footer
  a
    display: block

</style>
