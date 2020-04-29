$(document).ready(function(){

    //localstorage usage

   // actives = localStorage.getItem('actives');
    //console.log(actives);
    //$(actives).addClass('active');


    //Event Delegation
    $('.wrapper').click((e)=>{

        

        if($(e.target).hasClass('js--icon') || $(e.target).hasClass('sections_name')){

            let a;

            if($(e.target).hasClass('js--icon')){
                a = e.target.parentNode.id;
                
                let icon = $(e.target);

                if(icon.hasClass('ion-android-arrow-dropdown')){
                    icon.addClass('ion-android-arrow-dropup');
                    icon.removeClass('ion-android-arrow-dropdown');
                }else{
                    icon.addClass('ion-android-arrow-dropdown');
                    icon.removeClass('ion-android-arrow-dropup');
                }
            }
            
            if($(e.target).hasClass('sections_name')){
                a = e.target.id;

                let icon = $(e.target).find('.js--icon');


                if(icon.hasClass('ion-android-arrow-dropdown')){
                    icon.addClass('ion-android-arrow-dropup');
                    icon.removeClass('ion-android-arrow-dropdown');
                }else{
                    icon.addClass('ion-android-arrow-dropdown');
                    icon.removeClass('ion-android-arrow-dropup');
                }
            }


            $('#'+a).siblings().slideToggle(200);

        }

        if($(e.target).hasClass('js--li')){
            var source = $(e.target).attr("data-video");
            $('iframe').attr('src',source);
            localStorage.setItem('actives',$(e.target).attr('class'));
            $(e.target).addClass('active');
        }
    });
});