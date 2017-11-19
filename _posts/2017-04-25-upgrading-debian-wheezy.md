---
layout: post
title: Upgrading Debian wheezy
redirect_from:
  - /blog/upgrading-debian-wheezy.html
tags:
  - debian
---

Yesterday I read a request for a guide installing TYPO3 on a raspberry pi. I realised I had a pi lying around somewhere,
and I decided to try if I could manage to install TYPO3 on it.

To get started I had to find the pi, which was actually easy. Wiping of the dust was a bit harder :-) I even found an SD
card with Raspbian OS on it, still in a sealed bag. I decided that my requiement for running TYPO3 would be to have at
least PHP 7 installed. With that in mind I booted the pi and followed the following steps in the raspberry
configuration:

* Extend the disk to the full size of the SD card
* Enable SSH
* Upgrade Raspbian configuration
* Set the timezone
* Of course a reboot

After the reboot I noticed that having an SD card with Raspbian is nice, but if you leave it unopened for a long time
the software on it does not update at all :-) The Debian version on it was wheezy, while current stable is jessie. So
first step was to upgrade to Jessie. Below are the simple steps I took to do this upgrade.

# Update all packages
After installing a new OS or upgrading an OS I find it a good practice to update all packages to the most recent
versions available:

    sudo apt-get update
    sudo apt-get upgrade

# Upgrade Debian
Now I wanted to do a dist-upgrade, for that I ran the following command:

    sudo apt-get dist-upgrade

I thought this would lead to Debian doing a full upgrade and automatically update the apt sources, but it didn't. I had
to change my '/etc/apt/sources.list' file manually, and replace 'wheezy' by 'jessie'. So I edited the file to look like:

    deb http://mirrordirector.raspbian.org/raspbian/ jessie main contrib non-free rpi

And now I ran:

    sudo apt-get update
    sudo apt-get dist-upgrade

The following upgrade took a while, but I'm now left with an upgraded Debian on my raspberry. Next up is installing PHP
and stuff, but I'll save that for a follow up post.