import React , { Component, Fragment } from 'react';
import styled from 'styled-components';
import FormComponent from'./components/FormComponent';

styled.div
class App extends Component
{
    constructor(props)
    {
        super(props);
        this.state={};
    }

    render()
    {
       return ( 

<Fragment>
        
  <div className="lines-wrap">
  <div className="lines-inner">
    <div className="lines"></div>
  </div>
</div>


<div className="site-mobile-menu site-navbar-target">
  <div className="site-mobile-menu-header">
    <div className="site-mobile-menu-close">
      <span className="icofont-close js-menu-toggle"></span>
    </div>
  </div>
  <div className="site-mobile-menu-body"></div>
</div>

<nav className="site-nav">
  <div className="container">
    <div className="site-navigation">
      <a href="index.html" className="logo m-0">Gravity <span className="text-primary">.</span></a>

      <ul className="js-clone-nav d-none d-lg-inline-noone text-left site-menu">
        <li className="active"><a href="index.html">Home</a></li>
        <li className="has-children">
          <a href="#">Dropdown</a>
          <ul className="dropdown">
            <li><a href="#">Menu One</a></li>
            <li className="has-children">
              <a href="#">Menu Two</a>
              <ul className="dropdown">
                <li><a href="#">Sub Menu One</a></li>
                <li><a href="#">Sub Menu Two</a></li>
                <li><a href="#">Sub Menu Three</a></li>
              </ul>
            </li>
            <li><a href="#">Menu Three</a></li>
          </ul>
        </li>
        <li><a href="inner-page.html">Inner Page</a></li>
        <li><a href="contact.html">Contact Us</a></li>
      </ul>

      <a href="#" className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-block light" data-toggle="collapse" data-target="#main-navbar">
        <span></span>
      </a>

    </div>
  </div>
</nav>

<div className="section-hero overlay jarallax" data-speed="0.2" style={{backgroundImage : "url('images/bg_1.jpg')" } } >
   <div className="container">
      <div className="row align-items-center text-center">
         <div className="col-lg-10 mx-auto">
            <h1>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h1>
            <a href="#" className="btn btn-primary">Let's get started</a>
            </div>
          </div>
        </div>
</div>
      
<div className="latest" >
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="contents">

            <div className="contents-inner" >
              <span className="caption">Latest Product</span>
              <h3><a href="#">Poisson Blanc</a></h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            </div>

            <div className="img-wrap float-right" >
              <img src="images/poissonblanc_naturehumaine_8.jpg" alt="Image" className="img-fluid rounded" />
            </div>

          </div>
        </div>
      </div>
    </div>
</div>

<div className="section mb-5 features">
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3" >
          <div className="custom-media">
            <span className="number">1</span>
            <p> Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <a href="#" className="read-more">Read more</a>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3" >
          <div className="custom-media">
            <span className="number">2</span>
            <p> Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

            <a href="#" className="read-more">Read more</a>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3" >
          <div className="custom-media">
            <span className="number">3</span>
            <p> Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

            <a href="#" className="read-more">Read more</a>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3" >
          <div className="custom-media">
            <span className="number">4</span>
            <p> Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

            <a href="#" className="read-more">Read more</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="section mb-5">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6" >
          <img src="images/person_png_1.png" alt="Image" className="img-fluid"/>
        </div>
        <div className="col-lg-4 mr-auto ml-auto" >
          <h3>Web Resources</h3>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          <div className="mb-4 count-numbers">
            <div className="row">
              <div className="col-6">
                <span className="counter">
                  <span className="number" data-number="99">0</span>%
                </span>
                <span className="d-block">Success rate</span>
              </div>
              <div className="col-6">
                <span className="counter">
                  <span className="number"  data-number="20391">0</span>
                </span>
                <span className="d-block">Happy Customers</span>
              </div>
            </div>
          </div>
          <ul className="check list-unstyled mb-4">
            <li><a href="#">Far far away, behind the word mountains</a></li>
            <li><a href="#">Separated they live in Bookmarksgrove</a></li>
            <li><a href="#">Bookmarksgrove right at the coast of the Semantics, a large language ocean.</a></li>
            <li><a href="#">behind the word mountains</a></li>
            <li><a href="#">Live the blind texts</a></li>
          </ul>
          <p><a href="#" className="btn btn-primary">Contact us</a></p>
        </div>
      </div>
    </div>
  </div>

  <div className="section news">
    <div className="container">
      <div className="row">
        <div className="col">
          <h2 className="heading text-white">On The News</h2>
        </div>
      </div>

      <div className="owl-3-slider owl-carousel">
        <div className="item">
          <div className="custom-media-v2">
            <img src="images/person_1.jpg" alt="Image" className="img-fluid person"/>
            <div className="author">by James Watson</div>
            <h3><a href="#">Far far away, behind the word Mountain</a></h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p><a href="#">Read more</a></p>
          </div>
        </div>
        <div className="item">
          <div className="custom-media-v2">
            <img src="images/person_2.jpg" alt="Image" className="img-fluid person"/>
            <div className="author">by Carl Anderson</div>
            <h3><a href="#">Far far away, behind the word Mountain</a></h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p><a href="#">Read more</a></p>
          </div>
        </div>
        <div className="item">
          <div className="custom-media-v2">
            <img src="images/person_3.jpg" alt="Image" className="img-fluid person"/>
            <div className="author">by Michelle Allison</div>
            <h3><a href="#">Far far away, behind the word Mountain</a></h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p><a href="#">Read more</a></p>
          </div>
        </div>
        <div className="item">
          <div className="custom-media-v2">
            <img src="images/person_4.jpg" alt="Image" className="img-fluid person"/>
            <div className="author">by Drew Wood</div>
            <h3><a href="#">Far far away, behind the word Mountain</a></h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p><a href="#">Read more</a></p>
          </div>
        </div>

        <div className="item">
          <div className="custom-media-v2">
            <img src="images/person_1.jpg" alt="Image" className="img-fluid person"/>
            <div className="author">by James Watson</div>
            <h3><a href="#">Far far away, behind the word Mountain</a></h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p><a href="#">Read more</a></p>
          </div>
        </div>
        <div className="item">
          <div className="custom-media-v2">
            <img src="images/person_2.jpg" alt="Image" className="img-fluid person"/>
            <div className="author">by Carl Anderson</div>
            <h3><a href="#">Far far away, behind the word Mountain</a></h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p><a href="#">Read more</a></p>
          </div>
        </div>
        <div className="item">
          <div className="custom-media-v2">
            <img src="images/person_3.jpg" alt="Image" className="img-fluid person"/>
            <div className="author">by Michelle Allison</div>
            <h3><a href="#">Far far away, behind the word Mountain</a></h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p><a href="#">Read more</a></p>
          </div>
        </div>
        <div className="item">
          <div className="custom-media-v2">
            <img src="images/person_4.jpg" alt="Image" className="img-fluid person"/>
            <div className="author">by Drew Wood</div>
            <h3><a href="#">Far far away, behind the word Mountain</a></h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p><a href="#">Read more</a></p>
          </div>
        </div>
        <div className="item">
          <div className="custom-media-v2">
            <img src="images/person_1.jpg" alt="Image" className="img-fluid person"/>
            <div className="author">by James Watson</div>
            <h3><a href="#">Far far away, behind the word Mountain</a></h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p><a href="#">Read more</a></p>
          </div>
        </div>
        <div className="item">
          <div className="custom-media-v2">
            <img src="images/person_2.jpg" alt="Image" className="img-fluid person"/>
            <div className="author">by Carl Anderson</div>
            <h3><a href="#">Far far away, behind the word Mountain</a></h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p><a href="#">Read more</a></p>
          </div>
        </div>
        <div className="item">
          <div className="custom-media-v2">
            <img src="images/person_3.jpg" alt="Image" className="img-fluid person"/>
            <div className="author">by Michelle Allison</div>
            <h3><a href="#">Far far away, behind the word Mountain</a></h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p><a href="#">Read more</a></p>
          </div>
        </div>
        <div className="item">
          <div className="custom-media-v2">
            <img src="images/person_4.jpg" alt="Image" className="img-fluid person"/>
            <div className="author">by Drew Wood</div>
            <h3><a href="#">Far far away, behind the word Mountain</a></h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p><a href="#">Read more</a></p>
          </div>
        </div>

        <div className="item">
          <div className="custom-media-v2">
            <img src="images/person_1.jpg" alt="Image" className="img-fluid person"/>
            <div className="author">by James Watson</div>
            <h3><a href="#">Far far away, behind the word Mountain</a></h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p><a href="#">Read more</a></p>
          </div>
        </div>

      </div>

    </div>
  </div>

  <div class="subscribe" >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="subscribe-inner">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <h3 class="heading">Subscribe to our newsletter</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
              <div class="col-lg-6">
                <form action="#" class="d-flex">
                  <input type="text" class="form-control" placeholder="Your E-mail"/>
                  <input type="submit" value="Send" class="btn btn-primary"/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="section services">
    <div class="container">
      <div class="row mb-4">
        <div class="col text-center" >
          <h2 class="heading">Services</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-6 mb-4" >
          <div class="d-flex service active">
            <div class="wrap-icon">
              <span><span class="flaticon-square"></span></span>
            </div>
            <div class="contents">
              <h3>Web Development</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-6 mb-4" >
          <div class="d-flex service">
            <div class="wrap-icon">
              <span><span class="flaticon-technology"></span></span>
            </div>
            <div class="contents">
              <h3>Web Design</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-6 mb-4" >
          <div class="d-flex service">
            <div class="wrap-icon">
              <span><span class="flaticon-blueprint"></span></span>
            </div>
            <div class="contents">
              <h3>Graphic Design</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-6 mb-4">
          <div class="d-flex service">
            <div class="wrap-icon">
              <span><span class="flaticon-illumination"></span></span>
            </div>
            <div class="contents">
              <h3>Copywriting</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  <div class="testimonials-v2">
    <div class="container">
      <div class="row mb-3">
        <div class="col text-center">
          <h2 class="heading">Testimonials</h2>
        </div>
      </div>

      <div class="owl-4-slider dark owl-carousel">
        <div class="testimonial-v2">
          <blockquote>
            <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.&rdquo;</p>
          </blockquote>
          <div class="author d-flex">
            <div class="author-pic">
              <img src="images/person_1.jpg" alt="Image" class="img-fluid"/>
            </div>
            <div class="author-name">
              <h3>Carl Anderson</h3>
              <span>Director at Google</span>
            </div>
          </div>
        </div>

        <div class="testimonial-v2">
          <blockquote>
            <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.&rdquo;</p>
          </blockquote>
          <div class="author d-flex">
            <div class="author-pic">
              <img src="images/person_2.jpg" alt="Image" class="img-fluid"/>
            </div>
            <div class="author-name">
              <h3>Drew Wood</h3>
              <span>Director at Google</span>
            </div>
          </div>
        </div>

        <div class="testimonial-v2">
          <blockquote>
            <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.&rdquo;</p>
          </blockquote>
          <div class="author d-flex">
            <div class="author-pic">
              <img src="images/person_4.jpg" alt="Image" class="img-fluid"/>
            </div>
            <div class="author-name">
              <h3>Michelle Alisson</h3>
              <span>Director at Google</span>
            </div>
          </div>
        </div>

        <div class="testimonial-v2">
          <blockquote>
            <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.&rdquo;</p>
          </blockquote>
          <div class="author d-flex">
            <div class="author-pic">
              <img src="images/person_1.jpg" alt="Image" class="img-fluid"/>
            </div>
            <div class="author-name">
              <h3>Carl Anderson</h3>
              <span>Director at Google</span>
            </div>
          </div>
        </div>

        <div class="testimonial-v2">
          <blockquote>
            <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.&rdquo;</p>
          </blockquote>
          <div class="author d-flex">
            <div class="author-pic">
              <img src="images/person_2.jpg" alt="Image" class="img-fluid"/>
            </div>
            <div class="author-name">
              <h3>Drew Wood</h3>
              <span>Director at Google</span>
            </div>
          </div>
        </div>

        <div class="testimonial-v2">
          <blockquote>
            <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.&rdquo;</p>
          </blockquote>
          <div class="author d-flex">
            <div class="author-pic">
              <img src="images/person_4.jpg" alt="Image" class="img-fluid"/>
            </div>
            <div class="author-name">
              <h3>Michelle Alisson</h3>
              <span>Director at Google</span>
            </div>
          </div>
        </div>

        <div class="testimonial-v2">
          <blockquote>
            <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.&rdquo;</p>
          </blockquote>
          <div class="author d-flex">
            <div class="author-pic">
              <img src="images/person_1.jpg" alt="Image" class="img-fluid"/>
            </div>
            <div class="author-name">
              <h3>Carl Anderson</h3>
              <span>Director at Google</span>
            </div>
          </div>
        </div>

        <div class="testimonial-v2">
          <blockquote>
            <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.&rdquo;</p>
          </blockquote>
          <div class="author d-flex">
            <div class="author-pic">
              <img src="images/person_2.jpg" alt="Image" class="img-fluid"/>
            </div>
            <div class="author-name">
              <h3>Drew Wood</h3>
              <span>Director at Google</span>
            </div>
          </div>
        </div>

        <div class="testimonial-v2">
          <blockquote>
            <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.&rdquo;</p>
          </blockquote>
          <div class="author d-flex">
            <div class="author-pic">
              <img src="images/person_4.jpg" alt="Image" class="img-fluid"/>
            </div>
            <div class="author-name">
              <h3>Michelle Alisson</h3>
              <span>Director at Google</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>

  <div class="section cta-section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="cta">
            <div class="row align-items-center">
              <div class="col-md-6">
                <h2>Ready to get started?</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
              <div class="col-md-6 text-center text-md-right">
                <a href="#" class="btn btn-primary  mb-2 mb-md-0">Contact us</a>
                <a href="#" class="btn btn-primary ">Make a demo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="site-footer">
    <div class="inner first">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-4">
            <div class="widget">
              <h3 class="heading">About Untree.co</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
            <div class="widget">
              <ul class="list-unstyled social">
                <li><a href="#"><span class="icon-twitter"></span></a></li>
                <li><a href="#"><span class="icon-instagram"></span></a></li>
                <li><a href="#"><span class="icon-facebook"></span></a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 col-lg-2 pl-lg-5">
            <div class="widget">
              <h3 class="heading">Pages</h3>
              <ul class="links list-unstyled">
                <li><a href="#">Blog</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 col-lg-2">
            <div class="widget">
              <h3 class="heading">Resources</h3>
              <ul class="links list-unstyled">
                <li><a href="#">Blog</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="widget">
              <h3 class="heading">Contact</h3>
              <ul class="list-unstyled quick-info links">
                <li class="email"><a href="#">info@untree.co</a></li>
                <li class="phone"><a href="#">+1 222 212 3819</a></li>
                <li class="address"><a href="#">43 Raymouth Rd. Baltemoer, London 3910</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="inner dark">
      <div class="container">
        <div class="row text-center text-md-left">
          <div class="col-md-6 mb-3 mb-md-0">
            &copy; 2020. All Rights Reserved. Design by <a href="https://untree.co" target="_blank" class="text-black">Untree.co</a>
          </div>
          <div class="col-md-6 text-md-right">
            <a href="#" class="mx-2">Terms</a>
            <a href="#" class="mx-2">Privacy</a>
          </div>
        </div>
      </div>
    </div>
  </div>


    </Fragment>   
    )
    }
}

export default App;