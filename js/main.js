var $form = $('.form');
var $name = $('.main-holder');
var $list = $('.list');

$form.on ('submit', function (e) {
    e.preventDefault();
    
    var $li = $('<li>').html($name.val());
    var $nameDl = $('<button class="delete">X</button>');

    $nameDl.on('click', function () {
        $li.remove('li');
    });
    
    $list.on('click', 'li', function () {
        $(this).addClass('complete');
    });
    
    $li.append($nameDl);
    $list.prepend($li);
    $name.val('');
});