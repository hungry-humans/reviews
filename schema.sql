-- If superuser:    psql postgres < schema.sql
-- If user:         psql -U me -d postgres < schema.sql

CREATE DATABASE yelp;

ALTER DATABASE yelp OWNER TO me;

\connect yelp

CREATE TABLE users (
  userId            INTEGER,
  username          VARCHAR(255),
  profilePhoto      VARCHAR(255),
  location          VARCHAR(255),
  friendsCount      INTEGER,
  reviewsCount      INTEGER,
  photosCount       INTEGER,
  elite             BOOLEAN
);

ALTER TABLE users ADD PRIMARY KEY (userId);

CREATE TABLE reviews (
  reviewId         INTEGER,
  userId           INTEGER,
  businessId       INTEGER,
  createdAt        VARCHAR(255),
  rating            INTEGER,
  body              TEXT,
  usefulCount      INTEGER,
  funnyCount       INTEGER,
  coolCount        INTEGER
);

ALTER TABLE reviews ADD PRIMARY KEY(reviewId);
ALTER TABLE reviews
  ADD CONSTRAINT reviewUserIdFkey FOREIGN KEY (userId) REFERENCES users (userId);

CREATE TABLE photos (
  photoId          INTEGER,
  photoUrl         VARCHAR(255),
  reviewId         INTEGER
);

ALTER TABLE photos ADD PRIMARY KEY(photoId);
ALTER TABLE photos
  ADD CONSTRAINT photoReviewIdFkey FOREIGN KEY (reviewId) REFERENCES reviews (reviewId);