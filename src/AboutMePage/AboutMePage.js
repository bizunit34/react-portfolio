import React from 'react';
import './AboutMePage.css';

function AboutMePage() {
  return (
    <>
      <section className='about-me-section container'>
        <h2>Hey, I'm Chris!</h2>
        <section className='flex-center'>
          <div className='headline-area'>
            <img className='self-pic' src={require('../images/self-pic.jpg')} 
            alt='a close up of Chris Martin' />
            <p className='headline-text'> A love of learning 
             pushes me to grow through failure and success. My enthusiasm for 
             collaborating with diverse teams and individuals helps add to a 
             positive culture as the team works to create something cool and unique.</p>
          </div>
        </section>
        <div className='flex-center'>
          <p className='text-box workhis'>After 5 years of medical and physics research 
            in labs of all sizes, all with little to no human 
            interaction, I decided I needed a change. I wanted to find something 
            that would still allow me to make a difference, but would allow me 
            to have a high amount of collaboration with others to create more 
            tangible results. This lead to me working for 2 ½ years as an 
            Immigration Program Manager overseeing $10+ million in business 
            revenue as we helped people have legal work authorization and gave 
            companies across the country access to that talent. While this role 
            change gave me the collaboration I craved along with quicker results, 
            it was still missing something. In the end, I lost the ability to 
            create, which was one of the things that I loved about research.</p>
        </div>
        <div className='flex-center'>
          <p className='text-box current'>Web development is like the perfect blend of languages and math. I bundle 
            things together just right and something beautiful comes out. At the same 
            time, If I throw things together just to see what happens, you continue 
            to discover something new. All of this happens while I ultimately create 
            something that I can share immediately. At the same time, it requires high 
            amounts of collaboration as you work with others to put everything together.</p>
        </div>
        <div className='flex-center'>
          <p className='text-box future'>It sounded perfect, so I joined a full-stack Bootcamp where I’ve grown my 
            appreciation for various languages and frameworks that I've been introduced and continue to grow my skills. Five years one
            from that bootcamp and I'm still loving the process of learning and the growth that I've been able to see in myself.</p>
        </div>
        <div className='flex-center'>
          <p className='text-box future'>As I continue this journey, I look forward to what life has in store for me.</p>
        </div>
      </section>
    </>
  )
}

export default AboutMePage;