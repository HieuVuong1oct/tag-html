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

      $('#clone').click(function() {
        var elm = $('.box:eq(0)').clone();
        $('.box').last().after(elm);
      });
    
      $('#removeClone').click(function() {
        $('.box:gt(0)').last().remove();
      });

      var myFnc = function() {
        var elmLast = $('#list1 li').last();
        $('#list1').prepend(elmLast);
      }
      setInterval(myFnc, 1000);

      $('#change').click(function(){
        $('.box1').toggleClass('mau');
      })

      $('#change').click(function(){
        $('.box2').toggle('mau');
      })

      $('h3').click(function() {
        $('.box3').slideUp(400);
        $(this).next('.box3').slideToggle(400);
      });

      $('.box4:eq(0)').show();
      $('.tab-list li').click(function(){
        var n = $('.tab-list li').index(this);
        $('.tab-list li').removeClass('active');
        $(this).addClass('active');
        $('.box4').hide();
        $('.box4:eq('+ n +')').fadeIn(400);
      })

      
  });