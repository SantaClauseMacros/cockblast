const uploadButton = document.getElementById('uploadButton');
const solutionDiv = document.getElementById('solution');
const solutionText = document.getElementById('solutionText');

uploadButton.addEventListener('click', async () => {
  const fileInput = document.getElementById('imageUpload');
  const file = fileInput.files[0];

  if (!file) {
    alert("Please upload an image!");
    return;
  }

  // Display loading message
  solutionDiv.hidden = false;
  solutionText.textContent = "Analyzing...";

  // Send the image to the backend
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch('/.netlify/functions/solver', {
    method: 'POST',
    body: formData,
  });

  if (response.ok) {
    const result = await response.json();
    solutionText.textContent = result.solution;
  } else {
    solutionText.textContent = "Error: Could not analyze the image.";
  }
});
