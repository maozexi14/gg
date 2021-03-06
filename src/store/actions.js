export default {
    addCart(context, payload) {
        return new Promise((resolve, reject) => {
            let oldProduct = context.state.cartList.find(item => item.iid === payload.iid);
            if (oldProduct) {
                context.commit('addCount', oldProduct)
                resolve('加1')
            } else {
                context.commit('addToCart', payload)
                resolve('新商品')
            }
        })
    },
};