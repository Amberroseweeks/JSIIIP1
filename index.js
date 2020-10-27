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
let form = document.getElementById("reviewformadd");
let reviews;
let fullReviews;
let reviewcontainer = document.getElementById("reviewcontainer");
let starRating =[];
let avg;
let myString;


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
<div>
        <label class="card-author subtle">How was your experience?</label>     
          <textarea class="form-control" rows="5"></textarea>
      </div>

      <fieldset class="rating">
      <input type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>
      <input type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
      <input type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
      <input type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="Meh - 3 stars"></label>
      <input type="radio" id="star4" name="rating" value="4" /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
            

  </fieldset>

  <button type="submit" id="submit" onclick="createReview ()" class="submitbutton">Submit${restaurants.id}</button>
  
    </div>
    </div>
    `;



        
    });

      return restaurants;

}

addReviewForm();


const getReviewsWithRestaurants = async () => {
    const reviews = await getReviews();
    const restaurants = await getRestaurant();
    const restReviews = await filterReviews();
    const infoCard = document.getElementsByClassName("infoCard");
    restaurants.forEach((restaurants, index,) => {
        restId = restaurants.id;
    
        const reviewIds = reviews.filter(review => {
         return review.restaurantId === restId;
        });

        reviewIds.forEach((reviewIds, index,) => {

            starRating.push(reviews[index].stars);
            let sum = starRating.reduce((previous, current) => current += previous);
            let avg = sum / starRating.length;

        avgReview = `${avg}`;

        Reviews = `
        <h2>Average Rating: ${avg}</h2>
        `;

        });

        sortReviewsArray = [];

let sortReviews = reviews[index].stars;
        sortReviewsArray.push(reviewIds);
        sortReviewsArray.sort();
const myString = JSON.stringify(sortReviewsArray);
const textReviewsFull = sortReviewsArray.join(",");
const reviewString = reviewIds.id;


var x, txt = "";

        // const reviewAverage = 
        resultsDiv.innerHTML += `<div class="card">
        <h2 class="card-title">${restaurants.name}</h2>
        <div class="card-author subtle">${restaurants.address}</span><span class="card-number card-circle subtle">${restaurants.id}</div>
        <div class="card-author subtle">Average rating: ${restaurants.id} </div>
        <div> <img src="${restaurants.imgUrl}" class="card-media"></img></div>
        <div id="reviewcontainer"> 
        ${Reviews}</div>
        <p class="review-title"> ${myString} </p>
        <p class="review-title"> Leave a review for ${restaurants.name} </p>
        ${reviewForm}</div>
        
        `;


        
    });


      return restaurants;

}

getReviewsWithRestaurants();



const createReview = async () => {


    const formArray = [];
    const xyz = document.getElementsByClassName("form-control");

    formArray.push(xyz);
    

    formArray.forEach((formArray, index,) => {


    
});
let text = formArray.value.join("");


    const newReview = {
        restaurantId: 1,
        stars: 4,
        text
    };


    // POST request - create a record in a database
    await fetch("http://localhost:3000/reviews", {
        method: "POST", 
        body: JSON.stringify(newReview),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });
};

const createRestaurant = async (name, address, imgUrl) => {
    await fetch("http://localhost:3000/restaurants", {
        method: "POST",
        body: JSON.stringify({
            name,
            address,
            imgUrl,
        }),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/jason",
        },
    });


};

const showRestaurants = async () => {
    const restaurants = await getReviewsWithRestaurants();
    const restaurantHTML = restaurants.map((restaurant) => {
        return `<p>${restaurant.name}</p>`;
    });

    const restaurantDiv = document.getElementsByClassName("restaurants")[0];
    restaurantDiv.innerHTML = restaurantHTML.join("");
};

// showRestaurants();


const addNewReview = async () => {
    let starRating = document.getElementById("stars".innerHTML);
    

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

