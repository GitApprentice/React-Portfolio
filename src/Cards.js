import React from 'react';
import './Cards.css';
import Missoula from './Missoula.jpg';
import Travel from './Travel.jpg';
import RemoteWork from './Remote Work.jpg';
import FrontEndDevelopment from './Front End Development.jpg'
import { FiArrowRightCircle } from 'react-icons/fi';
import Flippy, { FrontSide, BackSide } from 'react-flippy';



class Cards extends React.Component {
    render() {
      return (
        <div class='outline'>
          <div class="header">
            <h1 class='text'>
              Goals
            </h1>
          </div>

          <Flippy
            flipOnHover={false} // default false
            flipOnClick={true} // default false
            flipDirection="horizontal" // horizontal or vertical
            ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            >  

            <FrontSide style = {{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                height: '300px',
                width: '235px',
                margin: '20px',
                backgroundColor: 'white'
            }}>   
              <img class="image" src={Missoula} alt='Missoula, Montana'/>
              <h3 class="card-title">MISSOULA</h3>
              <p class="card-flip">Click arrow to flip<FiArrowRightCircle/></p>
            </FrontSide>
            
            <BackSide style = {{
                backgroundColor: 'white',
                height: '300px',
                width: '235px',
                left: '6%'
            }}>
              So, this goal I have actually already achieved. I had wanted to move to Missoula since I was a senior in
              high school and was looking at places to go for college. Upon starting this portfolio project it was still
              one of my goals, so I decided to keep it in the project to show that I'm actively accomplishing my goals.            
            </BackSide>

          </Flippy>

          <Flippy
            flipOnHover={false} // default false
            flipOnClick={true} // default false
            flipDirection="horizontal" // horizontal or vertical
            ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            >
            <FrontSide
                style={{ 
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '300px',
                  width: '235px',
                  margin: '20px',
                  backgroundColor: 'white'
                }}
            >
              <img class="image" src={Travel} alt='Missoula, Montana'/>
              <h3 class="card-title">TRAVEL</h3>
              <p class="card-flip">Click arrow to flip<FiArrowRightCircle/></p>
            </FrontSide>
            <BackSide 
                style={{
                  backgroundColor: 'white',
                  height: '300px',
                  width: '235px',
                  left: '6%'
                }}
            >
              Travel is my absolute passion. There is no feeling in the world to me like jetting across the planet and
              stepping out into a new land. It fuels me. It will be a little more difficult to make this goal happen
              with all the recent traveling restrictions, but I am still determined to make it work somehow.
            </BackSide>
          </Flippy>

          <Flippy
            flipOnHover={false} // default false
            flipOnClick={true} // default false
            flipDirection="horizontal" // horizontal or vertical
            ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            >
            <FrontSide
                style={{ 
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '300px',
                  width: '235px',
                  margin: '20px',
                  backgroundColor: 'white'
              }}
            >
              <img class="image" src={RemoteWork} alt='Missoula, Montana'/>
              <h3 class="card-title">WORK REMOTELY</h3>
              <p class="card-flip">Click arrow to flip<FiArrowRightCircle/></p>
            </FrontSide>
            <BackSide 
                style={{
                  backgroundColor: 'white',
                  height: '300px',
                  width: '235px',
                  left: '6%'
                }}
            >
              The way I plan to make the first two goals happen is by being able to work remotely. I love the idea of
              being able to work remotely. To me it perfectly defines the modern technological age, you can still provide
              quality work, but are able to do so taking advantage of all the benefits technology has to offer. 
            </BackSide>
          </Flippy>

          <Flippy
            flipOnHover={false} // default false
            flipOnClick={true} // default false
            flipDirection="horizontal" // horizontal or vertical
            ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            >
            <FrontSide 
                style={{ 
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '300px',
                  width: '235px',
                  margin: '20px',
                  backgroundColor: 'white'
                }}
            >
              <img class="image" src={FrontEndDevelopment} alt='Missoula, Montana'/>
              <h3 class="card-title">FRONT END DEV</h3>
              <p class="card-flip">Click arrow to flip<FiArrowRightCircle/></p>
            </FrontSide>
            <BackSide 
                style={{
                  backgroundColor: 'white',
                  height: '300px',
                  width: '235px',
                  left: '6%',
                  overflowY: 'scroll'
                }}
            >
              Upon entering the computer programming field and learning a little bit of many languages I had to sit down
              and decide which languages I wanted to stick with (Full list of skills on next page). Through researching
              the various avenues I had available to me by searching online and speaking with friends of mine who were 
              employed with web and software development jobs I decided to stick with Front End Development. Backend
              development was too science-y to retain my interest. I have a natural interest for design and style, and I
              have always loved the look of a professionally designed website. The ability to re-create that style of 
              website in order to help businesses and generate clientele is something I would love to be a part of. 
            </BackSide>
          </Flippy>
        </div>  
      );
    }
}

export default Cards;