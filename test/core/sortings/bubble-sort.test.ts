import { bubbleSort as execute } from '../../../src/core/sortings/bubble-sort';

describe('BubbleSort', () => {

    it('empty_input', () => {
        const input:Array<number> = [];
        const expected:Array<number> = [...input].sort();        
        expect(execute(input).toString()).toEqual(expected.toString());
    }, 10);

    it('small_input', () => {
        const input:Array<number> = [3,1,2];
        const expected:Array<number> = [...input].sort();        
        expect(execute(input).toString()).toEqual(expected.toString());
    }, 10);    

    it('small_identical_input', () => {
        const input:Array<number> = [5,5,5,5,5];
        const expected:Array<number> = [...input].sort();        
        expect(execute(input).toString()).toEqual(expected.toString());
    }, 10); 
    
    it('medium_input', () => {
        const input:Array<number> = [11,12,11,14,2,6,15,7,10,8,19,14,2,12];
        const expected:Array<number> = [...input];
        expected.sort((a,b) => { return a - b; });
        expect(execute(input).toString()).toEqual(expected.toString());
    }, 10);
    
    const generateRandom = (() => {
        const size = Math.floor(Math.random() * 50);
        const input = new Array<number>(size);
        for (let i=0; i<size; i++) {
            input[i] = Math.floor(Math.random() * 20);
        }
        return input;
    });

    it('repeat_random_100_times_concurrently', async() => {
        const TASK_SIZE:number = 100;
        const promise = new Promise<number>((resolve, reject) => {
            const completedList = new Array<number>();
            for (let i=0; i<TASK_SIZE; i++) {
                const fn = ((e:number) => {
                    const input = generateRandom();
                    const expected = [... input];
                    expected.sort((a,b) => {
                        return a - b;
                    });

                    try {
                        const output = execute(input);
                        expect(output.toString()).toEqual(expected.toString());
                        completedList.push(e);
                        if (completedList.length == TASK_SIZE) {
                            resolve(completedList.length);
                        }
                    } catch (err:any) {
                        reject(err);
                    }
                });
                setTimeout(fn, 1, i);
            }
        });
        await promise.then((e:number) => {}).catch((err:any) => {}).finally(() => {});
    }, 100);
       
})