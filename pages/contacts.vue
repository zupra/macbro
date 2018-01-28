<template lang="pug">

div
  // p
  //   a.circle(href="yandexnavi://build_route_on_map?lat_to=55.776872&amp;lon_to=37.585386") Проложить маршрут ЯндексНавигатор
  // p
  //   a.circle(href="yandexnavi://build_route_on_map?lat_to=55.776872&amp;lon_to=37.585386") Проложить маршрут GoogleНавигатор

  .flex_sb
    div
      h1 Остались вопросы?
      h2 Оставьте контакты <br>
        small и мы сразу же Вам перезвоним.
      button.btn(@click="showModal = true") Заказать Звонок
    div
      svg(xmlns='http://www.w3.org/2000/svg', xmlns:xlink='http://www.w3.org/1999/xlink', width='421px', height='264px', viewbox='0 0 421 264', version='1')
        g#Page-1(stroke='none', stroke-width='1', fill='none', fill-rule='evenodd')
          path#Oval-16(d='M296,264 C226,264 171,208 171,139 C171,69 226,14 296,14 C365,14 421,69 421,139 C421,208 365,264 296,264 Z M296,261 C363,261 418,206 418,139 C418,71 363,17 296,17 C228,17 174,71 174,139 C174,206 228,261 296,261 Z', fill='#3996E7', fill-rule='nonzero')
          g(id='Опертивный-контакт-Copy', transform='translate(215, 45)')
            path#Rectangle-20-Copy(d='M16,50 L16,111 C16,121 24,129 33,129 L57,129 C68,129 86,129 97,129 L126,129 C135,129 142,122 142,112 L142,50 C141,24 120,3 94,3 L63,3 C37,3 16,24 16,50 Z M13,50 C13,22 35,0 63,0 L94,0 C122,0 144,22 145,50 L145,112 C145,123 137,132 126,132 L97,132 C86,132 68,132 57,132 L33,132 C22,132 13,123 13,111 L13,50 Z', fill='#3996E7', fill-rule='nonzero')
            rect#Rectangle-22(fill='#FFFFFF', x='23', y='108', width='47', height='27')
            path#Combined-Shape(d='M126,95 C127,96 128,96 129,97 C132,97 135,94 137,90 C138,85 136,81 133,80 C131,80 129,81 127,84 L128,58 C129,36 112,18 90,18 L70,18 C48,18 31,36 32,58 L33,82 C32,81 30,80 28,80 C25,81 24,85 25,90 C26,94 29,97 32,97 C33,96 33,96 34,96 L34,97 C35,123 56,145 82,146 C102,146 125,125 126,98 L126,95 Z M81,149 C56,148 34,127 31,100 C27,99 23,96 22,91 C20,85 22,79 27,77 C28,77 29,77 30,77 L29,58 C28,34 46,15 70,15 L90,15 C114,15 132,34 131,58 L130,77 C132,77 133,77 134,77 C139,79 141,85 139,91 C138,96 134,100 129,100 C127,126 104,149 81,149 Z', fill='#3996E7', fill-rule='nonzero')
            rect#Rectangle-21(fill='#FFFFFF', x='93', y='123', width='34', height='12')
            rect#Rectangle-21(fill='#3996E7', x='76', y='129', width='51', height='3')
            rect#Rectangle-21-Copy(fill='#FFFFFF', x='65', y='121', width='29', height='14', rx='7')
            path#Rectangle-21-Copy-2(d='M68,128 C68,130 70,132 72,132 L87,132 C89,132 91,130 91,128 C91,126 89,124 87,124 L72,124 C70,124 68,126 68,128 Z M65,128 C65,124 68,121 72,121 L87,121 C91,121 94,124 94,128 C94,132 91,135 87,135 L72,135 C68,135 65,132 65,128 Z', fill='#3996E7', fill-rule='nonzero')
            path#Path-19(d='M1,188 C1,188 0,189 1,190 C1,191 2,191 3,191 L59,162 C59,161 60,161 60,160 L60,141 C60,140 59,140 58,140 C57,140 57,140 57,141 L57,159 L1,188 Z', fill='#3996E7', fill-rule='nonzero')
            path#Path-19-Copy(d='M103,142 C103,141 102,141 101,141 C100,141 100,141 100,142 L100,161 C100,162 100,162 100,163 L156,192 C157,192 158,192 158,191 C159,190 158,189 158,189 L103,160 L103,142 Z', fill='#3996E7', fill-rule='nonzero')
            path#Rectangle-23-Copy(d='M146,84 L146,108 C146,109 146,109 147,109 L149,109 C151,109 153,107 153,106 L153,86 C153,85 151,83 149,83 L147,83 C146,83 146,83 146,84 Z M143,84 C143,82 145,80 147,80 L149,80 C153,80 156,83 156,86 L156,106 C156,109 153,112 149,112 L147,112 C145,112 143,110 143,108 L143,84 Z', fill='#3996E7', fill-rule='nonzero')
            path#Rectangle-23-Copy-2(d='M13,84 C13,83 12,83 12,83 L9,83 C8,83 6,85 6,86 L6,106 C6,107 8,109 9,109 L12,109 C12,109 13,109 13,108 L13,84 Z M16,84 L16,108 C16,110 14,112 12,112 L9,112 C6,112 3,109 3,106 L3,86 C3,83 6,80 9,80 L12,80 C14,80 16,82 16,84 Z', fill='#3996E7', fill-rule='nonzero')
          path#Combined-Shape(d='M150,96 L206,96 C209,96 211,94 211,91 L211,5 C211,2 209,0 206,0 L56,0 C53,0 51,2 51,5 L51,91 C51,94 53,96 56,96 L121,96 L150,115 L150,96 L150,96 Z', fill='#FFFFFF')
          path#Combined-Shape-Copy-15(d='M147,93 L206,93 C207,93 208,92 208,91 L208,5 C208,4 207,3 206,3 L56,3 C55,3 54,4 54,5 L54,91 C54,92 55,93 56,93 L122,93 L147,110 L147,93 Z M150,115 L121,96 L56,96 C53,96 51,94 51,91 L51,5 C51,2 53,0 56,0 L206,0 C209,0 211,2 211,5 L211,91 C211,94 209,96 206,96 L150,96 L150,115 Z', fill='#3996E7', fill-rule='nonzero')
          path#Combined-Shape-Copy(d='M67,193 L110,193 C111,193 112,192 112,191 L112,129 C112,128 111,127 110,127 L5,127 C4,127 3,128 3,129 L3,191 C3,192 4,193 5,193 L44,193 L44,209 L67,193 Z M5,196 C2,196 0,194 0,191 L0,129 C0,126 2,124 5,124 L110,124 C113,124 115,126 115,129 L115,191 C115,194 113,196 110,196 L68,196 L41,214 L41,196 L5,196 Z', fill='#3996E7', fill-rule='nonzero')

  hr


  h1.H1.center Контакты

  .flex_sb.text
    div
      h2 Проконсультироваться
      a.Tel(href="tel:+74956425564") &nbsp; +7 (495) 64-255-64
      p Пн-Пт, 10:00—20:00
    div
      h2 По поводу сотрудничества
      p <b> Менеджер </b>: Игорь
      a.Tel(href="tel:+74956425564") &nbsp +7 (495) 64-255-64
      p Пн-Пт, 10:00—20:00

  // .text
  //   h1 Отсутствие абстрактного текста 
  //     br 
  //     | не позволяет зрителю оценить, 
  //     br 
  //     | как на самом деле будет выглядеть текст.
  //   h3 Чтобы показать заказчику эскизы сайта, нужно где-то найти тексты и картинки. <br>Как правило, ни того, ни другого в момент показа эскизов у дизайнера нету.

  //   h3.H1 Что же делает дизайнер? 
  //     br
  //     | Он делает рыбу.


  //   .flex
  //     p.NB Рыбу можно вставлять, использовать, вешать, заливать, показывать, запихивать... Словом, с ней можно делать что угодно, лишь бы эскиз был максимально похож на готовую работу.

  //     p.NB Если в качестве рыбных картинок использовать цветные прямоугольники, а вместо текста слова «тут будет текст тут будет текст тут будет текст тут будет текст», эскиз будет выглядеть неестественно.

  //   br
  //   br
  //   .insert.H1 Очень часто рыба становится частью готового сайта — так она нравится клиенту.

  //   p.NB Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo natus facilis architecto est inventore dolore at laboriosam ab, ad iusto nisi aliquam reprehenderit voluptas molestiae nihil itaque sunt placeat provident? <b>Lorem ipsum dolor sit amet</b> consectetur, adipisicing elit.  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo natus facilis architecto est inventore dolore at laboriosam ab, ad iusto nisi aliquam reprehenderit voluptas molestiae nihil itaque sunt placeat provident? Illo natus facilis architecto est inventore dolore at laboriosam ab, ad iusto nisi aliquam reprehenderit voluptas molestiae nihil itaque sunt placeat provident


  Modal(v-if="showModal", size="toCenter SM", @close="showModal = false")
    form
      center
        h2 Обратный звонок
      input(type="text", placeholder="Имя")
      input(type="text", placeholder="Номер телефона *")
      textarea(placeholder="Сообщение")
      button.btn Жду звонка!

</template>

<script>
import Modal from '~/components/Modal.vue';

export default {
  components: {
    Modal
  },
  data () {
    return {
      showModal: false,
    }
  },
  //methods: {}
}

</script>

<style lang="styl">

.insert
  font-size 1.4em
  font-weight bold
  line-height 1.3

  font-family serif
  padding 1em 0 1em 1.3em
  float right
  width 25vw


</style>
