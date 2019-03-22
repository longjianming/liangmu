<template>
    <div>
        <div class="bgfff padding25 mg-bt30">
            <div class="title01">总类数据</div>
            <Row :gutter="24" class="mg-bt30">
                <Col span="12">
                <div class="bgf5 padding15 choose pages">
                    <div class="choose-page">
                        <span>日期</span>
                        <DatePicker type="date" :value="dateOnline" placeholder="Select date" style="width: 120px"></DatePicker>
                        <span>至</span>
                        <DatePicker type="date" :value="dateOnline" placeholder="Select date" style="width: 120px"></DatePicker>
                        <RadioGroup v-model="time">
                            <Radio label="小时">小时</Radio>
                            <Radio label="昨日">昨日</Radio>
                            <Radio label="本周">本周</Radio>
                            <Radio label="月">月</Radio>
                            <Radio label="季">季</Radio>
                            <Radio label="年">年</Radio>
                        </RadioGroup>
                        <Button type="primary">查询</Button>
                    </div>
                    <div class="choose-page">
                        <template>
                            <span>主题</span>
                            <Select v-model="themModel" style="width:150px">
                                <Option v-for="item in themList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                            <span>产品</span>
                            <Select v-model="proModel" style="width:150px">
                                <Option v-for="item in proList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                            <span>班级</span>
                            <Select v-model="classModel" style="width:150px">
                                <Option v-for="item in classList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                            <span class="reset"><Button type="primary">重置</Button></span>
                        </template>
                    </div>
                </div>
                </Col>
                <Col span="12">
                <div class="bgf5 padding15 text-center number pages">
                    <Row>
                        <Col span="6">
                        <div class="number-con">
                            <h3>1000</h3>
                            <p>使用次数</p>
                        </div>
                        </Col>
                        <Col span="6">
                        <div class="number-con">
                            <h3>893</h3>
                            <p>运行时间</p>
                        </div>
                        </Col>
                        <Col span="6">
                        <div class="number-con">
                            <h3>158</h3>
                            <p>上课园数</p>
                        </div>
                        </Col>
                        <Col span="6">
                        <div class="number-con border-none">
                            <h3>2465</h3>
                            <p>参与学生数</p>
                        </div>
                        </Col>
                    </Row>
                </div>
                </Col>
            </Row>
            <template>
                <div class="bgf5 radio-group mg-bt30">
                    <RadioGroup v-model="buttonSize" type="button">
                        <Radio label="使用次数">使用次数</Radio>
                        <Radio label="运行时间">运行时间</Radio>
                        <Radio label="上课园数">上课园数</Radio>
                        <Radio label="参与学生数">参与学生数</Radio>
                    </RadioGroup>
                </div>
            </template>
            <Row :gutter="50">
                <Col span="12">
                <div class="hide-top">
                    <!--统计表-->
                    <ShowChart></ShowChart>
                </div>
                </Col>
                <Col span="12">
                <div>
                    <!--统计表详情-->
                    <ChartDetail></ChartDetail>
                </div>
                </Col>
            </Row>
        </div>
        <!--详细数据-->
        <CountData :title="detaTitle" :pageTotal="dataPage" :show="hide"></CountData>
        <!--成绩排名-->
        <CountData :title="rangeTitle" :pageTotal="rangePage" :show="show"></CountData>
    </div>
</template>
<script type="text/ecmascript-6">
    import ShowChart from "@/components/showchart/ShowChart.vue"
    import ChartDetail from "@/components/chartdetail/ChartDetail.vue"
    import CountData from "@/components/countdata/CountData.vue"
    export default {
        data () {
            return {
                dateOnline:'',//默认今天
                time:"小时",//默认选中小时
                buttonSize:'使用次数',
                detaTitle:'详细数据',
                rangeTitle:"成绩排名",
                dataPage:150,
                rangePage:100,
                show:true,
                hide:false,
                themList: [
                    {
                        value: '全部1',
                        label: '全部'
                    },
                    {
                        value: '自然',
                        label: '自然'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: '生活常识',
                        label: '生活常识'
                    }
                ],
                proList: [
                    {
                        value: '全部2',
                        label: '全部'
                    },
                    {
                        value: '动物世界',
                        label: '动物世界'
                    },
                    {
                        value: '海洋世界',
                        label: '海洋世界'
                    },
                    {
                        value: '蚂蚁王国',
                        label: '蚂蚁王国'
                    }
                ],
                classList: [
                    {
                        value: '不限',
                        label: '不限'
                    },
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
                    }
                ],
                themModel: '',
                proModel:'',
                classModel:''
            }
        },
        components: {
            ShowChart,
            ChartDetail,
            CountData
        },
        mounted(){
            let _this=this
            _this.dateOnline=_this.getNowFormatDate()
        },
        methods:{
            getNowFormatDate() {
                let date = new Date()
                let seperator1 = "-"
                let year = date.getFullYear()
                let month = date.getMonth() + 1
                let strDate = date.getDate()
                if (month >= 1 && month <= 9) {
                    month = "0" + month;
                }
                if (strDate >= 0 && strDate <= 9) {
                    strDate = "0" + strDate
                }
                let currentdate = year + seperator1 + month + seperator1 + strDate
                return currentdate
            }
        }
    }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
    .choose-page{
        margin: 15px 0;
        .reset{
            padding-left: 53px;
            margin-right: 0 !important;
        }
    }
    .pages{
        border-radius: 6px;
        .number-con{
            border-right: 1px solid #d8d8d8;
        }
        .border-none{
            border:none
        }
    }
    .number{
        padding:35px 0;
        h3{
            font-size: 32px;
            color: #333;
            font-weight: normal;
        }
    }
    .radio-group{
        line-height: 42px;
        label{
            line-height: 42px;
            background: #f5f5f5;
            border-top: none;
            border-bottom: none;
            border-radius: 0 !important;
            height: 42px;
            box-shadow:none !important;

            &.ivu-radio-wrapper-checked{
                background: #000;
                color: #fff;
                box-shadow: none;
             }
        }
    .ivu-radio-group-button .ivu-radio-wrapper:after{display: none !important;}
    .ivu-radio-group-button .ivu-radio-wrapper-checked:first-child{border-left: 1px solid #f5f5f5;}
    }
    .choose span,.choose label{margin: 0 8px !important;}
</style>