<template>
  <div class="buttons">
    <button @click="interruttore" class="btn btn-group__btn-secondary">{{ text }}</button>
    <div v-if="mostra">
      <div v-if="value === 'A'">A</div>
      <div v-else-if="value === 'B'">B</div>
      <div v-else-if="value === 'C'">C</div>
      <div v-else-if="value === 'D'">D</div>
      <div v-else>{{ value }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'text', 'mostra', 'value' ],

  methods: {
    interruttore() {
      this.mostra = !this.mostra;
    },
  },
}
</script>

<style scoped>
div{
  font-size: 30px;
}
</style>