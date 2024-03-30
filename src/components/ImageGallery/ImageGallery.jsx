import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
	return (
		<ul className={styles.imageGallery}>
			{images.map((image) => {
				return (
					<li className={styles.imageGalleryItem} key={image.id}>
						<ImageCard image={image} openModal={openModal} />
					</li>
				);
			})}
		</ul>
	);
};

export default ImageGallery;
