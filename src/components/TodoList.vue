<template>
    <div class="container mt-4">
        <ul class="list-group">
            <li
                v-for="(todo, index) in todos"
                :key="index + todo.id"
                class="list-group-item d-flex justify-content-between align-items-center"
            >
                <div>
                    <h5 class="mb-1">{{ todo.title }}</h5>
                    <p class="mb-1">{{ todo.description }}</p>
                    <small class="text-muted">{{ todo.status }}</small>
                </div>
                <div>
                    <button class="btn btn-danger btn-sm mr-2" @click="deleteTodoConfirm(todo.id)">Supprimer</button>

                    <button class="btn btn-primary btn-sm" @click="editTodo(todo)">Modifier</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import Swal from 'sweetalert2';

export default {
    name: 'TodoList',
    data() {
        return {
            newTodoText: '',
        };
    },
    computed: {
        ...mapState(['todos']),
    },
    methods: {
        ...mapMutations(['addTodo', 'updateTodo', 'deleteTodo']),
        addNewTodo() {
            const newTodo = { id: Date.now(), text: this.newTodoText };
            this.addTodo(newTodo);
            this.newTodoText = '';
        },

        deleteTodoConfirm(todoId) {
            Swal.fire({
                title: 'Êtes-vous sûr(e) ?',
                text: 'Cette action est irréversible !',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Oui, supprimer',
            }).then((result) => {
                if (result.isConfirmed) {
                    this.deleteTodo(todoId);
                    Swal.fire('Supprimé(e)!', 'La tâche a été supprimée avec succès.', 'success');
                }
            });
        },
    },
};
</script>
