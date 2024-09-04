<template>
<table class="table-fixed border-collapse border border-slate-400">
    <thead>
    <tr>
        <th @click="$emit('sortById')" class="hover:cursor-pointer border border-slate-300">ID</th>
        <th class="border border-slate-300">userId</th>
        <th class="border border-slate-300">title</th>
        <th class="border border-slate-300">body</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="post in postsListFilter">
        <td class="border border-slate-300">{{ post?.id }}</td>
        <td class="border border-slate-300">{{ post.userId }}</td>
        <td class="border border-slate-300">{{ post.title }}</td>
        <td class="border border-slate-300">{{ post.body }}</td>
    </tr>
    </tbody>
</table>
</template>
<script setup>
const props = defineProps(['postsListFilter'])
</script>