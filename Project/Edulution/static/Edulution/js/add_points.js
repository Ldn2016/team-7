
function add_point() {
    points = parseInt(document.getElementById('points').textContent)
    points = points++
    document.getElementById('points').innerHTML = points.toString()
}

$(document).ready(function () {
    $(document).on('click', '.not-completed', function() {
        var points = parseInt($('#points').text());
        points += 1
        $('#points').html(points.toString());
        $(this).removeClass('not-completed').after(' <span class="glyphicon glyphicon-ok"></span>').parent().addClass('part-completed');
        $('.alert-success').slideDown(250);
        setTimeout(function () {
            $('.alert-success').slideUp(250);
        }, 3000)

    })
});