const fetchBtn = document.getElementById('fetchBtn')
const userContainer = document.getElementById('userContainer')

fetchBtn.addEventListener('click', fetchUsers)

function fetchUsers(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data => displayUsers(data)).catch(error => console.log(error))
}

function displayUsers(users){
    userContainer.innerHTML = ""
    users.forEach(user => {
        const div = document.createElement('div')
        div.classList.add('userCard')
        div.innerHTML = `
        <h3>${user.name}</h3>
        <p><b>Email: </b>${user.email}</p>
        <p><b>City: </b>${user.address.city}</p>
        `;
        userContainer.appendChild(div)
    })
}