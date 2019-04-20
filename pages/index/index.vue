<template>
	<!-- 主体 start -->
	<view class="fos_index">
		<!-- 搜索框 -->
		<view class="banner">
			<view class="grace-rows" style="margin-top:15px;">
				<view class="grace-items grace-rows-demo " style="width:20%; line-height: 30px; margin-right: 20upx;">
						<navigator :url="'../../components/'+lists.path">
							<view style="font-size: 26upx; text-align: right;">
								<text style="font-size: 26upx; text-align: right;">{{location}}</text>
								<text class="grace-iconfont icon-arrow-down" style="font-size: 26upx;"></text>
							</view>
						</navigator>
				</view>
				<view class="grace-items grace-rows-demo grace-left" style="width:90%;margin-right: 36upx;">
					<view class="grace-search-in" style="border-radius: 30upx;">
						<view class="grace-search-icon"></view>
						<input type="search" style="margin-top: -5upx;font-size: 26upx; " @input="searchChange" @confirm="searchNow" :value="searchKey" placeholder="您附近的寄养家庭"></input>
					</view>
				</view>
			</view>
		</view>
		<!-- 轮播图 -->
		<view class="banner">
			<graceSwiper swiperId="garce-swiper-2" :items="swiperItems"></graceSwiper>
		</view>
		<view class="index_btns banner">
			<view class="index_btn">
				<image class="btn_logo" src="https://free.modao.cc/uploads4/images/2927/29273985/v2_pkc2z5.png" ></image>
				<view class="btn_r">
					<text class="btn_tit">我要寄养</text>
					<text class="btn_sum">爱始于家庭</text>
				</view>
			</view>
			<view class="index_btn">
				<image class="btn_logo" src="https://free.modao.cc/uploads4/images/2927/29273985/v2_pkc2z5.png" ></image>
				<view class="btn_r">
					<text class="btn_tit">我要寄养</text>
					<text class="btn_sum">爱始于家庭</text>
				</view>
			</view>
			<view class="index_btn">
				<image class="btn_logo" src="https://free.modao.cc/uploads4/images/2927/29273985/v2_pkc2z5.png" ></image>
				<view class="btn_r">
					<text class="btn_tit">我要寄养</text>
					<text class="btn_sum">爱始于家庭</text>
				</view>
			</view>
			<view class="index_btn">
				<image class="btn_logo" src="https://free.modao.cc/uploads4/images/2927/29273985/v2_pkc2z5.png" ></image>
				<view class="btn_r">
					<text class="btn_tit">我要寄养</text>
					<text class="btn_sum">爱始于家庭</text>
				</view>
			</view>
		</view>
		<view class="banner">
			<text class="info_tit">附近的模范寄养家庭长这样</text>
			<view class="fosterages">
				<view class="fos_img">
					<image src="https://free.modao.cc/uploads4/images/2927/29273985/v2_pkc2z5.png" mode="widthFix"></image>
				</view>
				<text class="fos_tit">快乐家庭宠物寄养</text>
				<text class="fos_distance">1.3km</text>
				<text class="fos_price fr">￥588/晚</text>
			</view>
			<view class="fr fosterages ">
				<view class="fos_img">
					<image src="https://free.modao.cc/uploads4/images/2927/29273985/v2_pkc2z5.png" mode="widthFix"></image>
				</view>
				<text class="fos_tit">快乐家庭宠物寄养</text>
				<text class="fos_distance">1.3km</text>
				<text class="fos_price fr">￥588/晚</text>
			</view>
			<view class="fosterages">
				<view class="fos_img">
					<image src="https://free.modao.cc/uploads4/images/2927/29273985/v2_pkc2z5.png" mode="widthFix"></image>
				</view>
				<text class="fos_tit">快乐家庭宠物寄养</text>
				<text class="fos_distance">1.3km</text>
				<text class="fos_price fr">￥588/晚</text>
			</view>
			<view class="fr fosterages ">
				<view class="fos_img">
					<image src="https://free.modao.cc/uploads4/images/2927/29273985/v2_pkc2z5.png" mode="widthFix"></image>
				</view>
				<text class="fos_tit">快乐家庭宠物寄养</text>
				<text class="fos_distance">1.3km</text>
				<text class="fos_price fr">￥588/晚</text>
			</view>
			<view class="fosterages">
				<view class="fos_img">
					<image src="https://free.modao.cc/uploads4/images/2927/29273985/v2_pkc2z5.png" mode="widthFix"></image>
				</view>
				<text class="fos_tit">快乐家庭宠物寄养</text>
				<text class="fos_distance">1.3km</text>
				<text class="fos_price fr">￥588/晚</text>
			</view>
			<view class="fr fosterages ">
				<view class="fos_img">
					<image src="https://free.modao.cc/uploads4/images/2927/29273985/v2_pkc2z5.png" mode="widthFix"></image>
				</view>
				<text class="fos_tit">快乐家庭宠物寄养</text>
				<text class="fos_distance">1.3km</text>
				<text class="fos_price fr">￥588/晚</text>
			</view>
		</view>
		<view style="clear: both;"></view>
		<view class="banner">
			<text class="info_tit">寄养家庭成长指南</text>
			<image class="act_img1" src="https://free.modao.cc/uploads4/images/2927/29273985/v2_pkc2z5.png"></image>
		</view>
		<view class="banner">
			<text class="info_tit">心动一刻，为TA寻找爱的伴侣</text>
			<image class="act_img2" src="https://free.modao.cc/uploads4/images/2927/29273985/v2_pkc2z5.png"></image>
			<image class="act_img2" style="" src="https://free.modao.cc/uploads4/images/2927/29273985/v2_pkc2z5.png"></image>
		</view>
		<view style="clear: both;"></view>
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
			<view class="fr fosterages ">
				<view class="fos_img">
					<image src="https://free.modao.cc/uploads4/images/2927/29273985/v2_pkc2z5.png" mode="widthFix"></image>
				</view>
				<text class="fos_tit">快乐家庭宠物寄养</text>
				<text class="fos_distance">1.3km</text>
				<text class="fos_price fr">￥588/晚</text>
			</view>
		</view>
		<view style="clear: both;"></view>
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
		<view class="banner" style="height: 50px;width: 100%;"></view>
	</view>
	<!-- 主体 end -->
