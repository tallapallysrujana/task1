const images = [
    "image1.jpeg",
    "image1.jpeg",
    "image1.jpeg",
    "image1.jpeg",
    "image1.jpeg"
  ];
  
  let currentIndex = 0;
  
  function showImage(direction) {
    if (direction === 'next') {
      currentIndex = (currentIndex + 1) % images.length;
    } else if (direction === 'prev') {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
    }
    updateGalleryImage();
  }
  
  function changeImage(index) {
    currentIndex = index;
    updateGalleryImage();
  }
  
  function updateGalleryImage() {
    const galleryImage = document.getElementById('galleryImage');
    galleryImage.src = images[currentIndex];
  
    // Update thumbnails
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumbnail, index) => {
      thumbnail.classList.remove('selected');
      if (index === currentIndex) {
        thumbnail.classList.add('selected');
      }
    });
  }
  
  // Initial setup
  updateGalleryImage();
  