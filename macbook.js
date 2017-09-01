var Macbook = (function() {  

    //private 
    var RAM; 
    var addRAM;  

    RAM = 4;  

    //private
    addRAM = function (additionalRAM) {  
        RAM = RAM + additionalRAM;  
    };  

    return {  

        //public 
        USB: undefined,  
        insertUSB: function (device) {  
            this.USB = device;  
        },  

        removeUSB: function () {  
            var device = this.USB;  
            this.USB = undefined;  
            return device;  
        }  
    };  
})();

Macbook.insertUSB("myUSB"); 
console.log(Macbook.USB); //logs out "myUSB" 
console.log(Macbook.RAM) //logs out undefined