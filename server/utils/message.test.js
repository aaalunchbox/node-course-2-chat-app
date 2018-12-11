var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var from = 'Meatwad';
        var text = 'Jiggle Billy time!';
        var res = generateMessage(from, text);

        expect(res.createdAt).toBeA('number');
        expect(res).toInclude({
            from,
            text
        });
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Frylock';
        var lat = 123;
        var long = 456;
        var url = `https://www.google.com/maps?q=${lat},${long}`;
        var res = generateLocationMessage(from, lat, long);

        expect(res.createdAt).toBeA('number');
        expect(res).toInclude({
            from,
            url
        });
    })
})