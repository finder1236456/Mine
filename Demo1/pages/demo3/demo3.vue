<template>
	<view>
		<image :src="pic" mode="aspectFill"></image>
	</view>
	
</template>

<script setup>
	import { ref } from 'vue';
	const pic = ref('/static/jx.jpg');
</script>

<style lang="scss">

</style>
