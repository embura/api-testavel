import express from "express"

const app = express();

app.route('/books')
	.get((req, res) =>{
	    res.json([
		{	
		    id:1,
		    nome:'Default Book'
		 }
	    ]);
	});

export default app;
