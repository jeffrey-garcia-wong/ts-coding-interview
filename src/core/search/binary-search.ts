class BinarySearch {

    public execute(input:Array<number>, target:number):number {
        return this.solutionV1(input, target);
    }

    private solutionV1(input:Array<number>, target:number):number {
        const output = input;

        let start:number = 0;
        let end:number = input.length - 1;

        while (start <= end) {
            let middle:number = start + Math.floor((end - start) / 2);
            if (target < output[middle]) {
                end = middle - 1;
            } else if (target > output[middle]) {
                start = middle + 1;
            } else {
                // tweaks to return the first occurrence of the target value in the array
                if (start != middle) 
                    end = middle;
                else
                    return middle;
            }
        }

        return -1;
    }

}

const search = new BinarySearch();
export function binarySearch(input:Array<number>, target:number):number {
    return search.execute(input, target);
}