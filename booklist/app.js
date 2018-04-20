// Book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI constructor
function UI() {}

UI.prototype = {
  addBookTolist: function(book) {
    //
    const list = document.getElementById('book-list');

    //
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `;
    list.appendChild(tr);
  },
  clearFields: function() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  },
  showAlert: function(message, className) {
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector('.container');
    const form = document.getElementById('book-form');
    container.insertBefore(div, form);

    setTimeout(function() {
      document.querySelector('.alert').remove();
    }, 3000);
  },
  deleteBook: function(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }
};

// EventListener
document.getElementById('book-form').addEventListener('submit', function(e) {
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

  //
  const book = new Book(title, author, isbn);
  console.log(book);

  //
  const ui = new UI();

  //validate

  if (title === '' || author === '' || isbn === '') {
    ui.showAlert('Please fill all fields', 'error');
  } else {
    // Add book to list
    ui.addBookTolist(book);
    ui.showAlert('Book added', 'success');
    ui.clearFields();
  }

  e.preventDefault();
});

document.getElementById('book-list').addEventListener('click', function(e) {
  const ui = new UI();
  ui.deleteBook(e.target);

  ui.showAlert('Book removed', 'success');
  e.preventDefault();
});
