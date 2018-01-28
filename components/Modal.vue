<template>
  <div class="overlay" @click.self="close">
    <div class="modal" :class="size">
      <div class="close" @click.self="close"></div>
        <slot></slot>
    </div>
  </div>

</template>


<script>

export default {
  //name: 'modal',
  props: ['size'],
  methods: {
    close() {
      this.$emit('close');
    }
  }
}

</script>

