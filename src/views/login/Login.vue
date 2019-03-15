<template>
    <div class="login-box">
        <Form ref="formInline" :model="formInline" :rules="ruleInline" class="login-container">
            <div class="title">后台管理系统</div>
            <div class="login-con">
                <FormItem prop="user">
                    <Input prefix="md-person" type="text" size="large" v-model="formInline.user" placeholder="请输入用户名称"></Input>
                </FormItem>
                <FormItem prop="password">
                    <Input prefix="ios-lock" type="password" size="large" v-model="formInline.password" placeholder="请输入登录密码"></Input>
                </FormItem>
                <FormItem>
                    <Button size="large" type="primary" class="ivu-btn-long" @click="handleSubmit('formInline')">登录</Button>
                </FormItem>
            </div>
        </Form>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        name: 'login',
        components: {
        },
        data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name){
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        //this.$Message.success('Success!');
                        let _this=this
                        _this.$router.push('/main');
                    } else {
                        //this.$Message.error('Fail!');
                    }
                })
            }
        }
    }
</script>
<style scoped lang="stylus">
    .login-box{
        position: fixed;
        left: 0;
        right: 0;
        bottom:0;
        top:0;
        background: #4e5463;
        .title{
            background: #363c4b;
            font-size: 36px;
            color: #fff;
            text-align: center;
            padding: 50px 0;
        }
        .login-container {
            width: 450px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 8px;
            overflow: hidden;
            .login-con{
                padding: 60px 90px;
                background: #fff;
            }
        }
    }
</style>