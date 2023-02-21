---
layer: single
title: "6. 깃헙 블로그에 카테고리, 태그 및 검색 기능 추가하기"
categories: github-blog
tag: [category, tag, search]
toc: true
author_profile: false
sidebar:
    nav: "docs"
---

## 준비 과정

#### _config.yml 파일 설정

- Archives 항목에 보면 category와 tag가 있는데 그 밑의 코드들을 주석해제하여 준다.

```yaml
jekyll-archives:
  enabled:
    - categories
    - tags
  layouts:
    category: archive-taxonomy
    tag: archive-taxonomy
  permalinks:
    category: /categories/:name/
    tag: /tags/:name/
```



#### _pages 폴더 생성

+ 깃헙 블로그 폴더 내에 _pages 폴더가 없다면 생성해 준다.





## Category 추가하기

#### 1. _pages 폴더

+ category-archive.md 파일을 생성해 주고, 다음과 같은 코드를 입력한다.

```yaml
---
title: "Category"
layout: categories
permalink: /categories/
author_profile: true
sidebar_main: true
---
```

#### 2. _data / navigation.yml 

+ 기존에 있던 Quick Start Guide를 삭제하여 준 뒤 다음과 같은 코드를 입력한다.

```yaml
main:
  - title: "Category"
    url: /categories/
```

#### 3. 포스팅할 때 front matter에 categories 추가하기

```yaml
---
layout:
title:
categories:
---
```





## **Tag 추가하기**

#### 1. _pages 폴더

+ tag-archive.md 파일을 생성해 주고, 다음과 같은 코드를 입력한다.

```yaml
---
title: "Tag"
layout: tags
permalink: /tags/
author_profile: true
sidebar_main: true
---
```

#### 2. _data / navigation.yml

+ category와 마찬가지로 tag를 추가하여 준다.

```yaml
main:
  - title: "Tag"
    url: /tags/
```

#### 3. 포스팅할 때 front matter에 tag 추가하기

```yaml
---
layout:
title:
categories:
tag:
---
```



**❗️두개 이상의 태그나 카테고리를 넣고 싶을 때는 [tag1, tag2, ...] 이런식으로 작성하여 준다.**





## **검색기능 추가하기**

#### 1. _pages 폴더

+ search.md 파일을 추가하여주고, 다음과 같은 코드를 추가하여 준다.

```yaml
---
title: Search
layout: search
permalink: /search/
---
```

#### 2. _data / navigation.yml

+ search를 추가하여 준다.

```yaml
main:
  - title: "Search"
    url: /search/
```

