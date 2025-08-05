import useInput from "../hooks/useInput";

function NickNameForm() {
  const name = useInput();
  const handleSubmit = () => {
    alert(name.value);
    name.reset();
  };
  return (
    <div>
      <h2>NickNameForm</h2>
      <input type="text" placeholder="이름을 입력하세요." {...name} />
      <button onClick={handleSubmit}>확인</button>
    </div>
  );
}

export default NickNameForm;
