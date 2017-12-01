const fs = require("fs")
const path = require("path")
const data = `DestGroupId	String	否	同一Region内的目标安全组Id，DestGroupId或者DestCidrIp参数必须设置一项，如果两项都设置，则默认对DestCidrIp授权。如果指定了该字段且没有指定DestCidrIp，则NicType只能选择intranet
DestGroupOwnerAccount	String	否	跨用户安全组授权时，目标安全组所属用户阿里云账号。该参数可选，如果该参数及DestGroupOwnerId均未设置，则默认为同一账户安全组间授权。DestCidrIp如果已经被设置，则该参数无效。
DestGroupOwnerId	String	否	跨用户安全组授权时，目标安全组所属用户阿里云账号ID。该参数可选，如果该参数及DestGroupOwnerAccount均未设置，则默认为同一账户安全组间授权。DestCidrIp如果已经被设置，则该参数无效。
DestCidrIp	String	否	目标IP地址范围，必须采用CIDR格式来指定IP地址范围，默认值为0.0.0.0/0（表示不受限制），其他支持的格式如10.159.6.18/12。仅支持IPV4。
SourceCidrIp	String	否	源IP地址范围，可选参数，不填表示SecurityGroupId下的所有ip都适用，否则则只有指定的ip适用。必须采用CIDR格式（如10.159.6.18/12）来指定IP地址范围。仅支持IPV4。
SourcePortRange	String	否	源IP协议相关的端口号范围，可选参数，不填则不限制端口。
Policy	String	否	授权策略，参数值可为：accept（接受访问）, drop (拒绝访问) 
Priority	String	否	授权策略优先级，参数值可为：1-100 
NicType	String	否	网络类型，取值：
Description	String	否	安全组规则的描述信息。不超过512个字符。`

const result = render(data)

fs.writeFile(path.join(__dirname, "output.json"), result)

function render(obj) {
  let arr = data.split("\n")
  arr = arr.map(i => i.split("\t"))

  arr = arr.map(i => [toUnderline(i[0]), toUnderline(i[1]), i[2], i[3]])

  let ret = []

  ret.push("export interface IInterface {")
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    ret.push(`  // ${item[3]}`)
    ret.push(`  ${item[0]}${item[2] === "否" ? "?:" : ":"} ${item[1]}`)
  }

  ret.push("}")

  return ret.join("\n")
}

function toUnderline(str) {
  const ret = str.replace(/([A-Z])/g, "_$1").toLowerCase()
  if (ret[0] == "_") {
    return ret.substr(1)
  }
  return ret
}
