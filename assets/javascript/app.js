
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

        animalImage.attr("src", results);
        }
      ) 
  );