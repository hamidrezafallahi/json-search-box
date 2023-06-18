// var submit = document.querySelector('button[type="submit"]');

// submit.addEventListener('click',()=>{
//     validation(event);
// })
// function validation(event) {
//     event.preventDefault();
//     let datasetlable=event.target.dataset.label;

    
// }
class checkvalidate{
    constructor(form){
        this.myform=form;
        this.prevent_submit();
        this.allow_submit();
        // this.not_empty(event.target);
        // this.is_mobile(event.target);
        // this.console_lable(event.target)
        //let datasetlable=event.target.dataset.label;
    }
    prevent_submit(){
        this.myform.addEventListener('submit',(event)=>{
            event.preventDefault();
        })
    }
    allow_submit(){
        this.myform.addEventListener('focusout',(event)=>{
            var input =event.target; 
            var validation_string = input.dataset.validation
            var validationarray = input.dataset.validation.split(" ");
            for (let index = 0; index < validationarray.length; index++) {
                const func = validationarray[index];
                var message = this[func](event.target);
                li.innerHTML+=message + "</br>";
                ul[0].appendChild(li)
            }
            return input;
        })
        
    }
    notEmpty(input){
        if(input.value === ''){
            return input.dataset.label+" نباید خالی باشد  ";
        }
        return "";
    }
    isMobile(input){
        const rex = new RegExp(/(0?9[0-3]{9,9}?)$/gm)
        if(!rex.test(input)){
            return " قالب  "+input.dataset.label+" رعایت نشده ";
        }

    }
}
var form = document.getElementById('register-form');
var ul = document.getElementsByTagName('ul')
var li = document.createElement('li');
new checkvalidate(form)



////////////////////////////////////////////////////////////////////////////////////////
// form.addEventListener('focusin',(event)=>{
//     let datasetvalid=event.target.dataset.validation;
//     let datasetlable=event.target.dataset.label;
//     console.log(datasetvalid)    
//     console.log(datasetlable)    
// })
