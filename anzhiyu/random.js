var posts=["post/00001.html","post/9520.html","post/16107.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};