import fetch from './fetch.js'

function fetchHotGood(params) {
    return fetch({
        url: '/jd/getHotGoodList',
        method: 'GET',
        params
    })
}

function fetchGoodList(params) {
    return fetch({
        url: '/jd/getCateGoodList',
        method: 'GET',
        params
    })
}

function fetchAllcategories(params) {
    return fetch({
        url: '/jd/getAllCates',
        method: 'GET',
        params
    })
}

function fetchGoodDetail(params) {
    return fetchAllcategories({
        url: '/jd/getGoodDetail',
        method: 'GET',
        params
    })
}

function fetchLogin(data) {
    return fetch({
        url: '/jd/login',
        method: 'POST',
        data
    })
}

function fetchRegister(data){
    return fetch({
        url:'/jd/regist',
        method:'POST',
        data
    })
}

function fetchAddGoods(data){
    return fetch({
        url:'/jd/addToCart',
        method:"POST",
        data
    })
}

function fetchGetALLGoods(params){
    return fetch({
        url:'/jd/getCartList',
        method:'GET',
        params
    })
}

function fetchUpGoodNum(data){
    return fetch({
        url:'/jd/updateCartNum',
        method:'POST',
        data
    })
}

function fetchDelGood(params){
    return fetch({
        url:'/jd/deleteToCart',
        method:'GET',
        params
    })
}

function fetchSubmitTocart(data){
    return fetch({
        url:'/jd/submitToCart',
        method:'POST',
        data
    })
}
export {
    fetchHotGood,
    fetchGoodList,
    fetchAllcategories,
    fetchGoodDetail,
    fetchLogin,
    fetchRegister,
    fetchAddGoods,
    fetchGetALLGoods,
    fetchUpGoodNum,
    fetchDelGood,
    fetchSubmitTocart
}