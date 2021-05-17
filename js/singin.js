
// const registrationForm = document.getElementById('register-form')
// const submitButton = registrationForm.elements['submit']
// const passwordInput =registrationForm.elements['password']


// registrationForm.addEventListener('submit', (event) => {
//     event.preventDefault();

//     if (passwordInput.value !== usernameInput.value) {
//         alert('Error')
//         return
//     }

//     alert('Successfully submitted')
// })

// registrationForm.elements['TandC'].addEventListener('change', (event) => {
//     if (event.target.checked) {
//         submitButton.disabled = false
//     } else {
//         submitButton.disabled = true
//     }
// })

$(function () {
    $("#datepicker-from").datepicker();
});

$(function () {
    $("#datepicker-till").datepicker();
});



// $('.sign-up-link').click(function(){
// $('.sign-in').hide( "slow")

// }
// );

$(document).ready(function () {
    $("#hide").click(function () {
        $(".sign-in").hide();
    });
    $("#hide").click(function () {
        $(".register").show();
    });

    $("#hide").click(function () {
        $(".card-footer").hide();
    });

    $("#hide").click(function () {
        $(".card-header-text").html("Register");
    });

});
