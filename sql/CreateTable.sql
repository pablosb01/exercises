CREATE TABLE bookstore (
    book_id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(50),
    author VARCHAR(50),
    genre VARCHAR(20),
    published_year INTEGER,
    isbn VARCHAR(20),
    price DECIMAL(20, 2),
    rating DECIMAL(2, 1),
    stock_count INTEGER
)