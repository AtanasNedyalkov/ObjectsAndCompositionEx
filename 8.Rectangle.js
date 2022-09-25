function rectangle(width,height,color){
    let result = {
        width,
        height,
        color:color[0].toUpperCase() + color.substring(1),
        calcArea : function(){
            let res =  width*height;
            return res;
        }

    }
    return result;

}


let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
