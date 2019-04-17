
      $(function() {
        // Dissimulation des réponses
        $('.reponse').hide();
        $('.image').each(function() {
              $(this).attr('src', 'img/question.png');
          });
        
        
        // Mise en forme des div du QCM
        var q = $('.question');
        q.css('background', 'linear-gradient(#0098d9,#173ea5)');
        q.css('border-style', 'groove');
        q.css('border-width', '4px');
        q.css('width', '900px');
        q.css('height', '250px');
        q.css('margin', '20px');

        $('.texte').css('float', 'left');
        $('.texte').css('width', '90%');
        $('.image').css('float', 'right');
        $('.image').css('margin-top', '80px');

        // Action au survol du lien « Tester les réponses »
        $('#valider').hover(
          function() { 
            $('.reponse').show();
            if ($(':radio[id="r1"]:checked').val()) {
              $('#img1').attr('src', 'img/bon.png'); 
              $('#reponse1').css('color', 'green');
            }  
            else {
              $('#img1').attr('src', 'img/mauvais.png');
              $('#reponse1').css('color', 'red');
            } 

            if ($(':radio[id="r5"]:checked').val()) {
              $('#img2').attr('src', 'img/bon.png');
              $('#reponse2').css('color', 'green');
            }
            else {
              $('#img2').attr('src', 'img/mauvais.png');
              $('#reponse2').css('color', 'red');
            } 

            if ($(':radio[id="r8"]:checked').val()) {
              $('#img3').attr('src', 'img/bon.png'); 
              $('#reponse3').css('color', 'green');
            }
            else {
              $('#img3').attr('src', 'img/mauvais.png');
              $('#reponse3').css('color', 'red');
            }

            if ($(':radio[id="r12"]:checked').val()) {
              $('#img4').attr('src', 'img/bon.png'); 
              $('#reponse4').css('color', 'green');
            }
            else {
              $('#img4').attr('src', 'img/mauvais.png');
              $('#reponse4').css('color', 'red');

            }

            if ($(':radio[id="r14"]:checked').val()) {
              $('#img5').attr('src', 'img/bon.png'); 
              $('#reponse5').css('color', 'green');
            }
            else {
              $('#img5').attr('src', 'img/mauvais.png');
              $('#reponse5').css('color', 'red');

            }

            if ($(':radio[id="r18"]:checked').val()) {
              $('#img6').attr('src', 'img/bon.png'); 
              $('#reponse6').css('color', 'green');
            }
            else {
              $('#img6').attr('src', 'img/mauvais.png');
              $('#reponse6').css('color', 'red');

            }

            if ($(':radio[id="r19"]:checked').val()) {
              $('#img7').attr('src', 'img/bon.png'); 
              $('#reponse7').css('color', 'green');
            }
            else {
              $('#img7').attr('src', 'img/mauvais.png');
              $('#reponse7').css('color', 'red');

            }

            if ($(':radio[id="r24"]:checked').val()) {
              $('#img8').attr('src', 'img/bon.png'); 
              $('#reponse8').css('color', 'green');
            }
            else {
              $('#img8').attr('src', 'img/mauvais.png');
              $('#reponse8').css('color', 'red');

            }

            if ($(':radio[id="r26"]:checked').val()) {
              $('#img9').attr('src', 'img/bon.png'); 
              $('#reponse9').css('color', 'green');
            }
            else {
              $('#img9').attr('src', 'img/mauvais.png');
              $('#reponse9').css('color', 'red');

            }

            if ($(':radio[id="r28"]:checked').val()) {
              $('#img10').attr('src', 'img/bon.png'); 
              $('#reponse10').css('color', 'green');
            }
            else {
              $('#img10').attr('src', 'img/mauvais.png');
              $('#reponse10').css('color', 'red');

            }


        });  
      }); 