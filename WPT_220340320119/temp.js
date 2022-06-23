const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'test',
	port:3306
});

app.use(express.static('abc'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
//whether you want nested objects support  or not

var result;

app.post('/poc1', function (req, res) {
	
		console.log("reading input " + req.body.v1 +  "  second " + req.body.v2)
		
    	var xyz ={ v1:37, v2:35};
        res.send(xyz);
    });


app.get('/poc2', function (req, res) {
    
	
        console.log("reading input " + req.query.xyz);
		
    	var xyz ={ v1:37, v2:35};

		res.send(xyz);

		});

app.listen(8081, function () {
    console.log("server listening at port 8081...");
});

app.get("/BookInfo", (req, resp) => {
	let bookid = req.query.bookid;
	console.log(bookid1);
	let details = {status: false, book:{}};
	con.query('select bookid, empname, sal from employee where bookid=?',[bookid1],
		(error, itemRow) => {
			if(error){
				console.log("Error"+ error);
			}
			else if(itemRow.length > 0){
				details.status = true;
				details.emp.bookid = itemRow[0].bookid;
				details.emp.bookname = itemRow[0].bookname;
				details.emp.price = itemRow[0].price;
			}
			resp.send(details);
		});
});

app.get("/AddBook", (req, resp) => {
	let bookid = req.query.bookid;
	let bookname1 = req.query.bookname1;
	let price1 = req.query.price1;

	console.log(item1);
	let details = {status: false, item:{}};
	con.query('insert into book(bookid, bookname, sal) values(?, ?, ?);' [bookid1, bookname1, price],
		(error, itemRow) => {
			if(error){
				console.log("Error"+ error);
			}
			else if(itemRow.affectedRows > 0){
				details.status = true;
				console.log("added book");
			}
			resp.send(details);
		});
});

app.get("/UpdateBook", (req, resp) => {
	let bookid2 = req.query.bookid2;
	let bookname2 = req.query.bookname2;
	let price2 = req.query.price2;

	console.log(item2);
	let details = {status: false, book:{}};
	con.query('update book set bookid=?, price=? where bookid=?', [bookname2, price2, bookid2],
		(error, itemRow) => {
			if(error){
				console.log("Error"+ error);
			}
			else if(itemRow.affectedRows > 0){
				details.status = true;
				console.log("update sucessful");
			}
			else{
				console.log("update failed");
			}
			resp.send(details);
		});
});