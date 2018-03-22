$(document).ready(function () {
    $.get({
        url: '/books',
        contentType: 'application/json'
    }).then(renderBooks).catch();});
function renderBooks(books) {
    var template = $('#book-template').html();
    var resultHTML = books.map(function (book) {
        return template.replace(':bookName:', book.title)
            .replace(':id:', book.id)
            .replace(':author:', book.author)
    }).join('');

    $('#list-books').html(resultHTML);
}