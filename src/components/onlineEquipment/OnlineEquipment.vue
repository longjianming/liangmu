<template>
    <div class="bg-color">
        <div class="title01">{{name}}</div>
        <Row>
            <Col span="12">
            <div><span>日期</span><DatePicker type="date" :value="date" placeholder="Select date" style="width: 120px"></DatePicker></div>
            </Col>
            <Col span="12">
            <div class="text-right"><Button type="primary">查询</Button></div>
            </Col>
        </Row>
        <ShowChart></ShowChart>
    </div>
</template>
<script type="text/ecmascript-6">
    let echarts = require('echarts');
    import ShowChart from "@/components/showchart/ShowChart.vue"
    export default {
        props:['id','name','date'],
        components: {
            ShowChart
        }
    }
</script>
<style scoped>
    span{margin-right: 10px;color: #333;}
</style>