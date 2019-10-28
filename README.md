# bamazon
Bamazon is an Amazon-like storefront that will take in orders from customers and deplete stock from the store's inventory. 


LIRI understands four different commands:
    1. 'movie-this' - takes the user's input of a move and returns details of the movie
    2. 'concert-this' - takes the user's input of an artist/band and returns details of their next concert 
    3. 'spotify-this-song' - takes the user's input of a song and returns details of the song
    4. 'do-what-it-says' - uses readFile method to access the random.txt file and pull and execute the command and search

# Technology
Technology Used:
    <br>mysql: https://www.npmjs.com/package/mysql
    <br>inquirer: https://www.npmjs.com/package/inquirer


# Functionality

1. You will first be presented with the items available for purchase in the store-front.
<br>![Screenshot](/images/item_availability.PNG)
2. Choose the Item ID of the product you'd like to buy. 
<br>![Screenshot](/images/choseItem.PNG)
3. Enter the quantity of the product you'd like to buy.
4. Bamazon will confirm if there is enough product in stock. If there is, your total will be displayed on the screen. 
<br>![Screenshot](/images/enough.PNG)
<br>If there is not enough stock, you will be alerted. 
<br>![Screenshot](/images/not_enough_stock.PNG)
5. Purchases will be refelected in the SQL database with the quantity of the purchased item decreased by the quantity bought.

<br>Quantity Before Purchase:
<br>![Screenshot](/images/stock_before.PNG)
<br>Quantity After Purchase:
<br>![Screenshot](/images/stock_after.PNG)

# Deployed
Github Repo: https://github.com/RachaelClark12/bamazon

# Developer
Rachael A. Clark