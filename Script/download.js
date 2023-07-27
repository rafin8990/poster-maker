document.getElementById("btn-download").addEventListener("click", () => {
  const imageContent = document.getElementById("download-content");
  const anchorTag = document.createElement("a");
  html2canvas(imageContent).then((canvas) => {
    const imageUrl = canvas.toDataURL("image/png");
    anchorTag.setAttribute("href", imageUrl);
    anchorTag.setAttribute("download", "posterImage.png");
    anchorTag.click();
    anchorTag.remove();
  });
});
