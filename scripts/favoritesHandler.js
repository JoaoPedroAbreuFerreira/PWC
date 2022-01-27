var favorites = JSON.parse(localStorage.getItem('favorites'));

if(!favorites)
{
    var favoritesArray = [];

    localStorage.setItem('favorites', JSON.stringify(favoritesArray));
}

function toggleFavorite(clickedButton)
{
    if($(clickedButton).hasClass("favorite"))
    {
        var id = $(clickedButton).attr("id");
        var index = favorites.indexOf(id);

        favorites.splice(index, 1);

        if(location.pathname.split('/').pop() === "favoritos.html")
        {
            $(clickedButton).parents()[1].remove();
            
            if(favorites.join() == "")
            {
                $(".tableContainer").hide();
                $("#favoritesError").show();
            }
        }
    }
    else
    {
        var id = $(clickedButton).attr("id");

        favorites.push(id);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    $(clickedButton).toggleClass("favorite far fas");
}