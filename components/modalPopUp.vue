<template>
    <div class="modal-mask">
        <div class="modal-wrapper">
        </div>
        <div class="modal-container">
            <div class="modal-header">
                <div class="modal-header-slot">
                    <div>
                        Карточка поста
                    </div>
                </div>
                <div class="modal-header-close-btn">
                    <button class="btn float-right btn-close" @click="$emit('close')"></button>
                </div>
            </div>
            <div class="modal-body">
                <div>
                    <label for="user" class="block text-sm font-medium leading-6 text-gray-900">User</label>
                    <div class="relative mt-2 rounded-md shadow-sm">
                        <input type="number" name="user" id="user" v-model="obj.userId"
                            class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="user" />
                    </div>
                </div>
                <div>
                    <label for="title" class="block text-sm font-medium leading-6 text-gray-900">Title</label>
                    <div class="relative mt-2 rounded-md shadow-sm">
                        <input type="text" name="title" id="title" v-model="obj.title"
                            class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="title" />
                    </div>
                </div>
                <div>
                    <label for="body" class="block text-sm font-medium leading-6 text-gray-900">Body</label>
                    <div class="relative mt-2 rounded-md shadow-sm">
                        <textarea type="text" name="body" id="body" v-model="obj.body"
                            class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="body" />
                    </div>
                </div>
                <button
                    class="mt-2 block px-4 py-2 text-white transition duration-100 ease-in-out bg-blue-500 border border-transparent rounded shadow-sm hover:bg-blue-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50"
                    @click="save">Сохранить</button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const emit = defineEmits(['save'])
let obj = ref({})
const save = () => {
    if (obj.value.userId && obj.value.title && obj.value.body) {
        let tmp = { ...obj.value }
        obj.value = {}
        emit('save', tmp)
    }
}
</script>
<style>
.modal-mask {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease
}

.modal-wrapper {
    display: table-cell
}

.modal-footer {
    display: block
}

.modal-header {
    flex-direction: row;
    justify-content: space-between;
    padding: 5px;
}

.modal-header-slot {
    flex: 8;
    padding: 0px 15px;
}

.modal-header-btn {
    flex: 2
}

.modal-header .btn {
    padding: 5px;
}

.modal-container {
    max-width: 1600px;
    margin: 0px auto;
    padding: 10px;
    background-color: #fff;
    border-radius: .3rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    /*max-height: calc(100vh - 50px);*/
    overflow: hidden;
    margin-top: 0.75rem;
}

.btn-close {
    background: transparent url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat;
    box-sizing: content-box;
    width: 1em;
    height: 1em;
    padding: .25em .25em;
    color: #000;
}
</style>