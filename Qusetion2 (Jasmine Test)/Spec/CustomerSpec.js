describe('Suite  to test Customer',()=> {
    let emp=null;
    
    it('should set Name',()=>{
       const emp = new Customer("Sachin","sachin@gmail.com",7821456723,6969)
       const b=emp.validateName(emp);
        expect(true).toBe(b)
    })
    it('should set email Id',()=>{
        const emp = new Customer("Sachin","sachin@gmail.com",7821456723,6969)
        const e=emp.validateEmail(emp);
         expect(true).toBe(e)
     })


     it('should set Phone Number',()=>{
        const emp = new Customer("Sachin","sachin@gmail.com",7821456723,6969)
        const p=emp.validatePhone(emp);
         expect(true).toBe(p)
     })

     it('should set Bill Amount',()=>{
        const emp = new Customer("Sachin","sachin@gmail.com",7821456723,6969)
        const a=emp.validateBillAmt(emp);
         expect(true).toBe(a)
     })
     
    
})