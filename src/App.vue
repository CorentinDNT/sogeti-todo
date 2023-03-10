<template>
    <AddTodoModale v-if="showModal" @close="closeModalFunction()" />

    <div id="app">
        <div class="container">
            <h2 class="text-center mt-5">Vue todo - Sogeti app</h2>
            <br />
            <AddTodo @add-todo="addTodo" @showModal="showModalFunction()" />
            <br />

            <!-- <TodoList :todos="todos" @change-state="changeState" /> -->
            <TodoList @change-state="changeState" />
            <TodoDetails :todo="selectedTodo" v-if="selectedTodo" @close-details="closeDetails" />
        </div>
    </div>
</template>

<script>
import AddTodo from './components/AddTodo.vue';
import TodoList from './components/TodoList.vue';
import TodoDetails from './components/TodoDetails.vue';
import AddTodoModale from './views/AddTodoModale.vue';

export default {
    name: 'App',
    components: {
        AddTodo,
        TodoList,
        TodoDetails,
        AddTodoModale,
    },
    data() {
        return {
            /*             todos: [
                { id: 1, title: 'Buy groceries', description: 'Milk, bread, eggs', status: 'processing...' },
                { id: 2, title: 'Do laundry', description: 'Wash and fold clothes', status: 'processing...' },
                { id: 3, title: 'Clean the house', description: 'Dust, sweep, mop', status: 'processing...' },
            ], */
            selectedTodo: null,
            showModal: false,
        };
    },
    methods: {
        addTodo: function (todo) {
            todo.id = this.todos.length + 1;
            this.todos.unshift(todo);
        },
        changeState: function (todo) {
            const index = this.todos.findIndex((t) => t.id === todo.id);
            this.todos.splice(index, 1);
            this.todos.push(todo);
        },
        openDetails: function (id) {
            this.selectedTodo = this.todos.find((t) => t.id === id);
            this.$router.push({ name: 'details', params: { id } });
        },
        closeDetails: function () {
            this.selectedTodo = null;
            this.$router.go(-1);
        },
        showModalFunction() {
            this.showModal = true;
        },
        closeModalFunction() {
            document.getElementById('titleOfModale').focus();
            this.showModal = false;
        },
    },
};
</script>
