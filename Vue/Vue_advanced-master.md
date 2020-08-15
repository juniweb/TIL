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




## 참조
  - [Understanding JavaScript’s this keyword](https://javascriptweblog.wordpress.com/2010/08/30/understanding-javascripts-this/)
