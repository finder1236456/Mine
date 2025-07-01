<template>
	<view class="classlist">
		<view class="content">
			<navigator :url="'/pages/preview/preview?id='+item._id" class="item" 
			v-for="item in classList"
			:key="item._id">
				<image :src="item.smallPicurl" mode="aspectFill"></image>
			</navigator>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import {onLoad,onReachBottom} from "@dcloudio/uni-app"
import {apiGetClassList} from "@/api/apis.js"
const classList = ref([]);
const noData = ref(false);
const queryParams = {
	pageNum:1,
	pageSize:12
}

onLoad((e)=>{
	let {id=null,name="默认标题"} = e;
	if(id) queryParams.classid = id;	
	console.log(id,name);
	uni.setNavigationBarTitle({
		title:name
	})
	getClassList();
})

onReachBottom(()=>{
	if(noData.value) return;
	queryParams.pageNum++;
	getClassList();
})

const getClassList =async ()=>{
	let res;
	if(queryParams.classid) res = await apiGetClassList(queryParams);
	classList.value = [...classList.value, ...res.data];
	if(queryParams.pageSize > res.data.length) noData.value = true;
	console.log(res.data);
}
</script>

<style lang="scss" scoped>
.classlist{
	.content{
		display: grid;
		grid-template-columns: repeat(3,1fr);
		gap: 5rpx;
		padding: 5rpx;
		.item{
			height: 440rpx;
			image{
				width: 100%;
				height: 100%;
				display: block;
			}
		}
	}
}	       
</style>
