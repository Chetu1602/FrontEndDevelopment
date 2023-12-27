
//creating a footer tag
var fotterTag = document.createElement('footer');
document.body.appendChild(fotterTag);

//creating a div with class footer 
var fotterdiv = document.createElement('div');
fotterdiv.classList.add('footer');
fotterTag.appendChild(fotterdiv);
//creating a div with class footerSpacing 
var footerSpacingdiv = document.createElement('div');
footerSpacingdiv.classList.add('footerSpacing');
fotterdiv.appendChild(footerSpacingdiv);
//iterating through each data from json 

footerJson.colunms.forEach(footer => {

    //creating div with class Section 
    var sectiondiv = document.createElement('div');
    sectiondiv.classList.add('Section');
    footerSpacingdiv.appendChild(sectiondiv);
    if (footer.dataType === 'MAIL_ADDRESS') {
        var mailusdiv = document.createElement('div');
        mailusdiv.classList.add('MailUs');
        sectiondiv.appendChild(mailusdiv);
        //text div
        var textdiv = document.createElement('div');
        textdiv.classList.add('Text');
        let title = footer.title;
        textdiv.textContent = title;
        mailusdiv.appendChild(textdiv);
        //frame div 
        var framediv = document.createElement('div');
        framediv.classList.add('Frame');
        mailusdiv.appendChild(framediv);

    }
    else {
        //creating div with class Text 
        var textdiv = document.createElement('div');
        textdiv.classList.add('Text');
        let title = footer.title;
        textdiv.textContent = title;
        sectiondiv.appendChild(textdiv);
        //creating a div of class frame
        var framediv = document.createElement('div');
        framediv.classList.add('Frame');
        sectiondiv.appendChild(framediv);
    }
    //    creating anchor tags 
    if (footer.dataType === "ARRAY") {

        for (let i = 0; i < footer.data.length; i++) {


            let a = document.createElement('a');
            a.href = "";
            let text = footer.data[i];
            // console.log(text);
            a.textContent = text;
            framediv.appendChild(a);
        }
    }

    else {

        let p = document.createElement('p');
        let textp = footer.data;
        p.textContent = textp;
        framediv.appendChild(p);
    }


});
var bottomborderhr = document.createElement('hr');
bottomborderhr.classList.add('bottomborder');
fotterTag.appendChild(bottomborderhr);
// creating a div of class bottom
var bottomdiv = document.createElement('div');
bottomdiv.classList.add('bottom');
fotterTag.appendChild(bottomdiv);
//creating bottomcolumns
footerJson.bottomColunms.forEach(bottom => {
    // creating div inside bottomdiv
    var bottomcontentdiv = document.createElement('div');
    bottomcontentdiv.classList.add('bottomcontent');
    bottomdiv.appendChild(bottomcontentdiv);
    if (bottom.img) {
        // creating an img
        var img1 = document.createElement('img');
        let imagesource = bottom.img;
        img1.src = imagesource;
        img1.alt = "icon";
        bottomcontentdiv.appendChild(img1);
        //creating a href 
        var a = document.createElement('a');
        a.href = "";
        let text = bottom.text;
        a.textContent = text;
        bottomcontentdiv.appendChild(a);
    }
    else {
        //creating a href
        var a = document.createElement('a');
        a.href = "";
        let text = bottom.text;
        a.textContent = text;
        bottomcontentdiv.appendChild(a);
    }

});

