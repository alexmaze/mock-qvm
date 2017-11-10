export const API_PARAMS = {
  GetBasicInfoForAccount: ["AliyunId"],
  UpdatePasswordForAccount: ["PK", "NewPassword"],
  ListAliyunAccount: ["MaxItems", "Marker"],
  UpdateStatusForAccount: ["PK", "AccountStatus"],
  CreateAccessKeyForAccount: ["PK", "AKSecret"],
  DeleteAccessKeyForAccount: ["PK", "AKId"],
  ListAccessKeysForAccount: ["PK", "AKStatus", "AKType"],
  UpdateAccessKeyStatusForAccount: ["PK", "AKId", "AKStatus"],
  GetShortTermAccessKeyForAccount: ["PK", "ExpireTime", "IsMfaPresent"],
  GetBasicInfo: [],
  GetAccountSummary: [],
  CreateVMFADevice: ["CreateVMFADevice"],
  DeleteVMFADevice: ["SerialNumber"],
  ListMFADevice: ["SerialNumber"],
  EnableMFADevice: ["EnableMFADevice", "OTPCode1", "OTPCode2"],
  DeactivateMFADevice: ["OTPCode"],
  CheckMFADeviceCode: ["OTPCode"],
  CreateAccessKey: ["AKSecret"],
  DeleteAccessKey: ["AKId"],
  ListAccessKeys: ["AKStatus", "AKType"],
  UpdateAccessKeyStatus: ["AKId", "AKStatus"]
}

export const APIS = [
  {
    group: "合作伙伴帐号相关接口 -- 帐号管理",
    value: [
      { key: "CreateAliyunAccount", value: "合作伙伴创建阿里云帐号" },
      { key: "GetBasicInfoForAccount", value: "合作伙伴依据阿里云Id获取阿里云帐号基本信息" },
      { key: "UpdatePasswordForAccount", value: "合作伙伴更新阿里云帐号密码(需要申请权限)" },
      { key: "UpdateStatusForAccount", value: "合作伙伴更新阿里云帐号状态" },
      { key: "ListAliyunAccount", value: "合作伙伴列出阿里云帐号" }
    ]
  },
  {
    group: "合作伙伴帐号相关接口 -- AK管理",
    value: [
      { key: "CreateAccessKeyForAccount", value: "合作伙伴为阿里云帐号创建AK" },
      { key: "DeleteAccessKeyForAccount", value: "合作伙伴为阿里云帐号删除AK" },
      { key: "ListAccessKeysForAccount", value: "合作伙伴查询阿里云帐号AK列表" },
      {
        key: "GetShortTermAccessKeyForAccount",
        value: "合作伙伴为阿里云帐号创建临时AK"
      }
    ]
  },
  {
    group: "普通阿里云帐号相关接口 -- 帐号管理",
    value: [
      { key: "GetBasicInfo", value: "阿里云帐号查询自身帐号的基本信息" },
      { key: "GetAccountSummary", value: "阿里云帐号查询概要信息" }
    ]
  },
  {
    group: "普通阿里云帐号相关接口 -- MFA设备管理",
    value: [
      { key: "CreateVMFADevice", value: "阿里云帐号为主帐号创建VMFA设备" },
      { key: "DeleteVMFADevice", value: "阿里云帐号为主帐号删除VMFA设备" },
      { key: "ListMFADevice", value: "阿里云帐号查询主帐号MFA设备列表" },
      { key: "EnableMFADevice", value: "阿里云帐号为主帐号绑定MFA设备" },
      { key: "DeactivateMFADevice", value: "阿里云帐号为主帐号解绑MFA设备" },
      { key: "CheckMFADeviceCode", value: "阿里云帐号校验主帐号MFA验证码" }
    ]
  },
  {
    group: "普通阿里云帐号相关接口 -- AK管理",
    value: [
      { key: "CreateAccessKey", value: "阿里云帐号为自身创建AK" },
      { key: "DeleteAccessKey", value: "阿里云帐号为自身删除AK" },
      { key: "ListAccessKeys", value: "阿里云帐号查询自身AK列表" },
      { key: "UpdateAccessKeyStatus", value: "阿里云帐号更新自身指定AK状态" },
      { key: "GetAccessKeyLastUsed", value: "阿里云查询AK最后使用信息" }
    ]
  }
]
