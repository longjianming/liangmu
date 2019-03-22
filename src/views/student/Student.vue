<template>
    <div class="bgfff padding25">
        <div class="title01">用户管理</div>
        <div class="bgf5 padding25 mg-bt30 uerSelect">
            <div class="condition">
                <Form action="" :model="formDta" ref="formDta">
                    <div class="condition-con clear">
                        <div class="condition-page">
                            <span class="zd">输入查询：</span>
                            <div class="condition-input-box">
                                <FormItem prop="userId">
                                    <Input v-model="formDta.userId" size="large" placeholder="用户id/ 幼儿园名/姓名"/>
                                </FormItem>
                            </div>
                        </div>
                        <div class="condition-page">
                            <span class="zd">性别：</span>
                            <div class="condition-input-box">
                                <FormItem prop="sexModel">
                                    <Select v-model="formDta.sexModel" size="large">
                                        <Option v-for="item in sexList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                    </Select>
                                </FormItem>
                            </div>
                        </div>
                        <div class="condition-page">
                            <span class="zd">年龄：</span>
                            <div class="condition-input-box">
                                <FormItem prop="age">
                                    <Input v-model="formDta.age" size="large" placeholder=""/>
                                </FormItem>
                            </div>
                        </div>
                    </div>
                    <div class="condition-con2 clear">
                        <div class="pages" style="margin-right: 6px"><span>所属区域：</span></div>
                        <div class="pages">
                            <FormItem prop="provinceModel">
                                <Select v-model="formDta.provinceModel" size="large" style="width: 160px">
                                    <Option v-for="item in provinceList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                </Select>
                            </FormItem>
                        </div>
                        <div class="pages">
                            <FormItem prop="cityModel">
                                <Select v-model="formDta.cityModel" size="large" style="width: 160px">
                                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                </Select>
                            </FormItem>
                        </div>
                        <div class="pages">
                            <FormItem prop="districtModel">
                                <Select v-model="formDta.districtModel" size="large" style="width: 160px">
                                    <Option v-for="item in districtList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                </Select>
                            </FormItem>
                        </div>
                        <div class="pages">
                            <FormItem prop="kindergartenModel">
                                <span>幼儿园：</span>
                                <Select v-model="formDta.kindergartenModel" size="large" style="width: 160px">
                                    <Option v-for="item in kindergartenList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                </Select>
                            </FormItem>
                        </div>
                    </div>
                </Form>
            </div>
            <div class="buttons">
                <div><Button type="primary">查询</Button></div>
                <div><Button type="primary" @click.native="resetQueryCondition('formDta')">重置</Button></div>
            </div>
        </div>
        <!--表格部分-->
        <div>
            <Row>
                <Col span="12">
                <div class="title01">用户列表</div>
                </Col>
                <Col span="12">
                <div class="text-right">
                    <Button type="primary" @click.native="exportData">导出</Button>
                </div>
                </Col>
            </Row>
        </div>
        <div>
            <template>
                <Table border :columns="columnsStudent" :data="userTableData" ref="userTable">
                    <template slot-scope="{ row }" slot="name">
                        <strong>{{ row.name }}</strong>
                    </template>
                    <template slot-scope="{row,index}" slot="action">
                        <div class="controls">
                            <span @click="showDetail(index)">详细</span>
                        </div>
                    </template>
                </Table>
            </template>


        </div>
        <PageSize :total="total"></PageSize>
    </div>
