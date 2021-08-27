Build Responsive Real-World Websites with HTML and CSS
Udemy 2021.08
Font : Microsoft New Tai Lue

Download course material
	theory-lectures-v2-BEST.pdf
slides for all theory lectures, with GOOD image quality (481 MB download)
	theory-lectures-v2-SMALLER.pdf
slides for all theory lectures, with AVERAGE image quality (158 MB download)
	all-design-guidelines.pdf
a summary of all the web design rules and guidelines we will study in Section 5

Updates & community
	During the course, we use many online tools and resources, which are all on my resources page
http://codingheroes.io/resources/
	If you want to get updates on new courses or other important stuff,
just follow me on twitter: @jonasschmedtman
	We have a very friendly student community on Discord, where you can learn together with many like-minded people. Join by clicking here!
https://discord.com/invite/uhMkpf4
	I also have a YouTube channel, but I haven't found time to be active there
You can still subscribe, as I might start posting videos in the future 😉
https://www.youtube.com/channel/UCNsU-y15AwmU2Q8QTQJG1jw


★★ Useful Websites ★★

Color
	Palettes https://flatuicolors.com/
	Tailwind CSS https://tailwindcss.com/
	Open Color https://yeun.github.io/open-color/
	Paletton https://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF
	Coolors https://coolors.co/
menu : More - Contrast Checker
	Tint and Shade Generator https://maketintsandshades.com/

image
	Unsplash
	Pexels
	DrawKit
	unDraw
	Pixabay
	UI Faces : https://uifaces.co/

Resize image
	Squoosh : https://squoosh.app/

icons
	Phosphor Icons
	Iconicons
	icons8

Google font
①	Select the font with bold 400 for regular, 500 for medium, 700 for real bold
②	Copy the link
③	Paste to html file

font size
	https://type-scale.com/

Good web design ref
	Land-book.com
	One Page Love
	awwwards

Check brwoser support of ‘CSS functions’
https://caniuse.com/
	Check whether the browser supports the specific CSS function
	If not, we can check the code for that browser
	browser: IE, Edge, Chrome, Firefox, Safari, ...
	function: flexbox, css grid, blur, appearance, ...


Visual Studio Code

Extensions
	Prettier - Code formatter
It automatically formats your code whenever you save it
You don’t have to worry about indentation
	One Monokai
가장 많이 사용하는 color theme
	Image Preview
VS code 중 image를 불러오는 코드 부분에 작게 어떤 이미지인지 미리보기로 보여줌
	Color Highlight
It’s very very useful to visualize color in “CSS”
	Auto Rename Tag
When we change the starting tag, it automatically change the closing tag
ex) <header> -> </header>
	Live Server
Setting – Live Server 검색 – Live Servere > Settings: Use Local Ip - Check
At the bottom, we now have ‘Go Live’ button
It opens the html page of the code
Also, if we change the code, it automatically reload the page without F5

Setting
Settings
	default formatter 검색 – Prettier - Code formatter 선택
	format on save 검색 – check the box
Prettier will automatically format your file each time you save it
	auto save 검색 – onFocusChange 선택
It automatically saves your file as you go to another tab or window
	Tab size 검색 – 2
	auto closing tag 검색
자동으로 tag 닫을 지 설정 ex) </p> </head>
File Icon Theme
	Seti 선택 : Lecture랑 똑같이 보이고 싶은 경우

바탕화면에 폴더 생성 : vscode - Visual Studio Code에서 open folder

New file : index.html
	This is the default name of the very first page in any web page

! + Enter
	There would be two choices – Select the upper one
	The code is automatically writeen

Head : For things invisible in the browser
Body : For all things visible in the browser


Developer Skills
Always Google when you don't know
ex) css property to add mouse cursor to button css how to center an anchor element mdn css text align

Useful sites
	stackoverflow
	CSS-Tricks
	developer.mozilla.org (MDN Web Docs)
	★ https://codepen.io/pen/
Here, you can code 'html' and see how it works directly
Paste your HTML, CSS, JS codes Save the file Paste its url to stackoverflow -> This would help others see your codes and how it works a lot better

Debugging the code
	Debugging : Finding and fixing errors in code
	Most common error : no end tag, not link css file
How to find errors in HTML
	Copy all the code of 'html'
	Google 'html validator' ※ https://validator.w3.org/
	Select 'Validate by Direct Input'
	Paste your code - Click 'check'
	Check your errors
How to compare two HTML files' codes
	Google 'diffchecker' ※ https://www.diffchecker.com/
	Put the original code and your code - Click 'Find Difference' This check every small changes

Tips!
	Use 'background-color' in CSS to see the scope of the block
	When something looks strange, click the word on the page, and try 'inspect'


Testing Performance with Lighthouse
	Right click the page – Inspect – Lighthouse
Click the checkbox you want to check
- Performance, Best practices, Accessibility, SEO & Desktop
Generate report
	If everything is green, that means perfect!
	It also tells us the problems of the page
ex) image size, color contrast, etc.
	★ We should test the page every time before we launching it to the Internet

Optimize images
Resize image
	You need a program to resize the image
Squoosh : https://squoosh.app/
	The original image size always should be almost doubled than the image that would be displayed on the screen (not more or less than double!)
Because the browser makes two pixels to one pixel to resize the picture, if the image is too big or small, it would be crashed
	If not, resize it
	This is especially important for big images which take up a lot of space!
	One ‘hero’ image resizing can amazingly improve your ‘lighthouse’ result
	After that, check browser supports : https://caniuse.com/
ex) Can I use ‘webp’
If some browsers don’t support ‘webp’, we should write code to fix this problem


Deployment to Netlify
https://www.netlify.com/
Launch new site
	Drag and drop the folder
	It will automatically give you a link on the internet!
	Rename url – Site setting
Update the source
	Site setting – Deploys – Reupload your whole folder
Contact form
	Code differently if you want to receive the real information from users
ex) name, phone number, email address
Netlify can handle this
	To see users’ submissions, Site settings – Forms – Verified submissions – Click
	You can only get 100 submissions / month
	You can download the result file as CSV
	If Netlify think it is spam, it automatically delete the submission
	However, never use Netlify to handle real ‘Log-in’, it is paid (not free)
Just make the site of which input is just about contact form (name, email)
