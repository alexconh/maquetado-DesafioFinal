let allPosts = []
let url = window.location.href
//let idPost = url.get('id')
//-MROHUAO8byJ_I_lFD8H
$(document).ready(function () {
    let url = new URLSearchParams(location.search)
    let idPost = url.get('id')

        //console.log(idPost)
        //link carlos https://database-tryouts-default-rtdb.firebaseio.com/posts/.json
            $.ajax(`https://pruebas-frontend-default-rtdb.firebaseio.com/post/${idPost}/.json`)
            .done(function (post) {
                $('h1').html(post.title)
                $('#author').html(post.author)
                $('#minutes').html(post.minsToRead)
                $('#date').html(post.date)
                $('#content').html(post.content)
                $('#coverPhoto').attr('src', post.urlCover)
            })
            .fail(function (err) {
                alert("error al traer posts", err);
            })
            
            $.ajax(`https://pruebas-frontend-default-rtdb.firebaseio.com/tags/.json`)
            .done(function (response) {
                for (item in response) {
                    let items = response[item].tagname
                    //console.log(items)
                    let taglist = `<span class="badge badge-1"><span>#</span>${items}</span> `
                    $('#taglist').append(taglist)
                }
                
            })
            .fail(function (err) {
                alert("error al traer posts", err);
            })

})
