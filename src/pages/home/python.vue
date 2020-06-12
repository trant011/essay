<template>
	<el-container>
		<el-main>
			<div>
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
						
						
 <p v-if='flag[index]' class="stydiv" @click='edit(index)' >
	<strong>{{item.title}}</strong>
	  <br />
	    <br />
	 <span>{{item.data}}</span></p>
 
 <div  v-else>
	 
	 <el-input style="width: 45rem;" v-model="item.title"  ></el-input>
	 <br />
 <el-popconfirm
 placement="bottom-end"
   confirmButtonText='提交'
   cancelButtonText='删除'
   icon="el-icon-info"
   iconColor="#409EFF"
   title="提交或者删除"
   @onConfirm="submit(item,index)"
   @onCancel="deltitle(item,index)"
  
 >
 
 <!-- <el-input style="width: 45rem;" v-model="item.title"  ></el-input> -->
 <el-input style="width: 45rem;"
   type="textarea"
   placeholder="请输入内容"
   v-model="item.data"
   maxlength="300"
   show-word-limit
   :autosize="{ minRows: 2, maxRows: 10}"
    slot="reference"
	@blur="submit(item,index)"
	 >
    </el-input>

</el-popconfirm>
		</div>
					
						</div>
					</div>
			   </div>
		</el-main>
	</el-container>
</template>

<script>
		import axios from 'axios'
	export default {
	    data() {
		return {
			maxindex:'',
			flag:[],
			props: ['scrollTop'],
			offsetTop:'',
			activeStep:1,
			steps:[],
			steph:320,
			dialogFormVisible: false,
			formLabelWidth: '120px',
			form: {
			    name: '',
			    text: '',
					},
	        }
	},
	created () {
	  this.$nextTick(() => {
		   this.flag = [];
	    this.pageTop = this.scrollTop;
		 this.getpagedata();
		
	  })
	},
	methods:{
	        edit(index){
				console.log("edit"+index);
		
				   this.$set(this.flag, index, false);
	
	        },
	        input(){
	           // this.flag=true;
	        },
			onScroll () {
				  let _article = document.querySelectorAll('.step-jump')
				  _article.forEach((item, index) => {
					if (this.scrollTop >= item.offsetTop) {
			      this.activeStep = index
				 
					}
					})
				},
				submit(item,index){
					let param ={"page":"python","pid":item.pid,"data":item.data,"title":item.title};
					axios.post('http://'+window.location.host.replace(":8079","")+":8002/updatapage/", param,{ withCredentials:true}).then(res => {
					console.log(res.data);
					this.$set(this.flag, index, true);
				
					
					      })
				},
			deltitle(item,index){
				let param ={"page":"python","pid":item.pid,"data":item.data,"title":item.title};
				axios.post('http://'+window.location.host.replace(":8079","")+":8002/del/", param,{ withCredentials:true}).then(res => {
				console.log(res.data);
				this.steps.splice(index,1);
				 })
			},
			
			addtitle(){
					let param ={"page":"python","pid":this.maxindex,"data":this.form.text,"title":this.form.name};
					axios.post('http://'+window.location.host.replace(":8079","")+":8002/addpage/", param,{ withCredentials:true}).then(res => {
					let data = res.data
					console.log(data);
					this.steps.push(data.data);
					this.dialogFormVisible = false
					this.maxindex = this.maxindex+1;
					      })
					
				},
				getpagedata(){
						// var reg = new RegExp( "'" , "g" )
					  axios.get('http://'+window.location.host.replace(":8079","")+":8002/getpage?page=python",{ withCredentials:true}).then(res => {
						
					  // this.steps =JSON.parse(res.data).data;
					  this.steps = res.data.data;
					  let len = this.steps.length;
						
					  this.maxindex = len+1;
					  this.steph = this.maxindex*80;
						for (let i =0;i<len;i++){
							// this.steps[i].flag = true;
							this.flag.push(true);
						}
						
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
	
			      },
	    }
	


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
	.el-dialog__body{
		padding: 0px;
	}
</style>
