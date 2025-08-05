export default function useMessage() {
  const showMessage = text => {
    alert(text);
  };
  return showMessage;
}
