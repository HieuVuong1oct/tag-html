
$(document).ready(function(){
    $('.reset').click(function(){
        $('#manhinh').text('0');
    })

    $('.add').click(function(){
        if($('#manhinh').text()=='0'){
            $('#manhinh').text($(this).text()) ;
        }else{
            $('#manhinh').text($('#manhinh').text()+$(this).text()) ;
        }
        
    })

    $('.add2').click(function(){
        if($('#manhinh').text()=='0'){
            $('#manhinh').text($(this).text()) ;
        }else{
            $('#manhinh').text($('#manhinh').text()+ '**2') ;
        }
        
    })

    $('.add3').click(function(){
        if($('#manhinh').text()=='0'){
            $('#manhinh').text($(this).text()) ;
        }else{
            $('#manhinh').text($('#manhinh').text()+ '*') ;
        }
        
    })

    $('.del').click(function(){
        $('#manhinh').text($('#manhinh').text().slice(0,-1));
        if($('#manhinh').text() == ""){
            $('#manhinh').text('0');
        }
    })

    $('.result').click(function(){
        // if ($('#manhinh').text().includes('--')) {
        //     $('#manhinh').text($('#manhinh').text().replace(/--/g, '+'));
            
        // }
        // if($('#manhinh').text().includes('++')){
        //    $('#manhinh').text($('#manhinh').text().replace(/\+\+/g, '+'));
        // }
        if($('#manhinh').text().indexOf('--') != '-1'){
            $('#manhinh').text($('#manhinh').text().replace(/--/g, '+'));
        }
        if($('#manhinh').text().indexOf('++') != '-1'){
            $('#manhinh').text($('#manhinh').text().replace(/\+\+/g, '+'));
        }
        
        try{
            $('#manhinh').text(eval($('#manhinh').text()));
        }catch{
            $('#manhinh').text('error');
        }
    })

    $('.add1').click(function(){
        try{
            $('#manhinh').text(Math.sqrt(eval($('#manhinh').text())));
        }catch{
            $('#manhinh').text('error');
        }
    })
   
})