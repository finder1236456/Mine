<template>
	<view class="out">
		<view class="item" v-for="(item,index) in goods" :key="item.id"><!--用唯一的key避免出现勾选下移的情况-->
			<checkbox></checkbox>
			<text class="title">{{item.id}}</text>
			<text class="N">{{item.name}}</text>
			<text class="delete" @click="remove(index)">删除</text>
		</view>
	</view>
</template>

<script setup>
	import { ref } from 'vue';
	
	const goods = ref([
		{id:1,name:"小米"},
		{id:2,name:"OPPO"},
		{id:3,name:"VIVO"},
		{id:4,name:"苹果"},
	])
	
		
	function remove(index){
		goods.value.splice(index,1);
	}
</script>

<style lang="scss">
.N{
	margin-left: 10px;
}
.title{
	margin-left: 10px;
}
.delete{
	margin-left: 10px;
	color: red;
}
</style>
