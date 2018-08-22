jQuery(function($) {  
    var tocken = "286321780.b32e321.8d4d0e4c9c50405e817ee68a1b326edb"; /* Access Tocken 입력 */  
    var count = "20";  
    $.ajax({  
        type: "GET",  
        dataType: "jsonp",  
        cache: false,  
        url: "https://api.instagram.com/v1/users/self/media/recent/?access_token=" + tocken + "&count=" + count,
        success: function(response) {  
        if ( response.data.length > 0 ) {
            for(var i = 0; i < response.data.length; i++) {
                var insta = '<div class="insta-box">';
                insta += "<a target='_blank' href='" + response.data[i].link + "'>";
                insta += "<div class'image-layer'>";
                insta += '<img src="' + response.data[i].images.thumbnail.url + '">';
                insta += "</div>";
                if ( response.data[i].caption !== null ) {
                    insta += "<div class='caption-layer'>";
                    if ( response.data[i].caption.text.length > 0 ) {
                        insta += "<p class='insta-caption'>" + response.data[i].caption.text + "</p>"
                    }
                    insta += "<span class='insta-likes'>" + response.data[i].likes.count + " Likes</span>";  
                    insta += "</div>";  
                }  
                insta += "</a>";  
                insta += "</div>";  
                $("#instaPics").append(insta);
            }  
        }  
        $(".insta-box").hover(function(){
            $(this).find(".caption-layer").css({"backbround" : "rgba(255,255,255,0.7)", "display":"block"});  
        }, function(){  
            $(this).find(".caption-layer").css({"display":"none"});  
        });  
        }  
       });  
});  