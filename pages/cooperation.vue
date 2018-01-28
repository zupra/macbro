<template lang="pug">

div
  .H1 Предлагаем <b> сотрудничество </b> 
    br 
    | по ремонту iPhone, iPad, MacBook, iPod 
    br
    | <b> сервис-центрам </b> любых городов России

  h1 Ремонт материнских плат
  h2 Диагностируем, паяем, реболлим и меняем микросхемы по оптовым ценам

  #ReasonsNum.flex_wr.text
    .block
      h2 Плюсы для 
        br
        | вашего сервиса:
    .item.block Команда инженеров. <br>Больше выполненного ремонта — больше прибыль.
    .item.block Нет необходимости в дорогостоящем оборудовании и специалистах.
    .item.block Сложный ремонт от которого приходилось отказываться.
    .item.block УТП для клиентов. Ремонт вместо покупки новой материнской платы.
    .item.block On-line система учёта заказов. Отслеживание статуса работ. 



  // h2 Специальные цены на комплексный ремонт iPhone
  // p.NB Для комплексных ремонтов мы снизили стоимость конечной работы. Например, если вы обратились к нам с iPhone 6 после сильного удара. И устройству требуется замена тристар, реболл NAND-флеш, восстановление обвязки по питанию и что-то ещё, то максимальная стоимость ремонта составит не более 6500 руб.

  // table.tbl_simple
  //   tr
  //     th.center(colspan="2") MAX цены при комплексном пемонте:
  //   tr
  //     td iPhone 5S
  //     td до 4500 руб.
  //   tr
  //     td iPhone 6 Plus
  //     td до 5500 руб.
  //   tr
  //     td iPhone 6S, iPhone 6S Plus, iPhone SE
  //     td до 6500 руб.
  //   tr
  //     td iPhone 7, iPhone 7 Plus
  //     td до 8000 руб.
  //   tr
  //     td iPhone 5, iPhone 5C
  //     td до 4000 руб.
  //   tr
  //     td iPhone 5, iPhone 5C
  //     td до 4000 руб.
  //   tr
  //     td iPhone 4S
  //     td до 3500 руб.
  //   tr
  //     td 	Phone 4
  //     td до 3000 руб.	


</template>

<script>

</script>

<style lang="stylus">



#ReasonsNum
  counter-reset: num;
  margin 2em 0
  .block
    width: 33.3%
  .item
    padding: 1em
    position: relative
    &:before
      counter-increment: num;
      content: counter(num);
      position: absolute;
      z-index: -1
      bottom: 0;
      left: 0;
      color: #EFEFEF //rgba(255,255,255, .3)
      font-size: 6em;
      font-weight: bold;
      line-height: .8em;



</style>
