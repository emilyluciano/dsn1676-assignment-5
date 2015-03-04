var $form = $('.form-box');
var $name = $('.main-text-holder');
var $text-box = $('.to-do-text');

$form.on ('submit', function (e) {
    e.preventDefault();
    
    var $li = $('<li>').html($name.val());
    var $nameDl = $('button class="delete">X</button>');

    $nameDl.on('click', function () {
        $li.remove('li');
    });
    
    $text-box.on('click', 'li', function () {
        $(this).addClass('complete');
    });
    
    $li.append($nameDl);
    $text-box.prepend($li);
    $name.val('');
});