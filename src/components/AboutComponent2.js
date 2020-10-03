import React from "react";




function About(props) {
  

  return (
    <div className="container">
      <div className="top">
        <div className="col-12 text-center mt-8">
            <div className="text-dark pt-6">
          
          <h2>About </h2>
          <hr />
          
          <p className="lead">Turn of Phrase is a game, where the user is presented with an illustration and has to guess what phrase or figure of speech, the illustration represents. The user will be
                able to use hints or skips.As they go on, they will earn a higher score. Using the “hint” and “skip” and “quit” options will both cost the user a portion of their score. When they click, a modal will appear, asking
                the user if they are sure they want to spend their score. If they don’t have a high enough score, the modal will tell them they do not have the option. There will also be a settings icon, where the user can enable things like
                sound and music. In addition, the difficulty level and timer will be displayed. If the user decides to quit, a modal will appear to ask if they are sure and let them know that all of their progress will be lost. If the user agrees, they will be redirected to the home screen.</p>
        
            </div>
            </div>
        </div>
      <div className="container">
      <div class="row text-center">
        <div className="col-lg-4">
            <div className="about">
            <i class="fa fa-book" aria-hidden="true" data-transform="shrink-4 up-5"></i>
                <h2>Rules</h2>
                <p>Find the common expression on the screen in a timely manner and get the coins. You can use a hint that will cost you some coins or skip to the next phrase.</p>
             </div>
         </div>
         <div className="col-lg-4">
            <div className="about">
            <i class="fa fa-gamepad" aria-hidden="true" data-transform="shrink-4 up-5"></i>
            <h2>Features</h2>
               <p>Player can create account or play as guest. The sound can be switch on and off.The player has different levels so the game does not become boring.</p>  
             </div>
         </div>
         <div className="col-lg-4">
            <div className="about">
            <i class="fa fa-cogs" aria-hidden="true" data-transform="shrink-4 up-5"></i>
            <h2>Settings</h2>
               <p>There are thre sub-levels that,the player can choose from the main menu: Easy, Medium and Hard. When a new player start a game, an account can be created so the scores, the best time and other informations from the game can be stored. </p>
            
             </div>
         </div>
    </div>

    </div>
    </div>
          
        
  );
}

export default About;