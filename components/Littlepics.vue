<template>
	<view style="display: flex;flex-wrap: wrap;justify-content: space-between;">
		<view class="fosterages " v-for="(item,index) in Litpics"  :key="index">
			<view class="fos_img">
				<image :src="item.pic" mode="widthFix"></image>
			</view>
			<text class="fos_tit">{{item.tit}}</text>
			<text class="fos_distance">{{item.distance}}</text>
			<text class="fos_price fr">{{item.price}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data: function () {
		  return {
			count: 0
		  }
		},
		props:{
			Litpics : {
				type : Array,
				default : function(){return [];}
			}
		}
	}
</script>

<style>
	.fosterages{
		margin-top: 36upx;
		width:324upx;
	}
	.fos_img image{
		width:324upx;
		height:212upx;
		border-radius: 10upx;
	}
	.fos_tit{font-weight: bold;width: 100%;
	font-size: 24upx;}
	.fos_distance{
		background: url(../static/fosterage/dw.png) left no-repeat;
		background-size:20upx;
		padding-left:22upx ;
		font-size: 20upx;
		color: #8E8585;
		
	}
	.fos_price{
		color: #F39319;
		font-size: 20upx;
	}
</style>
