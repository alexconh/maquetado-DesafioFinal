
let allTags = []
const getTags = () => {
    $.ajax("https://pruebas-frontend-default-rtdb.firebaseio.com/tags/.json")
        .done(function (tags) {
            for (item in tags) {
                allTags.push(tags[item].tagname)
            }
        })
        .fail(function (err) {
            alert("error", err);
        })
}



$(document).ready(function () {
    // obtener los tags existentes
    // guardarlos en una variable
    //console.log(allTags)
    //["mytag", mytag 2", mytag 3"]
    // escuchar el evento de crear
    $('.send__tag').click(function () {

        let tagValue = $('#tag__input').val().toLowerCase()
        if (tagValue === "") {
            $('.alert__tag').text('Ingresa un tag').slideDown()
            $('#alert').css('position', 'relative')
            $('#alert').addClass('d-block')
            return false
            //allTags.includes(tagText) === false
        }
        if (allTags.includes(tagValue.toLowerCase()) === true) {
            // comprobar si existe o no el tag
            $('.alert__tag').text('El tag ya existe, intenta con otro').slideDown()
            $('#alert').css('position', 'relative')
            $('#alert').addClass('d-block')
            $('#form-new-tag').trigger('reset')
            // si existe, mandar mensaje
        } else {
            // sino, hacer el POST
            let tagObject = {
                tagname: tagValue.toLowerCase()
            }
            $.ajax({
                url: "https://pruebas-frontend-default-rtdb.firebaseio.com/tags/.json",
                method: 'POST',
                data: JSON.stringify(tagObject)
            }).done(function (response) {
                $('.alert__tag').text('Tag creado').slideDown()
                $('#alert').css('position', 'relative')
                $('#alert').addClass('d-block')
                $('#alert').addClass('valid-tooltip').removeClass('invalid-tooltip')
                getTags()
            }).fail(function (err) {
                console.log(err)
                $('.alert__tag').text('No se pudo crear el tag').slideDown()
            })
        }
        
    })
    getTags()
})
$('.prueba').on('click', '.clear__tag', function () {
    $('#form-new-tag').trigger('reset')
    /* $('#alert').addClass('d-none').removeClass('d-block') */
})



//$('#lista__tags').html(listaCreados)
/* //DELETE
$.ajax({
    url: "https://pruebas-frontend-default-rtdb.firebaseio.com/tags/.json",
    method: 'DELETE'
}).done(function(response) {
    //$('.alert__tag').text('Tag creado').slideDown()
}).fail(function(err){
    console.log(err)
    //$('.alert__tag').text('No se pudo crear el tag').slideDown()
}) */


/* 
//VERSION DE JORGE
let allTags = []
const getTags = () => {
    $.ajax( "https://" )
    .done(function(res) {
        allTags = []
        for(item in res) {
            allTags.push(res[item].title)
        }
        console.log(allTags)
        //["mytag", mytag 2", mytag 3"]
    })
    .fail(function(err) {
        alert( "error", err);
    })
}
$(document).ready(function() {
    getTags()
    $('.btn__save__tags').click(function(){
        let tagText = $('.input__tag').val()
        // si esta vacio
        if (tagText === "") {
            $('.alert__tag').text('Ingresa un tag').slideDown()
            return false
        }
        // sino esta vacio 
        if ( allTags.includes(tagText) ) {
            // comprobar si existe o no el tag
            $('.alert__tag').text('El tag ya existe').slideDown()
            // si existe, mandar mensaje
        } else {
            // sino, hacer el POST
            let tagObject = {
                title: tagText
            }
            $.ajax({
                url: "https://",
                method: 'POST',
                data: JSON.stringify(tagObject)
            }).done(function(response) {
                $('.alert__tag').text('Tag creado').slideDown()
            }).fail(function(err){
                console.log(err)
                $('.alert__tag').text('No se pudo crear el tag').slideDown()
            })
        }
    })
})
 */