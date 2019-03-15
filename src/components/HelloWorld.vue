<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    {{dd.new_weekly}}
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      dd:[]
    }
  },
  created(){
    this.getdata();
  },
  methods:{
    getdata(){
      axios.post('http://localhost:4000/api/main_page/total_device').then(res=>{
        this.dd=res.data;
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped type="stylus">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
