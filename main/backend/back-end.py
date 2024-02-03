import os
from flask import Flask, render_template, request, redirect, url_for, flash


app = Flask("Different Brushes Test")

@app.route("/")
def index():
    return render_template("index.html")

# The converter will first get the normal image, then grayscale it, then erase all pieces that are entirely white, then convert it to a 1-bit image (black), and then save it as a .cebt file (basically PNG but with a different extension)
@app.route('/converter', methods=['GET', 'POST'])
def TodoMaker():
    if request.method == 'POST':
        # Get the image from the form
        todo = request.files['Todo']
        # Create the directory if it doesn't exist
        os.makedirs('main/backend', exist_ok=True)
        # Save the image to the server
        todo.save('main/backend/todo.txt')
        

@app.route('/index')
def main():
    return render_template('index.html')

def nameUrTodo():
    return render_template("nameUrTodo.html")

# The converter will first get the normal image, then grayscale it, then erase all pieces that are entirely white, then convert it to a 1-bit image (black), and then save it as a .cebt file (basically PNG but with a different extension)
@app.route('/converter', methods=['GET', 'POST'])
def nameUrTodo():
    if request.method == 'POST':
        # Get the image from the form
        todo = request.files['Todo']
        # Create the directory if it doesn't exist
        os.makedirs('main/backend', exist_ok=True)
        # Save the image to the server
        todo.save('main/backend/todo.txt')
        
@app.route('/nameTodo')
def main1():
    return render_template('nameUrTodo.html')


def createTodo():
    return render_template("creationPlace.html")

# The converter will first get the normal image, then grayscale it, then erase all pieces that are entirely white, then convert it to a 1-bit image (black), and then save it as a .cebt file (basically PNG but with a different extension)
@app.route('/converter', methods=['GET', 'POST'])
def createTodo():
    if request.method == 'POST':
        # Get the image from the form
        todo = request.files['Todo']
        # Create the directory if it doesn't exist
        os.makedirs('main/backend', exist_ok=True)
        # Save the image to the server
        todo.save('main/backend/todo.txt')
        
@app.route('/createTodo')
def main2():
    return render_template('creationPlace.html')
app.run('0.0.0.0', 2024, debug=True)
