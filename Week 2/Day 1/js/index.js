console.log( "Hello there from the JS file!" );

function print( element ){
    console.log( "You clicked the button!" );
    let content = document.querySelector( ".content" );
    
    content.innerHTML += "<p>You just clicked on the following button:" + element.textContent + "</p>";

    let firstNameInput = document.querySelector( "#firstName" )
    console.log( firstNameInput.value );
    // firstNameInput.value = "Alfredo";
}

function enterForm( element ){
    console.log( "You are hovering over the form!" );
}

function leaveForm( element ){
    console.log( "See you later, you are hovering out of the form now!" );
}

function selectCountry( element ){
    console.log( element.value );
    let results = document.querySelector( ".results" );
    results.textContent = "You have selected " + element.value;
}