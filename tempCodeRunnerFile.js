
//customized 

 Array.prototype.customMap = function(compare){
        let arr = [];
        for(let num of students){
            arr.push(compare(num))
        }
        return arr;
}
const abhishek = students.customMap((student)=>student.id>1);
console.log(abhishek);