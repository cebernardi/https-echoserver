FROM node:7.2.1-alpine

MAINTAINER continuousarchitect
EXPOSE 8080 8443 8081

#RUN apk --no-cache add openssl

WORKDIR /opt
ADD certs/* /opt/

ADD server.js /opt
CMD node server.js