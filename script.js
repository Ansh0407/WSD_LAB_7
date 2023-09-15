document.addEventListener("DOMContentLoaded", function () {
    const fetchBooksButton = document.getElementById("fetchBooks");
    const bookList = document.getElementById("bookList");

    fetchBooksButton.addEventListener("click", function () {

        const xhr = new XMLHttpRequest();
        xhr.open("GET", "books.json", true);

        xhr.onload = function () {
            if (xhr.status === 200) {
                try {
                    const books = JSON.parse(xhr.responseText);
                    
                    displayBooks(books);
                } catch (error) {
                    console.error("Error parsing JSON: " + error.message);
                }
            } else {
                console.error("Error loading books: " + xhr.status);
            }
        };

        xhr.send();
    });

    function displayBooks(books) {
        let html = "";
        for (const book of books) {
            html += `
                <div class="card">
                    <h2>${book.title}</h2>
                    <p><strong>Author:</strong> ${book.author}</p>
                    <p><strong>Year:</strong> ${book.published_year}</p>
                    <p><strong>Genre:</strong> ${book.genre}</p>
                    <p><strong>Rating:</strong> ${book.rating}</p>
                    <p><strong>ISBN:</strong> ${book.ISBN}</p>
                    <p><strong>Description:</strong> ${book.description}</p>
                </div>
            `;
        }
        bookList.innerHTML = html;
    }
    
});
