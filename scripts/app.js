"use strict";


// IIFE - Immediately Invoked Functional Expression
(function(){


    function DisplayHomePage(){
        console.log("Called DisplayHomePage()");


        let AboutUsButton = document.getElementById("AboutUsButton");
        AboutUsButton.addEventListener("click", function(){
            location.href = "About.html";
        });


        let MainContent = document.getElementsByTagName("main")[0];


        let MainParagraph = document.createElement("p");


        MainParagraph.setAttribute("id","MainParagraph");
        MainParagraph.setAttribute("class","mt-3");


        MainParagraph.textContent = "This is the first paragraph";


        MainContent.appendChild(MainParagraph);


        let FirstString = "This is ";
        let SecondString = `${FirstString}the main paragraph`;
        MainParagraph.textContent = SecondString;
        MainContent.appendChild(MainParagraph);


        let DocumentBody = document.body;


        let Article = document.createElement("article");
        let articleParagraph = `<p id="ArticleParagraph" class="mt-3">This is my article paragraph</p>`;


        Article.setAttribute("class", "container");
        Article.innerHTML = articleParagraph;
        DocumentBody.appendChild(Article);
    }

    function Start() {
        console.log("App Started");

        switch (document.title.toLowerCase()) {
            case "home":
                DisplayHomePage();
                break;
            case "product":
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