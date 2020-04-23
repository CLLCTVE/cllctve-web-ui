import React, {Component} from 'react';
//import './style/landing.css';

import '../style/components/button.scss'
import '../style/components/footer.scss'
import '../style/components/form.scss'
import '../style/components/form.scss'
import '../style/components/nav.scss'

import '../style/pages/brands.scss'
import '../style/pages/creatives.scss'
import '../style/pages/home.scss'
import '../style/pages/news.scss'
import '../style/pages/newsstory.scss'

import '../style/styles/breakpoints.scss'
import '../style/styles/normalize.scss'

import '../style/visuals/colors.scss'
import '../style/visuals/typography.scss'





//import './main.scss';

//import './style/landing.scss';

//using asyn way 
/*
class LandingPage extends Component{
  state= {
    posts:null,
    brands: null,
    testimonials: null,
    creatives: {
      about: creatives[0].content.rendered
    
    },
    othercreatives: null,
    team:null,
  };
  
 async componentDidMount(){
   //get creatives
    const url ="https://cllctvewp.cecildunston.com/wp-json/wp/v2/creatives"
    const response = await fetch(url);
    const data = await response.json();
    this.setState({creatives:data})
    //console.log(data)
 }
 */

class LandingPage extends Component{
  
  constructor(props){
    super(props);
    
    //each of these will hold the data for all the wpdata
    this.state={
      'creatives':[],
      'news':[],
      'otherCreatives':[],
      'picture url':[
        "https://cllctvewp.cecildunston.com/wp-content/uploads/2020/03/vicko-mozara-m82uh_vamhg-unsplash.jpg",
        "https://cllctvewp.cecildunston.com/wp-content/uploads/2020/03/union-jack.png",
        "https://cllctvewp.cecildunston.com/wp-content/uploads/2020/03/negative-space-woman-writing-notepad.jpg",
        "https://cllctvewp.cecildunston.com/wp-content/uploads/2020/02/NY-BHM-Creatives-2020.jpg)",
      ]
    
			
    }
  }
  
  componentDidMount(){
    this.getCreatives();
    this.getPost();
  
  }

  
  /*
  //trying to make it more simialr to the home.js in landing pagge(for ex: home.about or home.profile)
  getcreatives(){
    
    for(var i=0;i<this.state.creatives.length;i++){
      if(i==0){
        this.state.list.about=this.state.creatives.content.rendered;
      }
    }
  }
  */
  //from wpdata.js from landing-page
  getCreatives(){
    
    //using constructor
    fetch('https://cllctvewp.cecildunston.com/wp-json/wp/v2/creatives')
    .then(results => results.json())
    
    // for updating the constructor(state)
    .then(results => this.setState({'creatives': results}))
  }

  //from wpdata.js from landing-page
  getPost(){
    
    //using constructor
    fetch('https://cllctvewp.cecildunston.com/wp-json/wp/v2/posts')
    .then(results => results.json())
    
    // for updating the constructor(state)
    .then(results => this.setState({'news': results}))
    
  }

