---
layout: single
title: "2 - 깃허브 블로그에 이미지 올리는 방법"
categories: github-blog
tag: [blog, jekyll]
toc: true
author_profile: false
sidebar:
    nav: "docs"
---

## 1. typora

- typora - 환경설정 - 이미지  에서 이미지 삽입시 <u>사용자 정의 폴더로 이미지 복사</u>를 선택하고, 그 경로가 images로 잘 되어 있는지 확인
- typora에서 사진을 올리려는 포스트 선택하기
- 사진 드래그해서 원하는 위치에 넣기 & 저장

## 2. github desktop

- changes에 들어가서 변경된 파일을 선택하기
- 어떤 것이 수정되었는지 summury에 간략히 적기
- commit to master -> push origin



## ❗️이미지가 깨질때

- visual studio code에서 repository가 저장된 폴더를 열고, 이미지가 추가된 md 파일을 연다.

- 이미지의 경로를 {{site.url}}/images/.. 으로 설정하여 준다.

  ->  {{site.url}} 은 site의 url 변수에 접근하는 것

```markdown
![사진 파일명]({{site.url}}/images/md 파일명/사진 파일명.확장자)
```



