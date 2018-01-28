<template lang="pug">
#topNav
  .WrC.flex_sb
    nav
      nuxt-link.LogoText(to="/") MacBro
        // b MacBro

        // svg(width='50', height='50', style='vertical-align: middle; margin-right: -25px')
        //   circle(cx="25" cy="25" r="20" fill="#EEE")
        //   //path(d='M41 25l-16-12-16 12v-5l16-12 16 12z M37 25v12h-8v-8h-8v8h-8v-12l12-9z', fill='#EEE')
        //   //path(d='M0,28 C15,27 27,14 26,0 C11,2 -1,14 0,28 Z', fill='#57D743')


        // svg(width='26', height='28', viewbox='0 0 26 28', style='vertical-align: middle')
        //   path(d='M0,28 C15,27 27,14 26,0 C11,2 -1,14 0,28 Z', fill='#57D743')
        // | &nbsp;MacBro



        // svg(xmlns='http://www.w3.org/2000/svg', xmlns:xlink='http://www.w3.org/1999/xlink', width='42px', height='50px', viewbox='0 0 42 50', style='vertical-align:middle;')
        //   path(d='M1,50 C-0,44 -0,37 2,30 C6,17 20,8 26,5 C31,2 37,0 42,0 C42,6 42,12 40,19 C38,24 35,30 31,35 C27,39 23,43 17,46 C12,49 6,50 1,50 Z', fill='#57D743')
        //   path(d='M33,10 C33,10 23,20 14,31 C12,34 9,39 5,46', stroke='#B8E986')
        // MacBro

        // svg(width='34', height='43', viewbox='0 0 34 43', style='vertical-align: middle')
        //   g(stroke='none', stroke-width='1', fill='none', fill-rule='evenodd')
        //     path(d='M18,15 C15,15 13,13 10,13 C7,13 4,15 2,17 C-1,21 -0,26 1,31 C2,37 7,43 10,43 C13,43 15,41 18,41 C21,41 22,43 25,43 C28,43 32,37 34,33 C31,31 28,28 28,24 C28,21 30,18 33,17 C31,15 28,13 26,13 C22,13 20,15 18,15 Z', fill='#C6C7C9')
        //     path(d='M17,12 C24,11 28,6 28,0 C21,1 17,6 17,12 Z', fill='#57D743')



      nuxt-link(to="/about") О нас
      nuxt-link(to="/contacts") Контакты
      nuxt-link(to="/cooperation") Сотрудничество
    nuxt-link.btn.green(to="/status") Статус Заказа
</template>

<style>

</style>
