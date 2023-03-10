<template>
    <div class="d-flex align-items-center justify-content-center">
        <div class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog w-100" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-center w-100">
                            <b>{{ modalData.title }}</b>
                        </h5>
                    </div>
                    <div class="modal-body">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-default">Titre</span>
                            </div>
                            <input
                                type="text"
                                class="form-control"
                                aria-label="Default"
                                :placeholder="modalData.title"
                                :value="modalData.title"
                                id="titleField"
                                aria-describedby="inputGroup-sizing-default"
                                @keyup.esc="closeModal()"
                                @keyup.enter="nextFocus()"
                            />
                        </div>

                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-default">Description</span>
                            </div>
                            <input
                                type="text"
                                class="form-control"
                                :placeholder="modalData.description"
                                :value="modalData.description"
                                id="descriptionField"
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                @keyup.esc="closeModal()"
                                @keyup.enter="addTodo()"
                            />
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="closeModal()">Close</button>
                        <button type="button" class="btn btn-success" @click="addTodo()">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        async addTodo() {
            const title = document.getElementById('titleField').value;
            const description = document.getElementById('descriptionField').value;

            this.$store.commit('addTodo', { title, description });

            this.closeModal();
        },

        closeModal() {
            this.$emit('close');
        },
    },
    computed: {
        modalData() {
            return this.$store.getters.modalData;
        },
        showModal() {
            return this.$store.state.showModal;
        },
    },
    mounted() {
        document.getElementById('titleField').focus();
    },
};
</script>

<style scoped>
.modal {
    display: flex;
    align-items: center;
}
</style>
