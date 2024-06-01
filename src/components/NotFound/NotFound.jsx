import React from 'react';
import './notfound.scss';

function NotFound(props) {
  return (
    <section className="notfound">
      <h1 className="notfound__title">404</h1>
      <span className="notfound__desc">Page not found</span>
    </section>
  );
}

export default NotFound;
