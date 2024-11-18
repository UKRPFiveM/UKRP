async function fetchServerStatus() {
    // Since we can't directly fetch from client side due to CORS,
    // we'll show a simplified status for now
    const statusText = document.querySelector('.status-text');
    const statusDot = document.querySelector('.status-dot');
    
    if (statusText && statusDot) {
        // You can manually set this based on your server status
        const isOnline = true; // Set this to false when server is offline
        
        if (isOnline) {
            statusText.textContent = "Server Online";
            statusDot.style.background = '#4CAF50';
        } else {
            setOfflineStatus();
        }
    }
}

function setOfflineStatus() {
    const statusText = document.querySelector('.status-text');
    const statusDot = document.querySelector('.status-dot');
    
    if (statusText && statusDot) {
        statusText.textContent = 'Server Offline';
        statusDot.style.background = '#f44336';
    }
}

// Update every 30 seconds
setInterval(fetchServerStatus, 30000);

// Initial fetch
fetchServerStatus();