import JustValidate from 'just-validate';

const validation = () => {
    if (document.getElementById('form') || document.getElementById('form-2')) {
        const validator = new JustValidate('#form', {
            errorLabelCssClass: ['error-label'],
        });
    
        document.getElementById('inputName') &&
            validator.addField('#inputName', [
                {
                    rule: 'required',
                },
            ]);
    
        document.getElementById('inputEmail') &&
            validator.addField('#inputEmail', [
                {
                    rule: 'required',
                },
                {
                    rule: 'email',
                },
            ]);
    
        document.getElementById('inputPhone') &&
            validator.addField('#inputPhone', [
                {
                    rule: 'required',
                },
            ]);
    
        document.getElementById('textarea') &&
            validator.addField('#textarea', [
                {
                    rule: 'required',
                },
            ]);
    }
}

export default validation;