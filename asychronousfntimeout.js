function findSum(n){
    let ans=0;
    for(let i=0;i<n;i++){
        ans=ans+i;
    }
    return ans;
}
  function findSumtill100(){
    console.log(findSum(100));
  }
   setTimeout(findSumtill100 ,1000)
   console.log("hello world");