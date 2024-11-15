import { useState } from "react";
import Icon from "../icon/icon";
import Modal from "../Modal/modal";
import VideoPlayer from "../VideoPlayer/videoplayer";





const Play = ({ className, classIcon }) => {
    const [visibleModal, setVisibleModal] = useState(false);

    return (
        <>
            <button
                className={`group bg-n-1 rounded-full text-0 dark:bg-n-6 ${
                    className || ""
                }`}
                onClick={() => setVisibleModal(true)}
            >
                <Icon
                    className={`w-6 h-6 fill-n-5 transition-colors group-hover:fill-primary-4 dark:fill-n-1 ${classIcon}`}
                    name="play"
                />
            </button>
            <Modal
                classWrap=""
                classButtonClose="top-4 right-4 bg-n-1 dark:bg-n-6"
                visible={visibleModal}
                onClose={() => setVisibleModal(false)}
                videoPlayer
            >
                <VideoPlayer image="/images/video-player.jpg" />
            </Modal>
        </>
    );
};

export default Play;
