<template>
    <div class="height" id="w">
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

<style>
    .height {
        height: 1000px;
    }
</style>