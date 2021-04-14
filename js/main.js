/*****************
    TODO APP
*****************/
$(document).ready(function() {

    // Sorgente dati esterna
    var todoItems = [
        {
            text: 'Pulire la casa',
            completed: true,
        },
        {
            text: 'Fare la spesa',
            completed: false,
        },
        {
            text: 'Seguire la lezione',
            completed: true,
        },
        {
            text: 'Fare esercitazione boolean',
            completed: true,
        },
        {
            text: 'Fare sport',
            completed: false,
        },
    ];

    // Referenze 
    var list = $('.todos');
    var newInput = $('.add-todo');
    var template = $('#template li');

    // 1. Popolazione todo list
    for (var i = 0; i < todoItems.length; i++) {
        var todo = todoItems[i];
        // template
        var item = template.clone();
        item.find('.text').text(todo.text);

        if(todo.completed) {
            item.find('.text').addClass('completed');
        }

        // Aggiunta alla lista
        list.append(item);
    }

    // 2. Inserimento nuovo todo
    newInput.keyup(function(event) {
        console.log(event.which);

        if(event.which === 13) {
            var text = newInput.val().trim();

            if(text !== '') {
                console.log(text);

                // template
                var item = template.clone();
                item.find('.text').text(text);
                 // Aggiunta alla lista
                list.append(item);

                // reset
                newInput.val(''); // pulizia
            }
        }
    });


    // 3. Rimozione todo item 
    $('body').on('click', '.todos li i', function() {
        $(this).parent().remove();
    });

    // 4. Rendi todo completato/ da fare
    $('body').on('click', '.todos li span', function() {
        $(this).toggleClass('completed');
    });


    // End doc ready
});