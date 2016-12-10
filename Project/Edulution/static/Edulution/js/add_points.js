
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

    })
});