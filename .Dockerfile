# 使用一个基础的 Nginx 镜像
FROM nginx:latest

# 移除 Nginx 默认的欢迎页面
RUN rm -rf /usr/share/nginx/html/*

# 将当前目录下的所有文件复制到 Nginx 的默认 HTML 目录
COPY . /usr/share/nginx/html

# 暴露 80 端口（Nginx 默认端口）
EXPOSE 80

# 启动 Nginx 服务
CMD ["nginx", "-g", "daemon off;"]