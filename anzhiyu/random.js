var posts=["/post/Java-leetcode-01.html","/post/A-Comprehensive-Survey-on-Distributed-Training-of-Graph-Neural-Networks.html","/post/EarnSomeMoney.html","/post/Java-leetcode-02.html","/post/Java-leetcode-03.html","/post/K20pro-MIUI.html","/post/Windows-Terminal美化.html","/post/hello-world.html","/post/LEARN-LOCALLY-CORRECT-GLOBALLY.html","/post/picgo图床折腾.html","/post/wallpaper-favorites.html","/post/利用hexo搭建静态博客.html","/post/指令级并行.html","/post/博客美化.html","/post/新建博客文章名.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };