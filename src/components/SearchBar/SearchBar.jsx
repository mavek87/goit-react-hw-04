import toast, { Toaster } from "react-hot-toast";
import styles from "./SearchBar.module.css";

const SearchBar = ({ searchImages }) => {
	const onSearch = (e) => {
		e.preventDefault();
		const query = e.target.query.value;
		if (query.trim() === "") {
			toast("Search field cannot be empty", { icon: "❗️" });
		} else {
			searchImages(query);
		}
	};

	return (
		<header className={styles.header}>
			<form className={styles.headerForm} onSubmit={onSearch}>
				<input
					className={styles.headerInput}
					name="query"
					type="text"
					autoComplete="off"
					autoFocus
					placeholder="Search images and photos"
				/>
				<button className={styles.headerButton} type="submit">
					🔎
				</button>
			</form>
			<Toaster position="top-right" />
		</header>
	);
};

export default SearchBar;
