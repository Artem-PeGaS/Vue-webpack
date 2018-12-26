import Vue from 'vue/dist/vue.esm.js'
import hello from '../components/hello.vue'
import Next from '../components/Next.vue'
import Test from '../components/Test.vue'
import Test2 from '../components/Test2.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
	{
		path: '/next/:id', component: Next, props: (route) => ({ id: route.params.id, query: 666 }),
		beforeEnter: (to, from, next) => {
			alert('2. beforeEnter');
			next();
		},
		children: [
			{
				path: '',
				component: Test
			},
			{
				path: 'test',
				component: Test2,
					children: [
						{
							path: '',
							component: Test2
						}
					]
			},
			{
				path: 'test2',
				component: Test2
			}
		]
	},
	{ path: '/user-i/:id', name: 'name', components: { default: Next }, props: { default: {query: 6688} } },
	{
		path: '/user-*', component: Next, props: true,
		children: [
			{
				path: 'several', components: {
					default: Next,
					one: Test,
					two: Test2
				},
			},
			{
				path: '1', components: {
					two: Test2
				}
			}
		]
	},
	{
		path: '/qwe', redirect: '/next/eee/test'
	}
];

const router = new VueRouter({
	routes: routes
});

router.beforeEach((to, from, next) => {
	alert('1. beforeEach');
	next();
});

router.beforeResolve((to, from, next) => {
	alert('4. beforeResolve');
	next();
});

router.afterEach((to, from) => {
	alert('5. afterEach');
});

//|-- variables --|\\
import '../styles/main.css'

Vue.prototype.rr = 5;

new Vue({
	pff2: 5,
	router: router,
	el: '#app',
	components: {
		hello
	},
	created() {
		console.log( this.$router );
	}
});