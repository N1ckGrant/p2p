//плавающее меню
(function(){
    var a = document.querySelector('#aside1'), b = null, P = 0;
    window.addEventListener('scroll', Ascroll, false);
    document.body.addEventListener('scroll', Ascroll, false);
    function Ascroll() {
        if (b == null) {
            var Sa = getComputedStyle(a, ''), s = '';
            for (var i = 0; i < Sa.length; i++) {
                if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
                    s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
                }
            }
            b = document.createElement('div');
            b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
            a.insertBefore(b, a.firstChild);
            var l = a.childNodes.length;
            for (var i = 1; i < l; i++) {
                b.appendChild(a.childNodes[1]);
            }
            a.style.height = b.getBoundingClientRect().height + 'px';
            a.style.padding = '0';
            a.style.border = '0';
            a.style.margin = '0'
        }
        var Ra = a.getBoundingClientRect(),
            R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('.article').getBoundingClientRect().bottom);  // селектор блока, при достижении нижнего края которого нужно открепить прилипающий элемент
        if ((Ra.top - P) <= 0) {
            if ((Ra.top - P) <= R) {
                b.className = 'stop';
                b.style.top = - R +'px';
            } else {
                b.className = 'sticky';
                b.style.top = P + 'px';
            }
        } else {
            b.className = '';
            b.style.top = '';
        }
        window.addEventListener('resize', function() {
            a.children[0].style.width = getComputedStyle(a, '').width
        }, false);
    }
})()

$('#select-doc').on('change',function(){
    console.log($(this)[0].value);
    var foo = $(this).val();
    $('.profile-tab-select').hide();
    $('#'+foo).show();
})

var accords = jQuery('.my_accordion > dd'),
    accordsheading = jQuery('.my_accordion > dt');

accords.hide();

jQuery('.my_accordion > dt').click(function()
{
    if( jQuery(this).hasClass('active') )
    {
        accords.slideUp();
        accordsheading.removeClass('active');
    }
    else
    {
        accordsheading.removeClass('active');
        accords.slideUp();
        jQuery(this).next().slideDown();
        jQuery(this).addClass('active');
    }

    return false;
});


//сайт-бар js
var sidebarStatus = 'closed';
var selectedNode;



function sideBar() {


    // function onSidebarItemClick() {
    //     if (sidebarStatus === 'closed') {
    //         profile_open()
    //     }
    // }
    //
    // function sidebarItemListeners() {
    //     var sideBarItems = document.getElementsByClassName("sidebar-links-item");
    //     // sideBarItems.forEach();
    //     Array.prototype.forEach.call(sideBarItems, function (item) {
    //         item.addEventListener('click', onSidebarItemClick, false)
    //     });
    // }
    //
    // sidebarItemListeners();

    function linkSelect() {
        var links = $('.sidebar-links > div');
        var sub = $('.sub-links li .sub-links-link');
        sub.on('click', function (event) {
            event.preventDefault();
            $(sub).removeClass('select_sub_menu');
            if(this){
                $(this).addClass('select_sub_menu')
            };

        });

        links.on('click', function (event) {
            event.preventDefault();
            links.removeClass('selected');
            if($(this).find('ul').length){
                console.log('hass ul');
                $(this).addClass('selected');
                $(this).find('a.sidebar-link').toggleClass('selected_me')
            } else {
                $(this).addClass('selected');
                links.find('a.sidebar-link').removeClass('selected_me');
            }
        });
        links.find('ul').on('click', function(event){
            event.stopPropagation()
        })

    }
    linkSelect();

    $('#main').mouseup(function (e) {
        e.preventDefault();
        // profile_close();
    });
}

sideBar();

$('div.menu').click(function(){
    console.log('menu_my_body_overflow_body')
    $('body').toggleClass('overflow_body');
    // $('.container-menu-mobile').toggleClass('z-index_menu');

})