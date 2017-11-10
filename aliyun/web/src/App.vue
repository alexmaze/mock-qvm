<template>
  <div id="app">
    <el-card class="main-card">
      <div slot="header" class="clearfix">
        <span>阿里云 AAS API</span>
      </div>
      <div>
        <el-form ref="form" :model="form" label-width="100px" label-position="left">
          <el-form-item label="Aliyun AK">
            <el-input v-model="form.ak" placeholder="必填" style="width: 600px;"></el-input>
          </el-form-item>
          <el-form-item label="Aliyun SK">
            <el-input v-model="form.sk" placeholder="必填" style="width: 600px;"></el-input>
          </el-form-item>

          <el-form-item label="接口">
            <el-select @change="onApiChange" v-model="form.api" style="width: 600px;" placeholder="请选择要调用的API">
              <el-option-group v-for="group in apis" :label="group.group" :key="group.group">
                <el-option v-for="api in group.value" :label="api.value" :value="api.key" :key="api.key"></el-option>
              </el-option-group>
            </el-select>
          </el-form-item>

          <el-form-item label="参数列表" v-model="form.params" placeholder="value">
            <div style="width: 600px; position: relative;" v-for="(param, index) in form.params" :key="index">
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

    <el-card v-show="result != null">
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
import { client } from "./client"
import { API_PARAMS, APIS } from "./config"

export default {
  name: "app",
  data() {
    return {
      apis: APIS,
      form: {
        ak: "",
        sk: "",
        params: [
          {
            key: "Action",
            value: ""
          }
        ]
      },
      result: null
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
      const ps = API_PARAMS[value]
      this.form.params = [
        {
          key: "Action",
          value: value
        }
      ]
      if (ps && ps.forEach) {
        ps.forEach(p => {
          this.form.params.push({
            key: p,
            value: null
          })
        })
      }
    },
    onSubmit() {
      const params = {}
      this.form.params.forEach(i => {
        params[i.key] = i.value
      })

      if (!this.form.ak || !this.form.sk) {
        this.$message.error("AccessKeyId / AccessKeySecret 不能为空!")
        return
      }

      client.get(this.form.ak, this.form.sk, params).then(
        res => {
          this.result = res.data
        },
        err => {
          const e = err.response
          if (e.data && e.data.Code) {
            this.$message.error(`${e.data.Code}: ${e.data.Message}`)
          } else {
            this.$message.error(`${e.status} - ${e.statusText}`)
          }
          this.result = e
        }
      )
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
  top: 0;
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
