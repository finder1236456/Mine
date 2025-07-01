<template>
	<view class="themeItem">
		<navigator :url="'/pages/classlist/classlist?id='+item._id+'&name='+item.name" class="box" v-if="!isMore">
			<image class="pic" :src="item.picurl" mode="aspectFill"></image>
			<view class="mask">
				{{item.name}}
			</view>
			<view class="tab">
				{{compareTimestamp(item.updateTime)}}前更新
			</view>
		</navigator>
		
		<navigator url="/pages/classify/classify" open-type="reLaunch" class="box more" v-if="isMore">
			<image class="pic" src="/common/image/more.jpg" mode="aspectFill"></image>
			<view class="mask">
				<uni-icons type="more-filled" size="34" color="#fff"></uni-icons>
				<view class="text">
					更多
				</view>
			</view>
		</navigator>
	</view>
</template>

<script setup>
import {compareTimestamp} from "@/utils/common.js"
defineProps({
  isMore: {
    type: Boolean,
    default: false
  },
  item: {
    type: Object,
    default() {
      return {
        name: "默认名称",
        picurl: "../../common/image/classify1.jpg",
        updateTime: Date.now() - 1000 * 60 * 60 * 5
      }
    }
  }
})
</script>

<style lang="scss" scoped>
	.themeItem{
		.box{
			height: 340rpx;
			border-radius: 10rpx;
			overflow: hidden;
			position: relative;
			.pic{
				width: 100%;
				height: 100%;
			}
			.mask{
				width: 100%;
				height: 70rpx;
				position: absolute;
				bottom: 0;
				left: 0;
				background: rgba(0, 0, 0, 0.2);
				color: #fff;
				display: flex;
				align-items: center;
				justify-content: center;
				backdrop-filter: blur(20rpx);
				font-weight: 500;
			}
			.tab{
				position: absolute;
				left: 0;
				top: 0;
				color: #d1dfeb;
				font-size: 13rpx;
				font-weight: 500;
			}
		}
	}
	
			
			.box.more{
				.mask{
					height: 100%;
					width: 100%;
					flex-direction: column;
				}
				.text{
					font-size: 28rpx;
				}
			}
</style>