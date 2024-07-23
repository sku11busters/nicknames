export class Validator {
    validateUsername(username) {
        // Проверка на допустимые символы
        const allowedCharacters = /^[A-Za-z0-9-_]+$/; 
                
        // Проверка на начало и конец (не может начинаться и заканчиваться цифрой, _ или -)
        const startEndCheck = /^[0-9-_]|[0-9-_]$/;

        // Проверка на наличие более трех подряд идущих цифр
        const consecutiveDigits = /\d{4,}/;

        // Проверяем все условия
        if (!allowedCharacters.test(username)) {
            return false; // Неправильные символы
        }
        if (startEndCheck.test(username)) {
            return false; // Неправильное начало или конец
        }
        if (consecutiveDigits.test(username)) {
            return false; // Более трех подряд идущих цифр
        }

        return true; // Если все проверки пройдены
    }
}

