function checkOrderStatus() {
    const orderNumber = document.getElementById('orderNumber').value;

   
    const orderStatus = getOrderStatus(orderNumber);

   
    document.getElementById('resultOrderNumber').textContent = orderNumber;
    document.getElementById('resultOrderStatus').textContent = orderStatus;
    document.getElementById('orderStatus').style.display = 'block';
}

function trackOrder() {
    const trackingNumber = document.getElementById('trackingNumber').value;


    const trackingStatus = getTrackingStatus(trackingNumber);

  
    document.getElementById('resultTrackingNumber').textContent = trackingNumber;
    document.getElementById('resultTrackingStatus').textContent = trackingStatus;
    document.getElementById('trackingInfo').style.display = 'block';
}

function getOrderStatus(orderNumber) {

    const statuses = ['Delivered', 'In Transit','Out for Delivery','Delivery at today 11.00AM','Delivery at tomorrow'];
    const randomIndex = Math.floor(Math.random() * statuses.length);

    return statuses[randomIndex];
}

function getTrackingStatus(trackingNumber) {
  
    const statuses = ['In Transit', 'Out for Delivery'];
    const randomIndex = Math.floor(Math.random() * statuses.length);

    return statuses[randomIndex];
}
