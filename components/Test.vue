<template>

    <transition name="fade1">
        <input type="text" @input="$emit('input', $event.target.value)" :value="value">
    </transition>

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
</style>