$(function(){
    $('.home-title').on('mouseover', function(){
        var coverName = $(this).attr('id');
        console.log(this)
        $('img').attr('src', `../../img/home/cover_${coverName}.jpg`)
    })
})
