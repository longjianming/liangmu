<template>
    <div>
        <div class="bgfff padding25 mg-bt30">
            <Row>
                <Col span="12">
                <div class="title01">发布新品</div>
                </Col>
                <Col span="12">
                <div class="text-right"><Button @click.native="$router.go(-1)" type="primary">返回</Button></div>
                </Col>
            </Row>
            <div class="preview">预览：</div>
            <div class="mg-bt30">
                <Row :gutter="60">
                    <Col span="14">
                    <div class="video-slide">
                        <div class="view">
                            <div class="swiper-container">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">1</div>
                                    <div class="swiper-slide">2</div>
                                    <div class="swiper-slide">3</div>
                                    <div class="swiper-slide">4</div>
                                    <div class="swiper-slide">5</div>
                                </div>
                            </div>
                        </div>
                        <div class="dots">
                            <a class="arrow-left dots-btn"><Icon type="ios-arrow-back" /></a>
                            <a class="arrow-right dots-btn"><Icon type="ios-arrow-forward" /></a>
                            <div class="swiper-container">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide"><div class="swiper-dots">1</div></div>
                                    <div class="swiper-slide"><div class="swiper-dots">2</div></div>
                                    <div class="swiper-slide"><div class="swiper-dots">3</div></div>
                                    <div class="swiper-slide"><div class="swiper-dots">4</div></div>
                                    <div class="swiper-slide"><div class="swiper-dots">5</div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Col>
                    <Col span="10">
                    <div class="pro-des">
                        <div class="pro-des-table">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>游戏名称 :</td>
                                        <td>广州良木游戏</td>
                                    </tr>
                                    <tr>
                                        <td>发布日期：</td>
                                        <td>1920</td>
                                    </tr>
                                    <tr>
                                        <td>适宜年龄：</td>
                                        <td>18-60</td>
                                    </tr>
                                    <tr>
                                        <td>开发商 :</td>
                                        <td>广州良木</td>
                                    </tr>
                                    <tr>
                                        <td>容量 :</td>
                                        <td>8000</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <span>广州良木游戏</span>
                                            <span>广州良木游戏</span>
                                            <span>广州良木游戏</span>
                                            <span>广州良木游戏</span>
                                            <span>广州良木游戏</span>
                                            <span>广州良木游戏</span>
                                            <span>广州良木游戏</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="download"><Button type="primary" long>开始下载</Button></div>
                    </div>
                    </Col>
                </Row>
            </div>
            <div class="input-box">
                <div class="input-pro-ms">
                    <Row :gutter="50">
                        <Col span="12">
                        <div>
                            <div class="title01">产品地址:</div>
                            <Input v-model="proUrl" size="large" placeholder="请输入产品下载地址"/>
                        </div>
                        </Col>
                        <Col span="12">
                        <div>
                            <div class="title01">版本号:</div>
                            <Input v-model="proVerson" size="large" placeholder="请输入当前产品版本号"/>
                        </div>
                        </Col>
                    </Row>
                </div>
                <div class="input-pro-ms">
                    <Row :gutter="50">
                        <Col span="12">
                        <div>
                            <div class="title01">产品类别:</div>
                            <Select v-model="proSeris" size="large">
                                <Option v-for="item in serisList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </div>
                        </Col>
                        <Col span="12">
                        <div>
                            <div class="title01">产品名称:</div>
                            <Input v-model="proName" size="large" placeholder="请输入产品名称"/>
                        </div>
                        </Col>
                    </Row>
                </div>
                <div class="input-pro-ms">
                    <Row :gutter="50">
                        <Col span="12">
                        <div>
                            <div class="title01">适用年龄段:</div>
                            <Input v-model="proAge" size="large" placeholder="请输入年龄阶段"/>
                        </div>
                        </Col>
                        <Col span="12">
                        <div>
                            <div class="title01">开发商:</div>
                            <Select v-model="proDevelop" size="large">
                                <Option v-for="item in developList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </div>
                        </Col>
                    </Row>
                </div>
                <div class="input-pro-ms">
                    <Row :gutter="50">
                        <Col span="12">
                        <div>
                            <div class="title01">容量:</div>
                            <Input v-model="proSize" size="large" placeholder="请输入容量"/>
                        </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div>
                <div class="proWork">产品关键词</div>
                <template>
                    <Tag v-for="item in tabCount" :key="item" :name="item" closable @on-close="handleClose2">{{ item }}</Tag>
                    <Input v-model="tagValue" placeholder="请输入..." style="width: 80px;margin-right: 5px" @on-enter="handleAdd"></Input>
                    <Button icon="ios-add" type="dashed" @click="handleAdd">添加标签</Button>
                </template>
            </div>
        </div>
        <div class="bgfff padding25">
            <div class="preview">媒体资料：</div>
            <div class="imgBox">
                <div class="mg-bt30">
                    <div class="title mg-bt20">产品略缩图：</div>
                   <Row :gutter="50">
                       <Col span="12">
                       <div class="chooseBox">
                           <div class="fileName">{{file}}</div>
                           <div class="fileUpload">
                               <Button  @click="upload" :loading="loadingStatus">上传</Button>
                           </div>
                           <div class="fileChoose">
                               <Upload ref="upload" :before-upload="handleUpload" action="//jsonplaceholder.typicode.com/posts/">
                                   <Button>选择文件</Button>
                               </Upload>
                           </div>
                       </div>
                       </Col>
                   </Row>
                </div>

                <div class="addBox">
                    <div class="mg-bt30 addPage">
                        <div class="title mg-bt20">资源1：</div>
                        <div class="chooseClass mg-bt20">
                            <RadioGroup v-model="animal">
                                <Radio label="图片资源"></Radio>
                                <Radio label="视频资源"></Radio>
                            </RadioGroup>
                        </div>
                        <div class="chooseBox mg-bt20">
                            <div class="fileName">{{file}}</div>
                            <div class="fileUpload">
                                <Button  @click="upload" :loading="loadingStatus">上传</Button>
                            </div>
                            <div class="fileChoose">
                                <Upload ref="upload" :before-upload="handleUpload" action="//jsonplaceholder.typicode.com/posts/">
                                    <Button>选择文件</Button>
                                </Upload>
                            </div>
                        </div>
                        <div class="title mg-bt20">略缩图：</div>
                        <div class="chooseBox">
                            <div class="fileName">{{file}}</div>
                            <div class="fileUpload">
                                <Button  @click="upload" :loading="loadingStatus">上传</Button>
                            </div>
                            <div class="fileChoose">
                                <Upload ref="upload" :before-upload="handleUpload" action="//jsonplaceholder.typicode.com/posts/">
                                    <Button>选择文件</Button>
                                </Upload>
                            </div>
                        </div>
                        <div class="cut"><Icon type="ios-close-circle-outline" /></div>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import Swiper from 'swiper';
    export default {
        data () {
            return {
                //录入产品地址
                proUrl:'',
                //录入产品版本
                proVerson:'',
                //录入产品当前的类别
                proSeris:'逻辑思维',
                //录入产品类别选项
                serisList: [
                    {
                        value: '逻辑思维',
                        label: '逻辑思维'
                    },
                    {
                        value: '大观察',
                        label: '大观察'
                    },
                    {
                        value: '生活常识',
                        label: '生活常识'
                    },
                    {
                        value: '添加新分类',
                        label: '添加新分类'
                    }
                ],
                //录入产品名称
                proName:'',
                //录入产品年龄段
                proAge:'',
                //录入产品当前的开发商
                proDevelop:'良木',
                //录入产品开发商列表
                developList:[
                    {
                        value: '良木',
                        label: '良木'
                    },
                    {
                        value: '添加新分类',
                        label: '添加新分类'
                    }
                ],
                //录入产品容量
                proSize:'',
                //添加产品关键词列表
                tabCount: [],
                //添加产品关键词输入的值
                tagValue:'',

                animal: '图片资源',


                file:null,
                loadingStatus: false
            }
        },
        mounted(){
            var dots = new Swiper('.dots .swiper-container', {
                spaceBetween: 10,
                slidesPerView: 4,
                freeMode: true,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
                navigation: {
                    nextEl: '.arrow-right',
                    prevEl: '.arrow-left'
                },
            })
            var view = new Swiper('.view .swiper-container', {

                thumbs: {
                    swiper: dots
                }
            })
        },
        methods: {
            //输入关键词
            handleAdd () {
                if (this.tagValue!=="") {
                    this.tabCount.push(this.tagValue);
                    this.tagValue=""
                } else {
                    this.$Message.info('不能为空');
                }
            },
            //删除关键词
            handleClose2 (event, name) {
                const index = this.tabCount.indexOf(name);
                this.tabCount.splice(index, 1);
            },
            handleUpload (file) {
                this.file = file.name;
                console.log(this.file)
                return false;
            },
            upload () {
                this.loadingStatus = true;
                this.$refs.upload.post(this.file);
            }
        }
    }
