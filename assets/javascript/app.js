
// Adding click event
  $("button").on("click", function() {
    var animal = $(this).attr("data-animal");

    // searchable url (set limit to 10images)
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      animal + "&api_key=DSe9hrdaQyo7dWmrOeCmLF3Su4mqHybG&limit=10";

  //ajax!
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        // start with make image div empty 
        $('#images').empty();
        console.log(queryURL);
        console.log(response);
        // storing the data by set up a new result variable
        var results = response.data;

      // Looping through each result item
      for (var i = 0; i < results.length; i++) {
        // Creating and storing a div
        var animalDiv = $("<div>");
        // rating 
        var p = $("<p>").text("Rating: " + results[i].rating);
        var animated   = results[i].images.fixed_height.url;
        var still      = results[i].images.fixed_height_still.url;
        // Creating and storing images
        var animalImage = $('<img class="gImage">');
        // Setting the src attribute of the image and defaulting gits to still
        animalImage.attr("src", still);
        animalImage.attr("data-still", still);
        animalImage.attr("data-animate", animated);
        animalImage.attr("data-state", 'still');
       //append rating & images
        animalDiv.append(p);
        animalDiv.append(animalImage);
        // Prependng the animalDiv to the HTML page
        $("#images").prepend(animalDiv);
      }
    })
  });


// Onclick function to animate/pause gifs
$('#images').on("click", ".gImage", function() {

  var state = $(this).attr('data-state');
  // If state = still, on click will animate the gif
  if (state == 'still') {
      $(this).attr('src', $(this).data('animate'));
      $(this).attr('data-state', 'animate');}
  // Otherwise, if state not still, gif will pause on click   
  else {
      $(this).attr('src', $(this).data('still'));
      $(this).attr('data-state', 'still');
  }
});


// New buttons function
function renderButtons() {
  $(".buttons-view").empty();
  // Verifying buttons
  for (let i = 0; i < animal.length; i++) {
    let addButton = $('<button class="button">');
    addButton.addClass("animal");
    addButton.attr("data-animal", animal[i]);
    addButton.html(animal[i]);

    // add new buttons to the end of the list of existing buttons
    $(".buttons-view").append(addButton);
  }
};