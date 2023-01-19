import { bubbleSort as execute } from '../../../src/core/sortings/bubble-sort';

describe('BubbleSort', () => {

    it('test_001', () => {
        const input:Array<number> = [];
        const expected:Array<number> = [...input].sort();        
        expect(execute(input).toString()).toEqual(expected.toString());
    });

    it('test_002', () => {
        const input:Array<number> = [3,1,2];
        const expected:Array<number> = [...input].sort();        
        expect(execute(input).toString()).toEqual(expected.toString());
    });    

    it('test_003', () => {
        const input:Array<number> = [5,5,5,5,5];
        const expected:Array<number> = [...input].sort();        
        expect(execute(input).toString()).toEqual(expected.toString());
    }); 
    
    it('test_004', () => {
        const input:Array<number> = [11,12,11,14,2];
        const expected:Array<number> = [...input];
        expected.sort((a,b) => { return a - b; });
        expect(expected.toString()).toEqual(execute(input).toString());
    });  
       
})