import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from flask import jsonify

import json

# Use a service account.
cred = credentials.Certificate('service_account.json')

app = firebase_admin.initialize_app(cred)

db = firestore.client()


def get_info(user_id):
    doc_ref = db.collection("users").document(user_id)

    doc = doc_ref.get()
    if doc.exists:
        dict = doc.to_dict()
        print(f"Users: {dict}")
        return jsonify('Users: ' + str(dict))
    else:
        print("No such document!")
        return 'Error'
