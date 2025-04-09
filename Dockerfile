FROM php:8.2-apache

COPY . /var/www/html/

RUN a2enmood rewrite

EXPOSE 80
