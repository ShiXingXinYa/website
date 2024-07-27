(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{312:function(s,e,r){"use strict";r.r(e);var a=r(10),t=Object(a.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),e("h3",{attrs:{id:"本篇-windows10本地注册redis多服务构建redis集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本篇-windows10本地注册redis多服务构建redis集群"}},[s._v("#")]),s._v(" 本篇：windows10本地注册Redis多服务构建Redis集群")])]),s._v(" "),e("h2",{attrs:{id:"目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[s._v("#")]),s._v(" 目录")]),s._v(" "),e("ol",[e("li",[e("p",[e("a",{attrs:{href:"#%E5%AE%89%E8%A3%85redis/Ruby"}},[s._v("安装Redis/Ruby")])])]),s._v(" "),e("li",[e("p",[e("a",{attrs:{href:"#redis%E4%B8%BB%E4%BB%8E%E5%A4%8D%E5%88%B6"}},[s._v("Redis主从复制")])]),s._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"#%E5%87%86%E5%A4%87%E5%AE%9E%E4%BE%8B%E5%92%8C%E9%85%8D%E7%BD%AE"}},[s._v("准备实例和配置")])]),s._v(" "),e("li",[e("a",{attrs:{href:"#%E5%90%AF%E5%8A%A8%E5%8F%8A%E6%B5%8B%E8%AF%95"}},[s._v("启动及测试")])])])]),s._v(" "),e("li",[e("p",[e("a",{attrs:{href:"#%E6%B3%A8%E5%86%8Credis%E6%9C%8D%E5%8A%A1"}},[s._v("注册redis服务")])])]),s._v(" "),e("li",[e("p",[e("a",{attrs:{href:"#%E6%90%AD%E5%BB%BA%E5%93%A8%E5%85%B5%E9%9B%86%E7%BE%A4"}},[s._v("搭建哨兵集群")])]),s._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"#%E5%87%86%E5%A4%87%E5%AE%9E%E4%BE%8B%E5%92%8C%E9%85%8D%E7%BD%AE"}},[s._v("准备哨兵实例和配置")])]),s._v(" "),e("li",[e("a",{attrs:{href:"#%E5%93%A8%E5%85%B5%E5%90%AF%E5%8A%A8%E5%8F%8A%E6%B5%8B%E8%AF%95"}},[s._v("哨兵启动及测试")])])])]),s._v(" "),e("li",[e("p",[e("a",{attrs:{href:"#cluster%E9%9B%86%E7%BE%A4"}},[s._v("Cluster集群")])]),s._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"#%E5%87%86%E5%A4%87cluster%E5%AE%9E%E4%BE%8B%E5%92%8C%E9%85%8D%E7%BD%AE"}},[s._v("准备Cluster实例和配置")])]),s._v(" "),e("li",[e("a",{attrs:{href:"#cluster%E9%9B%86%E7%BE%A4%E5%90%AF%E5%8A%A8%E5%8F%8A%E6%B5%8B%E8%AF%95"}},[s._v("Cluster启动及测试")])])])]),s._v(" "),e("li",[e("p",[e("a",{attrs:{href:"#%E6%90%AD%E5%BB%BA%E8%BF%87%E7%A8%8B%E4%B8%AD%E9%81%87%E5%88%B0%E7%9A%84%E5%9D%91"}},[s._v("搭建过程中遇到的坑")])])])]),s._v(" "),e("h2",{attrs:{id:"安装redis-ruby"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装redis-ruby"}},[s._v("#")]),s._v(" 安装redis/Ruby")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("为什么要安装Ruby？")]),s._v(" "),e("p",[s._v("Redis有一个称为Redis Cluster的功能，它允许将多个Redis节点组合成一个分布式系统。Ruby在这里的角色主要是通过Redis客户端库来与Redis集群进行通信和操作数据。")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://rubyinstaller.org/downloads/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Ruby下载地址"),e("OutboundLink")],1)])]),s._v(" "),e("li",[e("p",[s._v("安装Redis：windows下官方提供了3.0版本，这里我们使用【tporadowski】的5.0版本")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/MicrosoftArchive/redis/releases?page=1",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方Redis下载地址"),e("OutboundLink")],1)]),s._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/tporadowski/redis/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("Redis for Windows 5.0.14.1"),e("OutboundLink")],1)])])]),s._v(" "),e("p",[s._v("redis文件结构：")]),s._v(" "),e("p",[e("img",{attrs:{src:"/website/redis/1720497691777.jpg",alt:"redis结构"}})]),s._v(" "),e("p",[e("font",{attrs:{color:"red"}},[s._v("注：redis 3.0版本及以上才支持集群")])],1),s._v(" "),e("h2",{attrs:{id:"redis主从复制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis主从复制"}},[s._v("#")]),s._v(" redis主从复制")]),s._v(" "),e("h3",{attrs:{id:"准备实例和配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备实例和配置"}},[s._v("#")]),s._v(" 准备实例和配置")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("主节点配置文件：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('#主节点配置文件内容\n# 设置Redis端口号，默认是6379\nport 6000 #端口可自定义\nbind 127.0.0.1\ndaemonize yes\n#日志记录\nlogfile "./redis-master-slave/redis-master-6000.log"\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("从节点配置文件：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('port 6001 #端口可自定义\nbind 127.0.0.1\ndaemonize yes\nreplica-read-only yes # 从节点是否只读，yes表示只读，no表示可读写\n# 开启主从复制\nslaveof 127.0.0.1 6000\n#日志记录\nlogfile "./redis-master-slave/redis-slave-6001.log"\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h3",{attrs:{id:"创建多个从节点可复制上述从节点配置内容并更改不同的端口号。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建多个从节点可复制上述从节点配置内容并更改不同的端口号。"}},[s._v("#")]),s._v(" 创建多个从节点可复制上述从节点配置内容并更改不同的端口号。")])])]),s._v(" "),e("h3",{attrs:{id:"启动及测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动及测试"}},[s._v("#")]),s._v(" 启动及测试")]),s._v(" "),e("p",[s._v("启动命令：redis-server.exe 配置文件地址 --loglevel 日志级别")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("#启动主节点命令\nredis-server.exe ./redis-master-slave/redis-master-6000.conf --loglevel verbose\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("#启动从节点命令\nredis-server.exe ./redis-master-slave/redis-master-6000.conf --loglevel verbose\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("文件目录：")]),s._v(" "),e("p",[e("img",{attrs:{src:"/website/redis/1720497424016.jpg",alt:"redis主从文件目录"}})]),s._v(" "),e("p",[s._v("在目录Redis-x64-5.0.14.1下进入cmd执行上述命令，内容如下：")]),s._v(" "),e("p",[e("img",{attrs:{src:"/website/redis/1720495935976.jpg",alt:"redis主从启动"}})]),s._v(" "),e("p",[e("img",{attrs:{src:"/website/redis/1720496115196.jpg",alt:"redis主从启动"}})]),s._v(" "),e("p",[s._v("至此主从复制也就配置成功了。")]),s._v(" "),e("h2",{attrs:{id:"注册redis服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注册redis服务"}},[s._v("#")]),s._v(" 注册redis服务")]),s._v(" "),e("p",[s._v("为了方便，注册redis服务。")]),s._v(" "),e("p",[s._v("注册命令：redis-server.exe --service-install  配置文件地址 --service-name 服务名称 --loglevel 日志级别")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("#注册主节点6000服务\nredis-server.exe --service-install ./redis-master-slave/redis-master-6000.conf --service-name redis-master-6000 --loglevel verbose\n\n#注册从节点6001服务\nredis-server.exe --service-install ./redis-master-slave/redis-slave-6001.conf --service-name redis-master-6001 --loglevel verbose\n\n#注册从节点6002服务\nredis-server.exe --service-install ./redis-master-slave/redis-slave-6002.conf --service-name redis-master-6002 --loglevel verbose\n\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v("注册成功，打开windows服务管理，查看redis服务,可手动启动/停止服务")]),s._v(" "),e("p",[e("img",{attrs:{src:"/website/redis/1720507725365.jpg",alt:"'redis服务注册'"}})]),s._v(" "),e("p",[s._v("cmd打开执行redis-cli.exe -h 127.0.0.1 -p 6000即可启动redis主节点服务（注：需要将redis安装目录放入系统变量）")]),s._v(" "),e("p",[e("img",{attrs:{src:"/website/redis/1720507945436.jpg",alt:"'redis服务'"}})]),s._v(" "),e("h2",{attrs:{id:"搭建哨兵集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#搭建哨兵集群"}},[s._v("#")]),s._v(" 搭建哨兵集群")]),s._v(" "),e("p",[s._v("哨兵集群的搭建和主从复制类似，但是哨兵集群需要新增配置文件。")]),s._v(" "),e("h3",{attrs:{id:"准备实例和配置-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备实例和配置-2"}},[s._v("#")]),s._v(" 准备实例和配置")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("哨兵1配置文件:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 哨兵sentinel实例运行的端口\nport 26378\n# 本地ip\nbind 127.0.0.1\n#已守护进程运行\ndaemonize yes\n#防止通过Sentinel动态地更改脚本\nsentinel deny-scripts-reconfig yes\n# 哨兵监听的主服务器 后面的2表示主机挂掉以后进行投票，只需要2票就可以从机变主机\nsentinel monitor mymaster 127.0.0.1 6000 2\n# 设置未得到主机响应时间，此处代表5秒未响应视为宕机\nsentinel down-after-milliseconds mymaster 5000\n# 设置等待主机活动时间，此处代表15秒主机未活动，则重新选举主机\nsentinel failover-timeout mymaster 15000\n# 设置重新选举主机后，同一时间同步数据的从机数量，此处代表重新选举主机后，每次2台从机同步主机数据，直到所有从机同步结束\nsentinel config-epoch mymaster 2\n# 执行故障转移时， 最多有2个从服务器同时对新的主服务器进行同步\nsentinel leader-epoch mymaster 2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("哨兵2配置文件:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 哨兵sentinel实例运行的端口\nport 26379\n# 本地ip\nbind 127.0.0.1\n#已守护进程运行\ndaemonize yes\n#防止通过Sentinel动态地更改脚本\nsentinel deny-scripts-reconfig yes\n# 哨兵监听的主服务器 后面的2表示主机挂掉以后进行投票，只需要2票就可以从机变主机\nsentinel monitor mymaster 127.0.0.1 6001 2\n# 其他内容复制哨兵1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("哨兵3配置文件:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 哨兵sentinel实例运行的端口\nport 26380\n# 本地ip\nbind 127.0.0.1\n#已守护进程运行\ndaemonize yes\n#防止通过Sentinel动态地更改脚本\nsentinel deny-scripts-reconfig yes\n# 哨兵监听的主服务器 后面的2表示主机挂掉以后进行投票，只需要2票就可以从机变主机\nsentinel monitor mymaster 127.0.0.1 6002 2\n# 其他内容复制哨兵1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])])])]),s._v(" "),e("h3",{attrs:{id:"哨兵启动及测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#哨兵启动及测试"}},[s._v("#")]),s._v(" 哨兵启动及测试")]),s._v(" "),e("p",[s._v("启动命令：redis-server.exe 哨兵配置文件路径 --sentinel")]),s._v(" "),e("p",[s._v("启动成功如下：")]),s._v(" "),e("p",[e("img",{attrs:{src:"/website/redis/1720508756137.jpg",alt:"'redis哨兵测试图'"}})]),s._v(" "),e("p",[s._v("当然，你也可以将哨兵注册成服务,注册命令： redis-server.exe --service-install 哨兵配置文件路径 --service-name 服务名称 --sentinel")]),s._v(" "),e("h2",{attrs:{id:"cluster集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cluster集群"}},[s._v("#")]),s._v(" cluster集群")]),s._v(" "),e("p",[s._v("Cluster配置文件目录：\n"),e("img",{attrs:{src:"/website/redis/1720511641368.jpg",alt:"'redis Cluster配置文件'"}})]),s._v(" "),e("h3",{attrs:{id:"准备cluster实例和配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备cluster实例和配置"}},[s._v("#")]),s._v(" 准备cluster实例和配置")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("redis-7001.conf配置文件:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("#实例运行的端口\nport 7001\ncluster-enabled yes\ncluster-config-file nodes-7001.conf\ncluster-node-timeout 5000\nappendonly yes\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("#注册cluster节点7001服务\nredis-server.exe --service-install ./redis-cluster/redis-7001.conf --service-name redis-cluster-7001 --loglevel verbose\n\n#注册cluster节点7002服务\nredis-server.exe --service-install ./redis-cluster/redis-7002.conf --service-name redis-cluster-7002 --loglevel verbose\n\n#注册其他cluster节点参考上述7001和7002\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])])])]),s._v(" "),e("p",[s._v("注册好redis后查看服务，内容如下：")]),s._v(" "),e("p",[e("img",{attrs:{src:"/website/redis/1720514742099.jpg",alt:"'redis-cluster服务'"}})]),s._v(" "),e("ul",[e("li",[s._v("redis服务注册后，需手动启动服务")])]),s._v(" "),e("h3",{attrs:{id:"cluster集群启动及测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cluster集群启动及测试"}},[s._v("#")]),s._v(" cluster集群启动及测试")]),s._v(" "),e("p",[s._v("启动服务：")]),s._v(" "),e("p",[e("img",{attrs:{src:"/website/redis/1720514742099.jpg",alt:"'redis-cluster服务'"}})]),s._v(" "),e("p",[s._v("待完善中...")]),s._v(" "),e("h2",{attrs:{id:"搭建过程中遇到的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#搭建过程中遇到的问题"}},[s._v("#")]),s._v(" 搭建过程中遇到的问题")]),s._v(" "),e("ul",[e("li",[s._v("使用redis3.0版本在启动主从复制时，遇到报错：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Invalid argument during startup: unknown conf file parameter : replicaof\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("原因：Redis 版本过旧，不支持replicaof参数。")])])}),[],!1,null,null,null);e.default=t.exports}}]);