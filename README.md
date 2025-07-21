# useMemo

## 1. 최적화 참고사항 (최적화 해 보셨나요?)

### 1.1. 레이아웃

- Shift Layout 현상을 가능하면 제거
- css 로 꾸준히 작업, npm 으로 가짜 배치
- skeleton 레이아웃
- 반응형 코드 꾸준히 작업.

### 1.2. 리액트 성능 최적화

- lazy, suspense 로 로딩처리
- useMemo, useCallBack, React.memo() 로 판별

### 1.3. SEO 최적화

- meta 태그
- favicon
- title
- 모바일 icon 등등
- GA4 적용

## 2. useMemo

- 개발 중에는 적용하지 않습니다.
- 최적화 고민하면서 개발하면 시간이 오래 걸립니다.
- 개발 중에 틈틈이 최적화 하시길 권장드립니다.

### 2.1. useMemo : 리액트 변수 저장하기

- 성능 이슈 발생 가능함.
  - 문제점
    - `count` 값 변경시
    - 다시 계산할 필요없는 `num * 2` 가 실행됨
  - 원하는 것
    - `num` 값 변할 때만
    - 다시 계산 필요 `num * 2` 가 실행됨

```jsx
import React, { useState } from "react";

function App() {
  // js 자리
  console.log("APP:리랜더링");
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(1);

  // 값을 2배로
  const now = num * 2;
  console.log("now : ", now);

  // jsx 자리
  return (
    <div>
      <h2>count 값:{count}</h2>
      <h2>num 값:{num}</h2>
      <h2>now 값:{now}</h2>
      <button onClick={() => setCount(count + 1)}>count 증가</button>
      <button onClick={() => setNum(num + 1)}>num 증가</button>
    </div>
  );
}

export default App;
```

- 해결코드

```jsx
import React, { useMemo, useState } from "react";

function App() {
  // js 자리
  console.log("APP:리랜더링");
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(1);

  // 값을 2배로
  const now = useMemo(() => {
    console.log("now 새로계산");
    return num * 2;
  }, [num]);

  // jsx 자리
  return (
    <div>
      <h2>count 값:{count}</h2>
      <h2>num 값:{num}</h2>
      <h2>now 값:{now}</h2>
      <button onClick={() => setCount(count + 1)}>count 증가</button>
      <button onClick={() => setNum(num + 1)}>num 증가</button>
    </div>
  );
}

export default App;
```

- 연습

```jsx
import React, { useMemo, useState } from "react";

function App() {
  // js 자리
  const [num, setNum] = useState(0);
  const [text, setText] = useState("");

  const refultFN = useMemo(() => {
    return num * num;
  }, [num]);

  const helloFn = useMemo(() => {
    return text + " 안녕!";
  }, [text]);

  // jsx 자리
  return (
    <div>
      <h1>간단한 계산 출력</h1>
      <div>
        <input
          type="number"
          placeholder="숫자입력"
          value={num}
          onChange={e => setNum(parseInt(e.target.value))}
        />
        <div>{refultFN}</div>
        <h1>글자 최적화</h1>
        <div>
          <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>
        <div>{helloFn}</div>
      </div>
    </div>
  );
}

export default App;
```

# useCallback

- 왜 함수를 랜더링 마다 자꾸 새로 만들죠?

- 성능 이슈 발생 가능함.
  - 문제점
    - `count` 값 변경시
    - 다시 만들 필요없는 `const add =() {...}` 가 만들어짐
  - 원하는 것
    - `const add =() {...}` 한번 만들고 다시는 새로 만들지 마라.

```jsx
import React, { useState } from "react";

function App() {
  console.log("App : 리랜더링");
  // js 자리
  const [count, setCount] = useState(0);

  // 과연 add 함수는 다시 정의가 될까?
  const add = () => {
    setCount(count + 1);
  };

  // jsx 자리
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={add}>함수 실행</button>
    </div>
  );
}

export default App;
```

- 성능 개선

```jsx
import React, { useCallback, useState } from "react";

function App() {
  console.log("App : 리랜더링");
  // js 자리
  const [count, setCount] = useState(0);

  // 과연 add 함수는 다시 정의가 될까?
  const add = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  // jsx 자리
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={add}>함수 실행</button>
    </div>
  );
}

export default App;
```

# React.Memo

- 불필요한 리랜더링을 막아줌
- props 가 전달되면 리랜더링이 일어남
- 이를 최적화함

## 1. 문제점

- 리액트 변수, 즉 `useState 에 의해서 값이 변해서 리랜더링 됨` 은 정상
- 그러나 `리랜더링에서 제외되어야 하는 컴포넌트`를 설정할 필요성이 있음

## 2. 해결

```jsx
import React, { useCallback, useState } from "react";
import Child from "./Child";

function App() {
  console.log("App : 리랜더링");
  // js 자리
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // jsx 자리
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>함수 실행</button>
      <Child />
    </div>
  );
}

export default App;
```

- React.memo 적용

```jsx
import React, { memo } from "react";

function Child() {
  // js 자리
  console.log("Child : 리랜더링");
  // jsx 자리
  return <div>Child</div>;
}

export default memo(Child);
```
