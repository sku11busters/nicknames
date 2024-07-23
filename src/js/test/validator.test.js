import { Validator } from "../validator";

describe('Validator', () => {
    let validator;

    beforeEach(() => {
        validator = new Validator();
    });

    test('должно вернуть true для допустимого имени пользователя', () => {
        expect(validator.validateUsername("user--name")).toBe(true);
        expect(validator.validateUsername("user-_Name")).toBe(true);
    });

    test('должно вернуть false для имени пользователя с более чем тремя подряд идущими цифрами', () => {
        expect(validator.validateUsername("user1234name")).toBe(false);
    });

    test('должно вернуть false для имени пользователя, содержащего недопустимые символы', () => {
        expect(validator.validateUsername("user@name")).toBe(false);
        expect(validator.validateUsername("user!name")).toBe(false);
    });

    test('должно вернуть false для имени пользователя, начинающегося и заканчивающегося недопустимым символом', () => {
        expect(validator.validateUsername("-user_")).toBe(false);
        expect(validator.validateUsername("user-")).toBe(false);
        expect(validator.validateUsername("_user")).toBe(false);
        expect(validator.validateUsername("1user2")).toBe(false);
        expect(validator.validateUsername("1user")).toBe(false);
        expect(validator.validateUsername("user2")).toBe(false);
    });
});
