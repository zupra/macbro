<template lang="pug">
  div
    center
      h1 Статус Заказа
      //p Ввведите номер телефона или номер заказа (отправлено SMS)
      input(type="text", placeholder="")
      //button Узнать

    //- iframe(src="https://remonline.ru/orders/json/getorders?code=+7%20(967)%20059&key=3d780e8738ebf0ec7d1d7b35154c84d4", frameborder="0")

    //#frameMF(ref="frameMF")
    //iframe#frame(ref="frame" src="https://remonline.ru/orders/json/getorders?code=+7%20(967)%20059&key=3d780e8738ebf0ec7d1d7b35154c84d4", frameborder="0")

    table.tbl_row
      thead
        tr
          th № Заказа
          th Устройство
          th Статус
          th Цена, руб
      tbody
        tr
          td П-431
          td HTC Desire 626
          td Выдан, оплачен
          td 1000
        tr
          td П-430
          td Samsung GT-P5200
          td Выдан, оплачен
          td 500
        tr
          td П-429
          td SONY D6503
          td Новый
          td 0
        tr
          td П-428
          td Samsung SM-A510F DS
          td Новый
          td 0
        tr
          td П-426
          td LG Optimus LTE 3
          td Новый
          td 0
        tr
          td П-425
          td Apple iPhone 5S
          td Новый
          td 0
        tr
          td П-424
          td Apple iPhone 6
          td Новый
          td 0
        tr
          td П-423
          td Apple iPad Mini 2
          td Новый
          td 0
        tr
          td П-392
          td Sony Xperia
          td Выдан без ремонта
          td 0
        tr
          td П-391
          td Apple iPhone 5C
          td Выдан без ремонта
          td 0
        tr
          td П-390
          td Apple iPhone 5S
          td Выдан, оплачен
          td 0
        tr
          td П-381
          td Apple iPhone 5S
          td Выдан, оплачен
          td 2000
        tr
          td П-380
          td Apple iPhone 6S
          td Выдан, оплачен
          td 2000
        tr
          td П-379
          td HTC Desire 626G Dual Sim
          td Выдан без ремонта
          td 0
        tr
          td П-378
          td Asus Zenfone
          td Выдан, оплачен
          td 1000
        tr
          td П-371
          td ASUS Notebook UX32A
          td Выдан, оплачен
          td 1150
        tr
          td П-370
          td Apple iPhone 5S
          td Выдан, оплачен
          td 1500
        tr
          td П-369
          td Apple iPhone 5S
          td Выдан, оплачен
          td 1000
        tr
          td П-356
          td Apple iPhone 5S
          td Выдан, оплачен
          td 2000
        tr
          td П-355
          td Apple iPad Air
          td Выдан, оплачен
          td 2000
        tr
          td П-322
          td Apple iPhone 6
          td Выдан, оплачен
          td 2500
        tr
          td П-045
          td Apple iPhone 5S
          td Выдан без ремонта
          td 0
        tr
          td П-020
          td Samsung samsung
          td Выдан, оплачен
          td 1000
        tr
          td П-019
          td Apple iPhone 5S
          td Выдан, оплачен
          td 1500
        tr
          td П-015
          td Apple iPhone 7
          td Выдан, оплачен
          td 4500
        tr
          td П-012
          td Lenovo lenovo
          td Выдан, оплачен
          td 1000


</template>

<script>
//- import Vue from 'vue'
//- import VueResource from 'vue-resource'
//- Vue.use(VueResource);

export default {
  //components: {}
  data () {
    return {
      //iFrameData: [],
      //www: '',
    }
  },
  methods: {
    //- xhr() {
    //-   this.$http.get('https://remonline.ru/orders/json/getorders?code=%2B7%20(967)%20059-10-61&key=3d780e8738ebf0ec7d1d7b35154c84d4&api_key=274b79021ba4a02071a448fdd2693191f68a3b2a')
    //-   .then(response => {
    //-   // get body data
    //-   //this.someData = response.body;
    //-   console.log(response)
    //-   }, response => {
    //-     // error callback
    //-   });
    //- }
  },

  mounted () {
    //const 
      // frame = this.$refs.frame
      //frame.innerHTML = '<iframe name="' + name + '" id="' + name + '" src="' + src + '">';
      //url = 'https://remonline.ru/orders/json/getorders?code=+7%20(967)%20059&key=3d780e8738ebf0ec7d1d7b35154c84d4';
    //frame.innerHTML = '<iframe src="https://remonline.ru/orders/json/getorders?code=+7%20(967)%20059&key=3d780e8738ebf0ec7d1d7b35154c84d4">';
    //frame.firstChild.onload = () => this.www = frame.innerHTML;

    //- frame.onload = function() {
    //-   let doc =  frame.contentDocument || iframe.contentWindow;
    //-   alert(doc)
    //- }

  }
}
</script>

<style lang="styl">
</style>
