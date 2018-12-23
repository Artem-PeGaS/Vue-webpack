<template>
	<div>
        4654654656 {{ $route.params.id }} 46565464
		<router-view></router-view>
		<router-view name="one"></router-view>
		<router-view name="two"></router-view>
	</div>
</template>

<script>
	export default {
	  data () {
	    return {
				text: 'lorem...',
				is: false,
				y: '',
				m: ''
	    }
		},
		created() {
			console.log( this.$route );
		},
		beforeRouteUpdate (to, from, next) {
			console.log( this.$router );
			next();
		}
	}
</script>