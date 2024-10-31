import customer1Image from './assets/customer1.jpg';
import customer2Image from './assets/customer2.jpg';
import customer3Image from './assets/customer3.jpg';
import customer4Image from './assets/customer4.jpg';
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';

const customers = [
  {
    fullName: 'Maria Maria',
    image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Little Lemon offers an unforgettable dining experience! 
    The cozy atmosphere and warm smiles make you feel right at home. 
    The lemon herb chicken was divine, perfectly cooked and bursting with flavor. 
    The staff is attentive and knowledgeable, ensuring every guest feels special. 
    Maria and Luca's passion for quality shines through in every detail. Highly recommend!`,
  },
  {
    fullName: 'Antony Hopkins',
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
    says: `Little Lemon is a gem! The atmosphere is cozy, and the staff is incredibly welcoming. 
    The lemon herb chicken was a standout dish, perfectly cooked and full of flavor. Maria and 
    Luca's passion for quality is evident in every detail. Highly recommend!`,
  },
  {
    fullName: 'Tamika Lane',
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Dining at Little Lemon was a delightful experience. The ambiance is charming, 
    and the service is top-notch. The lemon herb chicken was absolutely delicious, tender, 
    and flavorful. Maria and Luca have created a wonderful dining spot. Can't wait to return!`,
  },
  {
    fullName: 'Brandon Bane',
    image: customer4Image,
    rating: [1, 1, 1, 1],
    says: `Little Lemon exceeded my expectations! The cozy atmosphere and friendly staff made 
    for a great dining experience. The lemon herb chicken was cooked to perfection and bursting 
    with flavor. Maria and Luca's dedication to quality shines through. Highly recommend!`,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>What people say about us!</h2>
        {customers.map((customer, index) => 
          <TestimonialCard key={index} customer={customer} />
        )}
     </div>
    </section>
  );
};

export default Testimonials;
