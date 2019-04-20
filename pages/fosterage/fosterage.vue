<template>
	<view class="fos_index">
		<!-- 轮播图 -->
		<view class="banner">
			<graceSwiper swiperId="garce-swiper-2" :items="swiperItems"></graceSwiper>
		</view>
		<view class="fosterage_info banner">
			<text class="info_tit">成为寄养家庭，每月额外收入可达XXX</text>
			<text class="info_sum">通过iPet，在为自家毛孩子积攒口粮费和住宿基金之余，还可以结识有趣的宠爸宠妈，更可以给自己家的毛孩子寻找合适的小伙伴！</text>
			<text class="info_link">成为寄养家庭完全免费！</text>
			<text class="info_but">立即成为寄养家庭</text>
		</view>
		<view class="banner">
			<text class="info_tit">谁是本期超赞家庭，戳进来看看</text>
			<view class="fosterages">
				<view class="fos_img">
					<image src="https://free.modao.cc/uploads4/images/2927/29273985/v2_pkc2z5.png" mode="widthFix"></image>
				</view>
				<text class="fos_tit">快乐家庭宠物寄养</text>
				<text class="fos_distance">1.3km</text>
				<text class="fos_price fr">￥588/晚</text>
			</view>
			<view class="fosterages ">
				<view class="fos_img">
					<image src="https://free.modao.cc/uploads4/images/2927/29273985/v2_pkc2z5.png" mode="widthFix"></image>
				</view>
				<text class="fos_tit">快乐家庭宠物寄养</text>
				<text class="fos_distance">1.3km</text>
				<text class="fos_price fr">￥588/晚</text>
			</view>
			<view class="fosterages ">
				<view class="fos_img">
					<image src="https://free.modao.cc/uploads4/images/2927/29273985/v2_pkc2z5.png" mode="widthFix"></image>
				</view>
				<text class="fos_tit">快乐家庭宠物寄养</text>
				<text class="fos_distance">1.3km</text>
				<text class="fos_price fr">￥588/晚</text>
			</view>
			<view class="fosterages ">
				<view class="fos_img">
					<image src="https://free.modao.cc/uploads4/images/2927/29273985/v2_pkc2z5.png" mode="widthFix"></image>
				</view>
				<text class="fos_tit">快乐家庭宠物寄养</text>
				<text class="fos_distance">1.3km</text>
				<text class="fos_price fr">￥588/晚</text>
			</view>
		</view>
		
		
		<view class="banner">
			<text class="info_tit">大咖访谈：寄养师进阶之路</text>
			<view class="teachers">
				<view class="tea_l">
					<text class="tea_tit">快乐家庭宠物寄养</text>
					<text class="tea_sum">内容描述生活中小动物久是自己的亲人，没有谁比它更懂主人的心，有了它……</text>
					<view class="tea_tx">
						<image src="https://free.modao.cc/uploads4/images/2927/29273985/v2_pkc2z5.png"  class="tx_img"></image>
						<view class="tx_r">
							<text class="tx_tit">寄养师</text>
							<text class="tx_nick">花家</text>
						</view>
					</view>
				</view>
				<view class="tea_img fr">
					<image src="https://free.modao.cc/uploads4/images/2927/29273985/v2_pkc2z5.png" class="tea_img"></image>
				</view>
			</view>
			<view class="teachers">
				<view class="tea_l">
					<text class="tea_tit">快乐家庭宠物寄养</text>
					<text class="tea_sum">内容描述生活中小动物久是自己的亲人，没有谁比它更懂主人的心，有了它……</text>
					<view class="tea_tx">
						<image src="https://free.modao.cc/uploads4/images/2927/29273985/v2_pkc2z5.png"  class="tx_img"></image>
						<view class="tx_r">
							<text class="tx_tit">寄养师</text>
							<text class="tx_nick">花家</text>
						</view>
					</view>
				</view>
				<view class="tea_img fr">
					<image src="https://free.modao.cc/uploads4/images/2927/29273985/v2_pkc2z5.png" class="tea_img"></image>
				</view>
			</view>
		</view>
		
		<!--view>测试数据
			<view class="list" v-for="(value, index) in fos_data" >
				<view  class="items" v-on:click="greet(index)">
					<image :src="value.pic" class="imgs" mode="widthFix"></image>
					<view class="title">{{value.title}}</view>
				</view>
			</view>
		</view-->
	</view>
