<template>
    <div>
        <h2>{{ todo.title }}</h2>
        <p>{{ todo.description }}</p>
        <button @click="closeDetails">Close</button>
    </div>
</template>

<script>
export default {
    name: 'TodoDetails',
    props: {
        todo: Object,
    },
    methods: {
        closeDetails: function () {
            this.$emit('close-details');
        },
    },
};
</script>
