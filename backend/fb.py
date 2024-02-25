import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from flask import jsonify

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


def get_certain_account_info(user_id):
    # Get the user_id from the query string
    # Check if user_id is provided and valid
    if user_id:
        user_doc_ref = db.collection('users').document(user_id)
        if not user_doc_ref:
            return 'User document does not exist.'
        user = user_doc_ref.get().to_dict()
        accounts = user['accounts']
        account_infos = {}
        for acct in accounts:
            # Get the document reference from the accounts collection
            doc_ref = db.collection('fin-accounts').document(acct)
            # Check if the document exists
            if doc_ref:
                # Get the document snapshot
                account = doc_ref.get()
                account_info = account.to_dict()
                # Convert the document to a dictionary and jsonify it
                #return jsonify(str(account_info))
                account_infos[acct] = account_info
            else:
                # Return an error message if the document does not exist
                return 'No such document!'
        user['accounts'] = account_infos
        return jsonify(user)
    else:
        # Return an error message if user_id is missing or invalid
        return 'Invalid user_id!'
