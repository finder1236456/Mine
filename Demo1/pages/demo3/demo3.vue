<template>
	<view>
		<image :src="pic" mode="aspectFill"></image>
	</view>
	
	<navigator url="/pages/demo4/demo4">跳转demo4</navigator>
	
</template>

<script setup>
	import { ref } from 'vue';
	const pic = ref('/static/jx.jpg');
	
</script>

<style lang="scss">
	
</style>
