<template>
	<view class="out">
		<input type="text" v-model="iptnum" @focus="isActive = true" @blur="isActive = false" />
		<image src="../../static/y.gif" class="pic" :class="isActive?'active':''"></image>
	</view>
	<view>
		预览:{{iptnum}}
	</view>
</template>

<script setup>
	import { ref } from 'vue';
	const iptnum = ref("");
	const isActive = ref(false);
	
/*	function onFocus(e) {
		isActive.value = true;
	}
	
	function onBlur(e) {
		isActive.value = false;
	}
*/
</script>

<style lang="scss">
.out{
	padding:0 20px;
	margin-top: 60px;
	input{
		border: 1px solid #c6b7c8;
		height: 50px;
		position: relative;
		z-index: 2;
	}
	.pic{
		width: 50px;
		height: 50px;
		z-index: 1;
		position: absolute;
		top: 0;
		left: calc(50% - 25px);
		transition: opacity 0.3s, transform 0.3s;
		opacity: 1;
		transform: translateY(-50px);
	}
	.pic.active{
		opacity: 0;
		transform: translateY(0);
	}
}
</style>
