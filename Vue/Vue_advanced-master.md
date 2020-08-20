# Vue.js 완벽 가이드 - 실습과 리팩토링으로 배우는 실전 개념

## Vue CLI 2.X vs CLI 3.X
  - 명령어
    - 2.X : vue init '프로젝트 템플릿 이름' '파일 위치'
    - 3.X : vue create '프로젝트 이름'

  - 웹팩 설정 파일
    - 2.X : 노출 O
    - 3.X : 노출 X

  - 프로젝트 구성
    - 2.X : Github 의 템플릿 다운로드
    - 3.X : 플러그인 기반으로 기능 추가

  - ES6 이해도
    - 2.X : 필요 X
    - 3.X : 필요 O

## vue.config.js
@vue/cli 는 `.vuerc` 파일에 JSON 형태의 global configuration 을 가지고 있으며, `vue.config.js` 파일을 이용하여 option 을 변경할 수 있습니다.  

option에 대한 자세한 내용은 Vue CLI [Configuration Reference](https://cli.vuejs.org/config/#vue-config-js) 를 참조.

`vue.config.js` 는 다음과 같이 작성합니다.

```js
module.exports = {
  lintOnSave : false
}
```

## API 구현
> 페이지 역할을 하는 component 는 route 또는 data 를 fetch 하는 logic 은 좋지 않은 설계 방식이다.

**Javascript this**

![](https://i.stack.imgur.com/nPSkX.png)

javascript `this` 에 대하여 아래 글 내용을 참조
  - [How does the “this” keyword work?](https://stackoverflow.com/questions/3127429/how-does-the-this-keyword-work)
  - [Understanding JavaScript’s this keyword](https://javascriptweblog.wordpress.com/2010/08/30/understanding-javascripts-this/)
  - [함수 호출 방식에 의해 결정되는 this](https://poiemaweb.com/js-this)
  - [javascript _this](https://velog.io/@denmark-choco/javascript-this)


## 스토어 구현

### map 헬퍼 함수를 이용한 방법

`store.js` 가 다음과 같은 경우 
```js
export const store = new Vuex.Store({
    state: {
        newsList: [],
        askList: [],
        jobsList: []
    },
    ...
})
```

- 방법 1 : function 을 이용
```html
<template>
  <div>
      <!-- <div v-for="ask in this.$store.state.askList">{{ ask.title }}</div> -->
      <div v-for="ask in askList">{{ ask.title }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    askList() {
       return this.$store.state.askList;
    }
  },
  ...
}
</script>
```

- 방법 2 : mapState 을 이용
```html
<template>
  <div>
      <div v-for="ask in askList">{{ ask.title }}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
       askList: state => state.askList
    })    
  },
  ...
}
</script>
```

- 방법 3 : mapGetters 을 이용

`store.js` 에 getters 구현
```js
export const store = new Vuex.Store({
    state: {
        newsList: [],
        askList: [],
        jobsList: []
    },
    getters: {
        askList(state) {
            return state.askList;
        }
    },    
    ...
})
```

```html
<template>
  <div>
      <div v-for="ask in askList">{{ ask.title }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      askList: 'askList'
    })   
  },
  ...
}
</script>
```

- 방법 4 : mapGetters 에서 배열표기법을 이용

```html
<template>
  <div>
      <div v-for="ask in askList">{{ ask.title }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters([
      'askList'
    ])    
  },
  ...
}
</script>
```

## 라우터 실전

### $route 객체 속성
  - $route.path `String`
    ```js
    // Ex) /item?id=24160123" 경우
    $route.path -> /item
    ```
  - $route.params `Object`
    ```js
    // 동적 라우팅 /user/:id
    // Ex) /user/juniweb 경우
    $route.params.user -> juniweb
    ```  
  - $route.query `Object`  
    query 문자열의 key/value 객체.  
    ```js
    // Ex) /foo?user=juniweb 경우
    $route.query.user -> juniweb
    ```
  - $route.hash `String`
  - $route.fullPath `String`
    ```js
    // Ex) /item?id=24160123" 경우
    $route.fullPath -> item?id=24160123
    ```  
  - $route.matched `Array<RouteRecord>`
  - $route.name
  - $route.redirectedFrom


## 리팩토링 2 - 사용자 프로필 컴포넌트 공통화

### 사용자 컴포넌트 데이터 흐름처리 1

`UserProfile.vue` 에서 `computed` 로 사용자정보 접근

```js
// UserProfile.vue
<template>
  <div>
      <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <div>{{ userInfo.id }}</div>
          <div class="time">
            {{ userInfo.created }}
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    computed: {
        userInfo() {
            return this.$store.state.user;
        }
    },
}
</script>
```

### 사용자 컴포넌트 데이터 흐름처리 2

`UserView.vue` 에서 `props` 로 사용자정보 전달 

```js
// UserView.vue
<template>
  <div>
      <user-profile :userInfo="userInfo"></user-profile>
  </div>
</template>
```

```js
// UserProfile.vue
<template>
  <div>
      <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <div>{{ userInfo.id }}</div>
          <div class="time">
            {{ userInfo.created }}
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        userInfo: Object
    }
}
</script>
```

## 리팩토링 3 - Mixin과 하이 오더 컴포넌트

### 하이 오더 컴포넌트

하이 오더 컴포넌트는 **컴포넌트의 로직(코드)을 재사용하기 위한 고급 기술**입니다

  - [리액트 하이 오더 컴포넌트 공식 문서](https://reactjs.org/docs/higher-order-components.html)
  - [컴포넌트의 코드마저 재사용하는 하이 오더 컴포넌트](https://joshua1988.github.io/vue-camp/design/pattern5.html)


### Mixins

믹스인(Mixins)은 여러 컴포넌트 간에 공통으로 사용하고 있는 로직, 기능들을 재사용하는 방법

  - [믹스인 - Vue.js](https://kr.vuejs.org/v2/guide/mixins.html)
  - [믹스인 - 캡틴판교](https://joshua1988.github.io/vue-camp/reuse/mixins.html)

ListMixin.js
```js
import bus from "../utils/bus";

export default {
  // 재사용할 컴포넌트 옵션
  created() {
    bus.$emit('start:spinner');

    setTimeout(() => {
    this.$store.dispatch('FETCH_LIST', this.$route.name)
      .then(() => {
        console.log('fetched');
        bus.$emit('end:spinner');
      })
      .catch((error) => {
        console.log(error);
      });
    }, 1000);  
  }
}
```

Mixin 사용 전
```js
<script>
import ListItem from "../components/ListItem.vue";
import bus from "../utils/bus";

export default {
  components: {
    ListItem
  },
  created() {
    bus.$emit('start:spinner');

    setTimeout(() => {
    this.$store.dispatch('FETCH_NEWS')
      .then(() => {
        console.log('fetched');
        bus.$emit('end:spinner');
      })
      .catch((error) => {
        console.log(error);
      });
    }, 1000);     
  }
}
</script>
```

Mixin 사용 후
```js
<script>
import ListItem from "../components/ListItem.vue";
import ListMixin from "../mixins/ListMixin";

export default {
  components: {
    ListItem
  },
  mixins: [ListMixin]
}
</script>
```


## 리팩토링 4 - 데이터 호출과 UX

### 데이터 호출 시점
1. 라우터 네비게이션 가드  
    - [Vue.js 라우터 네비게이션 가드 알아보기](https://joshua1988.github.io/web-development/vuejs/vue-router-navigation-guards/)
    - 특정 URL로 접근하기 전의 동작을 정의하는 속성(함수)
2. 컴포넌트 라이트 사이클 훅  
    - created : **컴포넌트가 생성**되자마자 호출되는 로직    


## 리팩토링 5 - async & await를 이용한 비동기 처리
> - async function 선언은 AsyncFunction객체를 반환하는 하나의 비동기 함수를 정의
> - 암시적으로 Promise를 사용하여 결과를 반환
> - await 키워드는 async 함수에서만 유효

  - [async function](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function)
  - [프라미스와 async, await](https://ko.javascript.info/async)


### promise, async 샘플 소스

promise sample
```js
    // promise
    FETCH_LIST({ commit }, pageName) {
        return fetchList(pageName)
            .then(response => {
                commit('SET_LIST', response.data);
                return response;
            })
            .catch(error => console.log(error))
    },
```

async sample
```js
    // async
    async FETCH_LIST({ commit }, pageName) {
        try {
            const response = await fetchList(pageName);
            commit('SET_LIST', response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },
```