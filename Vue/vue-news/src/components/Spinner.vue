<template>
  <div class="ids-facebook" v-if="loading">
      <div>          
      </div>
      <div>          
      </div>
      <div>          
      </div>
  </div>
</template>

<script>
export default {
 props: {
     loading: {
         type: Boolean,
         required: true
     }
 }
}
</script>

<style scoped>
.ids-facebook {
    display: inline-block;
    position: absolute;
    width: 64px;
    height: 64px;
    top: 47%;
    left: 47%;
}
.ids-facebook div {
    display: inline-block;
    position: absolute;
    left: 6px;
    width: 13px;
    background: #42b883;
    animation: ids-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.ids-facebook div:nth-child(1) {
    left: 6px;
    animation-delay: -0.24s;
}
.ids-facebook div:nth-child(2) {
    left: 26px;
    animation-delay: -0.12s;
}
.ids-facebook div:nth-child(3) {
    left: 45px;
    animation-delay: 0;
}
@keyframes ids-facebook {
    0% {
        top: 6px;
        height: 51px;
    }
    50%, 100% {
        top: 19px;
        height: 26px;
    }
}
</style>