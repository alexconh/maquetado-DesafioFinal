const print_posts = (posts) => {
    let posts_list = ''
    let counter = 1
    for (id in posts) {
        if(counter === Object.keys(posts).length) {
            posts_list += `
            <img src="${posts[id].urlCover}" class="post-profile-picture align-self-start mr-3"
            alt="...">
            `
        }
        posts_list += `
            <article data-id="${id}" class="media single-post automatic-post">
                <img src="assets/images/profilepicture.jpg" class="post-profile-picture align-self-start mr-3"
                    alt="...">
                <div class="media-body">
                    <p>${posts[id].author} for ${posts[id].organization}</p>
                    <p class="date">${posts[id].date} </p>
                    <h2 class="mt-0"><a class="text-decoration-none anchor-id" href="post-test.html?id=${id}" data-id="${id}">${posts[id].title}</a></h2>
                    <ul class="tag-list">
                        <li><a><span>#</span>functional</a></li>
                        <li><a><span>#</span>python</a></li>
                        <li><a><span>#</span>testing</a></li>
                    </ul>
                    <div class="post-buttons">
                        <ul class="actions">
                            <li>
                                <a class="d-flex post-link">
                                    <img src="assets/icons/post-reaction-like.svg"> 33
                                    <span class="d-none d-md-block">reactions</span>
                                </a>
                            </li>
                            <li>
                                <a class="d-flex post-link">
                                    <img src="assets/icons/post-comment.svg"> 14
                                    <span class="d-none d-md-block">comments</span>
                                </a>
                            </li>
                        </ul>
                        <div class="right-post-buttons">
                            <div class="reading">${posts[id].minsToRead} min read</div>
                            <button data-id="${id}" type="button" class="btn btn-secondary">Save</button>
                        </div>
                    </div>
                </div>
            </article>
        `
        //console.log(id)
        $('.posts').prepend(posts_list)
        posts_list = ''
        counter++
    }
    // tags_list = `<div class="tags_list d-block">${tags_list}</div>`

}

const obtain_posts = () => {
    $.ajax({
        url: "https://pruebas-frontend-default-rtdb.firebaseio.com/post/.json",
        method: 'GET'
    }).done(function (posts) {
        //console.log(posts)
        print_posts(posts)
    }).fail(function (err) {
        console.log(err)
    })
}
obtain_posts()

const print_tags = (tags) => {
    let tags_list = ''
    for (item in tags) {
        tags_list += `
        <a class="nav-link pl-2 leftAside" data-id="${item}">#${tags[item].tagname}</a>
        `
        //console.log(tags[item].tagname)
    }
    // tags_list = `<div class="tags_list d-block">${tags_list}</div>`
    $('#tags__home').append(tags_list)
}
$.ajax({
    url: "https://pruebas-frontend-default-rtdb.firebaseio.com/tags/.json"
}).done(function (tags) {
    //console.log(posts)
    print_tags(tags)
}).fail(function (err) {
    console.log(err)
})

$('.posts').on('click','.automatic-post', function(){
    let id_post = $(this).data('id')
    //console.log( `/post-test.html?id=${id_post}` )
    window.location.href = `http://127.0.0.1:5502/post-test.html?id=${id_post}`
})