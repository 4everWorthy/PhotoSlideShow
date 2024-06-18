// Create a slideshow object with properties and methods to manage a photo slideshow.
const slideshow = {
    // An array containing the names of photos in the slideshow.
    photoList: ['car.jpg', 'mansion.jpg', 'boat.jpg', 'lighter.jpg', 'lion.jpg'],
    
    // A property to keep track of the current photo's index in the photoList.
    currentPhotoIndex: 0,

    // A method to move to the next photo in the slideshow.
    nextPhoto: function() {
        // Check if the current photo index is less than the length of the photoList.
        if (this.currentPhotoIndex < this.photoList.length - 1) {  
            // If true, increment the current photo index by 1.
            this.currentPhotoIndex++;
            // Print the name of the new current photo.
            console.log(this.photoList[this.currentPhotoIndex]);
        } else {
            // If we are at the end of the photoList, print a message.
            console.log('End of Slideshow');
        }
    },

    // A method to move to the previous photo in the slideshow.
    prevPhoto: function() {
        // Check if the current photo index is greater than 0.
        if (this.currentPhotoIndex > 0) {  
            // If true, decrement the current photo index by 1.
            this.currentPhotoIndex--;
            // Print the name of the new current photo.
            console.log(this.photoList[this.currentPhotoIndex]);
        } else {
            // If we are at the start of the photoList, print a message.
            console.log('End of Slideshow');  
        }
    },

    // A method to display the current photo.
    currentPhoto: function() {
        // Print the name of the current photo based on the current photo index.
        console.log(this.photoList[this.currentPhotoIndex]);
    }
};