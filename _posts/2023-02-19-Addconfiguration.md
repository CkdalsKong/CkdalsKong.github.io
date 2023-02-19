---
layer: single
title: _config.yml에서 블로그 설정 간단하게 변경하기
categories: github-blog
tag: _config.yml
toc: true
author_profile: false
sidebar:
    nav: "docs"
---

+ minimal-mistakes 테마를 사용하고 있으므로 [minimal-mistakes 홈페이지](https:// mmistakes.github.io/minimal-mistakes/docs/configuration/)에 방문하여 Configuration 목차에서 원하는 항목 변경해보기



### 1. Skin 변경

- _config.yml 파일에서 skin 테마 변경하기

```yaml
minimal_mistakes_skin    : "mint"
```




### 2. Site settings 변경

- locale : "ko-KR"로 변경하기 (Site Author에서도 변경)
- title : 원하는 사이트의 제목으로 변경하기
- title_separator : 사이트에서 페이지 이동하였을때 페이 경로를 나누어주는 역할으로 "|" 으로 설정
- subtitle : 원하는 tagline 넣기 
- name : 원하는 이름 넣기 (Site Author에서도 변경)
- discription : 블로그에 대한 설명 넣기 (Site Author에서도 변경 /*bio)

```yaml
locale                   : "ko-KR"
title                    : "CMK Blog"
title_separator          : "|"
subtitle                 : "Time waits for no one."
name                     : "CMKong"
description              : "CMKong의 블로그입니다."
url                      : "https://CkdalsKong.github.io"
```




### 3. 블로그에 로고 추가하기

- assets 폴더에 images 폴더 만들기
- 만든 images 폴더에 원하는 로고 이미지 드래그 앤 드랍
- _config.yml 파일에서 Site Settings > logo 에서 로고 이미지 경로 추가하기
  "/assets/images/로고이미지"

```yaml
logo                     : "/assets/images/logo_by_YMK.jpg"
```



### 4. 네비게이션 메뉴 추가하기

- _config.yml 파일에서 Breadcrumbs 항목 찾아서 주석 해제 후 true로 설정해주기
- 블로그에서 게시물을 들어가 보면 상단에서 경로를 확인할 수 있음

```yaml
breadcrumbs              : true
```



### 5. 블로그 작성일 표시하기

- _config.yml 파일의 defaults > values 에 show_date 옵션 추가 후 true로 설정해주기
- 날짜 표기방법 변경하기
  - show_date 추가한 위치 밑에 아무런 포함관계 없이 date_format 옵션 추가해 주기
  - "%Y-%m-%d" 연 - 월 - 일 의 순서이며 원하는 순서로 변경하기
  
  ```yaml
  defaults:
    - scope:
        path: ""
        type: posts
      values:
        show_date: true
  
  date_format: "%Y-%m-%d"
  ```
  
  