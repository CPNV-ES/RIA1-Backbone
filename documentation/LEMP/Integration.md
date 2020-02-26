
# Installation LEMP and GIT on instance AWS

<h1> Table of Contents</h1>

- [Installation LEMP and GIT on instance AWS](#installation-lemp-and-git-on-instance-aws)
  - [Informations](#informations)
  - [Installation NGINX](#installation-nginx)
  - [Configuration NGINX](#configuration-nginx)
  - [Installation GIT](#installation-git)

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

    root /var/www/RIA1-Backbone;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

## Installation GIT

Use this command to install GIT 
```
sudo apt install git
```
Now go to the folder **/var/www/** and git clone the project (You will need to log in with your github account)
```
cd /var/www/
sudo git clone https://github.com/CPNV-ES/RIA1-Backbone.git
```

Sources :
- https://www.itzgeek.com/how-tos/linux/debian/install-linux-nginx-mysql-php-lemp-stack-debian-9-stretch.html
  
- https://www.howtoforge.com/tutorial/how-to-install-nginx-with-php-and-mysql-lemp-on-debian-9/
  
- https://serverguy.com/comparison/apache-vs-nginx/

- https://linuxize.com/post/how-to-install-git-on-debian-9/