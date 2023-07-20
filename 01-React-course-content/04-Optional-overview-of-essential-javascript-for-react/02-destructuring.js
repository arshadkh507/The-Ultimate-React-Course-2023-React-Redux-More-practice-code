const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*  -------------------------------------------------------------
    !                     Destructuring
    ------------------------------------------------------------- */

// Destructuring
// quokka.js extension help in execting the file here.

const book = getBook(2);

// const title1 = books.title;
// const author = books.author;

// Destructuring Object
const { id, title, author, genres } = book;

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

const [primaryGenre, secondaryGenre] = genres;

// console.log(primaryGenre, secondaryGenre);

/*  -------------------------------------------------------------
    !                     Rest-Spread Operator
    ------------------------------------------------------------- */
// rest Operator must be in the last in this list
const [primaryGen, secondaryGen, ...otherGenres] = genres;

const newGenres = [...genres, "epic fantansy"];

// spreading object should be first like here ...book
const updatedBook = { ...book, pages: 1218 }; // spread operator

/*  -------------------------------------------------------------
    !                     Template Literals
    ------------------------------------------------------------- */
// These `` Backticks indicate Javasctipt Template Literals
const summary = `The summary of the ${book.title} is ${book.summary}`;

/*  -------------------------------------------------------------
    !                    Ternaries Operators
    ------------------------------------------------------------- */
// Many times in situations where we can't use an if else statement
// there we use ternary operators and Ternary Operators have 3 Pars/Operands
// condition ? true : false

/*  -------------------------------------------------------------
    !                    Arrow Functions
    ------------------------------------------------------------- */
// Arrow Functions new way of writing functions , Introducted in ES6 Very
// helpful for quick and one line functions
// also we called it function expression.
/*  -------------------------------------------------------------
    !          Short-Circuiting and Logical Operators && , || 
    ------------------------------------------------------------- */
// uses is an if
// console.log(true && "imediatly get value when first operand is true");;
// falsy values: 0 , false , null , undefined , '',
/*  -------------------------------------------------------------
    !              ?? Nullish coalscing Operator.
    ------------------------------------------------------------- */
// it short circuit for falsy values
const count = book.reviews.librarything.reviewsCount ?? "no data";
// console.log(count);
/*  -------------------------------------------------------------
    !               Optional Chaining Operator. ?.
    ------------------------------------------------------------- */

const reviews = book.reviews?.goodreads?.rating ?? 0;
/*  -------------------------------------------------------------
    !                Array Map Method  map()
    ------------------------------------------------------------- */
/*  -------------------------------------------------------------
    !                Array Filter Method  filter()
    ------------------------------------------------------------- */
// we can chain multiple filters also
const books = getBooks();
const longbooks = books.filter((book) => book.pages > 500);
// console.log(longbooks);
/*  -------------------------------------------------------------
    !                Array Reduce Method  reduce()
    ------------------------------------------------------------- */
const allBooks = getBooks();
const sum = 0;
const pagesAllBooks = allBooks.reduce((sum, book) => sum + book.pages, 0);
/*  -------------------------------------------------------------
    !  Array Sort Method  sort() - mutate or change the orignal array
    ------------------------------------------------------------- */
// just make the copy of this array so not to mutate.
const arr = [3, 7, 1, 9, 6];
const sorted = arr.sort((a, b) => a - b);
/*  -------------------------------------------------------------
    !  add , delete , update elmenet of array without changing original array
    ------------------------------------------------------------- */
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};

// Spread Operator
const booksAfterAdd = [...data, newBook];
const booksAfterDelete = booksAfterAdd.filter((book) => book.id === 1);
const booksAfterUpdate = booksAfterAdd.map((book) =>
  book.id === 1 ? {} : { ...book, pages: 1210 }
);

/*  -------------------------------------------------------------
    !  Asynchronous Javascript using Promises Method
    ------------------------------------------------------------- */
// how to use asynchronous javascript technique in order to fetch data so to load data from an
// external web API --- fetch() function get an url of API

fetch("url")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err)); // when fulfilled

/*  -------------------------------------------------------------
    !  Asynchronous Javascript using Async-Await Method
    ------------------------------------------------------------- */
// async function : a function with async keyword
// await for the first time we can way of stopping and of pausing the code inside a function
// this is better way of asynchronous javascript
// async function are return promise
async function getTodos() {
  const res = await fetch("url");
  const data = await res.json();
  console.log(data);
  return data;
}

const todos = getTodos();
console.log(todos);
