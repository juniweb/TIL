<template>
  <div>
      <div v-for="jobs in this.$store.state.jobsList">{{ jobs.title }}</div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style>

</style>