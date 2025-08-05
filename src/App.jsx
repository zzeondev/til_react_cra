import AddressForm from "./components/AddressForm";
import CounterSample from "./components/CounterSample";
import NickNameForm from "./components/NickNameForm";
import useBoolean from "./hooks/useBoolean";
import useMessage from "./hooks/useMessage";
import { useTitle } from "./hooks/useTitle";
import useWindowSize from "./hooks/useWindowSize";

function App() {
  // js 자리
  useTitle("첫화면");
  const { value, toggle, setTrue, setFalse } = useBoolean();
  const showMessage = useMessage();
  const { width, height } = useWindowSize();

  // jsx 자리
  return (
    <div>
      <div>
        <CounterSample />
      </div>
      <br />
      <div>
        <h2>테마적용 {value ? "Black" : "white"}</h2>
        <button onClick={toggle}>태마토글</button>
        <button onClick={setTrue}>태마적용</button>
        <button onClick={setFalse}>태마해제</button>
      </div>
      <div>
        <button onClick={() => showMessage("반가워요")}>메시지 출력하기</button>
      </div>
      <br />
      <div>
        <h2>화면 너비 : {width}</h2>
        <h2>화면 높이 : {height}</h2>
      </div>
      <br />
      <div>
        <h2>입력창 처리</h2>
        <NickNameForm />
        <AddressForm />
      </div>
    </div>
  );
}

export default App;
