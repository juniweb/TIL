const GoodsCardComp = ({data, clickCB, updateCB, deleteCB}) => {
    return (
        <li 
        className="goods-card" 
        // key={key}
        onClick={clickCB}
        >
             <div className="card-head">
                 <img src={data.img_path} />
             </div>
             <div className="card-body">
                 <div className="brand-name">
                     {data.brand_name}
                 </div>
                 <div className="goods-name">
                     {data.goods_name}
                 </div>
                 <div className="goods-price">
                     {data.goods_price && data.goods_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                     <span className="won">원</span>
                 </div>
                 <div>
                     <span className="rating">(<span className="num">{data.rating}</span>)</span>
                 </div>

             </div>
             <div className="card-foot">
                 <button className="add-button" 
                 // onClick={() => handleAdd(data.goods_idx)} >등록</button>
                 onClick={updateCB} >수정</button>
                 <button className="delete-button" 
                 onClick={deleteCB} >삭제</button>
             </div>

        </li>        
    )
}

export default GoodsCardComp;