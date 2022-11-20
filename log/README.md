# 校函IDEC计科官网更新日志

## 2022.10.30 Savo_Shen
- Vue路由实现（router）
## 2022.10.28 Savo_Shen
- 成功实现前后端分离
- 成功实现注册账户
- 成功实现删除账户
## 2022.10.27 Savo_Shen
- 更新Header
- 添加部分图片资源等

## 2022.11.20 Savo_Shen
### 部署上线记录
将dist文件夹上传到apache服务器，配置虚拟主机实现多端口运行
``` conf
<VirtualHost *:8888>
    ServerName school_mail
    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/school_mail

    # LoadModule proxy_module modules/mod_proxy.so
    # LoadModule proxy_wstunnel_module modules/mod_proxy_wstunnel.so
    RewriteEngine On
    ProxyPreserveHost On
    ProxyPass /api http://127.0.0.1:8080/api keepalive=On timeout=60
    ProxyPassReverse /api http://127.0.0.1:8080/api
</VirtualHost>
```
### 代理问题
在本地vite的代理配置中，将代理地址改为服务器地址，即可实现本地开发时的代理。<br>
但是在apache服务器中不能成功实现，所以需要在服务器中配置代理，即上面的代码。<br>
其中`ProxyPreserveHost`需要启用插件，需要执行以下命令`sudo a2enmod proxy_http && sudo a2enmod ssl && sudo systemctl restart apache2`<br>
重定向前端的api请求到后端的api请求，即可实现前后端分离。