</template>

<script>
	var dataObj = require('../../data/data.js');

	console.log(dataObj);
	import graceSwiper from "../../graceUI/components/graceSwiper.vue";
	export default {
		data() {
			return {
				swiperItems : [
					{ imgUrl: 'https://free.modao.cc/uploads4/images/2927/29273985/v2_pkc2z5.png', path : ""},
					{ imgUrl: 'https://aecpm.alicdn.com/simba/img/TB1W4nPJFXXXXbSXpXXSutbFXXX.jpg', path : ""},
					{ imgUrl: 'https://aecpm.alicdn.com/simba/img/TB1_JXrLVXXXXbZXVXXSutbFXXX.jpg', path : ""}
				],
				fos_data:{},
				//加载代码
				loading: false,
				loadingType: 0,
				isEnd: false,
				
			};
		},
		onLoad() {
			//_self = this;
			this.getList();
		},
		methods: {
			getList : function(){
				
				
				//最后一页判断[模拟，正式环境请根据 api 接口请求结果判断]
				/*if(page > 3){
					this.loadingType = 2;
					return;
				}
				this.loadingType = 1;*/
				//模拟api请求延迟关闭 Loading
				
				uni.request({
					url: 'http://192.168.1.100:3001/inter/mao',
					success: (res) => {
						
						this.fos_data =res.data;
						console.log(this.fos_data);
						
					}
				});

			},
			greet:function(index){
				uni.navigateTo({
					url: 'test?id=index'
				});
			},
		},
		components:{
			graceSwiper
			
		},
		
	}
	
	

</script>

<style>

.info_tit{
	font-weight: bold;
	width:100%;
	
	font-size: 32upx;
}
.info_sum{
	width:100%;
	
	font-size: 26upx;
    line-height: 48upx;
	margin: 10upx 0;
}
.info_link{
	width:100%;
	
	color: #F39319;
	font-size: 26upx;
}
.info_but{
	width: 550upx;
	height:88upx;
	background-color:#F39319 ;
	
	text-align: center;
	line-height: 88upx;
	color: white;
	border-radius: 44upx;
	margin-left: 50upx;
	margin-top: 70upx;
}
.fosterages{
	margin-top: 36upx;
	width:324upx;
	margin-bottom: 40upx;
}
.fos_img image{
	width:324upx;
	height:212upx;
	border-radius: 10upx;
}
.fos_tit{font-weight: bold;width: 100%;
font-size: 24upx;}
.fos_distance{
	background: url(../../static/fosterage/dw.png) left no-repeat;
	background-size:20upx;
	padding-left:22upx ;
	font-size: 20upx;
	color: #8E8585;
	
}
.fos_price{
	color: #F39319;
	font-size: 20upx;
}
.teachers{
	border-top: 4upx solid #FAF8F7;
    padding-top: 32upx;    display: flex;
    margin-top: 36upx;    width: 100%;    justify-content: space-between;
}
.tea_l{width: 300upx;flex: 1 50%;flex-direction: column;}
.tea_tit{width: 280upx;    font-size: 28upx;font-weight: bold;margin-bottom: 20upx;}
.tea_sum{width: 300upx;     color: #8E8585;font-size: 24upx;margin-bottom: 20upx;    line-height: 50upx;}
.tea_tx{width: 300upx;  display: flex;  }
.tea_img{width: 324upx;height: 328upx;border-radius:10upx ;flex: 1 50%;}
.tx_img{
	width: 90upx;
	height: 90upx;
	border-radius: 50%;
}
.tx_r{
	    display: flex;
    flex-direction: column;
    margin-left: 30upx;justify-content: center;
}
.tx_tit{ color: #8E8585;font-size: 24upx;width: 100%;margin-top:10upx ;}
.tx_nick{font-size: 26upx;width: 100%;}

</style>
