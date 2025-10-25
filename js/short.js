function goHome() {
  location.href = "../index.html";
}

function goBack() {
  if (document.referrer !== "") {
    history.back();
  } else {
    location.href = "../index.html";
  }
}

// 🔹 當點擊圖片時，切換成影片並播放
function playVideo(imgElement, videoSrc) {
  const container = imgElement.parentElement; // 找到圖片所在的父容器
  // const container = imgElement.Element; // 找到圖片所在的容器
  const video = document.createElement("video");

  video.src = videoSrc;
  video.controls = true;
  video.autoplay = true;
  video.style.borderRadius = "12px";
  video.style.width = "100%";

  container.replaceChild(video, imgElement); // 用影片取代圖片
}