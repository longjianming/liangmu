<template>
    <div class="bgfff padding25">
        <Row>
            <Col span="12">
            <div class="title01">用户管理</div>
            </Col>
            <Col span="12">
            <div class="text-right"><Button type="primary" @click="addUser">添加用户</Button></div>
            </Col>
        </Row>

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
                            <span class="zd">账号性质：</span>
                            <div class="condition-input-box">
                                <FormItem prop="sexModel">
                                    <Select v-model="formDta.sexModel" size="large">
                                        <Option v-for="item in sexList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                    </Select>
                                </FormItem>
                            </div>
                        </div>
                        <div class="condition-page">
                            <span class="zd">会员级别：</span>
                            <div class="condition-input-box">
                                <FormItem prop="rangeModel">
                                    <Select v-model="formDta.rangeModel" size="large">
                                        <Option v-for="item in rangeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                    </Select>
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
                            <FormItem prop="lastTimeModel">
                                <span>剩余时间：</span>
                                <Select v-model="formDta.lastTimeModel" size="large" style="width: 160px">
                                    <Option v-for="item in lastTimeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
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
                            <span @click="remove(index)">编辑</span>
                            <span @click="deleteDetail(index)">删除</span>
                        </div>
                    </template>
                </Table>
            </template>
        </div>
        <PageSize :total="total"></PageSize>
        <!--操作-->

        <!--对话框-->
        <Modal v-model="alertModal" title="警告" @on-ok="ok" @on-cancel="cancel">
            <p>确认删除改数据吗？</p>
        </Modal>
    </div>
</template>
<script type="text/ecmascript-6">
    import PageSize from '@/components/pagesize/PageSize.vue'
    export default {
        data () {
            return {
                //对话框
                alertModal:false,
                formDta:{
                    //用户id/ 幼儿园名/姓名/
                    userId: '',
                    //会员级别
                    rangeModel:'全部',
                    //选中性别的值
                    sexModel:'全部',
                    //选择省份的值
                    provinceModel:'全部',
                    //选择市的值
                    cityModel:'全部',
                    //选择区的值
                    districtModel:'全部',
                    //选择幼儿园的值
                    lastTimeModel:'不限'
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
                //账号性质
                sexList:[
                    {
                        value: '全部',
                        label: '全部'
                    },
                    {
                        value: '正常',
                        label: '正常'
                    },
                    {
                        value: '锁定',
                        label: '锁定'
                    },
                    {
                        value: '过期',
                        label: '过期'
                    },
                ],
                //会员级别
                rangeList:[
                    {
                        value:'全部',
                        label:'全部'
                    },
                    {
                        value:'高端会员',
                        label:'高端会员'
                    },
                    {
                        value:'中端会员',
                        label:'中端会员'
                    },
                    {
                        value:'低端会员',
                        label:'低端会员'
                    },
                    {
                        value:'体验会员',
                        label:'体验会员'
                    }
                ],
                //剩余时间
                lastTimeList:[
                    {
                        value:'不限',
                        label:'不限'
                    },
                    {
                        value: '30天',
                        label: '30天'
                    },
                    {
                        value: '60天',
                        label: '60天'
                    },
                    {
                        value: '90天',
                        label: '90天'
                    },
                    {
                        value: '120天',
                        label: '120天'
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
                        title:'幼儿园名称',
                        key:'tableUserSchool',
                        align:'center'
                    },
                    {
                        title:'园长',
                        key:'president',
                        align:'center'
                    },
                    {
                        title:'账号性质',
                        key:'situation',
                        align:'center'
                    },
                    {
                        title:'会员级别',
                        key:'level',
                        align:'center'
                    },
                    {
                        title:'所属地区',
                        key:'area',
                        align:'center'
                    },

                    {
                        title:'授权设备',
                        key:'device',
                        align:'center',
                        sortable: true
                    },
                    {
                        title:'产品授权时间',
                        key:'authorization',
                        align:'center',
                        width:'200',
                    },
                    {
                        title:'剩余时间',
                        key:'remaining',
                        align:'center',
                        sortable: true
                    },
                    {
                        title:'操作',
                        key:'kindergarten',
                        align:'center',
                        width:'180',
                        slot: 'action'
                    },
                ],
                //学生表内容
                userTableData:[
                    {
                        tableUserId:'0000010',
                        tableUserSchool:'xxx幼儿园',
                        president:'李明',
                        situation:'正常',
                        level:'高端',
                        area:'广东广州天河',
                        device:'1',
                        authorization:'2019-01-02 - 2019-09-30',
                        remaining:'30天',
                    },
                    {
                        tableUserId:'0000010',
                        tableUserSchool:'xxx幼儿园',
                        president:'李明',
                        situation:'正常',
                        level:'高端',
                        area:'广东广州天河',
                        device:'1',
                        authorization:'2019-01-02 - 2019-09-30',
                        remaining:'30天',
                    },
                    {
                        tableUserId:'0000010',
                        tableUserSchool:'xxx幼儿园',
                        president:'李明',
                        situation:'正常',
                        level:'高端',
                        area:'广东广州天河',
                        device:'3',
                        authorization:'2019-01-02 - 2019-09-30',
                        remaining:'30天',
                    },
                    {
                        tableUserId:'0000010',
                        tableUserSchool:'xxx幼儿园',
                        president:'李明',
                        situation:'正常',
                        level:'高端',
                        area:'广东广州天河',
                        device:'1',
                        authorization:'2019-01-02 - 2019-09-30',
                        remaining:'90天',
                    },
                    {
                        tableUserId:'0000010',
                        tableUserSchool:'xxx幼儿园',
                        president:'李明',
                        situation:'正常',
                        level:'高端',
                        area:'广东广州天河',
                        device:'1',
                        authorization:'2019-01-02 - 2019-09-30',
                        remaining:'50天',
                    },
                    {
                        tableUserId:'0000010',
                        tableUserSchool:'xxx幼儿园',
                        president:'李明',
                        situation:'正常',
                        level:'高端',
                        area:'广东广州天河',
                        device:'1',
                        authorization:'2019-01-02 - 2019-09-30',
                        remaining:'30天',
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
            //添加用户
            addUser(){
                this.$router.push({path:'/addKindergarten'})
            },
            showDetail(index){
                this.$router.push({path:'/kindergartenDetail',query:{userId:this.userTableData[index].tableUserId}});
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
                        margin-left:76px;
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