// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .




// Script for the live time at the top.
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  if (h > 12) {
    h = h - 12
    var p = "pm"
  } else {
    p = "am"
  };
  document.getElementById('time').innerHTML =
    h + ":" + m + p;

  var t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i
  }; // add zero in front of numbers < 10
  return i;
}

let homeClick = false;


function hintBox() {
  setTimeout(function () {

    if ($(document).width() >= 600) {
      if (!homeClick) {
        $('.info-box').addClass('info-b-active')
      }
    }

  }, 3000)
}


// if ($(document).width() >= 600) {
//   $(".project-scr").addClass('not-phone');
// }


//  This is the script for the loading screen and home button function.
let showLoading = true;
$(document).ready(function () {
  $(".home").click(function () {
    homeClick = true;
    if (showLoading) {
      $(".loading-screen").addClass('active');
      $(".bin").addClass('b');
      $(".n").addClass('name');
      $(".scroll").addClass('innerIam');
      $(".info-box").removeClass('info-b-active')
      setTimeout(function () {
        $(".home-screen").addClass('active');
        $(".loading-screen").removeClass('active');
        if (showLoading) {
          $(".headGrid").removeClass('hide');
        }

      }, 14000);
    } else {
      $(".home-screen").addClass('active')
      $(".tag").removeClass('tag_show');
      $(".gallery-screen").removeClass('active')
      $(".about-screen").removeClass('active')
      $(".portfolio-screen").removeClass('active')
      $(".contact-screen").removeClass('active')
      $(".project-screen").removeClass('active')
      $(".headGrid").removeClass('batt_black')
      $(".headGrid").removeClass('hide')
      $(".info-box").removeClass('info-b-active')
      $(".projects").removeClass('projects-active')
      $(".project-tiles").removeClass('home-projects-active')
      $(".full-bg-blur").removeClass('bg-blur-active')
      $(".tile-title").removeClass('tt-show')
      $(".h-b-title").removeClass('hide')
      $('.project-images, .project-text').children().remove()

      if (orient === false) {
        $('.center').addClass('portraitC');
        $('.screen').addClass('portraitS');
        $('.polaroid-container').removeClass('add-flex');

        orient = true
      }


    }
    showLoading = false;
  });
});

// script for gallery button
$(document).ready(function () {
  $(".gallery").click(function () {
    $(".gallery-screen").addClass('active')
    $(".headGrid").addClass('batt_black')
    $(".home-screen").removeClass('active')
  });
});

// script for project button
let project_index = null

function projectOverlay() {
  $(".project-tiles").on('click', function () {
    project_index = project_json[$(this).data('id')]
    console.log(project_index)
    // console.log($(this).class())

    $(".project-screen").addClass('active')
    $('.project-images').append(lge_img(project_index))
    $('.project-text').append(project_text(project_index))
    $(".headGrid").addClass('hide')
  });
};

$(document).ready(function () {
  $(".project-close-b").click(function () {
    $(".project-screen").removeClass('active')
    $('.project-images, .project-text').children().remove()
    $(".headGrid").addClass('hide')
  });
});


// script for portfolio button
$(document).ready(function () {
  $(".portfolio").click(function () {
    $(".portfolio-screen").addClass('active')
    $(".tag").addClass('tag_show');
    $(".headGrid").addClass('batt_black')
    $(".home-screen").removeClass('active')
  });
});

// script for notes button
$(document).ready(function () {
  $(".about").click(function () {
    $(".about-screen").addClass('active')
    $(".headGrid").addClass('batt_black')
    $(".homeS").removeClass('active')
  });
});

// script for contact details button
$(document).ready(function () {
  $(".contact").click(function () {
    $(".contact-screen").addClass('active')
    $(".headGrid").addClass('batt_black')
    $(".home-screen").removeClass('active')
  });
});

// script for project tile button
$(document).ready(function () {
  $(".project-b-overlay, .full-bg-blur, .tt").click(function () {
    $(".projects").toggleClass('projects-active')
    $(".project-tiles").toggleClass('home-projects-active')
    $(".full-bg-blur").toggleClass('bg-blur-active')
    $(".headGrid").toggleClass('hide')
    $(".tile-title").toggleClass('tt-show')
    $(".h-b-title").toggleClass('hide')


  });
});


