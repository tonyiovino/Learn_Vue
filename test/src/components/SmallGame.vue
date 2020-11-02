<template>
    <div class="smallGame">
        <header>
            <h2>Soldi: {{ soldi }}$
              <button @click="soldiClick">Money: {{ click }}$</button>
            </h2>
            <p>Dipendenti: {{ dipendenti }}</p>
            <p>Negozio: {{ negozio }}</p>
            <p>Cibo: {{ cibo }} unità -{{dipendenti * 10}}/{{ tempo/1000 }}s</p>
        </header>
        <h3>Entrate dipendenti: {{ dipendentiEntrate }}$/{{ tempo/1000 }}s</h3>
        <h3>Entrate negozio: {{ negozioEntrate }}$/{{ tempo/1000 }}s</h3>

        <p>
            Compra il cibo: {{ amountCibo }}

            <button @click="buyCibo">
              Prezzo: {{ costoCibo }}
            </button>

            <button @click="buyCiboPlus">
              Cibo x10
            </button>
        </p>


        <p>
            Compra i dipendenti:

            <button @click="buyDipendenti">
              Prezzo: {{ costoDipendenti }}
            </button>
        </p>

        <p>
            Compra i negozi:

            <button @click="buyNegozio">
              Prezzo: {{ costoNegozio }}
            </button>
        </p>

        <p>
            Compra il bost click:

            <button @click="buyBost">
              Prezzo: {{ costoBost }}
            </button>
        </p>


        <p>
            Compra upgrade dipendenti: {{ dipendentiValue }} ==> {{ dipendentiValue * 2 }}

            <button @click="buyUpgradeDipendenti">
              Prezzo: {{ costoUpgradeDipendenti }}
            </button>
        </p>

        <p>
            Compra upgrade negozio: {{ negozioValue }} ==> {{ negozioValue * 2 }}

            <button @click="buyUpgradeNegozio">
              Prezzo: {{ costoUpgradeNegozio }}
            </button>
        </p>


        <p>
            Compra upgrade tempo: {{ tempo/1000 }} ==> {{ (tempo/1000) - (50/1000) }}

            <button @click="buyUpgradeTempo">
              Prezzo: {{ costoUpgradeTempo }}
            </button>
        </p>
       
    </div>
</template>

<script>
  export default {
    props: ["small-game"],
      data: function(){
        return{
          soldi: 0,
          click: 1,

          cibo: 1000,
          dipendenti: 1,
          negozio: 0,
          tempo: 1000,

          costoCibo: 50,
          costoDipendenti: 100,
          costoNegozio: 1000,

          amountCibo: 100,

          dipendentiValue: 10,
          negozioValue: 100,

          costoBost: 500,
          costoUpgradeDipendenti: 1500,
          costoUpgradeNegozio: 5000,
          costoUpgradeTempo: 2000,
        }
      },

    methods: {
      soldiClick: function(){
        this.soldi += this.click;
      }, 

      addSoldi: function() {
        this.soldi += this.dipendentiEntrate + this.negozioEntrate;
      },
      ripetizione: function() {
        if (this.cibo >= this.dipendentiEntrate && this.dipendenti > 0){
          this.addSoldi();
          this.cibo -= this.dipendenti * 10;
        }
      },

      buyCibo: function() {
        if (this.soldi >= this.costoCibo) {
          this.soldi -= this.costoCibo;
          this.cibo += this.amountCibo;
        }
        else {
          alert("Non hai abbastanza soldi!")
        }
      },
      buyDipendenti: function() {
        if (this.soldi >= this.costoDipendenti){
          this.soldi -= this.costoDipendenti;
          this.dipendenti += 1;
          this.costoDipendenti *= 2;
        }
        else {
          alert("Non hai abbastanza soldi!")
        }
      },
      buyNegozio: function() {
        if (this.soldi >= this.costoNegozio){
          this.soldi -= this.costoNegozio;
          this.negozio += 1;
          this.costoNegozio *= 2;
        }
        else {
          alert("Non hai abbastanza soldi!")
        }
      },
      buyBost: function() {
        if (this.soldi >= this.costoBost){
          this.soldi -= this.costoBost;
          this.click *= 2;
          this.costoBost *= 5;
        }
        else {
          alert("Non hai abbastanza soldi!");
        }
      },

      buyUpgradeDipendenti: function() {
        if (this.soldi >= this.costoUpgradeDipendenti){
          this.soldi -= this.costoUpgradeDipendenti;
          this.dipendentiValue *= 2;
          this.costoUpgradeDipendenti *= 5;
        }
        else {
          alert("Non hai abbastanza soldi!");
        }
      },

      buyUpgradeNegozio: function() {
        if (this.soldi >= this.costoUpgradeNegozio){
          this.soldi -= this.costoUpgradeNegozio;
          this.negozioValue *= 2;
          this.costoUpgradeNegozio *= 5;
        }
        else {
          alert("Non hai abbastanza soldi!");
        }
      },

      buyUpgradeTempo: function() {
        if (this.soldi >= this.costoUpgradeTempo ) {
          if (this.tempo <= 50) {
            alert("Hai raggiunto la velocità massima!");
          }
          else {
            this.soldi -= this.costoUpgradeTempo;
            this.tempo -= 50;
            this.costoUpgradeTempo *= 5;
          }
        }

        else {
          alert("Non hai abbastanza soldi!");
        }
      },

      buyCiboPlus: function() {
        if (this.dipendentiEntrate + this.negozioEntrate > this.costoCibo * 10) {
          this.costoCibo *= 10;
          this.amountCibo *= 10;              
        }
        else {
          alert("Non puoi aumentare le porzioni di cibo. Prova ad aumentare le entrate!");
        }
      }
    },

    mounted: function() {
      setInterval(this.ripetizione, this.tempo);
    },

    computed: {
      dipendentiEntrate: function(){
        return this.dipendenti * this.dipendentiValue;
      },
      negozioEntrate: function(){
        if (this.negozio >= 1){
          return this.negozio * this.negozioValue;
        }
        else {
          return 0;
        }
      }
    },
  }
</script>