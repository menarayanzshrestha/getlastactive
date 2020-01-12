const { getLastActive } = require('./index');

//unit test
test('it should return 18 minutes', () => {

    let currentDate = Date.now();

    let data = getLastActive(currentDate - (18 * 60 * 1000), currentDate);
    
    expect(data).toBe('18 minutes');
})
