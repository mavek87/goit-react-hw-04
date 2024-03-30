import styles from "./LoadMoreBtn.module.css";
import { forwardRef } from "react";

const LoadMoreBtn = forwardRef(function LoadMoreBtn({ loadMore }, ref) {
  return (
    <button
      ref={ref}
      className={styles.loadMoreButton}
      type="button"
      onClick={() => loadMore()}
    >
      Load more
    </button>
  );
});

export default LoadMoreBtn;
