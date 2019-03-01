describe('cipher', ()=>{
  it ('cipher deberia ser un objeto', ()=>{
    assert.equal(typeof cipher, 'object')  
  });
describe('cipher.suma', ()=>{
  it('cipher.suma deberia ser una funcion', ()=>{
    assert.equal(typeof cipher.suma, 'function');
  })
  it('cipher.suma debe sumar 2 numeros para ello cuando a=3 y b=5, donde debe retornar 8', ()=>{
    assert.equal(cipher.suma(3,5), 8);
  })
});
describe('cipher.resta', ()=>{
  it('cipher.resta debe restar 2 numeros para ellos c=10 y d=4, donde deber retornar 6', ()=>{
    assert.equal(cipher.resta(10,4),6);
  })
})
});