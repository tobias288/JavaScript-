// function to fetch user data
// use only async and await when fetching from real API
// Use Promise when fetching locally on your system

// function to fetch user data
async function fetchUserData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
        throw new Error(`User data contains some error`)
    }
    return response.json();
}

// function to display data in HTML

async function displayUserData() {
    const userList = document.getElementById('user-list');
    
    try {
        const users = await fetchUserData();
        const listItems = users.map(user => `<li>${user.name} - ${user.email}</li>`)
        userList.innerHTML = listItems;
    } catch (error) {
        console.log(`error fetching data:`, error)
        userList.innerHTML = `<li> Error Fetching User data. Pls try again later.</li>`
    };
};

displayUserData()