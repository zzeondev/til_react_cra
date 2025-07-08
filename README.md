# useState

- 리액트에서 변수를 만드는 법
- `변수의 값이 변하면 웹브라우저의 화면도 변한다.`

```jsx
const [변수명, set변수명] = useState(초기값);
```

## 1. 일반 js 라면

- 화면에 초기 값만 보이고, `변화가 없다.`

```js
import React from "react";

function Test() {
  // js 자리
  let count = 0; // js 변수
  const add = () => {
    count = count + 1;
    console.log(count);
  };

  // jsx 자리
  return (
    <div>
      <button onClick={add}>함수실행</button>
      <p>count : {count} </p>
    </div>
  );
}

export default Test;
```

## 2. 리액트 변수라면

- 값이 set 으로 변하면 화면도 새로 그린다. (리랜더링)

```js
import React, { useState } from "react";

function Test() {
  // js 자리
  const [count, setCount] = useState(0); // 리액트 변수
  const add = () => {
    setCount(count + 1);
    console.log(count);
  };

  // jsx 자리
  return (
    <div>
      <button onClick={add}>함수실행</button>
      <p>count : {count} </p>
    </div>
  );
}

export default Test;
```

## 3. 다양한 예제

```jsx
import React, { useState } from "react";

function Test() {
  // js 자리
  const [userName, setUserName] = useState(""); // 리액트 변수
  const handleChange = e => {
    //setUserName(e.target.value);
  };
  const handleKeyUp = e => {
    if (e.key === "Enter") {
      const txt = e.target.value;
      // 추후 yup 라이브러리 사용해 보자
      if (!txt) {
        alert("이름을 한자 이상 입력하셔야 합니다.");
        return;
      }
      setUserName(txt);
    }
  };
  // jsx 자리
  return (
    <div>
      <h1>사용자 이름을 입력하면 이름 출력하기</h1>
      <input
        type="text"
        onChange={e => handleChange(e)}
        onKeyUp={e => handleKeyUp(e)}
        placeholder="이름을 입력하세요."
      />
      <h2>안녕하세요. {userName}님 반가워요^^</h2>
    </div>
  );
}

export default Test;
```

```jsx
import React, { useState } from "react";

function Test() {
  // js 자리
  const [agree, setAgree] = useState(false); // 리액트 변수
  const handleChange = e => {
    // console.log(e.target);
    // console.log(e.target.value);
    setAgree(e.target.checked);
  };

  // jsx 자리
  return (
    <div>
      <label>
        <input type="checkbox" onChange={e => handleChange(e)} />
        약관에 동의 합니다.
      </label>
      <p>{agree ? "동의합니다." : "동의가 필요합니다."}</p>
    </div>
  );
}

export default Test;
```

```jsx
import React, { useState } from "react";

function Test() {
  // js 자리
  const [todoList, setTodoList] = useState([]);
  const handleClick = () => {
    const temp = "할일이지요";
    setTodoList([...todoList, temp]);
  };
  // jsx 자리
  return (
    <div>
      <input type="text" />
      <button onClick={handleClick}>목록추가</button>
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Test;
```
