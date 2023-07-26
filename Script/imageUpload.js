const dropZone = document.getElementById("dropZone");
const imageInput = document.getElementById("imageInput");
const imagePreviewContainer = document.getElementById("imagePreviewContainer");
const imagePreview = document.getElementById("imagePreview");
const uploadBtn = document.getElementById("uploadBtn");

dropZone.addEventListener("dragover", (event) => {
  event.preventDefault();
  dropZone.classList.add("border-blue-500");
});

dropZone.addEventListener("dragleave", () => {
  dropZone.classList.remove("border-blue-500");
});

dropZone.addEventListener("drop", (event) => {
  event.preventDefault();
  dropZone.classList.remove("border-blue-500");
  const file = event.dataTransfer.files[0];
  handleFileUpload(file);
});

imageInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  handleFileUpload(file);
});

function handleFileUpload(file) {
  if (file) {
    const reader = new FileReader();

    // Check file type and size
    if (/\.(jpe?g|png|gif|svg)$/i.test(file.name) && file.size <= 800 * 400) {
      reader.onload = function () {
        imagePreview.src = reader.result;
        imagePreviewContainer.classList.remove("hidden");
        uploadBtn.disabled = false;
      };
      reader.readAsDataURL(file);
    } else {
      alert(
        "Invalid file format or size. Supported formats: SVG, JPG, PNG, GIF. Max size: 800x400 px."
      );
    }
  }
}
