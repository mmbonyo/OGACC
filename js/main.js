$(function()
	{
		$('a[href*=#]:not([href=#])').click(function()
		 {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
                || location.hostname == this.hostname) 
    {
        var hashStr = this.hash.slice(1);
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + hashStr +']');

        if (target.length) 
        {
            $('html,body').animate({ scrollTop: target.offset().top}, 1000);
            window.location.hash = hashStr;
            return false;
        }
    }
});

	});


$(document).ready(function()
 {
  $("#toggle").click(function() 
  {
    var elem = $("#toggle").text();
    if (elem == "Read More") 
    {
      //Stuff to do when btn is in the read more state
      $("#toggle").text("Read Less");
      $("#text").slideDown();
    } 
    else 
    {
      //Stuff to do when btn is in the read less state
      $("#toggle").text("Read More");
      $("#text").slideUp();
    }
  });
});

