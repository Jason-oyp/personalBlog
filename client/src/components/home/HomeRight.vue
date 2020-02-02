<template>
    <div class="home-right">
        <tag />
        <RecentHot />
        <LastComment />
    </div>
</template>

<script>
    import Tag from '../Tag'
    import RecentHot from '../RecentHot'
    import LastComment from '../LastComment'
    export default {
        components: {
            Tag,
            RecentHot,
            LastComment
        }
    }
</script>

<style>
    .home-right {
        overflow: hidden;
        width: 34%;
        /* border: 1px solid black; */
        padding-top: 15px;
    }
</style>