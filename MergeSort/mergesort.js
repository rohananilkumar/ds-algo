const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  
  const mid = Math.floor(array.length/2);
  
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  console.log(left);
  console.log(right);
  console.log();

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
    let i=0;
    let j=0;
    let newArray = new Array();
    console.log("incoming left: "+left);
    console.log("incoming right: "+right);
    

    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            newArray.push(left[i]);
            i++;
        } else if(left[i]>right[j]){
            newArray.push(right[j]);
            j++;
        } else {
            newArray.push(right[j], left[i]);
            i++; j++;
        }
    }

    while(i<left.length){
        newArray.push(left[i]);
        i++;
        console.log("left side is greater");
    }

    while(j<right.length){
        newArray.push(right[j]);
        j++;
        console.log("right side is greater");

    }

    console.log("merged array: "+newArray);


    return newArray;
}


const answer = mergeSort(numbers);
console.log(answer);