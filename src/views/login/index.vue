<template>
  <div class="login-bg">
    <div class="login">
   <el-form  ref="form" :rules="rules" :model="form" label-width="70px">
  <el-form-item label="用户名" prop="name">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="密码"  prop="password">
    <el-input v-model="form.password"></el-input>
  </el-form-item>
   <el-form-item>
    <el-button type="primary" @click="onSubmit">登录</el-button>
    <el-button  @click="clearAll">重置</el-button>
  </el-form-item>
</el-form>
  </div>
  </div>
</template>

<script>
import db from '@/utils/localstorage'
import axios from 'axios'

  export default {
    data() {
      return {
        form: {
          name: '',
         password:''
        },
        rules: {
          name: [
            { required: true, message: '请输入用户', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ]
        }
      }
    },
    created () {
      this.jumptologin()
    },
    methods: {
      onSubmit() {
        if(this.form.name=="root" && this.form.password=="root"){
          this.$router.push("/content");
        }else{
          this.$message({
            type:"error",
            message: "用户名或密码错误"
          });
        }
      },
      clearAll(){
        this.form.name="";
        this.form.password="";
      },
      jumptologin() {
        this.$get('/login').then((r) => {
        })
      }
    }
  }
</script>
<style scoped>
.login{
  border: 1px solid #ccc;
  width: 300px;
  height: 250px;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  justify-content: center;
  display: flex;
  align-items: center;
}
.el-form {
  width: 90%;
}
.login-bg {
  width: 100vw;
  height: 100vh;
  background: url("./login.jpg") no-repeat; 
  background-size: cover;
}
</style>
