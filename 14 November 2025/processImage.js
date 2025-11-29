// Fake images array
const images = [
  { name: "img1.jpg" },
  { name: "img2.jpg" },
  { name: "img3.jpg" }
]; // array of image objects


// 1. Validate Image (2 sec)
function validateImage(image) {
  return new Promise((resolve) => {
    console.log(`Validating ${image.name}...`);
    setTimeout(() => {
      console.log(`Validation done: ${image.name}`);
      resolve(image);
    }, 2000);
  });
}

// 2. Resize Image (1 sec)
function resizeImage(image) {
  return new Promise((resolve) => {
    console.log(`Resizing ${image.name}...`);
    setTimeout(() => {
      console.log(`Resizing done: ${image.name}`);
      resolve(image);
    }, 1000);
  });
}

// 3. Upload Image (3 sec)
function uploadImage(image) {
  return new Promise((resolve) => {
    console.log(`Uploading ${image.name}...`);
    setTimeout(() => {
      console.log(`Upload complete: ${image.name}`);
      resolve(image);
    }, 3000);
  });
}

images.forEach((image) => {
  // your implementation here
  validateImage(image)
  .then((img)=> resizeImage(img))
  .then((img) => uploadImage(img))
  .then(() => console.log(`All steps done for ${image.name}`));
});

