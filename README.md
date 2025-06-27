# 리액트 CRA 프로젝트

- `Create React App` 줄임말

## 1. VSCode 플러그인 설치

- ESLint : 필수 (추후 셋팅)
- Error Lens : JS 코드 에러 체크
- ES7+ React/Redux/React-Native snippets : React 단축키
- Prettier (기존 설치) : 포맷유지

## 2. 리액트 프로젝트 생성 규칙

- 프로젝트명은 즉, 폴더명은 무조건 `소문자` 영문입니다.
- 폴더명에 특수기호는 `-` 외에는 금지 (`emotion-diary`)
- 프로젝트 생성하면 기본적으로 `git init` 이 자동 셋팅됩니다.
- 추가로 `git remote add origin 주소` 진행 필요

## 3. 리액트 프로젝트 `보일러 플레이트` 생성 명령

```bash
npx create-react-app@latest 프로젝트명
npx create-react-app@latest .

git remote add origin 주소
```

## 4. 생성된 파일 살펴보기

- 만약에 회사에 가면 기존 소스를 fork 받으실 겁니다.

### 4.1. `package.json` 최초로 알아야하는 파일

- node_modules 에 다운로드 받아서 파일을 관리하는 용도
- 전체 프로젝트에서 활용한 npm 목록을 관리한다.
- 절대 삭제, 수정은 손으로 하지 않는다.
- node_modules 폴더 다운명령

```bash
npm install
npm i
```

- `dependencies` 항목은 웹에 올라가는 js 라이브러리 소스
- `scripts` : `npm run 명령어`

```bash

# 서비스 배포 버전 생성
npm run build

# 개발 버전 실행
npm run start

# 테스트 버전 실행 : Test Driven Develop (테스트 주도 개발)
npm run test
```

- 우리는 당분간 testing 은 하지 않을 겁니다.
- package.json 을 수정합니다. (`testin 관련 npm 제거`)
- `npm install` 하시기 전에 반드시 `package-lock.json` 제거 후 진행

### 4.2. `.gitignore` 파일

- GitHub 에 업로드 되면 절대 안되는 파일과 폴더 목록 리스트
- 실습
- `.env` 파일 생성

```txt
PASS=1234
```

### 4.3. public 폴더 살펴보기

- public 폴더는 `npm run build` 시 `압축 제외` 됨.
- 우리가 필요로 한 `images, fonts 와 같은 리소스를 배치`함
- favicon.ico : 즐겨찾기, 주소 공유시 보여질 아이콘
- logo192.png, logo512.png : 휴대폰에서 바로가기 저장시 보여질 아이콘
- mainifest.json : 리액트도 웹 앱이라서 앱의 설명서(PWA)
- robots.txt : 웹 크롤링 허용 여부, 검색엔진 탐색 허용 여부
- sitemap.xml : 생성권장합니다. (검색엔진 노출 위해서)
- index.html : 웹 실행시 최초로 보여질 페이지

```html
<!DOCTYPE html>
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
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

### 4.4 src 폴더 살펴보기

#### 4.4.1. 파일 삭제 권장 항목

- testing 항복 관련 파일 삭제 권장
- `파일명에 test` 가 있거나 `폴더가 test 폴더` 면 삭제
- `App.test.js` 삭제
- `setupTests.js` 삭제
- `reportWebVitals.js` 삭제 (예쁘게 성능 표현)
- logo.svg 삭제
- App.css 삭제

#### 4.4.2. 삭제 하지 않기를 권장합니다.

- `index.js 삭제 금지`

```js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
// js 로 root 에 html React 명령으로 그려라
root.render(
  // React.StrictMode 는 개발 메세지 여러번 출력하라
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
```

- index.js 의 최종 모양

```js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

- index.css 기본 css

```css
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

- App.js : 최초로 보여주는 내용 컴포넌트 (html, css, js 한파일에)
- `rfce` : React Function Component Export 단축키

```js
import React from "react";

function App() {
  // js 코딩 자리
  // return 자리에 html 태그(jsx)를 작성
  return <div>App</div>;
}

export default App;
```
