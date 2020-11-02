<template>
    <div class="upgrade">
        <header class="header">
            <div class="btn-group" role="group">
                <app-buttons @click="value += 'A'" :value="value" text="Dipendenti" />
                <app-buttons @click="value += 'B'" :value="value" text="Negozio" />
                <app-buttons @click="value += 'C'" :value="value" text="Click" />
                <app-buttons @click="value += 'D'" :value="value" text="Tempo" />
                {{value}}
            </div>
        </header>
    </div>
</template>

<script>
import Buttons from "./Buttons.vue"

export default {

    data() {
        return {
            mostra: true,
            value: 0,
        }
    },
  
    components: {
        appButtons: Buttons, 
    }
}
</script>