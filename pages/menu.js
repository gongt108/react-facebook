import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Menu.module.css';
function Menu() {
	return (
		<div className={styles.navContainer}>
			<div>
				<Link href="/">
					<Image src="/facebook-icon.png" width="50" height="50"></Image>
				</Link>
				<input type="text" placeholder="Search Facebook" />
			</div>

			<div>
				<Link href="/messages">
					<Image src="/messages.png" width="50" height="50"></Image>
				</Link>
				<Link href="/notifications">
					<Image src="/notification.png" width="50" height="50"></Image>
				</Link>
			</div>
		</div>
	);
}

export default Menu;
