FROM php:3.6-apache

COPY . /var/www/html/

RUN a2enmood rewrite

EXPOSE 80
