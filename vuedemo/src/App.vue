<template>
  <div id="app">
    <div>
      <router-view/>
    </div>
    <div class="flex-bar">
     <div v-on:click="but(0)" style="background-color:#66AEFF;color:white" class="flex-con">
     	<router-link to="/shouye" tag="div">首页</router-link>
     </div>
     <div v-on:click="but(1)"  class="flex-con">
     	<router-link to="/lishi" tag="div">历史</router-link>
     </div>
     <div v-on:click="but(2)"  class="flex-con">
      <router-link to="/faxian" tag="div">发现</router-link>
     </div>
     <div v-on:click="but(3)" class="flex-con">
     	<router-link to="/my" tag="div">我的</router-link>
     </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
  	return {
  		red:0
  	}
  },
  methods:{
  	but:function(key){
  		var flex=document.querySelectorAll('.flex-con');
  		flex[this.red].style.color='#66AEFF';
  		flex[this.red].style.background='white';
  		flex[key].style.color='white';
  		flex[key].style.background='#66AEFF';
  		this.red=key;
  	}
  }
}


</script>

<style>
	*{
		padding: 0px;
		margin: 0px;
	}
.flex-bar{
	width:100%;
	display: flex;
	justify-content: space-around;
	text-align: center;
	position: fixed;
	height:60px;
	bottom: 0px;
	border-top:1px solid #46A1FE;
	line-height: 60px;
	z-index: 100;
}
.flex-bar>div{
	width:25%;
	color:#66AEFF;
}
</style>