</template>
<script type="text/ecmascript-6">
    import PageSize from '@/components/pagesize/PageSize.vue'
    export default {
        data () {
            return {
                formDta:{
                    //用户id/ 幼儿园名/姓名/
                    userId: '',
                    //用户年龄
                    age:'',
                    //选中性别的值
                    sexModel:'不限',
                    //选择省份的值
                    provinceModel:'全部',
                    //选择市的值
                    cityModel:'全部',
                    //选择区的值
                    districtModel:'全部',
                    //选择幼儿园的值
                    kindergartenModel:'全部'
                },
                //分页总数
                total:50,
                //省份列表
                provinceList:[
                    {
                        value:'全部',
                        label:'全部'
                    },
                    {
                        value:'广东省',
                        label:'广东省'
                    },
                    {
                        value:'青海省',
                        label:'青海省'
                    },
                    {
                        value:'浙江省',
                        label:'浙江省'
                    },
                    {
                        value:'湖北省',
                        label:'湖北省'
                    }
                ],
                //市列表
                cityList:[
                    {
                        value:'全部',
                        label:'全部'
                    },
                    {
                        value:'广州市',
                        label:'广州市'
                    },
                    {
                        value:'韶关市',
                        label:'韶关市'
                    },
                    {
                        value: '湛江市',
                        label: '湛江市'
                    }
                ],
                //性别列表
                sexList:[
                    {
                        value: '不限',
                        label: '不限'
                    },
                    {
                        value: '男生',
                        label: '男生'
                    },
                    {
                        value: '女生',
                        label: '女生'
                    },
                ],
                //区列表
                districtList:[
                    {
                        value:'全部',
                        label:'全部'
                    },
                    {
                        value:'越秀区',
                        label:'越秀区'
                    },
                    {
                        value:'天河区',
                        label:'天河区'
                    },
                    {
                        value: '番禺区',
                        label: '番禺区'
                    },
                    {
                        value: '海珠区',
                        label: '海珠区'
                    }
                ],
                //幼儿园列表
                kindergartenList:[
                    {
                        value:'全部',
                        label:'全部'
                    },
                    {
                        value: '军区司令部幼儿园',
                        label: '军区司令部幼儿园'
                    },
                    {
                        value: '红黄蓝幼儿园',
                        label: '红黄蓝幼儿园'
                    },
                    {
                        value: '中心幼儿园',
                        label: '中心幼儿园'
                    },
                ],
                //学生表头
                columnsStudent:[
                    {
                        title:'用户ID',
                        key:'tableUserId',
                        align:'center'
                    },
                    {
                        title:'头像',
                        key:'tableUserImg',
                        align:'center'
                    },
                    {
                        title:'姓名',
                        key:'tableUserName',
                        align:'center'
                    },
                    {
                        title:'性别',
                        key:'tableUserSex',
                        align:'center'
                    },
                    {
                        title:'生日',
                        key:'tableUserBir',
                        align:'center'
                    },
                    {
                        title:'所属幼儿园',
                        key:'tableUserSchool',
                        align:'center'
                    },
                    {
                        title:'关联家长数',
                        key:'pparentNub',
                        align:'center'
                    },
                    {
                        title:'主体家长',
                        key:'mainParent',
                        align:'center'
                    },
                    {
                        title:'关系',
                        key:'relationship',
                        align:'center'
                    },
                    {
                        title:'关联手机号',
                        key:'parentPhone',
                        align:'center'
                    },
                    {
                        title:'添加时间',
                        key:'addTime',
                        align:'center'
                    },
                    {
                        title:'操作',
                        key:'kindergarten',
                        align:'center',
                        slot: 'action'
                    },
                ],
                //学生表内容
                userTableData:[
                    {
                        tableUserId:'4',
                        tableUserImg:'',
                        tableUserName:'xxx',
                        tableUserSex:'女',
                        tableUserBir:'12-10',
                        tableUserSchool:'xxx幼儿园',
                        pparentNub:'2',
                        mainParent:'xxx',
                        relationship:'爸爸',
                        parentPhone:'11111111111',
                        addTime:'xxxxxx'
                    },
                    {
                        tableUserId:'5',
                        tableUserImg:'',
                        tableUserName:'xxx',
                        tableUserSex:'女',
                        tableUserBir:'12-10',
                        tableUserSchool:'xxx幼儿园',
                        pparentNub:'2',
                        mainParent:'xxx',
                        relationship:'爸爸',
                        parentPhone:'11111111111',
                        addTime:'xxxxxx'
                    },
                    {
                        tableUserId:'6',
                        tableUserImg:'',
                        tableUserName:'xxx',
                        tableUserSex:'女',
                        tableUserBir:'12-10',
                        tableUserSchool:'xxx幼儿园',
                        pparentNub:'2',
                        mainParent:'xxx',
                        relationship:'爸爸',
                        parentPhone:'11111111111',
                        addTime:'xxxxxx'
                    }
                ]

            }
        },
        components:{
            PageSize
        },
        methods:{
            resetQueryCondition(name){
                this.$refs[name].resetFields()
            },
            exportData(){
                this.$refs.userTable.exportCsv({
                    filename: '用户表'
                });
            },
            showDetail(index){
                this.$router.push({path:'/studentDetail',query:{userId:this.userTableData[index].tableUserId}});
            }
        }
    }
</script>
<style scoped lang="stylus">
    .uerSelect{
        position: relative;
        .condition{
            position: relative;
            margin-right: 100px;
            .condition-con{
                position: relative;
                width: 1080px;
                max-width: 100%;
                .condition-page{
                    position: relative;
                    float: left;
                    width: 32%;
                    margin-right: 2%;
                    &:first-child .condition-input-box{
                         margin-left: 76px;
                     }
                    &:last-child{
                         margin-right: 0;
                     }
                    .zd{
                        position: absolute;
                        top:0;
                        line-height: 36px;
                        left: 0;
                    }
                    .condition-input-box{
                        margin-left:50px;
                        .ivu-form-item{
                            margin-bottom: 12px;
                                      }
                    }
                }
            }
        }
        .condition-con2{
            margin-right: 80px;
            .pages{
                float: left;
                margin-right: 16px;
                line-height: 36px;
            }
        }
        .buttons{
            position: absolute;
            right: 25px;
            top:25px;
            div{
                margin-bottom: 15px;
                button{
                    width: 80px;
                }
            }
        }
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