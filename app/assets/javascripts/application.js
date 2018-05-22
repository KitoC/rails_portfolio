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
    if (!homeClick) {
      $('.info-box').addClass('info-b-active')
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
        $(".headGrid").removeClass('batt_hide')

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
      $(".headGrid").removeClass('batt_hide')
      $(".info-box").removeClass('info-b-active')

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
function projectOverlay () {
  $(".polaroid-r, .polaroid-l").on('click', function () {
    $(".project-screen").addClass('active')
  });
};

$(document).ready(function () {
  $(".project-overlay").click(function () {
    $(".project-screen").removeClass('active')
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

// script for orientation button
orient = true;
$(document).ready(function () {
  $(".tag").click(function () {
    if ((orient)) {
      $('.center').addClass('landscapeC');
      $('.screen').addClass('landscapeS');
      $(".headGrid").addClass('batt_hide')
      $('.polaroid-container').addClass('add-flex');
      $('.center').removeClass('portraitC');
      $('.screen').removeClass('portraitS');
      orient = false
    } else {
      $('.center').removeClass('landscapeC');
      $('.screen').removeClass('landscapeS');
      $(".headGrid").removeClass('batt_hide')
      $('.polaroid-container').removeClass('add-flex');
      $('.center').addClass('portraitC');
      $('.screen').addClass('portraitS');
      orient = true
    }
  });
});


const project_json = [{
  title: "Ruby Zombie Run",
  image: 'zmedbattle.png'
}]

function projectsDisplay() {
  let array = project_json
  for (project of array) {
    $('.polaroids-t').append(`<div class="polaroid-l">
      <div class="polaroid-pin"></div>
      <div class = "polaroid-img"
      style = "background-image: url('assets/${project.image}');" >
      </div>
      <p class="texta">${project.title}</p>
    </div>`)
    projectOverlay()
  }
}