import React, { Component } from 'react';

// state 기능 및 라이프 사이클 기능을 사용 가능
// render 함수가 반드시 필요

class ClassComponet extends Component {
    constructor (props) { // 생성자 함수
      super(props); // constructor를 사용하면 항상 병용, this를 초기화, props를 넣어줘야 this.props 사용 가능
      this.state ={ // initial state를 선언
        key: 'value'
      };
      this.handleClick = this.handleClick.bind(this);
      console.log('construntor');
    }

    static defaultProps = {
      key: 'value'
    }

    handleClick () {
      console.log(this);
      this.setState({key: 'value2'})
    }

    // componentWillMount(){
    //   console.log('componentWillMount');  // DOM이 생성되지 않은 단계, setState 실행 X
    // }

    componentDidMount(){
      // 외부 데이터 가져오기
      // this.setState({})
      console.log('componentDidMount');  // DOM이 생성된 단계, setState를 통해 DOM의 제어가 가능
    }

    // componentWillReceiveProps(nextProps){
    //   console.log('componentWillReceiveProps');
    // }

    shouldComponentUpdate(nextProps, nextState){
      console.log('shouldComponentUpdate');
      // 최적화
      return true;
    }

    // componentWillUpdate(nextProps, nextState){
    //   console.log('componentWillUpdate');
    // }
    // setState() => 무한루프

    componentDidUpdate(prevProps, prevState){
      console.log('componentDidUpdate');
    }

    // componentWillUnmount(){
    //   console.log('componentWillUnmount');
    // }


    // componentDidCatch(){
    //   // 에러 핸들링
    // }

    render(){
      // render 함수를 통해 props를 조회
      // 비구조화 할당 방식으로 state와 props 사용 가능
      const {key} = this.state;
      const {name, age, gender} = this.props;
      console.log('render');

      return (
        <div>
          <h1>클래스형 컴포넌트</h1>
          <p>{key}</p>
          <button onClick={this.handleClick}>클릭</button>
        </div>
      );
    }
}

export default ClassComponet;