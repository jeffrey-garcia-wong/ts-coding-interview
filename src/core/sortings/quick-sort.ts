class QuickSort {

    public execute(input:Array<number>):Array<number> {
        return this.solutionV1(input);
    }

    private solutionV1(input:Array<number>):Array<number> {
        return this.quicksort(input);
    }

    private quicksort(input:Array<number>):Array<number> {
        if (input.length < 2) return input;

        let lower = new Array<number>();
        let higher = new Array<number>();

        let pivot = input[0];
        for (let i=1; i<input.length; i++) {
            if (input[i] < pivot) {
                lower.push(input[i]);
            } else {
                higher.push(input[i]);
            }
        }

        const output = new Array<number>();
        output.push(... this.quicksort(lower));
        output.push(pivot);
        output.push(... this.quicksort(higher));
        return output;
    }
}

const sort = new QuickSort();
export function quickSort(input:Array<number>):Array<number> {
    return sort.execute(input);
}