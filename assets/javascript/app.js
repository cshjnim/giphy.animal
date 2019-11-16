
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
        console.log(queryURL);
        console.log(response);
        // storing the data by set up a new result variable
        var results = response.data;

      // Looping through each result item
      for (var i = 0; i < results.length; i++) {
        // Creating and storing a div
        var animalDiv = $("<div>");
        // Creating and storing images
        var animalImage = $("<img>");
        // Setting the src attribute of the image
        animalImage.attr("src", results[i].images.fixed_height.url);
      
        animalDiv.append(animalImage);
        // Prependng the animalDiv to the HTML page
        $("#images").prepend(animalDiv);
      }
    })
  });