//quote array
quotes=[
    "We do not remember days, we remember moments. The richness of life lies in memories we have forgotten ― Cesare Pavese",
    "If you only do what is easy, your life will be hard.",
    "If there is no enemy inside, the enemy outside can do no harm.",
    "It is hard to fail, but it is worse never to have tried to succeed.",
    "You will face many defeats in life, but never let yourself be defeated.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Better to have loved and lost, than never to have loved at all.",
    "The journey of a thousand miles begins with one step.",
    "You must be the change you wish to see in the world.",
    "The best way out is always through.",
    "Good, better, best. Never let it rest. 'Til your good is better and your better is best.",
    "The past cannot be changed. The future is yet in your power.",
    "It always seems impossible until it's done.",
    "People who are crazy enough to think they can change the world, are the ones who do.",
    "No one can make you feel inferior without your consent.",
    "One finds limits by pushing them.",
    "Every day, we choose who we are by how we define ourselves.",
    "It's never too late to be what you might have been.",
    "Believe you can and you're halfway there",
    "Build your own dreams, or someone else will hire you to build theirs.",
    "I'm not afraid of storms, for I'm learning how to sail my ship.",
    "Everything you've ever wanted is on the other side of fear.",
    "A problem is a chance for you to do your best.",
    "If opportunity doesn't knock, build a door.",
    "What you think, you become. What you feel, you attract. What you imagine, you create.",
    "You must do the things you think you cannot do.",
    "No act of kindness, no matter how small, is ever wasted.",
    "Your big opportunity may be right where you are now.",
    "Everything has beauty, but not everyone can see.",
    "The time is always right to do what is right.",
    "Too low they build, who build beneath the stars.",
    "There is no excuse to not live up to your fullest potential.",
    "Lead by example.",
    "Allow for the possibility that you have something important to contribute to the world.",
    "Experience is what you get, when you don't get what you want.",
    "You are star dust. You are a thermodynamic miracle. You are the waking universe looking back at itself.",
    "Success is not based on who has the most, but who needs the least.",
    "A moment of silence amidst the infinite",
    "You're no exception to love."
]
function add_dots(){
    var text = document.getElementById('page_footer');
    if(text!=null){
    for (let index = 0; index < 135; index++) {
       text.innerHTML+=`<img src="images/dot.png" id="not">`
    } 
}
}
function add_quote(){
    var quote_area=document.getElementById('quotes');
    if(quote_area!=null){
        quote_area.innerHTML=quotes[Math.floor(Math.random()*quotes.length)]+"<br>quotes from vintage story launcher"
    }
}
add_dots()
add_quote()