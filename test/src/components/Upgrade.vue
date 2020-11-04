<template>
    <div class="upgrade">
        <header class="header">
            <div>
                <app-buttons :db="db" :nb="nb" :tb="tb" :cb="cb"/>
            </div>
        </header>
    </div>
</template>

<script>
import Buttons from "./Buttons.vue"

export default {

    data() {
        return {
            mostra: false,
            db: false,
            nb: false,
            tb: false,
            cb: false,
        }
    },
  
    components: {
        appButtons: Buttons, 
    }
}
</script>