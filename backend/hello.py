from flask import Flask, render_template, session, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.exc import SQLAlchemyError
from datetime import timedelta

from dotenv import load_dotenv
import os

load_dotenv()

HOST = os.getenv("DB_HOST")
USER = os.getenv("DB_USER")
PASSWORD = os.getenv("DB_PASSWORD")
DB_NAME = os.getenv("DB_NAME")
DB = os.getenv("DB_NAME")

DATABASE_URL = f'mysql+pymysql://{USER}:{PASSWORD}@{HOST}/{DB_NAME}'

app = Flask(__name__, template_folder='../frontend/templates')
app.secret_key = os.getenv("SECRET_KEY", "hello")

app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.permanent_session_lifetime = timedelta(minutes=5)

db = SQLAlchemy(app)

class users(db.Model):
    __tablename__ = 'users'

    studentID = db.Column(db.String(11), primary_key=True, nullable=False, unique=True)
    password = db.Column(db.String(12), nullable=False)
    firstName = db.Column(db.String(20), nullable=False)
    lastName = db.Column(db.String(20), nullable=False)

@app.route('/')
def hello_world():
    return "Hello, Hachiko!"

@app.route('/roberto')
def hello_roberto():
    return "Hello, Roberto!"

@app.route('/register', methods=['POST', 'GET'])
def register():
    if request.method == 'POST':
        studentID = request.form['studentID']
        firstName = request.form['firstName']
        lastName = request.form['lastName']
        password = request.form['password']

        new_user = users(studentID=studentID, password=password, firstName=firstName, lastName=lastName)

        try:
            db.session.add(new_user)
            db.session.commit()
            return "User registered successfully!"
        except SQLAlchemyError as e:
            db.session.rollback()
            return f"There was an issue registering the user: {str(e)}"
        
    return render_template('register.html')

@app.route('/login')
def login():

    return render_template('login.html')

if __name__ == '__main__':
    app.run(debug=True)