<template>
   <div class="container">
       <div class="header">
           <Col span="12"><i class="ivu-icon ivu-icon-ios-desktop-outline"></i>后台管理系统</Col>
           <Col span="12" class="userinfo">
                <div class="userinfo-con" @click="modallg = true"><i class="ivu-icon ivu-icon-md-close-circle"></i>退出登录</div>
               <Modal title="提示" v-model="modallg" @on-ok="ok" @on-cancel="cancel" class-name="vertical-center-modal">
                   <p>确认退出吗?</p>
               </Modal>

           </Col>
       </div>
       <div class="main">
           <!--导航菜单-->
           <aside class="nav">
               <Menu :theme="theme2" accordion="true">
                   <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
                       <MenuItem v-if="item.children.length<1" :name="item.name" :key="'menuitem' + item.name">
                           <Icon :type="item.iconCls" />
                           {{item.name}}
                       </MenuItem>

                       <Submenu :name="index" v-if="!item.hidden && item.children.length>0">
                           <template slot="title">
                               <Icon :type="item.iconCls" />
                               {{item.name}}
                           </template>
                           <MenuItem v-for="child in item.children" :name="child.path" @click.native="$router.push(child.path)">{{child.name}}</MenuItem>
                       </Submenu>
                   </template>
               </Menu>
           </aside>
           <section class="content-container">
               <div class="content-wrapper">
                   <transition name="fade" mode="out-in">
                       <router-view></router-view>
                   </transition>
               </div>
           </section>
       </div>
   </div>
</template>
<script>
    export default {
        data(){
            return {
                theme2: 'dark',
                modallg: false
            }
        },
        created(){

        },
        methods:{
            ok(){
                let _this=this
                _this.$router.push('/login');
            },
            cancel(){
                //this.$Message.info('Clicked cancel');
            }
        }
    }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
    @import '~@/styles/vars.styl';
    .header{
        position: fixed;
        height: 62px;
        top:0;
        z-index: 999;
        left: 0;
        width: 100%;
        background: $color-primary;
        color:#fff;
        font-size: 22px;
        line-height: 62px;
        i{
            margin-left: 24px;
            font-size: 32px;
            margin-right: 20px;
            margin-top: -3px;
        }
        .userinfo{
            text-align: right;
            font-size:16px;
            .userinfo-con{
                margin-right: 24px;
                display: inline-block;
                cursor: pointer;
            }
            i{
                margin-right: 10px;
                font-size: 30px;
            }
        }
    }
    .nav{
        position: fixed;
        width: 308px;
        top:62px;
        left: 0;
        bottom:0;
        overflow: auto;
        background: $color-primary;
        .ivu-menu{
            background: none;
            width:100% !important;
            font-size:16px;
            .ivu-menu-submenu{
                border-bottom: 1px solid #414758;
            }
            .ivu-menu-submenu-title{
                color: #fff;
                background: none !important;
                i{
                    font-size: 26px;
                    margin-top: -4px;
                    margin-right: 15px;
                }
            }
            .ivu-menu{
                .ivu-menu-item{
                    font-size: 16px;
                    background: #3e4351;
                    padding-left: 72px !important;
                }

            }
        }
        i{
            font-size: 26px;
            margin-top: -4px;
            margin-right: 15px;
        }
        li{font-size: 16px;}
    }

    .content-container{
        position: absolute;
        left: 308px;
        top:62px;
        bottom:0;
        right: 0;
        overflow: auto;
        .content-wrapper{
            padding: 25px;
        }
    }
    .vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;
        .ivu-modal{
            top: 0 !important;
        }
    }
    li:nth-child(1).ivu-menu-item-selected{
        color: #fff !important;
        background: #515a6e !important;
    }
</style>