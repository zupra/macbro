<template lang="pug">
#TPL
  <TopNav/>


  .WrC
    <nuxt/>

    // #Gmap
    hr
    center
      h1 Мы находимся <br>
        small г. Москва, Покровка 3/7, 2 этаж 
        //<br> Пн-Пт 10 до 20; Сб-Вс - выходной
    .flex_sb
      a.circle(href="yandexnavi://build_route_on_map?lat_to=55.776872&amp;lon_to=37.585386") Проложить маршрут ЯндексНавигатор
      a.circle(href="yandexnavi://build_route_on_map?lat_to=55.776872&amp;lon_to=37.585386") Проложить маршрут GoogleНавигатор
  
  //FULL-W #gmap-container
  <Gmap/>


  #footer
    .WrC

      .flex_sb
        form(ref="ftr_form")
          input(type="text", name="entry.1694504546", placeholder="* Телефон")
          textarea(name="entry.1527676226", placeholder="Сообщение")
          button.btn(@click.prevent="submit()") Отправить

        div
          h3 Eсть вопросы или предложения? 
          p Оставьте сообщение которое сразу придёт нам в SMS. Если это важно или интересно — мы оперативно ответим.
          h3 Пообщаемся в СоцСетях?
          .Socials-set
            a(href="//vk.com/macbroserviceroom")
              svg.icon
                use(xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='#icon_vk')
              //| vkontakte
            a(href="//facebook.com/macbroserviceroom")
              svg.icon
                use(xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='#icon_fb')
              //| facebook
            a(href="//instagram.com/macbroserviceroom")
              svg.icon
                use(xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='#icon_instagram')
              //| instagram





      .flex_sb
        .nav 
          h3 Сервис центр «
            b.LogoText MacBro
            |»
          | г. Москва, Покровка 3/7
          br
          | тел.: +7(495) 64-255-64
          br
          | режим работы: Пн-Пт 
          br
          | с 10-20 часов
          br
          | Сб-Вс - выходной
        nav
          h3 Инфо
          nuxt-link(to="/about") О сервисе
          a(href="/#prices") Цены ремонт iPhone
          nuxt-link(to="/iMac") Цены ремонт MacBook
          nuxt-link(to="/contacts") Контакты
          nuxt-link(to="/cooperation") Сотрудничество
          // a(href="#") Узнать статус заказа
          // a(href="#") Контакты
          // a(href="#") Отзывы о ремонте
          // a(href="#") Сотрудничество


        div
          nav.Socials-set
            h3 Поделиться
            a(href="https://twitter.com/intent/tweet?source=http%3A%2F%2Fmac-bro.ru%2F&text=%D0%A0%D0%B5%D0%BC%D0%BE%D0%BD%D1%82%20Apple%20%D0%B2%20%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B5:%20http%3A%2F%2Fmac-bro.ru%2F" target="_blank" title="Tweet")
              svg.icon
                use(xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='#icon_twitter')
              | share twitter
            a(href='http://vk.com/share.php?url=[URL]&title=[TITLE]&description=[DESC]&image=[IMAGE]&noparse=true', onclick="javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=320');return false;")
              svg.icon
                use(xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='#icon_vk')
              | share vkontakte
            a(href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fmac-bro.ru%2F&t=%D0%A0%D0%B5%D0%BC%D0%BE%D0%BD%D1%82%20Apple%20%D0%B2%20%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B5" target="_blank" title="Share on Facebook")
              svg.icon
                use(xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='#icon_fb')
              | share facebook
            a(href="https://plus.google.com/share?url=http%3A%2F%2Fmac-bro.ru%2F" target="_blank" title="Share on Google+")
              svg.icon
                use(xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='#icon_googleplus')
              | share Gplus
            a(href='http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st._surl=[URL]&st.comments=[TITLE]', onclick="javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=320');return false;")
              svg.icon
                use(xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='#icon_ok')
              | share odnoklassniki


  <SocIcon/>




</template>




<script>

import TopNav from '~/components/TopNav.vue';
import Gmap from '~/components/Gmap.vue';
import SocIcon from '~/components/SocIcon.vue';

export default {
  components: {
    Gmap,
    TopNav,
    SocIcon
  },
  data () {
    return {
      isMobile: false,
      isTablet: false,

    }
  },
  methods: {


    submit() {
      const 
          form = this.$refs.ftr_form,
          btn = form.querySelector('button'),
          btn_text = btn.textContent,
          formData = new FormData(form),
          req = new XMLHttpRequest();
      req.open('POST', 'https://docs.google.com/forms/d/e/1FAIpQLScU2OUG2wCMNMz_mLnC42br4UltEYyZIdbTpo1Tv56tCDDHaA/formResponse', true);
      req.send(formData);
      btn.classList.add('success');
      btn.innerHTML = 'Готово!';
      form.reset();
      setTimeout (() => {
        btn.classList.remove('success');
        btn.innerHTML = btn_text;
      }, 2000)
      // setTimeout(function(){
      //   btn.classList.remove('success');
      //   btn.innerHTML = 'Отправить';
      // }, 2000);
    },

  }
}
</script>
