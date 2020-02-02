<template>
    <div class="tag-container">
        <h3 class="tag-head">
            <slot></slot>
        </h3>
        <div class="titles">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang='scss'>
    .tag-container {
        width: 100%;
        background-color: #1f1f1f;
        border-radius: 4px;
        margin-bottom: 20px;

        .tag-head {
            padding: 15px;
            background-color: #191818;
            border-radius: 4px;
            color: #008c8c;
        }

        .titles {
            padding: 15px;
            box-sizing: border-box;
        }
    }
</style>