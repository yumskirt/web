function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const address = document.getElementById('address').value;
    const contact = document.getElementById('contact').value;
    const gender = document.getElementById('gender').value;
    const course = document.getElementById('course').value;
    const year = document.getElementById('year').value;

    const message = `Name: ${name}\nAge: ${age}\nAddress: ${address}\nContact Number: ${contact}\nGender: ${gender}\nCollege Course: ${course}\nYear: ${year}`;

    alert(message);
}
