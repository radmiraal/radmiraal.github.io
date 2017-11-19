---
layout: post
title: TYPO3 Flow / Neos and PHP_CodeSniffer
card:
  title: Flow/Neos and codesniffer
redirect_from:
  - /blog/typo3-flow-and-neos-with-codesniffer.html
tags:
  - flow
  - neos
---

This weekend I've been playing around with PHP_CodeSniffer and the sourcecode of TYPO3 Flow and TYPO3 Neos. We've been
lacking automatic sniffs for a longer time now as we unfortunately didn't have an implementation that matched our CI
process yet. The QA Team did continue working on the rules though, and already made the packages compatible with a
composer setup.

There was just one thing missing, it was not yet possible to include phpcs into the actual development requirements of
the Flow project as a custom composer installer was used. I discussed this with Stefano tonight, and he hinted that
[composer plugins](http://getcomposer.org/doc/articles/custom-installers.md) would be the next solution to look into.
So I started hacking, with a working outcome.

*Warning before you read on:
Not all sniff rules for TYPO3 Flow are fully finalized yet. We will provide follow ups to have the rules match the CGL
within a reasonable amount of time.*

# Setting it up
The setup for the codesniffing is fairly easy. You just include the package with the codesniffer standard like:

    composer require --dev typo3-ci/typo3flow=dev-master

The PHP_CodeSniffer will now be installed into your installation, and the TYPO3Flow standard will be available. You can
run the sniffs by using:

    bin/phpcs --extensions=php --standard=TYPO3Flow <path>

# Configure PHPStorm
If you use PHPStorm you can configure phpcs in your code inspections. Probably other IDE's have the same support, but
for that you will have to find the configuration yourself. If you have one, please leave a comment below so other people
can learn from it.

For PHPStorm go to `Settings > Project Settings > PHP > Code Sniffer`. Here you set the `PHP Code Sniffer (phpcs) path`
to the bin/phpcs file in your project. Now go to `Settings > Project Settings > Inspections` and open the inspection
`PHP > PHP Code Sniffer validation`. If you now press the refresh button next to the `Coding standard` selectbox the
TYPO3Flow standard should appear in the selectable options. Select it, and press `Ok`. You should now be good to go.

# Use in other PHP projects
The [SimplyAdmire ComposerPlugins](https://github.com/SimplyAdmire/ComposerPlugins) are not just bound to TYPO3
products. You can use them in your own PHP projects too, as long as your package manager is composer. You can find an
explanation on the github repository.

***Update:** When I posted this blog the TYPO3 QA Team did not yet merge the composer dependencies upstream, but in the meantime
they did. The forked codesniffing packages I mentioned before are now not required anymore, so I removed them from the
blog and simplified the installation process.*