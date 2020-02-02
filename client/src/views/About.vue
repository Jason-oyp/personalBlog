<template>
    <div class="about-left">
        <AboutMe />
    </div>
</template>

<script>
    import AboutMe from '../components/AboutMe'

    export default {
        components: {
            AboutMe
        }
    }
</script>

<style>
    .about-left {
        /* border: 1px solid black; */
        float: left;
        width: 60%;
        padding: 15px;
        margin-right: 20px;
    }
</style>