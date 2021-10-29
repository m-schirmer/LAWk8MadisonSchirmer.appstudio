let dessertList = ['Chocolate Cake','Cream Brulee','Cheesecake',
                  'Keylime Pie','Cherry Cobbler','Chocolate Chip Cookies']

dessertVoting.onshow=function(){
    drpDesserts.clear()   

for (i = 0; i <= dessertList.length; i++)
  drpDesserts.addItem(dessertList[i])
}


drpDesserts.onclick=function(s){
    if (typeof(s) == "object")   
      return                    
    else {
      drpDesserts.value = s
      console.log(`You chose ${s} - that's a great choice!`)
    }
}

btnNextPage.onclick=function(){
  ChangeForm(describeYou)
}