</script>
<style scoped lang="stylus">
    .preview{
        font-size: 26px;
        color: #333;
        margin-bottom: 20px;
    }
    .video-slide{
        border:1px solid #e2e2e2;
        .view{
            height: 500px;
            background: #f5f5f6;
        }
        .dots{
            position: relative;
            margin:20px 50px;
            .swiper-dots{
                height: 90px;
                background: #f5f5f6;
            }
            .dots-btn{
                position: absolute;
                height: 100%;
                cursor: pointer;
                text-align: center;
                top:0;
                width: 40px;
                font-size: 24px;
                line-height: 90px;
                color: #ebebeb;
                &.swiper-button-disabled{
                    display: none;
                 }
                &:hover{
                     color: #333;
                 }
            }
            .arrow-left{
                left: -44px;
            }
            .arrow-right{
                right: -44px;
            }
        }
    }
    .pro-des{
        border:1px solid #e2e2e2;
        height: 632px;
        position: relative;
        .pro-des-table{
            table{
                border-collapse: collapse;
                table-layout: fixed;
                padding:0;
                width:100%;
                tr:last-child{
                    td{
                        border:none
                    }
                }
                td{
                    border-bottom:1px solid #e2e2e2;
                    height: 50px;
                    padding: 15px 0 15px 45px;
                    &:first-child{
                         border-right:1px solid #e2e2e2;
                     }
                }
                span{
                    display: inline-block;
                    margin-right: 40px;
                    margin-top: 20px;
                }
            }
        }
        .download{
            position: absolute;
            width: 100%;
            left: 0;
            bottom:0;
            button{
                border-radius: 0;
                height: 60px;
                padding: 0;
                line-height: 60px;
            }

        }
    }
    .input-pro-ms{
        margin-bottom: 30px;
        .title01{
            font-size: 14px;
            margin-bottom: 15px;
        }
    }
    .proWork{
        font-size: 16px;
        margin-bottom: 15px;
    }
    .addBox{
        overflow: hidden;
        .addPage{
            position: relative;
            float: left;
            margin-right: 4%;
            width: 48%;
            &:nth-child(2n){
                margin-right: 0;
             }
        }
        .cut{
            position: absolute;
            right: 0;
            top:30px;
            cursor: pointer;
            font-size: 20px;
            &:hover i{
                color: #333;
             }
        }
    }

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
        .fileUpload{
            position: absolute;
            right: 0;
            top:0;
            button{
                height: 45px;
                line-height: 45px;
                width: 95px;
                padding: 0;
                font-size: 14px;
            }
        }
    }

</style>