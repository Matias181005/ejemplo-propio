document.getElementById('interestForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var principal = parseFloat(document.getElementById('principal').value);
    var rate = parseFloat(document.getElementById('rate').value) / 100;
    var time = parseFloat(document.getElementById('time').value);

    var interest = (principal * rate * time).toFixed(2);

    document.getElementById('result').innerHTML = 'El interés total es: ' + interest + ' USD';
});
