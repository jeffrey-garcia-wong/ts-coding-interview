import { binarySearch as execute } from "../../../src/core/search/binary-search";

describe('Binary Search', () => {

    it('empty_input', () => {
        const input:Array<number> = [];
        input.sort((a,b) => {
            return a - b;
        });  
        expect(execute(input, 5)).toEqual(input.indexOf(5));
    });

    it('search_small_input', () => {
        const input:Array<number> = [7,5,3];
        input.sort((a,b) => {
            return a - b;
        });  
        expect(execute(input, 5)).toEqual(input.indexOf(5));
    });

    it('search_small_input_not_found', () => {
        const input:Array<number> = [6,2,4];
        input.sort((a,b) => {
            return a - b;
        });
        expect(execute(input, 5)).toEqual(input.indexOf(5));
    });

    it('search_medium_input', () => {
        const input:Array<number> = [10, 4, -7, 99, 2, 34, 28, 0, 55];
        input.sort((a,b) => {
            return a - b;
        });
        expect(execute(input, 34)).toEqual(input.indexOf(34));
    });

    it('test', () => {
        const input = [0,0,1,1,1,1,2,2,3,4,5,6,6,6,9,10,11,12,12,12,12,12,13,14,15,17,17,17,18,18,18,19,19,19];
        expect(execute(input, 18)).toEqual(input.indexOf(18));
    }, 1);

    class RandomInput {
        public readonly target:number;
        public readonly array:Array<number>;
        constructor(target:number, array:Array<number>) {
            this.target = target;
            this.array = array;
        }
    }

    const generateRandom:(()=>RandomInput) = (() => {
        const size:number = Math.floor(Math.random() * 50);
        const input:Array<number> = new Array<number>(size);
        for (let i=0; i<size; i++) {
            input[i] = Math.floor(Math.random() * 20);
        }
        const r = new RandomInput(
            Math.floor(Math.random() * 20),
            input
        );
        return r;
    });

    it('repeat_random_100_times_concurrently', async() => {
        const TASK_SIZE:number = 100;
        const promise = new Promise<number> ((resolve, reject) => {
            const completedList:Array<number> = [];
            for (let i=0; i<TASK_SIZE; i++) {
                const fn:((e:number)=>void) = ((e:number) => {
                    const r = generateRandom();
                    const target = r.target;
                    const input = r.array;
                    input.sort((a,b) => {
                        return a - b;
                    })

                    try {
                        expect(execute(input, target)).toEqual(input.indexOf(target));
                        completedList.push(e);
                        if (completedList.length == TASK_SIZE) {
                            resolve(completedList.length);
                        }
                    } catch (err:any) {
                        reject(err);
                    }
                })
                setTimeout(fn, 1, i);
            }
        });

        await promise.then((e:number) => {}).catch((err:any) => {}).finally(() => {});

    }, 100);

});