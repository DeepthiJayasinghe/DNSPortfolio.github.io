/*=================toggle icon navbar=====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');

}
/*=================scroll section active link & sticky navbar=====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let header = document.querySelector('header');





window.onscroll = () => {
    /*=================sticky header=====================*/
    header.classList.toggle('sticky',window.scrollY>100);

    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>=offset && top < offset + height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
            });
            document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
        };
    });
}

/*=================close menu on nav link click (optional for mobile)=====================*/
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    });
});

/*=================emailjs for messages=====================*/
(function () {
    emailjs.init("3u_QmdkDssjqwhyPb"); // your public key
  })();

  // Wait until page loads
  window.onload = function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
      event.preventDefault(); // stop page reload

      // Get form values
      const templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        number: document.getElementById("number").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
      };

      // Send email
      emailjs
        .send("service_ifk47kk", "template_9yjdyyb", templateParams)
        .then(
          function (response) {
            alert("Message sent successfully!");
            console.log("SUCCESS!", response.status, response.text);
            form.reset();
          },
          function (error) {
            alert("Failed to send message. Please try again.");
            console.error("FAILED...", error);
          }
        );
    });
  };