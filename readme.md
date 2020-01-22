- Background and Overview
    * It's an app about dog's lifestyle 
    * Depending on your dog's breed, age, medication records, we will help you to make decisison about your dog's lifestyle
    * Customized food or food ingredents, activity levels, walking trails will be recommanded to you 

- Functionality and MVP 
    * Shopping Cart, Shopping Index, Suscritions for dog food. 
    * Map's API for location, routes. 
    * Food and Acitivites recommandation based on user's input of his/her dog. 

- Technologies and Technical Challenges
    * MongoDb, NoSql, Node.Js, React, Redux, Express.js, Css. 
    * Using 3rd party API. Associations. 
    * Business Logic to calculate value added recommandations. 

- Group Members and Work Breakdown
    * Wayne Xia - Team Lead, front-backend
    * Kaiye Chen - Backend logic, Frontend React, 3rd-party API intergration
    * Edward Zhou - Frontend, Css, Html, backend busines logic 


- Day to Day
    1/20 
        * Wayne Xia - Food Model Validations 
        * Kaiye Chen - Backend, User Auth, Model Validations
        * Edward Zhou - Model Validations

    1/21 
        * Wayne Xia - Shopping Cart / Suscription functions front-end. 
        * Kaiye Chen - Google Maps Api 
        * Edward Zhou - User Auth Page / Creating Dogs.  


    1/22 
        * Wayne Xia - Shopping Cart / Suscription functions front-end. 
        * Kaiye Chen - Google Maps Api 
        * Edward Zhou - User Auth Page / Creating Dogs.  

    1/23
        * Wayne Xia - testing  
        * Kaiye Chen - Intergrating 
        * Edward Zhou - Business logic


    1/24 
        * Wayne Xia - html css   
        * Kaiye Chen - html css   
        * Edward Zhou - html css  


    1/25 
        * Wayne Xia - debugging, heroku,  
        * Kaiye Chen - seeding, debugging, getting ready for production
        * Edward Zhou - debugging, getting ready for production

    1/26 
        * Wayne Xia - Production Readme, debugging 
        * Kaiye Chen - Production Readme, debugging
        * Edward Zhou - Production Readme, debugging




how state look like: 

        {
          session:   {
                session: id / null 
            }
            dog: { id: 
                    dogName: 
                    medical condition : 
                    age: 
                    breed:
                }
            food: {
                        function = logic 
                  } 
                  (logic the food to match dog)

            location:{ 825 baterry st / GPS to show current location(api) } 
            

        }

        goolge api (state.location)
        random shit~~~~ 

        CSS to make to shit look awesome ~~~~~~~