import ListView from "./ListView.vue";
import bus from "../utils/bus";

export default function createListView(viewName) {
    return {
        // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
        name : viewName,
        created() {
            bus.$emit('start:spinner');

            setTimeout(() => {
            this.$store.dispatch('FETCH_LIST', this.$route.name)
              .then(() => {
                console.log('fetched ', this.$route.name);
                bus.$emit('end:spinner');
              })
              .catch((error) => {
                console.log(error);
              });
            }, 1000);            
        },
        render(createElement) {
            return createElement(ListView)
        }
    }
}