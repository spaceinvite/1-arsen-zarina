import styles from './LocationBlock.module.scss';

export const LocationBlock = () => {
	return (
		<div className={styles.block}>
			<h1
				className={styles.blockTitle}
				data-aos='zoom-in'
				data-aos-duration='2000'
				data-aos-once='true'
			>
				Место
				<br />
				проведения
			</h1>
			<div className={styles.blockContent}>
				<p
					className={styles.blockContent__text}
					data-aos='fade-right'
					data-aos-duration='1500'
					data-aos-once='true'
				>
					Наш праздник пройдёт
					<br />
					по адресу:
				</p>
				<p
					className={styles.blockContent__text}
					data-aos='fade-left'
					data-aos-duration='1500'
					data-aos-once='true'
				>
					с. Терекли-Мектеб
					<br />
					б/з «Алмаз»
				</p>
				<p
					className={styles.blockContent__time}
					data-aos='zoom-out-up'
					data-aos-duration='2000'
					data-aos-once='true'
				>
					18:00
				</p>
			</div>
		</div>
	);
};
