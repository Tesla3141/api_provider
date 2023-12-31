const fs = require("fs");
exports.getSevenHarryPotter = async (req, res, next) => {
  res.status(200).json([
    {
      "id": 4640799,
      "title": "Harry Potter and the Sorcerer's Stone (Harry Potter, #1)",
      "rating": 4.47,
      "year": 1997,
      "image": "https://images.gr-assets.com/books/1474154022m/3.jpg",
      "likes": 0,
      "author": "J. K. Rowling",
      "price": 50,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat sem dolor, sed semper orci tincidunt quis. Aliquam ornare, turpis sed pulvinar interdum, est nibh molestie sem, in porttitor eros lectus commodo sapien. Nam mollis erat quis metus tempus, a auctor nisl porttitor. Donec sodales odio quis pretium hendrerit.",
    },
    {
      "id": 6231171,
      "title": "Harry Potter and the Chamber of Secrets (Harry Potter, #2)",
      "rating": 4.41,
      "year": 1998,
      "image": "https://images.gr-assets.com/books/1474169725m/15881.jpg",
      "likes": 0,
      "author": "J. K. Rowling",
      "price": 50,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat sem dolor, sed semper orci tincidunt quis. Aliquam ornare, turpis sed pulvinar interdum, est nibh molestie sem, in porttitor eros lectus commodo sapien. Nam mollis erat quis metus tempus, a auctor nisl porttitor. Donec sodales odio quis pretium hendrerit.",
    },
    {
      "id": 2402163,
      "title": "Harry Potter and the Prisoner of Azkaban (Harry Potter, #3)",
      "rating": 4.55,
      "year": 1999,
      "image": "https://images.gr-assets.com/books/1499277281m/5.jpg",
      "likes": 0,
      "author": "J. K. Rowling",
      "price": 50,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat sem dolor, sed semper orci tincidunt quis. Aliquam ornare, turpis sed pulvinar interdum, est nibh molestie sem, in porttitor eros lectus commodo sapien. Nam mollis erat quis metus tempus, a auctor nisl porttitor. Donec sodales odio quis pretium hendrerit.",

    },
    {
      "id": 3046572,
      "title": "Harry Potter and the Goblet of Fire (Harry Potter, #4)",
      "rating": 4.55,
      "year": 2000,
      "image": "https://images.gr-assets.com/books/1554006152m/6.jpg",
      "likes": 0,
      "author": "J. K. Rowling",
      "price": 50,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat sem dolor, sed semper orci tincidunt quis. Aliquam ornare, turpis sed pulvinar interdum, est nibh molestie sem, in porttitor eros lectus commodo sapien. Nam mollis erat quis metus tempus, a auctor nisl porttitor. Donec sodales odio quis pretium hendrerit.",

    },
    {
      "id": 2809203,
      "title": "Harry Potter and the Order of the Phoenix (Harry Potter, #5)",
      "rating": 4.49,
      "year": 2003,
      "image": "https://images.gr-assets.com/books/1546910265m/2.jpg",
      "likes": 0,
      "author": "J. K. Rowling",
      "price": 50,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat sem dolor, sed semper orci tincidunt quis. Aliquam ornare, turpis sed pulvinar interdum, est nibh molestie sem, in porttitor eros lectus commodo sapien. Nam mollis erat quis metus tempus, a auctor nisl porttitor. Donec sodales odio quis pretium hendrerit.",

    },
  
    {
      "id": 41335427,
      "title": "Harry Potter and the Half-Blood Prince (Harry Potter, #6)",
      "rating": 4.56,
      "year": 2005,
      "image": "https://images.gr-assets.com/books/1361039191m/1.jpg",
      "likes": 0,
      "author": "J. K. Rowling",
      "price": 50,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat sem dolor, sed semper orci tincidunt quis. Aliquam ornare, turpis sed pulvinar interdum, est nibh molestie sem, in porttitor eros lectus commodo sapien. Nam mollis erat quis metus tempus, a auctor nisl porttitor. Donec sodales odio quis pretium hendrerit.",

    },
  
    {
      "id": 2963218,
      "title": "Harry Potter and the Deathly Hallows (Harry Potter, #7)",
      "rating": 4.62,
      "year": 2007,
      "image": "https://images.gr-assets.com/books/1474171184m/136251.jpg",
      "likes": 0,
      "author": "J. K. Rowling",
      "price": 50,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat sem dolor, sed semper orci tincidunt quis. Aliquam ornare, turpis sed pulvinar interdum, est nibh molestie sem, in porttitor eros lectus commodo sapien. Nam mollis erat quis metus tempus, a auctor nisl porttitor. Donec sodales odio quis pretium hendrerit.",

    },
    // {
    //   "id": 1466917,
    //   "title": "A Game of Thrones (A Song of Ice and Fire, #1)",
    //   "rating": 4.45,
    //   "year": 1996,
    //   "image": "https://images.gr-assets.com/books/1554191954m/13496.jpg",
    //   "likes": 0,
    //   "authorId": 346732
    // },
    // {
    //   "id": 3272005,
    //   "title": "A Clash of Kings  (A Song of Ice and Fire, #2)",
    //   "rating": 4.41,
    //   "year": 1998,
    //   "image": "https://images.gr-assets.com/books/1358254974m/10572.jpg",
    //   "likes": 0,
    //   "authorId": 346732
    // },
    // {
    //   "id": 1164465,
    //   "title": "A Storm of Swords (A Song of Ice and Fire, #3)",
    //   "rating": 4.54,
    //   "year": 2000,
    //   "image": "https://images.gr-assets.com/books/1497931121m/62291.jpg",
    //   "likes": 0,
    //   "authorId": 346732
    // },
  
    // {
    //   "id": 1019062,
    //   "title": "A Feast for Crows (A Song of Ice and Fire, #4)",
    //   "rating": 4.13,
    //   "year": 2005,
    //   "image": "https://images.gr-assets.com/books/1429538615m/13497.jpg",
    //   "likes": 0,
    //   "authorId": 346732
    // },
    // {
    //   "id": 2936175,
    //   "title": "A Dance with Dragons (A Song of Ice and Fire, #5)",
    //   "rating": 4.32,
    //   "year": 2011,
    //   "image": "https://images.gr-assets.com/books/1327885335m/10664113.jpg",
    //   "likes": 0,
    //   "authorId": 346732
    // }
  ]
  )
}

exports.getManyBooks = async (req, res, next) => {
  let obj = JSON.parse(fs.readFileSync('data/bookworm/manyBooks.json', 'utf8'));
  if (req.query.size) {
    obj = obj.slice(0, Math.min(req.query.size, obj.length));
  }
  res.status(200).json(obj);
}