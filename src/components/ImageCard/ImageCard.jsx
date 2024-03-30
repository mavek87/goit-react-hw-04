import styles from "./ImageCard.module.css";

const ImageCard = ({
	image: {
		id,
		alt_description,
		urls: { small },
	},
	openModal,
}) => {
	return (
		<div>
			<img
				className={styles.imageCard}
				onClick={() => {
					openModal(id);
				}}
				src={small}
				alt={alt_description}
				width="350"
				height="250"
			/>
		</div>
	);
};

export default ImageCard;
