import { Link } from 'react-router-dom';

import styles from './PhotoBlock.module.scss';

export const PhotoBlock = () => {
	return (
		<div className={styles.block}>
			<h1
				className={styles.blockTitle}
				data-aos='zoom-in'
				data-aos-duration='2000'
				data-aos-once='true'
			>
				Фото со
				<br />
				свадьбы
			</h1>
			<div className={styles.blockText}>
				<p
					className={styles.blockText__item}
					data-aos='fade-right'
					data-aos-duration='1500'
					data-aos-once='true'
				>
					После свадьбы мы опубликуем
					<br />
					фотографии, сделанные в день
					<br />
					торжества.
				</p>
				<p
					className={styles.blockText__item}
					data-aos='fade-left'
					data-aos-duration='1500'
					data-aos-once='true'
				>
					Вы сможете посмотреть их,
					<br />
					нажав на кнопку ниже.
				</p>
			</div>
			<Link
				to='https://t.me/+Swk3_w7dgwg3ZTNi'
				target='_blanc'
				className={styles.blockBtn}
				data-aos='zoom-out-up'
				data-aos-duration='1500'
				data-aos-once='true'
			>
				СМОТРЕТЬ ФОТО
			</Link>
		</div>
	);
};
