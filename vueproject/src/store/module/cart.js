import { Toast } from 'vant';

import { fetchUpGoodNum, fetchDelGood } from '../../untils/api'
export default {
    namespaced: true,
    state: {
        GoodLists: []
    },
    getters: {
        len(state){
            return state.GoodLists.length;
        }
    },
    mutations: {
        setList(state, payload) {
			console.log(payload);
			payload.forEach(ele=>{
				if(ele.checked==undefined){
					ele.checked=false
				}
			})
            state.GoodLists = payload;
			
        },
        changeList(state, payload) {
            if (payload.type == "add") {
                let addNum = payload.data.num + 1;
                state.GoodLists.forEach(element => {
                    if (element.good_id == payload.data.good_id) {
                        let data = { "num": addNum, "id": element._id };
                        fetchUpGoodNum(data).then(res => {
                            if (res.data.err == '0') {
                                element.num++;
                                Toast('该商品数量加一')
                            } else {
                                Toast('操作失败,请稍后再试')
                            }
                        })
                    }
                });
            } else {
                let delNum = payload.data.num - 1;
                state.GoodLists.forEach(element => {
                    if (element.good_id == payload.data.good_id) {
                        let data = { "num": delNum, "id": element._id };
                        fetchUpGoodNum(data).then(res => {
                            if (res.data.err == '0') {
                                element.num--;
                                Toast('该商品数量减一')
                            } else {
                                Toast('操作失败,请稍后再试')
                            }
                        })
                    }
                });
            }
        },
        delGoods(state, payload) {
            fetchDelGood(payload).then(res => {
                if (res.data.err == '0') {
                    state.GoodLists.forEach((ele, idx) => {
                        if (ele._id == payload.id) {
                            state.GoodLists.splice(idx, 1);
                            Toast('已删除该商品')
                        }
                    })
                }
            })
        },
        changeState(state,payload){
			console.log(1,payload)
            state.GoodLists.forEach(ele=>{
                ele.checked=payload.val
            })
        }
    },
    actions: {},
}