import { useState, useEffect } from "react";
import UserName from "../components/userName"
// state 기능 및 라이프 사이클 기능을 사용할 수 없음(stateless)
// 리액트 버전 16.8부터 Hook이 등장
// 클래스형 컴포넌트보다 간단
// 클래스형 컴포넌트보다 메모리 자원을 적게 사용

// 비구조화 할 당 방식으로 props 사용 가능

const FunctionalComponent = () => {
    // const [ state, setState ] = useState('initial state);
    const [ name, setName ] = useState('홍길동');
    const [ age, setAge ] = useState(20);
    const [ userInfo, setUserInfo ] = useState({
        name: "이순신",
        age: 22
    })

    useEffect(() => {
        console.log('component did mount');
    }, []);

    useEffect(() => {
        if(name != '홍길동') {
            console.log('component did update');
            setAge(30);
        }

        // return () => {
        //     console.log('component will mount');
        // };
    }, [name, age]);

    return (
        <div>
            함수형 컴포넌트<br/>
            <div>
                 <p>이름(부모) : {name}</p>
                <p>나이(부모) : {age}</p>
            </div>
            <UserName myname={name} myage={age} clickFunc={setName}/>
            {/* <p>{name}, {age}세</p> */}
            {/* <p>{userInfo.name}, {userInfo.age}세</p> */}
            {/* <button onClick={() => setName('김철수')}>변경</button> */}
        </div>
    )
}

export default FunctionalComponent;