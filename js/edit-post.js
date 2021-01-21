
$(document).ready(function() {
    let id_post = new URLSearchParams(window.location.search)
    // console.log(id_post.get('id'))
    let id = id_post.get('id')

    const load_data = (post) => {
        $('#title__input').val(post.title)
        $('#content__input').val(post.content),
        $('#organization__input').val(post.organization),
        $('#urlCover__input').val(post.urlCover),
        $('#taglist__select').val(post.tag),
        $('#author__input').val(post.author),
        $('#time__input').val(post.minsToRead)
    }

    if($('#form-new-post').length > 0) {
        console.log('existe la forma')
        $.ajax({
            url: `https://pruebas-frontend-default-rtdb.firebaseio.com/post/${id}/.json`,
            method: 'GET'
        }).done(function (posts) {
            console.log(posts)
            load_data(posts)
        }).fail(function (err) {
            console.log(err)
        })
    }

    $('.prueba-3').on('click','.update__post', function() {
        let today = new Date().toLocaleDateString()
        let postObject = {
            title: $('#title__input').val(),
            content: $('#content__input').val(),
            organization: $('#organization__input').val(),
            urlCover: $('#urlCover__input').val(),
            tag: $('#taglist__select').val(),
            author: $('#author__input').val(),
            minsToRead: $('#time__input').val(),
            date: today,
        }
        let validate = postObject.title.length > 0 && postObject.content.length > 0 && postObject.urlCover.length > 0 && postObject.tag.length > 0 && postObject.urlCover.length > 0 && postObject.tag.length > 0 && postObject.author.length > 0 && postObject.minsToRead.length > 0
        if(validate){
    
            $.ajax({
                url: `https://pruebas-frontend-default-rtdb.firebaseio.com/post/${id}.json`,
                method: 'PATCH',
                data: JSON.stringify(postObject)
            }).done(function() {
                
                //console.log(response)
                window.location.href = `http://127.0.0.1:5502/post-test.html?id=${id}`
            }).fail(function(err){
                console.log(err)
            })
            // $('#alert__form').removeClass('d-none')
            $('#alert').addClass('d-none')
            // clearForm()
    
        }else {
            $('#alert').css('position', 'relative')
            $('#alert').addClass('d-block')
        }
    })
    
    $('.edit-btn').on('click','.edit-post', function() {
        console.log('Le diste click al botón edit')
        window.location.href = `http://127.0.0.1:5502/edit-post.html?id=${id}`
    })

    $('.close-edit').click(function() {
        console.log('quieres cerrar el edit')
        window.location.href = `http://127.0.0.1:5502/post-test.html?id=${id}`
    })
    
    $('.new-tag').click(function() {
        console.log('quieres añadir un nuevo tag')
        window.location.href = `http://127.0.0.1:5502/new-tag.html?id=${id}`
    })

    $('.close-new-tag').click(function() {
        console.log('quieres cerrar new tag')
        if(id === null) {
            window.location.href = `http://127.0.0.1:5502/new-post.html`
        } else {
            window.location.href = `http://127.0.0.1:5502/post-test.html?id=${id}`
        }
    })
})

