FROM php:8.2-apache

COPY . /www/var/html/

RUN a2enmood rewrite

EXPOSE 80
