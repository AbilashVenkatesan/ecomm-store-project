// creating array for products
const toys = [
    {
        toyImg: 'Lego.jpg',
        toyName: 'Sonic lego set',
        toyRating: 4.0,
        toyAge: ['5-8', '8-12', '12-15'],
        toyColor: ['pink', 'white', 'blue'],
        toySize: ['md', 'lg', 'xl']
    },
    {
        toyImg: 'Chess set.jpg',
        toyName: 'Chess Set',
        toyRating: 5.0,
        toyAge: ['2-5', '5-8', '8-12', '12-15', '15-18'],
        toyColor: ['blue', 'white', 'blue'],
        toySize: ['sm', 'md', 'lg']
    },
    {
        toyImg: 'Nerf.jpg',
        toyName: 'Nerf Gun',
        toyRating: 3.4,
        toyAge: ['5-8', '8-12', '12-15', '15-18'],
        toyColor: ['yellow', 'white', 'blue'],
        toySize: ['xs', 'sm', 'md']
    },
    {
        toyImg: 'Rc car.jpg',
        toyName: 'Rc Car',
        toyRating: 4.4,
        toyAge: ['8-12', '12-15', '15-18'],
        toyColor: ['yellow', 'black', 'blue'],
        toySize: ['sm', 'md', 'lg']
    },
    {
        toyImg: 'Barbie.jpg',
        toyName: 'Barbie',
        toyRating: 3.5,
        toyAge: ['2-5', '5-8', '8-12'],
        toyColor: ['pink', 'white', 'yellow'],
        toySize: ['sm', 'md', 'lg']
    },
    {
        toyImg: 'Teddy.jpg',
        toyName: 'Teddy bear set',
        toyRating: 4.0,
        toyAge: ['2-5', '5-8', '8-12'],
        toyColor: ['pink', 'yellow','blue'],
        toySize: ['sm', 'md', 'lg']
    }

];

// toggle function for dropdown menu button

// function menuFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

const nav_toggle = document.querySelector(`.nav-toggle`)
const navigation = document.querySelector(`.navigation`)
nav_toggle.addEventListener('click',function () 
{
  if (navigation.classList.contains(`navigation`)) 
  {
    navigation.classList.remove('navigation')
    navigation.classList.add('show')
  } 
  else 
  {
    navigation.classList.remove('show')
    navigation.classList.add('navigation')
  }
})


//Making array reference
const toyResult = document.querySelector(`.results`)
const userInput = document.querySelector('.searchInput')

const displayProduct = function(toyArray)
{
    toyResult.innerHTML = toyResult.innerHTML = '<h2 class="subheading">Results</h2>'
    toyArray.forEach((toy) => {

        const singleToy = document.createElement(`article`)
        singleToy.classList.add(`toy`)
        singleToy.innerHTML = 

        `<article class="product">
            <a href="product.html" target="_blank"><img src="/img/toys/${toy.toyImg}" alt="${toy.toyName}" class="product-img"></a>  
            <button type="button"><span class="material-icons">favorite</span></button>
     
            <h3>${toy.toyName}    
            <span class="material-icons">star alt="review-star class="review"</span>
            <span class="material-icons">star alt="review-star class="review"</span>
            <span class="material-icons">star alt="review-star class="review"</span>
            <span class="material-icons">star alt="review-star class="review"</span></h3>
            <data value="29.99" class="price">$${toy.price}</data><br/>
            <label class="container2">
                <input type="checkbox">
                <span class="check2"></span>
            </label>
             <label class="container3">
                <input type="checkbox">
                <span class="check3"></span>
            </label>
        </article>`
     
    toyTable.appendChild(toys);

    });
}

// search function for array
const searchFilter = document.getElementById('searchFilter');
const setToySearch= function(toyArray)
{
    searchFilter.innerHTML = '<h2 class="subheading">Search result</h2>'
    toyArray.forEach((toy) =>{
    let toySearch = document.createElement('article');
    toySearch.classList.add('toy');
    toySearch.innerHTML =`<article class="product">

        <a href="product.html" target="_blank"><img src="/ecomm-store-project/img/products/${toy.toyImg}" alt="${toy.toyName}" class="product-img"></a>  
        <button type="button"><span class="material-icons">favorite</span></button>
     
        <h3>${toy.toyName}    
        <span class="material-icons">star alt="review-star class="review"</span>
        <span class="material-icons">star alt="review-star class="review"</span>
        <span class="material-icons">star alt="review-star class="review"</span>
        <span class="material-icons">star alt="review-star class="review"</span></h3>
        <data value="29.99" class="price">$${toy.price}</data><br/>
       <label class="container2">
          <input type="checkbox">
          <span class="check2"></span>
        </label>
        <label class="container3">
        <input type="checkbox">
        <span class="check3"></span>
        </label>
         </article>`
          
         toyTable.appendChild(toySearch);
     
    });

}

searchFilter.addEventListener('input', function(event){
    const query = event.target.value.toUpperCase();
   
   
       const toySearch=  toyArray.filter(function(toy){
           let toy= toy.toyName.toUpperCase()
   
           if(toy.includes(query)){
               return true
           }
           else{
               return false
           }
       });
       
       setToySearch(toySearch);
   
   });