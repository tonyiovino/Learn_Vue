<template>
  <div id="app">
    <app-upgrade />
    <!--app-small-game /-->
  </div>
</template>

<script>
import Upgrade from './components/Upgrade.vue'
//import SmallGame from './components/SmallGame.vue'


export default {
  name: 'App',
  components: {
    appUpgrade: Upgrade,
    //appSmallGame: SmallGame,
  }
}
</script>