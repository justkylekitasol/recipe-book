$.get("recipe.json").then(function(myObj){
  for(x in myObj){
    var dataList = document.getElementById('data-list');
    // var input = document.getElementById('autocomplete-input');
    var option = document.createElement('option');
    option.value = myObj[x].name;
    dataList.appendChild(option);
  }
})

$(document).ready(function() {
  $('#name-lists').on('change', function() {
    var userText = $(this).val();
    $("#data-list").find("option").each(function() {
      if ($(this).val() == userText) {
        selected = $(this).val();
        $('#name').val($(this).val());
      }
      $.get("recipe.json").then(function(myObj){
        for(x in myObj){
          if (selected == myObj[x].name ){
            $('#recipe-img').html(jQuery.parseHTML(myObj[x].imageURL));
            $('#name').html(jQuery.parseHTML(myObj[x].name));
            $('#ingredients').html(jQuery.parseHTML(myObj[x].ingredients));
            $('#steps').html(jQuery.parseHTML(myObj[x].steps));
            $('#url-btn').html(jQuery.parseHTML(myObj[x].originalURL));
            $('.search-input').val("");
          }
        }
      })
    })
  })
});