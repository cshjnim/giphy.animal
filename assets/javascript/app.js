    // queryURL for Giphy API
    var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });


    var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(pizza) {
      console.log(pizza.data);
      var array = pizza.data;
      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        $("body").append(`<img src='${element.images.downsized.url}'>`);
      }
    });