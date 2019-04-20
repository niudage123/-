<template>
	<view class="grace-padding">
		<view class="myface"><image src="http://img1.imgtn.bdimg.com/it/u=398457981,1911787948&fm=26&gp=0.jpg" mode="widthFix"></image></view>
		<view class="nick-name">
			小皮球
			<text style="margin:0 5px; color:#777;" @tap="set">设置</text>
		</view>
		
		<view class="grace-title grace-nowrap grace-space-between" style="margin-top:15px;">
			<view class="grace-h5 grace-blod">我的订单</view>
			<navigator class="grace-more-r">更多<text class="grace-iconfont icon-arrow-right"></text></navigator>
		</view>
		<view class="grace-box-banner" style="background:#F7F8F9;">
			<view class="garce-items">
				<view class="line1">5<text>单</text></view>
				<view class="line2">未付款</view>
			</view>
			<view class="garce-items">
				<view class="line1">2<text>单</text></view>
				<view class="line2">待收货</view>
			</view>
			<view class="garce-items">
				<view class="line1">10<text>单</text></text></view>
				<view class="line2">待评价</view>
			</view>
			<view class="garce-items">
				<view class="line1">2<text>单</text></view>
				<view class="line2">退款/售后</view>
			</view>
		</view>
		
		<view class="grace-title grace-nowrap grace-space-between" style="margin-top:15px;">
			<view class="grace-h5 grace-blod">我的收藏</view>
			<navigator class="grace-more-r">更多<text class="grace-iconfont icon-arrow-right"></text></navigator>
		</view>
		<view class="grace-imgitems">
			<navigator url="../product-info/product-info" class="grace-items">
				<image src="https://img.alicdn.com/bao/uploaded/i2/452325706/O1CN011s1OQAszoPWK8Rt_!!0-item_pic.jpg" mode="widthFix"></image>
				<view class="grace-imgitems-text">拉风大衣</view>
				<view class="grace-imgitems-more">
					￥19.99
				</view>
			</navigator>
			<navigator url="../product-info/product-info" class="grace-items">
				<image src="https://img.alicdn.com/bao/uploaded/i1/2787417447/O1CN0124sly8iXb80L4OS_!!0-item_pic.jpg" mode="widthFix"></image>
				<view class="grace-imgitems-text">特价T恤</view>
				<view class="grace-imgitems-more">
					￥9.99
				</view>
			</navigator>
			<navigator url="../product-info/product-info" class="grace-items">
				<image src="https://img.alicdn.com/bao/uploaded/i2/452325706/O1CN011s1OQAszoPWK8Rt_!!0-item_pic.jpg" mode="widthFix"></image>
				<view class="grace-imgitems-text">拉风大衣</view>
				<view class="grace-imgitems-more">
					￥19.99
				</view>
			</navigator>
			<navigator url="../product-info/product-info" class="grace-items">
				<image src="https://img.alicdn.com/bao/uploaded/i1/2787417447/O1CN0124sly8iXb80L4OS_!!0-item_pic.jpg" mode="widthFix"></image>
				<view class="grace-imgitems-text">特价T恤</view>
				<view class="grace-imgitems-more">
					￥9.99
				</view>
			</navigator>
		</view>
		
		<view class="grace-title grace-nowrap grace-space-between" style="margin-top:15px;">
			<view class="grace-h5 grace-blod">其他功能</view>
			<navigator class="grace-more-r">更多<text class="grace-iconfont icon-arrow-right"></text></navigator>
		</view>
		<view style="line-height:30px;">
			请自行添加...
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			set : function(){
				uni.navigateTo({
					url:"../set/set"
				});
			}
		}
	}
</script>

<style>
.nick-name{margin:10px; text-align:center;}
.myface{width:88px; height:88px; border:5px solid #F1F2F3; border-radius:100%; margin:15px auto;}
.myface image{width:100%; border-radius:100%;}
</style>
