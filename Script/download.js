const imageContent = document.getElementById("download-content");
html2canvas(document.getElementById(imageContent)).then(function (canvas) {
  let downloadableContent = document.querySelector("canvas");
  let downloadDocs = document.getElementById("btn-download");
  downloadDocs.href = downloadableContent.toDataUrl("image/jpeg");
  downloadDocs.download = "poster.png";
});
