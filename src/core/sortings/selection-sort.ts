class SelectionSort {
    public execute(input:Array<number>):Array<number> {
        return this.solutionV1(input);
    }

    private solutionV1(input:Array<number>):Array<number> {
        const output = input;
        for (let i=0; i<output.length; i++) {
            let minPos = i;
            let minVal = output[minPos];
            for (let j=i+1; j<output.length; j++) {
                if (output[j] < minVal) {
                    minPos = j;
                    minVal = output[minPos];
                }
            }
            // swap
            let backupVal = output[i];
            output[i] = minVal;
            output[minPos] = backupVal;
        }
        return output;
    }
}

const sort = new SelectionSort();
export function selectionSort(input:Array<number>):Array<number> {
    return sort.execute(input);
}