<template>
  <div>
    <section>
      <!-- 사용자 정보 -->
      <user-profile>
        <router-link slot="username" :to="`/user/${itemInfo.user}`" class="link-text">{{ itemInfo.user }}</router-link>
        <template slot="time">{{ `Posted ${itemInfo.time_ago}` }}</template>
      </user-profile>
    </section>
    <section>
      <h2>{{ itemInfo.title }}</h2>
    </section>
    <section>
      <div v-html="itemInfo.content"></div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from "../components/UserProfile.vue";

export default {
  components: {
    UserProfile
  },
  computed: {
    ...mapGetters(['itemInfo'])
  },
  created() {
    const itemId = this.$route.query.id;
    this.$store.dispatch('FETCH_ITEM', itemId);
  }
}
</script>

<style scoped>
  .user-container {
    display: flex;
    align-items: center;
    padding: 0.5rem;
  }
  .fa-user {
    font-size: 2.5rem;
  }
  .user-description {
    padding-left: 8px;
  }
  .time {
    font-size: 0.7rem;
  }
</style>