// script for orientation button
orient = true;
$(document).ready(function () {
  $(".tag").click(function () {
    if ((orient)) {
      $('.center').addClass('landscapeC');
      $('.screen').addClass('landscapeS');
      $(".headGrid").addClass('hide')
      $('.polaroid-container').addClass('add-flex');
      $('.center').removeClass('portraitC');
      $('.screen').removeClass('portraitS');
      orient = false
    } else {
      $('.center').removeClass('landscapeC');
      $('.screen').removeClass('landscapeS');
      $(".headGrid").removeClass('hide')
      $('.polaroid-container').removeClass('add-flex');
      $('.center').addClass('portraitC');
      $('.screen').addClass('portraitS');
      orient = true
    }
  });
});

// script for image toggle
let image_pos = 2
$(document).ready(function () {
  $('.i-one').click(function () {
    image_pos = 1
  })
  $('.i-two').click(function () {
    image_pos = 2
  })
  $('.i-three').click(function () {
    image_pos = 3
  })

  if (image_pos == 1) {
    $('.project-images').addClass('left-f')
    $('.project-images').removeClass('right-f')
    $('.project-images').removeClass('middle-f')
  } else if (image_pos == 2) {
    $('.project-images').addClass('middle-f')
    $('.project-images').removeClass('right-f')
    $('.project-images').removeClass('left-f')
  } else if (image_pos == 3) {
    $('.project-images').addClass('right-f')
    $('.project-images').removeClass('middle-f')
    $('.project-images').removeClass('left-f')
  }
});


const project_json = [{
  id: '0',
  title: 'RbZombies',
  image: ['zmedbattle.png', 'ztallmap.png', 'zshortcc.png'],
  techStack: ['ruby-logo.png'],
  date: 'February 2018',
  description: 'Foo',
  link: 'https://github.com/KitoC/coderAcademyAsssignment-1',
  linkTag: 'Checkout the GitHub repo.',
  color: '#272822',
  tileImage: 'zomb-icon.png'
}, {
  id: '1',
  title: 'ShareSpace',
  image: ['ss-1.png'],
  techStack: ['rails-icon.png', 'Heroku-logo.png'],
  date: 'February 2018',
  description: '',
  link: 'https://stark-anchorage-29476.herokuapp.com/',
  linkTag: 'Checkout the live app.',
  color: 'blue',
  tileImage: ''
}, {
  id: '2',
  title: 'ToDo List',
  image: ['KC101.png'],
  techStack: ['ruby-logo.png'],
  date: 'February 2018',
  description: '',
  link: '',
  linkTag: '',
  color: 'blue',
  tileImage: ''
}]



function projectsDisplay() {
  let array = project_json
  for (project of array) {
    $('.home-projects').append(polaroid_var(project))
  }
  projectOverlay()
}

// Polaroid template
function polaroid_var(object, position) {
  let stack = ''
  for (ts of object.techStack) {
    stack += `<div class="ts-image"
      style="background-image: url('assets/${ts}');">
      </div>`
  }
  return `
  <div data-id="${object.id}"
  class="button-tile project-tiles"
  style="background-image: url('assets/${object.tileImage}');background-color:${object.color};" >
  <p>${object.title}</p>
  </div>
`
  // <div class="polaroid-box">
  //   <div data-id="${object.id}"
  //   class="polaroid"
  //   style="transform: rotate(${position}deg)">
  //     <div class="polaroid-pin"></div>
  //     <div class="polaroid-img"
  //     style="background-image: url('assets/${object.image[0]}');">
  //     </div>
  //     <p class="texta">${object.title}</p>
  //   </div><div class="tech-stack">${stack}</div>
  //   </div>
}

// Large image template
function lge_img(object, count) {
  let image_count = count
  let images = ""
  let i = 0
  for (image of object.image) {
    images += `
    <div data-id="${object.id}"
  class="lge-project-frame img-${i}">
  <div class="lge-project-img"
  style="background-image: url('assets/${object.image[i]}');">
  <h3 class="texta">${object.title}</h3>
  </div>
  </div>`
    i++
  }
  return images
}


function project_text(project) {
  let text = `
  <a class="project-link" href="${project.link}">${project.linkTag}</a>
    <p class='project-description'>${project.description}</p>`
  return text
}

function specificRandom() {
  let set1 = Math.floor((Math.random() * 7) + 3.5);
  let set2 = Math.floor((Math.random() * -7) + -3.5);
  let picker = true

  if (picker) {
    picker = false
    return set1
  } else {
    picker = true
    return set2
  }


}