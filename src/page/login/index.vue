<template>
    <div class="login_page">
        <h1>{{ loginMsg }}</h1>
        <!-- 登录块 -->
        <div class="loginCls" v-show="showLogin">
            <el-form :model="loginForm">
                <el-form-item>
                    <el-row>
                        <el-col :span="6"> 
                            <!-- TODO 国家地区组件 -->
                            <el-input placeholder="中国" />
                        </el-col>
                        <el-col :span="18"> 
                            <el-input v-model ="loginForm.phoneNo" placeholder="输入手机号"/>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="loginForm.password" placeholder="输入登录密码"/>
                </el-form-item>
                <el-button class="loginBtn" @click="loginHandle">登录</el-button>
            </el-form>
        </div>

        <!-- 注册块 -->
        <div class="registerCls" v-show="!showLogin">
        </div>

        <!-- 共通块 -->

    </div>
</template>

<script>
export default {
    data() {
        return {
            loginMsg : '登录页',
            showLogin: true,   // 是否显示登录块
            loginForm:{// 登录表单 
                phoneNo: '',
                password: ''
            }       
        }
    },
    methods: {
        loginHandle: function() {
            alert("登录成功")
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login_page {
    margin-right: 20px;
    margin-left:20px;
}
.loginBtn {
    background-color : #d8d5d5;
    width : 100%;
}
</style>