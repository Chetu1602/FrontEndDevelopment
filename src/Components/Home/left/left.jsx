import React from 'react';

import './left.css';


const Left = ({ }) => {
    return (
       
        <div>
            <div class="logo">
                <img src="https://assets.nextleap.app/images/icons8-twitter.svg" alt="" />
            </div>
            <div class='container'>

                <div class="second">
                    <div class="icons">
                        <img src="https://assets.nextleap.app/images/icons8-home.svg" alt="" />
                    </div>
                    <div class="text">
                        Home
                    </div>


                </div>

                <div class="second">
                    <div class="icons">
                        <img src="https://assets.nextleap.app/images/notifications.svg" alt="" />
                    </div>
                    <div class="text">
                        Notifications
                    </div>


                </div>

                <div class="second">
                    <div class="icons">
                        <img src="https://assets.nextleap.app/images/mail.svg" alt="" />
                    </div>
                    <div class="text">
                        Messages
                    </div>


                </div>

                <div class="second">
                    <div class="icons">
                        <img src="https://assets.nextleap.app/images/bookmark.svg" alt="" />
                    </div>
                    <div class="text">
                        Bookmarks
                    </div>


                </div>

                <div class="second">
                    <div class="icons">
                        <img src="https://assets.nextleap.app/images/person.svg" alt="" />
                    </div>
                    <div class="text">
                        Profile
                    </div>


                </div>





            </div>
        </div >
  
    )
}
export default Left;