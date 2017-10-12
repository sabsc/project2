$(document).ready(function() {


    $('#fullpage').fullpage({
        verticalCentered: true,

		navigation: false,
		navigationPosition: 'right',
		navigationTooltips: ['firstSlide', 'secondSlide', 'thirdSlide','fourthSlide','fifthSlide','sixthSlide','seventhSlide','eighthSlide'],
        
		showActiveTooltip: true,
		touchSensitivity: 80,

        // scrollingSpeed: 500;
        scrollOverflow: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        // scrollOverflow: scrolloverflowed,
        anchors: ['anchor1', 'anchor2', 'anchor3', 'anchor4','anchor5','anchor6', 'anchor7', 'anchor8'],
        menu: '#menu',
        sectionsColor: ['#432c51', '#8F569C', '#D61E70', '#FA5B75', '#f27100', '#FFD464', '#FFFB85', "#dbed78"]
      
     

    });
    $.fn.fullpage.setScrollingSpeed(900);

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

	$('#aapi').qtip({
        content: 'Asian American and Pacific Islander',
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
	$('#report').qtip({
        content: 'Many cases go unreported due to cultural and social factors, such as fear of shame upon a family',
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



    setInterval(function(){
        $(".lotus-2").fadeOut(function() {
            $(this).attr("src","./images/flame.png").fadeIn().delay(1000).fadeOut(function(){
                $(this).attr('src', './images/lotus.png').fadeIn().delay(1000);
            });
         }
        );
    }, 4000);        


    var ctx = document.getElementById("myChart").getContext('2d');
	var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Whites", "African Americans", "Hispanics", "Mixed Race", "American Indians and Alaskan Natives", "Asian Americans and Pacific Islanders"],
        datasets: [{
            label: '% of group reporting sexual violence',
            data: [21.3, 26.3, 21.2, 27, 30.7, 51],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                '#F4A7BC'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                '#AD0B64'
            ],
            borderWidth: .7
        }]
    },
    options: {
        scales: {
            
            xAxes: [{
	            gridLines: {
	                offsetGridLines: true
	            },
	            ticks: {
                    beginAtZero:true,
                    autoSkip: false,
                    maxRotation: 20
                }
			}],
			yAxes: [{
                ticks: {
                    beginAtZero:true,
                    autoSkip: false
                }
            }]
        },

        layout: {
        	padding: {
        		bottom: 15
        	}
        }
        
    }




});




