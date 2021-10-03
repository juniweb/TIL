import { useState } from 'react';
import InputGroup from '../components/form/inputGroup';
import Button from '../components/form/button';

const SignInPage = () => {
    const [ userId, setUserId ] = useState('');
    const [ userPwd, setuserPwd ] = useState('');

    const handleChangeInput = (name, value) => {
        name === 'userId' ? setUserId(value) : setuserPwd(value);

        console.log('name: ', name);
        console.log('value: ', value);
    }

    const handleSubmit = () => {
        console.log(userId);
        console.log(userPwd);
    }

    return (
        <div className="signin-container">
            <div className="wrapper">
                <div className="signin-box">
                    <div className="box-head">
                        <p className="box-title">로그인</p>
                    </div>
                    <div className="box-body">
                        {/* <div className="input-group">
                            <label>아이디</label>
                            <input type="text" placeholder="아이디를 입력해 주세요"></input>
                        </div>
                        <div className="input-group">
                            <label>비밀번호</label>
                            <input type="password" placeholder="비밀번호를 입력해 주세요"></input>
                        </div> */}
                        <InputGroup 
                        type="text" 
                        name="userId" 
                        value={userId} 
                        onChange={handleChangeInput}>
                        </InputGroup>
                        <InputGroup 
                        type="password" 
                        name="userPwd" 
                        value={userPwd} 
                        onChange={handleChangeInput}>
                        </InputGroup>
                    </div>
                    <div className="box-footer">
                        <Button onClick={handleSubmit}>로그인 하실래요?</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignInPage;