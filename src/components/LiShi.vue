<template>
  <div>
   <div class="header">
      历史记录
    </div>
    <div style="overflow-y: scroll;margin-top:50px">
    	<div v-for="dd in list" class="listOne" v-on:click="openThis(dd)"><span style="color:greenyellow">{{dd.hDate}}</span>
    		<span style="color:#0A9EE8">{{dd.state}}</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LiShi',
  data () {
    return {
      list:[
      {hDate:'2018年6月11日9点10分',bloodPressure:120,bloodFat:40,temperature:'37.6',heartbeat:'80',state:'良好'},
      {hDate:'2018年9月11日18点40分',bloodPressure:110,bloodFat:30,temperature:'37.2',heartbeat:'70',state:'疲劳'}
      ]
    }
  },
  methods:{
  	openThis:function(dd){
//		this.$router.replace('/my');
  		this.$router.push({path:'/datadetail',query:dd});
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  	height:56px;
  	background: linear-gradient(to left,#22b9ff,#0a9ee8);
  	font-size: 24px;
  	width: 100%;
  	line-height: 56px;
  	text-align: center;
  	color:white;
  	border-radius: 4px;
  	position: absolute;
  	top:0px;
  }
  .listOne{
  	padding:10px 10px;
  	display: flex;
  	font-size: 20px;
  	justify-content: space-between;
  }
  .listOne span{
  	display: block;
  }
</style>
