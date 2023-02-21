---
layer: single
title: "3-1. Gem::FilePermissionError 해결 방법"
categories: github-blog
tag: error
toc: true
author_profile: false
sidebar:
    nav: "docs"
---

###  1. ruby 버전 확인 및 재설치

`rbenv install -l`

설치 가능한 Ruby 버전 확인하고 최신 버전 설치하기

![gempermission]({{site.url}}/images/2023-02-10-GemPermissionError/gempermission.png)

`rbenv install 3.2.0`

rbenv 3.2.0 버전이 설치되었는지 확인하고, 버전을 변경한다.

`rbenv versions`

`rbenv global 3.2.0`

### 		2. 셸에서 환경 변수를 설정한다.

`vim ~/.zshrc` 를 통해 vim 에디터를 실행

i 눌러서 <insert>모드로 변경 후 명령어 추가

```sh
[[ -d ~/.rbenv  ]] && \
  export PATH=${HOME}/.rbenv/bin:${PATH} && \
  eval "$(rbenv init -)"
```

ESC 누르면 normal 모드로 변경된다.

`:wq`로 저장 후 종료한다.

```sh
:q	// 종료
:w	// 저장
:wq	// 저장 후 종료
:q!	// 저장하지 않고 종료
:wq!	// 강제로 저장 후 종료
```

`source ~/.zshrc` 로 코드를 적용한다.
