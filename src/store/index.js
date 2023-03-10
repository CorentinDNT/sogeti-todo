import { createStore } from 'vuex';

export default createStore({
    state: {
        showModal: false,
        modalData: {},
        todos: [
            { id: 1, title: 'Buy groceries', description: 'Milk, bread, eggs', status: 'processing...' },
            { id: 2, title: 'Do laundry', description: 'Wash and fold clothes', status: 'todo...' },
            { id: 3, title: 'Clean the house', description: 'Dust, sweep, mop', status: 'processing...' },
        ],
    },
    getters: {
        modalData: (state) => state.modalData,
    },
    mutations: {
        setModalData(state, data) {
            state.modalData = data;
            state.showModal = true;
        },
        closeModal(state) {
            state.showModal = false;
        },

        addTodo(state, { title, description }) {
            console.log(title);
            console.log(description);
            if (state.todos.some((todo) => todo.title === title)) {
                return;
            }
            const newTodo = {
                //recup l'id de la derniere task dans todos et add +1 sinon return 1
                id: state.todos.length > 0 ? state.todos[state.todos.length - 1].id + 1 : 1,
                title,
                description,
                status: 'todo...',
            };
            state.todos.push(newTodo);
        },

        updateTodo(state, todo) {
            const index = state.todos.findIndex((t) => t.id === todo.id);
            if (index !== -1) {
                state.todos[index] = todo;
            }
        },
        deleteTodo(state, id) {
            state.todos = state.todos.filter((t) => t.id !== id);
        },
    },
    actions: {},
    modules: {},
});
