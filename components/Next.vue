<template>
	<div>
        <div v-if="id">4654654656 {{ id }} 46565464</div>
		<router-view></router-view>
		<router-view name="one"></router-view>
		<router-view name="two"></router-view>
	</div>
</template>

<script>
	export default {
	  props: ['id', 'query'],
	  data () {
	    return {
				text: 'lorem...',
				is: false,
				y: '',
				m: ''
	    }
		},
		created() {
			console.log( this.$route.params, this.query ? this.query : false, this.id );
			if(this.id) {
				console.log( this.id );
			}
		},
		beforeRouteUpdate (to, from, next) {
			console.log( this.$router );
			next();
		}
	}
</script>