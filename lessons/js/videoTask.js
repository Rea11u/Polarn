// videoTask.js

// Mark video as viewed after 15 seconds
document.getElementById('video').addEventListener('load', () => {
    setTimeout(() => {
        // Add code to mark the video as viewed
        console.log('Video has been viewed for 15 seconds');
    }, 15000);
});

// Mark tasks as completed
function markTaskAsCompleted(button) {
    button.disabled = true;
    button.innerText = 'Выполнено';
    console.log('Task completed');
}
