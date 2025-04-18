navigator.geolocation.getCurrentPosition(
    (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Check if the user is within the allowed range of the classroom
        if (isWithinClassroom(latitude, longitude)) {
            console.log("You're in the classroom!");
        } else {
            console.log("You're outside the classroom!");
        }
    },
    (error) => {
        console.error("Error fetching location:", error);
    }
);

function isWithinClassroom(lat, lon) {
    const classroomLat = 28.612894; // Example latitude
    const classroomLon = 77.229446; // Example longitude
    const radius = 50; // Radius in meters

    // Calculate distance (simplified for small areas)
    const distance = Math.sqrt(
        Math.pow(lat - classroomLat, 2) + Math.pow(lon - classroomLon, 2)
    );

    return distance <= radius;
}