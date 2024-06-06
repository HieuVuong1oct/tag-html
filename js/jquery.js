$(function(){
    $('input').change(function(){
      var a = $('#nameA').val();
      var b = $('#nameB').val();
      var result = $('#result');
      if(a > b) {
          result.text(a);
        } else result.text(b);
    });


    $('#add').click(function() {
        $('#list').append('<li>New item</li>');
      });
    
      $('#remove').click(function() {
        $('#list li:gt(0)').last().remove();
      });

      $('#clone').click(function(event) {
        var elm = $('.box:eq(0)').clone();
        $('.box').last().after(elm);
      });
    
      $('#removeClone').click(function(event) {
        $('.box:gt(0)').last().remove();
      });

      var myFnc = function() {
        var elmLast = $('#list1 li').last();
        $('#list1').prepend(elmLast);
      }
      setInterval(myFnc, 1000);
  });