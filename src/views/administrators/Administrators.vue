<template>
    <div class="bgfff padding25">
        <Row>
            <Col span="12"><div class="title01">管理员信息</div></Col>
            <Col span="12">
            <div class="text-right">
                <Button @click.native="addUser" type="primary">添加</Button>
            </div>
            </Col>
        </Row>
        <template>
            <Table border :columns="columns7" :data="data6">
                <template slot-scope="{ row }" slot="name">
                    <strong>{{ row.name }}</strong>
                </template>
                <template slot-scope="{row,index}" slot="action">
                    <div class="controls">
                        <span @click="edit(index)">编辑</span>
                        <span @click="deleteDetail(index)">删除</span>
                    </div>
                </template>
            </Table>
        </template>
        <!--分页-->
        <Page></Page>
        <!--对话框-->
        <Modal v-model="alertModal" title="警告" @on-ok="ok" @on-cancel="cancel">
            <p>确认删除改数据吗？</p>
        </Modal>
    </div>
</template>
<script type="text/ecmascript-6">
    import Page from '@/components/page/Page.vue'
    import {postDada} from '@/api/api.js'
    export default {
        data () {
        return {
            //对话框
            alertModal:false,
            admin:null,
            columns7: [
                {
                    title: 'ID',
                    key: 'Id',
                    align: 'center'
                },
                {
                    title: '邮箱',
                    key: 'email',
                    align: 'center'
                },
                {
                    title: '手机号',
                    key: 'phone',
                    align: 'center'
                },
                {
                    title: '真实姓名',
                    key: 'name',
                    align: 'center'
                },
                {
                    title: '权限',
                    key: 'level',
                    align: 'center'
                },
                {
                    title: '注册日期',
                    key: 'create_time',
                    align: 'center'
                },
                {
                    title: '操作',
                    key: 'operation',
                    width: 150,
                    align: 'center',
                    slot: 'action'
                }
            ],
            data6: [
                {
                    id:'5',
                    email:'499409110@qq.com',
                    phone:'15111111111',
                    name: '小红',
                    level:'管理员',
                    create_time: '2019-01-10 15:30:50'

                }
            ]
        }
    },
    components: {
        Page
    },
    mounted(){
        var _this=this
        this.getdata()

    },
    methods: {
        show (index) {
            this.$router.push({path:'/AddAdmin',query:{Id:this.data6[index].Id,email:this.data6[index].email,phone:this.data6[index].phone,Name:this.data6[index].name,level:this.data6[index].level,create_time:this.data6[index].create_time}});
        },
        remove (index) {
            this.data6.splice(index, 1);
        },
        getdata(){
            postDada('/account/list').then(res=>{
                res.data.accounts.map(val=>{
                    if(val.level==1){
                        val.level='管理员'
                    }else{
                        val.level='销售'
                    }
                })
                this.data6=res.data.accounts;
            })
        },
        addUser(){
            this.$router.push({path:'/AddAdmin'});
        },
        //编辑
        edit(index){
            this.$router.push({path:'/AddAdmin',query:{name:this.data6[index].name,email:this.data6[index].email,phone:this.data6[index].phone,level:this.data6[index].level,create_time:this.data6[index].create_time}});
        },
        //删除
        deleteDetail(){
            this.alertModal=true
        },
        ok(){
            console.log('数据已删除');
        },
        cancel(){

        }
    }
    }
</script>
<style scoped lang="stylus">
    Button{
        width: 80px;
    }
    .controls{
        span{
            cursor: pointer;
            margin: 0 5px;
            display:inline-block;
            &:hover{
                 text-decoration: underline;
             }
        }
    }
</style>