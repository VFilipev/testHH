<template>
  <div class="container mx-auto">
    <loading v-model:active="isLoading" :can-cancel="false" :on-cancel="onCancel" :is-full-page="fullPage" />
    <TableTemplate :postsListFilter="postsListFilter" @sortById="sortById"></TableTemplate>
    <Pagination :pageNumber="pageNumber" :totalPage="totalPage" :totalPost="totalPost" :pageSize="pageSize"
      @nextPage="nextPage" @prevPage="prevPage" @selPage="selPage"></Pagination>
    <button
      class="mt-2 block px-4 py-2 text-white transition duration-100 ease-in-out bg-blue-500 border border-transparent rounded shadow-sm hover:bg-blue-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50"
      @click="isShow = true">Добавить пост</button>
  </div>
  <ModalPopUp v-show="isShow" @close="isShow = false" @save="savePost"></ModalPopUp>
</template>
<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import axios from 'axios'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import { usePostsStore } from '@/store/store'

const storePosts = usePostsStore()

let isLoading = ref(false)
let isShow = ref(false)
let pageNumber = ref(1)
const nextPage = () => { pageNumber.value++ }
const prevPage = () => { pageNumber.value-- }
const selPage = (p) => {
  pageNumber.value = p
}
const pageSize = 10
let postsList = ref([])
let postsListFilter = ref([])

const getPosts = async () => {
  postsList.value = (await axios('https://jsonplaceholder.typicode.com/posts')).data
  storePosts.update(postsList.value)
  postsPagination()
}
const postsPagination = () => {
  isLoading.value = true
  setTimeout(function () {
    isLoading.value = false
    let start = (pageNumber.value - 1) * pageSize
    let end = start + pageSize
    postsListFilter.value = postsList.value.slice(start, end)
  }, 1000)
}

const savePost = (obj) => {
  isShow.value = false
  postsList.value.push(obj)
  if (pageNumber.value != totalPage.value) {
    pageNumber.value = totalPage.value
  } else {
    postsPagination()
  }
}

let sort = ref(false)
const sortById = () => {
  if (!sort.value) {
    postsList.value.sort((a, b) => b.id - a.id)
    sort.value = !sort.value
  } else {
    postsList.value.sort((a, b) => a.id - b.id)
    sort.value = !sort.value
  }
  postsPagination()
}
const totalPage = computed(() => Math.ceil(postsList.value.length / pageSize))
const totalPost = computed(() => postsList.value.length)
watch(() => pageNumber.value, () => postsPagination())
onMounted(() => {
  getPosts()
})
</script>