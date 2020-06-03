<template>
	
	<div id="home">
		<el-container>
			<el-header style="text-align: left; font-size: 20px;background: #409EFF;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04); height: 50px;">
				<div style="padding-top: 10px;"><span style="font-weight: bold;  color: floralwhite;">随手笔记</span>
</div>
				
			</el-header>
	</el-container>
	
			<el-container style='height:50rem;'>

				<el-aside  style="background-color: rgb(238, 241, 246);  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);width: 11%;">
					<el-menu  class="el-menu-vertical-demo"  @open="handleOpen"
      @close="handleClose" default-active='menu1'  :default-active="this.$route.path" router>
						<el-submenu index="1">

							<template slot="title">
								<i class="el-icon-collection"></i>
								<span>语法笔记</span>
								</template>
						
								<!-- <template slot="title">分组一</template> -->
									 <el-menu-item-group>

								<el-menu-item index="/docker" style="padding-left: 20%; ">
									<i class="el-icon-files"></i>
									<span>docker</span>
									</el-menu-item>
							
							<el-menu-item index="/menu2" style="padding-left: 20%;">
								<i class='el-icon-arrow-down'></i>
								<span>vue</span>
								</el-menu-item>
							<el-menu-item index="/menu3" style="padding-left: 20%;">
								<i class="el-icon-data-analysis"></i>
								<span>构造数据</span>
								</el-menu-item>
<el-menu-item index="/eleui" style="padding-left: 20%;">
	<i class="el-icon-eleme"></i>
	<span>ele-ui</span>
	</el-menu-item>
<el-menu-item index="/socketio" style="padding-left: 20%;">
	<i class="el-icon-paperclip"></i>
	<span>socketio</span>
	</el-menu-item>
	<el-menu-item index="/selenium" style="padding-left: 20%;">
		<i class="el-icon-orange"></i>
		<span>selenium</span>
		</el-menu-item>
	
	</el-menu-item-group>
						</el-submenu>
					
												
						<el-submenu index="2">
							<template slot="title">
								<i class="el-icon-s-tools"></i>
								<span >一些工具</span>
								</template>
							<el-menu-item index="/airtest" style="padding-left: 23%;">
								<i class="airtest"></i>
								<span style="padding-left: 10px;">airtest</span>
							</el-menu-item>
							<el-menu-item index="/jenkins" style="padding-left: 23%;">
								<i class="jenkins"></i>
								<span style="padding-left: 10px;">jenkins</span>
							</el-menu-item>
							<el-menu-item index="/sqlcode" style="padding-left: 20%;">
								<i class="el-icon-collection-tag"></i>
								<span>sqlcode</span>
							</el-menu-item>
							<el-menu-item index="/mysql" style="padding-left: 20%;">
								<i class="el-icon-collection-tag"></i>
								<span>mysql</span>
							</el-menu-item>
							
							<el-menu-item index="/apitest" style="padding-left: 20%;">
								<i class="el-icon-picture-outline-round"></i>
								<span>apitest</span>
							</el-menu-item>
							
			<el-menu-item style="padding-left: 20%; "> 
						<i class="el-icon-files"></i>
									<span>grafana</span>
			</el-menu-item>
						
							<el-menu-item  style="padding-left: 20%;">
								<i class='el-icon-arrow-down'></i>
								<span>elk</span>
							</el-menu-item>
							<el-menu-item  style="padding-left: 20%;">
								<i class="el-icon-data-analysis"></i>
								<span>jacoco</span>
							</el-menu-item >
					
						</el-submenu>
				</el-menu>
			</el-aside>
			<router-view >
			
			</router-view>
		</el-container>





		<span style="position:absolute;bottom:0;width:100%;height:50px;font-size:12px;color:#9bb5c9;    text-align:center;">Copyright@2020
			版权所有 wuvvj.com,All Rights Reserved
			<a href="http://www.beian.miit.gov.cn/" target="_blank">沪ICP备19004266号-1 </a></span>


	</div>
</template>

<style>
	body{
		padding: 0rem;
		margin: 0rem;
		height: 100%;
	}
		.airtest{
			display: inline-block;
			width: 1.125rem;
			height: 1.125rem;
			background-image: url(../../assets/36x36.svg);
			background-position: center center;
		}
		.jenkins{
			display: inline-block;
			width: 1.125rem;
			height: 1.125rem;
			background-image: url(../../assets/jenkins.png);
			background-position: center center;
			}
	</style>

<script>
	export default {
		data() {
			return {
				current: 1,
				unactiveColor: '#409EFF',
				view: '',
			}
		},
		 methods: {
		      handleOpen(key, keyPath) {
		        console.log(key, keyPath);
		      },
		      handleClose(key, keyPath) {
		        console.log(key, keyPath);
		      }
		    }
	}
</script>
