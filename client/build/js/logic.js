$('#submit').on('click', function(event) {
  event.preventDefault();
  $("#tiles-go-here").empty();
  const searchTerm = $('#searchbar').val().trim();

  console.log('running');
  const queryURL = 'https://tranquil-garden-99928.herokuapp.com/https://food2fork.com/api/search?key=7743a1c8012c773852737a26cf2f7c3f&q=' + searchTerm + '&sort=r';

  $.ajax({
    url: queryURL,
    dataType: "json",
    method: "GET"
  })
  .done(function(response) {
    var results = response.recipes;
    console.log(results);

    for (let i = 0; i < results.length; i++) {
      const recipeDiv = $('<div class="recipe">');
      const idd = results[i].recipe_id
      const mealName = results[i].title;
      const picture = results[i].image_url;
      const url = results[i].source_url;
      const img = $('<img data-id="' + idd + '">');
      const a = $('<a>');
      const iconButton = '<br><a href="#"><i class="add-recipe medium material-icons waves-effect waves-light" data-id="' + idd + '">add_circle</i></a>'

      img.attr('src', picture);
      a.attr('href', url);
      a.attr('data-id', idd)
      a.attr('target', '_blank').text(mealName);

      recipeDiv.prepend(iconButton);
      recipeDiv.prepend('<br>', a);
      recipeDiv.prepend(img);
      $('#tiles-go-here').prepend(recipeDiv);
    }
  });

});



function saveRecipe(event) {
  event.preventDefault();

  const mealId = $(this).attr('data-id');
  const colorChange = $(this).addClass('grey-text');
  const stepthenext = $(`a[data-id='${mealId}']`);
  const stepthenexteth = $(`img[data-id='${mealId}']`);
  const mealName = stepthenext.text();
  const image_url = stepthenexteth.attr('src');
  const source_url = stepthenext.attr('href');

    $.ajax({
    method: 'POST',
    url: '/save',
    data: {
      name: mealName,
      mealTime: 'test',
      addedBy: 'Sara Test',
      day: 'test',
      image_url: image_url,
      source_url: source_url
    }
  })
  // .then()
}


$(document).ready(function() {

  if (window.innerWidth < 550) {
    $('.multiple-items').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000
    });
  } else {
    $('.multiple-items').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000
    });
  }

    $('#saved-recipes').empty();

    $.getJSON('/api/meals', function(data) {
      for (let i = 0; i < data.length; i++) {
        const savePanel = $('<div class="recipe-that-is-saved"><a href="' + data[i].source_url + '" target="_blank"><img class="saved-photo" src="' + data[i].image_url + '"></a><br><a class="saved-link" href="' + data[i].source_url + '" target=_blank>' + data[i].name + '</a><br><p>Added by: ' + data[i].addedBy + '</p><p>Meal type: ' + data[i].mealTime + '</p></div>');
        $('#saved-recipes').prepend(savePanel);
        savePanel.data('_id', data._id);
        $('.multiple-items').slick('slickAdd', '<div class="slides"><a href="' + data[i].source_url + '" target="_blank"><img src="' + data[i].image_url + '"></a></div>')
      }
    });

    $('.recipe-that-is-saved').hover(
      function() {
      $(this).parent().closest('div').append('<a href="#"><i class="delete-recipe medium material-icons waves-effect waves-light">delete</i></a>');
      },
      function() {
        $(this).parent().closest('div').append('<p>TA DA</p>');
      }
    );

});

$(document).on("click", ".add-recipe", saveRecipe);

