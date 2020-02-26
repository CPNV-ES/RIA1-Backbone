
# Installation LEMP on instance AWS

<h1> Table of Contents</h1>

- [Installation LEMP on instance AWS](#installation-lemp-on-instance-aws)
  - [Informations](#informations)
  - [Installation NGINX](#installation-nginx)
  - [Configuration NGINX](#configuration-nginx)

## Informations
- We use NGINX instead of Apache because he is better for static website.
- We are not going to install PHP and MySQL because we don't need them.
- To connect to the AWS instance, you can use this command on "CMDER".
  ```
  ssh -i [Path of your key SSH] [user]@[IP of your virtual machine]
  ```

## Installation NGINX
Before getting started, make sure that all the packages on your server are updated. Run the following command.
```
sudo apt-get update
```

Now install Nginx with this command.
```
sudo apt-get install nginx
```

## Configuration NGINX
Remove the file **default** in the folder **/etc/nginx/sites-enabled/**
```
sudo rm -f /etc/nginx/sites-enabled/default
```

Create a virtual host in the folder **/etc/nginx/sites-available/** and create a link inside the /etc/nginx/sites-enabled/ folder
```
sudo touch trivagoBB.conf
sudo ln -s /etc/nginx/sites-available/trivagoBB.conf /etc/nginx/sites-enabled/
```

Write inside the file /etc/nginx/sites-enabled/trivagoBB.conf 
```
 sudo nano trivagoBB.conf
```
```
server {
    listen 80;
    listen [::]:80;

    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

We can now use the folder **/var/www/html** to insert the files we need to use our website.

Sources :
- https://www.itzgeek.com/how-tos/linux/debian/install-linux-nginx-mysql-php-lemp-stack-debian-9-stretch.html
  
- https://www.howtoforge.com/tutorial/how-to-install-nginx-with-php-and-mysql-lemp-on-debian-9/
  
- https://serverguy.com/comparison/apache-vs-nginx/