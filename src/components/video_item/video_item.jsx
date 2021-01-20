import React from "react";
import styles from "./video_item.module.css";
const VideoItem = ({ video: { snippet } }) => {
  return (
    <li className={styles.video}>
      <a href="#">
        <img
          className={styles.thumbnails}
          src={snippet.thumbnails.medium.url}
        />
        <div className={styles.titleArea}>
          <strong className={styles.title}>{snippet.title}</strong>
          <p className={styles.channelTitle}>{snippet.channelTitle}</p>
        </div>
      </a>
    </li>
  );
};
export default VideoItem;
