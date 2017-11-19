---
layout: post
title: TYPO3 Surf with rsync support
redirect_from:
  - /blog/typo3-surf-with-rsync-support.html
tags:
  - TYPO3 Surf
  - deployment
---

As most of you probably know by now Flow 2.0 comes with composer support. Although I really like all the possibilities
it offers, it also has some downsides in my personal opinion. For example during deployment. I wanted to share some
thoughts about that, and explain work being done on Surf which enables you to choose how you deploy your projects.

So what is my issue with composer during deployment then? Well, I just don't trust the tool enough to use it on a
production server. I would rather use it in development / deployment context only. But this might just be me, I also try
to circumvent usage of git clones on a production server if possible. This is why I already had the idea to switch to
deployment using rsync when Surf was still in it's early days. Unfortunately I never found the time to implement it.

With composer the need for rsync became a bit bigger. I worked in projects where security policies, system
administrators and proxy servers simply didn't like composer too. Luckely Thomas Allmer created a
[Surf clone](https://github.com/daKmoR/TYPO3.Surf) (still on Flow 1.1) which supports deployment using rsync. I reworked
those tasks on the current status of Surf, and discussed the changes with the Surf guys. This lead to the idea of
changing Surf a bit. It should not only allow cloning git on a remote server, but support packaging your project locally
and pick your own transfer method like rsync, scp or even ftp.

I kickstarted this work together with Christopher in Lübeck last january. Since then customer work kicked in, but this
week I managed to finish my first working setup using composer locally and rsync for transferring code to my node.

My [deployment descriptor](https://gist.github.com/radmiraal/5557435) now works like:

Make a local checkout of the project.
Execute a composer install in this checkout.
After the composer install the local folder is synced with a remote 'cache' directory. This directory is equal to the
gitclone folder we know from Surf. As this folder remains on the server rsync will just transfer the changed files and
remove files which are deleted since the last deployment.
This folder is then copied to the release folder, and from this point the deployment process is just the Surf default.
For now this process feels pretty solid to me, but I'm curious to other opinions of course. The current changes to Surf
are part of the idea to work towards a first real release of the package. As always resources in time and development is
limited. Please leave a comment if you've a way to help out, is it in time, ideas, code or funding. All help
appreciated.

If you're interested in checking it out, then have a look at the [change](https://review.typo3.org/#/c/18969/). But keep
in mind it is not yet finalized, and marked as work in progress.