  //from wpdata.js from landing-page
  getotherCreatives(){

    //using constructor
    fetch('https://cllctvewp.cecildunston.com/wp-json/wp/v2/creatives')
    .then(results => results.json())
    
    // for updating the constructor(state)
    .then(results => this.setState({'otherCreatives': results}))

  }
  

//had to do index==0, couldnt find any other way, been looking forever
render() {
  return(
  

  <body>

    
    <article>
      <div id="mainimg"></div>
      <div class="enterbar">
      <form id="mainemail"class="container"ng-submit="home.submitEmail(home.app.email)">
        <input type="text" name="email" placeholder="Email"ng-model="home.app.email"ng-required="true" />
        <button type="submit">Enter</button>
      </form>
      </div>
    </article>

    <article id="news">
      <div class="container">
        <h1 ui-sref="news">Latest News Stories</h1>
        <div>
          <div class="newsinstance"  ui-sref="newsstory({story: x.slug})">
            <h3>MAKE YOUR SPRING BREAK WORTHWHILE</h3>
            <div id="mainimg"></div>
          </div>
          

          <div class="newsinstance"  ui-sref="newsstory({story: x.slug})">
            <h3>The British Invasion: The Growing Crossover Between Content in the US &amp; UK</h3>
            <div id="mainimg"></div>
          </div>
          

          <div class="newsinstance"  ui-sref="newsstory({story: x.slug})">
            <h3>UNINSPIRED? WE’VE GOT THE FIX!</h3>
            <div id="mainimg"></div>
          </div>
          

          <div class="newsinstance"  ui-sref="newsstory({story: x.slug})">
            <h3>20 BLACK CREATIVES TO WATCH IN NEW YORK</h3>
            <div id="mainimg"></div>
          </div>
          

        </div>
        </div>
    </article>

    <article id="about">
      <div class="container">
        <section>
          {this.state.creatives.map(function(item,index){
            return(
              <div key={index}>
                {/* according to app.js in landing page we want the zero cell of this json list*/}
                {index==0 &&
                 <h1>
                    {/*{item.content.rendered} */}
                    A PLATFORM FOR COLLEGE CREATIVES TO CONNECT
                 </h1>
                }
              </div>
            )
            }
          )}
        </section>
        <div class="desktopflex">
          <section>
            <div class="video">
              <iframe src="https://www.youtube.com/embed/KNU8vKGu_Kg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </section>
          <section>
          {this.state.creatives.map(function(item,index){
            return(
              <div key={index}>
                {/* we want cell 1 of the creatives call */}
                {index==1 &&
                 <p>
                    {/* home.aboutp */}
                  {/*{item.content.rendered}*/} 
                  Our vision is to empower the next generation of creatives. We bridge the gap between creatives and brands by providing a platform for college students to develop their portfolio, showcase their skills, and increase their visibility, while providing brands exclusive access to local Gen-Z consumers and Gen-Z content creators.
                 </p>
                }
              </div>
            )
            }
          )}
          </section>
        </div>
      </div>
    </article>

    <article id="profile">
      <div class="container">
        <div class="desktopflex">
          
          {this.state.creatives.map(function(item,index){
            return(
              <div key={index}>
                  {index==2 &&
                  <>
                    <section class="desktopflexbigger">
                      <h1 ng-bind-html="profile" class="ng-binding">
                        <h1>Create a profile, and share your interactive portfolio</h1>
                      </h1>
                      <p ng-bind-html="profileText" class="ng-binding">During the Spring 2020 semester, CLLCTVE is launching a private beta for college creatives where students will be able to register for an account, create an interactive portfolio, publish new content and job experiences, as well as connect with other creatives directly on the platform.
                      </p>
                    </section>
                    
                    <section id="homeProfileImg">
                      {/* home.profileIMg */}
                      
                  
                        <img src={item.acf.image}/>
                  
                    </section>
                  </>
                  }
              </div>
            )
            }
          )}
        </div>
      </div>
    </article>

    <article id="connect">
      <div class="container desktopflex">
        <>
          <div>
            <h1
              ng-bind-html="home.connect">
                CONNECT WITH OTHER CREATIVES
            </h1>
            <section>
              <div
                class="othercreative"
                ng-repeat="x in home.otherCreatives">
                {/*<!-- <img src="{{x.image}}" alt=""> -->*/}
                <div
                  class="creativeimage">
                  {/*style="background-image: url(https://cllctvewp.cecildunston.com/wp-content/uploads/2019/09/brandon-williams.jpg)">*/}
                  <img src="https://cllctvewp.cecildunston.com/wp-content/uploads/2019/09/brandon-williams.jpg"/>
                </div>
                <div>
                  {/* from getothercreatives => <h3>{{x.name}}</h3>*/}
                  <h3>Brandon Willaims</h3>
                  {/*<p>{{x.school}}</p>*/}
                  <p>University of Buffalo '20</p>
                </div>
              </div>	
            </section>

            <section>
              <div
                class="othercreative"
                ng-repeat="x in home.otherCreatives">
                {/*<!-- <img src="{{x.image}}" alt=""> -->*/}
                <div
                  class="creativeimage">
                  {/* fix style="background-image: url({{x.image}})"> */}
                  <img src="https://cllctvewp.cecildunston.com/wp-content/uploads/2019/09/IMG_0086.jpg"/>
                </div>
                <div>
                  
                  {/* from getothercreatives => <h3>{{x.name}}</h3>*/}
                  <h3>AMY NAKAMURA</h3>
                  {/*<p>{{x.school}}</p>*/}
                  <p>Syracuse University '21</p>
                </div>
              </div>	
            </section>


            <section>
              <div
                class="othercreative"
                ng-repeat="x in home.otherCreatives">
                {/*<!-- <img src="{{x.image}}" alt=""> -->*/}
                <div
                  class="creativeimage">
                  {/* fix style="background-image: url({{x.image}})"> */}
                  <img src="https://cllctvewp.cecildunston.com/wp-content/uploads/2019/09/miles.jpg"/>
                </div>
                <div>
                  
                  {/* from getothercreatives => <h3>{{x.name}}</h3>*/}
                  <h3>MILES FRANKLYN</h3>
                  {/*<p>{{x.school}}</p>*/}
                  <p>Rutgers University '21</p>
                </div>
              </div>	
            </section>
           
            <section>
              <div
                class="othercreative"
                ng-repeat="x in home.otherCreatives">
                {/*<!-- <img src="{{x.image}}" alt=""> -->*/}
                <div
                  class="creativeimage">
                  {/* fix style="background-image: url({{x.image}})"> */}
                  <img src="https://cllctvewp.cecildunston.com/wp-content/uploads/2019/09/siyaka.jpg"/>
                </div>
                <div>
                  
                  {/* from getothercreatives => <h3>{{x.name}}</h3>*/}
                  <h3>SIYAKA TAYLOR-LEWIS</h3>
                  {/*<p>{{x.school}}</p>*/}
                  <p>Syracuse University '20</p>
                </div>
              </div>	
            </section>
          </div>

          <div class ="test">
            <img src="https://cllctvewp.cecildunston.com/wp-content/uploads/2019/09/laptop_mockup.png"/>
          </div>
        </>
      </div>
    </article>

    <article id="skills">
      <section>
        <div class="container">
          <div>TRACK YOUR SKILLS AND ENGAGE WITH BRANDS
            <p>As creatives post new content, update their skills, and engage with the platform, they will increase their visibility to be seen by our brand partners looking for fresh young talent to hire for summer internships andlocal campaigns.</p>
          </div>
          <div class="test">
            <img src="https://cllctvewp.cecildunston.com/wp-content/uploads/2019/09/Copy-of-IMG_9864.jpeg" alt=""/>
          </div>        
        </div>
      </section>
    </article>

    <article>
      <div class="container desktopflex">
        <div class="formtext">
          <div 
            class="checkmark"
            ng-hide="brands.app.viewtype == 'xs' || brands.app.viewtype == 'sm'">
          </div>
          <h1>Stay Updated</h1>
        </div>

        <form
          id="mainform"
          name="home.myform" 
          ng-submit="home.register(creatives.form)" 
          novalidate>
          <fieldset>
           
            <input type="text" 
              name="firstname" 
              placeholder="First Name"
              ng-model="home.form.firstname"
              ng-required="true"/>
            <input type="text" 
              name="lastname" 
              placeholder="Last Name"
              ng-model="home.form.lastname"
              ng-required="true"/>
            <input type="text" 
              name="email" 
              placeholder="Email"
              ng-model="home.form.email"
              ng-required="true"/>

            <input type="text" 
              name="major" 
              placeholder="Major"
              ng-model="home.form.major"
              ng-required="true"/>

         
            <input type="text" 
              name="skills" 
              placeholder="List your skills (separated by a comma)"
              ng-model="home.form.skills"
              ng-required="true"/>
          </fieldset>

          <button type="submit"
            ng-click="home.submit()">
            Join the Waitlist
          </button>
        </form>

      </div>
    </article>

    <footer class="ng-isolate-scope"><h3>

      2019 CLLCTVE, LLC
    </h3>

    </footer>
    

  </body>
    
  );
}
}
export default LandingPage;