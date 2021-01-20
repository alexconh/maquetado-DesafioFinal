
function clearForm() {
    $('#form-new-post').trigger('reset')
}

$('.prueba').on('click','.send__post', function() {
    let today = new Date().toLocaleDateString()
    let postObject = {
        title: $('#title__input').val(),
        content: $('#content__input').val(),
        urlCover: $('#urlCover__input').val(),
        tag: $('#taglist__select').val(),
        author: $('#author__input').val(),
        minsToRead: $('#time__input').val(),
        date: today,
    }
    let validate = postObject.title.length > 0 && postObject.content.length > 0 && postObject.urlCover.length > 0 && postObject.tag.length > 0 && postObject.urlCover.length > 0 && postObject.tag.length > 0 && postObject.author.length > 0 && postObject.minsToRead.length > 0
    if(validate){

        $.ajax({
            url: "https://pruebas-frontend-default-rtdb.firebaseio.com/post/.json",
            method: 'POST',
            data: JSON.stringify(postObject)
        }).done(function() {
            
            //console.log(response)
        }).fail(function(err){
            console.log(err)
        })
        $('#alert__form').removeClass('d-none')
        $('#alert').addClass('d-none')
        clearForm()

    }else {
        console.log('entro a else')
        $('#alert').css('position', 'relative')
        $('#alert').addClass('d-block')
        console.log('no se puede')
    }
})

$('.prueba').on('click','.clear__post', function() {
    clearForm()
})

/* //delete
let idPost = "aqui el id del post a borrar"
$.ajax({
    url: "https://pruebas-frontend-default-rtdb.firebaseio.com/post/-MRNyLYtUWkoD96xUXPs.json",
    method: 'DELETE'
}).done(function(response) {
   console.log('Se ha eliminado')
}).fail(function(err){
    console.log(err)
}) */
