<template>
  <div>
      <p v-for="item in this.$store.state.askList">
        <a v-bind:href="item.url">
          {{ item.title }}
        </a>
        <small>{{ item.time_ago }} by {{ item.user }}</small>        
      </p>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    // 4번 방법
    ...mapGetters([
      'askList'
    ])

    // 3번 방법
    // ...mapGetters({
    //   askList: 'askList'
    // })

    // 2번 방법
    // ...mapState({
    //   askList: state => state.askList
    // })

    // 1번 방법
    // askList() {
    //   return this.$store.state.askList;
    // }
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style>

</style>