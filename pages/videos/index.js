import React from 'react';
import styles from '../../styles/Videos.module.css';
import Sidebar from './sidebar';
import { BsHandThumbsUp } from 'react-icons/bs';
import { FaUser, FaGlobe, FaThumbsUp } from 'react-icons/fa6';
import { IoChatbubbleOutline } from 'react-icons/io5';
import { LuPlayCircle } from 'react-icons/lu';
import { PiShareFatLight } from 'react-icons/pi';
import { FaFaceLaughSquint } from 'react-icons/fa6';

function Videos() {
	return (
		<div className={styles.videosContainer}>
			<Sidebar />
			<div className={styles.videoBodyContainer}>
				<div className={styles.newVideosForYouSection}>
					<h3>New Videos for You • 3</h3>
					<div className={styles.newVideos}>
						<div className={styles.newVideosForYou}>
							<LuPlayCircle size={50} />
							<div className={styles.newVideosForYouDetails}>
								<p>New video from KevOnStage</p>
								<div className={styles.timePosted}>• 4 hours ago</div>
							</div>
						</div>
						<div className={styles.newVideosForYou}>
							<LuPlayCircle size={50} />
							<div className={styles.newVideosForYouDetails}>
								<p>Video shared by friends</p>
								<div className={styles.timePosted}>• 4 hours ago</div>
							</div>
						</div>
						<div className={styles.newVideosForYou}>
							<LuPlayCircle size={50} />
							<div className={styles.newVideosForYouDetails}>
								<p>Video suggested for you</p>
								<div className={styles.timePosted}>• 4 hours ago</div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.currentVideo}>
					<div className={styles.videoDetails}>
						<div className={styles.videoDetailsTop}>
							<FaUser size={30} />
							<div className={styles.userDetails}>
								<h5>Kountry Wane</h5>
								<div className={styles.postDate}>
									<p>October 30</p>
									<FaGlobe size={14} />
								</div>
							</div>
						</div>
						<div className={styles.videoDetailsBottom}>
							<h4>Pokemon Play Through of Violet and Scarlet</h4>
							<p>Play through of the seventh gen</p>
						</div>
						<div className={styles.video}></div>
						<div className={styles.userInteractions}>
							<div className={styles.reactionButtonSection}>
								<div className={styles.reactionButton}>
									<BsHandThumbsUp />
									<p>Like</p>
								</div>
								<div className={styles.reactionButton}>
									<IoChatbubbleOutline />
									<p>Comment</p>
								</div>
								<div className={styles.reactionButton}>
									<PiShareFatLight />
									<p>Share</p>
								</div>
							</div>
							<div className={styles.reactionStats}>
								<FaFaceLaughSquint className={styles.emojiTop} />
								<FaThumbsUp
									className={styles.emojiBottom}
									color="white"
									size={11}
								/>
								<p>44K • 8.5K comments • 1.1M views</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Videos;
