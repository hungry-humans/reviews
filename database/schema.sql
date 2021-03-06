-- If superuser:    psql postgres < schema.sql
-- If user:         psql -U me -d postgres < schema.sql
CREATE DATABASE yelp;

\connect yelp

CREATE TABLE users (
  user_id           SERIAL,
  username          VARCHAR(255),
  profile_photo     VARCHAR(255),
  location          VARCHAR(255),
  friends_count     INTEGER,
  reviews_count     INTEGER,
  photos_count      INTEGER,
  elite             BOOLEAN
);

ALTER TABLE users ADD PRIMARY KEY (user_id);

CREATE TABLE reviews (
  review_id         SERIAL,
  user_id           INTEGER,
  business_id       INTEGER,
  business_name     VARCHAR(255),
  created_at        VARCHAR(255),
  rating            DECIMAL,
  check_ins         INTEGER,
  body              TEXT,
  useful_count      INTEGER,
  funny_count       INTEGER,
  cool_count        INTEGER,
  useful_active     BOOLEAN,
  funny_active      BOOLEAN,
  cool_active       BOOLEAN
);

ALTER TABLE reviews ADD PRIMARY KEY(review_id);
ALTER TABLE reviews
  ADD CONSTRAINT review_user_id_fkey FOREIGN KEY (user_id) REFERENCES users (user_id);

CREATE TABLE photos (
  photo_id          SERIAL,
  photo_url         TEXT,
  review_id         INTEGER
);

ALTER TABLE photos ADD PRIMARY KEY(photo_id);
ALTER TABLE photos
  ADD CONSTRAINT photo_review_id_fkey FOREIGN KEY (review_id) REFERENCES reviews (review_id);