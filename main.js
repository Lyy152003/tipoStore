// Mở - đóng sign in
function openSigninForm() {
    document.getElementById("loginForm").style.display = "block";
}
const btnCloseFormLogin = document.getElementById("btn-signin");
btnCloseFormLogin.onclick = function() {
  document.getElementById("loginForm").style.display = "none";
}


// mở - đóng sign up
function openSignupForm() {
    document.getElementById("signupForm").style.display = "block";
}
const btnCloseFormSignup = document.getElementById("btn-signup");
btnCloseFormSignup.onclick = function() {
  document.getElementById("signupForm").style.display = "none";
}

// cho picture-section chuyển động
var slideIndex = 0;
showSlides();
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // Thời gian chuyển đổi ảnh (3 giây)
}

// 

