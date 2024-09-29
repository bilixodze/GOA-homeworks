const form = document.getElementById('myForm');
const btn = document.getElementById('btn');

function validataForm(){
    const nameValue = form.elements.name.value;
    const emailValue = form.elements.email.value;
    const passValue = form.elements.password.value;
    const colorValue = form.elements.color.value;

    if(emailValue == '' || passValue == '' || nameValue == '' || colorValue == ''){
        alert('Please fill in all fields');
        return
    }

    console.log('Form submitted successfully')
    console.log('Name :' + nameValue)
    console.log('Email :' + emailValue)
    console.log('Password :' + passValue)
    console.log('color :' + colorValue)
}

btn.onclick = validataForm;