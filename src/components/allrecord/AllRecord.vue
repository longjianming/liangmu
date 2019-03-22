<template>
    <div class="bgfff padding25 margin-bottom24">
        <div class="title01">总类数据</div>
        <Row :gutter="16">
            <Col span="8">
            <div class="bg-color allCon">
                <Row :gutter="16">
                    <Col span="8"><div><img src="@/assets/01.png" alt=""/></div></Col>
                    <Col span="8">
                    <div>
                        <p>总幼儿园</p>
                        <p>{{kindergarten.all}}</p>
                    </div>
                    </Col>
                    <Col span="8">
                    <div>
                        <p>本周新增</p>
                        <p>{{kindergarten.new_weekly}}</p>
                    </div>
                    </Col>
                </Row>
            </div>
            </Col>
            <Col span="8">
            <div class="bg-color allCon">
                <Row :gutter="16">
                    <Col span="8"><div><img src="@/assets/02.png" alt=""/></div></Col>
                    <Col span="8">
                    <div>
                        <p>总设备数</p>
                        <p>{{equipment.all}}</p>
                    </div>
                    </Col>
                    <Col span="8">
                    <div>
                        <p>本周新增</p>
                        <p>{{equipment.new_weekly}}</p>
                    </div>
                    </Col>
                </Row>
            </div>
            </Col>
            <Col span="8">
            <div class="bg-color allCon">
                <Row :gutter="16">
                    <Col span="8"><div><img src="@/assets/03.png" alt=""/></div></Col>
                    <Col span="8">
                    <div>
                        <p>总学生数</p>
                        <p>{{student.all}}</p>
                    </div>
                    </Col>
                    <Col span="8">
                    <div>
                        <p>本周新增</p>
                        <p>{{student.new_weekly}}</p>
                    </div>
                    </Col>
                </Row>
            </div>
            </Col>
        </Row>
    </div>
</template>
<script type="text/ecmascript-6">
    import axios from 'axios';
    import {postDada} from '@/api/api.js'
    export default {
        data(){
            return{
                kindergarten:[],
                equipment:[],
                student:[]
            }
        },
        mounted(){
            var _this=this
            this.getdata()
        },
        methods:{
            getdata(){

                postDada('/main_page/total_kindergarten').then(res=>{
                    this.kindergarten=res.data;
                })
                postDada('/main_page/total_device').then(res=>{
                    this.equipment=res.data;
                })
                postDada('/main_page/total_student').then(res=>{
                    this.student=res.data;
                })
            }
        }
    }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
    @import '~@/styles/vars.styl';
    .bg-color{
        background: #f5f5f6;
        padding: 55px 25px;
    }
    .allCon{
        font-size: 16px;
        color: #333;
        p{
            margin-top: 10px;
        }
    }
</style>