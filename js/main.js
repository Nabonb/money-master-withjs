function valueOfInputField(idTaken) {
    const allField = document.getElementById(idTaken);
    const allFieldString = allField.value;
    const allFieldValue = parseInt(allFieldString);

    return allFieldValue;
}
function textField(idTaken, value) {
    const allText = document.getElementById(idTaken);
    allText.innerText = value;
}
document.getElementById('btn-calculate').addEventListener('click', function () {

    const incomeTotalValue = valueOfInputField('inp-income');
    const foodTotalValue = valueOfInputField('inp-food');
    const rentTotalValue = valueOfInputField('inp-rent');
    const clothsTotalValue = valueOfInputField('inp-cloths');
    const totalExpenses = foodTotalValue + rentTotalValue + clothsTotalValue;

    if (document.getElementById('inp-income').value !='' && totalExpenses <= incomeTotalValue && isNaN(incomeTotalValue) == false) {
        const balance = incomeTotalValue - totalExpenses;
        textField('total-expense', totalExpenses);
        textField('balance', balance);
    }
    else{
        alert("Please Enter Right Amount");
    }

});

document.getElementById('btn-save').addEventListener('click',function(){
    const inputSave = document.getElementById('inp-save');
    const inputSaveString  = inputSave.value;
    const inputSaveValue = parseInt(inputSaveString);

    const incomeTotalValue = valueOfInputField('inp-income');
    
    if(isNaN(inputSaveValue) == false){
        const totalSaving = (incomeTotalValue * (inputSaveValue/100)).toFixed(2);
        const savingAmount = document.getElementById('saving-amount');
        const balance = parseInt(document.getElementById('balance').innerText);
        if(balance >= totalSaving){
            savingAmount.innerText = totalSaving;
            const remainingBalance = balance- totalSaving;
            const remainingAmount = document.getElementById('ramaining-amount');
            remainingAmount.innerText = remainingBalance;
        }
        else{
            alert("You Cannot Save Your Money Sorry !");
        }

    }
    else{
        alert('Enter Valid Saving Amount');
    }
});