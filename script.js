const avatarInput = document.querySelector('#avatar_input');
const nameInput = document.querySelector('#name_input');
const emailInput = document.querySelector('#email_input');
const gitInput = document.querySelector('#git_input');
const submitButton = document.querySelector('#submit_button');
const nameValue = document.querySelector('#input_name_value');
const nameValueTicket = document.querySelector('#name_ticket');
const emailValue = document.querySelector('#input_email_value');
const gitValue = document.querySelector('#git_ticket');

submitButton.addEventListener('click', function(){    
    const userName = nameInput.value;
    const userEmail = emailInput.value;
    const userGit = gitInput.value
    event.preventDefault();
    
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail) && userName.trim() !== ''){
    document.querySelector('.form_article').style.display = "none";
    document.querySelector('.ticket_article').style.display = "block";
    nameValue.textContent = userName;
    nameValueTicket.textContent = userName;
    emailValue.textContent = userEmail;
    gitValue.textContent = "@" + userGit;
    nameInput.style.borderColor = '';
    emailInput.style.borderColor = '';
    emailInput.style.marginBottom = '';
    document.querySelector('.error_email').style.display = '';
    
   }

   else {
        nameInput.style.borderColor = 'hsl(7, 71%, 60%)';
        emailInput.style.borderColor = 'hsl(7, 71%, 60%)';
        emailInput.style.marginBottom = '0';
        document.querySelector('.error_email').style.display = 'block'
        document.querySelector('.error_email').style.color = 'hsl(7, 71%, 60%)';
   }
})

































// quand on clique sur le bouton sa verifie si les inputs essentiel sont remplis (email, name)
// si non mettre des erreurs sur inputs obligatoire
// si ok, caché le form article et faire apparaitre le ticket article
//dans le ticket article  