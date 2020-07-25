const add = (a,b) => a + b;


test('should add two numbers', () => {
     const result = add(3,4);
     expect(result).toBe(7);
});

const generateGreeting = (name = 'anonymous') => `hello ${name}!`;

test('should return mike', () => {
     const result = generateGreeting("mike");
     expect(result).toBe("hello mike!");
});

test('should return mike', () => {
     const result = generateGreeting();
     expect(result).toBe("hello anonymous!");
});