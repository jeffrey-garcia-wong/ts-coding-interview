class MergeSort {
    public execute(input:Array<number>):Array<number> {
        return this.solutionV1(input);
    }

    private solutionV1(input:Array<number>):Array<number> {
        this.mergeSort(input, 0, input.length - 1, new Array<number>(input.length).fill(0));
        return input;
    }

    private mergeSort(input:Array<number>, start:number, end:number, tmp:Array<number>):void {
        if ((end - start) < 1) return;
        const splitIndex = start + Math.floor((end - start) / 2);
        this.mergeSort(input, start, splitIndex, tmp);
        this.mergeSort(input, splitIndex+1, end, tmp);
        this.merge(input, start, splitIndex, splitIndex+1, end, tmp);
    }

    private merge(input:Array<number>, leftStart:number, leftEnd:number, rightStart:number, rightEnd:number, tmp:Array<number>):void {
        const start:number = leftStart;
        const end:number = rightEnd;
        
        let current = leftStart;
        while (leftStart <= leftEnd && rightStart <= rightEnd) {
            if (input[leftStart] < input[rightStart]) {
                tmp[current] = input[leftStart];
                leftStart += 1;
            } else {
                tmp[current] = input[rightStart];
                rightStart += 1;
            }
            current += 1;
        }

        while (leftStart <= leftEnd) {
            tmp[current] = input[leftStart];
            leftStart += 1;
            current += 1;
        }

        while (rightStart <= rightEnd) {
            tmp[current] = input[rightStart];
            rightStart += 1;
            current += 1;
        }

        for (let i=start; i<=end; i++) {
            input[i] = tmp[i];
        }
    }
}

const sort = new MergeSort();
export function execute(input:Array<number>):Array<number> {
    return sort.execute(input);
}