function checkOrderStatus() {
    const orderNumber = document.getElementById('orderNumber').value;

    // Simulate fetching order status from the server (replace with actual API call)
    const orderStatus = getOrderStatus(orderNumber);

    // Update UI with order status
    document.getElementById('resultOrderNumber').textContent = orderNumber;
    document.getElementById('resultOrderStatus').textContent = orderStatus;
    document.getElementById('orderStatus').style.display = 'block';
}

function trackOrder() {
    const trackingNumber = document.getElementById('trackingNumber').value;

    // Simulate fetching tracking information from the server (replace with actual API call)
    const trackingStatus = getTrackingStatus(trackingNumber);

    // Update UI with tracking information
    document.getElementById('resultTrackingNumber').textContent = trackingNumber;
    document.getElementById('resultTrackingStatus').textContent = trackingStatus;
    document.getElementById('trackingInfo').style.display = 'block';
}

function getOrderStatus(orderNumber) {
    // Simulate fetching order status from the server (replace with actual API call)
    // For simplicity, let's say the status is randomly 'Delivered' or 'In Transit'
    const statuses = ['Delivered', 'In Transit','Out for Delivery','Delivery at today 11.00AM','Delivery at tomorrow'];
    const randomIndex = Math.floor(Math.random() * statuses.length);

    return statuses[randomIndex];
}

function getTrackingStatus(trackingNumber) {
    // Simulate fetching tracking information from the server (replace with actual API call)
    // For simplicity, let's say the status is randomly 'In Transit' or 'Out for Delivery'
    const statuses = ['In Transit', 'Out for Delivery'];
    const randomIndex = Math.floor(Math.random() * statuses.length);

    return statuses[randomIndex];
}
