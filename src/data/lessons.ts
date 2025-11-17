import { Lesson } from '../types';

export const htmlLessons: Lesson[] = [
  {
    id: 1,
    title: 'Introduction to HTML',
    description: 'Learn what HTML is and its basic structure',
    category: 'basics',
    difficulty: 'beginner',
    content: `HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of web pages using markup tags.

HTML documents are made up of HTML elements, which are represented by tags. Tags are keywords surrounded by angle brackets like <html>.

Most HTML tags come in pairs - an opening tag and a closing tag, like <p> and </p>.`,
    example: `<!DOCTYPE html>
<html>
<head>
    <title>My First Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is my first HTML page.</p>
</body>
</html>`,
    exercise: 'Create a basic HTML page with a title "My Learning Journey" and a paragraph saying "I am learning HTML!"',
    exerciseAnswer: `<!DOCTYPE html>
<html>
<head>
    <title>My Learning Journey</title>
</head>
<body>
    <p>I am learning HTML!</p>
</body>
</html>`
  },
  {
    id: 2,
    title: 'Headings',
    description: 'Learn how to use HTML headings (h1-h6)',
    category: 'text',
    difficulty: 'beginner',
    content: `HTML headings are defined with the <h1> to <h6> tags.

<h1> defines the most important heading. <h6> defines the least important heading.

Search engines use headings to index the structure and content of your web pages. Users often skim a page by its headings, so it's important to use them to show the document structure.`,
    example: `<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Smaller Subheading</h3>
<h4>Even Smaller</h4>
<h5>Smaller Still</h5>
<h6>Smallest Heading</h6>`,
    exercise: 'Create a page with a main heading "My Website", a subheading "About Me", and another subheading "My Hobbies"',
    exerciseAnswer: `<h1>My Website</h1>
<h2>About Me</h2>
<h2>My Hobbies</h2>`
  },
  {
    id: 3,
    title: 'Paragraphs',
    description: 'Learn how to create paragraphs in HTML',
    category: 'text',
    difficulty: 'beginner',
    content: `The HTML <p> tag defines a paragraph. Browsers automatically add some space (margin) before and after each <p> element.

Paragraphs are block-level elements, meaning they start on a new line and take up the full width available.`,
    example: `<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
<p>Paragraphs can contain multiple sentences. They will wrap automatically based on the width of the browser window.</p>`,
    exercise: 'Create three paragraphs introducing yourself',
    exerciseAnswer: `<p>Hello! My name is John.</p>
<p>I am learning web development.</p>
<p>I enjoy coding and creating websites.</p>`
  },
  {
    id: 4,
    title: 'Text Formatting',
    description: 'Learn how to format text using HTML tags',
    category: 'text',
    difficulty: 'beginner',
    content: `HTML provides several tags for text formatting:

<b> - Bold text
<strong> - Important text (semantically bold)
<i> - Italic text
<em> - Emphasized text (semantically italic)
<mark> - Marked/highlighted text
<small> - Smaller text
<del> - Deleted text (strikethrough)
<ins> - Inserted text (underlined)
<sub> - Subscript text
<sup> - Superscript text`,
    example: `<p>This is <b>bold</b> text.</p>
<p>This is <strong>important</strong> text.</p>
<p>This is <i>italic</i> text.</p>
<p>This is <em>emphasized</em> text.</p>
<p>This is <mark>highlighted</mark> text.</p>
<p>H<sub>2</sub>O is water.</p>
<p>E = mc<sup>2</sup></p>`,
    exercise: 'Create a paragraph with bold, italic, and highlighted text',
    exerciseAnswer: `<p>This is <b>bold</b>, this is <i>italic</i>, and this is <mark>highlighted</mark>.</p>`
  },
  {
    id: 5,
    title: 'Links',
    description: 'Learn how to create hyperlinks in HTML',
    category: 'links',
    difficulty: 'beginner',
    content: `HTML links are defined with the <a> tag. The link's destination is specified in the href attribute.

Links can point to:
- Other web pages
- Sections within the same page
- Email addresses
- Files to download

The target attribute specifies where to open the linked document.`,
    example: `<a href="https://www.example.com">Visit Example.com</a>
<a href="https://www.example.com" target="_blank">Open in new tab</a>
<a href="mailto:someone@example.com">Send Email</a>
<a href="#section2">Go to Section 2</a>`,
    exercise: 'Create a link to Google that opens in a new tab',
    exerciseAnswer: `<a href="https://www.google.com" target="_blank">Visit Google</a>`
  },
  {
    id: 6,
    title: 'Images',
    description: 'Learn how to add images to your web pages',
    category: 'images',
    difficulty: 'beginner',
    content: `HTML images are defined with the <img> tag. The <img> tag is empty - it contains attributes only and has no closing tag.

Important attributes:
- src: Specifies the path to the image
- alt: Specifies alternate text for the image
- width: Specifies the width of the image
- height: Specifies the height of the image

Always provide alt text for accessibility and SEO.`,
    example: `<img src="picture.jpg" alt="A beautiful landscape">
<img src="logo.png" alt="Company Logo" width="100" height="50">
<img src="https://example.com/image.jpg" alt="Remote image">`,
    exercise: 'Create an image tag with src="photo.jpg", alt text "My photo", and width of 300',
    exerciseAnswer: `<img src="photo.jpg" alt="My photo" width="300">`
  },
  {
    id: 7,
    title: 'Unordered Lists',
    description: 'Learn how to create bullet point lists',
    category: 'lists',
    difficulty: 'beginner',
    content: `An unordered list starts with the <ul> tag. Each list item starts with the <li> tag.

The list items will be marked with bullets (small black circles) by default.

You can nest lists inside other lists to create sublists.`,
    example: `<ul>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
</ul>

<ul>
    <li>Fruits
        <ul>
            <li>Apples</li>
            <li>Bananas</li>
        </ul>
    </li>
    <li>Vegetables</li>
</ul>`,
    exercise: 'Create an unordered list of three of your favorite foods',
    exerciseAnswer: `<ul>
    <li>Pizza</li>
    <li>Pasta</li>
    <li>Ice Cream</li>
</ul>`
  },
  {
    id: 8,
    title: 'Ordered Lists',
    description: 'Learn how to create numbered lists',
    category: 'lists',
    difficulty: 'beginner',
    content: `An ordered list starts with the <ol> tag. Each list item starts with the <li> tag.

The list items will be marked with numbers by default.

You can customize the numbering using the type attribute:
- type="1": Numbers (default)
- type="A": Uppercase letters
- type="a": Lowercase letters
- type="I": Uppercase Roman numerals
- type="i": Lowercase Roman numerals`,
    example: `<ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>

<ol type="A">
    <li>Item A</li>
    <li>Item B</li>
    <li>Item C</li>
</ol>`,
    exercise: 'Create an ordered list of the steps to make a sandwich',
    exerciseAnswer: `<ol>
    <li>Get two slices of bread</li>
    <li>Add your favorite filling</li>
    <li>Put the slices together</li>
</ol>`
  },
  {
    id: 9,
    title: 'Tables',
    description: 'Learn how to create tables in HTML',
    category: 'tables',
    difficulty: 'intermediate',
    content: `HTML tables allow you to arrange data into rows and columns.

Key table tags:
- <table>: Defines the table
- <tr>: Defines a table row
- <th>: Defines a table header
- <td>: Defines a table cell

Tables can have borders, padding, and spacing controlled with CSS.`,
    example: `<table border="1">
    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>John</td>
        <td>25</td>
    </tr>
    <tr>
        <td>Jane</td>
        <td>30</td>
    </tr>
</table>`,
    exercise: 'Create a table with 2 columns (Fruit, Color) and 3 rows of data',
    exerciseAnswer: `<table border="1">
    <tr>
        <th>Fruit</th>
        <th>Color</th>
    </tr>
    <tr>
        <td>Apple</td>
        <td>Red</td>
    </tr>
    <tr>
        <td>Banana</td>
        <td>Yellow</td>
    </tr>
</table>`
  },
  {
    id: 10,
    title: 'Forms',
    description: 'Learn how to create forms for user input',
    category: 'forms',
    difficulty: 'intermediate',
    content: `HTML forms are used to collect user input. The <form> element is used to create an HTML form.

Common form elements:
- <input>: Creates various types of input fields
- <textarea>: Creates a multiline text input
- <select>: Creates a dropdown list
- <button>: Creates a clickable button
- <label>: Defines a label for form elements`,
    example: `<form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">

    <label for="email">Email:</label>
    <input type="email" id="email" name="email">

    <button type="submit">Submit</button>
</form>`,
    exercise: 'Create a simple form with name and password fields',
    exerciseAnswer: `<form>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username">

    <label for="password">Password:</label>
    <input type="password" id="password" name="password">

    <button type="submit">Login</button>
</form>`
  },
  {
    id: 11,
    title: 'Divs and Spans',
    description: 'Learn about container elements',
    category: 'advanced',
    difficulty: 'intermediate',
    content: `<div> and <span> are container elements used to group other HTML elements.

<div> is a block-level element:
- Starts on a new line
- Takes up the full width available
- Used to group larger sections

<span> is an inline element:
- Doesn't start on a new line
- Only takes up as much width as necessary
- Used to group small portions of text`,
    example: `<div style="background-color: lightblue;">
    <h2>This is a div</h2>
    <p>It groups block-level content.</p>
</div>

<p>This is a <span style="color: red;">span</span> element inside a paragraph.</p>`,
    exercise: 'Create a div with a heading and paragraph inside it',
    exerciseAnswer: `<div>
    <h2>My Section</h2>
    <p>This is content inside the div.</p>
</div>`
  },
  {
    id: 12,
    title: 'Semantic HTML',
    description: 'Learn about semantic HTML5 elements',
    category: 'advanced',
    difficulty: 'advanced',
    content: `Semantic HTML elements clearly describe their meaning to both the browser and the developer.

Key semantic elements:
- <header>: Defines a header for a document or section
- <nav>: Defines navigation links
- <main>: Specifies the main content
- <article>: Defines independent, self-contained content
- <section>: Defines a section in a document
- <aside>: Defines content aside from the main content
- <footer>: Defines a footer for a document or section`,
    example: `<header>
    <h1>My Website</h1>
    <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
    </nav>
</header>

<main>
    <article>
        <h2>Article Title</h2>
        <p>Article content...</p>
    </article>
</main>

<footer>
    <p>Copyright 2024</p>
</footer>`,
    exercise: 'Create a semantic page structure with header, main, and footer',
    exerciseAnswer: `<header>
    <h1>My Blog</h1>
</header>

<main>
    <article>
        <h2>My First Post</h2>
        <p>This is my first blog post.</p>
    </article>
</main>

<footer>
    <p>Contact: email@example.com</p>
</footer>`
  }
];
