<template>
	<div class="company">
		<!-- Soldi -->
		<div class="view-money-box">
			<div class="view-money">
				<h1 class="view-money__amount">Soldi: {{ Soldi.quantità.toFixed(2) }}$</h1>
				<h1 class="view-money__second">{{ Soldi.sec.toFixed(2) }}$/{{ Tempo.quantità/1000 }}s</h1>
			</div>
		</div>
		<!-- Money Click Button -->
		<div class="money-btn-box">
			<button class="money-btn" @click="soldiClick">
				Lavora: +{{ (Click.valore).toFixed(2) }}$
			</button>
		</div>
		<!-- Panel -->
		<div class="panel-box">
			<app-panel
				:amount_dipendenti="Dipendenti.quantità"
				:amount_negozi="Negozi.quantità"
				:price_buy_dipendenti="(Dipendenti.costo_buy).toFixed(2)"
				:price_buy_negozi="(Negozi.costo_buy).toFixed(2)"
				@buyDipendenti="buyDipendenti"
				@buyNegozi="buyNegozi"

				:value_dipendenti="(Dipendenti.valore).toFixed(2)"
				:value_negozi="(Negozi.valore).toFixed(2)"
				:value_click="(Click.valore).toFixed(2)"
				:value_tempo="Tempo.quantità/1000"
				:price_upgrade_dipendenti="(Dipendenti.costo_upgrade).toFixed(2)"
				:price_upgrade_negozi="(Negozi.costo_upgrade).toFixed(2)"
				:price_upgrade_click="(Click.costo_upgrade).toFixed(2)"
				:price_upgrade_tempo="(Tempo.costo_upgrade).toFixed(2)"
				@upgradeDipendenti="upgradeDipendenti"
				@upgradeNegozi="upgradeNegozi"
				@upgradeClick="upgradeClick"
				@upgradeTempo="upgradeTempo"
			/>
		</div>
	</div>
		
</template>

<script>
import Panel from "./Panel.vue"

export default {

	data() {
		return {
			Soldi: {
				quantità: 2000,
				sec: 0,
			},
			Dipendenti: {
				quantità: 0,
				valore: 1,
				costo_buy: 10,
				costo_upgrade: 100,
			},
			Negozi: {
				quantità: 0,
				valore: 10,
				costo_buy: 1000,
				costo_upgrade: 1500,
			},
			Tempo: {
				quantità: 1000,
				costo_upgrade: 30000,
			},
			Click: {
				valore: 0.1,
				costo_upgrade: 1,
			},
		}
	},

	methods: {
		soldiClick(){
			this.Soldi.quantità += this.Click.valore;
		},
		addSec() {
			this.Soldi.sec = this.dipendentiEntrate + this.negoziEntrate;
			this.Soldi.quantità += this.Soldi.sec
		},

		buyDipendenti() {
			if (this.Soldi.quantità >= this.Dipendenti.costo_buy){
				this.Soldi.quantità -= this.Dipendenti.costo_buy;
				this.Dipendenti.quantità += 1;
				this.Dipendenti.costo_buy *= 1.2;
			}
			else {
				alert("Non hai abbastanza soldi!");
			}
		},
		buyNegozi() {
			if (this.Soldi.quantità >= this.Negozi.costo_buy) {
				this.Soldi.quantità -= this.Negozi.costo_buy;
				this.Negozi.quantità += 1;
				this.Negozi.costo_buy *= 1.2;
			} else {
				alert("Non hai abbastanza soldi!");
			}
		},

		upgradeDipendenti() {
			if (this.Soldi.quantità >= this.Dipendenti.costo_upgrade){
				this.Soldi.quantità -= this.Dipendenti.costo_upgrade;
				this.Dipendenti.valore *= 1.2;
				this.Dipendenti.costo_upgrade *= 1.5;
			}
			else {
				alert("Non hai abbastanza soldi!");
			}
		},
		upgradeNegozi() {
			if (this.Soldi.quantità >= this.Negozi.costo_upgrade) {
				this.Soldi.quantità -= this.Negozi.costo_upgrade;
				this.Negozi.valore *= 1.2;
				this.Negozi.costo_upgrade *= 1.5;
			} else {
				alert("Non hai abbastanza soldi!");
			}
		},
		upgradeClick() {
			if (this.Soldi.quantità >= this.Click.costo_upgrade) {
				this.Soldi.quantità -= this.Click.costo_upgrade;
				this.Click.valore *= 1.6;
				this.Click.costo_upgrade *= 1.8;
			} else {
				alert("Non hai abbastanza soldi!");
			}
		},
		upgradeTempo() {
			if (this.Soldi.quantità >= this.Tempo.costo_upgrade) {
				if (this.Tempo.quantità > 50) {
					this.Soldi.quantità -= this.Tempo.costo_upgrade;
					this.Tempo.quantità -= 50;
					this.Tempo.costo_upgrade *= 1.8;
				} else {
					alert("Hai raggiunto la velocità massima!");
				}
			} else {
				alert("Non hai abbastanza soldi!");
			}
		},
	},

	mounted () {
		setInterval(this.addSec, this.Tempo.quantità);
	},

	computed: {
		dipendentiEntrate: function(){
			return this.Dipendenti.quantità * this.Dipendenti.valore;
		},
		negoziEntrate: function(){
			return this.Negozi.quantità * this.Negozi.valore;
		},
	},

	components: {
		appPanel: Panel,
	},
}
</script>