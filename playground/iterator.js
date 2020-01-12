const arr = [1, 2, 3, 4, 5]
const iter = arr[Symbol.iterator]()

for (const x of iter) {
    console.log(x)
}