jQuery(document).ready(function ($) {

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////// THIS IS THE BEGINNING

  $('.masthead-nav > li > a').click(function() {
    if ($(this).parent().hasClass('active')) return false;
    var name = $(this).attr('href');
    var name2 = $(this).attr('href').substring(1);
    var $visible = $('.cover:visible');
    $('.active').removeClass('active');
    $(this).parent().addClass('active');
    if ($visible.length == 0) showContent(name);
    else $visible.fadeOut(300, function() {
      showContent(name);
    });
    setTimeout(function() {
      $('body').removeAttr('data-section');
      $('body').attr('data-section', name2);
    }, 300);
  });

  $('.btn, .masthead-brand a').click(function() {
    var name = $(this).attr('href');
    var name2 = $(this).attr('href').substring(1);
    var $visible = $('.cover:visible');
    $('.masthead-nav > li.active').removeClass('active');
    $('.masthead-nav > li > a[href="' + name + '"]').parent().addClass('active');
    if ($visible.length == 0) showContent(name);
    else $visible.fadeOut(300, function() {
      showContent(name);
    });
    setTimeout(function() {
      $('body').removeAttr('data-section');
      $('body').attr('data-section', name2);
    }, 300);
  });

  function showContent(name) {
    $(name).fadeIn(300);
  }

  function showHash() {
    var hash = window.location.hash.slice(1); // get the hash, and strip out the "#"
    if(window.location.hash != ''){
      $('.masthead-nav > li > a[href="#' + hash + '"]').trigger('click');
      $('body').attr('data-section', hash);
    } else {
      $('.masthead-nav > li > a[href="#cover"]').trigger('click');
      $('body').attr('data-section', 'cover');
    }
  };

  function myHTMLInclude() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            myHTMLInclude();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
  }

  $(window).load(function() {
    showHash();
    setTimeout(function() {
      $('body').removeClass('invisible').addClass('fadeIn');
    }, 300);
  });

  myHTMLInclude();


////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//////////////////////////////////////////////// THIS IS THE END

});
