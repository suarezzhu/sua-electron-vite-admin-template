/**
 * @name: sys
 * @author: suarezzhu
 * @date: 2023/2/1 10:48
 * @description：sys
 * @update: 2023/2/1 10:48
 */

import request from "@renderer/utils/request";
import {ResultData} from "@renderer/model";



export  function sysApi(){

    return{
        getDictList:(params?:object)=>{
            return request<ResultData<any>>(
                {
                    url:'/sua/sys/getDictList',
                    method:'get',
                    params
                }
            )
        }

    }



}