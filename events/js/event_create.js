// Function to show the modal


function showModal() {
    // Show the modal by removing the 'hidden' class
    document.getElementById('create-event-modal').classList.remove('hidden');
}

// Function to hide the modal
function hideModal() {
    // Hide the modal by adding the 'hidden' class back
    document.getElementById('create-event-modal').classList.add('hidden');
}

  
document.getElementById('create-event-form').addEventListener('submit', function (event) {
    is_authticated(); 

    const form = document.getElementById('create-event-form');
    const formData = new FormData(form);
    const user_id = localStorage.getItem('user_id');

    console.log(formData.get('blood'));  
    console.log(formData.get('location'));
    console.log('created_by:', formData.get('created_by'));

    const data = {
        "user": user_id,
        "title": formData.get('title'),
        "description": formData.get('description'),
        "event_date": formData.get('date'),
        "event_time": formData.get('time'),
        "blood": formData.get('blood'),
    };
 
    console.log(data);   

    fetch('https://datadonor-webapp.vercel.app/event/events/create/', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json", // Corrected header name
        },
        body: JSON.stringify(data)
    })
        .then(res => {
            if (!res.ok) {
                // If the response is not OK (status code not in the 200-299 range)
                throw new Error('Failed to create event');
            }
            return res.json();
        })
        .then(data => {
            pushAlert('success',`Successfully ${formData.get('blood')} created!`);
            window.location.reload();  // Reload the page after successful creation

        })
        .catch(error => {
            console.error('Error:', error);  // Added error handling
            pushAlert('success',error);

        }); 
    
        
});
