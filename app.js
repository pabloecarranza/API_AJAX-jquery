$(document).ready(()=>{
    $('#load').hide();
    $('#userhtml').hide();

    $('#addbtn').click( function(){
        $('#load').fadeIn();
        
        $.ajax({
            type: 'GET',
            url: 'https://randomuser.me/api/?results=5',
            dataType: 'json'
        }).done((data) =>{
            
           let personas = data.results;
           $('#userhtml div').empty();

            $.each(personas, function(indice, persona){
                let card = $(`<div class="col">
                <div class="card h-20">
                  <img src="${persona.picture.large}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${persona.name.first}${persona.name.last}</h5>
                    <p class="card-text">${persona.dob.date}${persona.login.sha256}</p>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted">${persona.email}</small>
                  </div>
                </div>
              </div>`);
              $('#userhtml').append(card);
              
            })
            $('#userhtml').show();
            $('#load').fadeOut();
        })
    })
})