// creating array for products
const toys = [
    {
        toyImg: 'Lego.jpg',
        toyName: 'Sonic lego set',
        toyCategory: 'General Toys',
        toyId: 'general toys',
        toyRating: 4.0,
        toyAge: ['5-8', '8-12', '12-15'],
        toyColor: ['pink', 'white', 'blue'],
        toySize: ['md', 'lg', 'xl'],
        toyPagination: 'false'
    },
    {
        toyImg: 'Chess set.jpg',
        toyName: 'Chess Set',
        toyCat: 'category-hidden',
        toyRating: 5.0,
        toyAge: ['2-5', '5-8', '8-12', '12-15', '15-18'],
        toyColor: ['blue', 'white', 'blue'],
        toySize: ['sm', 'md', 'lg'],
        toyPagination: 'false'
    },
    {
        toyImg: 'Nerf.jpg',
        toyName: 'Nerf Gun',
        toyCategory: 'Toys for Boys',
        toyId: 'boys',
        toyRating: 3.4,
        toyAge: ['5-8', '8-12', '12-15', '15-18'],
        toyColor: ['yellow', 'white', 'blue'],
        toySize: ['xs', 'sm', 'md'],
        toyPagination: 'false'
    },
    {
        toyImg: 'Rc car.jpg',
        toyName: 'Rc Car',
        toyCat: 'category-hidden',
        toyRating: 4.4,
        toyAge: ['8-12', '12-15', '15-18'],
        toyColor: ['yellow', 'black', 'blue'],
        toySize: ['sm', 'md', 'lg'],
        toyPagination: 'false'
    },
    {
        toyImg: 'Barbie.jpg',
        toyName: 'Barbie',
        toyCategory: 'Toys for Girls',
        toyId: 'girls',
        toyRating: 3.5,
        toyAge: ['2-5', '5-8', '8-12'],
        toyColor: ['pink', 'white', 'yellow'],
        toySize: ['sm', 'md', 'lg'],
        toyPagination: 'false'
    },
    {
        toyImg: 'Teddy.jpg',
        toyName: 'Teddy bear set',
        toyCat: 'category-hidden',
        toyRating: 4.0,
        toyAge: ['2-5', '5-8', '8-12'],
        toyColor: ['pink', 'yellow','blue'],
        toySize: ['sm', 'md', 'lg'],
        toyPagination: 'pagination'
    }

];




//Making array reference
const toyResult = document.querySelector(`.results`)
toys.forEach((toy)=> {

    const toyArray = document.createElement('article')

    toyArray.classList.add('toy')
    toyArray.innerHTML=`
    <article class="product">
    <h3 id="${toy.toyId}" class="${toy.toyCat}">${toy.toyCategory}</h3>
          <header>
            <img src="img/${toy.toyImg}" alt="Lego">
            <h3>${toy.toyName}</h3>
            <data value="39"><del>$49.99</del> <ins>$29.99</ins></data>
            <p>Sonic lego set including all characters shown in the image with environment. Also includes instruction on how to build the sonic obstacle course.</p>
            <p><button type="button" class="view-product"><a href="product1.html" class="link">View Product</a></button></p>
            <dl>
              <dt>Rating</dt>
              <dd>4.0 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_border</span></dd>
            </dl>
          </header>
          <form>
            <fieldset>
              <legend>Colours</legend>
              <ul>
                <li><label><input type="radio" name="colour" value="pink"> Pink</label></li>
                <li><label><input type="radio" name="colour" value="white"> White</label></li>
                <li><label><input type="radio" name="colour" value="blue"> Blue</label></li>
              </ul>
            </fieldset>
            <fieldset>
              <legend>Sizes</legend>
              <ol>
                <li><label><input type="radio" name="size" value="md"> M</label></li>
                <li><label><input type="radio" name="size" value="lg"> L</label></li>
                <li><label><input type="radio" name="size" value="xl"> XL</label></li>
              </ol>
            </fieldset>
          </form>
          <footer>
            <button type="button" class="product-footer"><span class="material-icons">add_shopping_cart</span> Add to Cart</button>
            <button type="button" class="product-footer"><span class="material-icons">favorite</span></button>
          </footer>

          <!-- Pagination -->
              <nav aria-label="Pagination" class="${toy.toyPagination}">
                <p>1-6 of 23 products found</p>
                <ol class="pages">
                  <li class="page-num"><a href="#" class="link" aria-label="Current Page, Page 1" aria-current="true">1</a></li>
                  <li class="page-num"><a href="#" class="link" aria-label="Page 2">2</a></li>
                  <li class="page-num"><a href="#" class="link" aria-label="Page 3">3</a></li>
                  <li class="page-num"><a href="#" class="link" aria-label="Page 4">4</a></li>
                  <li class="page-num"><a href="#" class="link" aria-label="Page 5">5</a></li>
                </ol>
                <p class="back-top"><a href="#header" class="menu-button">Back to top ^</a></p>
              </nav>
        </article>
        `

        toyResult.appendChild(toyArray);

    });



//FILTER FUNCTION----

const searchFilterToy = document.getElementById('searchFilterToy');


const toyFilter= function(toys){

    toyResult.innerHTML = ``

    toys.forEach((toy) =>{

        let toyProduct = document.createElement('article');

        toyProduct.classList.add('toy');

        toyProduct.innerHTML =` <article class="product">
        <h3 id="${toy.toyId}" class="${toy.toyCat}">${toy.toyCategory}</h3>
              <header>
                <img src="img/${toy.toyImg}" alt="Lego">
                <h3>${toy.toyName}</h3>
                <data value="39"><del>$49.99</del> <ins>$29.99</ins></data>
                <p>Sonic lego set including all characters shown in the image with environment. Also includes instruction on how to build the sonic obstacle course.</p>
                <p><button type="button" class="view-product"><a href="product1.html" class="link">View Product</a></button></p>
                <dl>
                  <dt>Rating</dt>
                  <dd>4.0 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_border</span></dd>
                </dl>
              </header>
              <form>
                <fieldset>
                  <legend>Colours</legend>
                  <ul>
                    <li><label><input type="radio" name="colour" value="pink"> Pink</label></li>
                    <li><label><input type="radio" name="colour" value="white"> White</label></li>
                    <li><label><input type="radio" name="colour" value="blue"> Blue</label></li>
                  </ul>
                </fieldset>
                <fieldset>
                  <legend>Sizes</legend>
                  <ol>
                    <li><label><input type="radio" name="size" value="md"> M</label></li>
                    <li><label><input type="radio" name="size" value="lg"> L</label></li>
                    <li><label><input type="radio" name="size" value="xl"> XL</label></li>
                  </ol>
                </fieldset>
              </form>
              <footer>
                <button type="button" class="product-footer"><span class="material-icons">add_shopping_cart</span> Add to Cart</button>
                <button type="button" class="product-footer"><span class="material-icons">favorite</span></button>
              </footer>
            </article>
            `
          
         toyResult.appendChild(toyProduct);
     
    });

}

searchFilterToy.addEventListener('input', function(event){
    const query = event.target.value.toUpperCase();
   
   
       const filteringToys=  toys.filter(function(toy){
           let oneToy= toy.toyName.toUpperCase()
   
           if(oneToy.includes(query)){
               return true
           }
           else{
               return false
           }
       });
       
       toyFilter(filteringToys);
   
   
    
   });

