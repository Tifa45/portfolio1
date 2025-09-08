function MyButton({ text, text2, isDisabled, type, styles }) {
  return (
    <button type={type} className={`my-button ${styles}`} disabled={isDisabled}>
      <span className="my-button-content">{isDisabled ? text2 : text}</span>
    </button>
  );
}

export default MyButton;
