<template>
    <div class="everyday-container">
        <div class="well quote">
            <span class="quote-headtips" style="color: rgb(175, 72, 150);">
                每日一句 ( {{date}} )
                &nbsp;<span class="glyphicon glyphicon-bullhorn"></span>
            </span>
            <div v-html="test"></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                date:new Date().toLocaleDateString().replace(/\//g,'-'),
                test:null
            }
        },
        mounted(){
            axios.get("/editEveryDay").then(({data})=>{
                this.test = data.content;
            }).catch((err)=>{
                console.log(err);
            });
        }
    }
</script>

<style>
    .everyday-container {
        padding: 19px;
        box-shadow: 2px 2px 10px #5f5f5f;
        border-radius: 4px;
        background-color: #f5f5f5;
        border: 1px solid #e3e3e3;
        font-size: 14px;
    }

    .content {
        margin: 10px 0px;
    }

    .pull-right {
        float: right;
    }
</style>