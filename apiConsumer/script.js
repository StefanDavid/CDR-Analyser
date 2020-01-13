(function() {

        var userProfileSource = document.getElementById('user-profile-template').innerHTML,
            userProfileTemplate = Handlebars.compile(userProfileSource),
            userProfilePlaceholder = document.getElementById('user-profile');

          /////////////////////////////////////////////////////////////////////////////////
          document.getElementById('get-client').addEventListener('click', function() {
            var client = document.getElementById('client');
            $.ajax({
              url: 'http://localhost:3001/'+client.value,
            
              success:  function(response) {
                userProfilePlaceholder.innerHTML = userProfileTemplate(response);
                var availableMinutes = parseFloat(response.availableMinutes);
                var list =  response.cdr;
                
                for(var i=0;i<list.length; i++){
                  console.log(list[i]);
                    availableMinutes = availableMinutes-parseFloat(list[i].duration);
                 

                }
                console.log(response);
                available_minutes = availableMinutes;
              }
            });
              
          }, false);
          /////////////////////////////////////////////////////////////////////////////////





        
      })();