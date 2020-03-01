# EH Forwarder Bot 2.0保持后台运行（Screen）

微信升级到7之后就经常收不到后台推送（不知道问题是出在美国的网络还是我的pixel），但网页版的推送显然是正常的，于是决定时隔一年再次卸载微信，使用efb。
<del>要是有空顺便把Facebook Messenger也部署了吧</del>
[感兴趣的话可以看一下这个documentation](https://ehforwarderbot.readthedocs.io/en/latest/index.html)

用的是Vultr的VPS，5刀一个月的那个（之前用的是digitalocean，github student package里面有优惠），有点肉疼……
安装方法和当初装1.0没什么区别，只不过后台运行的方法和之前不太一样，所以从[这里](https://whitecodes.github.io/2018/02/Eh-Forwarder-Bot-2-0/)找到了解决方案，记在下面：

1. 首先要用screen保持后台运行
2. 将其后台化需要Ctrl+a、Ctrl+d
3. 再次打开的话需要执行screen -ls命令，然后再screen -r XXXXX
4. 将其停掉需要Ctrl+c、Ctrl+d

`# 新建一个有名字的session`

`screen -S name`

`# 再切回去`

`screen -r name`

