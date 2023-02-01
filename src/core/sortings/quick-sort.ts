class QuickSort {

    public execute(input:Array<number>):Array<number> {
        this.solutionV1(input, 0, input.length-1);
        return input;
    }

    private solutionV1(input:Array<number>, start:number, end:number):void {
        if ((end - start) < 1) return;

        const partition = ((input:Array<number>, start:number, end:number):number => {
            const middle = start + Math.floor((end - start)/2);
            const pivot = input[middle];

            const swap = ((i:number, j:number) => {
                const backup = input[i];
                input[i] = input[j];
                input[j] = backup;
            })

            swap(middle, end);

            let left = start;
            let right = end - 1;

            while (left <= right) {
                while (input[left] < pivot) left += 1;
                while (input[right] > pivot) right -= 1;

                if (left <= right) {
                    swap(left, right);
                    left += 1;
                    right -= 1;
                }
            }

            swap(left, end);

            return left;
        });

        let splitIndex = partition(input, start, end);
        this.solutionV1(input, start, splitIndex - 1);
        this.solutionV1(input, splitIndex + 1, end);
    }
}

const sort = new QuickSort();
export function quickSort(input:Array<number>):Array<number> {
    return sort.execute(input);
}