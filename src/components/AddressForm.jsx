import useInput from "../hooks/useInput";

function AddressForm() {
  const address = useInput();
  const handleSubmit = () => {
    alert(address.value);
    address.reset();
  };
  return (
    <div>
      <h2>AddressForm</h2>
      <input type="text" placeholder="주소를 입력하세요." {...address} />
      {/* <input
        type="text"
        placeholder="주소를 입력하세요."
        value={address.value}
        onChange={address.onChange}
      /> */}
      <button onClick={handleSubmit}>확인</button>
    </div>
  );
}

export default AddressForm;
