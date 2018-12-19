<template>
    <div>
        <input type="text" @input="$emit('input', $event.target.value)" :value="value">
    </div>
</template>


<script>
    export default {
        props: ['value'],
        created() {
        }
    }
</script>