<template>
  <div id="app">
    <el-card class="main-card">
      <div slot="header" class="clearfix">
        <span>阿里云 AAS API</span>
      </div>
      <div>
        <el-form ref="form" :model="form" label-width="100px" label-position="left">
          <el-form-item label="接口">
            <el-select @change="onApiChange" v-model="form.api" style="width: 600px;" placeholder="请选择要调用的API">
              <el-option-group v-for="group in apis" :label="group.group" :key="group.group">
                <el-option v-for="api in group.value" :label="api.value" :value="api.key" :key="api.key"></el-option>
              </el-option-group>
            </el-select>
          </el-form-item>

          <el-form-item label="参数列表" v-model="form.params" placeholder="value">
            <div style="width: 600px;" v-for="(param, index) in form.params" :key="index">
              <el-input :disabled="index == 0" v-model="form.params[index].key" style="width: 200px;" placeholder="key"></el-input>
              :
              <el-input :disabled="index == 0" v-model="form.params[index].value" style="width: 388px;" placeholder="value"></el-input>
              <el-button v-if="index != 0" type="text" icon="el-icon-close" class="icon-btn" @click="onRemoveParam(index)"></el-button>
            </div>
            <el-button @click="onAddParam()" type="primary" size="mini" style="width: 600px;" round plain>添加参数</el-button>

          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit" style="width: 600px;">发送</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>

    <el-card>
      <div slot="header" class="clearfix">
        <span>返回结果</span>
      </div>
      <div>
        <pre v-html="syntaxHighlight(result)"></pre>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      apis: [
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
      ],
      form: {
        params: [
          {
            key: "Action",
            value: ""
          }
        ]
      },
      a: false,
      result: { a: 3 }
    }
  },
  methods: {
    onAddParam() {
      this.form.params.push({
        key: "",
        value: ""
      })
    },
    onRemoveParam(index) {
      this.form.params.splice(index, 1)
    },
    onApiChange(value) {
      this.form.params[0].value = value
    },
    onSubmit() {
      console.log(this.form)
    },
    syntaxHighlight(obj) {
      let json = JSON.stringify(obj, null, 2)
      json = json
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
      return json.replace(
        /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
        function(match) {
          var cls = "number"
          if (/^"/.test(match)) {
            if (/:$/.test(match)) {
              cls = "key"
            } else {
              cls = "string"
            }
          } else if (/true|false/.test(match)) {
            cls = "boolean"
          } else if (/null/.test(match)) {
            cls = "null"
          }
          return '<span class="' + cls + '">' + match + "</span>"
        }
      )
    }
  }
}
</script>

<style>
.main-card {
  margin-bottom: 10px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.icon-btn {
  font-size: 24px;
  padding: 0;
  line-height: 41px;
  vertical-align: top;
  position: absolute;
  left: -25px;
}
pre {
  font-size: 14px;
  font-weight: bold;
  background-color: #1e1e1e;
  color: #d4d4d4;
  padding: 20px;
}
.string {
  color: #ce916c;
}
.number {
  color: #b5cea8;
}
.boolean {
  color: #569cd6;
}
.null {
  color: magenta;
}
.key {
  color: #94dcfe;
}
</style>
