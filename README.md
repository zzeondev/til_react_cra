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
// 할일 목록 추가
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

```jsx
// 할일 목록 추가
import React, { useState } from "react";

function Test() {
  // js 자리
  // 입력중인 할일
  const [todo, setTodo] = useState("");
  // 전체 목록
  const [todoList, setTodoList] = useState([]);

  const handleClick = () => {
    if (todo === "") {
      return;
    }
    setTodoList([...todoList, todo]);
    setTodo("");
  };

  const handleChange = e => {
    // console.log(e.target); // 태그가 들어옴
    setTodo(e.target.value);
  };
  const handleKeyup = e => {
    if (e.key === "Enter") {
      if (todo === "") {
        return;
      }
      setTodoList([...todoList, todo]);
      setTodo("");
    }
  };
  // jsx 자리
  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={e => handleChange(e)}
        onKeyUp={e => handleKeyup(e)}
      />
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

```jsx
// 다크모드 변경
import React, { useState } from "react";
import { MdHeight, MdPadding } from "react-icons/md";
import { TbBackground } from "react-icons/tb";

function Test() {
  // js

  const [dark, setDark] = useState(false);
  const handleClick = () => {
    setDark(!dark);
  };

  const AppStyle = {
    width: "100%",
    height: "100%",
    minHeight: "100vh",
    padding: "20px",
    color: dark ? "#fff" : "#000",
    background: dark ? "#000" : "#fff",
  };
  // jsx
  return (
    <div style={AppStyle}>
      <button onClick={handleClick}>
        {dark ? "화이트 모드로 변경" : "다크모드로 변경"}
      </button>
      <h1>{dark ? "현재 다크모드 입니다." : "현재 화이트 모드입니다."}</h1>
    </div>
  );
}

export default Test;
```

```jsx
// 장바구니
import React, { useState } from "react";

function Test() {
  // js
  const [cart, setCart] = useState([]);
  const handleCartAdd = good => {
    setCart([...cart, good]);
  };
  // jsx
  return (
    <div>
      <h2>장바구니</h2>
      <button onClick={() => handleCartAdd("딸기")}>딸기</button>
      <button onClick={() => handleCartAdd("사과")}>사과</button>
      <button onClick={() => handleCartAdd("바나나")}>바나나</button>
      <button onClick={() => handleCartAdd("복숭아")}>복숭아</button>
      <div>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Test;
```

## 4. 실전예제

### 4.1. 회원가입

- 기본 코드

```jsx
import React, { useState } from "react";

function Test() {
  // js 자리

  // 변수 관리
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    id: "",
    email: "",
    pw: "",
  });

  // 이벤트 처리함수
  const handleUserId = e => {
    setUserId(e.target.value);
  };
  const handleUserEmail = e => {
    setUserEmail(e.target.value);
  };
  const handleUserPassword = e => {
    setUserPassword(e.target.value);
  };

  const handleSubmit = e => {
    // 웹브라우저 새로 고침 방지
    e.preventDefault();
    if (userId === "") {
      setErrorMessage("아이디를 입력하세요.");
      return;
    }
    if (userEmail === "") {
      setErrorMessage("이메일을 입력하세요.");
      return;
    }
    if (userPassword === "") {
      setErrorMessage("비밀번호를 입력하세요.");
      return;
    }
    console.log("백엔드로 데이터 보내요~");
    console.log(`${userId} ${userEmail} ${userPassword}`);
    // 쿼리 스트링으로 보내기
    console.log(`/login/?id=${userId}&email=${userEmail}&pw=${userPassword}`);

    // 객체로 보내기
    setFormData({ id: userId, email: userEmail, pw: userPassword });
    setErrorMessage("");
  };

  // jsx 자리
  return (
    <div>
      <h1>회원로그인</h1>
      <div>
        <form onSubmit={e => handleSubmit(e)}>
          <input
            type="text"
            value={userId}
            placeholder="아이디를 입력하세요."
            onChange={e => handleUserId(e)}
          />
          <br />
          <input
            type="email"
            value={userEmail}
            placeholder="이메일을 입력하세요"
            onChange={e => handleUserEmail(e)}
          />
          <br />
          <input
            type="password"
            value={userPassword}
            placeholder="비밀번호를 입력하세요."
            onChange={e => handleUserPassword(e)}
          />
          <br />
          <button type="submit">로그인</button>
        </form>

        <div style={{ color: "red" }}>{errorMessage}</div>
      </div>
    </div>
  );
}

