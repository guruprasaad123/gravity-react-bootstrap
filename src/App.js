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

  <div className="subscribe" >
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="subscribe-inner">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h3 className="heading">Subscribe to our newsletter</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
              <div className="col-lg-6">
                <form action="#" className="d-flex">
                  <input type="text" className="form-control" placeholder="Your E-mail"/>
                  <input type="submit" value="Send" className="btn btn-primary"/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="section services">
    <div className="container">
      <div className="row mb-4">
        <div className="col text-center" >
          <h2 className="heading">Services</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-6 mb-4" >
          <div className="d-flex service active">
            <div className="wrap-icon">
              <span><span className="flaticon-square"></span></span>
            </div>
            <div className="contents">
              <h3>Web Development</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 mb-4" >
          <div className="d-flex service">
            <div className="wrap-icon">
              <span><span className="flaticon-technology"></span></span>
            </div>
            <div className="contents">
              <h3>Web Design</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-6 mb-4" >
          <div className="d-flex service">
            <div className="wrap-icon">
              <span><span className="flaticon-blueprint"></span></span>
            </div>
            <div className="contents">
              <h3>Graphic Design</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 mb-4">
          <div className="d-flex service">
            <div className="wrap-icon">
              <span><span className="flaticon-illumination"></span></span>
            </div>
            <div className="contents">
              <h3>Copywriting</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  <div className="testimonials-v2">
    <div className="container">
      <div className="row mb-3">
        <div className="col text-center">
          <h2 className="heading">Testimonials</h2>
        </div>
      </div>

      <div className="owl-4-slider dark owl-carousel">
        <div className="testimonial-v2">
          <blockquote>
            <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.&rdquo;</p>
          </blockquote>
          <div className="author d-flex">
            <div className="author-pic">
              <img src="images/person_1.jpg" alt="Image" className="img-fluid"/>
            </div>
            <div className="author-name">
              <h3>Carl Anderson</h3>
              <span>Director at Google</span>
            </div>
          </div>
        </div>

        <div className="testimonial-v2">
          <blockquote>
            <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.&rdquo;</p>
          </blockquote>
          <div className="author d-flex">
            <div className="author-pic">
              <img src="images/person_2.jpg" alt="Image" className="img-fluid"/>
            </div>
            <div className="author-name">
              <h3>Drew Wood</h3>
              <span>Director at Google</span>
            </div>
          </div>
        </div>

        <div className="testimonial-v2">
          <blockquote>
            <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.&rdquo;</p>
          </blockquote>
          <div className="author d-flex">
            <div className="author-pic">
              <img src="images/person_4.jpg" alt="Image" className="img-fluid"/>
            </div>
            <div className="author-name">
              <h3>Michelle Alisson</h3>
              <span>Director at Google</span>
            </div>
          </div>
        </div>

        <div className="testimonial-v2">
          <blockquote>
            <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.&rdquo;</p>
          </blockquote>
          <div className="author d-flex">
            <div className="author-pic">
              <img src="images/person_1.jpg" alt="Image" className="img-fluid"/>
            </div>
            <div className="author-name">
              <h3>Carl Anderson</h3>
              <span>Director at Google</span>
            </div>
          </div>
        </div>

        <div className="testimonial-v2">
          <blockquote>
            <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.&rdquo;</p>
          </blockquote>
          <div className="author d-flex">
            <div className="author-pic">
              <img src="images/person_2.jpg" alt="Image" className="img-fluid"/>
            </div>
            <div className="author-name">
              <h3>Drew Wood</h3>
              <span>Director at Google</span>
            </div>
          </div>
        </div>

        <div className="testimonial-v2">
          <blockquote>
            <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.&rdquo;</p>
          </blockquote>
          <div className="author d-flex">
            <div className="author-pic">
              <img src="images/person_4.jpg" alt="Image" className="img-fluid"/>
            </div>
            <div className="author-name">
              <h3>Michelle Alisson</h3>
              <span>Director at Google</span>
            </div>
          </div>
        </div>

        <div className="testimonial-v2">
          <blockquote>
            <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.&rdquo;</p>
          </blockquote>
          <div className="author d-flex">
            <div className="author-pic">
              <img src="images/person_1.jpg" alt="Image" className="img-fluid"/>
            </div>
            <div className="author-name">
              <h3>Carl Anderson</h3>
              <span>Director at Google</span>
            </div>
          </div>
        </div>

        <div className="testimonial-v2">
          <blockquote>
            <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.&rdquo;</p>
          </blockquote>
          <div className="author d-flex">
            <div className="author-pic">
              <img src="images/person_2.jpg" alt="Image" className="img-fluid"/>
            </div>
            <div className="author-name">
              <h3>Drew Wood</h3>
              <span>Director at Google</span>
            </div>
          </div>
        </div>

        <div className="testimonial-v2">
          <blockquote>
            <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.&rdquo;</p>
          </blockquote>
          <div className="author d-flex">
            <div className="author-pic">
              <img src="images/person_4.jpg" alt="Image" className="img-fluid"/>
            </div>
            <div className="author-name">
              <h3>Michelle Alisson</h3>
              <span>Director at Google</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>

  <div className="section cta-section">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="cta">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2>Ready to get started?</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
              <div className="col-md-6 text-center text-md-right">
                <a href="#" className="btn btn-primary  mb-2 mb-md-0">Contact us</a>
                <a href="#" className="btn btn-primary ">Make a demo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="site-footer">
    <div className="inner first">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="widget">
              <h3 className="heading">About Untree.co</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
            <div className="widget">
              <ul className="list-unstyled social">
                <li><a href="#"><span className="icon-twitter"></span></a></li>
                <li><a href="#"><span className="icon-instagram"></span></a></li>
                <li><a href="#"><span className="icon-facebook"></span></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-2 pl-lg-5">
            <div className="widget">
              <h3 className="heading">Pages</h3>
              <ul className="links list-unstyled">
                <li><a href="#">Blog</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-2">
            <div className="widget">
              <h3 className="heading">Resources</h3>
              <ul className="links list-unstyled">
                <li><a href="#">Blog</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="widget">
              <h3 className="heading">Contact</h3>
              <ul className="list-unstyled quick-info links">
                <li className="email"><a href="#">info@untree.co</a></li>
                <li className="phone"><a href="#">+1 222 212 3819</a></li>
                <li className="address"><a href="#">43 Raymouth Rd. Baltemoer, London 3910</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="inner dark">
      <div className="container">
        <div className="row text-center text-md-left">
          <div className="col-md-6 mb-3 mb-md-0">
            &copy; 2020. All Rights Reserved. Design by <a href="https://untree.co" target="_blank" className="text-black">Untree.co</a>
          </div>
          <div className="col-md-6 text-md-right">
            <a href="#" className="mx-2">Terms</a>
            <a href="#" className="mx-2">Privacy</a>
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