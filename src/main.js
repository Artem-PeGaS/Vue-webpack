import Vue from 'vue/dist/vue.esm.js'
import hello from '../components/hello.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//|-- variables --|\\
import '../styles/main.css'

new Vue({
	el: '#app',
	components: {
		hello
	}
});