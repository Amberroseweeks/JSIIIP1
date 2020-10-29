/*
Pre-requisites: install JSON server: https://github.com/typicode/json-server#getting-started
Create a web application that shows a list of restaurants from your database and their reviews. 
Core requirements:
1. Populate the page with restaurants from your local database, showing the name, address, an image, and the average review score. For instance, if there are 2 reviews on a restaurant, one for 4 stars and one for 3 stars, the average review score should be 3.5. Use .map(). 
2. Show the reviews from your local database below each restaurant, showing the text and star rating. Use .filter() and .map().
3. Sort the restaurants from highest-rated to lowest-rated. Use .sort().
4. Create a form that allows the user to write a new review and give a star rating. When the user submits the form the new review should show up on the page WITHOUT reloading the page.
Complete at least one of the following requirements then complete as many others as possible in whichever order you'd like.
1. The form should not be shown until someone clicks a button. Make sure the correct restaurantId is being added to the review. Only one form should be visible at a time.
2. The reviews should only be shown below the restaurant after the user clicks a restaurant. Only one restaurant's reviews should be visible at a time.
3. Add the option to delete reviews, but not restaurants. Deleting a review should remove it from the database. After deleting, show the updated list of reviews WITHOUT reloading the page.
4. Add users to the database. Associate them with reviews and show the user's details on the review. Use the .find() method to do so.
Grading criteria:
1. Use the methods that are listed in each requirement.
2. Use async/await and fetch and use only the data that exists in your database.
3. Use only ES6+ techniques if needed: template strings (`${}`), arrow functions, forEach(), etc.
4. Use GitHub and make a new branch for each numbered task, so at least 5 branches total. Give the branch a meaningful name using this convention: feature/show-restaurants. Merge the feature branch into your main branch when you complete the task. 
5. Do not have any extraneous comments beyond explanations of code (if needed) in your final result. Do not have any console.logs, in comments or otherwise.
6. CSS is not necessary and will not be graded but is encouraged for the sake of practice.
*/


let resultsDiv = document.getElementById("results");
let reviews;
let fullReviews;
let reviewcontainer = document.getElementById("reviewcontainer");
let starRating =[];
let avg;
let myString;
let addReviewText;
let reviewsWithStars;







const getRestaurant = async () => {
    const response = await fetch("http://localhost:3000/restaurants");
    const restaurants = await response.json();


      return restaurants;
      
};

getRestaurant();

const getReviews = async () => {
    //GET request - retieve data from an API
    const response = await fetch("http://localhost:3000/reviews");
    const reviews = await response.json();
    

    reviews.forEach((getReviews, index) => {
    });
    return reviews;
    
};

getReviews();

const filterReviews = async () => {


    const reviews = await getReviews();
    const restaurants = await getRestaurant();



    reviews.forEach((review, index) => {


    let fullReviews = `<div class="card">
    <p>${review.stars}, ${review.text}, ${review.restaurantId}</p>
    </div>`;

    const reviewsMatch = review.restaurantId === restaurants.id;

});

}


const addReviewForm = async () => {
    const reviews = await getReviews();
    const restaurants = await getRestaurant();
    const restReviews = await filterReviews();








   
 
    restaurants.forEach((restaurants, index) => {




        // const reviewAverage = 
        reviewForm = ` 
<div id="reviewform" class="reviewform">
        <label class="card-author subtle">How was your experience?</label>     
          <textarea class="form-control" rows="5"></textarea>
      

      <fieldset class="rating">
      <input type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
      <input type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
      <input type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="Meh - 3 stars"></label>
      <input type="radio" id="star4" name="rating" value="4" /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
      <input type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>   

  </fieldset>

  <button type="submit" id="submit" onclick="createReview ()" class="submitbutton">Submit${restaurants.id}</button>
  
    </div>
    </div>
    </div>
    `;






        
    });

      return restaurants;

}

addReviewForm();





const createReview = async () => {

    const formArray = [];
    const xyz = document.getElementsByClassName("form-control");
    let formInput = xyz[0];


    let text = formInput.value;
    formArray.push(xyz);

    

    const newArray = formArray.map(formArray => formArray);



    formArray.forEach((formArray, index) => {

});


    const newReview = {
        restaurantId: 1,
        stars: 4,
        text: text
    };


    // POST request - create a record in a database
    const newestReview = await fetch("http://localhost:3000/reviews", {
        method: "POST", 
        body: JSON.stringify(newReview),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });

    
    let reviewWrapper = document.getElementsByClassName("reviewWrapper");

var z = document.createElement('p');


z.innerHTML = JSON.stringify(newReview);
document.getElementById("newReviewContainer").appendChild(z);

};




