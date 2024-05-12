import styles from './DesktopView.module.scss';

export const DesktopView = () => {
	return (
		<div className={styles.desktop}>
			<div className={styles.desktopBlock}>
				<p className={styles.desktopBlock__line}>_________________</p>
				<p className={styles.desktopBlock__text_first}>
					Данная страница отображается только на смартфонах в вертикальной
					ориентации
				</p>
				<p className={styles.desktopBlock__text_second}>
					Для просмотра приглашения
				</p>
				<p className={styles.desktopBlock__text_third}>
					Отсканируйте QR-код при помощи камеры Вашего телефона
				</p>
				<div className={styles.desktopBlock__qr}></div>
			</div>
		</div>
	);
};
