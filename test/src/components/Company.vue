<template>
	<div class="company">
		<!-- Soldi -->
		<div class="view-money-box">
			<div class="view-money">
				<h1 class="view-money__amount">Soldi: {{ Soldi.quantità.toFixed(1) }}$</h1>
				<h1 class="view-money__second">{{ Soldi.sec.toFixed(1) }}$/{{ tempo/1000 }}s</h1>
			</div>
		</div>
		<!-- Money Click Button -->
		<div class="money-btn-box">
			<app-buttons class="money-btn"
				@action="soldiClick"
				text="Lavora: +"
				:value="Soldi.incrClick"
				text2="$"
			/>
		</div>
		<!-- Panel -->
		<div class="panel-box">
			<app-panel
				:amount_dipendenti="Dipendenti.quantità"
				:amount_negozi="Negozi.quantità"
				:price_buy_dipendenti="Dipendenti.costo_buy"
				:price_buy_negozi="Negozi.costo_buy"
				@buyDipendenti="buyDipendenti"
				@buyNegozi="buyNegozi"

				:value_dipendenti="(Dipendenti.valore).toFixed(1)"
				:value_negozi="(Negozi.valore).toFixed(1)"
				:price_upgrade_dipendenti="Dipendenti.costo_upgrade"
				:price_upgrade_negozi="Negozi.costo_upgrade"
				@upgradeDipendenti="upgradeDipendenti"
				@upgradeNegozi="upgradeNegozi"
			/>
		</div>
	</div>
		
</template>

<script>
import Buttons from "./Buttons.vue"
import Panel from "./Panel.vue"

export default {

	data() {
		return {
			tempo: 1000,

			Soldi: {
				quantità: 0,
				sec: 0,
				incrClick: 0.1,
			},
			Dipendenti: {
				costo_buy: 10,
				costo_upgrade: 100,
				quantità: 0,
				valore: 1
			},
			Negozi: {
				costo_buy: 1000,
				costo_upgrade: 1000,
				quantità: 0,
				valore: 10,
			},
		}
	},

	methods: {
		soldiClick(){
			this.Soldi.quantità += this.Soldi.incrClick;
		},
		addSec() {
			this.Soldi.sec = this.dipendentiEntrate + this.negoziEntrate;
			this.Soldi.quantità += this.Soldi.sec
		},

		buyDipendenti() {
			if (this.Soldi.quantità >= this.Dipendenti.costo_buy){
				this.Soldi.quantità -= this.Dipendenti.costo_buy;
				this.Dipendenti.quantità += 1;
			}
			else {
				alert("Non hai abbastanza soldi!");
			}
		},
		buyNegozi() {
			if (this.Soldi.quantità >= this.Negozi.costo_buy) {
				this.Soldi.quantità -= this.Negozi.costo_buy;
				this.Negozi.quantità += 1;
			} else {
				alert("Non hai abbastanza soldi!");
			}
		},
		upgradeDipendenti() {
			if (this.Soldi.quantità >= this.Dipendenti.costo_upgrade){
				this.Soldi.quantità -= this.Dipendenti.costo_upgrade;
				this.Dipendenti.valore *= 1.2;
			}
			else {
				alert("Non hai abbastanza soldi!");
			}
		},
		upgradeNegozi() {
			if (this.Soldi.quantità >= this.Negozi.costo_upgrade) {
				this.Soldi.quantità -= this.Negozi.costo_upgrade;
				this.Negozi.valore *= 1.2;
			} else {
				alert("Non hai abbastanza soldi!");
			}
		},
	},

	mounted () {
		setInterval(this.addSec, this.tempo);
	},

	computed: {
		dipendentiEntrate: function(){
			if (this.Dipendenti.quantità >= 1){
				return this.Dipendenti.quantità * this.Dipendenti.valore;
			}
			else {
				return 0;
			}
		},
		negoziEntrate: function(){
			if (this.Negozi.quantità >= 1){
				return this.Negozi.quantità * this.Negozi.valore;
			}
			else {
				return 0;
			}
		},
	},

	components: {
		appButtons: Buttons,
		appPanel: Panel,
	},
}
</script>