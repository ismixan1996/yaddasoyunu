$(document).ready(function(){
   
let images=[]
  

    $('.box').click(function(){

        if(images.length === 2){
            images = [];
        }

        images.push($(this))

        // console.log(images)

        if(images[0] && images[1]){
            let firstSoucre= images[0].attr('src');
            let secondSoucre= images[01].attr('src');
            


            if(firstSoucre===secondSoucre){
                images[0].fadeOut(500)
                images[1].fadeOut(500)
            }

            // $(this).hide('flipped');
        }


        // $(this).hide('flipped');
      });


     






  });
 

