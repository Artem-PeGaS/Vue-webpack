import Vue from 'vue/dist/vue.esm.js'
import hello from '../components/hello.vue'
import Next from '../components/Next.vue'
import Test from '../components/Test.vue'
import Test2 from '../components/Test2.vue'
import VueRouter from 'vue-router'
import store from '../store/store.js'

Vue.use(VueRouter);

const routes = [
	{
		path: '/next/:id', component: Next, props: (route) => ({ id: route.params.id, query: 666 }),
		beforeEnter: (to, from, next) => {
			console.log('2. beforeEnter');
			next();
		},
		children: [
			{
				path: '',
				component: Test2
			},
			{
				path: 'test',
				component: Test,
				meta: { requiresAuth: true },
					// children: [
					// 	{
					// 		path: '',
					// 		component: Test2,
					// 		meta: { requiresAuth: true }
					// 	}
					// ]
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
	routes: routes,
	scrollBehavior(to, from, savedPosition) {
		// return to.path === '/next/bar/test2'
		// ? { x: 0, y: 500 }
		// : { x: 0, y: 10 }
		return new Promise((resolve, reject) => {
			setTimeout(() => {
			  resolve({ x: 0, y: 0 })
			}, 1500)
		})
	}
});

router.beforeEach((to, from, next) => {
	console.log('1. beforeEach');
	next();
});

router.beforeResolve((to, from, next) => {
	console.log('4. beforeResolve');
	next();
});

router.afterEach((to, from) => {
	console.log('5. afterEach');
});

//|-- variables --|\\
import '../styles/main.css'

Vue.prototype.rr = 5;

new Vue({
	pff2: 5,
	store,
	router: router,
	el: '#app',
	render: h => h(hello),
	created() {
		console.log( this.$store.getters.doneTodos );
	}
});