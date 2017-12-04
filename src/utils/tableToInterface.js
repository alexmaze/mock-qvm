const fs = require("fs")
const path = require("path")
const data = `ImageId	String	镜像编码
ImageVersion	String	镜像版本
OSType	String	操作系统类型，可选值有：windows linux
Platform	String	操作系统平台
Architecture	String	镜像系统类型：i386 | x86_64
ImageName	String	镜像的名称
Description	String	描述信息
Size	Integer	镜像大小
ImageOwnerAlias	String	镜像所有者别名 有效值： system – 系统公共镜像 self – 用户的自定义镜像 others – 其他用户的公开镜像 marketplace -镜像市场镜像
OSName	String	操作系统的显示名称
DiskDeviceMappings	DiskDeviceMapping	镜像下包含磁盘和快照的系统描述
ProductCode	String	镜像市场的镜像商品标示
IsSubscribed	String	用户是否订阅了该镜像的ProductCode对应的镜像商品的服务条款. true：表示已经订阅 false：表示未订阅
Progress	String	镜像完成的进度，单位为百分比
Status	String	镜像的状态，可能的值有： UnAvailable 不可用 Available 可用 Creating 创建中 CreateFailed 创建失败
CreationTime	String	创建时间。按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mmZ
Usage	String	有引用关系的资源类型，instance | none
IsCopied	String	是否是拷贝的镜像，true | false`

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
    // ret.push(`  // ${item[3]}`)
    // ret.push(`  ${item[0]}${item[2] === "否" ? "?:" : ":"} ${item[1]}`)
    ret.push(`  // ${item[2]}`)
    ret.push(`  ${item[0]}: ${item[1]}`)
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
