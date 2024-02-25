from flask import Flask, jsonify, request, abort
from flask_cors import CORS, cross_origin

import fb

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.route('/message', methods=['GET'])
@cross_origin()
def get_data():
    # get the number and message from the query parameters
    number = request.form.get('number')
    message = request.form.get('message')
    # validate the inputs
    if not number or not message:
        abort(400, 'Invalid inputs')
    # send the message using pywhatkit
    try:
        import pywhatkit
        pywhatkit.sendwhatmsg_instantly('+1' + number.rstrip('-'), message, 10)
        return jsonify({'success': 'Message sent'})
    except Exception as e:
        abort(500, str(e))


# POST ROUTE OF ACCOUNT INFO
@app.route('/account-info', methods=['GET'])
@cross_origin()
def get_certain_info():
    return fb.get_certain_account_info(request.args.get('user_id'))


# GET ROUTE OF ACCOUNT INFO
@app.route('/account_info/')
@cross_origin()
def get_account_info():
    return fb.get_info('YC37Tj0R4AbgOJdduyi4iSUbGPH2')


@app.route('/')
@cross_origin()
def welcome():
    data = {'message': 'Hello from Flask'}
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True)
