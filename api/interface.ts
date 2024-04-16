import {
  devHost,
  devPort,
} from "./config"
import { request } from "./requests"
import AsyncStorage from '@react-native-async-storage/async-storage';
// let defToken =await AsyncStorage.getItem("defToken");
let devaddress = devHost + ":" + devPort
//手机号登录
export async function login_phoneNumber(params: any) {
  return request("post", `${devaddress}/identity/login_phoneNumber`, params, null)
}
//获取房屋数据
export async function getHomeList(params: any) {
  return request("post", `${devaddress}/houseData/homeList`, params, null)
}