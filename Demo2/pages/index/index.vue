<template>
	<view class="content">
		
		<UserInfo v-for="(item,index) in userinfo" :obj="item"></UserInfo>
				
	</view>
</template>

<script setup>
import {ref} from "vue";
const userinfo = ref([
	{name:"张三",avatar:"../../static/pic1.jpg"},
	{name:"李四",avatar:"../../static/pic2.jpg"},
	{name:"王五",avatar:"../../static/pic3.jpg"},
])
</script> 

<style>

</style>
