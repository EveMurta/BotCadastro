function code(){
    var code = Math.floor(Math.random() * (9000000 - 1000000));
    var codeString = document.getElementById('codeString');
    codeString.innerHTML = 'Type the code "'+code+'":';
}

function register(){
    var firstName = document.getElementById('firstName');
    var lastName = document.getElementById('lastName');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirmPassword');
    var codeString = document.getElementById('codeString');
    var codeNumber = codeString.innerHTML;
    codeNumber = codeNumber.replace(/[^0-9]/g, '');
    var code = document.getElementById('code');
    var notification = document.getElementById('notification');
    var newCode = Math.floor(Math.random() * (9000000 - 1000000));
    var gender;
    var genderMale =  document.getElementById('genderMale');
    var genderFemale =  document.getElementById('genderFamale');
    if(genderMale.checked == true){
        gender = 'Male';
    }
    else if(genderFemale.checked == true){
        gender = 'Female';
    }
    else{
        gender = '';
    }
    

    if(firstName.value==''||lastName.value==''||email.value==''||phone.value==''||password.value==''||confirmPassword.value==''||gender==''||code.value==''){
        notification.innerHTML = ' <div id="note" class="note note-error"><p class="note-text" id="noteText"><b>Error:</b> Fill in all fields</p></div>';

        code.value='';
        codeString.innerHTML = 'Type the code "'+newCode+'":';
    }
    else if(password.value!=confirmPassword.value){
        notification.innerHTML = ' <div id="note" class="note note-error"><p class="note-text" id="noteText"><b>Error:</b> Passwords do not match</p></div>';

        confirmPassword.value='';
        code.value='';
        codeString.innerHTML = 'Type the code "'+newCode+'":';
    }
    else if(code.value!=codeNumber){
        notification.innerHTML = ' <div id="note" class="note note-error"><p class="note-text" id="noteText"><b>Error:</b> Invalid code</p></div>';

        code.value='';
        codeString.innerHTML = 'Type the code "'+newCode+'":';
    }
    else{
        notification.innerHTML = ' <div id="note" class="note note-success"><p class="note-text" id="noteText"><b>Success:</b> User '+firstName.value+' '+lastName.value+' registered successfully</p></div>';
       
        firstName.value='';
        lastName.value='';
        email.value='';
        phone.value='';
        password.value='';
        confirmPassword.value='';
        gender='';
        genderMale.checked=false;
        genderFemale.checked=false;
        code.value='';

        codeString.innerHTML = 'Type the code "'+newCode+'":';
    }
}