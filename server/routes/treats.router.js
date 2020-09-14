const router = require('express').Router();
const pool = require('../modules/pool');


// GET /treats
router.get( `/`, ( req, res ) => {
    console.log( 'Inside of router GET' );
    const queryString = `SELECT * FROM "treats";`;
    pool.query( queryString ).then( ( results ) => {
        res.send( results.rows );
    } ).catch( ( err ) => {
        console.error( 'Error in router GET', err );
        res.sendStatus( 500 );
    } ); // end query
} ); // end GET

// POST /treats
router.post( `/`, ( req, res ) => {
    console.log( 'Inside of router POST' );
    const queryString = `INSERT INTO "treats" ( name, description, pic ) VALUES ( $1, $2, $3 );`;
    pool.query( queryString, [ req.body.name, req.body.description, req.body.pic ] ).then( ( results ) => {
        res.sendStatus( 201 );
    } ).catch( ( err ) => {
        console.error( 'Error in router POST', err );
        res.sendStatus( 500 );
    } ); // end query
} ); // end POST

// PUT /treats/<id>
router.put( '/:id', ( req, res ) => {
    console.log( 'Inside of router PUT' );
    const queryString = `UPDATE "treats" SET "description" = 'something' WHERE "id" = $1;`;
    pool.query( queryString, [ req.params.id ] ).then( ( results ) => {
        res.sendStatus
    } ).catch( ( err ) => {
        console.err( 'Error in router PUT', err );
        res.sendStatus( 500 );
    } ) // end query
} ); // end PUT

// DELETE /treats/<id>

module.exports = router;
