    // queryURL for Giphy API


    var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=DSe9hrdaQyo7dWmrOeCmLF3Su4mqHybG&limit=25&rating=G";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(reponse.data);
      var array = response.data;
      for (let i = 0; i < array.length; i++) {
        const element = array[i];
        $("body").append(`<img src='${element.images.downsized.url}'>`);
      }
    });