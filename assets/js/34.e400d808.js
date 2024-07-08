(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{321:function(s,n,a){"use strict";a.r(n);var e=a(10),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),n("h3",{attrs:{id:"本篇-windows本地使用docker-compose构建nginx-php访问thinkphp5-本篇文章csdn地址"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#本篇-windows本地使用docker-compose构建nginx-php访问thinkphp5-本篇文章csdn地址"}},[s._v("#")]),s._v(" 本篇：windows本地使用docker-compose构建nginx+php访问thinkphp5   "),n("a",{attrs:{href:"https://blog.csdn.net/hmx089674/article/details/136968956",target:"_blank",rel:"noopener noreferrer"}},[s._v("本篇文章CSDN地址"),n("OutboundLink")],1)])]),s._v(" "),n("p",[s._v("前言：继上一篇windows本地使用docker+nginx+mysql部署thinkphp5后，本期使用docker-compose搭建环境访问thinkphp5程序。")]),s._v(" "),n("h3",{attrs:{id:"第一步-准备工作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第一步-准备工作"}},[s._v("#")]),s._v(" 第一步：准备工作")]),s._v(" "),n("p",[s._v("检查本地是否安装docker-compose（cmd终端输入docker-compose -v 检测，安装Docker Desktop默认是有的）。\n确保您已了解docker-compose基本语法。")]),s._v(" "),n("h3",{attrs:{id:"第二步-创建docker-compose-yml文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第二步-创建docker-compose-yml文件"}},[s._v("#")]),s._v(" 第二步：创建docker-compose.yml文件")]),s._v(" "),n("p",[s._v("如您不了解docker-compose语法也没关系，为了避免废话。直接贴docker-compose.yml内容")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#docker-compose 版本\nversion: '3'\n\n#创建服务，可理解为创建容器。\nservices:\n  #拉取nginx镜像\n  nginx:\n    #镜像版本\n    image: nginx:latest\n    #暴露的端口\n    ports:\n      - \"8001:80\"\n      #挂载宿主机文件(宿主机文件：容器内文件)\n    volumes:\n      - ./default.conf:/etc/nginx/conf.d/default.conf\n      - ./html:/var/www/html\n      #使用depends_on 指定服务之间的依赖关系\n    depends_on:\n      - php\n    #服务所依赖网络  \n    networks:\n     - app-network\n  #拉取php-fpm镜像\n  php:\n    image: php:7.4-fpm\n    volumes:\n      - ./html:/var/www/html\n    networks:\n    - app-network\n#定义网络    \nnetworks:\n   #网络名称\n   app-network:\n   #网络驱动类型\n    driver: bridge\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br")])]),n("h3",{attrs:{id:"第三步-启动docker-compose构建服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第三步-启动docker-compose构建服务"}},[s._v("#")]),s._v(" 第三步：启动docker-compose构建服务")]),s._v(" "),n("p",[s._v("1、nginx配置文件default.conf内容如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("server {\n    listen 80;\n    index index.php;\n    server_name localhost;\n    error_log  /var/log/nginx/error.log;\n    access_log /var/log/nginx/access.log;\n    root /var/www/html/app/public;#指向容器内部thinkphp程序的public目录\n\n    # location / {\n    #     try_files $uri $uri/ /index.php?$query_string;\n    # }\n    #隐藏入口文件index.php\n    location / {\n        if (!-e $request_filename){\n            rewrite  ^(.*)$  /index.php?s=$1  last;   break;\n        }\n    }\n\n    location ~ \\.php$ {\n        fastcgi_pass php:9000;#容器名php,在Docker容器中，如果你使用PHP-FPM镜像，默认情况下PHP-FPM会监听9000端口\n        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;\n        fastcgi_param PATH_INFO $fastcgi_path_info;\n        include fastcgi_params;\n    }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("p",[s._v("2、本地文件目录如下：")]),s._v(" "),n("p",[n("img",{attrs:{src:"/website/43dd71ad0c744d92b83abe4b77a31d1c.png",alt:"目录结构"}}),s._v(" "),n("img",{attrs:{src:"/website/0fef6f3714ac4f279f7bc17cb840dc34.png",alt:"目录结构"}})]),s._v(" "),n("p",[s._v("3、启动构建：启动docker-compose.yml\n在docker-compose.yml文件所在目录启动cmd终端输入docker-compose up;")]),s._v(" "),n("p",[s._v("启动成功结果如下：-d表示后台运行，不输出任何结果到终端。\n"),n("img",{attrs:{src:"/website/d1b35151c2d44cccbceded07538ebe9b.png",alt:"目录结构"}})]),s._v(" "),n("p",[s._v("查看Docker Desktop，结果如下就成功搭建了。\n"),n("img",{attrs:{src:"/website/851676898b1d4304ab89a190e71afe88.png",alt:"docker desktop"}})]),s._v(" "),n("p",[s._v("访问localhost:8001查看效果：\n"),n("img",{attrs:{src:"/website/b403c69d99e843f797f1ee12a81a9e29.png",alt:"docker desktop"}})]),s._v(" "),n("p",[s._v("是不是很熟悉 ，哈哈哈！")]),s._v(" "),n("p",[s._v("结语：\n使用docker-compose配置很好玩，上述都配置好了之后，就可以愉快的使用thinkphp5写业务了。")]),s._v(" "),n("p",[s._v("​")])])}),[],!1,null,null,null);n.default=t.exports}}]);