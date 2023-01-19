class BubbleSort {
    public execute(input:Array<number>):Array<number> {
        return this.solutionV1(input);
    }

    private solutionV1(input:Array<number>):Array<number> {
        const output = input;
        let hasSwapped = false;
        do {
            hasSwapped = false;
            for (let i=1; i<input.length; i++) {
                if (input[i] < input[i-1]) {
                    hasSwapped = true;
                    const backupVal = input[i];
                    input[i] = input[i-1];
                    input[i-1] = backupVal;
                }
            }
        } while (hasSwapped);
        return output;
    }
}

const sort = new BubbleSort();
export function bubbleSort(input:Array<number>):Array<number> {
    return sort.execute(input);
}