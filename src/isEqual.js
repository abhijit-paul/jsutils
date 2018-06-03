const isEqualObject = (obj1, obj2) => {
  const isEqualTypeAndVal = ( obj1 === obj2 );
  if(isEqualTypeAndVal) return true;

  const isEqualFunc = (
        obj1 instanceof Function &&
    	obj2 instanceof Function &&
        obj1.toString() === obj2.toString()
    );
  if(isEqualFunc) return true;

  const isEqualDate = (
    	obj1 instanceof Date &&
    	obj2 instanceof Date &&
    	obj1.getTime() === obj2.getTime()
    );
  if(isEqualDate) return true;

  const isEqualArray = (
    	obj1 instanceof Array &&
    	obj2 instanceof Array &&
    	obj1.length === obj2.length &&
    	obj1.every((obj1El, indx) => {
          return isEqualObject(obj1El, obj2[indx])
        })
    );
  if(isEqualArray) return true;

  const obj1Properties = Object.getOwnPropertyNames(obj1).sort();
  const obj2Properties = Object.getOwnPropertyNames(obj2).sort();

  const isEqualObj = (
    	obj1 instanceof Object &&
    	obj2 instanceof Object &&
    	obj1Properties.length === obj2Properties.length &&
    	obj1Properties.every((obj1Prop, indx) => {
          return (
          		obj1Prop === obj2Properties[indx] &&
            	isEqualObject(obj1[obj1Prop], obj2[obj1Prop])
            )
        })
    );
  if(isEqualObj) return true;

  return false;
};

export default isEqualObject;
