// Hamburger Btn
// let showBtn = document.querySelector('.btn-toggle');
// let closeBtn = document.querySelector('.btn-close');
// let mainMenu = document.querySelector('.mobile-nav');

// showBtn.addEventListener('click', () => {
//     btnResponsive();
// });

// closeBtn.addEventListener('click', () => {
//     btnResponsive();
// });


// function btnResponsive() {
//     showBtn.classList.toggle('out');
//     closeBtn.classList.toggle('show');
//     mainMenu.classList.toggle('show');
// }

let showBtn = $('.btn-toggle');
let closeBtn = $('.btn-close');
let mainMenu = $('.mobile-nav');

function bthResponsive(a, b, c) {
    a.toggleClass('out');
    b.toggleClass('show');
    c.toggleClass('show');
}

showBtn.click(function () {
    bthResponsive(showBtn, closeBtn, mainMenu);
    document.querySelector('html').style.position = 'fixed';
})

closeBtn.click(function () {
    bthResponsive(showBtn, closeBtn, mainMenu);
})

// Lang
// let cLang = document.querySelector('.current-lang');
// let sLang = document.querySelector('.selections-lang');
// let sLangItem = document.querySelectorAll('.selections-lang a');

// cLang.addEventListener('click', (e) => {
//     e.stopPropagation();
//     sLang.classList.toggle('show');
// });

// sLangItem.forEach((item) => {
//     item.addEventListener('click', function (e) {
//         let choose = this.innerHTML;
//         document.querySelector('.current-lang span').innerHTML = choose;
//     });
// });


// document.addEventListener('click', (e) => {
//     sLang.classList.remove('show');
// });

let cLang = $('.current-lang');
let sLang = $('.selections-lang');
let sLangItem = $('.selections-lang a');

cLang.click(function (e) {
    e.stopPropagation();
    sLang.toggleClass('show');
});

sLangItem.click(function () {
    let choose = this.innerHTML;
    $('.current-lang span').text(choose);
})


$(document).click(function () {
    sLang.removeClass('show');
});


// Back to top
// let moveTop = document.querySelector('.movetop');
// moveTop.addEventListener('click', function (e) {
//     e.preventDefault();
//     window.scrollBy({
//         top: -document.body.offsetHeight,
//         behavior: "smooth",
//     });
// })

let moveTop = $('.movetop');
moveTop.click(function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
})



// Button back to top hide
// let btnTop = document.querySelector('.btntop');
// let slider = document.querySelector('.slider');
// let header = document.querySelector('header');
// let view = document.querySelector('.view');
// window.addEventListener('scroll', function () {
//     let scrollTop = document.querySelector('html').scrollTop;

//     if (scrollTop < (slider.clientHeight - header.clientHeight) || (scrollTop + window.outerHeight - document.querySelector('footer').clientHeight) > document.querySelector('footer').offsetTop) {
//         btnTop.classList.remove('active');
//     } else {
//         btnTop.classList.add('active');
//     }
// });

// btnTop.addEventListener('click', function (e) {
//     e.preventDefault();
//     window.scrollBy({
//         top: -document.body.offsetHeight,
//         behavior: "smooth",
//     });
// })


let btnTop = $('.btntop');
let slider = $('.slider');
let header = $('header');
let view = $('.view');




$(window).on('scroll', () => {
    let scrollTop = $('html').scrollTop();
    if (scrollTop < (slider.height() - header.height()) || (scrollTop + $(window).innerHeight()) > $('footer').offset().top) {
        btnTop.removeClass('active');
    } else {
        btnTop.addClass('active');
    }
});

