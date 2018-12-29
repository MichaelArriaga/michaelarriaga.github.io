import React from 'react';
import * as typeformEmbed from '@typeform/embed'


// global components
import Header from '../components/header';
import ResponsiveHeader from '../components/responsive-header';
import Footer from '../components/footer';
import { Link } from 'gatsby';

// static assets
import aboutimg from '../../static/etc/images/pages/about/self-pic.png';

import styles from './about-css.module.css'

const typeform = typeformEmbed.makePopup (
  'https://michael2329.typeform.com/to/kpBMGz',
  {
    mode: 'popup',
    autoClose: 3000,
    hideHeaders: true,
    hideFooters: true,
    onSubmit: function() {
      console.log('Typeform success')

    }
  }
)

export default () => (
  <div>
        <ResponsiveHeader />
    <Header />
  <div className={styles.aboutContainer}>

    <h1 className={styles.aboutHeader}>/ABOUT ME</h1>
    <img className={styles.aboutImg} src={aboutimg} alt="not loaded"/>

    <p className={[styles.bodyBlock, styles.rotateRight].join(' ')} >
    <span className={styles.highlight}>Mike Arriaga</span> is a professional career musician and drum performance instructor turned programmer and design thinker. Originally from <span className={styles.highlight}>Long Beach California</span> now based in <span className={styles.highlight}>Seattle</span>, Mike has never let barriers stand in his way when it comes to what he is passionate about doing. Starting in a small garage at age 4, Mike eventually went on to recording, producing, and performing with a few of the <span className={styles.highlight}>world’s</span> most famed musicians and producers. 
    </p>


    <p className={[styles.bodyBlock, styles.rotateLeft].join(' ')} >
    <span className={styles.highlight}>In 2014</span>, Mike decided to switch his focus from music to designing and building <span className={styles.highlight}>meaningful</span> software, and visual designs to pursue as a <span className={styles.highlight}>career</span> Since then, he has aimed to build <span className={styles.highlight}>projects that benefit every day people</span> with his latest project being a tool that helps <span className={styles.highlight}>Amazon Flex workers</span> visualize their out of pocket expenses. <Link className={styles.link} to="/projects/flex-mate" ><span className={styles.highlight}>CHECK IT OUT HERE</span></Link>
    </p>


    <p className={[styles.bodyBlock, styles.rotateRight].join(' ')} >
    I help startups win through <span className={styles.highlight}>user-centered design</span> and my ability to wear multiple hats in a product team. From <span className={styles.highlight}>Product Design</span> and UX Research to <span className={styles.highlight}>Full process Front-End development.</span> I pride myself in my ability to communicate, articulate and <span className={styles.highlight}>simplify</span> complex client-project needs into simplified language that is easy to understand. 
    </p>

    <h2 className={styles.sectionHeader}>Technology Agnostic</h2>


    <p className={[styles.bodyBlock, styles.rotateRight].join(' ')} >
    I am <span className={styles.highlight}>technology agnostic</span>, meaning that I do not pledge allegiance to any one design tool or tech stack. Instead, I am hyper-focused on <span className={styles.highlight}>rapid learning and adapting</span> to many different frameworks, design tools, workflows and situations using optimal learning strategies and <span className={styles.highlight}>intense study regimen</span>.
    </p>

    <p className={[styles.bodyBlock, styles.rotateLeft].join(' ')} >
    So, no matter what tool or framework your product team prefers, I will be up to speed and ready to make <span className={styles.highlight}>meaningful contributions</span> to your project in record time. Like a <span className={styles.highlight}>musical instrument</span>, I consider technologies to be nothing more than the tools that we use to <span className={styles.highlight}>express our creative ideas</span>, which is it’s own entity that is <span className={styles.highlight}>separate</span> from the core industry experience that we accumulate over time.
    </p>

    <h2 className={styles.sectionHeader} style={{marginBottom: "40px", textAlign: "center"}}>Let’s talk about what I can do for your project!</h2>

    <ul  className={ styles.contactList }>
      <li>
      <button id="typeform" className={styles.contactButton} onClick={() => { typeform.open() } } >Let's talk!</button>
      </li>

      <li>
      <a className={styles.contactButton} style={{color: "black", background: "white", }} href="https://devdb.io/ux_michael" target="_blank" rel="noopener noreferrer">View My Resume</a>
      </li>
    </ul>
   
  </div>
  <Footer />
  </div>
)