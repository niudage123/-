<template>
		<view class="progress">
			<view class="progress_bar">
				<view class="pro_bar_bg">
					<view class="pro_bar_color" :style="{width:colorwidth}"></view>
				</view>
				<view class="progress_bar_point cur">
					
				</view>
				<view class="progress_bar_point" :class="[pro1>1 ? 'cur' : '']">
					
				</view>
				<view class="progress_bar_point" :class="[pro1>2 ? 'cur' : '']">
					
				</view>
				<view class="progress_bar_point" :class="[pro1>3 ? 'cur' : '']">
					
				</view>
			</view>
			<view class="pro_tit">
				<text class="cur">家庭信息</text>
				<text :class="[pro1>1 ? 'cur' : '']">寄养服务</text>
				<text :class="[pro1>2 ? 'cur' : '']">个人信息</text>
				<text :class="[pro1>3 ? 'cur' : '']">审核认证</text>
			</view>
			<view class="pro_2"  v-if="pro2">
				<view class="pro2_bar_bg">
					<view class="pro2_bar_color" :style="{width:colorwidth2}"></view>
				</view>
				<view class="progress_bar_p2 cur">
					1
				</view>
				<view class="progress_bar_p2"  :class="[pro2>1 ? 'cur' : '']">
					2
				</view>
			</view>
			<view class="pro_3" v-if="pro3">
				<view class="pro3_bar_bg">
					<view class="pro2_bar_color" :style="{width:colorwidth2}"></view>
				</view>
				<view class="progress_bar_p2 cur">
					1
				</view>
				<view class="progress_bar_p2" :class="[pro3>1 ? 'cur' : '']">
					2
				</view>
				<view class="progress_bar_p2"  :class="[pro3>2 ? 'cur' : '']">
					3
				</view>
			</view>
		</view>
		
</template>

<script>
	export default {
		data() {
			return {
				pro1:1,
				pro2:1,
				pro3:0,
				colorwidth:'0',
				colorwidth2:'0',
			};
		},
		props:{
			proBar : {
				type : Array,
				default : function(){return {};}
			}
		},
		methods:{
			FunBar:function(){
				this.pro1 = this.proBar[0];
				this.pro2 = this.proBar[1];
				this.pro3 = this.proBar[2];
				this.colorwidth= (this.pro1-1)*33.33+'%';
				if(this.pro2>0){
					this.colorwidth2= (this.pro2-1)*100+'%';
				}else{
					this.colorwidth2= (this.pro3-1)*138+'upx';
				}
				
				//console.log('com '+this.proBar);
			}
		},
		created() {
			this.FunBar();
		},
		watch:{
			proBar(val){
				this.proBar = val;
				//console.log('aaaa'+val);
				this.FunBar();
			}
		}
	}
</script>

<style>
.progress{
		display: flex;
		justify-content: center;
		width: 100%;
		flex-wrap: wrap;
	}
	.progress_bar{
		width: 560upx;
		height: 16upx;
		background-color: #FAF8F7;
		border-radius: 10upx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		    overflow: hidden;
	}
	.pro_bar_bg{
		width: 560upx;
		height: 16upx;
	}
	.progress_bar_point{
		width: 12upx;
		height: 12upx;
		border: 2upx solid #E0DBDA;
		border-radius: 50%;
		margin-top:-16upx ;
		background-color: white;
	}
	.pro_tit{
		font-size: 22upx;
		margin-top: 18upx;
		display: flex;
		justify-content: space-between;
		width: 96%;
	}
	
	.pro_bar_color{
		width: 0;
		height: 16upx;
		background:linear-gradient(to right, #F39319, #FFFFFF);
	}
	.pro2_bar_bg{
		width: 100px;
		height: 16upx;
		position: absolute;
		background-color: #FAF8F7;
	}
	.pro3_bar_bg{
		width: 277upx;
		height: 16upx;
		position: absolute;
		background-color: #FAF8F7;
	}
	.pro2_bar_color{
		width: 0;
		height: 16upx;
		background:linear-gradient(to right, #F39319, #FFFFFF);
	}
	.pro_2{
		margin-top: 70upx;
		display: flex;
		justify-content: space-between;
		width:200upx;
		flex-wrap: wrap;
	}
	.pro_3{
		margin-top: 70upx;
		display: flex;
		justify-content: space-between;
		width:277upx;
		flex-wrap: wrap;
	}
	.progress_bar_p2{
		width: 42upx;
		height: 42upx;
		border: 2upx solid #E0DBDA;
		border-radius: 50%;
		margin-top:-16upx ;
		background-color: white;
		text-align: center;
		color:#8E8585 ;
		font-size: 22upx;
		line-height: 42upx;
		z-index: 33;
	}
	.cur{
		border-color:#F39319 ;
		color: #F39319;
	}
	.progress_bar_p2.cur{
		background-color:#F39319 ;
		color: white;
	}
</style>
