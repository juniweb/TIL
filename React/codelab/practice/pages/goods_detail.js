import axios from 'axios';
import Router, { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
// import Header from '../components/layout/header';

const GoodsDetailPage = (props) => {

    console.log('props', props);
    const router = useRouter();
    console.log('useRouter', router);

    // const getGoodsDetail = (idx) => {

    // }

    // useEffect(() => {
    //     getGoodsDetail(router.query.goodsIdx);
    // })

    return (
        <div className="goods-detail-container">
            {/* <Header page='goods_detail' /> */}
        </div>
    )

}

GoodsDetailPage.getInitialProps = async context => {
    const { query } = context;
    return { query };
    // return context ? { from: 'server'} : { from: 'client'}
}

export default GoodsDetailPage;