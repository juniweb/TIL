import { useState } from "react";

const InputGroupComp = (props) => {
  return (
    <div className="input-group">
        <label>
            {props.name === 'userId'? '아이디' : '비밀번호'}
        </label>
        <input 
        type={props.type} 
        placeholder={`${props.name === 'userId'? '아이디' : '비밀번호'}를 입력해 주세요`}
        name={props.name} 
        value={props.value} 
        onChange={e => props.onChange(e)}>
        </input>
    </div>
  );
}

export default InputGroupComp;