//target star id to receive star rating
const createReviewStars = async () => {


    const oneStar = document.getElementById("star1");
    const twoStar = document.getElementById("star2");
    const threeStar = document.getElementById("star3");
    const fourStar = document.getElementById("star4");
    const fiveStar = document.getElementById("star5");
//testing the connection, currently it's null
    const testing = () => {
        

    };

    oneStar.addEventListener("click", testing());

      twoStar.addEventListener("click", function() {
        
      });

      threeStar.addEventListener("click", function() {
        
      });

      fourStar.addEventListener("click", function() {
       
      });

      fiveStar.addEventListener("click", function() {
        
      });



};

createReviewStars();

//print the restaurants and reviews with the average star rating
const getReviewsWithRestaurants = async () => {
    const reviews = await getReviews();
    const restaurants = await getRestaurant();
    const restReviews = await filterReviews();
    const infoCard = document.getElementsByClassName("infoCard");

    // const addReviewText = addReviewText();
    restaurants.forEach((restaurants, index,) => {
        restId = restaurants.id;
    
        const reviewIds = reviews.filter(review => {
         return review.restaurantId === restId;
        });

        reviewIds.forEach((reviewIds, index,) => {

            starRating.push(reviews[index].stars);
            let sum = starRating.reduce((previous, current) => current += previous);
            let avg = Math.round(sum / starRating.length*100)/100;
            console.log(Math.round(avg*100)/100);
            

        avgReview = `<p class="averagerating" (${avg}) </p>`;

        Reviews = `
        ${avg}
        `;

        });

        sortReviewsArray = [];
let sortReviews = reviews[index].stars;
        sortReviewsArray.push(reviewIds);
        sortReviewsArray.sort();


const reviewsOutput = sortReviewsArray.map(reviews => {
    reviews.forEach(function (review, index) {


        let reviewsWithStars = review.stars + " " + review.text;
        let displayStarReviews = review.stars;
        let displayReviewText = review.text;
    });
    return reviewsWithStars;

})

  function getReviewssIds(reviews) {
    return reviews.map(function (review) {
      return `<div class="reviews"> <span class="card-description review-title"> ${review.text}</span><p class="review-title"> ${review.stars}</p></div>`
    });
  }
  
  const reviewlist = getReviewssIds(reviewIds);
const myString = sortReviewsArray
function getReviewsOk(reviews) {
    return reviews.map(function(review){
        return review.text;
    });
}
getReviewsOk(sortReviewsArray);

reviewsDisplay = getReviewsOk(sortReviewsArray);





const textReviewsFull = sortReviewsArray.join(",");
const reviewString = reviewIds.id;

        // create the information cards that hold the restaurant info, reviews, and form
        resultsDiv.innerHTML += `<div class="card">
        
        <div> <img src="${restaurants.imgUrl}" class="card-media"></img></div>
        
        <div class="card-content-bg">
        <div class="card-number card-circle subtle">${restaurants.id}</div>
        <h2 class="card-title ">${restaurants.name} (<span class="averagerating">${Reviews}</span>)
        
        <div class="card-author subtle">${restaurants.address}</span></div>
        
        </div>
        
        <div class="arrow-down"></div>
        <div id="reviewcontainer" class="reviewWrapper"> 
        </div>
        
        ${reviewlist}
        <div id="newReviewContainer"></div>
        <button type="submit" id="submit" onclick="showReviewForm()" class="reviewbutton">Leave a review</button>
        ${reviewForm}</div>
        
        
        `;


        
    });


      return restaurants;

}

getReviewsWithRestaurants();


const addNewReview = async () => {
    



    await fetch("http://localhost:3000/reviews", {
      method: "POST",
      body: JSON.stringify({
        starRating,
        reviewText,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  
  };

  addNewReview();

  window.addEventListener('load', (event) => {

    //     reviewForm = document.getElementsByClassName("review");
    //     console.log(document.getElementById("reviewform"));
    
    //     if (reviewForm.style.display === "none") {
    //         reviewForm.style.display = "block";
    //     } else {
    //         reviewForm.style.display = "none";
        
    // }
    

    console.log('page is fully loaded');
  });



  const showReviewForm = async () => {
    // // reviewForm.classList.add("display");
    reviewForm = document.getElementById("reviewform");
    console.log(reviewForm);
    console.log("This works...");

    if (reviewForm.style.display === "none") {
        reviewForm.style.display = "block";
    } else {
        reviewForm.style.display = "none";

    
}

  };


  
