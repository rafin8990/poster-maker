// const downloadButton = document.getElementById("btn-download");
// downloadButton.addEventListener("click", () => {
//   const divToDownload = document.getElementById("download-content");

//   const computedStyle = window.getComputedStyle(divToDownload);
//   const width = parseInt(computedStyle.getPropertyValue("width"));
//   const height = parseInt(computedStyle.getPropertyValue("height"));
//   const canvas = document.createElement("canvas");

//   canvas.width = width;
//   canvas.height = height;
//   const context = canvas.getContext("2d");

//   // Draw the contents of the div on the canvas
//   const imageData = new Image();
//   const svgData = new XMLSerializer().serializeToString(divToDownload);
//   const svgBlob = new Blob([svgData], { type: "image/svg+xml" });
//   const url = URL.createObjectURL(svgBlob);

//   imageData.onload = function () {
//     context.drawImage(imageData, 0, 0, width, height);

//     // Convert canvas data to PNG and create a File object
//     canvas.toBlob(function (blob) {
//       const file = new File([blob], "Poster.png", { type: "image/png" });

//       // Create a download link for the PNG image
//       const downloadLink = document.createElement("a");
//       downloadLink.href = URL.createObjectURL(file);
//       downloadLink.download = "Poster.png";

//       // Trigger the download
//       downloadLink.click();

//       // Release the object URLs
//       URL.revokeObjectURL(url);
//       URL.revokeObjectURL(downloadLink.href);
//     }, "image/png");
//   };
//   console.log("clicked");
//   imageData.src = url;
// });
