<template>
   <div class="fromBox">
       <Form action="" :model="formData" ref="formData">
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
                        <div class="photo" :style="{ 'background-image': 'url(' + formData.logoUrl + ')' }"></div>
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
                    <!--幼儿园名称-->
                    <Col span="12">
                    <FormItem prop="kindergartenNamge">
                        <div class="relative page-style">
                            <Input v-model="formData.kindergartenNamge" :size="size">
                            <span class="itemTip" slot="prepend">幼儿园名称 :</span>
                            </Input>
                        </div>
                    </FormItem>
                    </Col>
                    <!--所属品牌-->
                    <Col span="12">
                    <FormItem prop="kindergartenNamge">
                    <div class="relative page-style">
                        <Input v-model="formData.brand" :size="size">
                        <span class="itemTip" slot="prepend">所属品牌 :</span>
                        </Input>
                    </div>
                    </FormItem>
                    </Col>
                </Row>
                <Row :gutter="40">
                    <!--园长姓名-->
                    <Col span="12">
                    <FormItem prop="principal">
                        <div class="relative page-style">
                            <Input v-model="formData.principal" :size="size">
                            <span class="itemTip" slot="prepend">园长姓名 :</span>
                            </Input>
                        </div>
                    </FormItem>
                    </Col>
                    <!--幼儿园性质-->
                    <Col span="12">
                    <FormItem prop="nature">
                        <div class="relative page-style">
                            <span class="select-itemTip" slot="prepend">幼儿园性质 :</span>
                            <div class="item-selects">
                               <Select v-model="formData.nature" :size="size">
                                   <Option v-for="item in natureList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                               </Select>
                            </div>
                        </div>
                    </FormItem>
                    </Col>
                </Row>
                <Row :gutter="40">
                    <!--学生数-->
                    <Col span="12">
                    <FormItem prop="studentNumber">
                        <div class="relative page-style">
                            <span class="select-itemTip" slot="prepend">学生数 :</span>
                            <div class="item-selects">
                            <InputNumber v-model="formData.studentNumber" :min="1" :size="size"></InputNumber>
                            </div>
                        </div>
                    </FormItem>
                    </Col>
                    <!--教师数-->
                    <Col span="12">
                    <FormItem prop="teacherNumber">
                        <div class="relative page-style">
                            <span class="select-itemTip" slot="prepend">教师数 :</span>
                            <div class="item-selects">
                                <InputNumber v-model="formData.teacherNumber" :min="1" :size="size"></InputNumber>
                            </div>
                        </div>
                    </FormItem>
                    </Col>
                </Row>
                <Row :gutter="40">
                    <Col span="12">
                    <!--联系地址-->
                    <Row :gutter="14">
                        <!--省-->
                        <Col span="10">
                        <FormItem prop="province">
                        <div class="relative page-style">
                            <span class="select-itemTip" slot="prepend">联系地址 :</span>
                            <div class="item-selects">
                                <Select v-model="formData.province" :size="size">
                                    <Option v-for="item in provinceList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                </Select>
                            </div>
                        </div>
                        </FormItem>
                        </Col>
                        <!--市-->
                        <Col span="7">
                        <FormItem prop="city">
                        <div class="relative page-style">
                            <Select v-model="formData.city" :size="size">
                                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </div>
                        </FormItem>
                        </Col>
                        <!--区-->
                        <Col span="7">
                        <FormItem prop="area">
                        <div class="relative page-style">
                            <Select v-model="formData.area" :size="size">
                                <Option v-for="item in areaList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </div>
                        </FormItem>
                        </Col>
                    </Row>
                    </Col>
                    <!--街道-->
                    <Col span="12">
                    <FormItem prop="street">
                        <div class="relative page-style">
                            <Input v-model="formData.street" :size="size">
                            </Input>
                        </div>
                    </FormItem>
                    </Col>
                </Row>
                <Row :gutter="40">
                    <!--联系方式-->
                    <Col span="12">
                    <div class="bgf5 contact">
                        <h3>联系方式</h3>
                        <div class="contact-con">
                            <Row :gutter="16">
                                <Col span="12">
                                <div class="contact-way mg-bt20">联系方式</div>
                                </Col>
                                <Col span="12">
                                <div class="contact-way mg-bt20">号码</div>
                                </Col>
                            </Row>
                            <Row :gutter="16">
                                <Col span="12">
                                <div class="mg-bt20">
                                    <Select v-model="model1" :size="size">
                                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                    </Select>
                                </div>
                                </Col>
                                <Col span="12">
                                <div class="mg-bt20">
                                    <Input :size="size">
                                    <Icon @click="" style="cursor: pointer" type="ios-remove-circle-outline" slot="suffix" />
                                    </Input>
                                </div>
                                </Col>
                            </Row>
                            <div class="text-center addNew">
                                <Button type="primary" :size="size">添加新的联系方式</Button>
                            </div>
                        </div>
                    </div>
                    </Col>
                    <!--收费标准-->
                    <Col span="12">
                    <div class="bgf5 contact">
                        <h3>收费标准</h3>
                        <div class="contact-con">
                            <Row :gutter="16">
                                <Col span="12">
                                <div class="contact-way mg-bt20">年级</div>
                                </Col>
                                <Col span="12">
                                <div class="contact-way mg-bt20">学费</div>
                                </Col>
                            </Row>
                            <Row :gutter="16">
                                <Col span="12">
                                <div class="mg-bt20">
                                    <Select v-model="model1" :size="size">
                                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                    </Select>
                                </div>
                                </Col>
                                <Col span="12">
                                <div class="mg-bt20">
                                    <Input :size="size">
                                    <Icon @click="" style="cursor: pointer" type="ios-remove-circle-outline" slot="suffix" />
                                    </Input>
                                </div>
                                </Col>
                            </Row>
                            <div class="text-center addNew">
                                <Button type="primary" :size="size">添加新的收费标准</Button>
                            </div>
                        </div>
                    </div>
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
                formData:{
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
                    //联系地址省
                    province:'',
                    //市
                    city:'',
                    //区
                    area:'',
                    //街道
                    street:'',
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
                ],
                //联系地址省列表
                provinceList:[
                    {
                        value: '广东省',
                        label: '广东省'
                    },
                    {
                        value: '广西省',
                        label: '广西省'
                    }
                ],
                //联系地址市列表
                cityList:[
                    {
                        value: '广州市',
                        label: '广州市'
                    },
                    {
                        value: '深圳市',
                        label: '深圳市'
                    }
                ],
                //联系地址区列表
                areaList:[
                    {
                        value: '天河区',
                        label: '天河区'
                    },
                    {
                        value: '越秀区',
                        label: '越秀区'
                    }
                ],


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
                    this.formData.logoUrl=reader.result
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
            background-color: #f4f4f4;
            top:0;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
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
        .ivu-input-number{
            display: block;
            width: auto;
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
    .contact{
        border:1px solid #e2e2e2;
        border-radius: 5px;
        h3{
            text-align: center;
            font-size: 16px;
            color: #333;
            font-weight: normal;
            padding: 15px 0;
            border-bottom: 1px solid #e2e2e2;
        }
        .contact-con{
            padding: 25px 20px;
            .contact-way{
                border:1px solid #e2e2e2;
                background: #fff;
                line-height: 36px;
                text-indent: 8px;
            }
            .addNew{
                margin-top: 20px;
            }
        }
    }

</style>