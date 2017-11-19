if (document.querySelector('script[data-piwik-domain]')) {
    var _paq = _paq || [];
    _paq.push(["trackPageView"]), _paq.push(["enableLinkTracking"]), function () {
        var a = ("https:" == document.location.protocol ? "https" : "http") + "://" + document.querySelector('script[data-piwik-domain]').getAttribute('data-piwik-domain') + "/";
        _paq.push(["setTrackerUrl", a + "piwik.php"]), _paq.push(["setSiteId", document.querySelector('script[data-piwik-site_id]').getAttribute('data-piwik-site_id')]);
        var b = document, c = b.createElement("script"), d = b.getElementsByTagName("script")[0];
        c.type = "text/javascript", c.defer = !0, c.async = !0, c.src = a + "piwik.js", d.parentNode.insertBefore(c, d)
    }();
}

if (document.querySelector('script[data-disqus_shortname]')) {
    if ($('#disqus_thread').length > 0) {
        var disqus_shortname = document.querySelector('script[data-disqus_shortname]').getAttribute('data-disqus_shortname');

        if (document.querySelector('script[data-disqus_identifier]')) {
            var disqus_identifier = document.querySelector('script[data-disqus_identifier]').getAttribute('data-disqus_identifier');
        }

        (function () {
            var dsq = document.createElement('script');
            dsq.type = 'text/javascript';
            dsq.async = true;
            dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        })();
    }
}

if (document.querySelector('script[data-pingdom-id]')) {
    var _prum = {id: document.querySelector('script[data-pingdom-id]').getAttribute('data-pingdom-id')};
    var PRUM_EPISODES = PRUM_EPISODES || {};
    PRUM_EPISODES.q = [];
    PRUM_EPISODES.mark = function (b, a) {
        PRUM_EPISODES.q.push(["mark", b, a || new Date().getTime()])
    };
    PRUM_EPISODES.measure = function (b, a, b) {
        PRUM_EPISODES.q.push(["measure", b, a, b || new Date().getTime()])
    };
    PRUM_EPISODES.done = function (a) {
        PRUM_EPISODES.q.push(["done", a])
    };
    PRUM_EPISODES.mark("firstbyte");
    (function () {
        var b = document.getElementsByTagName("script")[0];
        var a = document.createElement("script");
        a.type = "text/javascript";
        a.async = true;
        a.charset = "UTF-8";
        a.src = "//rum-static.pingdom.net/prum.min.js";
        b.parentNode.insertBefore(a, b)
    })();
}
