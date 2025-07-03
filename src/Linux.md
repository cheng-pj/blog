# Ubuntu

## ssh-agent/sshd

### 1.查看 ssh 服务是否开启/安装

> 输入命令:

```cmd
ps -e|grep ssh
```

> 输出如下:

```cmd
#客户端
00:00:00 ssh-agent

#服务端
00:00:00 sshd
```

### 2.如果缺少 sshd ,需要进行安装

> 安装  ssh-client 命令:

```cmd
apt install openssh-client
```

> 安装  ssh-server 命令:

 ```cmd
  apt install openssh-server
 ```

> 安装完成之后,启动服务

  ```cmd
  /etc/init.d/ssh start
  ```

> 查看服务状态:

```cmd
service ssh status
```





## Winscp使用root登录ubuntu

### 1.系统文件需要切换成 root 输入命令:

```cmd
sudo su
```

- 初始 Linux 系统需要设置 root 密码,输入命令:
- **sudo passwd root**

### 2.用命令编辑文件:

> **vi /etc/ssh/sshd_config**

### 3.找到 (注:带#为注释行需要删除)

>**Shift + :** 快捷键 :进入命令模式
>
>**i** :编辑文本
>
>**Delete** :删除字符
>
>**:wq** :保存()

```cmd
Authentication: yes

#LoginGraceTime 120

PermitRootLogin without-password

#StrictModes yes
```



### 4.将 PermitRootLogin without-password 修改为 PermitRootLogin yes

### 5.输入命令 **sudo service      ssh restart** 即可

### 6.查看服务是否正确启动

> 输入命令:

```cmd
ps -e|grep ssh
```



## 更改镜像源

### 1.备份

```cmd
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
```

### 2.编辑源列表

> ubuntu 20.04(focal) 配置如下

```cmd
vim /etc/apt/sources.list
```



```cmd
deb http://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
```





# Docker

## 1、安装

```cmd
# step 1: 安装必要的一些系统工具
sudo apt-get update
sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common
# step 2: 安装GPG证书
curl -fsSL https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -
# Step 3: 写入软件源信息
sudo add-apt-repository "deb [arch=amd64] https://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"
# Step 4: 更新并安装Docker-CE
sudo apt-get -y update
sudo apt-get -y install docker-ce

# 安装指定版本的Docker-CE:
# Step 1: 查找Docker-CE的版本:
# apt-cache madison docker-ce
#   docker-ce | 17.03.1~ce-0~ubuntu-xenial | https://mirrors.aliyun.com/docker-ce/linux/ubuntu xenial/stable amd64 Packages
#   docker-ce | 17.03.0~ce-0~ubuntu-xenial | https://mirrors.aliyun.com/docker-ce/linux/ubuntu xenial/stable amd64 Packages
# Step 2: 安装指定版本的Docker-CE: (VERSION例如上面的17.03.1~ce-0~ubuntu-xenial)
# sudo apt-get -y install docker-ce=[VERSION]
```

> 安装校验

```cmd
docker version
```

### 中央仓库

```
https://hub.daocloud.io
https://hub.docker.com
```