export default Test;
```

- 각 입력 항목을 컴포넌트화 한다.
- 각 컴포넌트의 요소를 `emotion`으로 스타일링 한다.
- 컴포넌트를 재활용하여 보자.
- src/components/form 폴더 만들기
- Input.jsx 파일 생성(rfce)

### 4.2. 기능 개선 이전 버전

```jsx
// /src/pages/Test.jsx

import React, { useState } from "react";

import LoginForm from "../components/form/LoginForm";

function Test() {
  // js 자리

  // 변수 관리
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    id: "",
    email: "",
    pw: "",
  });

  // 이벤트 처리함수
  const handleUserId = e => {
    setUserId(e.target.value);
  };
  const handleUserEmail = e => {
    setUserEmail(e.target.value);
  };
  const handleUserPassword = e => {
    setUserPassword(e.target.value);
  };

  const handleSubmit = e => {
    // 웹브라우저 새로 고침 방지
    e.preventDefault();
    if (userId === "") {
      setErrorMessage("아이디를 입력하세요.");
      return;
    }
    if (userEmail === "") {
      setErrorMessage("이메일을 입력하세요.");
      return;
    }
    if (userPassword === "") {
      setErrorMessage("비밀번호를 입력하세요.");
      return;
    }
    console.log("백엔드로 데이터 보내요~");
    console.log(`${userId} ${userEmail} ${userPassword}`);
    // 쿼리 스트링으로 보내기
    console.log(`/login/?id=${userId}&email=${userEmail}&pw=${userPassword}`);

    // 객체로 보내기
    setFormData({ id: userId, email: userEmail, pw: userPassword });
    setErrorMessage("");
  };

  // jsx 자리
  return (
    <div>
      <h1>회원로그인</h1>
      <LoginForm
        userId={userId}
        setUserId={setUserId}
        userEmail={userEmail}
        setUserEmail={setUserEmail}
        userPassword={userPassword}
        setUserPassword={setUserPassword}
        formData={formData}
        setFormData={setFormData}
        errorMessage={errorMessage}
        handleUserId={handleUserId}
        handleUserEmail={handleUserEmail}
        handleUserPassword={handleUserPassword}
        handleSubmit={handleSubmit}
      ></LoginForm>
    </div>
  );
}

export default Test;
```

```jsx
// /src/components/form/LoginForm.jsx

import styled from "@emotion/styled";
import React from "react";
import InputField from "./InputField";

function LoginForm({
  userId,
  setUserId,
  userEmail,
  setUserEmail,
  userPassword,
  setUserPassword,
  formData,
  setFormData,
  errorMessage,
  handleUserId,
  handleUserEmail,
  handleUserPassword,
  handleSubmit,
}) {
  // js 자리
  const FormContainer = styled.div`
    width: 100%;
    padding: 25px;
    max-width: 800px;
    margin: 30px auto;
    border-radius: 16px;
    background-color: #fafafa;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  `;

  const ErrorText = styled.div`
    color: #f00;
    margin-top: 10px;
    font-size: 12px;
  `;
  const SubmitButton = styled.button`
    width: 100%;
    padding: 15px;
    max-width: 100px;
    margin: 30px auto;
    display: block;
    border-radius: 15px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 12px;
    &:hover {
      background-color: #0056b3;
    }
  `;

  // jsx 자리
  return (
    <FormContainer>
      <form onSubmit={e => handleSubmit(e)}>
        <InputField
          label="아이디"
          type="text"
          value={userId}
          placeholder="아이디를 입력하세요."
          onChange={e => handleUserId(e)}
        />
        <InputField
          label="이메일"
          type="email"
          value={userEmail}
          placeholder="이메일을 입력하세요"
          onChange={e => handleUserEmail(e)}
        />
        <InputField
          label="비밀번호"
          type="password"
          value={userPassword}
          placeholder="비밀번호를 입력하세요."
          onChange={e => handleUserPassword(e)}
        />

        <SubmitButton type="submit">로그인</SubmitButton>
      </form>

      <ErrorText>{errorMessage}</ErrorText>
    </FormContainer>
  );
}

export default LoginForm;
```

```jsx
// /src/components/form/InputFiled.jsx

