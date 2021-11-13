# A simply notes app

<p>This is a project from <a href="https://www.udemy.com/course/the-complete-nodejs-developer-course-2/">The complete Node.js Developer Course</a> - section 04.</p>
<br>

## How does it works?

#### **1st -** You need to clone this repository.

#### **2nd -** Open the project and run ` yarn` to install all dependencies.

#### **3rd -** You can now type `yarn command --help` on your terminal to see all the commands available. Of course, you can always see the commands down bellow as well.

<br>

Everytime you wish to run a command you shall type `yarn command nameOfTheCommand --nameOfTheArgument="value"`

<br>

## List of commands

---

### **add**

<br>

**Description**: adds a new note
<br>
**Params**:<br>
--title | string | required<br>
--body | string | required

---

### **remove**

<br>

**Description**: remove a note
<br>
**Params**:<br>
--title | string | required

---

### **list**

<br>

**Description**: list all notes
<br>
**Params**:<br>
none

---

### **read**

<br>

**Description**: Read a note
<br>
**Params**:<br>
--title | string | required

---

<br>

## Usage example:

```bash
> yarn command add --title="My first note" --body="A note made for the purpose of demonstration"
```

Output:

```
---------------

New note added!

---------------

Title:  My first note
Body:  A note made for the purpose of demonstration
```
