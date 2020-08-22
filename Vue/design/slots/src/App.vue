<template>
  <div>
    <ul>
      <item>
        아이템1
      </Item>
      <item>
        아이템2
        <button>click me</button>
      </Item>
      <item>
        <div style="display: flex;">
          아이템3
          <img src="./assets/github.png" alt="gitbub" style="width:100px; height:50px;">
        </div>
      </Item>
      <item>
        <div style="color:blue; font-size:20px;">
          아이템4
        </div>
      </Item>
    </ul>
  </div>
</template>

<script>
import Item from './components/Item.vue'

export default {
  components: {
    Item
  }
}
</script>

<style>
</style>
