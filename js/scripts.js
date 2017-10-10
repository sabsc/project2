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