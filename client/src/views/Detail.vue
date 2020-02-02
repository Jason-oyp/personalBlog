<template>
    <div class="detail-left">
        <Detail />
        <ShowComments />
        <SendComment />
    </div>
</template>

<script>
    import Detail from '../components/Detail'
    import SendComment from '../components/SendComment'
    import ShowComments from '../components/ShowComments'
    export default {
        components: {
            Detail,
            SendComment,
            ShowComments
        }
    }
</script>

<style>
    .detail-left {
        /* border: 1px solid black; */
        float: left;
        width: 60%;
        padding: 15px;
        margin-right: 20px;
    }
</style>