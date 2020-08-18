import axios from "axios";

// 1. HTTP Request & Response 와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0'
}

// 2. API 함수들을 정리
function fetchList(pageName) {
    return axios.get(`${config.baseUrl}/${pageName}/1.json`);
}

function fetchUserInfo(userName) {
    return axios.get(`${config.baseUrl}/user/${userName}.json`);
}

// function fetchItemInfo(itemId) {
//     return axios.get(`${config.baseUrl}/item/${itemId}.json`);
// }

async function fetchItemInfo(itemId) {
    try {
        const response = await axios.get(`${config.baseUrl}/item/${itemId}.json`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export {
    fetchList,
    fetchUserInfo,
    fetchItemInfo
}
