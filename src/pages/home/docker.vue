<template>
	<el-container>


	    <el-main>

  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="data"
      label="docker容器安装"
      width="1000">
    </el-table-column>
   
  </el-table>

  <el-table
    :data="update"
    stripe
    style="width: 100%;margin-top: 1%;">
    <el-table-column
      prop="data"
      label="docker容器更新"
      width="1000">
    </el-table-column>
   
  </el-table>


	      <!-- <el-table :data="tableData">
	        <el-table-column prop="date" label="日期" width="140">
	        </el-table-column>
	        <el-table-column prop="name" label="姓名" width="120">
	        </el-table-column>
	        <el-table-column prop="address" label="地址">
	        </el-table-column>
	      </el-table> -->
	    </el-main>
	  </el-container>
	
</template>

<script>
	export default {
    data() {
      return {
	     tableData: [{
	        data: '1. docker pull docker.io/mysql:5.7 # 拉取mysql5.7镜像',
	        
	      },
	      {
	      	data: '2. docker run --name mysql --net=host -d --restart always -v /var/lib/mysql:/var/lib/mysql -e  MYSQL_ROOT_PASSWORD=lcc123456 docker.io/mysql:5.7 --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci  # 运行mysql容器',
	      },
	      {
	      	data:'3.修改settings.py DATABASES 字典相关配置，NAME, USER, PASSWORD, HOST'
	      },
	      {
	      	data:'4.docker build -t [name]:latest .    # 构建docker镜像'
	      },
	       {
	      	data:'5. docker run -d --name [name] --net=host --restart always [name]:latest  # 后台运行docker容器,默认后台端口'
	      },
		  {
			data:'启动新服务发现报错：(iptables failed: iptables --wait -t nat -A DOCKER -p tcp -d 0/0 --dport 8081 -j DNAT --to-destination 172.17.0.2:8080。。查询了原因，主要是因为docker记录了以往的端口，只需要重启下就好'
		  }],

	     update:[{
	     	data:'到工作目录 /dist'
	     },{
	     	data:'cp ./ CONTAINER ID:/usr/share/nginx/html/'
	     },{
	     	data:'docker restart CONTAINER ID'
	     },{
	     	data:'docker commit bolgweb bolgweb:latest ',
	     },{
			 data:'修改自带横向滑动位置document.querySelector("copy Selector选择器").scrollLeft=1000 document.querySelector(".el-table__body").scrollWidth'
		 },]

	 
	      }
	    
	  }
	}
</script>

<style>
</style>
