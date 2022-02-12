document.getElementById('diposit-btn').addEventListener('click', function(){
    const dipsitInput = document.getElementById('diposit-input');
    const dipsitInputText = dipsitInput.value;
    const newDiposit = parseFloat(dipsitInputText);
    // emtey input field 
    dipsitInput.value = '';

    // diposit output 
   const diposit= document.getElementById('diposit');
   const previousDipositText = diposit.innerText;
   const previousDiposit = parseFloat(previousDipositText);
   console.log(previousDiposit);
   const newDipositTotal = previousDiposit + newDiposit;
   diposit.innerText = newDipositTotal;

  //  Balence Output 
  const balence = document.getElementById('balence');
  const balenceText = balence.innerText;
  const previousBalence = parseFloat(balenceText);
  const newBalence = previousBalence + newDiposit;
  balence.innerText = newBalence;
  
})

// withdorw function 
document.getElementById('withdrow-btn').addEventListener('click', function(){
   const withdrowInput = document.getElementById('withdrow-input');
   const withdrowText = withdrowInput.value;
   const withdrow = parseFloat(withdrowText);
//    clear input 
    withdrowInput.value = '';

//    withdorw output 
   const totalWithdrow = document.getElementById('withdrow');
   const previousWithdrowTexT = totalWithdrow.innerText;
   const previousWithdrow = parseFloat(previousWithdrowTexT);
   const totalWithdrowBalence = previousWithdrow + withdrow;
   totalWithdrow.innerText = totalWithdrowBalence;

//    total balance output after Withdrow 
    const balance = document.getElementById('balence');
    const totalBalenceText = balance.innerText;
    const previousTotalBalance = parseFloat(totalBalenceText);
    const newTotalBalance = previousTotalBalance - withdrow;
    balance.innerText = newTotalBalance;

})