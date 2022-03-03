FROM ubuntu:20.04
RUN apt update
RUN apt install -y curl nginx
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
RUN apt install nodejs

RUN mkdir /website
WORKDIR /website

COPY ./package.json /website/package.json
RUN npm install

COPY ./src /website/src
COPY ./public /website/public

RUN npm run build
RUN rm -r /var/www/html/
RUN mv /website/build/ /var/www/html/

CMD ["nginx", "-g", "daemon off;"]
