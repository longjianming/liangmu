<template>
    <div>
        <!--总类数据-->
        <AllRecord></AllRecord>
        <div class="bgfff padding25 margin-bottom24">
            <Row :gutter="50">
                <Col span="12">
                <!--在线设备数-->
                <OnlineEquipment id="online" name="在线设备数" :date="dateOnline"></OnlineEquipment>
                </Col>
                <Col span="12">
                <!--离线设备数-->
                <OnlineEquipment id="outline" name="离线设备数" :date="dateOnline"></OnlineEquipment>
                </Col>
            </Row>
            <Row>
                <Col span="24">
                    <div class="bgf5 mg-bt30 padding25 choose">
                        <span>日期</span>
                        <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
                        <span>至</span>
                        <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
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
                </Col>
            </Row>
            <Row :gutter="50">
                <Col span="12">
                <!--全产品上课园数-->
                <OnlineEquipment id="online" name="全产品上课园数" :date="dateOnline"></OnlineEquipment>
                </Col>
                <Col span="12">
                <!-- 全产品使用时间-->
                <OnlineEquipment id="outline" name="全产品使用时间" :date="dateOnline"></OnlineEquipment>
                </Col>
            </Row>
            <Row :gutter="50">
                <Col span="12">
                <!--全产品上课园数-->
                <OnlineEquipment id="online" name="全产品上课园数" :date="dateOnline"></OnlineEquipment>
                </Col>
                <Col span="12">
                <!--全产品参与学生数-->
                <OnlineEquipment id="outline" name="全产品参与学生数" :date="dateOnline"></OnlineEquipment>
                </Col>
            </Row>

            <div class="chart-lsit">
                <Row :gutter="50">
                    <Col span="12">
                    <!--全产品上课园数-->
                    <div class="bg-color">
                        <div class="title01">全产品上课园数</div>
                        <div>
                            <span>日期</span>
                            <DatePicker type="date" :value="dateOnline" placeholder="Select date" style="width: 120px"></DatePicker>
                            <span>至</span>
                            <DatePicker type="date" :value="dateOnline" placeholder="Select date" style="width: 120px"></DatePicker>
                        </div>
                        <div class="bgf5">
                            pfdf
                        </div>
                        <div ref="chart" style="width: 98%;height:360px;"></div>
                    </div>
                    </Col>
                    <Col span="12">
                    <!--全产品参与学生数-->
                    </Col>
                </Row>
            </div>

        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import AllRecord from "@/components/allrecord/AllRecord.vue"
    import OnlineEquipment from "@/components/onlineEquipment/OnlineEquipment.vue"
    export default {
        data(){
            return{
                dateOnline:'2019-02-20',//默认今天
                time:"小时",//默认选中小时
            }
        },
        components: {
            AllRecord,
            OnlineEquipment
        },
        mounted(){
            let _this=this
            _this.getdata()
            _this.dateOnline=_this.getNowFormatDate()
        },
        methods:{
            getdata(){
                let postData={date:"2019-02-20"}
                axios.post('http://localhost:4000/api/main_page/online',postData,{headers:{'Content-Type': 'application/json'}}).then(res=>{
                    console.log(res.data)
                    this.data1=res.data.logs
                })
            },
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
<style scoped>
    .choose span,.choose label{margin: 0 10px !important;}
    .chart-lsit{
        border-top:1px solid #e6e6e6;
        padding-top: 30px;
    }
</style>