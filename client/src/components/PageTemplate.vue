<template>
    <div class="home-content clearfix">
        <slot name="left"></slot>
        <slot name="right"></slot>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    .home-content {
        width: 80%;
        /* border: 1px solid black; */
        margin: 0 auto;
        margin-top: 60px;


    }

    .clearfix::after {
        content: '';
        display: block;
        clear: both;
    }
</style>