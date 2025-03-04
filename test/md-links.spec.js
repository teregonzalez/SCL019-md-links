// const mdLinks = require('../');
// const {verifyRoot} = require('../index')
const {
    existRoot,
    verifyAbsolute,
    transformAbsolute,
    getMdArchive,
    verifyDirectory,
    onlyUnique
} = require('../verifyFunctions')


describe('test in existRoot', () => {
    it('should return "true" for package.json', () => {
      //Arreglo
        const ruta = 'package.json'

        //acto
        const result = existRoot(ruta);
        
        //Assert
        expect(result).toBe(true);
    });
    it('should return "false" for package.json', () => {
        const ruta = 'fakeFile.json'

        const result = existRoot(ruta);

        expect(result).toBe(false);
    });
});

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
    it('should return "C:\\Users\\Gamer\\Documents\\Laboratoria\\SCL019-md-links\\pruebaLinks.md" for pruebaLinks.md', () => {
      const ruta = 'pruebaLinks.md'

      const result = transformAbsolute(ruta);

      expect(result).toBe("C:\\Users\\Gamer\\Documents\\Laboratoria\\SCL019-md-links\\pruebaLinks.md");
  });
});


describe('Test in getMdArchive', () => {
    it('should return "El archivo NO es md" for package.json', () => {
        const ruta = 'package.json'

        const result = getMdArchive(ruta);

        expect(result).toBe(false);
    })
    it('should return "El archivo es md" for README.md', () => {
        const ruta = 'README.md'

        const result = getMdArchive(ruta);

        expect(result).toBe(true);
    })
})

describe('Test in verifyDirectory', () => {
    it('should return true for "C:\Users\Gamer\Documents\Laboratoria\SCL019-md-links\test"', () => {
        const ruta = 'C:\\Users\\Gamer\\Documents\\Laboratoria\\SCL019-md-links\\test'

        const result = verifyDirectory(ruta);

        expect(result).toBe(true);
    })
    it('should return false for README.md', () => {
        const ruta = 'README.md'

        const result = verifyDirectory(ruta);

        expect(result).toBe(false);
    })

    describe('Test in onliUnique', () => {
        it('Should return only unique values', () => {
            const links = [1,2,3,4,1,1,3,5];
            const output = 5;

            const result = onlyUnique(links);

            expect(result).toEqual(output);
        })
    })
});
