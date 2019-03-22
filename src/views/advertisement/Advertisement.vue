<template>
    <div class="fullbox padding25">
        <div class="title01">管理员信息</div>
        <div class="choosePro">
            <p class="title">请选择产品</p>
            <div class="chooseCon">
                <div class="chooseSelect">
                    <template>
                        <Select v-model="modelPro" size="large">
                            <Option v-for="item in proList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </template>
                </div>
                <div class="sure">
                    <Button type="primary" size="large">确认</Button>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        data () {
        return {
            proList: [
                {
                    value: '客户端',
                    label: '客户端'
                },
                {
                    value: '家长',
                    label: '家长'
                },
                {
                    value: '教师',
                    label: '教师'
                }
            ],
            modelPro: '客户端'
        }
    }
    }
</script>
<style scoped lang="stylus">
    .choosePro{
        width: 500px;
        margin: 250px auto;
        .title{
            font-size: 16px;
            margin-bottom: 20px;
        }
        .chooseCon{
            position: relative;
            .chooseSelect{
                margin-right: 120px;
            }
            .sure{
                position: absolute;
                top:0;
                right: 0;
                width: 100px;
                button{
                    width: 100%;
                }
            }
        }
    }
</style>