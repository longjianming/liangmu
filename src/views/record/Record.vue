<template>
    <div class="padding25 bgfff">
        <Row>
            <Col span="12"><div class="title01">详情信息</div></Col>
            <Col span="12">
            <div class="text-right">
                <Button type="primary" @click="exportData(1)">导出</Button>
            </div>
            </Col>
        </Row>
        <template>
            <Table border :columns="columns1" :data="data1" ref="table"></Table>
        </template>
        <PageSize :total="total"></PageSize>
    </div>
</template>
<script type="text/ecmascript-6">
    import PageSize from '@/components/pagesize/PageSize.vue'
    export default {
        data () {
            return {
                total:10,
                columns1: [
                    {
                        title: '时间',
                        align: 'center',
                        key: 'time'
                    },
                    {
                        title: '用户',
                        align: 'center',
                        key: 'account'
                    },
                    {
                        title: '权限',
                        align: 'center',
                        key: 'level'
                    },
                    {
                        title: '操作',
                        align: 'center',
                        key: 'log'
                    }
                ],
                data1: [
                    {
                        time: 'John Brown',
                        account: '13218489@126.com',
                        level: '销售',
                        log: '登出'
                    },
                    {
                        time: 'John Brown',
                        account: '13218489@126.com',
                        level: '销售',
                        log: '查看用户'
                    },
                    {
                        time: 'John Brown',
                        account: '13218489@126.com',
                        level: '销售',
                        log: '添加用户 xxx'
                    }
                ]
            }
        },
        components: {
            PageSize
        },
        mounted(){
            let _this=this
            _this.getdata()

        },
        methods: {
            getdata(){
                let postData={page:1,count_per_page:10}
                axios.post('http://localhost:4000/api/log/list',postData).then(res=>{
//                    this.data1=res.data.logs;
//                    console.log(res.data)
                })
            },
            exportData (type) {
                if (type === 1) {
                    this.$refs.table.exportCsv({
                        filename: 'The original data'
                    });
                }
            }
        }
    }
</script>
<style scoped>
</style>