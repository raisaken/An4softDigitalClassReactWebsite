import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { BsYoutube } from "react-icons/bs";
import "./VideoModelPreview.css";

function VideoModelPreview() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="pkhE14Rou-E"
        onClose={() => setOpen(false)}
      />
      <BsYoutube
        className="btn-primary PreviewVideoModel"
        onClick={() => setOpen(true)}
      />
    </>
  );
}

export default VideoModelPreview;
