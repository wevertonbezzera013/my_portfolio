import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { images } from '../../constants'
import './About.scss'
import { urlFor, client } from '../../client'

/* const abouts = [
  { title: 'Back-end Development', description: 'I have 3 years of experience with Back-End Development', imgUrl: images.about01 },
  { title: 'Front-End Development', description: 'I also have 3 years of experience with Front-End Development', imgUrl: images.about02},
  { title: 'UX/UI', description: 'I am ready to deliver the best possible experience to your end user', imgUrl: images.about03},
  { title: 'Web Design', description: 'Did I mentioned that I am also a Web Designer? I love to create new and innovative designes!', imgUrl: images.about04},
]; */

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About