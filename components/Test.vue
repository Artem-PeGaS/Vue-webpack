<template>

    <transition name="fade1">
        <div class="height">
            <input type="text" @input="$emit('input', $event.target.value)" :value="value">
        </div>
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