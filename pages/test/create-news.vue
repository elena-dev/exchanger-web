<template>
<div class="test-news-create">
  <h2>Добавление новости</h2>
  <div class="header">
    <div class="text">
      <label>Заголовок: </label><input v-model="title" />
    </div>
    <div class="text">
      <label>Язык: </label><input v-model="codeLang" />
    </div>
    <div class="text">
      <label>Циклическое добавление</label><input type="checkbox" v-model="isForAdd" />
    </div>
    <div class="text" v-if="isForAdd">
      <label>Повторять цикл</label><input type="number" v-model="countAdd" />
    </div>
    <button @click="Add">Добавить</button>
  </div>
  <vue-editor v-model="content" />
</div>
</template>

<script>
export default {
  name: "create-news",
  notifications: {
    showError: {
      title: 'Ошибка',
      type: 'error',
      timeout: 5000
    },
    showSuccess: {
      title: 'Успешно',
      type: 'success',
      timeout: 5000
    }
  },
  data() {
    return {
      content: "",
      title: "",
      isForAdd: false,
      countAdd: 10,
      codeLang: ""
    };
  },
  methods: {
    async Add() {
      if (!this.isForAdd) {
        await this.$rest.api('createNews', {
          lang: this.codeLang,
          title: this.title,
          content: this.content
        }).then((res) => {
          if (res.success) {
            this.codeLang = ''
            this.title = ''
            this.content = ''
            this.showSuccess({
              title: 'Успешно',
              message: "Успешно добавленно" + res.data.title
            })
          } else {
            this.showError({
              title: 'Failed',
              message: res.error.message
            })
          }
        })
      } else {
        for (var i = 0; i < this.countAdd; i++) {
          await this.$rest.api('createNews', {
            lang: this.codeLang,
            title: this.title + i,
            content: this.content + i
          }).then((res) => {
            if (!res.success) {
              this.showError({
                title: 'Failed',
                message: res.error.message
              })
            }
          })
        }
        
      }
    }
  }
}
</script>

<style lang="less">
.test-news-create {
  margin: 40px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  h2 {
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ql-editor {
    max-height: 600px;
  }
  .header {
    display: flex;
    button {
      background-color: #00E676;
      border: none;
      color: white;
      padding: 0 40px;
      margin: 20px 0;
    }
    .text {
      display: flex;
      flex-direction: column;
      margin-right: 40px;
      margin-bottom: 20px;
      align-items: center;
      justify-content: center;
      label {
        padding: 5px;
      }
      input {
        padding: 5px;
      }
    }
  }
}
</style>