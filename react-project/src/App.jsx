import React from 'react'
import './App.css'
import logo from './assets/Logo.svg'
import headerImage from './assets/home-banner-image.png'
import secondImage from './assets/about-background-image.png'
import cutlery from './assets/pick-meals-image.png'
import choose from './assets/choose-image.png'
import delivery from './assets/delivery-image.png'
import johnDoe from './assets/john-doe-image.png'
import stars from './assets/Ratings.png'

function App() {

  return (
    <>
    <div className="background">
   <nav class="navbar navbar-expand-lg bg-transparent">
  <div class="container-fluid">
   <img src={logo} className='logo' alt="" />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Testimonials</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
        <li class="nav-item my-auto">
        <a class="nav-link" href="#"><i class="fa-solid fa-cart-shopping"></i></a>

        </li>
        <li class="nav-item">
          <a class="btn btn-dark mx-auto"  href="#">Book now</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div className="header-div">
<div className="header-text">
  <h1>Your Favourite Food
Delivered Hot &
Fresh</h1>
<p>Healthy switcher chefs do all the prep work, like 
peeding, chopping & marinating, so you can cook
a fresh food.</p>
<button className='order-btn'>Order now <i class="fa-solid fa-arrow-right-long"></i></button>
</div>
<div className="img-holder">
  <img className='headerImage' src={headerImage} alt="" height={600} width={600}/>
</div>
</div>
</div>
<section className='section-one'>
  <div className="secondImage-div">
    <img className='second-image headerImage' src={secondImage}  height={500} width={500} alt="" />
  </div>
  <div className="secondText-div">
    <h5 class="text-warning">About</h5>
    <h1>Food Is An Important Part Of A Balanced Diet</h1>
    <p>Lorem ipsum dolor sit amet consectetur. Non tincidunt 
magna non et elit. Dolor  turpis molestie dui
magnis facilisis at fringilla quam.</p>
    <p>Non tincidunt magna non et elit. Dolor turpis molestie 
dui magnis facilisis at fringilla quam.</p>
<button id='btn'>Learn more</button>
  </div>
</section>

<section className='section-two'>
    <div className="workText-div">
    <h5 class="text-warning mb-3">Work</h5>
    <h2>How it works</h2>
    <p>Lorem ipsum dolor sit amet consectetur. Non tincidunt 
magna non et elit. Dolor  turpis molestie dui
magnis facilisis at fringilla quam.</p>
    </div>
</section>

<section className='section-three'>
  <div className="card-holder">
    <div className="card-box">
    <img src={cutlery} className='utensils' alt="" />
      <h5 className='card-title'>Pick Meals</h5>
      <p>Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.</p>
    </div>
    <div className="card-box">
    <img src={choose} className='utensils' alt="" />
      <h5 className='card-title'>Choose how often</h5>
      <p>Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.</p>
    </div>
    <div className="card-box">
    <img src={delivery} className='utensils' alt="" />
      <h5 className='card-title'>Fast deliveries</h5>
      <p>Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.</p>
    </div>
  </div>
</section>

<section className='section-four'>
    <div className="workText-div">
    <h5 class="text-warning mb-3">Testimonials</h5>
    <h2>What they are saying</h2>
    <p>Lorem ipsum dolor sit amet consectetur. Non tincidunt 
magna non et elit. Dolor  turpis molestie dui
magnis facilisis at fringilla quam.</p>
    </div>
    <div className="testimony-card">
      <img className='john-doe' src={johnDoe} height={50} width={50} alt="John Doe " />
      <p>Lorem ipsum dolor sit amet consectetur. Non tincidunt 
magna non et elit. Dolor  turpis molestie dui
magnis facilisis at fringilla quam.</p>
<img src={stars} height={20} width={100} className='stars' alt="" />
<h5>John Doe.</h5>
    </div>
</section>
<section className="question-section">
<div className="question-div">
  <h2>Have question in mind? Let us help you</h2>
  </div>
  <div className="input-div">
    <input className='email-input' name='email' type="text" placeholder='youremail@example.com' />
    <input id='btn' className='submit' type="submit" value={'Submit'} />
  </div>
</section>
<footer>
<div>
<h5>FOODIE</h5>
<div className="socials">
<i id='i' class="fa-xl fab fa-twitter"></i>
<i id='i' class="fa-xl fa-brands fa-linkedin"></i>
  <i id='i' class="fa-xl fab fa-youtube"></i>
  <i id='i' class="fa-xl fa-brands fa-facebook-f"></i>
  </div>
</div>
<div className="nav-one">
    <ul>
      <li>Quality</li>
      <li>Help</li>
      <li>Share</li>
      <li>Carers</li>
      <li>Work</li>
      <li>Testimonials</li>
    </ul>
</div>
<div className="nav-one">
  <ul>
<li>244-5333-7783</li>
  <li>hello@food.com</li>
  <li>press@food.com</li>
  <li>contact@food.com</li>
  </ul>
</div>
<div className="nav-one last-nav">
  <ul>
    <li>Terms & Conditions</li>
    <li>Privacy Policy</li>
  </ul>
</div>
</footer>

    </>
  )
}

export default App
