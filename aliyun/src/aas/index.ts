import { client, IRequestParam } from "./lib/Client"

// 合作伙伴创建阿里云帐号(CreateAliyunAccount)
export interface ICreateAliyunAccount extends IRequestParam {
  AliyunId?: string // 如果无此参数，则按照规则自动生成; 格式为合作伙伴前缀 (最长10字符)+随机 串(10字符 )@aliyun.com
}
export function createAliyunAccount(AliyunId?: string) {
  return client.get({
    Action: "CreateAliyunAccount",
    AliyunId
  })
}

// 获取阿里云帐号基本信息(GetBasicInfoForAccount)
export interface IGetBasicInfoForAccount extends IRequestParam {
  AliyunId: string
}
export function getBasicInfoForAccount(AliyunId: string) {
  return client.get({
    Action: "GetBasicInfoForAccount",
    AliyunId
  })
}

// 列出合作伙伴创建的帐号(ListAliyunAccount)
export interface IListAliyunAccount extends IRequestParam {
  MaxItems?: number // default 30
  Marker?: string
}
export function listAliyunAccount(MaxItems?: number, Marker?: string) {
  return client.get({
    Action: "ListAliyunAccount",
    MaxItems,
    Marker
  })
}
