"use strict";

//IIFE IMMEDIATELY INVOKED FUNCTIONAL EXPRESSION
(function () {
    function DisplayHomePage() {
        console.log("called DisplayHomePage");
        // Add specific actions for the home page here
    }

    let AboutUsButton = document.getElementById("AboutUsButton");

    AboutUsButton.addEventListener("click", function () {
        location.href = "about.html";
    });

    function Start() {
        console.log("App Started");

        switch (document.title.toLowerCase()) {
            case "home":
                DisplayHomePage();
                break;
            case "products":
                console.log("called ProductsPage");
                // Add specific actions for the product page here
                break;
            case "service":
                console.log("called servicePage");
                // Add specific actions for the service page here
                break;
            case "contact":
                console.log("called contactPage");
                // Add specific actions for the contact page here
                break;
            case "about":
                console.log("called aboutPage");
                // Add specific actions for the contact page here
                break;
        }
    }

    window.addEventListener("load", Start);
})();