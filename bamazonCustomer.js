const mysql = require('mysql');
const conf = require('./config.js');
const inquirer = require('inquirer');



var connection = mysql.createConnection(conf);

connection.connect(function (err) {
    if (err) throw err;
    showInventory();
    selectItem();
});

function showInventory() {
    connection.query('SELECT * FROM products', function (err, results) {
        if (err) throw err;
        console.log(results);
    });
};

function selectItem() {
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;

        inquirer
            .prompt([
                {
                    name: 'idChoice',
                    type: 'rawlist',
                    choices: function () {
                        var choiceArray = [];
                        for (var i = 0; i < results.length; i++) {
                            choiceArray.push(results[i].item_id);
                        }
                        return choiceArray;
                    },
                    message: 'Choose the Item ID of the product you wish to purchase:',
                },
                {
                    name: 'quantity',
                    type: 'input',
                    message: 'Enter the quantity you wish to purchase:'
                }
            ])
            .then(function (answer) {
                var q = answer.quantity;
                var idChoice = answer.idChoice;
                purchaseItem(idChoice, q);
            });
    });
};

function purchaseItem(id, quantity) {
    connection.query('SELECT * FROM products WHERE item_id = ' + id, function (error, response) {
        if (error) { console.log(error) }
        if (quantity <= response[0].stock_quantity) {
            var cost = response[0].price * quantity;
            console.log('Your total cost is $' + cost);
            connection.query('UPDATE products SET stock_quantity = stock_quantity - ' + quantity + ' WHERE item_id = ' + id);
        }
        else {
            console.log('Not enough in stock. Check back later.')
        };
    });
};

