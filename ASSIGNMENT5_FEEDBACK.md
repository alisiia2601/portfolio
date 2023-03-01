Hi Alissia!

My first though was "wow, this looks amazing!". And it does, it looks really, really good on desktop. 10/10 good.

On mobile, however, it's not responsive and that's the very first thing people check nowdays. Knowing how to make a website responsive is the #1 skill an FE developer needs in 2023.

As you see below, you've got most things covered....however the lack of responsiveness is a huge issue. The other things -  eg the project organisation, the h1s and prefixing - are pretty quick fixes. The locally installed font takes a bit more time but isn't so complex.

So even though the site looks great, I have to be consistent withh everyone else in thel cass so I can't give you a Godkänt unless it's responsive to some degree. Fix the responsiveness - ie make it adapt to mobiles and you have the G.

Fix the font & typography and make some folders for the files and run the css through the prefixer link I pasted below and you'll get the VG.


*************************************

CRITERIA FOR GRADING

*************************************

GODKÄNT:
-------------------------------------

HTML
  index.html at root level for publishing on github pages ✅

  Multiple pages ✅

  Header, footer and navigational menu on all main pages (where possible)

  H1 on every page ❌ ✅
     Each page should have only 1 h1.
       index.html has 1
       about.html has 10
       projects.html has 4
       contact.html has none.

    With CSS you can style, for example, an h2 to look exactly like an h1 BUT you should only ever have one h1 on each page.

  Mail to Contact form ✅

  Links to specfic projects opening in new windows ✅

CSS
  External CSS ✅

  General style sheets for common elements ✅
   +1 excellent

  Typography style sheet ❌

  Locally installed font ❌
  
  Separate stylesheets for each page ✅

  RWD
    Desktop ✅
    Mobile ❌
      Not responsive on mobiles

JS
  jQuery plugin (such as a carousel) ✅

  JS/jQuery multi level menu (min 2 levels) ✅
    The second level could use a bit of styling - the first level looks so good!
    "Website connection to API" - doesn't have an href so doesn't link anywhere

-------------------------------------

VÄLGODKÄNT:
-------------------------------------

  Project organisation ❌
    Create css, html, js and images directories for the appropriate files

  CSS prefixing where required ❌ ✅
    You have some, but missed a lot. You can copy and paste the content of your css files to https://autoprefixer.github.io/ andd it will prefix everything that needs prefixing

  jQuery effects ❌
    Consider using "slide" effects on the ddropddown

  Semantic element naming  ✅
    Great job!

  Code style ✅ 
    CSS: Awesome
      Make sure there's a space before each { 
        eg .home-section{ => .home-section {

    HTML: 
      Really good, a few things:
        img tags always should have a value in the alt attribute
        In about.html the skills section has some wacky indenting

    JS: 
      Also great!
      const names should always be in SNAKE_CASE