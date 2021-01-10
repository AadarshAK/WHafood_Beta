var food, dinner;
var photo, ak;
var f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12, f13, f14, f15, f16, f17, f18, f19, f20, f21;
var breakfast, b1, b2 , b3, b4,b5,b6;
var IndiaImage;

function preload() {
    photo = loadImage("AK47.jpg");
    Bimage = loadImage("download.jpeg");
}

function setup() {
    createCanvas(1366, 625);
    console.log("width" + windowWidth);
    console.log("height" + windowHeight);
    food = Math.round(random(1, 21));
    breakfast=Math.round(random(1,6));
    dinner = Math.round(random(1, 4));
   // ak = createSprite(250, 250, 800, 800);
    //console.log(ingredients);
    f1 = createSprite(250, 250, 380, 50);
    f2 = createSprite(250, 250, 380, 50);
    f3 = createSprite(250, 250, 380, 50);
    f4 = createSprite(250, 250, 380, 50);
    f5 = createSprite(250, 250, 380, 50);
    f6 = createSprite(250, 250, 380, 50);
    f7 = createSprite(250, 250, 380, 50);
    f8 = createSprite(250, 250, 380, 50);
    f9 = createSprite(250, 250, 380, 50);
    f10 = createSprite(250, 250, 380, 50);
    f11 = createSprite(250, 250, 380, 50);
    f12 = createSprite(250, 250, 380, 50);
    f13 = createSprite(250, 250, 380, 50);
    f14 = createSprite(250, 250, 380, 50);
    f15 = createSprite(250, 250, 380, 50);
    f16 = createSprite(250, 250, 380, 50);
    f17 = createSprite(250, 250, 380, 50);
    f18 = createSprite(250, 250, 380, 50);
    f19 = createSprite(250, 250, 380, 50);
    f20 = createSprite(250, 250, 380, 50);
    f21 = createSprite(250, 250, 380, 50);

    b1=createSprite(280, 380,430,50);
    b2=createSprite(280, 380,430,50);
    b3=createSprite(280, 380,430,50);
    b4=createSprite(280, 380,430,50);
    b5=createSprite(280, 380,430,50);
    b6=createSprite(280, 380,430,50);
}

