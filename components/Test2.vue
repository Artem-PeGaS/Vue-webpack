<template>
    <div>
        Test2
        <router-view></router-view>
    </div>
</template>


<script>
    export default {
        props: ['value'],
		created() {
			console.log( this.$route );
		},
    }
</script>