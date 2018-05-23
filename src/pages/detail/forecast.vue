<template>
	 <div class="sales-board">
	 	 <div class="sales-board-intro">
        <h2>数据预测</h2>
        <p>未来，大数据会变得越来越重要，其核心应用预测也会成为互联网行业以及产业变革的重要力量，我们很有必要对数据预测及其分析方法进行全面且深入的了解。在这一点上，《大数据预测》是本很好的读物，适合大数据所有相关行业的人阅读。</p>
      </div>
	 	<div class="sales-board-form">
	 		<div class="sales-board-line">
	 			<div class="sales-board-line-left">
	 				产品类型:
	 			</div>
	 			<div class="sales-board-line-right">
	 				<v-chooser :selections="buyTypes"></v-chooser>
	 			</div>
	 		</div>
	 		<div class="sales-board-line">
	 			<div class="sales-board-line-left">
	 				适用地区:
	 			</div>
	 			<div class="sales-board-line-right">
	 				<v-selection :selections="districts">
	 					
	 				</v-selection>
	 			</div>
	 		</div>
	 		<div class="sales-board-line">
	 			<div class="sales-board-line-left">
	 				有效时间:
	 			</div>
	 			<div class="sales-board-line-right">半年
	 			</div>
	 		</div>
	 		<div class="sales-board-line">
	 			<div class="sales-board-line-left">
	 				总价:
	 			</div>
	 			<div class="sales-board-line-right">500
	 			</div>
	 		</div>
	 		<div class="sales-board-line">
	 			<div class="sales-board-line-left">
	 				
	 			</div>
	 			<div class="sales-board-line-right">
	 				<div class="button">
	 					<a>立即购买</a>
	 				</div>
	 			</div>
	 		</div>
	 	</div>
	 	<div class="sales-board-des">
	 		<h2>产品说明</h2>
	 		<p>
	 			历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。
	 		</p>
	 		<table class="sales-board-table">
	 			<tbody>
	 				<tr v-for="item in tableData">
	 					<td v-for = "itemchild in item ">
	 						<div class="intro-pic">
                            <label> {{itemchild}}</label>
                      </div>
	 					</td>	
	 				</tr>

	 			</tbody>

	 		</table>
	 	</div>
	 </div>
</template>

<script >

import VSelection from '@/components/base/selection'
import VChooser from '@/components/base/chooser'

	export default {
		components: {
			VSelection,
			VChooser
		},
		data () {
			return {
      buyTypes: [
        {
          label: '红色版',
          value: 0
        },
        {
          label: '绿色版',
          value: 1
        },
        {
          label: '紫色版',
          value: 2
        }
      ],
      districts: [
        {
          label: '北京',
          value: 0
        },
        {
          label: '上海',
          value: 1
        },
        {
          label: '广州',
          value: 2
        },
        {
          label: '天津',
          value: 3
        },
        {
          label: '武汉',
          value: 4
        },
        {
          label: '重庆',
          value: 5
        },
      ],
      tableData: [
      ["安全安保","安全安保","安全安保","安全安保","安全安保","安全安保","安全安保"],
      ["电子电工","电子电工","电子电工","电子电工","电子电工","电子电工","电子电工"],
      ["家用电器","家用电器","家用电器","家用电器","家用电器","家用电器","家用电器"],
      ["美容化妆","美容化妆","美容化妆","美容化妆","美容化妆","美容化妆","美容化妆"],
      ["软件","软件","软件","软件","软件","软件","软件"],
  ]
    }
		}
	}


</script>



<style scoped>

	

</style>