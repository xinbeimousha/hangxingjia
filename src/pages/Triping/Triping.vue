<template>
	<div class="trip-plan">
		<div v-for="(item,index) in item" :key="index">
			<TripContent v-bind:item="item" v-bind:isdetail="isdetail" />
		</div>
	</div>

</template>

<script>
	import TripContent from "components/TripContent/TripContent.vue";
	import { getTravelDetails } from "api/getTravelDetails";
	import { getDate1, getDate2, getTime } from "common/js/day.js";
	export default {
		created() {
			this._getdata();
		},
		data() {
			return {
				item: [],
				isdetail: true
			};
		},
		methods: {
			_getdata() {
				var page = {
					state: 0,
					page: 1,
					pageSize: 10
				};
				getTravelDetails(page).then(res => {
					if(res.success) {
						let dataObj = res.obj;
						for(var i = 0; i < dataObj.length; i++) {
							if(dataObj[i].OrderDetail) {
								for(var j = 0; j < dataObj[i].OrderDetail.length; j++) {
									if(dataObj[i].OrderDetail[j]) {
										if(dataObj[i].OrderDetail[j].order_code) {
											if(
												dataObj[i].OrderDetail[j].order_code.indexOf("H") == 0
											) {
												dataObj[i].OrderDetail[j].dtType = 1;
												dataObj[i].OrderDetail[j].sortTime =
													dataObj[i].OrderDetail[j].in_time;
											} else if(
												dataObj[i].OrderDetail[j].order_code.indexOf("S") == 0
											) {
												dataObj[i].OrderDetail[j].dtType = 3;
												dataObj[i].OrderDetail[j].sortTime = new Date(
													dataObj[i].OrderDetail[j].check_in_date.replace(/-/g,"/") +" " +dataObj[i].OrderDetail[j].check_in_time).getTime();
											}
										} else if(dataObj[i].OrderDetail[j].order12306) {
											dataObj[i].OrderDetail[j].dtType = 2;
											dataObj[i].OrderDetail[j].sortTime = new Date(
												dataObj[i].OrderDetail[j].departDate.replace(/-/g, "/") +
												" " +
												dataObj[i].OrderDetail[j].departTime
											).getTime();
										} else if(dataObj[i].OrderDetail[j].fltno) {
											dataObj[i].OrderDetail[j].dtType = 0;
											dataObj[i].OrderDetail[j].sortTime = new Date(
												getDate1(dataObj[i].OrderDetail[j].departdate).replace(/-/g, "/") + " " + dataObj[i].OrderDetail[j].actdeptime).getTime();
										} else if(dataObj[i].OrderDetail[j].order_no) {
											dataObj[i].OrderDetail[j].dtType = 4;
											if(dataObj[i].OrderDetail[j].server_time.length < 4) {
												dataObj[i].OrderDetail[j].sortTime =
													dataObj[i].OrderDetail[j].create_time;
											} else {
												dataObj[i].OrderDetail[j].sortTime = new Date(dataObj[i].OrderDetail[j].server_time.replace(/-/g, "/")).getTime();
											}
										} else {
											dataObj[i].OrderDetail[j].dtType = -1;
										}
									}
								}
								var orderDetail = dataObj[i].OrderDetail;
								var temp;
								for(var k = 0; k < orderDetail.length - 1; k++) {
									for(var l = k + 1; l < orderDetail.length; l++) {
										if(orderDetail[k] && orderDetail[l]) {
											var value1 = orderDetail[k].sortTime;
											var value2 = orderDetail[l].sortTime;
											if(value1 > value2) {
												temp = orderDetail[k];
												orderDetail[k] = orderDetail[l];
												orderDetail[l] = temp;
											}
										}
									}
								}
							}
							this.item.push(dataObj[i]);
						};
						console.log(this.item);
					}
				});
      }
		},
		components: {
			TripContent
		}
	};
</script>

<style lang="stylus" scoped>

</style>