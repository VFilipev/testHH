import { defineStore } from 'pinia'

export const usePostsStore = defineStore('postsStore', {
    state: () => ({
      list: ['store'],
    }),
    actions: {
        update(list) {
            this.list = list
        },
    },
  })