(function($) {
    var PHPLeague = {
        panel : function() {
            var title;
            
            $(".adminpanel-menu-link").each(function() {
                if ($(".adminpanel-menu-link:first").attr("href") == "#") {
                    $(".adminpanel-menu-link:first").addClass('visible');
                    $(".adminpanel-content-box:first").addClass('visible');
                } else {
                    title = $(this).attr("id").replace("adminpanel-menu-", "");
                    if ($(this).attr("href") == "#") {
                        $(this).addClass('visible');
                        $("#adminpanel-content-" + title).addClass('visible');
                    }
                }
            });

            $(".adminpanel-menu-link").click(function (event) {
                if ($(this).attr("href") == "#") {
                    event.preventDefault();
                    title = $(this).attr("id").replace("adminpanel-menu-", "");
                    $(".adminpanel-menu-link").removeClass('visible');
                    $("#adminpanel-menu-" + title).addClass('visible');
                    $(".adminpanel-content-box").removeClass('visible');
                    $(".adminpanel-content-box").hide();
                    $("#adminpanel-content-" + title).fadeIn('fast');
                    $(".adminpanel-content-box").removeClass('visible')
                }
            });
            
            $("h3.heading").each(function() {
                $(this).click(function () {
                    $(this).next().toggle('slow');
                })
            });
        }
    };
    
    jQuery(document).ready(function($) {
        PHPLeague.panel();
    });
    
})(jQuery);