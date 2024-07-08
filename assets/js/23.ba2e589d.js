(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{311:function(s,e,n){"use strict";n.r(e);var t=n(10),a=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),e("h3",{attrs:{id:"this-article-building-nginx-php-access-thinkphp5-using-docker-compose-locally-on-windows"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#this-article-building-nginx-php-access-thinkphp5-using-docker-compose-locally-on-windows"}},[s._v("#")]),s._v(" This article: Building nginx+PHP Access Thinkphp5 Using Docker Compose Locally on Windows")])]),s._v(" "),e("p",[s._v("Preface: Following the previous article on deploying thinkphp5 locally on Windows using Docker+nginx+MySQL, this issue uses Docker Compose to build an environment to access the thinkphp5 program.")]),s._v(" "),e("h3",{attrs:{id:"step-1-preparation-work"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-1-preparation-work"}},[s._v("#")]),s._v(" Step 1: Preparation work")]),s._v(" "),e("p",[s._v("Check if Docker Compose is installed locally (cmd terminal input Docker Compose - v detection, Docker Desktop installation is default).\nMake sure you understand the basic Docker Compose syntax.")]),s._v(" "),e("h3",{attrs:{id:"step-2-create-the-docker-compose-yml-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-2-create-the-docker-compose-yml-file"}},[s._v("#")]),s._v(" Step 2: Create the Docker Compose.yml file")]),s._v(" "),e("p",[s._v("It's okay if you don't understand the Docker Compose syntax, to avoid unnecessary nonsense. Directly post Docker Compose.yml content")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("#docker-compose VERSION\nversion: '3'\n\n# Creating a service can be understood as creating a container.\nservices:\n  # Pulling nginx images\n  nginx:\n    # IMAGE version\n    image: nginx:latest\n    # EXPORT port 80\n    ports:\n      - \"8001:80\"\n      #  Mount host files (host files: container files)\n    volumes:\n      - ./default.conf:/etc/nginx/conf.d/default.conf\n      - ./html:/var/www/html\n      #  Use dependencies on to specify the dependency relationships between services\n    depends_on:\n      - php\n    # The network on which the service depends  \n    networks:\n     - app-network\n  # Pulling a PHP-FPM image\n  php:\n    image: php:7.4-fpm\n    volumes:\n      - ./html:/var/www/html\n    networks:\n    - app-network\n# Define network    \nnetworks:\n   # NETWORK NAME\n   app-network:\n   # Network driver type\n    driver: bridge\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br")])]),e("h3",{attrs:{id:"step-3-start-docker-compose-to-build-the-service"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-3-start-docker-compose-to-build-the-service"}},[s._v("#")]),s._v(" Step 3: Start Docker Compose to build the service")]),s._v(" "),e("ol",[e("li",[s._v("The default. conf content of the nginx configuration file is as follows:")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("server {\n    listen 80;\n    index index.php;\n    server_name localhost;\n    error_log  /var/log/nginx/error.log;\n    access_log /var/log/nginx/access.log;\n    root /var/www/html/app/public;  # The public directory pointing to the thinkphp program inside the container\n\n    # location / {\n    #     try_files $uri $uri/ /index.php?$query_string;\n    # }\n    # Hide entrance file index.php\n    location / {\n        if (!-e $request_filename){\n            rewrite  ^(.*)$  /index.php?s=$1  last;   break;\n        }\n    }\n\n    location ~ \\.php$ {\n        fastcgi_pass php:9000; # The PHP container name and port to be started, using localhost: 9000 locally, do not need to be changed in this example\n        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;\n        fastcgi_param PATH_INFO $fastcgi_path_info;\n        include fastcgi_params;\n    }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("The local file directory is as follows:")])]),s._v(" "),e("p",[e("img",{attrs:{src:"/website/43dd71ad0c744d92b83abe4b77a31d1c.png",alt:"目录结构"}}),s._v(" "),e("img",{attrs:{src:"/website/0fef6f3714ac4f279f7bc17cb840dc34.png",alt:"目录结构"}})]),s._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[s._v("Start Build: Start Docker Compose.yml\nStart the cmd terminal in the directory where the Docker Compose. yml file is located and enter Docker Compose up;")])]),s._v(" "),e("p",[s._v("The successful startup result is as follows: - d indicates running in the background without outputting any results to the terminal.\n"),e("img",{attrs:{src:"/website/d1b35151c2d44cccbceded07538ebe9b.png",alt:"目录结构"}})]),s._v(" "),e("p",[s._v("Upon checking the Docker Desktop, the result is as follows: it has been successfully built.\n"),e("img",{attrs:{src:"/website/851676898b1d4304ab89a190e71afe88.png",alt:"docker desktop"}})]),s._v(" "),e("p",[s._v("Visit localhost: 8001 to view the effect:\n"),e("img",{attrs:{src:"/website/b403c69d99e843f797f1ee12a81a9e29.png",alt:"docker desktop"}})]),s._v(" "),e("p",[s._v("Are you very familiar with it, hahaha!")]),s._v(" "),e("p",[s._v("Conclusion:\nIt's fun to configure using Docker Compose. Once all the above is configured, you can happily use Thinkph5 to write business.")]),s._v(" "),e("p",[s._v("​")])])}),[],!1,null,null,null);e.default=a.exports}}]);