<template>
	<div>
        <div>4654654656 {{ id }} 46565464</div>
		<transition :name="transitionName">
			<router-view :key="transitionName"></router-view>
		</transition>
	</div>
</template>

<script>
	export default {
	  props: ['id', 'query', 'pathMatch'],
	  data () {
	    return {
				text: 'lorem...',
				is: false,
				y: '',
				m: '',
				transitionName: ''
	    }
		},
		created() {
			console.log( this.$route.params, this.query ? this.query : false, this.id, this.pathMatch );
			if(this.id) {
				console.log( this.id );
			}
		},
		watch: {
			'$route' (to, from) {
				console.log(this.transitionName);
				const toDepth = to.path.split('/').length
				const fromDepth = from.path.split('/').length
				this.transitionName = toDepth < fromDepth ? 'fade' : 'fade2'
			}
		},
		beforeRouteEnter (to, from, next) {
			console.log('3. beforeRouteEnter');
			next()
  		},
		beforeRouteUpdate (to, from, next) {
			console.log( this.$router );
			console.log('beforeRouteUpdate');
			next();
  		},
		beforeRouteLeave (to, from, next) {
			const answer = window.confirm('Вы хотите уйти? У вас есть несохранённые изменения!')
			if (answer) {
				next()
			} else {
				next(false)
			}
		}
	}
</script>

<style>
	.fade2-enter-active, .fade2-leave-active {
		transition: opacity 10s;
	}
	.fade2-enter, .fade2-leave-to {
		opacity: 0;
	}

	.fade-enter-active, .fade-leave-active {
		transition: opacity 1s;
	}
	.fade-enter, .fade-leave-to {
		opacity: 0;
	}
</style>