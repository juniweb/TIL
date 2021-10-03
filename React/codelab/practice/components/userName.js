import { useState } from "react";

const userNameComp = ({myname, myage, clickFunc}) => {
  // const [childName, setChildName] = useState(myname);

  return (
    <div>
      <p>자식 컴포넌트</p>
      {/* <p>{props.myname}</p> */}
      <p>이름 : {myname}</p>
      <p>나이 : {myage}</p>
      {/* <button onClick={() => setChildName('김철수')}>변경</button> */}
      <button onClick={() => clickFunc('김철수')}>변경</button>
    </div>
  );
}

export default userNameComp;