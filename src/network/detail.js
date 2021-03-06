import { request } from './request';
export function getdetail(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
};
export function getrecommend() {
    return request({
        url: '/recommend'
    })
};
export class Goods {
    constructor(itemInfo, columns, services) {

        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.realPrice = itemInfo.lowNowPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = services
            //2、
    }
}