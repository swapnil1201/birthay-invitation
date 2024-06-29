function toggleDetails() {
    const details = document.querySelector('.details');
    details.classList.toggle('hidden');
}

function initMap() {
    const location = { lat: 40.712776, lng: -74.005974 }; // Example coordinates, replace with actual location
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: location,
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}
