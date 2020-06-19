const faker = require('faker');
const db = require('./index.js');


const generateUsers = (size) => {
  const users = [];
  for (let count = 1; count <= size; count++) {
    const user = {
      userId: count,
      username: `${faker.name.firstName()} ${faker.name.lastName()}`,
      profilePhoto: faker.image.avatar(),
      location: faker.fake("{{address.city}}, {{address.stateAbbr}}"),
      friendsCount: faker.random.number(2000),
      reviewsCount: faker.random.number(2000),
      photosCount: faker.random.number(2000),
      elite: faker.random.boolean()
    };
    users.push(user);
  }
  return users;
};

const generateReviews = (reviewSize, userSize) => {
  const reviews = [];
  for (let count = 1; count <= reviewSize; count++) {
    const review = {
      reviewId: count,
      userId: faker.random.number(userSize - 1) + 1,
      businessId: faker.random.number(99) + 1,
      createdAt: faker.date.between('2014-06-18', '2020-06-18'),
      rating: faker.random.number(4) + 1,
      body: [faker.lorem.paragraph(), faker.lorem.paragraphs()][faker.random.number(1)],
      usefulCount: faker.random.number(200),
      funnyCount: faker.random.number(200),
      coolCount: faker.random.number(200)
    };
    reviews.push(review);
  }
  return reviews;
};

const generatePhotos = (photoSize, reviewSize) => {
  const photos = [];
  for (let count = 1; count <= photoSize; count++) {
    const photo = {
      photoId: count,
      photoUrl: faker.image.food(),
      reviewId: faker.random.number(reviewSize) + 1
    };
    photos.push(photo);
  }
  return photos;
};

const loadUser = ({userId, username, profilePhoto, location, friendsCount, reviewsCount, photosCount, elite}) => {
  const queryString = `INSERT INTO users (userId, username, profilePhoto, location, friendsCount, reviewsCount, photosCount, elite)
  VALUES (${userId}, '${username.replace('\'', '\'\'')}', '${profilePhoto}', '${location.replace('\'', '\'\'')}', ${friendsCount}, ${reviewsCount}, ${photosCount}, '${elite}')`;

  db.query(queryString, (error, result) => {
    if (error) {
      console.log('Error loading user: ', error);
    } else {
      console.log(`Success loading user ${userId}!`);
    }
  });
};

const loadReview = ({reviewId, userId, businessId, createdAt, rating, body, usefulCount, funnyCount, coolCount}) => {
  const queryString = `INSERT INTO reviews (reviewId, userId, businessId, createdAt, rating, body, usefulCount, funnyCount, coolCount)
  VALUES (${reviewId}, ${userId}, ${businessId}, '${createdAt}', ${rating}, '${body.replace('\'', '\'\'')}', ${usefulCount}, ${funnyCount}, ${coolCount})`;

  db.query(queryString, (error, result) => {
    if (error) {
      console.log('Error loading review: ', error);
    } else {
      console.log(`Success loading review ${reviewId}!`);
    }
  });
};

const loadPhoto = ({photoId, photoUrl, reviewId}) => {
  const queryString = `INSERT INTO photos (photoId, photoUrl, reviewId)
  VALUES (${photoId}, '${photoUrl}', ${reviewId})`;

  db.query(queryString, (error, result) => {
    if (error) {
      // We can safely ignore an error where the reviewId of the photo does not exist in the reviews table.
      console.log('Error loading photo because review does not exist');
    } else {
      console.log(`Success loading photo ${photoId}!`);
    }
  });
};

const generateSeedData = () => {
  const userCount = 200;
  const reviewCount = 1000;
  const photoCount = 3000;

  const sampleUsers = generateUsers(userCount);
  const sampleReviews = generateReviews(reviewCount, userCount);
  const samplePhotos = generatePhotos(photoCount, reviewCount);
  console.log('Seed data generated. Loading seed data into database...');
  loadSeedData(sampleUsers, sampleReviews, samplePhotos);
};

const loadSeedData = (users, reviews, photos) => {
  users.forEach(user => loadUser(user));
  reviews.forEach(review => loadReview(review));
  photos.forEach(photo => loadPhoto(photo));
};

generateSeedData();

