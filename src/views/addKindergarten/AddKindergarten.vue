<template>
   <div class="fromBox">
       <Form action="" :model="formDta" ref="formDta">
            <div class="bgfff padding25">
                <Row>
                    <Col span="12">
                    <div class="title01">用户管理</div>
                    </Col>
                    <Col span="12">
                    <div class="text-right"><Button @click.native="back" type="primary">返回</Button></div>
                    </Col>
                </Row>
                <!--返回提示-->
                <Modal title="提示" v-model="backModel" @on-ok="backOk" @on-cancel="" class-name="vertical-center-modal">
                    <p>确认退出吗?</p>
                </Modal>
                <!--上传logo-->
                <FormItem prop="logoUrl">
                    <div class="logo-box relative">
                        <div class="photo"><img :src="formDta.logoUrl" alt=""/></div>
                        <div class="photo-url">
                            <div class="photo-tip relative">
                                <span class="tip">LOGO :</span>
                            </div>
                            <div class="chooseBox">
                                <div class="fileName">{{logoName}}</div>
                                <div class="fileChoose">
                                    <Upload ref="upload" :before-upload="handleUpload" action="#">
                                        <Button>选择文件</Button>
                                    </Upload>
                                </div>
                            </div>
                        </div>
                    </div>
                </FormItem>

                <Row :gutter="40">
                    <Col span="12">
                    <!--幼儿园名称-->
                    <FormItem prop="kindergartenNamge">
                        <div class="relative page-style">
                            <Input v-model="formDta.kindergartenNamge" :size="size">
                            <span class="itemTip" slot="prepend">幼儿园名称 :</span>
                            </Input>
                        </div>
                    </FormItem>
                    </Col>
                    <Col span="12">
                    <!--所属品牌-->
                    <FormItem prop="kindergartenNamge">
                    <div class="relative page-style">
                        <Input v-model="formDta.brand" :size="size">
                        <span class="itemTip" slot="prepend">所属品牌 :</span>
                        </Input>
                    </div>
                    </FormItem>
                    </Col>
                </Row>

                <Row :gutter="40">
                    <Col span="12">
                    <!--园长姓名-->
                    <FormItem prop="principal">
                        <div class="relative page-style">
                            <Input v-model="formDta.principal" :size="size">
                            <span class="itemTip" slot="prepend">园长姓名 :</span>
                            </Input>
                        </div>
                    </FormItem>
                    </Col>
                    <Col span="12">
                    <!--幼儿园性质-->
                    <FormItem prop="nature">
                        <div class="relative page-style">
                            <span class="select-itemTip" slot="prepend">幼儿园性质 :</span>
                            <div class="item-selects">
                               <Select v-model="formDta.nature" :size="size">
                                   <Option v-for="item in natureList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                               </Select>
                            </div>
                        </div>
                    </FormItem>
                    </Col>
                </Row>

                <Row :gutter="40">
                    <Col span="12">
                    <!--学生数-->
                    <FormItem prop="studentNumber">
                        <div class="relative page-style">
                            <Input v-model="formDta.studentNumber" :size="size">
                            <span class="itemTip" slot="prepend">学生数 :</span>
                            </Input>
                        </div>
                    </FormItem>
                    </Col>
                    <Col span="12">
                    <!--教师数-->
                    <FormItem prop="teacherNumber">
                        <div class="relative page-style">
                            <Input v-model="formDta.teacherNumber" :size="size">
                            <span class="itemTip" slot="prepend">教师数 :</span>
                            </Input>
                        </div>
                    </FormItem>
                    </Col>
                </Row>





            </div>
       </Form>
   </div>
</template>
<script type="text/ecmascript-6">
    export default {
        data () {
            return{
                formDta:{
                    //头像路径
                    logoUrl:"",
                    //幼儿园名称
                    kindergartenNamge:'',
                    //所属品牌
                    brand:'',
                    //园长姓名
                    principal:'',
                    //幼儿园性质
                    nature:'民办',
                    //学生数
                    studentNumber:'',
                    //教师数
                    teacherNumber:'',
                    


                },
                //输入尺寸
                size:'large',
                //头像文件名字
                logoName:'',
                //显示返回提示
                backModel:false,
                //幼儿园性质选项
                natureList:[
                    {
                        value: '民办',
                        label: '民办'
                    },
                    {
                        value: '公办',
                        label: '公办'
                    }
                ]

            }
        },
        components:{

        },
        mounted(){

        },
        methods: {
            //显示选择的图片
            handleUpload (file) {
                this.logoName = file.name;
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                    this.formDta.logoUrl=reader.result
                };

                return false;
            },
            //返回
            back(){
                this.backModel=true
            },
            //确认返回
            backOk(){
                this.$router.go(-1)
            }
        }
    }
</script>
<style scoped lang="stylus">
    .tip{width: 140px;line-height: 40px;background: #f4f4f4;text-indent: 20px;position: absolute;top:0;left: 0;}

    .chooseBox{
        position: relative;
        .fileName{
            border:1px solid #e2e2e2;
            border-radius: 6px;
            height: 45px;
            line-height: 45px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-right: 115px;
            text-indent: 1em;
        }
        .fileChoose{
            position: absolute;
            right: 122px;
            top:7px;
        }

    }


    .logo-box{
        padding-top: 55px;
        .photo{
            position: absolute;
            background: #f4f4f4;
            top:0;
            width: 157px;
            height: 157px;
            img{
               position: absolute;
                max-width: 100%;
                max-height: 100%;
                top:50%;
                left: 50%;
                transform: translate(-50%,-50%);
            }
        }
        .photo-url{
            margin-left: 180px;
            .photo-tip{
                border:1px solid #e2e2e2;
                width: 142px;
                height: 42px;
                margin-bottom: 12px;
            }
        }
    }
    .page-style{
        .ivu-select-selection{
            border-top-left-radius:0 !important;
        }
        .itemTip{
            display: inline-block;
            width: 120px;
            text-align: left;
            text-indent: 10px;
        }
        .select-itemTip{
            position: absolute;
            width: 136px;
            background: #f8f8f9;
            left: 0;
            top: 0;
            text-indent: 15px;
            line-height: 34px;
            border:1px solid #dcdee2
        }
        .item-selects{
            margin-left: 135px;
        }
    }


</style>