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

app = Flask(__name__)
@app.route('/hello')
def hello():
    return "hello"
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
    return jsonify(response_dict)
