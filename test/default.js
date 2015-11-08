const should = require( 'should' );

const babel = require( 'babel' );

// Just a dummy test for now
describe( 'default', () => {
  it( 'should be initialized without errors', ( done ) => {
    babel.should.not.be.empty();
    done();
  });

  it( 'should run without errors', ( done ) => {
    done();
  });
});
