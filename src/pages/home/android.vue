<template>
	<el-container>
	<el-main style="background-color: rgb(241, 242, 247);" >
<div id="home" style="margin-left: 1%;">
	
	<div style="position: fixed;left: 70%; ">
	    <el-steps direction="vertical" :active="activeStep" space="40px"
	 finish-status="wait"
	 process-status="finish"
	 >
		  <el-step
			v-for="(item, index) in steps"
			:key="index"
			:title="item.title"
			@click.native="jump(index)"
			icon=""
			>
			 
	
		  </el-step>
		  <el-step icon="el-icon-circle-plus-outline"
		  :key="maxindex"
		  @click.native="dialogFormVisible = true"
		  title="新增">
			
		  </el-step>
		</el-steps>
	</div>
	
	<div style="padding: 0px;">
	<el-dialog title="新增标签" :visible.sync="dialogFormVisible">
	  <el-form :model="form">
	    <el-form-item label="标题" :label-width="formLabelWidth">
	      <el-input v-model="form.name" autocomplete="off" style="width: 90%;"></el-input>
	    </el-form-item>
	    <el-form-item label="文本" :label-width="formLabelWidth" >
	  <el-input v-model="form.text" autocomplete="off"  style="width: 90%;"
	  type="textarea" 
	  maxlength="300"
		show-word-limit
		:autosize="{ minRows: 2, maxRows: 10}"></el-input>
	  
	    </el-form-item>
	  </el-form>
	  <div slot="footer" class="dialog-footer">
	    <el-button @click="dialogFormVisible = false">取 消</el-button>
	    <el-button type="primary" @click="addtitle()">确 定</el-button>
	  </div>
	</el-dialog>
	
	</div>
	
	<div  style="margin-left: 1%;">
		<div v-for="(item, index) in steps" :key="index" class="step-jump" style="margin-top: 3% ;" >
			<p>{{item.title}}</p>
		
		<el-popconfirm
		placement="bottom-end"
		  confirmButtonText='提交'
		  cancelButtonText='删除'
		  icon="el-icon-info"
		  iconColor="#409EFF"
		  title="提交或者删除"
		  @onConfirm="submit(item)"
		  @onCancel="deltitle(item,index)"
		>
			
			
			<el-input style="width: 45rem;"
			  type="textarea"
			  placeholder="请输入内容"
			  v-model="item.data"
			  maxlength="300"
			  show-word-limit
			  :autosize="{ minRows: 2, maxRows: 10}"
			   slot="reference">
			   </el-input>
	</el-popconfirm>
		
		</div>
	</div>
	
	
</div>
</el-main>
</el-container>
</template>

<script type="text/javascript">
	import axios from 'axios'
    export default {
        data:function() {
            return {
			maxindex:'',
			props: ['scrollTop'],
			offsetTop:'',
			activeStep:1,
			steps:[],
			steph:320,
		 dialogFormVisible: false,
		        form: {
		          name: '',
		          text: '',
		        },
		        formLabelWidth: '120px',
            }
        },

     
	// watch: {
	//   scrollTop (val) {
	// 	this.onScroll()
	// 	this.pageTop = val
	//   }
	// },

created () {
  this.$nextTick(() => {
    this.pageTop = this.scrollTop
	 this.getpagedata();
  })
},
        computed:{
         
        },

        methods:{
           onScroll () {
	  let _article = document.querySelectorAll('.step-jump')
	  _article.forEach((item, index) => {
		if (this.scrollTop >= item.offsetTop) {
      this.activeStep = index
	  console.log(this.activeStep)
		}
		})
	},
	submit(item){
		let param ={"page":"android","pid":item.pid,"data":item.data,"title":item.title};
		axios.post('http://'+window.location.host.replace(":8079","")+":8002/updatapage/", param,{ withCredentials:true}).then(res => {
		console.log(res.data);
		if(res.data['code'] ==1){
			this.$message.error('没有权限');
		}
		      })
	},
	deltitle(item,index){
		let param ={"page":"android","pid":item.pid,"data":item.data,"title":item.title};
		axios.post('http://'+window.location.host.replace(":8079","")+":8002/del/", param,{ withCredentials:true}).then(res => {
		console.log(res.data);
		if(res.data['code'] ==1){
			this.$message.error('没有权限');
		}else{
			this.steps.splice(index,1);
		}
		
		 })
	},
	addtitle(){
		let param ={"page":"android","pid":this.maxindex,"data":this.form.text,"title":this.form.name};
		axios.post('http://'+window.location.host.replace(":8079","")+":8002/addpage/", param,{ withCredentials:true}).then(res => {
		let data = res.data
		console.log(data);
		if(res.data['code'] ==1){
			this.$message.error('没有权限');
		}
		else{
			this.steps.push(data.data);
			this.maxindex = this.maxindex+1;
		}
		
		this.dialogFormVisible = false
		
		      })
		
	},
	getpagedata(){
			// var reg = new RegExp( "'" , "g" )
		  axios.get('http://'+window.location.host.replace(":8079","")+":8002/getpage?page=android",{ withCredentials:true}).then(res => {
			
		  // this.steps =JSON.parse(res.data).data;
		  this.steps = res.data.data;

		  this.maxindex = this.steps.length+1;
		  this.steph = this.maxindex*80;

		        })
	},
  jump (index) {
        let that = this
        this.activeStep = index
		// console.log(index)
        // 用 class="step-jump" 添加锚点
        let jump = document.querySelectorAll('.step-jump')
        let total = jump[index].offsetTop-70
        // console.log('纵坐标', total)
//        this.$emit('viewScroll', total)
		document.querySelector(".el-main").scrollTop=total
//         let distance = this.pageTop
// //         平滑滚动，时长500ms，每10ms一跳，共50跳
//         let step = total / 50 >> 0
//         // console.log(step, '222')
//         if (total > distance) {
//           smoothDown()
//         } else {
//           let newTotal = distance - total
//           step = newTotal / 50 >> 0
//           smoothUp()
//         }
//         function smoothDown () {
//           if (distance < total) {
//             distance += step
//             that.$emit('viewScroll', distance)
//             setTimeout(smoothDown, 10)
//           } else {
//             that.$emit('viewScroll', total)
//           }
//         }
//         function smoothUp () {
//           if (distance > total) {
//             distance -= step
//             that.$emit('viewScroll', distance)
//             setTimeout(smoothUp, 10)
//           } else {
//             that.$emit('viewScroll', total)
//           }
//         }
      },
        },

        mounted(){
          

        },
    }
</script>
<style>
	.stydiv{
		background-color:#f5f5f5;
		 border: 1px solid #ccc;
		  font-family: Courier New !important;
		  font-size: 12px !important;
		  word-wrap: break-word;
		  white-space: pre-wrap;
		  width: 50rem;
	}
/* 	.el-textarea__inner {
		background-color: #ccc;
	} */
	.el-dialog__body{
		padding: 0px;
	}
</style>
