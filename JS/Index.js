const products = [
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

function menuFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}