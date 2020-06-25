import React from 'react';
import { shallow, mount } from 'enzyme';

import ReviewsList from '../components/ReviewsList.jsx';

const reviewData = {
  abbrname: "Ian L.",
  body: "Dolorem temporibus dolorem quia quod repellat. Odit repellat dolorum nobis expedita dolorem mollitia. Sit sed ipsa ullam impedit modi vero fugiat. Dolorum modi omnis autem. Eum perspiciatis maiores eveniet aspernatur. Quo possimus et omnis ex enim sint praesentium aspernatur facilis.",
  business_id: 1,
  business_name: "Cronin - Graham",
  check_ins: 14,
  cool_count: 171,
  created_at: "Fri Mar 02 2018 08:06:05 GMT-0800 (Pacific Standard Time)",
  elite: false,
  friends_count: 1970,
  funny_count: 131,
  location: "Starkberg, IL",
  photos_count: 303,
  profile_photo: "https://s3.amazonaws.com/uifaces/faces/twitter/sur4dye/128.jpg",
  rating: "2",
  review_id: 340,
  reviews_count: 1127,
  useful_count: 51,
  user_id: 56,
  username: "Ian Lebsack"
};

const photosData = [
  {photo_id: 485, photo_url: "http://lorempixel.com/640/480/food", review_id: 340},
  {photo_id: 1418, photo_url: "http://lorempixel.com/640/480/food", review_id: 340},
  {photo_id: 1977, photo_url: "http://lorempixel.com/640/480/food", review_id: 340},
  {photo_id: 2953, photo_url: "http://lorempixel.com/640/480/food", review_id: 340}
]


describe('ReviewsList', () => {
  it('should render properly and have access to passed in reviews', () => {
    const wrapper = mount(<ReviewsList reviews={[reviewData, reviewData, reviewData]} photos={photosData}/>);
    expect(wrapper.exists('#reviews-list')).toBe(true);
  });

  it('should have necessary parts and their childrens', () => {
    const wrapper = mount(<ReviewsList reviews={[reviewData]} photos={photosData}/>);

    expect(wrapper.exists('.review-post-container')).toBe(true);
    expect(wrapper.exists('.user-info-container')).toBe(true);
    expect(wrapper.exists('.body-info-container')).toBe(true);

  });
});