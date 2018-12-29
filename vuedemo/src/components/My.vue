<template>
  <div>
  	<div class="header">
  		我
    </div> 
    <div class="png"></div>
  </div>
</template>

<script>
export default {
  name: 'My',
  data () {
    return {
      
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
  .png{
  	margin-top:56px;
  	height:160px;
  	background-color: #E8EAED;
  	width:100%;
  }
</style>
