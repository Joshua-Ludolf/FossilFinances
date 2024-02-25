import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from flask import jsonify
import pywhatkit
from datetime import datetime, timedelta

# Use a service account.
cred = credentials.Certificate('service_account.json')

app = firebase_admin.initialize_app(cred)

db = firebase_admin.firestore.client()

data = [{'remote-account':'', 'time': datetime.now(), 'amount': 0, 'label': 'Account created.'}, {'remote-account': '', 'time': datetime.now(), 'amount': 1000, 'label': 'Deposit funds'}]

doc = db.collection('fin-accounts-dev').add({
    'amount': 1000,
    'name': 'Checking',
    'transactions': data

})


def get_info(user_id):
    # Get the document reference from the accounts collection
    doc_ref = db.collection("users").document(user_id)
    doc = doc_ref.get()

    # Check if the document exists
    if doc.exists:
        # Get the document snapshot
        dict = doc.to_dict()
        print(f"Users: {dict}")
        # Convert the document to a dictionary and jsonify it
        return jsonify('Users: ' + str(dict))
    else:
        print("No such document!")
        return 'Error'


def get_certain_account_info(user_id):
    # Check if user_id is provided and valid
    if user_id:
        # Get the document reference from the accounts collection
        doc_ref = db.collection('fin-accounts').document(user_id)
        # Check if the document exists
        if doc_ref:
            # Get the document snapshot
            account = doc_ref.get()
            account_info = account.to_dict()
            # Convert the document to a dictionary and jsonify it
            print('Account Details: ' + str(account_info))
            return jsonify('Account Details: ' + str(account_info))
        else:
            # Return an error message if the document does not exist
            return 'No such document!'
    else:
        # Return an error message if user_id is missing or invalid
        return 'Invalid user_id!'


def account_update(user_id, account):
    doc_ref1 = db.collection("users").document(user_id)
    doc = doc_ref1.get()
    if not doc.exists:
        return "User does not exist."
    doc_data1 = doc.to_dict()

    doc_ref2 = db.collection('fin-accounts-dev').document(account).get()
    if not doc_ref2.exists:
        return "Financial account does not exist."
    doc_data2 = doc_ref2.to_dict()

    # Get the user's phone number from the doc_data
    if 'phone' not in doc_data1:
        return "Phone number not found."
    user_phone = '+1' + doc_data1['phone']
    # Format the message content with the transaction details
    message = (f"Hello, your account has been updated with a {doc_data2['transactions'][0]['label']} of "
               + f"${doc_data2['transactions'][0]['amount']}. The "
               + f"transaction time was {doc_data2['transactions'][0]['time']}. Thank you for choosing us.")

    # Get the current time and add a few minutes to send the message
    now = datetime.now()
    future = now + timedelta(minutes=1)
    hours = future.hour
    minutes = future.minute

    # Send the message using pywhatkit
    pywhatkit.sendwhatmsg(user_phone, message, hours, minutes)

    # Return a success message
    return "Message sent successfully!"
