<template>
  <ul class="news-list">
        <li v-for="item in listItems" class="post">
          <!-- 포인트 영역 -->
          <div class="points">
            {{ item.points || 0}}
          </div>
          <!-- 기타 정보 영역 -->
          <div>
            <p class="news-title">
              <!-- 타이틀 영역 -->
              <template v-if="item.domain">
                <a :href="item.url">{{ item.title }}</a>
              </template>
              <template v-else>
                <a :href="`/item?id=${item.id}`">{{ item.title }}</a>
              </template>
            </p>
            <small class="link-text">
              {{ item.time_ago }} by 
              <router-link v-if="item.user" :to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
              <a v-else :href="item.url">{{ item.domain }}</a>
            </small>
          </div>
        </li>
      </ul>
</template>

<script>
export default {
    computed: {
        listItems() {
            let returnList = [];
            const name = this.$route.name;

            if (name == 'news') {
                returnList = this.$store.state.newsList;
            }else if (name == 'ask') {
                returnList = this.$store.state.askList;
            }else if (name == 'jobs') {
                returnList = this.$store.state.jobsList;
            }

            return returnList;
        }
    },
    created() {
        // 분기 처리 방법
        // 1. this.$route.path 이용
        // if(this.$route.path == '/news')

        // 2. this.$route.name 이용
        // if(this.$route.name == 'news')
        const name = this.$route.name;

        // 구현 방법
        // 1
        if (name == 'news') {
            this.$store.dispatch('FETCH_NEWS');
        }else if (name == 'ask') {
            this.$store.dispatch('FETCH_ASK');
        }else if (name == 'jobs') {
            this.$store.dispatch('FETCH_JOBS');
        }

        // 2
        // let actionName = '';
        // if (name == 'news') {
        //     actionName = 'FETCH_NEWS';
        // }else if (name == 'news') {
        //     actionName = 'FETCH_ASK';
        // }else if (name == 'news') {
        //     actionName = 'FETCH_JOBS';
        // }
        // this.$store.dispatch(actionName);
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