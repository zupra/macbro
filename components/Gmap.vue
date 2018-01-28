<template lang="pug">
#gmap-container
</template>


<script>

// const styles = [
//   {
//     stylers: [
//       { hue: '#8aa4bb'}, // RGB #RRGGBB
//       { saturation: -50 }, // -100 100
//       { gamma: .6 }, // 0,01 до 10,0
//       { lightness: 40 } // -100 100
//     ]
//   }
// ]


const Point = { lat: 55.758918, lng: 37.639625 }

export default {

  data () {
    return {
      marker: {},
      vueGMap: {},
      infowindow: {},
      options: {
        center: Point,
        zoom: 16,
        // mapTypeControl: false,
        // streetViewControl: false,
        // scrollwheel: false,
        // panControl: false,
        // zoomControl: false,
        // styles: styles
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

      this.infowindow = new google.maps.InfoWindow({
        content: `
          г. Москва, <b>Покровка 3/7</b>, 2 этаж<br>
          тел.: <b>+7(495) 64-255-64</b><br>
          Пн-Пт с 10-20 часов<br>
          Сб-Вс - выходной
        `,
      });

      this.marker = new google.maps.Marker({
        position: Point,
        animation: google.maps.Animation.BOUNCE,
        //animation: google.maps.Animation.DROP,
        map: this.vueGMap
      });
      this.infowindow.open(this.vueGMap, this.marker);
      // this.marker.addListener('click', function() {
      //   this.infowindow.open(this.vueGMap, this.marker);
      // });
    }
  }
}

</script>
