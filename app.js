document.getElementById('btn').addEventListener('click', () => {
    const text = document.getElementById('inp-box').value;
    if(text.length !== 0){
        document.getElementById('qr-img').innerHTML = `<img id="qr-code" src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}">`;
    document.getElementById('inp-box').value='';
    }
    else{
        alert('Please Write Something')
    }
    
});