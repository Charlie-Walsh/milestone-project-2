<h1 align=center>Card Flip!</h1>

<p>Card Flip! is a simple card memory game designed for children. Primarily this will be designed for large to medium device sizes as this is what a young child would typically use, however it will be responsive across common device sizes. </p>


## Target Audience

* This little memory game is aimed at children aged 2+ as a bit of fun that parents can play along with too.

* With this in mind instructions will be aimed at the parent, as a young child will not neccesarilly be able to read, but will remain simple none the less to aid older children that may be playing on their own.

<hr>

## User Experience (UX)

### User Stories

### First Time Visitor

* The purpose of the page should be immediately obvious to the user as soon as it is loaded - to have fun!

* Players should be able to access everything they need in as few clicks as possible.

### Returning Visitors

* Returning players should be able to start playing as soon as possible as they should be aware of how the game works from previous visits.

* Will include a score count to encourage players to return and beat their previous score.

### Design

### Colour Scheme

* As this game is aimed at children it will have a bright and bubbly color scheme of primary colours to keep their attention.

### Typography

* Text will need to be big, clear and well spaced for our little users.

* Buttons, logo and menu links will be using Fredoka One as it's nice and big, and bubbly.

* Other text will be using Prompt as it feels similar to Fredoka One, but is less rounded and bold.

### Imagery

* Images will be child friendly. The card back was made by myself using Vectr. A simple smiley face on a bright red background.

* Card faces will be easily recognisable animal silhouettes for the player to match.

* Images sourced from:
    * [Creazilla](https://creazilla.com/)

<hr>

## Code

### Libraries

 * Bootstrap
 * Popper
 * Google Fonts
 * Jquery

 ### Tutorials

 * Javascript is being heavily influenced by [Dev Ed](https://www.youtube.com/watch?v=-tlb4tv4mC4&t=580s)'s javascript memory card game. This tutorial has helped with my planning of how to get the base game to work, specifically, populating the game board.

### Bugs

* .appChild() was not working due to a null value.
    * Had my js script linked in the head of my index.html, which meant it was loading before the HTML existed. I could either use defer to correct this or move the script to the bottom of the page. I decided to move the script to avoid any further issues.
* Having fixed the bug above it has moved into the jest testing suite.
    * I can find no solution to this in what amounts to about 12hrs of searching and speaking to two tutors. It is preventing me from making further unit test with jest as the appendChild is within the lynchpin function of the game. I will have to test manually with console.logs from now on.

 <hr>

## Testing

### Responsiveness

* I have been testing responsiveness from the bottom up. Having previewed the page ubove 1200px throughout development it makes sense to test the extremities first and work up through the betweens from there.
