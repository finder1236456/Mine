<template>
	<view class="pic">
		<image src="../../static/pic2.jpg" class="round"></image>
	</view>
</template>

<script setup>

uni.showToast({
	title:"操作成功",
	icon:'success'
	
})

</script>

<style lang="scss">
.pic{
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
}

.round{
	width: 200rpx;
	height: 200rpx;
	border-radius: 50%;
	border: 1px solid #aaa097;
}
</style>
