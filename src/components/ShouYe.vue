<template>
  <div>
    <div class="header">
      当前状态
    </div>
    <div style="overflow-y: scroll;">
    <div class="statu" style="margin-top:50px">
    	<div class="one">
    		体温：{{0}}
    	</div>
    	<div class="one" style="font-size:48px;color:grey;width:8%">|</div>
    	<div class=one>
    		心跳：{{0}}
    	</div>
    </div>
    <div class="statu">
    	<div class="one">
    		血脂：{{0}}
    	</div>
    	<div class="one" style="font-size:48px;color:grey;width:8%">|</div>
    	<div class=one>
    		血压：{{0}}
    	</div>
    </div>
    <div class="statu">
    	<div class="one">
    		疲劳度：{{0}}
    	</div>
    </div>
  </div>
  </div>
  </div>
  
  
</template>

<script>
  export default {
    name: 'ShouYe',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted:function(){
    	fetch('https://api.github.com/users/chriscoyier/repos')
  .then(response => response.json())
  .then(data => {
    // data就是我们请求的repos
    console.log(data)
  });
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
  .statu{
  	display: flex;
  	justify-content: space-around;
  	width: 100%;
  } 
  .one{
  	width:45%;
  	text-align: center;
  	height:140px;
  	line-height: 140px;
  	font-size: 36px;
  }
  
  
</style>
