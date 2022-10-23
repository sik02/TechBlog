---
date: '2022-10-23'
title: 'Markdown 문서 작성 방법'
categories: ['Markdown']
summary: 'Markdown 문서 사용법 알아보기'
---


# 1. 마크다운이란?

Markdown은 텍스트 기반의 마크업 언어로 2004년 존그루버에 의해 개발되었다. Markdown의 형식 지정 구문에 대한 최우선 설계 목표는 가장 읽기 쉽게 만드는 것이였다. 마크다운 형식의 문서는 태그나 형식 지정 지침으로 마크업된 것처럼 보이지 않고 일반 텍스트 그대로 게시할 수 있어야 한다.

## 1.1. 마크다운을 사용하는 이유
웹사이트, 문서, 메모, 책, 프레젠테이션등 활용 범위가 다양하고 Markdown 형식의 텍스트가 포함된 파일은 거의 모든 응용 프로그램을 사용해서 열 수 있다는 장점이 있다.

## 1.2. 마크다운 활용방안
특수기호와 문자를 이용한 매우 간단한 구조의 문법을 사용하여 웹에서도 보다 빠르게 컨텐츠를 작성하고 직관적으로 인식할 수 있다. 대표적으로 Github의 README.md가 마크다운 문서를 사용하며 간단하게 기록하고 가독성이 좋다는 강점으로 점점 퍼지게 되었다.

## 1.3. 마크다운의 장-단점
### 1.3.1 마크다운의 장점
      - 간결하다.
      - 별도의 도구없이 작성 가능하다.
      - 다양한 형태로 변환이 가능하다.
      - 텍스트로 저장되기 때문에 용량이 적어 보관에 용이하다.
      - 버전관리 시스템을 이용하여 변경이력을 관리할 수 있다.
      - 지원하는 프로그램과 플랫폼이 다양하다.

### 1.3.2 마크다운의 단점
      - 표준이 없기 때문에 도구에 따라서 변환방식이나 생성물이 다르다.
      - 모든 HTML 마크업을 대신하지 못한다.

# 2. 마크다운 사용법(문법)

## 2.1. 헤더(Headers)

### 2.1.1. (큰제목, 문서제목)
      This is an H1
      =============
This is an H1
=============

### 2.2.2. 작은제목, 문서 부제목
      This is an H2
      -------------
This is an H2
-------------

## 2.2.3. 글머리 1~6까지 지원
      # This is a H1
      ## This is a H2
      ### This is a H3
      #### This is a H4
      ##### This is a H5
      ###### This is a H6
# This is a H1
## This is a H2
### This is a H3
#### This is a H4
##### This is a H5
###### This is a H6

## 2.2. BlockQuote
블럭 인용문자는 >를 이용

      > This is a first blockqute.
      >	> This is a second blockqute.
      >	>	> This is a third blockqute.
> This is a first blockqute.
>	> This is a second blockqute.
>	>	> This is a third blockqute.

## 2.3. 목록(list)
순서있는 목록 번호 리스트

      1. 첫번째
      2. 두번째
      3. 세번째
1. 첫번째
2. 두번째
3. 세번째

번호를 이상하게 입력해도 순서는 내림차순으로 정의된다

      1. 첫번째
      3. 세번째
      2. 두번째
1. 첫번째
3. 세번째
2. 두번째



순서 없는 목록, 글머리 기호

      * 빨강
        * 녹색
          * 파랑
      + 빨강
        + 녹색
          + 파랑  
      - 빨강
        - 녹색
          - 파랑 

글머리기호테스트  
* 빨강
  * 녹색
    * 파랑
+ 빨강
  + 녹색
    + 파랑
      
- 빨강
  - 녹색
    - 파랑

혼합해서 사용하는것도 가능하다

      * 1단계
        - 2단계
          + 3단계
            + 4단계
* 1단계
  - 2단계
    + 3단계
      + 4단계

## 2.4. 코드(Code)

### 2.4.1. 들여쓰기

      This is a normal paragraph:

          This is a code block.
          
      end code block.

This is a normal paragraph:

    This is a code block.
    
end code block.

4개의 공백 또는 하나의 탭으로 들여쓰기 변환이 가능하고 들여쓰지 않은 행을 만날때까지 이어진다. 줄바꿈을 적용 안하면 제대로 인식되지 않는 단점이 있다

### 2.4.2. 코드블럭
(```)을 시작점에 사용하여 만들 수 있다, 또한 언어 선언으로 문법 강조가 가능한데 html, css, javascript, java등 기본 언어들은 다 가능하다

```java
public class BootSpringBootApplication {
  public static void main(String[] args) {
    System.out.println("Hello, Honeymon");
  }
}
```

## 2.5. 수평선
(5가지 모두 동일한 수평선을 만든다)

      * * *
      ***
      *****
      - - -
      -----------------------
* * *
***
*****
- - -
-----------------------

## 2.6. 링크

* 참조링크

        Link: [Google][googlelink]

        [googlelink]: https://google.com

### Link: [Google][googlelink]

[googlelink]: https://google.com

* 외부링크

        [Google](https://google.com, "google link")

### [Google](https://google.com, "google link")

* 자동연결

  * 외부링크: <https://google.com/>
  * 이메일링크: <slingv@naver.com>

## 2.7. 강조

      *single asterisks*
      _single underscores_
      **double asterisks**
      __double underscores__
      ~~cancelline~~


*single asterisks*

_single underscores_

**double asterisks**

__double underscores__

~~cancelline~~

## 2.8. 이미지

      ![pooh](https://encrypted-tbn0.gstatic.com/images?
      
      q=tbn:ANd9GcQW0Z94iqO01RBz7uaesVFC5hG-J4y-ldNCHg&usqp=CAU)


![pooh](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW0Z94iqO01RBz7uaesVFC5hG-J4y-ldNCHg&usqp=CAU)

사이즈 조절 기능은 따로 없기에 HTML태그 이용해서 사용

      <img src="https://encrypted-tbn0.gstatic.com/images?
      
      q=tbn:ANd9GcQW0Z94iqO01RBz7uaesVFC5hG-J4y-ldNCHg&usqp=CAU" 
      
      width="200px" height="200px" alt="alt">

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW0Z94iqO01RBz7uaesVFC5hG-J4y-ldNCHg&usqp=CAU" width="200px" height="200px" alt="alt">