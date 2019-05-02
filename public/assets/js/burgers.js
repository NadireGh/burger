$(function(){
    $(".eat-btn").on("click", function(event){

        var id = $(this).data("id");
    
        var newEatenState = {
            devoured: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatenState
          }).then(
            function() {
              console.log("changed Eaten");
              // Reload the page to get the updated list
              location.reload();
            }
          );
        });

        $(".create-form").on("submit", function(event) {
            // Make sure to preventDefault on a submit event.
            event.preventDefault();
        
            var newBurger = {
              burger_name: $("#name").val().trim(),
              devoured: false
            };
        
            // Send the POST request.
            $.ajax("/api/burgers", {
              type: "POST",
              data: newBurger
            }).then(
              function() {
                console.log("created new Burger");
                // Reload the page to get the updated list
                location.reload();
              }
            );
          });







})