<template>
    <div>
        <div class="bgfff mg-bt30 padding25">
            <Row>
                <Col span="12"><div class="title01">用户管理</div></Col>
                <Col span="12">
                <div class="text-right">
                    <Button type="primary" @click.native="back">返回</Button>
                </div>
                </Col>
            </Row>
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td rowspan="6" class="bgf5 text-center">
                            <div class="img"><img src="@/assets/phone.jpg" alt=""/></div>
                            <p class="uerid">用户ID:{{this.$route.query.userId}}</p>
                            <div class="school">高级会员</div>
                        </td>
                        <td class="bgf5"style="width: 200px">用户ID：</td>
                        <td class="text-center">{{this.$route.query.userId}}</td>
                        <td class="bgf5" style="width: 200px">所属品牌：</td>
                        <td colspan="2" class="text-center">xxx教育集团</td>
                    </tr>
                    <tr>
                        <td class="bgf5">园长姓名：</td>
                        <td class="text-center">李明</td>
                        <td class="bgf5">联系方式：</td>
                        <td class="text-center">
                            <Select v-model="telModel">
                                <Option v-for="item in telList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </td>
                        <td class="text-center">020-870000</td>
                    </tr>
                    <tr>
                        <td class="bgf5">幼儿园性质：</td>
                        <td class="text-center">公办</td>
                        <td class="bgf5">学费标准：</td>
                        <td class="text-center">
                            <Select v-model="classModel">
                                <Option v-for="item in classList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </td>
                        <td class="text-center">1000</td>
                    </tr>
                    <tr>
                        <td class="bgf5">学生数：</td>
                        <td class="text-center">210</td>
                        <td class="bgf5">教师数：</td>
                        <td colspan="2" class="text-center">30</td>
                    </tr>
                    <tr>
                        <td class="bgf5">用户名：</td>
                        <td class="text-center">xxxxx@xx.com</td>
                        <td class="bgf5">注册日期：</td>
                        <td colspan="2" class="text-center">2018-05-06</td>
                    </tr>
                    <tr>
                        <td class="bgf5">授权设备数：</td>
                        <td class="text-center">1</td>
                        <td class="bgf5">联系地址：</td>
                        <td colspan="2" class="text-center">广东省广州市越秀区xxxx路xxxx号</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- 产品账户-->
        <div class="bgfff mg-bt30 padding25">
            <div class="title01">产品账户</div>
            <Table :columns="relativeHeader" :data="relativeData"></Table>
        </div>
        <!--园所介绍-->
        <div class="bgfff mg-bt30 padding25">
            <div class="title01">园所介绍</div>
            <div class="descrdes mg-bt30">
                {{des}}
            </div>
            <div class="video-slide">
                <div class="view">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">1</div>
                            <div class="swiper-slide">2</div>
                            <div class="swiper-slide">3</div>
                            <div class="swiper-slide">4</div>
                            <div class="swiper-slide">5</div>
                            <div class="swiper-slide">6</div>
                            <div class="swiper-slide">7</div>
                        </div>
                    </div>
                </div>
                <div class="dots">
                    <a class="arrow-left dots-btn"><Icon type="ios-arrow-back" /></a>
                    <a class="arrow-right dots-btn"><Icon type="ios-arrow-forward" /></a>
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide"><div class="swiper-dots">1</div></div>
                            <div class="swiper-slide"><div class="swiper-dots">2</div></div>
                            <div class="swiper-slide"><div class="swiper-dots">3</div></div>
                            <div class="swiper-slide"><div class="swiper-dots">4</div></div>
                            <div class="swiper-slide"><div class="swiper-dots">5</div></div>
                            <div class="swiper-slide"><div class="swiper-dots">6</div></div>
                            <div class="swiper-slide"><div class="swiper-dots">7</div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--授权产品-->
        <div class="mg-bt30 bgfff padding25">
            <div class="title01">授权产品</div>
            <div class="bgf5 padding15 mg-bt30 relative">
                <div class="choose-content">
                    <span>选择账户 :</span>
                    <Select v-model="accountModel" style="width:180px">
                        <Option v-for="item in accountList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                    <span>系列 :</span>
                    <Select v-model="seriesModel" style="width:180px">
                        <Option v-for="item in seriesList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                    <span>输入查询 :</span>
                    <Input v-model="searchModel" placeholder="系列名/产品名称" style="width: 180px" />
                </div>
                <div class="cx"><Button type="primary">查询</Button></div>
            </div>
            <Table :columns="proHeader" :data="proData"></Table>
            <PageSize total="50"></PageSize>
        </div>
        <div class="mg-bt30 bgfff padding25">
            <div class="title01">产品记录</div>
            <div class="bgf5 padding15 mg-bt30 relative">
                <div class="choose-content">
                    <span>选择账户 :</span>
                    <Select v-model="proAccountModel" style="width:180px">
                        <Option v-for="item in proAccountList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </div>
                <div class="cx"><Button type="primary">查询</Button></div>
            </div>
            <Table :columns="recordHeader" :data="recordData"></Table>
            <PageSize total="50"></PageSize>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import Table from '@/components/table/Table.vue'
    import PageSize from '@/components/pagesize/PageSize.vue'
    import Swiper from 'swiper'
    export default {
        data () {
            return {
                //电话
                telList: [
                    {
                        value: '办公室',
                        label: '办公室'
                    },
                    {
                        value: '手机号',
                        label: '手机号'
                    },
                ],
                telModel: '办公室',
                //班级
                classList: [
                    {
                        value: '大班',
                        label: '大班'
                    },
                    {
                        value: '中班',
                        label: '中班'
                    },
                    {
                        value: '小班',
                        label: '小班'
                    },
                    {
                        value: '小小班',
                        label: '小小班'
                    }
                ],
                classModel: '大班',
                //产品账户表头
                relativeHeader: [
                    {
                        title: '序号',
                        key: 'number',
                        align:'center'
                    },
                    {
                        title: '用户名',
                        key: 'name',
                        align:'center'
                    },
                    {
                        title: '开设时间',
                        key: 'time',
                        align:'center'
                    },
                    {
                        title: '授权时间',
                        key: 'authorized',
                        align:'center'
                    },
                    {
                        title: '账号类型',
                        key: 'types',
                        align:'center'
                    },
                    {
                        title: '账号状态',
                        key: 'stutas',
                        align:'center'
                    },

                ],
                //产品账户列
                relativeData: [
                    {
                        number:'001',
                        name: 'xxx',
                        time: '2018-12-31 12:30',
                        authorized: '2018-12-31 12:30',
                        types:'主账号',
                        stutas: '正常'
                    },
                    {
                        number:'001',
                        name: 'xxx',
                        time: '2018-12-31 12:30',
                        authorized: '2018-12-31 12:30',
                        types:'主账号',
                        stutas: '正常'
                    },
                    {
                        number:'001',
                        name: 'xxx',
                        time: '2018-12-31 12:30',
                        authorized: '2018-12-31 12:30',
                        types:'主账号',
                        stutas: '正常'
                    }
                ],
                des:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturientmontes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
                //授权产品表头
                proHeader: [
                    {
                        title: '时间',
                        key: 'date',
                        align:'center'
                    },
                    {
                        title: '幼儿园',
                        key: 'shool',
                        align:'center'
                    },
                    {
                        title: '班级',
                        key: 'class',
                        align:'center'
                    },
                    {
                        title: '使用产品',
                        key: 'product',
                        align:'center'
                    },
                    {
                        title:'成绩',
                        key: 'score',
                        align:'center'
                    }
                ],
                //授权产品列
                proData: [
                    {
                        date:'001',
                        shool: '红黄蓝',
                        class:'大A班',
                        product:'消防知识',
                        score: '优秀',
                    },
                    {
                        date:'001',
                        shool: '红黄蓝',
                        class:'大A班',
                        product:'消防知识',
                        score: '优秀',
                    },
                    {
                        date:'001',
                        shool: '红黄蓝',
                        class:'大A班',
                        product:'消防知识',
                        score: '优秀',
                    },
                ],
                //选择账户数据值
                accountModel:'主账户：xxx',
                //选择账户下拉
                accountList:[
                    {
                        value: '主账户：xxx',
                        label: '主账户：xxx'
                    },
                    {
                        value: '子账户：xxx',
                        label: '子账户：xxx'
                    },
                    {
                        value: '子账户：xxx',
                        label: '子账户：xxx'
                    }
                ],
                //选择系列数据值
                seriesModel:'全部',
                //选择系列下拉
                seriesList:[
                    {
                        value: '全部',
                        label: '全部'
                    },
                    {
                        value: '逻辑思维',
                        label: '逻辑思维'
                    },
                    {
                        value: '大观察',
                        label: '大观察'
                    },
                    {
                        value: '生活小常识',
                        label: '生活小常识'
                    }
                ],
                //输入查询
                searchModel:'',
                //产品记录账户数据
                proAccountModel:'主账户：xxx',
                //产品选择账户下拉
                proAccountList:[
                    {
                        value: '主账户：xxx',
                        label: '主账户：xxx'
                    },
                    {
                        value: '子账户：xxx',
                        label: '子账户：xxx'
                    },
                    {
                        value: '子账户：xxx',
                        label: '子账户：xxx'
                    }
                ],
                //产品记录表头
                recordHeader:[
                    {
                        title: '时间',
                        key: 'recordDate',
                        align:'center'
                    },
                    {
                        title: '幼儿园',
                        key: 'recordKindergarten',
                        align:'center'
                    },
                    {
                        title: '班级',
                        key: 'recordClass',
                        align:'center'
                    },
                    {
                        title: '使用产品',
                        key: 'recordProduct',
                        align:'center'
                    },
                    {
                        title: '参与学生数',
                        key: 'recordNumber',
                        align:'center'
                    },
                    {
                        title: '使用时长',
                        key: 'recordTime',
                        align:'center'
                    },
                    {
                        title: '平均使用时长',
                        key: 'average',
                        align:'center'
                    }
                ],
                //产品记录列
                recordData:[
                    {
                        recordDate:'2019-01-02  9：30',
                        recordKindergarten:'红黄蓝',
                        recordClass:'大A班',
                        recordProduct:'消防知识',
                        recordNumber:'20',
                        recordTime:'30分钟',
                        average:'15分',
                    },
                    {
                        recordDate:'2019-01-02  9：30',
                        recordKindergarten:'红黄蓝',
                        recordClass:'大A班',
                        recordProduct:'消防知识',
                        recordNumber:'20',
                        recordTime:'30分钟',
                        average:'15分',
                    },
                    {
                        recordDate:'2019-01-02  9：30',
                        recordKindergarten:'红黄蓝',
                        recordClass:'大A班',
                        recordProduct:'消防知识',
                        recordNumber:'20',
                        recordTime:'30分钟',
                        average:'15分',
                    }
                ]


            }
        },
        components:{
            Table,
                    PageSize
        },
        mounted(){
            var dots = new Swiper('.dots .swiper-container', {
                spaceBetween: 10,
                slidesPerView: 7,
                freeMode: true,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
                navigation: {
                    nextEl: '.arrow-right',
                    prevEl: '.arrow-left'
                },
            })
            var view = new Swiper('.view .swiper-container', {

                thumbs: {
                    swiper: dots
                }
            })
        },
        methods: {
            back(){
                this.$router.go(-1)
            }
        }
    }
