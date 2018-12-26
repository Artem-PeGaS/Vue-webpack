<template>
	<div>
        <div>4654654656 {{ id }} 46565464</div>
		<router-view></router-view>
		<router-view name="one"></router-view>
		<router-view name="two"></router-view>
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
				m: ''
	    }
		},
		created() {
			console.log( this.$route.params, this.query ? this.query : false, this.id, this.pathMatch );
			if(this.id) {
				console.log( this.id );
			}
		},
		beforeRouteEnter (to, from, next) {
			alert('3. beforeRouteEnter');
			next()
  		},
		beforeRouteUpdate (to, from, next) {
			console.log( this.$router );
			alert('beforeRouteUpdate');
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