function draw() {
    background(photo);
    
    if (food === 1) {
        food = "Chicken Curry";

      
    }

    if (food === 2) {
        food = "Dal";
   
       // window.open('https://youtu.be/X8KQoeANnP4', '_system');
    }

    if (food === 3) {
        food = "Fish Curry";

        //window.open('https://youtu.be/vzbjv0JGNzg', '_system');
    }

    if (food === 4) {
        food = "Gobi Manchuri";

     //   window.open('https://youtu.be/NZVRmWXy2Qg', '_system');
    }

    if (food === 5) {
        food = "Noodles";

    //    window.open('https://youtu.be/kUPmHZFjkcc', '_system');
    }

    if (food === 6) {
        food = "Macoroni";

    //    window.open('https://youtu.be/vhrKsPOFHFY', '_system');
    }

    if (food === 7) {
        food = "Rasam";
        //    f7 = createSprite(250, 250, 50, 50);

    //    window.open('https://youtu.be/IEcLLq6I90o', '_system');
    }

    if (food === 8) {
        food = "Buttermilk Curry";
        //  f8 = createSprite(250, 250, 50, 50);

    //    window.open('https://youtu.be/4pYqdWeWbss', '_system');
    }

    if (food === 9) {
        food = "Paneer Curry";
        //f9 = createSprite(250, 250, 50, 50);

   //     window.open('https://youtu.be/1jFhs-PX8qs', '_system');
    }

    if (food === 10) {
        food = "Mutton Curry";
        //f10 = createSprite(250, 250, 50, 50);

   //     window.open('https://youtu.be/Mph2v1GMNA4', '_system');
    }

    if (food === 11) {
        food = "Curd Rice";
        // f11 = createSprite(250, 250, 50, 50);

   //     window.open('https://youtu.be/E8XH1lM9p-U', '_system');
    }

    if (food === 12) {
        food = "Chicken Stew";
        // f12 = createSprite(250, 250, 50, 50);

     //   window.open('https://youtu.be/_P1n4KaU_rQ', '_system');
    }

    if (food === 13) {
        food = "Chicken Curry " +
            "(D couto Ma'am style) aka spicy chicken";
        // f13 = createSprite(250, 250, 50, 50);

     //   window.open('https://youtu.be/M6WnWKOJX8g', '_system');
    }

    if (food === 14) {
        food = "Banana Stem";
        // f14 = createSprite(250, 250, 50, 50);

     //   window.open('https://youtu.be/me3zVs22ph0', '_system');
    }

    if (food === 15) {
        food = "Sambar";
        //  f15 = createSprite(250, 250, 50, 50);

     //   window.open('https://youtu.be/8gT0bV-c3eE', '_system');
    }

    if (food === 16) {
        food = "Chicken Lollypop";
        // f16 = createSprite(250, 250, 50, 50);
    }

     //   window.open('https://youtu.be/lXbLQ1CQlxQ', '_system');
    

    if (food === 17) {
        food = "Fish Fry";
        //  f17 = createSprite(250, 250, 50, 50);

      //  window.open('https://youtu.be/XaPIumr1_mQ', '_system');
    }

    if (food === 18) {
        food = "Egg Roast";
        //  f18 = createSprite(250, 250, 50, 50);

      //  window.open('https://youtu.be/BO1933RSVlw', '_system');
    }

    if (food === 19) {
        food = "Chicken Ghee Roast";
        //  f19=createSprite(250,250,50,50);

      //  window.open('https://youtu.be/IkNAzzG7CVA', '_system');
    }

    if (food === 20) {
        food = "Pepper Chicken";
        //  f50=createSprite(250,250,50,50);

     //   window.open('https://youtu.be/rGhWVu7bCZE', '_system');
    }

    if (food === 21) {
        food = "Mutton Stew";
        //   f21=createSprite(60,250,50,50);

      //  window.open('https://youtu.be/AeXluPUstVA', '_system');
    }

    if (dinner === 1) {
        dinner = food;
    }

    if (dinner === 2) {
        dinner = "Maggi";
    }

    if (dinner === 3) {
        dinner = food;
    }

    if (dinner === 4) {
        dinner = "Maggi";
    }

    if(breakfast===1){
        breakfast="Upma";
       // window.open('https://youtu.be/8FlK8effzIY?t=55','_system');
    }

    if(breakfast===2){
        breakfast="Puttu";
        //https://youtu.be/vV2txk2Py3c
    }

    if(breakfast===3){
        breakfast="Dosa & Sambar";
        //https://youtu.be/CGjOJ2VZmb8
    }

    if(breakfast===4){
        breakfast="Idly & Vada & Sambar & Chutney";
        //https://youtu.be/sG7JS6FfgUE
    }

    if(breakfast===5){
        breakfast="Hoppers (Appam in malayalam)";
        //https://youtu.be/rWa4-Us-SsA
    }

    if(breakfast===6){
        breakfast="String Hoppers(Valeyappam in malayalam)"
        //https://youtu.be/E_Qr-J2hJ6w
    }

    f1.visible = false;
    f2.visible = false;
    f3.visible = false;
    f4.visible = false;
    f5.visible = false;
    f6.visible = false;
    f7.visible = false;
    f8.visible = false;
    f9.visible = false;
    f10.visible = false;
    f11.visible = false;
    f12.visible = false;
    f13.visible = false;
    f14.visible = false;
    f15.visible = false;
    f16.visible = false;
    f17.visible = false;
    f18.visible = false;
    f19.visible = false;
    f20.visible = false;
    f21.visible = false;

    b1.visible=false;
    b2.visible=false;
    b3.visible=false;
    b4.visible=false;
    b5.visible=false;
    b6.visible=false;

    fill("green");
    stroke("red");
    strokeWeight(5);

    textSize(40);
    //text("Primary Food : Rice",600,height-160);
    text("Lunch : " + food, 200,500);
    text("Dinner : " + food, 200, 560);
    text("Breakfast : "+breakfast, 200, 620);
    text("Creator : Aadarsh A.K", 800, 100);
    text("Recipe Video(Lunch)", 60, 250);
    text("Recipe Video(Breakfast)",60, 380);
    text("#Proudly_Made_In_India",800,50);
    //ak.addImage(photo);
   // ak.scale = 0.2;


    if (mousePressedOver(f16)) {
        window.open('https://youtu.be/fOpJgan199Q','_system');
    }

    if (mousePressedOver(f1)) {
        window.open('https://youtu.be/fOpJgan199Q','_system');
    }

    if (mousePressedOver(f2)) {
        window.open('https://youtu.be/X8KQoeANnP4','_system');
    }

    if (mousePressedOver(f3)) {
        window.open('https://youtu.be/vzbjv0JGNzg','_system');
    }

    if (mousePressedOver(f4)) {
        window.open('https://youtu.be/NZVRmWXy2Qg','_system');
    }

    if (mousePressedOver(f5)) {
        window.open('https://youtu.be/kUPmHZFjkcc','_system');
    }

    if (mousePressedOver(f6)) {
        window.open('https://youtu.be/vhrKsPOFHFY','_system');
    }


    if (mousePressedOver(f7)) {
        window.open('https://youtu.be/IEcLLq6I90o','_system');
    }

    if (mousePressedOver(f8)) {
        window.open('https://youtu.be/4pYqdWeWbss','_system');
    }

    if (mousePressedOver(f9)) {
        window.open('https://youtu.be/1jFhs-PX8qs','_system');
    }

    if (mousePressedOver(f10)) {
        window.open('https://youtu.be/Mph2v1GMNA4','_system');
    }

    if (mousePressedOver(f11)) {
        window.open('https://youtu.be/E8XH1lM9p-U','_system');
    }

    if (mousePressedOver(f12)) {
        window.open('https://youtu.be/_P1n4KaU_rQ','_system');
    }

    if (mousePressedOver(f13)) {
        window.open('https://youtu.be/M6WnWKOJX8g','_system');
    }

    if (mousePressedOver(f14)) {
        window.open('https://youtu.be/me3zVs22ph0','_system');
    }

    if (mousePressedOver(f15)) {
        window.open('https://youtu.be/8gT0bV-c3eE','_system');
    }
           if (mousePressedOver(f16)) {
        window.open('https://youtu.be/lXbLQ1CQlxQ','_system');
    }   
         if (mousePressedOver(f17)) {
        window.open('https://youtu.be/XaPIumr1_mQ','_system');
    }   

    if (mousePressedOver(f18)) {
        window.open('https://youtu.be/BO1933RSVlw','_system');
    }        if (mousePressedOver(f19)) {
        window.open('https://youtu.be/IkNAzzG7CVA','_system');
    }        if (mousePressedOver(f20)) {
        window.open('https://youtu.be/rGhWVu7bCZE','_system');
    }

    if (mousePressedOver(f21)) {
        window.open('https://youtu.be/AeXluPUstVA','_system');
    }

    if(mousePressedOver(b1)){
        window.open('https://youtu.be/8FlK8effzIY?t=55','_system');
    }

    if(mousePressedOver(b2)){
        window.open('https://youtu.be/vV2txk2Py3c','_system'); 
    }

    if(mousePressedOver(b3)){
        window.open('https://youtu.be/CGjOJ2VZmb8','_system');
    }

    if(mousePressedOver(b4)){
        window.open('https://youtu.be/sG7JS6FfgUE','_system');
    }

    if(mousePressedOver(b5)){
        window.open('https://youtu.be/rWa4-Us-SsA','_system');
    }

    if(mousePressedOver(b6)){
       window.open('https://youtu.be/E_Qr-J2hJ6w','_system');
    }

    drawSprites();
}

 