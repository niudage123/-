<template>
<view>
	<view class="teachers" v-for="(item, index) in Bigpics" :key="index">
		<view class="tea_l">
			<text class="tea_tit">{{item.tit}}</text>
			<text class="tea_sum">{{item.sum}}</text>
			<view class="tea_tx">
				<image :src="item.tx_img"  class="tx_img"></image>
				<view class="tx_r">
					<text class="tx_tit">{{item.tx_tit}}</text>
					<text class="tx_nick">{{item.tx_nick}}</text>
				</view>
			</view>
		</view>
		<view class="tea_img fr">
			<image :src="item.big_pic" class="tea_img"></image>
		</view>
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
			Bigpics : {
				type : Array,
				default : function(){return [];}
			}
		}
	}
</script>

<style>
	.teachers{
		border-top: 4upx solid #FAF8F7;
	    padding-top: 32upx;
	    margin-top: 36upx;    width: 100%;
		display: flex;    justify-content: space-between;
	}
	.tea_l{width: 300upx;    display: flex;
	    flex-direction: column;}
	.tea_tit{width: 280upx;    font-size: 28upx;font-weight: bold;margin-bottom: 20upx;}
	.tea_sum{width: 300upx;     color: #8E8585;font-size: 24upx;margin-bottom: 20upx;    line-height: 50upx;}
	.tea_tx{width: 300upx;  display: FLEX;  }
	.tea_img{width: 324upx;height: 328upx;border-radius:10upx ;}
	.tx_img{
		width: 90upx;
		height: 90upx;
		border-radius: 50%;
	}
	.tx_r{
		width: 190upx;display: FLEX;    flex-direction: column;justify-content: center;margin-left:30upx;
	}
	.tx_tit{ color: #8E8585;font-size: 24upx;width: 100%;margin-top:10upx ;}
	.tx_nick{font-size: 26upx;width: 100%;}
</style>
