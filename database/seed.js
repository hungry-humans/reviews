const faker = require('faker');
const db = require('./index.js');


const generateUsers = (size) => {
  const users = [];
  for (let count = 1; count <= size; count++) {
    const user = {
      username: `${faker.name.firstName()} ${faker.name.lastName()}`,
      profile_photo: faker.image.avatar(),
      location: faker.fake("{{address.city}}, {{address.stateAbbr}}"),
      friends_count: faker.random.number(2000),
      reviews_count: faker.random.number(2000),
      photos_count: faker.random.number(2000),
      elite: faker.random.boolean()
    };
    users.push(user);
  }
  return users;
};

const generateReviews = (reviewSize, userSize) => {
  const reviews = [];
  for (let count = 1; count <= reviewSize; count++) {
    let rating = faker.random.number(4) + 1 + [0, 0.5][faker.random.number(1)];
    if (rating === 5.5) {
      rating = 5;
    }
    const review = {
      user_id: faker.random.number(userSize - 1) + 1,
      business_id: faker.random.number(99) + 1,
      business_name: faker.company.companyName(),
      created_at: faker.date.between('2014-06-18', '2020-06-18'),
      rating,
      check_ins: faker.random.number(20),
      body: [faker.lorem.paragraph(), faker.lorem.paragraphs()][faker.random.number(1)],
      useful_count: faker.random.number(200),
      funny_count: faker.random.number(200),
      cool_count: faker.random.number(200),
      useful_active: faker.random.boolean(),
      funny_active: faker.random.boolean(),
      cool_active: faker.random.boolean()
    };
    reviews.push(review);
  }
  return reviews;
};

const generatePhotos = (photoSize, reviewSize) => {
  const photos = [];
  for (let count = 1; count <= photoSize; count++) {
    const photo = {
      photo_url: faker.image.food(),
      review_id: faker.random.number(reviewSize) + 1
    };
    photos.push(photo);
  }
  return photos;
};

const loadUser = ({username, profile_photo, location, friends_count, reviews_count, photos_count, elite}) => {
  const queryString = `INSERT INTO users (username, profile_photo, location, friends_count, reviews_count, photos_count, elite)
  VALUES ('${username.replace('\'', '\'\'')}', '${profile_photo}', '${location.replace('\'', '\'\'')}', ${friends_count}, ${reviews_count}, ${photos_count}, '${elite}')`;

  db.query(queryString, (error, result) => {
    if (error) {
      console.log('Error loading user: ', error);
    } else {
      console.log(`Success loading user!`);
    }
  });
};

const loadReview = ({review_id, user_id, business_id, business_name, created_at, rating, check_ins, body, useful_count, funny_count, cool_count, useful_active, funny_active, cool_active}) => {
  const queryString = `INSERT INTO reviews (user_id, business_id, business_name, created_at, rating, check_ins, body, useful_count, funny_count, cool_count, useful_active, funny_active, cool_active)
  VALUES (${user_id}, ${business_id}, '${business_name.replace('\'', '\'\'')}', '${created_at}', ${rating}, ${check_ins},'${body.replace('\'', '\'\'')}', ${useful_count}, ${funny_count}, ${cool_count}, '${useful_active}', '${funny_active}', '${cool_active}')`;

  db.query(queryString, (error, result) => {
    if (error) {
      console.log('Error loading review: ', error);
    } else {
      console.log(`Success loading review!`);
    }
  });
};

const loadPhoto = ({photo_id, photo_url, review_id}) => {
  const queryString = `INSERT INTO photos (photo_url, review_id)
  VALUES ('${photo_url}', ${review_id})`;

  db.query(queryString, (error, result) => {
    if (error) {
      // We can safely ignore an error where the review_id of the photo does not exist in the reviews table.
      console.log('Error loading photo because review does not exist');
    } else {
      console.log(`Success loading photo!`);
    }
  });
};

const generateSeedData = (userCount = 200, reviewCount = 1000, photoCount = 3000) => {
  const sampleUsers = generateUsers(userCount);
  const sampleReviews = generateReviews(reviewCount, userCount);
  const samplePhotos = generatePhotos(photoCount, reviewCount);
  loadSeedData(sampleUsers, sampleReviews, samplePhotos);
};

const loadSeedData = (users, reviews, photos) => {
  users.forEach(user => loadUser(user));
  reviews.forEach(review => loadReview(review));
  photos.forEach(photo => loadPhoto(photo));
};

generateSeedData();
