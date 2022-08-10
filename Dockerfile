FROM nginx

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/nginx.conf

COPY build /usr/share/nginx/html


#   to create the image:
#   docker build --tag react-fa-2 .

#   to run the container:
#   docker container run --publish 9001:80 --detach --name react-demo-container react-fa-2

#   in the browser: localhost:9001