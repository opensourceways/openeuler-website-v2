FROM node:alpine as Builder

RUN mkdir -p /home/openeuler/web
WORKDIR /home/openeuler/web
COPY . /home/openeuler/web

RUN cp ./docs/.vuepress/config.zh.js ./docs/.vuepress/config.js

RUN npm install

RUN mv /home/openeuler/web/script/update-build-script.js /home/openeuler/web/node_modules/@vuepress/core/lib/node/build/index.js
RUN mv /home/openeuler/web/script/add-worker-script.js /home/openeuler/web/node_modules/@vuepress/core/lib/node/build/worker.js
RUN node --openssl-legacy-provider --max_old_space_size=9216 /home/openeuler/web/node_modules/vuepress/cli.js build docs

FROM swr.cn-north-4.myhuaweicloud.com/opensourceway/openeuler/nginx:1.22.0-22.03-lts

COPY --from=Builder /home/openeuler/web/docs/.vuepress/dist/ /usr/share/nginx/html/
RUN chmod -R 755 /usr/share/nginx/html
COPY ./deploy/nginx/nginx.conf /etc/nginx/nginx.conf

RUN touch /var/run/nginx.pid \
    && chown -R nginx:nginx /var/log/nginx \
    && chown -R nginx:nginx /var/run/nginx.pid \
    && chown -R nginx:nginx /etc/nginx

EXPOSE 8080
USER nginx
ENTRYPOINT ["nginx", "-g", "daemon off;"]


