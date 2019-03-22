<template>
    <Modal title="提示" :v-model="mod" class-name="vertical-center-modal">
        <!--<p>{{content}}</p>-->
    </Modal>
</template>
<script type="text/ecmascript-6">
    export default {
        methods:{
            props:['mod'],
            data(){
                return{
                    mod:this.mod,
//                    content:this.content
                }
            }
        }
    }
</script>
<style scoped>
</style>