interface LoadMoreBtnInterface {
  onClick: () => void;
  disabled?: boolean;
}

const LoadMoreBtn: React.FC<LoadMoreBtnInterface> = ({ onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
