# 리소스 최적화

- public 폴더에 있는 파일들은 원본 그대로 노출 됨.
- src 폴더 안에 있는 파일들은 `용량이 최적화(번들링)` 되어 압축됨.

## 1. 이미지

### 1.1. public 폴더에 있는 이미지 접근법

- http://localhost:3000/logo192.png
- `/logo192.png` 로 접근

- public/images 파일이 있다면 `/images/파일명.확장자`
- 환경설정파일 참조방식 가능함.

```jsx
<img src={`${process.env.PUBLIC_URL}/logo192.png`} alt="로고" />
```

### 1.2. /src 폴더에 있는 이미지 접근법

- 파일이 압축, 즉 번들링이 되어 용량을 줄여줌
- 흔히 /src/assets 폴더를 생성해서 관리

```jsx
import 이름 from "../../assets/logo192.png";
```

```jsx
<img src={이름} alt="로고" />
```

## 2. font 파일

- font 는 가능하면 웹폰트를 쓰자.
- 구글폰트 : https://fonts.google.com
- 눈누 : https://noonnu.cc/font_page/pick
- 만약 파일이 존재한다면 /public 폴더에 두고 활용하자.

## 2.1. 예제(css 가 public 에 있을 때)

- https://www.lotteriafont.com
- /public/fonts 폴더에 파일이 있다는 가정으로 진행
- /public/index.css 에 `font-face` 추가

```css
@font-face {
  font-family: "ddag";
  src: url("/fonts/ddag.ttf");
}
@font-face {
  font-family: "chab";
  src: url("/fonts/chab.ttf");
}
body {
  font-family: "chab", "ddag";
}
```

## 2.2. 예제(css 가 /src 에 있을 때)

- 압축이 된다. (번들링 - webpack)
- /src/assets/폰트파일 배치했다면
- /src/index.css

```css
/* 글꼴 설정 */
@font-face {
  font-family: "ddag";
  src: url("./assets/ddag.ttf");
}
@font-face {
  font-family: "chab";
  src: url("./assets/chab.ttf");
}
body {
  font-family: "chab", "ddag";
}
```
