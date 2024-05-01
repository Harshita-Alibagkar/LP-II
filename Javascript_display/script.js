function registration() {
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var dob = document.getElementById("dob").value;
    var gender = document.querySelector('input[name="gender"]:checked').value || '';
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var pincode = document.getElementById("pin").value;
    var state = document.getElementById("state").value;
    var hobbies = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(function(checkbox) {
        hobbies.push(checkbox.value);
    });

    // Validate inputs
    if (id === '' || name === '' || username === '' || password === '' || email === '' || dob === '' || gender === '' || address === '' || city === '' || pincode === '' || state === '' || hobbies.length === 0) {
        alert('Please fill in all required fields.');
        return;
    }

    // Validate email format
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Invalid email format.');
        return;
    }
    //localStorage.clear();

    // Push user data to arrays
    var ids = JSON.parse(localStorage.getItem('ids')) || [];
    var names = JSON.parse(localStorage.getItem('names')) || [];
    var usernames = JSON.parse(localStorage.getItem('usernames')) || [];
    var passwords = JSON.parse(localStorage.getItem('passwords')) || [];
    var emails = JSON.parse(localStorage.getItem('emails')) || [];
    var dobs = JSON.parse(localStorage.getItem('dobs')) || [];
    var genders = JSON.parse(localStorage.getItem('genders')) || [];
    var addresses = JSON.parse(localStorage.getItem('addresses')) || [];
    var cities = JSON.parse(localStorage.getItem('cities')) || [];
    var pincodes = JSON.parse(localStorage.getItem('pincodes')) || [];
    var states = JSON.parse(localStorage.getItem('states')) || [];
    var hobbiesList = JSON.parse(localStorage.getItem('hobbiesList')) || [];

    ids.push(id);
    names.push(name);
    usernames.push(username);
    passwords.push(password);
    emails.push(email);
    dobs.push(dob);
    genders.push(gender);
    addresses.push(address);
    cities.push(city);
    pincodes.push(pincode);
    states.push(state);
    hobbiesList.push(hobbies);

    localStorage.setItem('ids', JSON.stringify(ids));
    localStorage.setItem('names', JSON.stringify(names));
    localStorage.setItem('usernames', JSON.stringify(usernames));
    localStorage.setItem('passwords', JSON.stringify(passwords));
    localStorage.setItem('emails', JSON.stringify(emails));
    localStorage.setItem('dobs', JSON.stringify(dobs));
    localStorage.setItem('genders', JSON.stringify(genders));
    localStorage.setItem('addresses', JSON.stringify(addresses));
    localStorage.setItem('cities', JSON.stringify(cities));
    localStorage.setItem('pincodes', JSON.stringify(pincodes));
    localStorage.setItem('states', JSON.stringify(states));
    localStorage.setItem('hobbiesList', JSON.stringify(hobbiesList));

    // Redirect to user list page
    window.location.href = 'user-list.html';
}
