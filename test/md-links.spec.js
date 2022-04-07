// const mdLinks = require('../');
// const {verifyRoot} = require('../index')
const {existRoot, verifyAbsolute, transformAbsolute} = require('../verifyFunctions')


// describe('test in verifyRoot', () => {
// it('should return "El archivo EXISTE!" for README.md', () => {
//     const ruta = './README.md'

//     const result = verifyRoot(ruta);

//     expect(result).toEqual('El archivo EXISTE!');
// });

// it('should return "El archivo NO EXISTE!" for README.js', () => {
//     const ruta = './README.js'

//     const result = verifyRoot(ruta);

//     expect(result).toEqual('El archivo NO EXISTE!');
// });

// });

describe('test in verifyAbsolute', () => {
    it('should return "true" for "C:\Users\Gamer\Documents\Laboratoria\SCL019-md-links\README.md"', () => {
        const ruta = 'C:\\Users\\Gamer\\Documents\\Laboratoria\\SCL019-md-links\\README.md'

        const result = verifyAbsolute(ruta);

        expect(result).toBe(true);
    });

    it('should return "false" for package.json', () => {
        const ruta = 'package.json'

        const result = verifyAbsolute(ruta);

        expect(result).toBe(false);
    });
});


describe('test in transformAbsolute', () => {
    it('should return "C:\\Users\\Gamer\\Documents\\Laboratoria\\SCL019-md-links\\package.json" for package.json', () => {
        const ruta = 'package.json'

        const result = transformAbsolute(ruta);

        expect(result).toBe("C:\\Users\\Gamer\\Documents\\Laboratoria\\SCL019-md-links\\package.json");
    });
});

describe('test in existRoot', () => {
    it('should return "true" for package.json', () => {
        const ruta = 'package.json'

        const result = existRoot(ruta);

        expect(result).toBe(true);
    });
    it('should return "false" for package.json', () => {
      const ruta = 'fakeFile.json'

      const result = existRoot(ruta);

      expect(result).toBe(false);
  });
});
