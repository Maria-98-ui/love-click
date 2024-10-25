
const displayBubble = function(){
    document.querySelector('.page-first').style.display = 'none';
    
    // Show the bubble container
    const bubbleContainer = document.getElementById('bubbleContainer');
    // bubbleContainer.classList.remove('hidden');
     bubbleContainer.style.display = 'block'; // Change display to block

    
    // Create multiple bubbles with timeout intervals
    const numberOfBubbles = 1000; // Number of bubbles you want to create
    const interval = 100; // Time interval in milliseconds between each bubble
    
    for (let i = 0; i < numberOfBubbles; i++) {
        setTimeout(() => {
            createBubble(bubbleContainer);
        }, i * interval);
    }
}




document.getElementById('myButton').addEventListener('click', displayBubble )
    // Hide the button and the initial page
    // document.querySelector('.page-first').style.display = 'none';
    
    // // Show the bubble container
    // const bubbleContainer = document.getElementById('bubbleContainer');
    // bubbleContainer.classList.remove('hidden');
    //  bubbleContainer.style.display = 'block'; // Change display to block

    
    // // Create multiple bubbles with timeout intervals
    // const numberOfBubbles = 1000; // Number of bubbles you want to create
    // const interval = 100; // Time interval in milliseconds between each bubble
    
    // for (let i = 0; i < numberOfBubbles; i++) {
    //     setTimeout(() => {
    //         createBubble(bubbleContainer);
    //     }, i * interval);
    // }



// Function to create a single bubble




function createBubble(container) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.innerText = 'I love you so much';
    
    // Random position and size
    const x = Math.random() * 100; // Random percentage for x position
    const y = Math.random() * 100; // Random percentage for y position
    const size = Math.random() * 0.8 + 0.4; // Random size scale (0.4 to 1.2)
    
    // Apply random position and size
    bubble.style.left = `${x}%`;
    bubble.style.top = `${y}%`;
    bubble.style.transform = `scale(${size})`;
    
    // Add bubble to container
    container.appendChild(bubble);
    
    // Optionally remove the bubble after some time
    // setTimeout(() => {
    //     bubble.remove();
    // }, 3000); // Remove after 3 seconds
}
