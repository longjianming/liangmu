<template>
    <div class="page text-right">
        <Page :total="total" show-sizer :transfer="transfer"/>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        props:['total'],
        data(){
            return{
                transfer:true
            }
        },
    }
</script>
<style scoped>
    .page{
        margin-top: 40px;
    }
</style>