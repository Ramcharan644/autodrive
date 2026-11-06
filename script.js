/* =========================================
   AUTODRIVE - JAVASCRIPT
========================================= */


/* =========================================
   MOBILE MENU
========================================= */

// ================= MENU =================

function toggleMenu() {

    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");

}


// ================= CAR DETAILS =================

function showMessage(carName) {

    alert(
        "🚗 " + carName +
        "\n\nThank you for your interest in this car!" +
        "\n\nOur AutoDrive team will contact you with more details."
    );

}


// ================= CONTACT FORM =================

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {
contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const carMessage =
        document.getElementById("message").value;


    alert(
        "🎉 Thank you, " + name + "!\n\n" +
        "Your enquiry has been received.\n\n" +
        "AutoDrive will contact you soon."
    );


    contactForm.reset();

});
}


// ================= NAVIGATION =================

const navLinks =
    document.querySelectorAll(".nav-links a");


navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .getElementById("navLinks")
            .classList.remove("active");

    });

});


// ================= PAGE LOAD =================

console.log(
    "🚘 AutoDrive Automobile Showroom loaded successfully!"
);