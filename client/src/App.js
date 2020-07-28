import React from 'react';

import { Switch, Route } from 'react-router-dom';

import './Reset.css';

import { MediaProvider } from './context/Media';

import Navigation from './components/Navigation/Appbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Strategy from './pages/Strategy/Strategy';
import Services from './pages/Services/Services';
import Pricing from './pages/Pricing/Pricing';
import Tech from './pages/Tech/Tech';
import Partnerships from './pages/Partnerships/Partnerships';
import Testimonials from './pages/Testimonials/Testimonials';
import Contact from './pages/Contact/Contact';

export default () => {
  return (
    <MediaProvider>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/strategy" component={Strategy} />
        <Route path="/services" component={Services} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/technologies" component={Tech} />
        <Route path="/partnerships" component={Partnerships} />
        <Route path="/testimonials" component={Testimonials} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </MediaProvider>
  );
};