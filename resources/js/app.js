import Vue from 'vue'

import BigScoreboard from './BigScoreboard/BigScoreboard'
import CareerScores from './CareerScores/CareerScores'
import RoundWinReason from './RoundWinReason'
import SurvivedSvg from './SurvivedSvg'

Vue.component('round-win-reason', RoundWinReason)
Vue.component('survived-svg', SurvivedSvg)

new Vue({
	el: '#vue',

	components: {
		BigScoreboard,
		CareerScores,
	},
})
