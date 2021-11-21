import { useState, useEffect } from 'react';
import Router from 'next/router';
import InputGroup from '../components/form/inputGroup';
import Button from '../components/form/button';
import axios from 'axios';

const SignInPage = () => {
    const [ userInfo, setUserInfo ] = useState({
        userId : '',
        userPwd : ''
    })

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setUserInfo({
            ...userInfo,
            [name] : value
        });
    }

    const handleSubmit = () => {
        if (!userInfo.userId) { return alert('아이디를 입력해 주세요'); }
        if (!userInfo.userPwd) { return alert('비밀번호를 입력해 주세요'); }

        // fetch('apiURL', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': '*/*',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(userInfo)
        // })
        // .then(res => {
        //     console.log(res);
        //     return res.json();
        // })
        // .then(responseJSON => {
        //     console.log(responseJSON);
        // })
        // .catch(err => {
        //     console.log(err);
        // })

        axios({
            url: 'apiURL',
            method: 'POST',
            data: {
                user_id: userInfo.userId,
                user_pwd: userInfo.userPwd
            }
        })
        .then(res => {
            console.log(res.data);
            const result = res.data.result;
            localStorage.setItem('userInfo', JSON.stringify(result));
            Router.push('/main');
        })
        .catch(err => {
            console.log(err.response.status);
            const status = err.response.status;
            if(status == 401) {
                return alert('비밀번호가 유효하지 않습니다.');
            }
            if(status == 404) {
                return alert('등록된 유저가 아닙니다.');
            }
        })
    }

    let userObj = {
        user_id: 'juniweb',
        user_name : '임희준',
        user_idx : 1
    }

    localStorage.setItem('userInfo', JSON.stringify(userObj));

    useEffect(() => {
        console.log(userInfo);
    }, [userInfo]);

    return (
        <div className="signin-container">
            <div className="form">
                <div className="signin-box">
                    <div className="form-head">
                        <p className="box-title">로그인</p>
                    </div>
                    <div className="form-body">
                        <InputGroup 
                        type="text" 
                        name="userId" 
                        value={userInfo.userId} 
                        onChange={handleChange}>
                        </InputGroup>
                        <InputGroup 
                        type="password" 
                        name="userPwd" 
                        value={userInfo.userPwd} 
                        onChange={handleChange}>
                        </InputGroup>
                    </div>
                    <div className="form-footer">
                        <Button onClick={handleSubmit}>로그인 하실래요?</Button>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default SignInPage;