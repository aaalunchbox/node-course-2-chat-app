const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Meatwad',
            room: 'Danger Cart'
        }, {
            id: '2',
            name: 'Master Shake',
            room: 'Carls Pool'
        }, {
            id: '3',
            name: 'Frylock',
            room: 'Danger Cart'
        }];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Meatwad',
            room: 'The Office Fans'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var userId = '1';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        var userId = '99';
        var user = users.removeUser(userId);

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var userId = '2'
        var user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find user', () => {
        var userId = '99';
        var user = users.getUser(userId);

        expect(user).toNotExist();
    });

    it('should return names for danger cart', () => {
        var userList = users.getUserList('Danger Cart');

        expect(userList).toEqual(['Meatwad', 'Frylock']);
    });

    it('should return names for carls pool', () => {
        var userList = users.getUserList('Carls Pool');

        expect(userList).toEqual(['Master Shake']);
    });

    
});