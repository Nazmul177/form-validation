const sign_up_from = document.getElementById('sign_up_form');
const msg = document.querySelector('.msg');
const button = document.querySelector('#test');

//Timer function 
// button.onclick = ()=>{
//     setInterval(() => {
//         msg.innerHTML = `<p class="alert alert-danger"> Bangladesh backdor <button class="close" data-dismiss="alert">&times;</button><p/>`;
//     }, 3000);
// }
// button.onclick = ()=>{
//     setTimeout(() => {
//         msg.innerHTML = `<p class="alert alert-danger"> Bangladesh backdor <button class="close" data-dismiss="alert">&times;</button><p/>`;
//     }, 3000);
// }

sign_up_from.addEventListener('submit', function(e){
    e.preventDefault();
    let name = sign_up_from.querySelector('input[placeholder="Name"]');
    let email = sign_up_from.querySelector('input[placeholder="Email"]');
    let location = sign_up_from.querySelector('select');
    let gender = sign_up_from.querySelector('input[type = "radio"]:checked');
    let skills = sign_up_from.querySelectorAll('input[type = "checkbox"]:checked');

    

    
    if(name.value == "" || email.value == "" || location.value == ""){
        msg.innerHTML = validation('All fields are recuired');
    }
    else{
        msg.innerHTML = validation('Data conferm Successfuly','success');
    }

    setTimeout(() => {
        msg.innerHTML = "";
    }, 5000);
    
})