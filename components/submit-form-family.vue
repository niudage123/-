<template>
	<!-- 发布需求start-->
	<view class="grace-padding" style="background-color: #F8F8F8;">
		<view class="grace-accordion" style="margin-top: 20px;">
			<view class="grace-form">
					<form @submit="formSubmit">
						<!-- <view class="grace-items">
							<view class="grace-label">姓名</view>
							<input type="text" class="input" name="name"></input>
						</view> -->
						<view class="grace-items">
							<view class="grace-label">宠物类型</view>
							<view class="grace-form-r">
								<picker @change="bindPickerChange" :value="petIndex" :range="petType" name="petType">
									<text>{{petType[petIndex]}}</text>
								</picker>
							</view>
						</view>
						<view class="grace-items">
							<view class="grace-label" style="width: 100px;">开始寄养日期</view>
							<view class="grace-form-r">
								<picker @change="bindDateChangeStart" :value="startDateValue" mode="date" name="startDate" start="1940-01-01" end="2030-12-31">
									<text>{{startDateValue}}</text>
								</picker>
							</view>
						</view>
						<view class="grace-items">
							<view class="grace-label" style="width: 100px;">结束寄养日期</view>
							<view class="grace-form-r">
								<picker @change="bindDateChangeEnd" :value="endDateValue" mode="date" name="endDate" start="1940-01-01" end="2030-12-31">
									<text>{{endDateValue}}</text>
								</picker>
							</view>
						</view>
						
						<view class="grace-items grace-noborder">
							<view class="grace-label">其他宠物信息</view>
							<view class="grace-form-r">
								<textarea placeholder="如果您选择其他宠物类型,请在此填写" name="desc"></textarea>
							</view>
						</view>
						<view style="padding:22upx 0;">
							<button formType="submit" type="primary" style="width:100%;">提交</button>
						</view>
					</form>
				</view>
			</view>
		</view>
		</view>
	</view>
		<!-- 发布需求end-->
</template>

<script>
	export default {
		data() {
			return {
				petIndex: 0,
				petType : ['狗', '猫','其他'],
				startDateValue : "请选择",
				endDateValue : "请选择",
			};
		},
		methods: {
			formSubmit : function(e){
				// wx.showToast({title:'请观察控制台', icon:'none'});
				wx.showToast({title:JSON.stringify(e.detail.value), icon:'none'});
				console.log(JSON.stringify(e.detail.value));
			},
			bindPickerChange:function(e){
				console.log(e);
				this.petIndex = e.detail.value;
			},
			bindDateChangeStart : function(e){
				console.log(e)
				this.startDateValue = e.detail.value;
			},
			bindDateChangeEnd : function(e){
				console.log(e)
				this.endDateValue = e.detail.value;
			},
		}
	}
</script>

<style>

</style>
