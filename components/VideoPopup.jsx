"use client";

import React, { useState } from "react";
import "./VideoPopup.css";
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";

const VideoPopup = () => {
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  const openModal = () => {
    setModal(!modal);
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  let position;
  let direction = "rtl"
  let text = "شاهد الآن"
  let color1 = "#31e99c"
  let color2 = "#ff2075"
  if (direction === "rtl") {
    position = "left: 50px";
  } else {
    position = "right: 50px";
  }

  const css = `
  #btn2 {
    background-color: ${color1};
    border-color: ${color1};
  }
  #btn2:hover {
    background-color: ${color2};
    border-color: ${color2};
  }
`;

  return (
    <div className="py-2 px-5 inline-block me-2">
      <style>{css}</style>
      <button onClick={openModal}>
        <span
          id="btn2"
          className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center text-white rounded-full lightbox  me-2"
        >
          <i className="mdi mdi-play text-xl align-middle"></i>
        </span>
        {text}
        {modal ? (
          <section className="modal__bg">
            <div className="modal__align">
              <div className="modal__content" modal={modal}>
                <IoCloseOutline
                  className="modal__close"
                  arial-label="Close modal"
                  onClick={setModal}
                  dir={direction}
                />
                <div className="modal__video-align">
                  {videoLoading ? (
                    <div className="modal__spinner">
                      <BiLoaderAlt
                        className="modal__spinner-style"
                        fadeIn="none"
                      />
                    </div>
                  ) : null}
                  <iframe
                    className="modal__video-style"
                    onLoad={spinner}
                    loading="lazy"
                    width="800"
                    height="500"
                    src={`https://www.youtube.com/watch?v=0uiIbTBm7Jk`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </button>
    </div>
  );
};

export default VideoPopup;
