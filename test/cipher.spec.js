describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', ()=>{
      assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "HIJKLMNOPQRSTUVWXYZABCDEFG")
    });

    it('deberia retornar "CDE FGH" para  "ABC DEF" con offset 2', ()=>{
      assert.equal(cipher.encode(2,"ABC DEF"),  "CDE FGH")
    });

    it('deberia retornar "Dd Ee" para  "Aa Bb" con offset 3', ()=>{
      assert.equal(cipher.encode(3,"Aa Bb"), "Dd Ee")
    });

    it('deberia retornar "olvidaste colocar tu mensaje" para "@" con offset 0', ()=>{
      assert.equal(cipher.encode(0, "@"), "olvidaste colocar tu mensaje")
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', ()=>{
      assert.equal(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"), "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    });

    it('deberia retornar "CDE FGH" para "ABC DEF" con offset 2', ()=>{
      assert.equal(cipher.decode(2,"CDE FGH"), "ABC DEF")
    });

    it('deberia retornar "Aa Bb" para "Dd Ee" con offset 3', ()=>{
      assert.equal(cipher.decode(3,"Dd Ee"), "Aa Bb")
    });

    it('deberia retornar "olvidaste colocar tu mensaje" para "@" con offset 0', ()=>{
      assert.equal(cipher.decode(0, "@"), "olvidaste colocar tu mensaje")
    });
  });

});
