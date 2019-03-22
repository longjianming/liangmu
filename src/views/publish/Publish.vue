<template>
    <div class="fullbox padding25">
        <div class="title01">已发布产品</div>
        <div class="content-full-box">
            <div class="nav-left">
                <RadioGroup v-model="series" type="button" size="large" class="radios">
                    <Radio class="radio" label="1系列"></Radio>
                    <Radio class="radio" label="2系列"></Radio>
                    <Radio class="radio" label="3系列"></Radio>
                </RadioGroup>
            </div>
            <div class="slide-box">
                <!--列表内容-->
                <div class="slide-box-wrap scrollBar">
                   <div class="list-box">
                       <div class="list">
                           <div class="num">NO.001</div>
                           <div class="img"><img src="#" alt=""/></div>
                           <div class="des">
                               <p>产品名称：大观察 1阶</p>
                               <p>发布日期： 2019-01-03</p>
                               <p>适用年龄：3-4</p>
                               <p>开发商：良木科技</p>
                               <p>容量：800MB</p>
                           </div>
                           <div class="close icons" v-if="close"><Icon type="ios-close-circle-outline" /></div>
                           <div class="right icons" v-if="right"><Icon type="ios-checkmark-circle-outline" /></div>
                       </div>
                       <div class="list">
                           <div class="num">NO.001</div>
                           <div class="img"><img src="#" alt=""/></div>
                           <div class="des">
                               <p>产品名称：大观察 1阶</p>
                               <p>发布日期： 2019-01-03</p>
                               <p>适用年龄：3-4</p>
                               <p>开发商：良木科技</p>
                               <p>容量：800MB</p>
                           </div>
                           <div class="close icons" v-if="close"><Icon type="ios-close-circle-outline" /></div>
                           <div class="right icons" v-if="right"><Icon type="ios-checkmark-circle-outline" /></div>
                       </div>
                       <div class="list">
                           <div class="num">NO.001</div>
                           <div class="img"><img src="#" alt=""/></div>
                           <div class="des">
                               <p>产品名称：大观察 1阶</p>
                               <p>发布日期： 2019-01-03</p>
                               <p>适用年龄：3-4</p>
                               <p>开发商：良木科技</p>
                               <p>容量：800MB</p>
                           </div>
                           <div class="close icons" v-if="close"><Icon type="ios-close-circle-outline" /></div>
                           <div class="right icons" v-if="right"><Icon type="ios-checkmark-circle-outline" /></div>
                       </div>
                       <div class="list">
                           <div class="num">NO.001</div>
                           <div class="img"><img src="#" alt=""/></div>
                           <div class="des">
                               <p>产品名称：大观察 1阶</p>
                               <p>发布日期： 2019-01-03</p>
                               <p>适用年龄：3-4</p>
                               <p>开发商：良木科技</p>
                               <p>容量：800MB</p>
                           </div>
                           <div class="close icons" v-if="close"><Icon type="ios-close-circle-outline" /></div>
                           <div class="right icons" v-if="right"><Icon type="ios-checkmark-circle-outline" /></div>
                       </div>
                       <div class="list">
                           <div class="num">NO.001</div>
                           <div class="img"><img src="#" alt=""/></div>
                           <div class="des">
                               <p>产品名称：大观察 1阶</p>
                               <p>发布日期： 2019-01-03</p>
                               <p>适用年龄：3-4</p>
                               <p>开发商：良木科技</p>
                               <p>容量：800MB</p>
                           </div>
                           <div class="close icons" v-if="close"><Icon type="ios-close-circle-outline" /></div>
                           <div class="right icons" v-if="right"><Icon type="ios-checkmark-circle-outline" /></div>
                       </div>
                   </div>
                   <div class="text-center end">已到底 总<span>4</span>款</div>
                </div>
                <!--底部发布-->
                <div class="bgf5 newPro text-right">
                    <Button type="primary" @click.native="$router.push({path:'/addproduct'});">发布新产品</Button>
                    <Button type="primary">返回顶部</Button>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        data () {
            return {
                series: '1系列',
                close:true,
                right:false
            }
        }
    }
</script>
<style scoped lang="stylus">
    .nav-left{
        position: absolute;
        top:0;
        left: 0;
        bottom:0;
        padding-top: 10px;
        width: 315px;
        border-right: 1px solid #e2e2e2;
        .radios{
            display:block;
            .radio{
                display: block;
                width: 230px;
                box-shadow: none !important;
                border:none;
                background: #f5f5f6;
                max-width: 80%;
                margin: 20px auto !important;
                height: 46px;
                line-height: 46px;
                padding: 0;
                text-indent: 40px;
                font-size: 16px !important;
                border-radius: 6px;
                float: none;
                outline: none;
                color: #333;

                &.ivu-radio-wrapper-checked{
                    color: #fff;
                    background: #2f3441;
                    &:before{
                        background: #fff;
                        opacity: 1;
                     }
                 }
                 &:before{
                    width: 8px;
                    height: 8px;
                    background: #9c9c9c;
                    top:50%;
                    margin-top: -4px;
                    left: 18px;;
                    border-radius: 100%;
                    display: block;
                  }
                  &:after{display: none}
            }
        }
    }
    .slide-box{
        position: absolute;
        top:0;
        left: 316px;
        bottom:0;
        right: 0;
        color: #333333;
        .slide-box-wrap{
            position: absolute;
            right: 10px;
            top:20px;
            bottom:60px;
            left: 0;
            overflow: auto;
        }
        .list-box{
            margin-bottom: 30px;
            padding: 0 20px;
            .list{
                padding: 20px 0;
                border-bottom: 1px solid #ededed;
                position: relative;
                overflow: hidden;

                .icons{
                    font-size:42px;
                    color: #e2e2e2;
                    cursor: pointer;
                    position: absolute;
                    right: 0;
                    top:0
                }
                .num{
                    float: left;
                    font-size: 16px;
                    color: #999;
                    margin:53px 30px;
                }
                .img{
                    float: left;
                    width: 194px;
                    height: 130px;
                    background: #f5f5f6;
                    margin-right: 25px;
                }
                .des{
                    float: left;
                    line-height: 1.8em;
                }

            }
        }
    }
    .newPro{
        position: absolute;
        width: 100%;
        left: 0;
        bottom:0;
        padding: 10px 0;
        button{
            margin-right: 10px;
        }
    }
</style>