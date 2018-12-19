<template>
	<div class="main-carousel">
		<Test v-model="text"/>
		<div class="carousel-cell">{{ text }}</div>
		<div class="carousel-cell">2</div>
		<div class="carousel-cell">3</div>
	</div>
</template>

<script>
	import Test from './Test.vue'

	export default {
	  components: {
	  	Test
	  },
	  data () {
	    return {
				text: 'lorem...',
				is: false,
				y: '',
				m: ''
	    }
		},
		created() {
		}
	}
</script>

<style>
	#app {
		display: flex;
		justify-content: space-between;
	}

	.ewqe {
		background-color: red;
		position: relative;
		width: 45%;
	}

	.modal {
		background-color: red;
		position: absolute;
		height: 300px;
		width: 300px;
		top: 100%;
		left: 0;
	}

	input {
		pointer-events: none;
	}
</style>