---
layer: single
title: "4. Disqus에서 깃헙 블로그에 댓글 기능 추가하기"
categories: github-blog
tag: comment
toc: true
author_profile: false
sidebar:
    nav: "docs"
---

## Distqus

- [Disqus 사이트](https://disqus.com)에 접속한 뒤 가입하기



- *우측 상단 프로필 - Settings - 우측상단 톱니바퀴 - Add Disqus To Site*

  에 들어간 뒤 가장 하단의 **GET STARTED** 클릭



- 하단의 **I want to install Disqus on my site** 클릭

<img src="{{site.url}}/images/2023-02-19-Addcomment/disqus1-6792368.png" alt="disqus1" style="zoom:33%;" />



- Website Name 원하는 이름으로 지정하고 **Create Site**



- 유료버전을 구독하지 않고 **Subscribe Now** 클릭



- 플랫폼은 Jekyll 블로그 선택



- **Configure** 누른 후 페이지에서 해당 항목 기입하기![스크린샷 2023-02-19 오후 4.38.12]({{site.url}}/images/2023-02-19-Addcomment/스크린샷 2023-02-19 오후 4.38.12.png)



- 이후 **Complete setup** 버튼을 누르면 끝!



## _config.yml 파일에서 적용하기

+ defaults - values 항목의 comments를 true로 설정하기

```yaml
defaults:
  - scope:
      path: ""
      type: posts
    values:
      comments: true
```



+ 파일 위쪽의 comments 항목 설정

  + provider -> disqus로 설정
  + disqus 항목의 shortname 작성해야 함

    -> 이때 shortname은 disqus 사이트에서

    *Admin - Select a specific site - 깃헙 블로그 링크 선택 - Edit setting* 

    에 들어가면 Shortname을 확인할 수 있다.



```yaml
comments:
  provider               : "disqus"
  disqus:
    shortname            : "shortname 넣기"
```



