class SelectionSort {
    public execute(input:number):number {
        return this.solutionV1(input);
    }

    private solutionV1(input:number):number {
        return input + 1;
    }
}

// module.exports.execute = (input:number) => {
//     const sort:SelectionSort = new SelectionSort();
//     return sort.execute(input);
// }

const sort = new SelectionSort();

export function execute(input:number):number {
    return sort.execute(input);
}