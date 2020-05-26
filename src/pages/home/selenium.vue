<template>
	<el-container>	
		<el-main>
			<div>
				<h4><p>selenium 的几种等待方式</p></h4>
				<p>隐式等待</p>
				<div class="stydiv">
					<p>设置一个等待时间，如果在这个等待时间内，网页加载完成，则执行下一步；否则一直等待时间截止，然后再执行下一步。这样也就会有个弊端，程序会一直等待整个页面加载完成，直到超时，但有时候我需要的那个元素早就加载完成了，只是页面上有个别其他元素加载特别慢，我仍要等待页面全部加载完成才能执行下一步。</p>
					<p>driver.implicitly_wait(30)</p>
				</div>
				<p>显示等待</p>
				<div class="stydiv">
					<p>配合该类的until()和until_not()方法，就能够根据判断条件而进行灵活地等待了。它主要的意思就是：程序每隔xx检查一次，如果条件成立了，则执行下一步，否则继续等待，直到超过设置的最长时间，然后抛出TimeoutException</p>
					<p>from selenium.webdriver.support.wait import WebDriverWait</p>
					<p>WebDriverWait(driver,30,0.2).until(lambda x:x.find_element_by_css_selector(".tt")).text</p>
				
				</div>
				
				<p>WebDriverWait类</p>
				<div class="stydiv">
					<p>until(EC.presence_of_element_located(locator)) </p>
					<p>until()方法：直到条件成立返回为真，等待结束。如果超时，抛出TimeoutException，将message传入异常。</p>
					<p>until_not()方法：直到条件不成立返回为真，是当某元素消失或什么条件不成立则继续执行，等待结束。如果超时，抛出TimeoutException，将message传入异常</p>
					<p>presence_of_element_located:顾名思义，判断页面上是否出现了对应元素，这里比较坑的是，元素出现了，但样式没加载完全，导致无法被点击</p>
					<p>element_to_be_clickable : 等待样式可以被点击，实际使用中，样式已经加载完成很久了，但还是会出现等待很久才操作的情况</p>
				<p>以下四个条件判断元素是否被选中，<br />

第一个条件传入WebElement对象， <br />

第二个传入locator元组<br />

第三个传入WebElement对象以及状态，相等返回True，否则返回False<br />

第四个传入locator以及状态，相等返回True，否则返回False<br />

element_to_be_selected<br />

element_located_to_be_selected<br />

element_selection_state_to_be<br />

element_located_selection_state_to_be<br />

 

下面一个条件判断一个元素是否仍在DOM中，传入WebElement对象，可以判断页面是否刷新<br />

staleness_of<br />

 

4.WebElement自带方法<br />

is_displayed() ：判断元素是否展示出来<br />

is_enabled()：判断元素是否可操作<br />

is_selected()：判断元素是否被选中</p>
				</div>
				
				<h4><p>python+selenium浏览器参数配置</p></h4>
				<p>Chrome Options常用的行为一般有以下几种：</p>
				<div class="stydiv">
					<p>禁止图片和视频的加载：提升网页加载速度。<br />
添加代理：用于翻墙访问某些页面，或者应对IP访问频率限制的反爬技术。<br />
使用移动头：访问移动端的站点，一般这种站点的反爬技术比较薄弱。<br />
添加扩展：像正常使用浏览器一样的功能。<br />
设置编码：应对中文站，防止乱码。<br />
阻止JavaScript执行
</p>
					</div>
				
				<p>设置无账号密码的代理</p>
								<div class="stydiv" >
									<p>
chromeOptions = webdriver.ChromeOptions()<br />
chromeOptions.add_argument('--proxy-server=http://ip:port')  <br />
driver = webdriver.Chrome(chrome_options=chromeOptions)</p>
									
								</div>
								<p>chromeOptions参数</p>
				<div class="stydiv" >
						<p>
								–user-data-dir=”[PATH]” 指定用户文件夹User Data路径，可以把书签这样的用户数据保存在系统分区以外的分区。<br />
								–disk-cache-dir=”[PATH]“ 指定缓存Cache路径<br />
								–disk-cache-size= 指定Cache大小，单位Byte<br />
								–first run 重置到初始状态，第一次运行<br />
								–incognito 隐身模式启动<br />
								–disable-javascript 禁用Javascript<br />
								–omnibox-popup-count=”num” 将地址栏弹出的提示菜单数量改为num个。我都改为15个了。<br />
								–user-agent=”xxxxxxxx” 修改HTTP请求头部的Agent字符串，可以通过about:version页面查看修改效果<br />
								–disable-plugins 禁止加载所有插件，可以增加速度。可以通过about:plugins页面查看效果<br />
								–disable-javascript 禁用JavaScript，如果觉得速度慢在加上这个<br />
								–disable-java 禁用java<br />
								–start-maximized 启动就最大化<br />
								–no-sandbox 取消沙盒模式<br />
								–single-process 单进程运行<br />
								–process-per-tab 每个标签使用单独进程<br />
								–process-per-site 每个站点使用单独进程<br />
								–in-process-plugins 插件不启用单独进程<br />
								–disable-popup-blocking 禁用弹出拦截<br />
								–disable-plugins 禁用插件<br />
								–disable-images 禁用图像<br />
								–incognito 启动进入隐身模式<br />
								–enable-udd-profiles 启用账户切换菜单<br />
								–proxy-pac-url 使用pac代理 [via 1/2]<br />
								–lang=zh-CN 设置语言为简体中文<br />
								–disk-cache-dir 自定义缓存目录<br />
								–disk-cache-size 自定义缓存最大值（单位byte）<br />
								–media-cache-size 自定义多媒体缓存最大值（单位byte）<br />
								–bookmark-menu 在工具 栏增加一个书签按钮<br />
								–enable-sync 启用书签同步<br />
								–single-process 单进程运行Google Chrome<br />
								–start-maximized 启动Google Chrome就最大化<br />
								–disable-java 禁止Java<br />
								–no-sandbox 非沙盒模式运行
								</p>
																	
						</div>
																
		<p> firefoxOptions</p>
						<div class="stydiv">
							<p>通过浏览器设置找到配置文件目录</p>
							<p># 配置文件路径<br />
profile_path = r'C:\Users\Administrator\AppData\Roaming\Mozilla\Firefox\Profiles\hjs10ncm.default'<br />
# 加载配置数据<br />
profile = webdriver.FirefoxProfile(profile_path)<br />
# 启动浏览器配置<br />
driver = webdriver.Firefox(firefox_profile=profile, executable_path=r'D:\drivers\geckodriver.exe')</p>

<p>     self._binary = None <br />
        self._preferences = {}<br />
        self._profile = None<br />
        self._proxy = None<br />
        self._caps = DesiredCapabilities.FIREFOX.copy()<br />
        self._arguments = []<br />
        self.log = Log()</p>
						
				
			</div>
			</div>
		</el-main>
	</el-container>
</template>

<script>
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
</style>
