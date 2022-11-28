function isNum(data){
    if(isNaN(data))
        throw new ValidationError(`invalid input: ${data}`)
}

class ValidationError extends Error {
    constructor(message) {
    super(message);
    this.name = "ValidationError"; 
    }
}

let form = document.querySelector('form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      let output = document.querySelector('output');
      let firstNum = document.querySelector('#first-num').value;
      let secondNum = document.querySelector('#second-num').value;
      let operator = document.querySelector('#operator').value;
      try{
        isNum(firstNum);
        isNum(secondNum);
        output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
        }   
        catch (e){
            console.error(e);
        }
    });

    let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));
    const a = 1;
    const b = 2;
    const err_message = "two var are not equivalent";
    const table = [{num: 'CSE110', name: 'Software Engineering'},
    {num: 'CSE120', name: 'Operating System'},
    {num: 'CSE130', name: 'Programming Language'},
    {num: 'CSE140', name: 'Component for Digital System'}];
    const func = {
    'Console Log':            () => console.log('Console Log'),
    'Console Error':          () => console.error('Console Error'),
    'Console Count':          () => console.count('Console Count'),
    'Console Warn':           () => console.warn('Console Warn'),
    'Console Assert':         () => console.assert(a == b, {a, b, err_message}),
    'Console Clear':          () => console.clear(),
    'Console Dir':            () => console.dir(func),
    'Console dirxml':         () => console.dirxml(document),
    'Console Group Start':    () => console.group('Console Group Start'),
    'Console Group End':      () => console.groupEnd('Console Group Start'),
    'Console Table':          () => console.table(table),
    'Start Timer':            () => console.time('Start Timer'),
    'End Timer':              () => console.timeEnd('Start Timer'),
    'Console Trace':          () => console.trace(),
    'Trigger a Global Error': () => boom()
    };
    
    window.addEventListener('error', (e)=>{
        console.log(`report error ${e.message}`)
    });
    
    for(const button of errorBtns){
        button.addEventListener('click',func[button.innerText]);
    }

