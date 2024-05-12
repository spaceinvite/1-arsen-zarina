import styles from './EndBlock.module.scss';

export const EndBlock = () => {
	return (
		<div className={styles.block}>
			<div
				className={styles.blockText}
				data-aos='fade-right'
				data-aos-duration='1500'
				data-aos-once='true'
			>
				Будем рады видеть Вас
				<br />
				на нашем празднике!
			</div>
			<div
				className={styles.blockNames}
				data-aos='zoom-out'
				data-aos-duration='2200'
				data-aos-once='true'
			>
				Арсен и<br />
				Зарина
			</div>
		</div>
	);
};
