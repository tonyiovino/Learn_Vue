<template>
  <div class="buttons" role="group">
    <div>
      <button @click="db=!db" class="btn">Dipendenti</button>
      <div v-if="db">
        <app-dipendenti />
      </div>
    </div>
    <div>
      <button @click="nb=!nb" class="btn">Negozi</button>
      <div v-if="nb">
        Negozi
      </div>
    </div>

    <div>
      <button @click="tb=!tb" class="btn">Tempo</button>
      <div v-if="tb">
        Tempo
      </div>
    </div>
    <div>
      <button @click="cb=!cb" class="btn">Click</button>
      <div v-if="cb">
        Click
      </div>
    </div>

  </div>
</template>

<script>
import Dipendenti from "./Dipendenti.vue"

export default {
  props: [
    'text',
    'mostra',
    'db',
    'nb',
    'tb',
    'cb',
  ],

  components: {
    appDipendenti: Dipendenti, 
  }
}
</script>