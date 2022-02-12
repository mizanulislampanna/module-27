document.getElementById('login-submit').addEventListener('click',function(){
    // get user email
  const emailfield =  document.getElementById('user-email');
  const userEmail = emailfield.value;
  
//   get user Pssword 
const passwordField = document.getElementById('user-password');
const userPassword = passwordField.value;

if(userEmail == 'kusumasa@gmail.com' && userPassword == 'barmalura'){
    window.location.href = 'ammarbank.html';
}
})