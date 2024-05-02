"use strict";

/* HOW THE DOM REALLY WORKS BEHIND THE SCENES:

-> DOM IS THE INTERFACE BETWEEN BROWSER AND THE JAVASCRIPT CODE.

-> IT ALLOWS US TO MAKE JAVASCRIPT INTERACT WITH THE BROWSER.

-> WE CAN WRITE JAVASCRIPT TO CREATE, MODIFY, AND DELETE HTML ELEMENTS, SET STYLES, CLASESS AND ATRIBUTES, LISTEN AND REPOND TO EVENTS.

-> DOM TREE IS GENERATED FROM AN HTML DOCUMENT, WHICH WE CAN THEN INTERACT WITH.

-> DOM IS A VERY COMPLEX API THAT CONTAINS LOTS OF METHODS AND PROPERTIES TO INTERACT WITH THE DOM TREE

*/

/* HOW THE DOM API IS ORGANIZED BEHIND THE SCENES

-> EVERY SIGNLE NODE IN THE DOM TREE , IS THE TYPE OF NODE.
-> EACH NODE IS REPRESENTED BY AN OBJECT IN JAVASCRIPT.
-> THIS OBJECT GETS ACCESS TO SPECIAL NODE METHODS AND PROPERTIES , SUCH AS TEXTCONTENT,CHILDNODES ETC.
-> EACH NODE HAS THIER OWN CHILD TYPES , SUCH AS THE ELEMENT TYPE, THE TEXT TYPE, THE COMMENT TYPE AND THE DOCUMENT TYPE. SO WHENEVER THIER TEXT INSIDE ANY ELEMENT , WE ALREADY KNOW THAT IT GETS THIER OWN NODE AND THAT NODE WILL BE THE TYPE TEXT , AND THE SAME HAPPENS FOR HTML COMMENTS.
-> THE RULE IS THAT EVERY THINGS , THAT INSIDE HTML HAS TO GO INTO THE DOM AS WELL.
-> FOR THE ELEMENT ITSELF, THERE IS THE ELEMENT TYPE OF NODE, AND THIS TYPE OF NODE GIVES EACH HTML ELEMENT ACCESS TO A TON OF USEFUL PROPERTIES SUCH AS CLASSLIST,INNERTEXT,INNERHTML ETC, AND ALSO USEFUL METHODS, LIKE REMOVE, APPEND, INSERTADJACENTHTML, QUERYSELECTOR ETC.
-> EACH ELEMENT WILL REPRESENTED INTERNALLY AS AN OBJECT.

-> THE ELEMENT TYPE HAS INTERNALLY AN HTML ELEMENT CHILD TYPE, AND THAT ELEMENT TYPE ITSELF HAS EXACTLY ONE CHILD TYPE FOR EACH HTML ELEMENT THAT EXISTS IN HTML , SO WE HAVE SPECIL TYPE FOR BUTTONS, FOR IMAGES, FOR LINKS ETC.

-> EACH OF HTML ELEMENTS CAN HAVE DIFFERENT AND UNIQUE PROPERTIES, LIKE AN IMAGE HAS A SOURCE ATTRIBUTE IN HTML WHICH NO OTHER ELEMENT HAS ALSO A LINK HAS HREF.
-> SO DOM NEEDS A WAY OF STORING THESE DIFFERENT ATTRIBUTES , AND THEREFORE, DIFFERENT TYPE OF HTML ELEMENTS WERE CREATED IN THE DOM API.



-> WHAT MAKES ALL OF THIS WORK , IS SOMETHING CALLED INHERITANCE.
-> INHERITANCE MEANS THAT ALL THE CHILD TYPES, WILL ALSO GET ACCESS TO THE METHODS AND PROPERTIES OF ALL THIER PARENT NODE TYPES.
-> FOR EXAMPLE, AN HTML ELEMENT WILL GET ACCESS TO EVERYTHING FROM THE ELEMENT TYPE , LIKE INNERHTML, OR CLASSLIST.
-> AND BESIDES THAT, IT WILL ALSO GET ACCESS TO EVERYTHING THAT IS ALSO ITS PARENT TYPE FORM THE NODE TYPE, BECAUSE THAT IS ALSO ITS PARENT TYPE.

-> SO , THE DOM API IS BROKEN UP INTO THESE DIFFERENT TYPES OF NODES.
-> EACH OF THESE TYPES OF NODES HAS ACCESS TO DIFFERENT PROPERTIES AND METHODS AND SOME OF THEM EVEN INHERIT MORE PROPETIES AND METHODS FROM THIER ANCESTORS IN THIS ORGANIZATION 

-> WE CAN THNINK OF THAT, A BUTTON ELEMENT IS ALSO AN ELEMENT AND ALSO A NODE.
-> WE WILL LEARN WHY THIS INHERITANCE REALLY WORKS, WHEN WE FINALLY TALK ABOUT OBJECT ORIENTED JAVASCRIPT.

*/

/* THE DOCUMENT NODE TYPE:

-> DOCUMENT, WHICH WE USE ALL THE TIME IN DOM MANIPULATION IS IN FACT JUST ANOTHER TYPE OF NODE, IT CONTAINS IMPORTANT METHODS SUCH AS WUERY SELECTOR, CREATEELEMENT, AND GET ELEMENT BY ID AND NOTE HOW QUERY SELECTOR IS AVAILABLE ON BOTH DOCUMENT AND ELEMENT TYPES.

-> THE DOM API ACTUALLY NEEDS A WAY OF ALLOWING THE NODE TYPES TO LISTEN TO EVENTS, AMD WE USUALLY LISTEN FOR EVENTS BY CALLING THE ADDEVENTLISTENER METHOD ON AN ELEMENT OR THE DOCUMENT. SO WHY THAT ACTUALL WORK?
-> IT'S BECAUSE THERE IS A SPECIAL NODE TYPE CALLED EVENTTARGET, WHICH IS A PARENT OF BOTH THE NODE TYPE AND ALSO THE WINDO NODE TYPE AND WITH THIS, THANKS TO INHERITANCE THAT WE CAN CALL ADDEVENTLISTENSER ON EVERY SINGLE TYPE OF NODE IN THE DOM API , BECAUSE ALL ELEMENTS AS WELL AS DOCUMENT AND WINDOW AND EVENT TEXT AND COMMENT WILL INHERIT THIS METHOD AND THERFORE , WE WILL BE ABLE TO USE ADDEVENTLISTENER ON ALL OF THEM JUS IF IT AS THIER OWN METHOD.

-> WE DO NEVER MANUALLY CREATE AN EVENTTARGET OBJECT, THIS IS JUST AN ABSTRACT OBJECT THAT WE DO NOT USE IN PRACTICE .
-> THIS ALL HAPPENS REALLY HAPPENS BEHIND THE SCENES TO MAKE ALL THE FUNCTIONALITY WORK AS WE EXPECT IT TO WORK

*/

/*

*/
