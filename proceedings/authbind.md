```shell
sudo apt install authbind
sudo touch /etc/authbind/byport/80
sudo chmod 777 /etc/authbind/byport/80
authbind --deep /path/to/binary command line args
authbind --deep node index.js
```
