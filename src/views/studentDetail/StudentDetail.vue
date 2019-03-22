<template>
    <div class="bgfff padding25">
        <Row>
            <Col span="12"><div class="title01">用户管理</div></Col>
            <Col span="12">
            <div class="text-right">
                <Button type="primary" @click.native="back">返回</Button>
            </div>
            </Col>
        </Row>
        <div class="mg-bt30">
            <table>
                <tbody>
                    <tr>
                        <td rowspan="3" class="bgf5 text-center">
                            <div class="img"><img src="@/assets/phone.jpg" alt=""/></div>
                            <p class="uerid">ID:{{this.$route.query.userId}}</p>
                            <div class="school">xxx幼儿园</div>
                        </td>
                        <td class="bgf5">姓名：</td>
                        <td class="text-center">李白</td>
                        <td class="bgf5">性别：</td>
                        <td class="text-center">男生</td>
                    </tr>
                    <tr>
                        <td class="bgf5">生日：</td>
                        <td class="text-center">20xx - xx - xx</td>
                        <td class="bgf5">添加日期：</td>
                        <td class="text-center">2019-01-02</td>
                    </tr>
                    <tr>
                        <td class="bgf5">所属年级：</td>
                        <td class="text-center">大班</td>
                        <td class="bgf5">所属班级：</td>
                        <td class="text-center">大A班</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="mg-bt30">
            <div class="title01">关联家长</div>
            <Table :columns="relativeHeader" :data="relativeData"></Table>
        </div>
        <div class="mg-bt30">
            <div class="title01">产品记录</div>
            <Table :columns="proHeader" :data="proData"></Table>
            <PageSize total="50"></PageSize>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import Table from '@/components/table/Table.vue'
    import PageSize from '@/components/pagesize/PageSize.vue'
    export default {
        data () {
            return {
                //关联家长表头
                relativeHeader: [
                    {
                        title: '序号',
                        key: 'number',
                        align:'center'
                    },
                    {
                        title: '家长名称',
                        key: 'name',
                        align:'center'
                    },
                    {
                        title: '与孩子关系',
                        key: 'relative',
                        align:'center'
                    },
                    {
                        title: '关联手机号',
                        key: 'phone',
                        align:'center'
                    },
                    {
                        title: '关联时间',
                        key: 'time',
                        align:'center'
                    }
                ],
                //关联家长列
                relativeData: [
                    {
                        number:'001',
                        name: 'xxx',
                        relative:'爸爸',
                        phone:'18665680000',
                        age: 18,
                        time: '2018-12-31 12:30'
                    },
                    {
                        number:'002',
                        name: 'xxx',
                        relative:'爸爸',
                        phone:'18665680000',
                        age: 18,
                        time: '2018-12-31 12:30'
                    },
                    {
                        number:'003',
                        name: 'xxx',
                        relative:'妈妈',
                        phone:'18665680000',
                        age: 18,
                        time: '2018-12-31 12:30'
                    },
                ],
                //产品记录表头
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
                //产品记录列
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
                ]
            }
        },
        components:{
            Table,
            PageSize
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
        height: 70px;
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
</style>