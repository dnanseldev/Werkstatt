import { Customer } from "./customer";



describe('Customer Entity', () => {

    test('Validate name', () => {
        expect(Customer.isvalidName('Daniel')).toBe(true)
    });

    test('Validate last name', () => {
        expect(Customer.isvalidlastName('Stonebuilt')).toBe(true)
    });

    test('Validate document Id', () => {
        expect(Customer.isValidDocumentID('321.405.918-10')).toBe(true)
    });

    test('Validate phone number', () => {
        expect(Customer.isValidPhoneNumber('(16)98116-6676')).toBe(true)
    });
})