// Class 1:
  // 1.1 
    // Fork and clone starter repo and set up workspace.
  // 1.2
    // Create HTML intial state - Explore Giphy API Documentation

// Class 2:
  // 2.1 Create a keypress function that 
    // takes in the value from the the search box when the enter button is pressed
    // empty's the elements on the screen
    // Displays the search term to the console
  // 2.2 
    // Define a function called search 
    // takes a string searchTerm as a parameter
    // makes a request to the giphy API using the searchTerm
    // logs the the reponse to the console in the success function
    // Call the search function in the keypress function passing the search term as a parameter  

// Class 3:
  // 3.1
    // Create the display results function
    // Displays a single image thumbnails on the screen
    // Call the Display Results function in the success function passing the reponse as a parameter
  // 3.2 
    // Update the fuction to display all the image thumbnails to the screen
  
    

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// .keypress function
$("body").keypress(function(e){
    console.log(e.which)
    if(e.which === 13 ) {
        $('.output').empty();
        var searchTerm = $('#srch-term').val();
        search(searchTerm);
    }
});

// search function
function search(searchTerm){
    var url = "https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyCDWix3K7337k8w6ZWKHnKGR5hLfcM4Nh0&address=" + searchTerm
    $.ajax({
        url: url,
        method: "GET",
        success: function(response){
        displayResults(response);
        },
    }); 
}

// displayResults function
function displayResults(data){
    console.log(data);
     for(var i = 2; i < data.officials.length; i++){ 

            var row = $("<div class='row'></div>");
            row.append(
                    "<div class='col-md-4 text-center'>\
                        <img class='img-circle' src="+ data.officials[i].photoUrl +">\
                    </div>"
            );
            row.append(
                    "<div class='col-md-4 text-center'>\
                      <p>"+ data.officials[i].name +"</p>\
                      <p>"+ data.officials[i].party +"</p>\
                      <p>"+ data.officials[i].phones[0] +"</p>\
                      <p>"+ data.officials[i].urls[0] +"</p>\
                    </div>"
            );
                    
            var social = $("<div class='col-md-4 text-center'> </div>")

            social.append("<p>"+ data.officials[i].channels[0].type + " : " + data.officials[i].channels[0].id + "</p>")

            row.append(social);

            $('.output').append(row);
      }
}