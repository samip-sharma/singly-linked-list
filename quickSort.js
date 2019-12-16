function quickSort(arr, left = 0, right = arr.length-1){
    
    if(left < right){
    let pivotIndex = pivot(arr, left, right)
    quickSort(arr , left , pivotIndex-1)
    quickSort(arr, pivotIndex+1, right)
    }
    return arr
}

function pivot(arr, start = 0, end = arr.length -1){
    let pivot = arr[start]
    let swapIdx = start 

    for (let i = start+1; i <= end ; i++){
        if (pivot > arr[i]){
            swapIdx++
            swap(arr, swapIdx ,i)
        }
    }

    function swap(arr, i ,j){
            temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp 
    }
    swap(arr, start, swapIdx)
    return swapIdx
}