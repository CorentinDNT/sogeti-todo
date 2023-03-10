<template>
    <div class="container mt-4">
        <div class="d-flex">
            <input
                type="text"
                placeholder="Ecrivez un titre de tâche ici"
                class="form-control rounded-0"
                id="titleOfModale"
                v-model="modalData.title"
                @keyup.enter="showModal()"
            />

            <!-- Button trigger modal -->
            <div class="input-group-append">
                <button type="button" class="btn btn-primary rounded-right" @click="showModal()">AJOUTER</button>
            </div>
        </div>

        <div class="modal fade" id="addTodoModale" tabindex="-1" role="dialog" aria-labelledby="addTodoModaleTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">...</div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AddTodo',
    data() {
        return {
            modalData: { title: '', description: '', status: 'to do' },
        };
    },
    methods: {
        showModal() {
            let titleInput = document.getElementById('titleOfModale');
            if (titleInput.value.trim() != '') {
                this.$store.commit('setModalData', this.modalData);
                this.$emit('showModal');
                titleInput.value = '';
            } else {
                titleInput.classList.add('border', 'border-danger');
                setTimeout(function () {
                    titleInput.classList.remove('border', 'border-danger');
                }, 2000);
            }
        },
    },
};
</script>
