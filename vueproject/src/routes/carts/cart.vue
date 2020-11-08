<template>
	<div class="card">
		<van-nav-bar class="vnavbar" title="我的购物车" left-text="返回" left-arrow @click-left="onClickLeft" fixed />
		<div v-for="item in GoodLists" :key="item._id" class="row">
			<van-swipe-cell>
				<van-row type="flex" align="center">
					<van-col type="flex" justify="center" span="4">
						<input class="cbox" type="checkbox" v-model="item.checked" />
					</van-col>
					<van-col span="20">
						<van-card :num="item.num" :price="item.good.price" :desc="item.good.desc" :title="item.good.name" :thumb="item.good.img">
							<template #footer>
								<van-button @click="changeGood(item,'add')" size="mini">+</van-button>
								<van-button @click="changeGood(item,'del')" size="mini">-</van-button>
							</template>
						</van-card>
					</van-col>
				</van-row>

				<template #right>
					<van-button square text="删除" type="danger" class="delete-button" />
				</template>
			</van-swipe-cell>
		</div>
		<van-submit-bar decimal-length :price="Allprice?Allprice:0" @submit="SubmitCart" button-text="提交订单">
			<input type='checkbox'  v-model="full">全选
			<!-- <template #tip>
        你的收货地址不支持同城送,
        <span>修改地址</span>
      </template>-->
		</van-submit-bar>
	</div>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from "vuex";
	import {
		fetchGetALLGoods,
		fetchSubmitTocart
	} from "../../untils/api";
	import {
		NavBar,
		Toast,
		SubmitBar,
		Checkbox,
		CheckboxGroup,
		Button,
		SwipeCell,
		Tag,
		Row,
		Col,
		Card,
		Icon,
		Dialog,
	} from "vant";
	export default {
		data: function() {
			return {
				fullf: false
			};
		},
		mounted() {
			this.init();
			console.log(this.GoodLists)
			
		},
		computed: {
			...mapState({
				GoodLists: (state) => state.cart.GoodLists,
			}),
			full: {
				get() {
					console.log(23)
					let result = this.GoodLists.every((ele) => {
						return ele.checked == true;
					});
					return result;
				},
				set(newVal) {
					console.log(24,newVal)
					if(newVal){
						this.GoodLists.forEach(ele=>{
							console.log(ele.checked)
							ele.checked=newVal
						})
					}else{
						this.GoodLists.forEach(ele=>{
							ele.checked=newVal	
						})
					}
					// this.full=newVal
				},
			},
			Allprice() {
				let pri = 0;
				this.GoodLists.forEach((ele) => {
					if (ele.checked == true) {
						pri += ele.num * ele.good.price;
					}
				});
				return parseInt(pri + "00");
			},
		},
		components: {
			[NavBar.name]: NavBar,
			[Toast.name]: Toast,
			[SubmitBar.name]: SubmitBar,
			[Checkbox.name]: Checkbox,
			[CheckboxGroup.name]: CheckboxGroup,
			[Button.name]: Button,
			[SwipeCell.name]: SwipeCell,
			[Tag.name]: Tag,
			[Row.name]: Row,
			[Col.name]: Col,
			[Card.name]: Card,
			[Icon.name]: Icon,
			[Dialog.Component.name]: Dialog.Component,
		},
		methods: {
			...mapMutations({
				setList: "cart/setList",
				changeList: "cart/changeList",
				delGoods: "cart/delGoods",
				// changeState: 'cart/changeState'
			}),
			onClickLeft() {
				this.$router.go(-1);
			},
			init() {
				fetchGetALLGoods({}).then((res) => {
					this.setList(res.data.data);
				});
			},
			changeGood(cont, type) {
				console.log(cont)
				if (type == "add") {
					console.log(1)
					this.changeList({
						data: cont,
						type: type
					});
				} else {
					if (cont.num == "1") {
						Dialog.confirm({
								title: "该商品数量为1",
								message: "确认删除吗?",
							})
							.then((res) => {
								console.log(res);
								if (res == "confirm") {
									this.delGoods({
										id: cont._id
									});
								} else {
									Toast("操作取消");
								}
							})
							.catch(() => {
								// on cancel
							});
					} else {
						this.GoodLists.forEach((element) => {
							if (element.good_id == cont.good_id) {
								this.changeList({
									data: cont,
									type: type
								});
							}
						});
					}
				}
			},
			SubmitCart() {
				let goods = ''
				this.GoodLists.forEach(ele => {
					if (ele.checked == true) {
						goods += ele.good_id + ';'
					}
				})
				if (goods == '') {
					Toast('还未选择商品,请选择商品后再提交')
				} else {
					fetchSubmitTocart({
						goods: goods
					}).then(res => {
						Toast.success(res.data.msg)
					})
				}

			},
			changeFull(){
				this.full=!this.full
			}
		},
		watch: {},
	};
</script>

<style lang="scss" scoped>
	.card {
		padding-top: 1.3rem;
		padding-bottom: 1.333333rem;

		.delete-button {
			height: 100%;
		}

		.van-card {
			margin: 0.066667rem 0;
		}

		.van-nav-bar {
			padding-left: 0;
		}

		.cbox {
			justify-content: center;
		}

		.vnavbar {
			.van-nav-bar__left {
				padding: 0;
			}
		}
	}
</style>
