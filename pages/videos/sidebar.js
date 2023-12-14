import React from 'react';
import styles from '../../styles/Sidebar.module.css';

import {
	FaGear,
	FaGamepad,
	FaClapperboard,
	FaBookmark,
	FaChess,
} from 'react-icons/fa6';
import { FcClapperboard } from 'react-icons/fc';
import { IoMdVideocam, IoIosRocket } from 'react-icons/io';

function VideosSideBar() {
	return (
		<div className={styles.sideBarContainer}>
			<div className={styles.sideBarHeader}>
				<h2>Video</h2>
				<div className={styles.greyBackgroundIcons}>
					<FaGear />
				</div>
			</div>
			<input
				type="text"
				placeholder="Search videos"
				className={styles.searchBar}
			/>

			<div className={styles.sideBarListItem}>
				<div className={styles.greyBackgroundIconsActive}>
					<FaGamepad size={20} color="white" />
				</div>
				<h4>Home</h4>
			</div>
			<div className={styles.sideBarListItem}>
				<div className={styles.greyBackgroundIcons}>
					<IoMdVideocam size={20} color="black" />
				</div>
				<h4>Live</h4>
			</div>
			<div className={styles.sideBarListItem}>
				<div className={styles.greyBackgroundIcons}>
					<FaClapperboard size={20} color="black" />
				</div>
				<h4>Reels</h4>
			</div>
			<div className={styles.sideBarListItem}>
				<div className={styles.greyBackgroundIcons}>
					<FcClapperboard size={20} color="black" />
				</div>
				<h4>Shows</h4>
			</div>
			<div className={styles.sideBarListItem}>
				<div className={styles.greyBackgroundIcons}>
					<IoIosRocket size={20} color="black" />
				</div>
				<h4>Explore</h4>
			</div>
			<div className={styles.sideBarListItem}>
				<div className={styles.greyBackgroundIcons}>
					<FaBookmark size={20} color="black" />
				</div>
				<h4>Saved Videos</h4>
			</div>
		</div>
	);
}

export default VideosSideBar;
