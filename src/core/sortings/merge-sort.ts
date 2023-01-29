class MergeSort {
    public execute(input:Array<number>):Array<number> {
        return this.solutionV1(input);
    }

    private solutionV1(input:Array<number>):Array<number> {
        return this.mergeSort(input);
    }

    private mergeSort(input:Array<number>):Array<number> {
        if (input.length<2) return input;

        const middle = Math.floor(input.length / 2);
        const left = input.slice(0, middle);
        const right = input.slice(middle, input.length);

        const sortedLeft = this.solutionV1(left);
        const sortedRight = this.solutionV1(right);

        return this.merge(sortedLeft, sortedRight);
    }

    private merge(left:Array<number>, right:Array<number>):Array<number> {
        let leftCount = 0;
        let rightCount = 0;
        const merged = new Array<number>();

        while (leftCount<left.length && rightCount<right.length) {
            if (left[leftCount] < right[rightCount]) {
                merged.push(left[leftCount]);
                leftCount++;
            } else {
                merged.push(right[rightCount]);
                rightCount++;
            }         
        }

        while(leftCount<left.length) {
            merged.push(left[leftCount]);
            leftCount++;
        }

        while(rightCount<right.length) {
            merged.push(right[rightCount]);
            rightCount++;
        }           

        return merged;
    }
}

const sort = new MergeSort();
export function execute(input:Array<number>):Array<number> {
    return sort.execute(input);
}