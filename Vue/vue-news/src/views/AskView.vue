<template>
  <div>
      <ul class="news-list">
        <li v-for="item in askList" class="post">
          <!-- 포인트 영역 -->
          <div class="points">
            {{ item.points }}
          </div>
          <!-- 기타 정보 영역 -->
          <div>
            <p class="news-title">
              <a :href="`/item?id=${item.id}`">{{ item.title }}</a>
            </p>
            <small class="link-text">
              {{ item.time_ago }} by <router-link v-bind:to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
            </small>

          </div>
        </li>
      </ul>
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

<style scoped>
.news-list {
  margin:  0;
  padding: 0;  
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282
}
</style>