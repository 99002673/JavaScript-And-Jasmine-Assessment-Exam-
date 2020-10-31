class Customer{
    constructor(name,email,phone,amt){
        this.name=name;
        this.email=email;
        this.phone=phone;
        this.amt=amt;
        
        
    }

    display(){
        return this.name;
    };

    validateName(emp){
        name=emp.name;
        var letters = /^[A-Za-z]+$/;
        var len=name.length;
        //console.log(len)
        if(name.match(letters) && (len>=5) )
        {
            return true;
           }
         else
           {
           alert("message");
           return false;
           }
    }

    validateEmail(emp){
       var email=emp.email;
        var mailformat= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          if (email.match(mailformat))
           {
             return true
            }
             return (false)

            }
        validatePhone(emp){
       var phone=emp.phone;
        var phoneFor=/^[1-9]{10}$/;
          if (phone.match(phoneFor))
           {
             return true
            }
             return (false)

            }
        
            

        }