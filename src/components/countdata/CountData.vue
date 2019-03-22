<!--产品统计详细数据-->
<template>
    <div class="bgfff padding25 mg-bt30">
        <div class="title01">{{title}}</div>
        <div class="mg-bt30">
            <Row>
                <Col span="20">
                <div>
                    <span class="margin-r10">日期</span>
                    <span class="margin-r10"><DatePicker type="date" value="" placeholder="Select date" style="width: 120px"></DatePicker></span>
                    <span v-if="show" class="margin-r10">至</span>
                    <span v-if="show" class="margin-r10"><DatePicker type="date" value="" placeholder="Select date" style="width: 120px"></DatePicker></span>
                    <template>
                        <Select v-model="provinceModel" class="margin-r10" style="width:100px">
                            <Option v-for="item in provinceList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                        <Select v-model="cityModel" class="margin-r10" style="width:100px">
                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                        <Select v-model="streetModel" class="margin-r10" style="width:100px">
                            <Option v-for="item in streetList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </template>
                    <Button class="margin-r10">筛选</Button>
                    <Button class="margin-r10">查看全部</Button>
                </div>
                </Col>
                <Col span="4">
                <div class="text-right">
                    <Button type="primary">导出</Button>
                </div>
                </Col>
            </Row>
        </div>
        <template>
            <Table border :columns="columnsDetail" :data="dataDetail"></Table>
        </template>
        <PageSize :total="pageTotal"></PageSize>
    </div>
</template>
<script type="text/ecmascript-6">
    import PageSize from '@/components/pagesize/PageSize.vue'
    export default {
        props:['title','pageTotal','show'],
        data () {
            return {
                dateOnline:'',//默认今天
                time:"小时",//默认选中小时
                buttonSize:'使用次数',
                provinceList:[
                    {
                        value: '广东省',
                        label: '广东省'
                    },
                    {
                        value: '广西省',
                        label: '广西省'
                    },
                    {
                        value: '福建省',
                        label: '福建省'
                    }
                ],
                cityList: [
                    {
                        value: '广州市',
                        label: '广州市'
                    },
                    {
                        value: '深圳市',
                        label: '深圳市'
                    },
                    {
                        value: '东莞市',
                        label: '东莞市'
                    }
                ],
                streetList: [
                    {
                        value: '天河区',
                        label: '天河区'
                    }
                ],
                provinceModel: '',
                cityModel: '',
                streetModel: '',
                columnsDetail: [
                    {
                        title: '时间',
                        key: 'time',
                        align:'center'
                    },
                    {
                        title: '地区',
                        key: 'adress',
                        align:'center'
                    },
                    {
                        title: '幼儿园',
                        key: 'school',
                        align:'center'
                    },
                    {
                        title: '产品名称',
                        key: 'pro',
                        align:'center'
                    },
                    {
                        title: '使用次数',
                        key: 'usedNum',
                        align:'center'
                    },
                    {
                        title: '使用时间',
                        key: 'usedTime',
                        align:'center'
                    },
                    {
                        title: '参与学生数',
                        key: 'student',
                        align:'center'
                    }
                ],
                dataDetail: [
                    {
                        time: 'John Brown',
                        adress: 18,
                        school: 'New York No. 1 Lake Park',
                        pro: '2016-10-03',
                        usedNum: '2016-10-03',
                        usedTime: '2016-10-03',
                        student: '2016-10-03'
                    },
                    {
                        time: 'John Brown',
                        adress: 18,
                        school: 'New York No. 1 Lake Park',
                        pro: '2016-10-03',
                        usedNum: '2016-10-03',
                        usedTime: '2016-10-03',
                        student: '2016-10-03'
                    },
                    {
                        time: 'John Brown',
                        adress: 18,
                        school: 'New York No. 1 Lake Park',
                        pro: '2016-10-03',
                        usedNum: '2016-10-03',
                        usedTime: '2016-10-03',
                        student: '2016-10-03'
                    },
                    {
                        time: 'John Brown',
                        adress: 18,
                        school: 'New York No. 1 Lake Park',
                        pro: '2016-10-03',
                        usedNum: '2016-10-03',
                        usedTime: '2016-10-03',
                        student: '2016-10-03'
                    },
                    {
                        time: 'John Brown',
                        adress: 18,
                        school: 'New York No. 1 Lake Park',
                        pro: '2016-10-03',
                        usedNum: '2016-10-03',
                        usedTime: '2016-10-03',
                        student: '2016-10-03'
                    },
                ]
            }
        },
        components: {
            PageSize
        },
        mounted(){

        },
        methods:{

        }
    }
</script>
<style scoped>
</style>