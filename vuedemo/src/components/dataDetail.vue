<template>
  <div>
  	<div class="header">
  		<img src="../assets/back.png" alt="" class="back" v-on:click="back()"/>
      状态详情
    </div>
  </div>
</template>

<script>

  export default {
  name: 'dataDetail',
  data () {
    return {}
  },
  methods:{
  	back:function(){
//		this.$router.replace('/my');
  		this.$router.push({path:'/lishi'});
  	}
  }
}
</script>


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
  .back{
  	height:28px;
  	width:28px;
  	position: absolute;
  	left:10px;
  	top:15px;
  }
</style>
