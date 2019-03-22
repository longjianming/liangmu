<template>
    <div class="padding25 bgfff">
        <Row>
            <Col span="12"><div class="title01">编辑信息</div></Col>
            <Col span="12">
            <div class="text-right">
                <Button @click.native="back" type="primary">返回</Button>
            </div>
            </Col>
        </Row>
        <div class="form">
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="110">
                <FormItem label="用户名" prop="name">
                    <Input v-model="formValidate.name" placeholder=""></Input>
                </FormItem>
                <FormItem label="密码" prop="password">
                    <Input v-model="formValidate.password" type="password" placeholder=""></Input>
                </FormItem>
                <FormItem label="邮箱" prop="mail">
                    <Input v-model="formValidate.mail" placeholder=""></Input>
                </FormItem>
                <FormItem label="手机号" prop="tel">
                    <Input v-model="formValidate.tel" placeholder=""></Input>
                </FormItem>
                <FormItem label="权限" prop="level">
                    <Select v-model="formValidate.level" placeholder="">
                        <Option value="管理员">管理员</Option>
                        <Option value="销售">销售</Option>
                    </Select>
                </FormItem>
                <FormItem label="授权截止日期：">
                    <FormItem prop="date">
                        <DatePicker style="width: 100%" type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>
                    </FormItem>
                </FormItem>
                <FormItem style="text-align:center">
                    <Button type="primary" size="large" @click="handleSubmit('formValidate')">发布新版本</Button>
                </FormItem>
            </Form>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        data () {
            return {
                formValidate: {
                    name: this.$route.query.name,
                    password:'',
                    mail: this.$route.query.email,
                    tel:this.$route.query.phone,
                    level:this.$route.query.level,
                    date:this.$route.query.create_time
                },
                ruleValidate: {
                    name: [
                        { required: false, message: 'The name cannot be empty', trigger: 'blur' }
                    ],
                    password:[
                        {required: false, message: 'The name cannot be empty', trigger: 'blur' }
                    ],
                    mail: [
                        { required: false, message: 'Mailbox cannot be empty', trigger: 'blur' },
                        { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
                    ],
                    tel: [
                        { required: false, message: 'Mailbox cannot be empty', trigger: 'blur' }
                    ],
                    level: [
                        { required: false, message: 'Please select the city', trigger: 'change' }
                    ],
                    date: [
                        { required: false, type: 'date', message: 'Please select the date', trigger: 'change' }
                    ]
                }
            }
        },
        mouted(){
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            back(){
                this.$router.go(-1)
            }
        }
    }
</script>
<style scoped>
    .form{
        width: 800px;
        margin: 0 auto;
    }
</style>