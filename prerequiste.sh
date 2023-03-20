/bin/bash
sudo yum install git -y
sudo apt install git -y

sudo apt install npm -y
sudo apt install npm -y

sudo npm install -g npm@9.6.2

sudo docker build -t   .
sudo docker run -d -p 5000:5000 -d nodeapp --name nodetainer
sudo docker run  -p 5000:5000 -d nodeapp --name nodetainer2
sudo docker rm 54894143da2e fc6756d5ec0a
docker run -d -p 8000:8000 node-docker
ce02b3179f0f10085db9edfccd731101868f58631bdf918ca490ff6fd223a93b