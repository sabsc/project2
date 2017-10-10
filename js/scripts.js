$(document).ready(function() {

	// var scrolloverflowed;
	// if ($('#fullpage').width() < 1024) { // check the width (window.width() or other method)
	// 	scrolloverflowed = false;
	// } else {
	// 	scrolloverflowed = true;
	// }

    $('#fullpage').fullpage({
        verticalCentered: true,
        // scrollingSpeed: 500;
        scrollOverflow: true,
        slidesNavigation: true,
        // scrollOverflow: scrolloverflowed,
        anchors: ['anchor1', 'anchor2', 'anchor3', 'anchor4','anchor5','anchor6', 'anchor7'],
        menu: '#menu',
        sectionsColor: ['#432c51', '#8F569C', '#D61E70', '#FA5B75', '#FA8A5D', '#FFD464', '#FFFB85']
      
     

    });

    var quiz = jQuery('#quiz').quiz('19Wd8VmWC_X0VUCDm1cz6A-iyExG8L-t7iE7cxVlXDr8');

	$('#a_qtip').qtip({
        content: 'After the Phillipine-American War, World War II and Japan’s surrender, the Korean War and the Vietnam War',
        show: {
            effect: function() {
                $(this).fadeTo(500, 1);
            }
        },
        hide: {
            effect: function() {
                $(this).slideUp();
            }
        },
        style: {
       		classes: 'qtip-bootstrap'
    	}
     });


	$('#chrys_qtip').qtip({
        content: 'While Loti was stationed in Nagasaki in 1885, he lived in a rental home that came along with a woman named Kiku. Loti temporarily married her there, as was the custom in these living arrangements. In his descriptions of Kiku, Loti created a hypersexualized, exotic image of her but also portrayed her as a tiny, submissive plaything. At the same time, he made it clear he was suspicious of her, describing her as cat-like and almost cunning.',
        show: {
            effect: function() {
                $(this).fadeTo(500, 1);
            }
        },
        hide: {
            effect: function() {
                $(this).slideUp();
            }
        },
        style: {
       		classes: 'qtip-bootstrap'
    	}
     });

	$('#long_qtip').qtip({
        content: 'Instead of Kiku, there was a woman Cho-Cho-San. The man who lived in Nagasaki and married Cho-Cho-San was Lieutenant Benjamin Franklin Pinkerton. Pinkerton only stays briefly in Japan, then returns to America and finds a permanent wife. Meanwhile, Cho-Cho-San has Pinkerton’s child. When Cho-Cho-San learns about Pinkerton’s new life, she kills herself.',
        show: {
            effect: function() {
                $(this).fadeTo(500, 1);
            }
        },
        hide: {
            effect: function() {
                $(this).slideUp();
            }
        },
        style: {
       		classes: 'qtip-bootstrap'
    	}
     });


	$('#long_qtip2').qtip({
        content: 'Cho-Cho-San is also depicted as gentle, docile and submissive. Her suicide makes it seem like she was so attached to Pinkerton that she lived for him.',
 		show: {
            effect: function() {
                $(this).fadeTo(500, 1);
            }
        },
        hide: {
            effect: function() {
                $(this).slideUp();
            }
        },
        style: {
       		classes: 'qtip-bootstrap'
    	}
     });

	$('#puccini').qtip({
        content: 'This version of the geisha wife story became a staple in the world of opera.',
 		show: {
            effect: function() {
                $(this).fadeTo(500, 1);
            }
        },
        hide: {
            effect: function() {
                $(this).slideUp();
            }
        },
        style: {
       		classes: 'qtip-bootstrap'
    	}
     });
 });

 //your published spreadsheet key or URL goes here

// $('#fullpage').fullpage({
//     scrollOverflow: true
// });



    // setInterval(function(){
    //     $(".lotus").fadeOut(function() {
    //         $(this).attr("src","./images/flame.png").fadeIn().delay(1000).fadeOut(function(){
    //             $(this).attr('src', './images/lotus.png').fadeIn().delay(1000);
    //         });
    //      }
    //     );
    // }, 4000);        

// $(".nano").nanoScroller();

// $('.timeline').timelify({
// 			animLeft: "fadeInLeft",
// 		animCenter: "fadeInUp",
// 		animRight: "fadeInRight",
// 		animSpeed: 600,
// 		offset: 150
// 	});