</script>
<style scoped lang="stylus">
    table td{
        padding: 10px;
        border:1px solid #e2e2e2;
        height: 50px;
        .img{
            width: 100px;
            height: 100px;
            margin: 0 auto;
            border-radius: 100%;
            overflow: hidden;
            img{
                width: 100%;
                vertical-align: middle;
            }
        }
        .uerid{
            margin: 10px 0;
        }
        .school{
            background: #363c4b;
            color: #fff;
            display: inline-block;
            padding: 4px 15px;
            border-radius: 30px;
        }
    }
    .dots{
        position: relative;
        margin:20px 50px;
        .swiper-dots{
            height: 90px;
            background: #f5f5f6;
        }
        .dots-btn{
            position: absolute;
            height: 100%;
            cursor: pointer;
            text-align: center;
            top:0;
            width: 40px;
            font-size: 24px;
            line-height: 90px;
            color: #ebebeb;
            &.swiper-button-disabled{
                 display: none;
             }
            &:hover{
                 color: #333;
             }
        }
        .arrow-left{
            left: -44px;
        }
        .arrow-right{
            right: -44px;
        }
    }
    .choose-content{
        span{
            margin-right: 10px;
        }
        .ivu-select{
            margin-right: 10px;
        }
    }
    .cx{
        position: absolute;
        right: 25px;
        top:14px;
    }
</style>