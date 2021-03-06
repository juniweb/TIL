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

## 외부 라이브러리 모듈화 방법(차트)

### 외부 라이브러리 모듈화
  - 이유 : Vue.js 관련 라이브러리가 없을 때 일반 라이브러리를 결합할 수 있어야 함
  - 종류 : chart, datepicker, spinner 등


### 차트 외부 라이브러리 사용법
  1. 차트 라이브러리 npm 으로 설치  
  2. 설치된 라이브러리를 import 로 App.vue에서 로딩  
  3. mounted() 라이프 사이클 훅에서 차트를 그림
  4. 차트를 컴포넌트화
  5. 컴포넌트의 플러그인화
  6. 컴포넌트 통신을 이용한 차트 컴포넌트 기능 결합

### 컴포넌트 플러그인화

1.플러그인 작성 - install 메소드에 구현
```js
import Chart from 'chart.js';

export default {
    install(Vue) {
        Vue.prototype.$_Chart = Chart;
    }
}
```

> 플러그인, mixin 등에서 커스텀 사용자 private 프로터피에는 항상 접두사 `$_`를 사용하라

2. CommonJS 같은 모듈에서 Vue.use() 명식적 호출
```js
Vue.use(ChartPlugin);
```

3. 컴포넌트에서 공통 라이브러리 제외, prototype 의 변수(this.$_Chart) 사용

수정 전
```js
<script>
import Chart from "chart.js";

export default {
    mounted() {
      var lineChart = new Chart(ctx, {
    }
```

수정 후
```js
<script>
// import Chart from "chart.js";

export default {
    mounted() {
      var lineChart = new this.$_Chart(ctx, {
    }
```

 - [플러그인-Vue](https://kr.vuejs.org/v2/guide/plugins.html)


## 컴포넌트 디자인 패턴

  1. Common - 기본적인 컴포넌트 등록과 컴포넌트 통신
  2. Slot - 마크업 확장이 가능한 컴포넌트
  3. Controlled - 결합력이 높은 컴포넌트
  4. Renderless - 데이터 처리 컴포넌트


### 1. Common 

<br>

  - [Common Approach](https://joshua1988.github.io/vue-camp/design/pattern1.html)


#### [ props 타입 지정 ]

  - [Props-공식문서](https://kr.vuejs.org/v2/guide/components-props.html)

props 목록
```js
props: ['title', 'likes', 'isPublished', 'commentIds', 'author']
```

props 타입을 지정하는 props 목록

```js
props: {
  title: String,
  likes: Number,
  isPublished: Boolean,
  commentIds: Array,
  author: Object,
  callback: Function,
  contactsPromise: Promise // or any other constructor
}
```

Prop 유효성 검사
```js
props: {
    // 기본 타입 체크 (`Null`이나 `undefinded`는 모든 타입을 허용합니다.)
    propA: Number,
    // 여러 타입 허용
    propB: [String, Number],
    // 필수 문자열
    propC: {
      type: String,
      required: true
    },
    // 기본값이 있는 숫자
    propD: {
      type: Number,
      default: 100
    },
    // 기본값이 있는 오브젝트
    propE: {
      type: Object,
      // 오브젝트나 배열은 꼭 기본값을 반환하는
      // 팩토리 함수의 형태로 사용되어야 합니다. 
      default: function () {
        return { message: 'hello' }
      }
    },
    // 커스텀 유효성 검사 함수
    propF: {
      validator: function (value) {
        // 값이 항상 아래 세 개의 문자열 중 하나여야 합니다. 
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  }
```

>  - Prop 유효성 검사가 실패하는 경우, Vue는 콘솔에 주의 메세지를 띄웁니다.
>  - Prop의 유효성 검사는 컴포넌트 인스턴스가 생성되기 전에 일어난다는 것을 기억하세요. 즉, 인스턴스의 값(e.g. `data`, `computed`, 등등)은 `default`나 `validator` 함수 안에 사용될 수 없습니다.

### 2. Slot

<br>

  - [Component with Slots](https://joshua1988.github.io/vue-camp/design/pattern3.html)
  - [Slot-공식문서](https://kr.vuejs.org/v2/guide/components-slots.html)


### 3. Controlled

<br>

  - [Building Controlled Components](https://joshua1988.github.io/vue-camp/design/pattern2.html)


### 4. Renderless

<br>

  - [Scoped Slots-공식문서](https://kr.vuejs.org/v2/guide/components-slots.html#%EB%B2%94%EC%9C%84%EA%B0%80-%EC%9E%88%EB%8A%94-%EC%8A%AC%EB%A1%AF-Scoped-Slots)
  - [[Vue.JS] Render Functions & JSX](https://beomy.tistory.com/63)

> 대부분의 경우 Vue는 템플릿을 사용하여 HTML을 작성하는 것을 권장합니다. 하지만 때로는 JavaScript를 사용하여 HTML을 작성을 해야 할 때가 있습니다. 이럴 때 render 함수를 사용하면 됩니다.


## 서비스 배포 환경 구성

### build
`dist` 폴더에 build 파일 생성됨

```
npm run build
```

### 환경변수

  - [환경 변수 파일을 이용한 옵션 설정](https://joshua1988.github.io/vue-camp/deploy/env-setup.html)

env 파일
 `.env` 라는 환경 변수 파일 생성

```
# .env 파일
VUE_APP_LOCAL_URI=http://localhost:8080/
VUE_APP_TEST_SERVER=http://test.com:9090/

clientId=client-test1234
clientServer=server-test1234
```

> Vue CLI 3.x 버전에서 prefix `VUE_APP` 를 사용

```js
// .env 파일
VUE_APP_LOCAL_URI=http://localhost:8080/

console.log(process.env.VUE_APP_LOCAL_URI);
```