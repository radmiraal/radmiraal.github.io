---
layout: post
title: Composer update and Github downtime
card:
  title: Composer and Github downtime

redirect_from:
  - /blog/composer-update-and-github-downtime.html
tags:
  - composer
  - neos
  - flow
  - deployment
---

Composer has some good features, and some pitfalls. In this post I'll explain a little issue I had with composer /
github last night.

It was late, or actually early... I had to add a dependency to my project. I manually added it to my composer.json, ran
composer update, and waited... If I only would've been more careful... Recklessly updating a composer project is pretty
stupid, but most of the times it goes well. I should just have done a composer require <package>, but now composer
started updating all packages, and half way it failed... Github was having fileserver issues, and one of my dependencies
was offline because of that... A nice 503 error occured, composer update failed, no composer.lock update, and my
deployment failed (which was of course perfectly rolled back by Surf).

I didn't really want to rush, tweeted a warning for other Flow users, closed my laptop and went to bed. This morning I
checked github, and the issue was still there, github struggled with it for quite some time. At the time of writing they
still didn't report the issue to be 100% solved, meaning they're working on it for 18 hours now. Steffen replied to my
tweet this morning, which triggered me to dig a bit into mirroring composer dependencies. Shortly after Jigal added some
notes too. You can read the [conversation online](https://twitter.com/renst3/status/333369734487752704) of course.

I searched if composer supports fallback mirrors, but it doesn't. And then I mean fallbacks for repositories which are
hosted in for example git. When a package is intalled the source url and commit hash are stored in the composer.lock.
When you now do an install composer will look for this specific host, and if this fails the install breaks. It would be
nice if it could lookup a mirror, and succeed.

There are ways to limit your dependencies on 3rd party servers though. You can configure
[satis](https://github.com/composer/satis) and let it download the packages. This would then be a mirror which you
maintain. This might be a solution at first sight, but when your server dies you're stuck again.

As we don't have this mirroring in composer now you should consider the following in your projects:

host your own satis server if you don't want to be dependent on 3rd party systems (this also gives you a mirror for your
dependencies, which ain't that bad).
if you release your application, include all dependencies
For TYPO3 this could mean that hosting a satis repository with clones of all dependencies we have in packages hosted on
git.typo3.org could make sense. Looking forward to read how you think about that. At least I think we should make sure
that we deliver packaged versions of our releases (including all dependencies) next to the available installation
procedure using composer.

Just a note... Don't read this post as 'composer is not good for managing / releasing a distribution', I think it's a
pretty valid way of working and is mostly error prone when the developer doesn't care / know what he's doing. I know a
lot of example projects using composer in a full deployment setup. This way of working ain't worse then using submodules
for your typo3_src folder where git.typo3.org could be down. The chance it happens to composer is just a bit bigger as
you don't know where the code is hosted, and git.typo3.org has an awesome server team ;-) It's just important that you
know the tools you work with, and pick the right tool for the right job. And remember, everybody has it's own free
choice and opinion in this regard :-) Flow doesn't force you in one of those choices.
