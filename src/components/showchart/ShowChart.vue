<template>
    <div ref="chart" style="width: 98%;height:390px;"></div>
</template>
<script type="text/ecmascript-6">
    let echarts = require('echarts');
    export default {
        mounted(){
            let _this=this
            _this.showChart()
        },
        methods:{
            showChart(){
                var myChart = echarts.init(this.$refs.chart);
                // 指定图表的配置项和数据
                let option = {
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line'
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            }
        }
    }
</script>
<style scoped>
</style>