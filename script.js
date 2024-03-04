$(document).ready(function() {
    // Adding a new task
    $('#input').on('keypress', function(e) {
        if (e.which == 13) {
            var task = $(this).val();
            $('#task-list').append('<li><div><span>' + task + '</span><div><i class="fa fa-check"></i><i class="fa fa-trash"></i></div></div></li>');
            $(this).val("");
        }
    });

    // Striking through a task
    $(document).on('click', '.fa-check', function() {
        $(this).parent().prev().toggleClass('checked');
    });

    // Deleting a task
    $(document).on('click', '.fa-trash', function() {
        $(this).closest('li').remove();
    });
});
