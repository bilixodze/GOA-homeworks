const form = document.getElementById('myForm');
const btn = document.getElementById('btn');

function validataForm(){
    const emailValue = form.elements.email.value;
    const passValue = form.elements.password.value;

    if(emailValue == '' || passValue == ''){
        alert('Please fill in all fields');
        return
    }

    console.log('Form submitted successfully')
    console.log('Email :' + emailValue)
    console.log('Password :' + passValue)
}

btn.onclick = validataForm;