const downloadButton = document.getElementById("btn-download");
downloadButton.addEventListener("click", () => {
  const pageContent = document.getElementById("download-content");

  const canvas = document.createElement("canvas");
  canvas.width = pageContent.scrollWidth;
  canvas.height = pageContent.scrollHeight;
  const context = canvas.getContext("2d");

  // Draw the contents of the div on the canvas
  //   const imageData = new Image();
  const img = document.getElementById("img");
  const svgData = new XMLSerializer().serializeToString(pageContent);
  const svgBlob = new Blob([svgData], {
    type: "data:image/svg+xml;charset=utf-8",
  });
  const url = URL.createObjectURL(svgBlob);
  img.src = url;
  console.log(url);
  context.drawImage(img, 0, 0, canvas.width, canvas.height);

  canvas.toBlob(function (blob) {
    const file = new File([blob], "Poster.png", { type: "image/png" });
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(file);
    downloadLink.download = "Poster.png";
    downloadLink.click();
  }, "image/png");
});
