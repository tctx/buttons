$(function() {
  $( ".submit-confirm-button" ).click(function() {
    $( ".submit-confirm-button" ).addClass( "animate-submit", 250, validate);
  });

  function validate() {
    setTimeout(function() {
      $( ".submit-confirm-button" ).removeClass( "animate-submit" );
      $( ".submit-confirm-button" ).addClass( "validate", 450, callback );
    }, 2250 );
  }
    function callback() {
      setTimeout(function() {
        $( ".submit-confirm-button" ).removeClass( "validate" );
      }, 1250 );
    }
  });