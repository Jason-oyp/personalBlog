<template>
  <div class="send-comment">
    <h3>发表评论</h3>
    <form>
      <div class="name-email">
        <input type="text" placeholder="昵称" name="name" v-model="name">
        <input type='text' placeholder="邮箱 (评论被回复时你能收到通知)" name='email' v-model="email">
      </div>
      <div class="comment">
        <textarea name="comment" placeholder="无意义内容我可能不会回复你" v-model="text"></textarea>
      </div>
      <div class="code">
        <input type="text" v-model="codeValue" placeholder="请输入验证码">
        <i v-html="codeImg" @click="changeCode"></i>
        <span v-show="checking" :class="color">{{msg}}</span>
      </div>
      <button @click.prevent="sendComment">提交留言</button>
      <button type="reset">重置</button>
    </form>
  </div>
</template>

<script>
  import {
    editComment,
    getCaptcha
  } from '../axios/comment'
  export default {
    data() {
      return {
        name: '',
        email: '',
        text: '',
        value: -1,
        codeImg: null,
        codeValue: '',
        realCode: '',
        checking: false,
        msg: '',
        color: "green",
        parent_name: ''
      }
    },
    created() {

      this.changeCode();
    },
    methods: {
      async sendComment() {
        if (!this.name || !this.email || !this.text) {
          this.checking = true;
          this.msg = "请将内容填写完整";
          this.color = "red";
          return;
        }
        if (this.realCode !== this.codeValue) {
          this.checking = true;
          this.msg = "验证码不正确！";
          this.color = "red";
          return;
        }

        this.checking = true;
        this.msg = "验证成功！";
        this.color = "green";
        const data = await editComment(this.$route.params.id, this.name, this.email, this.text, this.value,
          new Date().toLocaleDateString(),
          new Date().toLocaleDateString());

        if (data.data.status === '添加成功') {
          setTimeout(() => {
            this.checking = false;

          });
          alert(data.data.status);
        }
      },
      changeCode() {
        getCaptcha().then(({
          data
        }) => {
          this.realCode = data.text;
          this.codeImg = data.data;
        })
      }
    }
  }
</script>

<style lang='scss' scoped>
  .send-comment {
    width: 100%;
    border-radius: 4px;
    box-shadow: 1px 1px 5px rgba(97, 97, 97, .48);
    background-color: #f5f5f5;
    margin-top: 15px;
    padding: 19px;
    box-sizing: border-box;

    .name-email {
      margin-top: 15px;

      >input {
        border: 1px solid #ccc;
        border-radius: 4px;
        height: 34px;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42857143;
        color: #555;
        background-color: #fff;
        background-image: none;
        box-sizing: border-box;
      }


      >input+input {
        margin-left: 30px;
        width: 290px;
      }
    }

    .code {
      position: relative;
      margin-top: 15px;

      span {
        position: absolute;
        left: 330px;
        top: 10px;
        color: red;
      }

      .green {
        color: green;
      }

      .red {
        color: red;
      }
    }

    .code input {
      border: 1px solid #ccc;
      border-radius: 4px;
      height: 36px;
      padding: 6px 12px;
      font-size: 14px;
      line-height: 1.42857143;
      color: #555;
      background-color: #fff;
      background-image: none;
      box-sizing: border-box;
    }

    .code i {
      margin-left: 15px;
      display: inline-block;
      position: absolute;
      left: 200px;
    }

    .comment {
      margin-top: 15px;
      width: 100%;

      textarea {
        width: 100%;
        height: 150px;
        display: block;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42857143;
        color: #555;
        background-color: #fff;
        background-image: none;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
      }
    }

    button {
      margin-top: 15px;
      cursor: pointer;
      color: #333;
      background-color: #fff;
      border-color: #ccc;
      display: inline-block;
      margin-bottom: 0;
      font-weight: 400;
      text-align: center;
      vertical-align: middle;
      touch-action: manipulation;
      background-image: none;
      border: 1px solid #ccc;
      white-space: nowrap;
      padding: 6px 12px;
      font-size: 14px;
      line-height: 1.42857143;
      border-radius: 4px;
      margin-right: 15px;

      &:hover {
        color: #333;
        background-color: #e6e6e6;
        border-color: #adadad;
      }
    }
  }
</style>