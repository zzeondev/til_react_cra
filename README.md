# JSX 1.

- React 에서 사용하는 html 태그
- 용도 : 컴포넌트 만들기

## 1. Component 란?

- HTML 태그 형태를 리턴하는 함수
- 화살표 이든, 일반 함수 이든 `HTML 태그를 리턴`하면 인정.
- JSX 는 `반드시 하나의 태그`에 `포함되도록 배치`하여야 한다.
- `<></>` 를 Fragment 라고 합니다.
- 파일명 및 컴포넌트 함수는 반드시 `파스칼` 이어야 한다.

## 2. Component 와 Page 구분?

- `폴더명은 반드시 소문자`로 하여야 한다.
- 각 화면단위로 구성한다면 `src/pages 폴더`에 저장
- `하나의 html 을 완성하기 위한 배치 요소`라면 `src/components 폴더`에 저장

# css

## 1. JSX 에 css 추가하기

- 일반적으로 src 폴더 하단에 `css 폴더`를 생성함.
- css 파일은 모두 이곳에 배치한다.
- css 파일명은 컴포넌트명과 동일하게 파스칼케이스를 사용한다.
- ex) Header.css, Footer.css, Slide.css

## 2. css 사용하기

### src/index.css

- 기본적인 css 적용
- index.js 에 적용되는 css
- css 를 불러들이는 import 형태 확인

```js
import "./index.css";
```

### src/pages/StartPage.jsx

- src/css/StartPage.css 파일 생성
- css 파일 불러들이기

```jsx
import "../css/StartPage.css";
```

- Footer.jsx

```jsx
import "../css/Footer.css";
```

- Header.jsx

```jsx
import "../css/Header.css";
```

- Slide.jsx

```jsx
import "../css/Slide.css";
```

## 3. 외부 css 라이브러리 사용하기

### 3.1. 링크 방식

- 위 처럼 리액트에서 활용은 추천하지 않습니다.
- 일반 웹 퍼블리싱에서만 활용하시길 추천합니다.
- reset.css : https://meyerweb.com/eric/tools/css/reset/
- normalize.css : https://necolas.github.io/normalize.css/8.0.1/normalize.css
- fontAwsome : https://cdnjs.com/libraries/font-awesome
- 구글 폰트 : https://fonts.google.com/
- public/index.html 파일에 추가

```html
<!doctype html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="마인드 다이어리 서비스입니다." />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>마인드 다이어리</title>
    <!-- reset.css -->
    <link
      rel="stylesheet"
      href="https://meyerweb.com/eric/tools/css/reset/reset200802.css"
    />
    <!-- normalize.css -->
    <link
      rel="stylesheet"
      href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"
    />
    <!-- font-awsome -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
      integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <!-- 구글 폰트 -->
    <link
      href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

### 3.2. npm 설치 방식 권장

- https://www.npmjs.com/

```bash
npm i normalize
npm i reset-css
npm install react-icons --save
```

### 3.3 구글폰트는 `index.css 에서 작성`권장

- index.css 에 모든 페이지에 적용되는 기본 파일이므로
- link 방식보다는 @import url 방식 권장

```css
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline-style: none;
}
a {
  text-decoration: none;
  color: #000;
}
ul,
ol {
  list-style: none;
}
html {
}
body {
}
```

## 4. 일반 css 적용해 보기

- css : `import React from "react";`
- jsx : `<div className="box">로고</div>`
- css : `.box {background-color: red;}`

- StartPage.jsx

```jsx
import React from "react";
// css
import "../css/StartPage.css";
// components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slide from "../components/Slide";

function StartPage() {
  return (
    <>
      <div className="box">로고</div>
      {/* 헤더 컴포넌트 */}
      <Header></Header>
      {/* 슬라이드 컴포넌트 */}
      <Slide></Slide>
      {/* 분류메뉴 컴포넌트 */}
      {/* 공지 컴포넌트 */}
      {/* 추천 컴포넌트 */}
      {/* 새목록 컴포넌트 */}
      {/* 앱설치 안내 컴포넌트 */}
      {/* 하단 컴포넌트 */}
      <Footer></Footer>
    </>
  );
}

export default StartPage;
```

- StartPage.css

```css
.box {
  background-color: red;
}
```

## 5. `module.css` 적용해 보기

- index.css : 공통 적용 내용. (클래스 명 충돌 가능성)
- StartPage.css 를 파일명 변경 : `StartPage.module.css`
- css 가 아니라 module.css 를 불러들임.

```jsx
// import from "../css/StartPage.css"
import styles from "../css/StartPage.module.css";
```

```jsx
// <div className="box">로고</div>
<div className={styles.box}>로고</div>
```

## 6. SCSS 활용하기

- 소스 가독성이 상당히 좋다.
- css 를 체계적으로 생성 및 관리

### 6.1. SCSS npm 설치

- VSCode 플러그인은 설치 되어 있음. (live sass compiler)

```bash
npm i sass -D
```

## 6.2. 기본 폴더 생성

- src/scss 폴더 생성 권장
- src/scss/test.scss 파일 생성