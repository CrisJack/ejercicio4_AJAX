$(document).ready(function () {
    
    $('#buscar').on('click',function(){
       // $('#palabra').val();
        var texto =  $('#palabra').val();

        console.log(texto);
        $.ajax({
            type: "GET",
            url: "https://www.flickr.com/services/feeds/photos_public.gne?tags="+texto+"&tagmode=any&format=json&jsoncallback=?",
            data: "data",
            dataType: "json",
            success: function (response) {
                //console.log(response.items);
                $.each(response.items, function (index, elemento) { 
                     console.log(elemento.media.m);
                     contenido = "<img src="+elemento.media.m+">";
                     $('.imagenes').append(contenido);
                });
            }
        });
    })
 


});