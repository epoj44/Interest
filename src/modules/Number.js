class Number {
    constructor(value){
        this.value = value
    }

    convertToString = () => {
        let value = this.value
        value = value.toString().replace(/,/g, "").replace(/-/g, "").split("").reverse();
        let Rnew = [], R = [], Q = []
        if (value.includes(".")){
            // numbers bigger than 1
            R = value.slice(value.indexOf(".")+1, value.length);

            //numbers smaller than 1
            Q = value.slice(0, value.indexOf("."));
        } else {
            R = value;
        }
        R.map((char, index) => {
            Rnew.push(char);
            if(((index-2) % 3) == 0 && index !== R.length-1){
                Rnew.push(",");
            }
        })
        return Rnew.reverse().join("") + ((value.includes("."))? "." + Q.reverse().join(""):"")
    }

    convertToNum = () => {
        return this.value.toString().split(",").join("")
    }
}

export default Number;