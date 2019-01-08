<template>
	<div class="main-carousel">
	
		<div class="">{{ Y }}</div>
		<div class="">{{ nameA }}</div>
		<div class="">{{ nameB }}</div>
		<hr></hr>
		<div class="carousel-cell">{{ text }}</div>
		<div class="carousel-cell">{{ count }}</div>
		<div class="carousel-cell">{{ doneTodos }}</div>
		<router-link to="/next/foo" exact>Перейти к foo</router-link>
		<router-link to="/next/bar/test2" exact>Перейти к bar</router-link>
		<div @click="$router.push('/next/bar/test')">next/bar/test</div>
		<div @click="$router.push({ name: 'name', params: { id: 123 }})">bar</div>
	</div>
</template>

<script>
	import Test from './Test.vue'
	import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

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
		methods: {
			...mapActions({
				increment: 'increment',
				getReState: 'moduleB/getReState'
			})
		},
		computed: {
			...mapState({
				count: 'count',
				Y: state => state.myModule.y,
				moduleA: state => state.moduleA,
				nameA: state => state.moduleA.name,
				nameB: state => state.moduleB.v2
			}),
			...mapGetters([
				'doneTodos'
			])
		},
		created() {
			this.getReState();
			this.increment({ a: 4 });
		},
		watch: {
			doneTodos() {
			}
		}
	}
</script>

<style>
	.router-link-active {
		color: red;
	}

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
</style>