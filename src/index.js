
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix.length === 0) {
      return [];
  }
matrix.map((item,index)=>{
  if ((index + 1) % 2 === 0){
      item.reverse();
  }
})
return matrix.reduce((a,b)=>a.concat(b))
}