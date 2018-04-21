<template>
<div class="test">
  <h3>Заголовок сообщения</h3>
  <input type="text" v-model="title" />
  <h4>Текст сообщения</h4>
  <input type="text" v-model="message" />
  <button class="s" @click="ShowMessage({title: title, message: message, type: 'success'})">Успешно</button>
  <button class="i" @click="ShowMessage({title: title, message: message, type: 'info'})">Внимание</button>
  <button class="w" @click="ShowMessage({title: title, message: message, type: 'warn'})">Предупреждение</button>
  <button class="e" @click="ShowMessage({title: title, message: message, type: 'error'})">Ошибка</button>
</div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Заголовок',
      message: 'Сообщение Сообщение Сообщение Сообщение Сообщение  '
    }
  },
  notifications: {
    ShowMessage: {
      title: 'Test',
      message: 'Test',
      type: 'error',
      timeout: 3000
    }
  }
}
</script>

<style lang="less">
.test {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  input[type="text"] {
    width: 40%;
    padding: 12px 20px;
    margin: 8px 10px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  .s {
    background-color: #41b883;
  }
  .i {
    background-color: #1E88E5;
  }
  .w {
    background-color: #FBC02D;
  }
  .e {
    background-color: #F44336;
  }
  button {
    width: 40%;
    margin: 10px;
    color: white;
    font-size: 14px;
    border-radius: 3px;
    padding: 7px 12px;
    border: 1px solid transparent;
    transition: background .4s ease;
    cursor: pointer;
  }
}
</style>
