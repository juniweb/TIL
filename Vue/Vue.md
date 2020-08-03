## Flux Pattern
  - [Flux 패턴](https://pcconsoleoraksil.tistory.com/305)
  - [Flux](https://haruair.github.io/flux/docs/overview.html)

![](https://haruair.github.io/flux/img/flux-simple-f8-diagram-explained-1300w.png)

## Vuex Pattern

  - [Vuex 시작하기](https://joshua1988.github.io/web-development/vuejs/vuex-start/)

![](https://joshua1988.github.io/images/posts/web/vuejs/vuex-1/vuex-state-one-way-data-flow.png)


  - [Vuex 주요 기술 요소](https://ict-nroo.tistory.com/107)

### [Methods vs Computed]  

> `Computed` 는 캐싱을 한다는 것이 `Methods` 와 큰 차이점

  - [Computed Properties and Watchers](https://vuejs.org/v2/guide/computed.html)
  - [Methods and Computed Properties](https://medium.com/fullstackio/30-days-of-vue-methods-and-computed-properties-8cc11e147081)
  - [computed 는 어떻게 동작하는가?](https://mygumi.tistory.com/311)

> `computed` 속성은 주의해서 사용해야한다.  
> 이해하지 못하고 쓴다면, 무분별한 종속에 의해 예기치 못한 오류를 가져올 수 있다. 
> <U>하나의 computed 에는 하나의 종속성</U>을 가지게 하는 것이 좋다.

### Vuex Core Concepts

![](https://joshua1988.github.io/images/posts/web/vuejs/vuex-1/vuex-diagram.png)

 - State
   - 모든 컴포넌트에서 사용 가능한 데이터 
   - state 오브젝트는 single 오브젝트 이고, 모든 컴포넌트에서 접근 가능

 - Getters
   - vuex 에서 state 의 데이터를 공통 getter 
   - getter 는 computed 와 같이 캐싱

 - Mutations
   - state 를 수정하는 유일한 방법
   - 동기 처리를 하는 경우, 사용

 - Actions
   - Mutations 을 실행
   - 비동기 처리를 하는 경우, 사용





## 참조
  - [Vue.js 예전 공부 메모](https://velog.io/@kameals/2019-11-13-1111-%EC%9E%91%EC%84%B1%EB%90%A8)
  - [개발하면서 경험으로 알게 된 Vuex에서 Store 활용 방법](https://uxgjs.tistory.com/149)