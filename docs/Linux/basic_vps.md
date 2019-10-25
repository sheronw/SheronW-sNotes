# new VPS setup log

## 新建用户

	useradd -m 用户名
	passwd 用户名

## 将该用户赋予root权限(利用sudo命令，需要输入密码)

赋予文件读写权限：

	chmod u+w /etc/sudoers

打开文件找到

	root ALL = (ALL:ALL) ALL

下面添加

	用户名 ALL = (ALL:ALL) ALL

取消读写权限：

	chmod u-w /etc/sudoers

<!--more-->

## ssh configuration

create rsa key

	ssh-keygen -t rsa

import public key

	cd .ssh
	cat id_rsa.pub >> authorized_keys
	chmod 600 authorized_keys
	chmod 700 ~/.ssh
	sudo chmod u+w /etc/ssh/sshd_config
	sudo vim /etc/ssh/sshd_config

find these lines and change to:

	PermitRootLogin no
	RSAAuthentication yes
	PubkeyAuthentication yes
	
	sudo chomod u-w /etc/ssh/sshd_config

use WINSCP to get `id_rsa`, open PuTTYGen, load file, add necessary information, then save private key
open PuTTY, `Connection -> SSH -> Auth`, find Private key file for authentication and load it
you could go back to `/etc/ssh/sshd_config` and add this line to deny password authentication, if you like:

	PasswordAuthentication no
