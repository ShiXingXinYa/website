(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{319:function(s,t,n){"use strict";n.r(t);var a=n(10),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("h3",{attrs:{id:"本篇-windows本地使用docker-nginx-mysql部署thinkphp5-本篇文章csdn地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本篇-windows本地使用docker-nginx-mysql部署thinkphp5-本篇文章csdn地址"}},[s._v("#")]),s._v(" 本篇：windows本地使用docker+nginx+mysql部署thinkphp5 "),t("a",{attrs:{href:"https://blog.csdn.net/hmx089674/article/details/136683679",target:"_blank",rel:"noopener noreferrer"}},[s._v("本篇文章CSDN地址"),t("OutboundLink")],1)])]),s._v(" "),t("p",[s._v("Docker是一个开源的容器化平台，可以将应用程序及其依赖项打包到一个可移植的容器中，并在不同的环境中运行。容器是一个独立、可移植、可复制的软件单元，其中包含应用程序、运行时环境、系统工具和库。Docker利用容器的轻量级和快速启动的特性，提供了一种更高效、更方便的软件开发和部署方式。")]),s._v(" "),t("p",[s._v("通过使用Docker，开发人员可以将应用程序及其依赖项打包到一个Docker镜像中，将镜像部署到任何支持Docker的环境中，并保证应用程序在不同的环境中具有一致的运行结果。Docker镜像可以在构建windows本地使用docker+nginx+mysql部署thinkphp5时指定所需的操作系统、库和其他依赖项，确保应用程序在运行时具有正确的环境。")]),s._v(" "),t("p",[s._v("Docker还提供了一套命令行工具和API，可以方便地管理和操作Docker容器。使用Docker，开发人员可以快速地创建、启动、停止和销毁容器，而无需关心底层操作系统的细节。")]),s._v(" "),t("p",[s._v("Docker还支持容器编排和集群管理功能，可以将多个容器组织成一个服务，并管理其生命周期和资源分配。Docker Swarm是Docker的原生集群管理工具，可以自动化地在多个主机上部署和管理容器。")]),s._v(" "),t("p",[s._v("总之，Docker是一个强大的容器化平台，通过容器的轻量级、可移植的特性，提供了一种更高效、更方便的软件开发和部署方式。它已经被广泛应用于各种场景，包括应用程序开发、测试、交付和部署。")]),s._v(" "),t("h3",{attrs:{id:"第一步-下载docker-desktop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一步-下载docker-desktop"}},[s._v("#")]),s._v(" 第一步：下载docker Desktop")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.docker.com/products/docker-desktop/",target:"_blank",rel:"noopener noreferrer"}},[s._v("docker Desktop 下载"),t("OutboundLink")],1)]),s._v(" "),t("h3",{attrs:{id:"第二步-准备所需镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第二步-准备所需镜像"}},[s._v("#")]),s._v(" 第二步：准备所需镜像")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("docker pull nginx:*\n\ndocker pull php:*-fpm\n\ndocker pull mysql:*\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("ul",[t("li",[s._v("代表各个镜像的版本信息，请自行选择，例如 docker pull php:7.4-fpm 。")])]),s._v(" "),t("p",[s._v("注：请确保每个镜像都拉取成功！！！")]),s._v(" "),t("h3",{attrs:{id:"第三步-创建网络"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第三步-创建网络"}},[s._v("#")]),s._v(" 第三步：创建网络")]),s._v(" "),t("p",[s._v("说明：创建网络以便于各个容器之间通信。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("docker create network my-network\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("my-network ：自定义bridge网络名称。")]),s._v(" "),t("h3",{attrs:{id:"第四步-启动容器并运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第四步-启动容器并运行"}},[s._v("#")]),s._v(" 第四步：启动容器并运行")]),s._v(" "),t("p",[s._v("首先运行"),t("font",{attrs:{color:"red"}},[s._v("docker run -d --name nginx-container -p 8080:80 nginx:*")]),s._v("，运行成功后使用以下命令将nginx的内容复制到本地对应目录中：")],1),s._v(" "),t("p",[s._v("1、docker cp nginx-container:/usr/share/nginx/html D:/docker/www(复制访问页指向D:/docker/www下)")]),s._v(" "),t("p",[s._v("2、docker cp nginx-container:/var/log/nginx D:/docker/nginx/logs(复制nginx日志到D:/docker/nginx/logs下）")]),s._v(" "),t("p",[s._v("3、docker cp nginx-container:/etc/nginx/conf.d D:/docker/nginx/conf(复制nginx的配置文件default.conf到D:/docker/nginx/conf下）")]),s._v(" "),t("p",[t("span",{staticStyle:{color:"#ff0000"}},[s._v("以上全部处理好了之后,删除nginx容器，在Docker Desktop中删除或使用命令")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("docker stop nginx-container &&docker rm -f nginx-container\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后依次运行以下命令：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\ndocker run -d --name  phpfpm -p 9000:9000  -v  D:/docker/www:/www --network my-network php:7.4-fpm\n\ndocker run -d --name mysql-container -p 33060:3306 -e MYSQL_PASSWORD=123456 -e TZ=Asia/Shanghai --network my-network mysql:*\n\ndocker run -d --name nginx-container -p 8080:80 -v D:/docker/nginx/logs:/var/log/nginx -v D:/docker/nginx/conf:/etc/nginx/conf.d -v D:/docker/www:/usr/share/nginx/html --network my-network nginx:*\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("注：映射的端口：前者为宿主机端口，后者为容器内端口。*表示各个容器版本号，自行替换成您下载的镜像版本号。")]),s._v(" "),t("p",[s._v("第五步：配置tp5隐藏index.php\n首先访问localhost:8080出现nginx的欢迎页则代表您已成功启动nginx容器。如果D:/docker/www中没有index.html文件。请手动添加并再次访问看效果。")]),s._v(" "),t("p",[s._v("其次将thinkphp5源码放入挂载的目录D:/docker/www中，如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"/website/bd599f2bc1c142979393977466d0a946.png",alt:"thinkphp5源码"}})]),s._v(" "),t("p",[s._v("打开D:/docker/nginx/conf/default.conf并修改内容如下：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    listen  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server_name  localhost"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    root "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("www"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("#thinkphp5对应的目录下的"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v("\n    index index"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("php index"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    #access_log  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("log"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("host"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("access"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log  main"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    # location "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    #     root   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("share"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    #     index  index"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("html index"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("htm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    # "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    #隐藏入口文件index"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("php\n    location "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("e $request_filename"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            rewrite  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("index"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("php"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("$1  last"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    #error_page  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("404")]),s._v("              "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("404")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    # redirect server error pages to the "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" page "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("50x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("html\n    #\n    error_page   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("502")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("503")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("504")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("50x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    location "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("50x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("html "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        root   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("share"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    # proxy the "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PHP")]),s._v(" scripts to Apache listening on "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n    #\n    #location "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),s._v(" \\"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("php$ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    #    proxy_pass   http"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    #"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    # pass the "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PHP")]),s._v(" scripts to FastCGI server listening on "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9000")]),s._v("\n    #\n    location "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),s._v(" \\"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("php$ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n       fastcgi_pass   phpfpm"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("#启动的"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PHP")]),s._v("容器名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("端口，本地使用localhost"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("在此例中不需要更改\n       fastcgi_index  index"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("php"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n       fastcgi_param "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SCRIPT_FILENAME")]),s._v(" $document_root$fastcgi_script_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n       fastcgi_param "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PATH_INFO")]),s._v(" $fastcgi_path_info"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n       include        fastcgi_params"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    # deny access to "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("htaccess files"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" Apache's document root\n    # concurs "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" nginx's one\n    #\n    #location "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\\"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ht "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    #    deny  all"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    #"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br")])]),t("p",[s._v("修改保存以上文件后，重启nginx容器，访问localhost:8080即可看到thinkphp5的欢迎页！\n"),t("img",{attrs:{src:"/website/1ef52db6989c434fb6f17ec348b80416.png",alt:"thinkphp5欢迎页"}})]),s._v(" "),t("p",[s._v("第六步：连接mysql数据库\n修改thinkphp5数据库配置中的hostname：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("'hostname'        => 'mysql-container:3306',//mysql容器名:内部端口\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("工具连接mysql，端口33060，账号root,密码为-e MYSQL_ROOT_PASSWORD后面设置的内容，连接成功如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"/website/315099f42e7a42d5bfa4b26fda4d44d1.png",alt:"mysql连接成功示例图"}})]),s._v(" "),t("p",[s._v("结语：\n都配置好了之后，就可以愉快的使用thinkphp5写业务了。")]),s._v(" "),t("p",[s._v("以上为我个人学习所得经验，如有疑问或觉得配置有误的地方请与我联系哦，感谢您的阅读！！")]),s._v(" "),t("p",[s._v("​")])])}),[],!1,null,null,null);t.default=e.exports}}]);