</template>
<script>

import {
  mapState,
  mapMutations
 } from 'vuex';
import graceSwiper from "../../graceUI/components/graceSwiper.vue";


export default {
	data() {
		return {
			// 轮播数据
			// 图片数据要用网络url，因为体积太大了
			swiperItems : [
				{ imgUrl: 'https://free.modao.cc/uploads4/images/2927/29273985/v2_pkc2z5.png', path : ""},
				{ imgUrl: 'https://aecpm.alicdn.com/simba/img/TB1W4nPJFXXXXbSXpXXSutbFXXX.jpg', path : ""},
				{ imgUrl: 'https://aecpm.alicdn.com/simba/img/TB1_JXrLVXXXXbZXVXXSutbFXXX.jpg', path : ""}
			],

			// 搜索
			searchKey:'',
			lists : { path: "city"},
			publicTalkStaticUrl : this.publicTalkStaticUrl,
			speakerIconImg: this.publicTalkStaticUrl + 'speaker.png',
			speakerMsgs : [
			  { title: "边牧家庭故事分享", url: "flex", opentype: "navigate"},
			  { title: "我与狗狗的那几年", url: "../index/index", opentype: "switchTab"},
			],
			// location: '北京'
		}
	},
	
	onLoad() {
		
	},
	onReachBottom : function(){
	
	},
	computed:{
	   ...mapState(['location']),
	   location: function () {
		   return this.$store.state.location
	   }
	},
	methods: {
		
	},
	components:{
		graceSwiper,

	}
}
</script>
<style>

.fos_index{
	width:670upx;
	margin-left:40upx ;
}

.grace-search-in{
	background-color: #FAF8F7;
}
.index_btns {
	
	width: 710upx;
}
.index_btn{
	width:324upx;
	height: 120upx;
	display: flex;
	box-shadow: 0px 0px 24upx 0px #00000026;
    border-radius: 10upx;
	margin-bottom:20upx ;
	margin-right:20upx ;
	flex: 1;
}
.index_btn .btn_logo{
	width: 60upx;
	height: 60upx;
	margin: 30upx 0 0 30upx;
	
}
.index_btn .btn_r{
	flex: 1;
    display: flex;
	flex-direction: column;
}
.index_btn .btn_tit{
	width: 180upx;
	
	font-size: 26upx;font-weight: bold;
	margin-top: 28upx;margin-left: 38upx;
}
.index_btn .btn_sum{
	width: 180upx;
	
	font-size: 20upx;color: #8E8585;
	margin-top: 4upx;margin-left: 38upx;
}
.info_tit{
	font-weight: bold;
	width:100%;
	
	font-size: 32upx;
}
.act_img1{
	width: 670upx;
	height: 194upx;
	border-radius: 10upx;
	margin-top: 36upx;
}
.act_img2{
	width: 324upx;
	height: 212upx;
	border-radius: 10upx;
	margin-top: 36upx;
	
}
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