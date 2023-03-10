<template>
    <div class="container">
        <h1>{{ msg }}</h1>
        <h2 class="text-center mt-5">Vue todo - Sogeti app</h2>
        <div class="d-flex">
            <input type="text" placeholder="Ecrivez une tâche ici" class="form-control" />
            <button class="btn btn-primary rounded-0">SOUMETTRE</button>
        </div>

        <br />

        <table class="table table-hover">
            <thead class="bg-dark text-white">
                <tr>
                    <th scope="col">Tâche</th>
                    <th scope="col">Status</th>
                    <th scope="col" class="text-center">MODIFIER</th>
                    <th scope="col" class="text-center">SUPPRIMER</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(task, index) in tasks" :key="index">
                    <th>{{ task.name }}</th>
                    <td>{{ task.status }}</td>
                    <td>
                        <button class="text-center btn btn-outline-primary">
                            <font-awesome-icon icon="fa-solid fa-edit" />
                        </button>
                    </td>
                    <td>
                        <button class="text-center btn btn-outline-danger">
                            <font-awesome-icon icon="fa-solid fa-trash" />
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'ListTodo',
    props: {
        msg: String,
    },
    data() {
        return {
            tasks: [
                {
                    name: 'Drik cofee',
                    status: 'in progress',
                    details:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan in tellus et ultricies. Curabitur sollicitudin, nulla sit amet ',
                },
                {
                    name: 'Drik Teak',
                    status: 'in progress',
                    details:
                        'ci aliquet vestibulum. Phasellus rutrum ligula ac libero commodo bibendum. Aliquam dictum congue eros ac accumsan. Nulla vitae malesua',
                },
                { name: 'Eat pizza', status: 'ended', details: 'liquet est placerat eu. Ut interdum condime' },
                {
                    name: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                    status: 'ended',
                    details:
                        'Aenean auctor dapibus orci mollis fermentum. Proin ut nisl massa. Pellentesque pellentesque sed enim at varius. Sed eget',
                },
            ],
        };
    },
    methods: {},
    mounted() {},
    unmounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
