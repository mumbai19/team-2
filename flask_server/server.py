from flask import Flask
from flask import request
import numpy as np 
import pandas as pd
from flask import jsonify

#Machine Learning packages
from sklearn.svm import SVC
from sklearn.preprocessing import LabelEncoder, StandardScaler

#Suppress warnings
import warnings
warnings.filterwarnings('ignore')

import pickle
import sys
from io import StringIO
from flask_mail import Mail, Message
import os

app = Flask(__name__)

mail_settings = {
    "MAIL_SERVER": 'smtp.gmail.com',
    "MAIL_PORT": 465,
    "MAIL_USE_TLS": False,
    "MAIL_USE_SSL": True,
    "MAIL_USERNAME": os.environ['EMAIL_USERNAME'],
    "MAIL_PASSWORD": os.environ['EMAIL_PASSWORD']
}
print(os.environ['EMAIL_USERNAME'], os.environ['EMAIL_PASSWORD'])

app.config.update(mail_settings)
mail = Mail(app)

# @app.route('/hello')
# def hello():
#     return "hello"
@app.route('/getRecommendations', methods=['POST'])
def getRecommendations():
    price = request.form['price']
    color = request.form['color']
    category_id = request.form['category_id']
    data_string = ','.join([price, color, category_id])
    data = pd.read_csv(StringIO(data_string.strip(',')), header=None)
    data.columns = ['price', 'color', 'category_id']
    print(data.shape, '\n', '\n')
    label_enc_city = pickle.load(open('./ML/city_label_enc.encoder', 'rb'))
    label_enc_gender = pickle.load(open('./ML/gender_label_enc.encoder', 'rb'))
    scaler_X = pickle.load(open('./ML/scaler_X.scaler', 'rb'))
    age_model = pickle.load(open('./ML/age_CalibratedSVC.model', 'rb'))
    gender_model = pickle.load(open('./ML/gender_CalibratedKNN.model', 'rb'))
    city_model = pickle.load(open('./ML/city_CalibratedSVC.model', 'rb'))
    data = scaler_X.transform(data)
    age_pred = age_model.predict(data)
    gender_pred = gender_model.predict(data)
    city_pred = city_model.predict(data)
    # print(age_pred, gender_pred, city_pred)
    response_dict = {
        'age': str(age_pred[0]),
        'gender': str(label_enc_gender.inverse_transform(gender_pred)[0]),
        'city': str(label_enc_city.inverse_transform(city_pred)[0])
    }
    getEmails(response_dict)
    return jsonify(response_dict)

def getEmails(customer_dict):
    # Get emails of cutomers from DB
    # age = customer_dict['age']
    # if(age==1):
    #     age_min=20
    #     age_max=29
    # elif(age==2):
    #     age_min=30
    #     age_max=39
    # elif(age==3):
    #     age_min=40
    #     age_max=49
    # elif(age==4):
    #     age_min=50
    #     age_max=60
    # SELECT email from customer WHERE gender=customer_dict['gender'] AND city=customer_dict['city'] AND age BETWEEN age_min AND age_max
    send_emails([os.environ['EMAIL_USERNAME'].strip('"')])

def send_emails(email_list_of_users):
    global mail
    msg = Message(subject="Trishul's new product!", recipients=email_list_of_users, body="You will definitely love Trishul's latest launch", html=open('../email_campaign/email_inlined.txt', 'r').read(),sender="trishul@trishul-ngo.org")
    mail.send(msg)
