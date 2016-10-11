describe('Routes Books', () => {

    const defaultBook = {
	id:1,
 	nome:'Default Book'
    };

    describe('Route GET /books',() => {
	it('should return a list of book', done => {
	    request
		.get('/books')
		.end((err, res) =>{

		    expect(res.body[0].id).to.be.eql(defaultBook.id);
		    expect(res.body[0].nome).to.be.eql(defaultBook.nome);

		    done(err);		
	    });
	});
    });
});
