<template>
	<view class="box" hover-class="Hbox" hover-stay-time="0"></view>
	<view>
		<navigator url="/pages/demo1/demo1">To Demo1</navigator>
		
	</view>
</template>

<script setup>
	
</script>

<style lang="scss">
	.box{
		width: 200px;
		height: 200px;
		background-color: #ccc;
	}
	.Hbox{
		width: 200px;
		height: 200px;
		background-color: #000;
	}
</style>
