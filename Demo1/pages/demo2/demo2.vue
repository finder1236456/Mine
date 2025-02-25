<template>
	<view>{{num1}}</view>
	<view>{{num2}}</view>
	<view>{{man}}</view>
	<navigator url="/pages/demo3/demo3">跳转demo3</navigator>
</template>

<script setup>
	import { ref } from 'vue';
	
	let num1 = 6;
	let num2 = ref(1);
	
		console.log(num2.value);
	
	let man = ref({name:"Kobe",age:40});
	man.value.age = 50;
</script>

<style lang="scss">
	       
</style>