import styled from "@emotion/styled";
import React from "react";

function InputField({ label, type, value, placeholder, onChange }) {
  // js 자리

  const StyledInput = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 14px;
    &:focus {
      outline: none;
      border: 1px solid #007bff;
    }
  `;
  const StyledLabel = styled.label`
    font-size: 12px;
    display: block;
    padding-left: 10px;
    color: #333;
    font-weight: 600;
    white-space: nowrap;
    min-width: 50px;
  `;
  const InputGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  `;

  // jsx 자리
  return (
    <InputGroup>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={e => onChange(e)}
      />
    </InputGroup>
  );
}

export default InputField;
```

### 4.3. 기능 개선 버전

- useState 가 너무 많습니다. (props가 너무 많다.)
- 알아야 하는 문법

```js
[...arr, 요소];

{...obj, [속성명]:속성값}

const {name,value} = e.target;
{...obj, [name]:value}
```

```jsx
// Test.jsx
import React, { useState } from "react";
import LoginForm from "../components/form/LoginForm";

function Test() {
  // js 자리
  const [errorMessage, setErrorMessage] = useState("");
  // 모든 데이터가 모여지는 변수다
  const [formData, setFormData] = useState({
    user_id: "",
    user_email: "",
    user_pw: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    // 웹브라우저 새로 고침 방지
    e.preventDefault();
    if (formData.user_id === "") {
      setErrorMessage("아이디를 입력하세요.");
      return;
    }
    if (formData.user_email === "") {
      setErrorMessage("이메일을 입력하세요.");
      return;
    }
    if (formData.user_pw === "") {
      setErrorMessage("비밀번호를 입력하세요.");
      return;
    }
    console.log("백엔드로 데이터 보내요~");
    // 쿼리 스트링으로 보내기
    console.log(
      `/login/?id=${formData.user_id}&email=${formData.user_email}&pw=${formData.user_pw}`,
    );

    // 객체로 보내기
    const data = { ...formData };
    setErrorMessage("");
  };

  // jsx 자리
  return (
    <div>
      <h1>회원로그인</h1>
      <LoginForm
        formData={formData}
        errorMessage={errorMessage}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default Test;
```

```jsx
// LoginForm.jsx
import styled from "@emotion/styled";
import React from "react";
import InputField from "./InputField";

// 전역 자리
const FormContainer = styled.div`
  width: 100%;
  padding: 25px;
  max-width: 800px;
  margin: 30px auto;
  border-radius: 16px;
  background-color: #fafafa;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const ErrorText = styled.div`
  color: #f00;
  margin-top: 10px;
  font-size: 12px;
`;
const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  max-width: 100px;
  margin: 30px auto;
  display: block;
  border-radius: 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 12px;
  &:hover {
    background-color: #0056b3;
  }
`;

function LoginForm({ formData, errorMessage, handleChange, handleSubmit }) {
  // js 자리

  // jsx 자리
  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <InputField
          label="아이디"
          type="text"
          name="user_id"
          id="user_id"
          value={formData.user_id}
          placeholder="아이디를 입력하세요."
          onChange={handleChange}
        />
        <InputField
          label="이메일"
          type="email"
          name="user_email"
          id="user_email"
          value={formData.user_email}
          placeholder="이메일을 입력하세요"
          onChange={handleChange}
        />
        <InputField
          label="비밀번호"
          type="password"
          name="user_pw"
          id="user_pw"
          value={formData.user_pw}
          placeholder="비밀번호를 입력하세요."
          onChange={handleChange}
        />

        <SubmitButton type="submit">로그인</SubmitButton>
      </form>

      <ErrorText>{errorMessage}</ErrorText>
    </FormContainer>
  );
}

export default LoginForm;
```

```jsx
// InputField.jsx
import styled from "@emotion/styled";
import React from "react";

// 전역 자리
const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;

  &:focus {
    outline: none;
    border: 1px solid #007bff;
  }
`;
const StyledLabel = styled.label`
  font-size: 12px;
  display: block;
  padding-left: 10px;
  color: #333;
  font-weight: 600;
  white-space: nowrap;
  min-width: 50px;
`;
const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

function InputField({ label, type, name, id, value, placeholder, onChange }) {
  // js 자리

  // jsx 자리
  return (
    <InputGroup>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        type={type}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </InputGroup>
  );
}

export default InputField;
```
