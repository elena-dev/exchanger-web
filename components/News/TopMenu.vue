<template>
                <div class="nav-tabs">
                    <a v-for="item in items" :key="item.id" href="#" :class="{'active': item.isActive}" @click="Change(item.id)">{{item.title}}</a>
                </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { id:0, title: 'Все записи', isActive: true },
          { id:1, title: 'Акции', isActive: false },
          { id:2, title: 'Обновления', isActive: false },
          { id:3, title: 'Оповещения', isActive: false },
          { id:4, title: 'Обзоры', isActive: false },
        ],
        selectId: 0
      }
    },
    methods: {
      Change(value) {
        this.items[this.selectId].isActive = false
        this.selectId = value
        return this.items[value].isActive = true
      }
    }
  }
</script>