import 'jasmine';
import * as SelectionSort from '../../../src/core/sortings/selection-sort';

console.log();

describe('SelectionSort', () => {
    it('should be created', () => {
        expect(SelectionSort.execute(1)).toEqual(2);
    });
})