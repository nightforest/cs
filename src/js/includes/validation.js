import JustValidate from 'just-validate';

const validation = () => {
    if (document.getElementById('form')) {
        const validator = new JustValidate('#form', {
            errorLabelCssClass: ['error-label'],
        });
    
        document.getElementById('inputName') &&
            validator.addField('#inputName', [
                {
                    rule: 'required',
                    errorMessage: "Required field",
                },
            ]);
    
        document.getElementById('inputPhone') &&
            validator.addField('#inputPhone', [
                {
                    rule: 'required',
                    errorMessage: "Required field",
                },
            ]);
    }
}

export default validation;