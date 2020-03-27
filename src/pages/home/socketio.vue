<template>
	
	    <el-main>
			<div>
				<p>项目组使用了websocket中的socketio，与原生的有不同，研究了几天搞定了</p>
				<p>主要问题是api = '/socket.io/?EIO=3&transport=websocket&sid=' + sid</p>
				<p>其中trantsport，API可以配置，EIO没发现协议入口，sid是自动生成，没搞明白这个接口应该怎么配置</p>
				<p>最后发现API写成api = '/socket.io/?EIO=3&transport=websocket'就可以了，多写了sid，或者少配了eio都不行</p>
				<p>使用函数 create_connection(url,header=header_list,origin="http://oa.kingnet.com",)就可以了，
</p>
<p>库选择from websocket import create_connection, WebSocket</p>
			</div>
		</el-main>
</template>

<script>
</script>

<style>
</style>
