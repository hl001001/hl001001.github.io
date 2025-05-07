var posts=["2025/05/06/py格式转换软件/","2025/04/18/hello-world/","2025/05/06/md文件显示图片/","2025/05/07/categories/兴趣爱好/","2025/05/07/categories/软件合集/","2025/05/07/categories/恋爱/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };