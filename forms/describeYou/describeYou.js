rdoDescribeYou.onchange=function(){
  console.log(`I would agree that you're a $("input[name=rdoDescribeYou]:checked").prop("value") person!`)
  }
}

btnNextPage2.onclick=function(){
  ChangeForm(favExercises)
}
