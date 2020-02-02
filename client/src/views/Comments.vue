<template>
    <div class="comments-left">
        <Comment />
    </div>
</template>

<script>
    import Comment from '../components/Comment'
    export default {
        components: {
            Comment
        }
    }
</script>

<style>
    .comments-left {
        /* border: 1px solid black; */
        float: left;
        width: 60%;
        padding: 15px;
        margin-right: 20px;
    }
</style>