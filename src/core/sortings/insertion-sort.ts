class InsertionSort {
    public execute(input:Array<number>):Array<number> {
        return this.solutionV1(input);
    }

    private solutionV1(input:Array<number>):Array<number> {
        let output = input;
        for (let i=1; i<output.length; i++) {
            for (let j=i-1; j>=0; j--) {
                if (output[j+1] < output[j]) {
                    let backupVal = output[j];
                    output[j] = output[j+1];
                    output[j+1] = backupVal;
                }
            }
        }
        return output;
    }
}

const sort = new InsertionSort();
export function insertionSort(input:Array<number>):Array<number> {
    return sort.execute(input);
}