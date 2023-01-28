class QuickSort {

    public execute(input:Array<number>):Array<number> {
        return this.solutionV1(input);
    }

    private solutionV1(input:Array<number>):Array<number> {
        this.quicksort(input, 0, input.length-1);
        return input;
    }

    private quicksort(data:Array<number>, start:number, end:number) {
    }

    private partition(data:Array<number>, pivotVal:number, start:number, end:number):number {
        return 0;
    }

}

const sort = new QuickSort();
export function quickSort(input:Array<number>):Array<number> {
    return sort.execute(input);
}