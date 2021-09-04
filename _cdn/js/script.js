function toggle(btn){
    if(btn.innerHTML == "Mostra mais..."){
        document.querySelector('.toggled_text').style.display = 'block';
        btn.innerHTML = "Mostra menos...";
    }else{
        document.querySelector('.toggled_text').style.display = 'none';
        btn.innerHTML = "Mostra mais..."

    }

}