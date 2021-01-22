//https://github.com/Tanvir-Sakil/Assignment

//kilometerToMeter
function kilometerToMeter(kilo)
{
    if(kilo<0)
    {
        return "Distance should not be negative";
    }
    var result= kilo*1000.0;
    result =parseFloat(result);
    return result;
} 



//budgetCalculator
function budgetCalculator(watch,mobile,laptop)
{
    var totalCost;
    var watchCost;
    var mobileCost;
    var laptopCost;
    if((watch<0) && (mobile<0) && (laptop<0))
    {
        return "Product number should not be negative";
    } 
    else if((watch<0)&& (mobile>0) && (laptop>0))
    {
        mobileCost =mobile * 100;
        laptopCost = laptop * 500;
        totalCost = mobileCost + laptopCost;
        return totalCost;
    }
    else if((mobile<0)&& (watch>0) && (laptop>0))
    {
        watchCost = watch * 50;
        laptopCost = laptop * 500;
        totalCost = watchCost + laptopCost;
        return totalCost;
    }
    else if((laptop <0 )&&(watch>0)&&(mobile>0))
    {
        watchCost = watch * 50;
        mobileCost =mobile * 100;
        return totalCost= watchCost + mobileCost;
    }
    else if((laptop<0)&& (mobile<0)&& (watch>0))
    {
        totlaCost= watch *50;
        return totalCost;
    }
    else if((watch<0) && (laptop<0) && (mobile>0 ))
    {
        totalCost = mobile * 100;
        return totalCost;
    }
    else if((watch<0)&& (mobile<0) && (laptop>0))
    {
        totlaCost= laptop *500;
        return totalCost;
    }
    else
    {
        watchCost = watch * 50;
        mobileCost =mobile * 100;
        laptopCost = laptop * 500;
        totalCost =watchCost + mobileCost + laptopCost;
        return totalCost;
    }
}



//hotelCost
function hotelCost(stayDay)
{
    var totalCost;
    var firstTenDaycost;
    var secondTenDaycost;
    var remainingDay;
    var remainingDaycost;
    if(stayDay<0)
    {
        return "Day should not be negative";
    }
    else if(stayDay<=10)
    {
        totalCost = stayDay * 100;
    }
    else if(stayDay<=20)
    {
        firstTenDaycost = 10 * 100;
        remainingDay = stayDay - 10;
        remainingDaycost = remainingDay * 80;
        totalCost = firstTenDaycost + remainingDaycost;
    }
    else
    {
        firstTenDaycost = 10 * 100;
        secondTenDaycost =10 * 80;
        remainingDay = stayDay - 20;
        remainingDaycost = remainingDay * 50;
        totalCost = firstTenDaycost + secondTenDaycost + remainingDaycost;
    }
    return totalCost;
}



//megaFriend
function megaFriend(stringArray)
{
       
    var maxLength=stringArray[0].length;
    var index=0;
    for(var i=0;i<stringArray.length;i++)
    {
        if(stringArray[i].length>maxLength)
        {
            maxLength=stringArray[i].length;
            index=i;
        }
    }
    if(stringArray[index]==" ")
    {
       return "The string is Empty";
    }
    else
    {
       return stringArray[index];
    }    
}