btnTop.on('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});



// Chang menu color
// window.addEventListener('scroll', function () {
//     let scrollTop = document.querySelector('html').scrollTop;
//     if (scrollTop > (slider.clientHeight - header.clientHeight)) {
//         header.classList.add('change');
//     } else {
//         header.classList.remove('change');
//     }
// });

$(window).on('scroll', () => {
    let scrollTop = $('html').scrollTop();

    if (scrollTop > (slider.height() - header.height())) {
        header.addClass('change');
    } else {
        header.removeClass('change');
    }
});

// =========================================== //

// Modal video
// let videoIf = document.querySelector('#video__iframe');
// let playIf = document.querySelectorAll('.products__video-column .image');
// let popup = document.querySelector('.popup');
// playIf.forEach((e) => {
//     e.addEventListener('click', function () {
//         let srcVideo = this.getAttribute('data-video-src');
//         console.log(srcVideo);
//         videoIf.src = `https://www.youtube.com/embed/${srcVideo}?autoplay=1`;
//         popup.classList.add('active');
//     })
// });

// document.querySelector('.close').addEventListener('click', () => {
//     popup.classList.remove('active');
//     videoIf.src = '';
// })

// popup.addEventListener('click', () => {
//     popup.classList.remove('active');
// })


let videoIf = $('#video__iframe');
let playIf = $('.products__video-column .image');
let watchVideo = $('.video-info .btn');
let popup = $('.popup');
playIf.on('click', function () {
    let srcVideo = $(this).attr('data-video-src');
    videoIf.attr('src', `https://www.youtube.com/embed/${srcVideo}?autoplay=1`);
    popup.addClass('active');
});

watchVideo.on('click', e => {
    e.preventDefault();
    let srcVideo = watchVideo.attr('data-video-src');
    videoIf.attr('src', 'https://www.youtube.com/embed/' + srcVideo + '?autoplay=1')
    popup.addClass('active');
})



$('.close').on('click', () => {
    popup.removeClass('active');
    videoIf.attr('src', '');
});

popup.on('click', () => {
    popup.removeClass('active');
    videoIf.attr('src', '');
});



// Slider
// let sliderItem = document.querySelectorAll('.slider__img-item');
// let sliderCurrent = 0;
// let dote = document.querySelectorAll('.paging ul li ')

// document.querySelector('.switch .next').addEventListener('click', function () {
//     if (sliderCurrent < sliderItem.length - 1) {
//         sliderTo(sliderCurrent + 1);
//     }

// })

// document.querySelector('.switch .prev').addEventListener('click', function () {
//     if (sliderCurrent > 0) {
//         sliderTo(sliderCurrent - 1);
//     }
// })

// function sliderTo(to) {
//     sliderItem[sliderCurrent].classList.remove('active');
//     sliderItem[to].classList.add('active');
//     dote[sliderCurrent].classList.remove('active');
//     dote[to].classList.add('active');
//     sliderCurrent = to;
//     document.querySelector('.paging .paging__number').innerHTML = (to + 1).toString().padStart(2, '0');
// };

// dote.forEach(function (e, i) {
//     e.addEventListener('click', () => {
//         sliderTo(i);
//     })
// })

// **** Jquery **** //

// let sliderItem = $('.slider__img-item');
// let sliderCurrent = 0;
// let dote = $('.paging ul li ')

// $('.switch .next').on('click', () => {
//     if (sliderCurrent < sliderItem.length - 1) {
//         sliderTo(sliderCurrent + 1);
//     }

// });

// $('.switch .prev').on('click', () => {
//     if (sliderCurrent > 0) {
//         sliderTo(sliderCurrent - 1);
//     }
// });

// function sliderTo(to) {
//     $(sliderItem[sliderCurrent]).removeClass('active');
//     $(sliderItem[to]).addClass('active');
//     $(dote[sliderCurrent]).removeClass('active');
//     $(dote[to]).addClass('active');
//     sliderCurrent = to;
//     $('.paging .paging__number').text((to + 1).toString().padStart(2, '0'));
// };

// dote.click(function (i) {
//     sliderTo(i);
// })

let $carousel = $('.slider__img');
$carousel.flickity({
    // options
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    setGallerySize: false,
    pageDots: false,
    on: {
        change: function (index) {
            let number = $('.paging .paging__number');
            let indexPage = index + 1;
            number.text(indexPage.toString().padStart(2, 0));
        }
    }
});
let dotted = $('.dotted li')
dotted.on('click', function () {
    let index = $(this).index();
    dotted.removeClass('active');
    $(dotted[index]).addClass('active');
    $carousel.flickity('select', index);
})
let prev = $('.switch .prev');
let next = $('.switch .next');
prev.on('click', function () {
    $carousel.flickity('previous');
})
next.on('click', function () {
    $carousel.flickity('next');
})

// Free Scroll view
let views = $('.view__wrap');
$(window).on('load', function () {
    views.flickity({
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        freeScroll: true,
        prevNextButtons: false,
        pageDots: false,
        lazyLoad: 2,


    })
})


// Click to section
// let clickSection = document.querySelectorAll('.header-menu li a');

// clickSection.forEach(function (item) {
//     item.addEventListener('click', function (e) {
//         e.preventDefault();
//         clickSection.forEach(function (e) {
//             e.classList.remove('active');
//         })
//         let id = this.getAttribute('data-id');
//         let heightSection = document.querySelector('#' + id).offsetTop - 80;
//         window.scrollTo({
//             top: heightSection,
//             behavior: "smooth",
//         })
//         item.classList.add('active');
//     })
// })

let clickSection = $('.header-menu li a');
clickSection.on('click', function (e) {
    let scrollTop = $('html').scrollTop();
    e.preventDefault();
    clickSection.removeClass('active');
    let id = $(this).attr('data-id');
    let heightSection = $('#' + id).offset().top;
    if (scrollTop > heightSection) {
        window.scrollTo({
            top: heightSection - 80,
            behavior: "smooth",
        })
    } else {
        window.scrollTo({
            top: heightSection,
            behavior: "smooth",
        })
    }

    $(this).addClass('active');
})

// Scroll active section 
// let arrId = [],
//     arrHeightSection = [];

// clickSection.forEach((item) => {
//     let id = item.getAttribute('data-id');
//     let heightSection = document.querySelector(`#${id}`).offsetTop - document.querySelector('header').offsetHeight;
//     arrId.push(id);
//     arrHeightSection.push(heightSection);

// })
// window.addEventListener('scroll', () => {
//     let scrollTop = document.querySelector('html').scrollTop;

//     arrHeightSection.forEach((eachHeight, index) => {
//         if (scrollTop >= eachHeight) {
//             let id = arrId[index];
//             clickSection.forEach((item) => {
//                 item.classList.remove('active');

//             })
//             document.querySelector(`.header-menu li a[data-id=${id}]`).classList.add('active');
//         }

//     })
// })

let arrId = [],
    arrHeightSection = [];
$(clickSection).each(function () {
    let id = $(this).attr('data-id');
    let heightSection = $(`#${id}`).offset().top - $('header').outerHeight();
    arrId.push(id);
    arrHeightSection.push(heightSection);
})



$(window).on('scroll', () => {
    let scrollTop = $('html').scrollTop();
    $(arrHeightSection).each(function (eachHeight) {
        if (scrollTop >= arrHeightSection[eachHeight]) {
            let id = arrId[eachHeight];
            $(clickSection).each(function () {
                $(this).removeClass('active');
            })
            $(`.header-menu li a[data-id=${id}]`).addClass('active');
        }
    })
})

// Show - hide header
// let scrollHeader = 0;
// window.addEventListener('scroll', function () {
//     let scrollPos = window.pageYOffset;
//     if (scrollPos > scrollHeader) {
//         let heightHeader = header.clientHeight;
//         console.log(heightHeader);
//         header.style.top = -heightHeader + 'px';

//     } else {
//         header.style.top = 0;
//     }
//     scrollHeader = scrollPos;
// })

let scrollHeader = 0;
$(window).on('scroll', () => {
    let scrollTop = $(window).scrollTop();
    if (scrollTop > scrollHeader) {
        let heightHeader = header.height();
        header.css('top', -heightHeader + 'px');

    } else {
        header.css('top', 0);
    }
    scrollHeader = scrollTop;
})

// Photoswipe
var initPhotoSwipeFromDOM = function (gallerySelector) {
    var parseThumbnailElements = function (el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;
        for (var i = 0; i < numNodes; i++) {
            figureEl = thumbElements[i]; // <figure> element
            if (figureEl.nodeType !== 1) {
                continue;
            }
            linkEl = figureEl.children[0]; // <a> element
            size = linkEl.getAttribute('data-size').split('x');
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };
            if (figureEl.children.length > 1) {
                item.title = figureEl.children[1].innerHTML;
            }
            if (linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            }
            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }
        return items;
    };
    var closest = function closest(el, fn) {
        return el && (fn(el) ? el : closest(el.parentNode, fn));
    };
    var onThumbnailsClick = function (e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        var eTarget = e.target || e.srcElement;
        var clickedListItem = closest(eTarget, function (el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });
        if (!clickedListItem) {
            return;
        }
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;
        for (var i = 0; i < numChildNodes; i++) {
            if (childNodes[i].nodeType !== 1) {
                continue;
            }
            if (childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }
        if (index >= 0) {
            openPhotoSwipe(index, clickedGallery);
        }
        return false;
    };
    var photoswipeParseHash = function () {
        var hash = window.location.hash.substring(1),
            params = {};
        if (hash.length < 5) {
            return params;
        }
        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if (!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');
            if (pair.length < 2) {
                continue;
            }
            params[pair[0]] = pair[1];
        }
        if (params.gid) {
            params.gid = parseInt(params.gid, 10);
        }
        return params;
    };
    var openPhotoSwipe = function (index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;
        items = parseThumbnailElements(galleryElement);
        options = {
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),
            getThumbBoundsFn: function (index) {
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect();

                return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
            },
            showAnimationDuration: 0,
            hideAnimationDuration: 0
        };
        if (fromURL) {
            if (options.galleryPIDs) {
                for (var j = 0; j < items.length; j++) {
                    if (items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }
        if (isNaN(options.index)) {
            return;
        }
        if (disableAnimation) {
            options.showAnimationDuration = 0;
        }
        gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };
    var galleryElements = document.querySelectorAll(gallerySelector);
    for (var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i + 1);
        galleryElements[i].onclick = onThumbnailsClick;
    }
    var hashData = photoswipeParseHash();
    if (hashData.pid && hashData.gid) {
        openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
    }
};

$(window).ready(function () {
    initPhotoSwipeFromDOM('.carousel-img');
});


// $('.view__wrap figure').each((e) => {
//     console.log('click');
// })
// $(window).ready(function () {
//     initPhotoSwipeFromDOM('.view__wrap');
// });
