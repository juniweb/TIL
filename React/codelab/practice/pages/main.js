import axios from 'axios';
import Router from 'next/router';
import { useState, useEffect } from 'react';
import GoodsCard from '../components/GoodsCard'

const goodsArray =[
    {
        img_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy4uAcAgKVcCGKanL9WMEedwXmEjbOH5_UNw&usqp=CAU",
        brand_name: "테디베어",
        category_name: "인형",
        goods_name: "가장 귀여운 곰인형",
        goods_price: "1000000",
        goods_idx: 1,
        brand_idx: 1,
        category_idx: 1,
        rating: 3.5,
    },
    {
        img_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy4uAcAgKVcCGKanL9WMEedwXmEjbOH5_UNw&usqp=CAU",
        brand_name: "테디베어",
        category_name: "인형",
        goods_name: "겁나 귀여운 곰인형",
        goods_price: "1100000",
        goods_idx: 2,
        brand_idx: 1,
        category_idx: 1,
        rating: 3.5,
    },
    {
        img_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy4uAcAgKVcCGKanL9WMEedwXmEjbOH5_UNw&usqp=CAU",
        brand_name: "테디베어",
        category_name: "인형",
        goods_name: "진짜 귀여운 곰인형",
        goods_price: "1200000",
        goods_idx: 3,
        brand_idx: 1,
        category_idx: 1,
        rating: 4.0,
    },
    {
        img_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy4uAcAgKVcCGKanL9WMEedwXmEjbOH5_UNw&usqp=CAU",
        brand_name: "테디베어",
        category_name: "인형",
        goods_name: "많이 귀여운 곰인형",
        goods_price: "1300000",
        goods_idx: 4,
        brand_idx: 1,
        category_idx: 1,
        rating: 4.5,
    }

]

const MainPage = () => {
    const [ goodsList, setGoodList ] = useState(goodsArray);
    const [ serarchVal, setSearchVal ] = useState('');
    const [ userInfo, setUserInfo ] = useState({});
    
    const handleClickCard = (idx) => {
        // Router.push(`/goods_detail?goodsIdx=${idx}`);
        // Router.push({ pathname: '/goods_detail', query: { 'goodsIdx': idx}});
        Router.push(`/goods/${idx}`);
    }

    const handleChange = (e) => {
        const { value } = e.target;
        setSearchVal(value);
    }

    const handleUpdate = (idx) => {
        const newName = '완전 귀여운 곰인형';
        const newPrice = '200000';
        setGoodList(
            goodsList.map(item => 
                item.goods_idx === idx ?
                {
                    ...item,
                    goods_name: newName,
                    goods_price: newPrice
                } : item
            )
        )
    }

    const handleAdd = () => {

        let newObj = {
            img_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy4uAcAgKVcCGKanL9WMEedwXmEjbOH5_UNw&usqp=CAU",
            brand_name: "테디베어",
            category_name: "인형",
            goods_name: "조금 귀여운 곰인형",
            goods_price: Math.floor(( Math.random() * ( 19 - 5 )  ) + 5) * 100000,
            goods_idx: goodsList.length + 1,
            brand_idx: 1,
            category_idx: 1,
            rating: 4.5,
        }

        setGoodList(
            // goodsList.concat(
            //     goodsList.filter(item => item.goods_idx === idx)[0]
            // )

            goodsList.concat(newObj)
        )
    }    

    const handleDelete = (idx) => {
        setGoodList(
            goodsList.filter(item => item.goods_idx !== idx)
        )
    }

    // const getGoodsList = () => {
    //     // api call
    //     axios({
    //         url: "http://localhost:4000/goods",
    //         method : 'get'
    //     })
    //     .then(res => {
    //         console.log(res);
    //         const result = res.data.result;
    //         setGoodList(result);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
    // }

    // useEffect(() => {
    //     // if (!localStorage.getItem('userInfo')) {
    //     //     Router.push('signin');
    //     // } else {
    //     //     const storageData = JSON.parse(localStorage.getItem('userInfo'));
    //     //     setUserInfo(storageData);
    //     // }
    //     getGoodsList()
    // }, [])

    return (
        <div className="main-container">
            <div className="wrapper">
                <div className="header">
                    <div className="title">
                        아기자기 쇼핑몰
                    </div>
                    <div className="userInfo">
                        {/* {userInfo.user_name} */}
                    </div>
                </div>
                <div className="contents">
                    <div className="search">
                        <div className="input-group">
                            {/* <img src="/images/search.png" alt="search-icon" /> */}
                            <input 
                            className="search-input"
                            value={serarchVal}
                            onChange={handleChange}
                            />
                        </div>

                    </div>
                    <div className="goods-list">
                        <ul>
                            {
                                goodsList
                                .filter(item => item.goods_name.includes(serarchVal))
                                .map((item, index) => (
                                    <GoodsCard 
                                    key={`goods-list-${index}`} 
                                    data={item} 
                                    clickCB={() => handleClickCard(item.goods_idx)}
                                    updateCB={() => handleUpdate(item.goods_idx)}
                                    deleteCB={() => handleDelete(item.goods_idx)}
                                    />
/*
                                    <li 
                                    className="goods-card" 
                                    key={'goods-list-'+index}
                                    // onClick={() => handleClickCard(item.goods_idx)}
                                    >
                                        <div className="card-head">
                                            <img src={item.img_path} />
                                        </div>
                                        <div className="card-body">
                                            <div className="brand-name">
                                                {item.brand_name}
                                            </div>
                                            <div className="goods-name">
                                                {item.goods_name}
                                            </div>
                                            <div className="goods-price">
                                                {item.goods_price && item.goods_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                                <span className="won">원</span>
                                            </div>
                                            <div>
                                                <span className="rating">(<span className="num">{item.rating}</span>)</span>
                                            </div>

                                        </div>
                                        <div className="card-foot">
                                            <button className="add-button" 
                                            // onClick={() => handleAdd(item.goods_idx)} >등록</button>
                                            onClick={() => handleUpdate(item.goods_idx)} >수정</button>
                                            <button className="delete-button" 
                                            onClick={() => handleDelete(item.goods_idx)} >삭제</button>
                                        </div>

                                    </li>
*/
                                ))
                            }

                        </ul>
                        
                    </div>
                </div>
              
            </div>
        </div>
    )
}

export default MainPage;