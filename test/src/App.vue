<template>
  <div id="app">
    <app-upgrade/>
  </div>
</template>

<script>
import Upgrade from './components/Upgrade.vue'
//import SmallGame from './components/SmallGame.vue'


export default {
  name: 'App',
  components: {
    appUpgrade: Upgrade,
    //SmallGame,
  }
}
</script>