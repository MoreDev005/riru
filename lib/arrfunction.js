const fs = require('fs')

const cekArr = async (array,itemstr) => {
const cekItem = array.filter(item => item === itemstr);
if (cekItem.length > 0) {
  return true
} else {
  return false
}
}

const addArrSave = async (arrpath,itemstr) => {
fs.readFile(arrpath,async (error, data) => {
if(error){
      return;
}
const parsedData = JSON.parse(data);
if(!data.includes(itemstr)){
const addobj = (arr,itemstr) => {
  arr.push(itemstr)
  return arr;
}

    fs.writeFile(arrpath, JSON.stringify(addobj(parsedData,itemstr), null, 1), async (err) => {
        if (err) {
        console.log("error");
          return;
        }
    });
    }
});

}

const cekArrSave = async (arrpath,itemstr) => {
let result;
var datanya = fs.readFileSync(arrpath).toString()
const parsedData = JSON.parse(datanya);
const hsl = await cekArr(parsedData,itemstr)
result = hsl
return result
}

const delArrSave = async (arrpath,itemstr) => {
fs.readFile(arrpath,async (error, data) => {
if(error){
      return;
}
const parsedData = JSON.parse(data);
var bandata = parsedData.filter(item => {
  return item !== itemstr
});
await fs.writeFile(arrpath, JSON.stringify(bandata, null, 1), async (err) => {
        if (err) {
        console.log("error");
          return;
        }
    });

});
}

module.exports = {cekArr,cekArrSave,addArrSave,delArrSave}